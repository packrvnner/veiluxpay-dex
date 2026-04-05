import { ChainId } from '@pancakeswap/chains';
import { Percent, Price, CurrencyAmount, ONE, ZERO, UnifiedCurrencyAmount } from '@pancakeswap/swap-sdk-core';
import { parseProtocolFeesToNumbers, getBinPoolTokenPrice, createBinPool, getSwapOut, getSwapIn } from '@pancakeswap/infinity-sdk';
import { logCurrency, toSerializableCurrency, toSerializableCurrencyAmount, parseCurrency, parseCurrencyAmount } from '@pancakeswap/routing-sdk';
import { TICK_SPACINGS, Tick, TickList, TickMath, SwapMath, LiquidityMath } from '@pancakeswap/v3-sdk';
import memoize from 'lodash/memoize.js';
import invariant from 'tiny-invariant';
import { getSwapOutput, getQuoteExactIn, getQuoteExactOut } from '@pancakeswap/stable-swap-sdk';
import { INFINITY_STABLE_POOL_FEE_DENOMINATOR } from '@pancakeswap/infinity-stable-sdk';

// src/constants/poolType.ts
var INFI_CL_POOL_TYPE = "InfinityCL";
var INFI_BIN_POOL_TYPE = "InfinityBIN";
var INFI_STABLE_POOL_TYPE = "InfinityStable";
var COST_PER_UNINIT_TICK = 0n;
var BASE_SWAP_COST_V3 = (id) => {
  switch (id) {
    case ChainId.BSC:
    case ChainId.BSC_TESTNET:
    case ChainId.ETHEREUM:
    case ChainId.GOERLI:
    case ChainId.ZKSYNC:
    case ChainId.ZKSYNC_TESTNET:
    case ChainId.ARBITRUM_ONE:
    case ChainId.OPBNB:
    case ChainId.OPBNB_TESTNET:
      return 2000n;
    default:
      return 0n;
  }
};
var COST_PER_INIT_TICK = (id) => {
  switch (id) {
    case ChainId.BSC:
    case ChainId.BSC_TESTNET:
    case ChainId.ETHEREUM:
    case ChainId.GOERLI:
    case ChainId.ZKSYNC:
    case ChainId.ZKSYNC_TESTNET:
    case ChainId.ARBITRUM_ONE:
    case ChainId.OPBNB:
    case ChainId.OPBNB_TESTNET:
      return 31000n;
    default:
      return 0n;
  }
};
var COST_PER_HOP_V3 = (id) => {
  switch (id) {
    case ChainId.BSC:
    case ChainId.BSC_TESTNET:
    case ChainId.ETHEREUM:
    case ChainId.GOERLI:
    case ChainId.ZKSYNC:
    case ChainId.ZKSYNC_TESTNET:
    case ChainId.ARBITRUM_ONE:
    case ChainId.OPBNB:
    case ChainId.OPBNB_TESTNET:
      return 80000n;
    default:
      return 0n;
  }
};
var BASE_SWAP_COST_STABLE_SWAP = 180000n;
var COST_PER_EXTRA_HOP_STABLE_SWAP = 70000n;
var NEGATIVE_ONE = BigInt(-1);
var Q96 = 2n ** 96n;
var Q192 = Q96 ** 2n;
var MAX_FEE = 10n ** 6n;
var ONE_HUNDRED_PERCENT = new Percent("1");
var ZERO_PERCENT = new Percent("0");
var Q128 = 2n ** 128n;
function getInfinityPoolFee(fee, protocolFee) {
  const pf = parseProtocolFeesToNumbers(protocolFee);
  return fee + (pf?.[0] ?? 0);
}

// src/utils/isInfinityBinPool.ts
function isInfinityBinPool(p) {
  return p.type === INFI_BIN_POOL_TYPE;
}
function isInfinityStablePool(p) {
  return p.type === INFI_STABLE_POOL_TYPE;
}

// src/utils/isInfinityCLPool.ts
function isInfinityCLPool(p) {
  return p.type === INFI_CL_POOL_TYPE;
}

// src/createInfinityBinPool.ts
function createInfinityBinPool(params) {
  let p = { ...params, type: INFI_BIN_POOL_TYPE };
  const pool = {
    type: INFI_BIN_POOL_TYPE,
    getReserve: (c) => p.currency0.wrapped.equals(c.wrapped) ? p.reserve0 ?? CurrencyAmount.fromRawAmount(p.currency0, 0n) : p.reserve1 ?? CurrencyAmount.fromRawAmount(p.currency1, 0n),
    getCurrentPrice: (base) => {
      return getBinPoolTokenPrice(
        {
          currencyX: p.currency0,
          currencyY: p.currency1,
          activeId: BigInt(p.activeId),
          binStep: BigInt(p.binStep)
        },
        base
      );
    },
    getTradingPairs: () => [[p.currency0, p.currency1]],
    getId: () => p.id,
    update: (poolData) => {
      p = { ...p, ...poolData };
    },
    log: () => `Infinity Bin ${p.currency0.symbol} - ${p.currency1.symbol} (${getInfinityPoolFee(p.fee, p.protocolFee)}) - ${p.id} - price ${getBinPoolTokenPrice(
      {
        currencyX: p.currency0,
        currencyY: p.currency1,
        activeId: BigInt(p.activeId),
        binStep: BigInt(p.binStep)
      },
      p.currency0
    ).toSignificant(6)} ${p.currency0.symbol}/${p.currency1.symbol}`,
    getPoolData: () => p,
    getQuote: ({ amount, isExactIn }) => {
      const { reserveOfBin } = p;
      if (!reserveOfBin) {
        return void 0;
      }
      try {
        const { currency0, currency1, binStep, activeId, fee, protocolFee } = p;
        const binPool = createBinPool({
          currencyA: currency0,
          currencyB: currency1,
          binStep,
          activeId,
          reserveOfBin,
          lpFee: fee,
          protocolFees: parseProtocolFeesToNumbers(protocolFee)
        });
        const result = isExactIn ? getSwapOut(binPool, amount.quotient, amount.currency.wrapped.equals(currency0.wrapped)) : getSwapIn(binPool, amount.quotient, amount.currency.wrapped.equals(currency1.wrapped));
        const quoteRaw = isExactIn ? result.amountOut : result.amountIn;
        if (quoteRaw <= 0n) {
          return void 0;
        }
        const quoteCurrency = amount.currency.wrapped.equals(currency0.wrapped) ? currency1 : currency0;
        const quote = CurrencyAmount.fromRawAmount(quoteCurrency, quoteRaw);
        const newPool = {
          ...p
        };
        return {
          poolAfter: createInfinityBinPool(newPool),
          quote,
          pool
        };
      } catch (e) {
        return void 0;
      }
    },
    estimateGasCostForQuote: () => {
      return 0n;
    }
  };
  return pool;
}
function createInfinityCLPool(params) {
  let p = { ...params, type: INFI_CL_POOL_TYPE };
  const tickSpacing = p.tickSpacing ?? TICK_SPACINGS[getInfinityPoolFee(p.fee, p.protocolFee)];
  invariant(Boolean(tickSpacing) === true, "Invalid fee for v3 pool");
  const pool = {
    type: INFI_CL_POOL_TYPE,
    getReserve: (c) => p.currency0.wrapped.equals(c.wrapped) ? p.reserve0 ?? CurrencyAmount.fromRawAmount(p.currency0, 0n) : p.reserve1 ?? CurrencyAmount.fromRawAmount(p.currency1, 0n),
    getCurrentPrice: (base) => {
      return priceOf(p, base.wrapped);
    },
    getTradingPairs: () => [[p.currency0, p.currency1]],
    getId: () => p.id,
    update: (poolData) => {
      p = { ...p, ...poolData };
    },
    log: () => `Infinity CL ${p.currency0.symbol} - ${p.currency1.symbol} (${getInfinityPoolFee(p.fee, p.protocolFee)}) - ${p.id} - price ${token0Price(p).toSignificant(6)} ${p.currency0.symbol}/${p.currency1.symbol}`,
    getPoolData: () => p,
    getQuote: ({ amount, isExactIn }) => {
      const { ticks } = p;
      if (!ticks?.length) {
        return void 0;
      }
      try {
        const [quote, poolAfter] = isExactIn ? getOutputAmount(amount.wrapped, p) : getInputAmount(amount.wrapped, { ...p, exactOut: true });
        if (quote.quotient <= 0n) {
          return void 0;
        }
        const { tick: tickAfter } = poolAfter;
        const newPool = {
          ...p,
          tick: tickAfter,
          sqrtRatioX96: poolAfter.sqrtRatioX96,
          liquidity: poolAfter.liquidity
        };
        return {
          poolAfter: createInfinityCLPool(newPool),
          quote,
          pool
        };
      } catch (e) {
        return void 0;
      }
    },
    estimateGasCostForQuote: ({ poolAfter }) => {
      const { tick, ticks, currency0 } = p;
      const { chainId } = currency0;
      const { tick: tickAfter } = poolAfter.getPoolData();
      invariant(ticks !== void 0, "[Estimate gas]: No valid tick list found");
      const numOfTicksCrossed = TickList.countInitializedTicksCrossed(ticks, tick, tickAfter);
      const tickGasUse = COST_PER_INIT_TICK(chainId) * BigInt(numOfTicksCrossed);
      return BASE_SWAP_COST_V3(chainId) + COST_PER_HOP_V3(chainId) + tickGasUse;
    }
  };
  return pool;
}
var token0Price = memoize(
  ({
    currency0,
    currency1,
    sqrtRatioX96
  }) => {
    return new Price(currency0, currency1, Q192, sqrtRatioX96 * sqrtRatioX96);
  },
  ({ currency0, currency1, sqrtRatioX96 }) => `${logCurrency(currency0)}_${logCurrency(currency1)}_${sqrtRatioX96}`
);
var token1Price = memoize(
  ({
    currency0,
    currency1,
    sqrtRatioX96
  }) => {
    return new Price(currency1, currency0, sqrtRatioX96 * sqrtRatioX96, Q192);
  },
  ({ currency0, currency1, sqrtRatioX96 }) => `${logCurrency(currency0)}_${logCurrency(currency1)}_${sqrtRatioX96}`
);
function priceOf(p, token) {
  invariant(involvesToken(p, token), "TOKEN");
  return token.wrapped.equals(p.currency0.wrapped) ? token0Price(p) : token1Price(p);
}
function involvesToken(p, token) {
  return token.wrapped.equals(p.currency0.wrapped) || token.wrapped.equals(p.currency1.wrapped);
}
function getOutputAmount(inputAmount, { sqrtPriceLimitX96, ...pool }) {
  invariant(involvesToken(pool, inputAmount.currency), "TOKEN");
  const fee = getInfinityPoolFee(pool.fee, pool.protocolFee);
  const tickSpacing = pool.tickSpacing ?? TICK_SPACINGS[fee];
  invariant(!!tickSpacing, "Invalid tick spacing");
  const zeroForOne = inputAmount.currency.equals(pool.currency0.wrapped);
  const {
    amountCalculated: outputAmount,
    sqrtRatioX96,
    liquidity,
    tickCurrent
  } = swap({
    ...pool,
    fee,
    tickSpacing,
    amountSpecified: inputAmount.quotient,
    zeroForOne,
    sqrtPriceLimitX96
  });
  const outputToken = zeroForOne ? pool.currency1 : pool.currency0;
  return [
    CurrencyAmount.fromRawAmount(outputToken, outputAmount * NEGATIVE_ONE),
    {
      ...pool,
      sqrtRatioX96,
      liquidity,
      tick: tickCurrent
    }
  ];
}
function getInputAmount(outputAmount, { sqrtPriceLimitX96, exactOut, ...pool }) {
  invariant(outputAmount.currency.isToken && involvesToken(pool, outputAmount.currency), "TOKEN");
  const protocolFee = parseProtocolFeesToNumbers(pool.protocolFee);
  const fee = pool.fee + (protocolFee?.[0] ?? 0);
  const tickSpacing = pool.tickSpacing ?? TICK_SPACINGS[fee];
  invariant(!!tickSpacing, "Invalid tick spacing");
  const zeroForOne = outputAmount.currency.equals(pool.currency1.wrapped);
  const {
    amountSpecifiedRemaining,
    amountCalculated: inputAmount,
    sqrtRatioX96,
    liquidity,
    tickCurrent
  } = swap({
    ...pool,
    fee,
    tickSpacing,
    amountSpecified: outputAmount.quotient * NEGATIVE_ONE,
    zeroForOne,
    sqrtPriceLimitX96
  });
  if (exactOut) {
    invariant(amountSpecifiedRemaining === 0n, "INSUFFICIENT_LIQUIDITY_EXACT_OUT");
  }
  const inputToken = zeroForOne ? pool.currency0 : pool.currency1;
  return [
    CurrencyAmount.fromRawAmount(inputToken, inputAmount),
    {
      ...pool,
      sqrtRatioX96,
      liquidity,
      tick: tickCurrent
    }
  ];
}
function swap({
  fee,
  tickSpacing,
  ticks,
  tick: tickCurrent,
  liquidity,
  sqrtRatioX96,
  zeroForOne,
  amountSpecified,
  sqrtPriceLimitX96
}) {
  invariant(ticks !== void 0, "[Swap]: No valid tick list found");
  if (!sqrtPriceLimitX96)
    sqrtPriceLimitX96 = zeroForOne ? TickMath.MIN_SQRT_RATIO + ONE : TickMath.MAX_SQRT_RATIO - ONE;
  if (zeroForOne) {
    invariant(sqrtPriceLimitX96 > TickMath.MIN_SQRT_RATIO, "RATIO_MIN");
    invariant(sqrtPriceLimitX96 < sqrtRatioX96, "RATIO_CURRENT");
  } else {
    invariant(sqrtPriceLimitX96 < TickMath.MAX_SQRT_RATIO, "RATIO_MAX");
    invariant(sqrtPriceLimitX96 > sqrtRatioX96, "RATIO_CURRENT");
  }
  const exactInput = amountSpecified >= ZERO;
  const state = {
    amountSpecifiedRemaining: amountSpecified,
    amountCalculated: ZERO,
    sqrtPriceX96: sqrtRatioX96,
    tick: tickCurrent,
    liquidity
  };
  while (state.amountSpecifiedRemaining !== ZERO && state.sqrtPriceX96 !== sqrtPriceLimitX96) {
    const step = {};
    step.sqrtPriceStartX96 = state.sqrtPriceX96;
    [step.tickNext, step.initialized] = TickList.nextInitializedTickWithinOneWord(
      ticks,
      state.tick,
      zeroForOne,
      tickSpacing
    );
    if (step.tickNext < TickMath.MIN_TICK) {
      step.tickNext = TickMath.MIN_TICK;
    } else if (step.tickNext > TickMath.MAX_TICK) {
      step.tickNext = TickMath.MAX_TICK;
    }
    step.sqrtPriceNextX96 = TickMath.getSqrtRatioAtTick(step.tickNext);
    [state.sqrtPriceX96, step.amountIn, step.amountOut, step.feeAmount] = SwapMath.computeSwapStep(
      state.sqrtPriceX96,
      (zeroForOne ? step.sqrtPriceNextX96 < sqrtPriceLimitX96 : step.sqrtPriceNextX96 > sqrtPriceLimitX96) ? sqrtPriceLimitX96 : step.sqrtPriceNextX96,
      state.liquidity,
      state.amountSpecifiedRemaining,
      fee
    );
    if (exactInput) {
      state.amountSpecifiedRemaining -= step.amountIn + step.feeAmount;
      state.amountCalculated = state.amountCalculated - step.amountOut;
    } else {
      state.amountSpecifiedRemaining = state.amountSpecifiedRemaining + step.amountOut;
      state.amountCalculated = state.amountCalculated + (step.amountIn + step.feeAmount);
    }
    if (state.sqrtPriceX96 === step.sqrtPriceNextX96) {
      if (step.initialized) {
        let liquidityNet = BigInt(TickList.getTick(ticks, step.tickNext).liquidityNet);
        if (zeroForOne)
          liquidityNet *= NEGATIVE_ONE;
        state.liquidity = LiquidityMath.addDelta(state.liquidity, liquidityNet);
      }
      state.tick = zeroForOne ? step.tickNext - 1 : step.tickNext;
    } else if (state.sqrtPriceX96 !== step.sqrtPriceStartX96) {
      state.tick = TickMath.getTickAtSqrtRatio(state.sqrtPriceX96);
    }
  }
  return {
    amountSpecifiedRemaining: state.amountSpecifiedRemaining,
    amountCalculated: state.amountCalculated,
    sqrtRatioX96: state.sqrtPriceX96,
    liquidity: state.liquidity,
    tickCurrent: state.tick
  };
}

// ../../../utils/viem/parseUnits.ts
function parseUnits(value, decimals) {
  let [integer, fraction = "0"] = value.split(".");
  const negative = integer.startsWith("-");
  if (negative)
    integer = integer.slice(1);
  fraction = fraction.replace(/(0+)$/, "");
  if (decimals === 0) {
    if (Math.round(Number(`.${fraction}`)) === 1)
      integer = `${BigInt(integer) + 1n}`;
    fraction = "";
  } else if (fraction.length > decimals) {
    const [left, unit, right] = [
      fraction.slice(0, decimals - 1),
      fraction.slice(decimals - 1, decimals),
      fraction.slice(decimals)
    ];
    const rounded = Math.round(Number(`${unit}.${right}`));
    if (rounded > 9)
      fraction = `${BigInt(left) + BigInt(1)}0`.padStart(left.length + 1, "0");
    else
      fraction = `${left}${rounded}`;
    if (fraction.length > decimals) {
      fraction = fraction.slice(1);
      integer = `${BigInt(integer) + 1n}`;
    }
    fraction = fraction.slice(0, decimals);
  } else {
    fraction = fraction.padEnd(decimals, "0");
  }
  return BigInt(`${negative ? "-" : ""}${integer}${fraction}`);
}

// ../../../utils/tryParseAmount.ts
function tryParseAmount(value, currency) {
  if (!value || !currency) {
    return void 0;
  }
  try {
    const typedValueParsed = parseUnits(value, currency.decimals).toString();
    if (typedValueParsed !== "0") {
      if ("chainId" in currency && !("programId" in currency)) {
        return CurrencyAmount.fromRawAmount(currency, BigInt(typedValueParsed));
      }
      return UnifiedCurrencyAmount.fromRawAmount(currency, BigInt(typedValueParsed));
    }
  } catch (error) {
    console.debug(`Failed to parse input amount: "${value}"`, error);
  }
  return void 0;
}
var tryParseAmount_default = tryParseAmount;
function createInfinityStablePool(params) {
  let p = { ...params, type: INFI_STABLE_POOL_TYPE };
  const pool = {
    type: INFI_STABLE_POOL_TYPE,
    getReserve: (c) => p.currency0.wrapped.equals(c.wrapped) ? p.reserve0 ?? CurrencyAmount.fromRawAmount(p.currency0, 0n) : p.reserve1 ?? CurrencyAmount.fromRawAmount(p.currency1, 0n),
    getCurrentPrice: (base, quote) => {
      const { amplifier, stableFee } = p;
      const baseIn = tryParseAmount_default("1", base);
      if (!baseIn) {
        throw new Error(`Cannot parse amount for ${base.symbol}`);
      }
      const reserve0 = p.reserve0 ?? CurrencyAmount.fromRawAmount(p.currency0, 0n);
      const reserve1 = p.reserve1 ?? CurrencyAmount.fromRawAmount(p.currency1, 0n);
      const balances = [reserve0, reserve1];
      const quoteOut = getSwapOutput({
        amplifier: BigInt(amplifier),
        balances,
        fee: new Percent(BigInt(stableFee), INFINITY_STABLE_POOL_FEE_DENOMINATOR),
        outputCurrency: quote,
        amount: baseIn
      });
      return new Price({
        baseAmount: baseIn,
        quoteAmount: quoteOut
      });
    },
    getTradingPairs: () => [[p.currency0, p.currency1]],
    getId: () => p.id,
    update: (poolData) => {
      p = { ...p, ...poolData };
    },
    log: () => `Infinity Stable ${p.currency0.symbol} - ${p.currency1.symbol} (${p.stableFee}) - ${p.id}`,
    getPoolData: () => p,
    getQuote: ({ amount, isExactIn, quoteCurrency }) => {
      const { amplifier, stableFee } = p;
      const reserve0 = p.reserve0 ?? CurrencyAmount.fromRawAmount(p.currency0, 0n);
      const reserve1 = p.reserve1 ?? CurrencyAmount.fromRawAmount(p.currency1, 0n);
      const balances = [reserve0, reserve1];
      const getQuote = isExactIn ? getQuoteExactIn : getQuoteExactOut;
      const [quote, { balances: newBalances }] = getQuote({
        amount,
        balances,
        amplifier: BigInt(amplifier),
        outputCurrency: quoteCurrency,
        fee: new Percent(BigInt(stableFee), INFINITY_STABLE_POOL_FEE_DENOMINATOR)
      });
      const newReserve0 = newBalances.find((b) => b.currency.wrapped.equals(p.currency0.wrapped));
      const newReserve1 = newBalances.find((b) => b.currency.wrapped.equals(p.currency1.wrapped));
      invariant(newReserve0 !== void 0 && newReserve1 !== void 0, "NO_RESERVE_FOUND");
      const newPoolData = { ...p, reserve0: newReserve0, reserve1: newReserve1 };
      return {
        poolAfter: createInfinityStablePool(newPoolData),
        quote,
        pool
      };
    },
    estimateGasCostForQuote: () => {
      return BASE_SWAP_COST_STABLE_SWAP + COST_PER_EXTRA_HOP_STABLE_SWAP;
    }
  };
  return pool;
}
function toSerializableBinPoolReserveOfBin(reserveOfBin) {
  if (!reserveOfBin)
    return void 0;
  const bins = Object.keys(reserveOfBin);
  const serialized = {};
  for (const bin of bins) {
    const reserves = reserveOfBin[Number(bin)];
    serialized[bin] = {
      reserveX: String(reserves.reserveX),
      reserveY: String(reserves.reserveY)
    };
  }
  return serialized;
}
function toSerializableTick(tick) {
  return {
    index: tick.index,
    liquidityNet: String(tick.liquidityNet),
    liquidityGross: String(tick.liquidityGross)
  };
}
function toSerializableInfinityCLPool(infinityCLPool) {
  const pool = infinityCLPool.getPoolData();
  return {
    ...pool,
    currency0: toSerializableCurrency(pool.currency0),
    currency1: toSerializableCurrency(pool.currency1),
    liquidity: pool.liquidity.toString(),
    sqrtRatioX96: pool.sqrtRatioX96.toString(),
    ticks: pool.ticks?.map(toSerializableTick),
    reserve0: pool.reserve0 && toSerializableCurrencyAmount(pool.reserve0),
    reserve1: pool.reserve1 && toSerializableCurrencyAmount(pool.reserve1)
  };
}
function toSerializableInfinityStablePool(infinityStablePool) {
  const pool = infinityStablePool.getPoolData();
  return {
    ...pool,
    id: pool.id,
    currency0: toSerializableCurrency(pool.currency0),
    currency1: toSerializableCurrency(pool.currency1),
    reserve0: pool.reserve0 && toSerializableCurrencyAmount(pool.reserve0),
    reserve1: pool.reserve1 && toSerializableCurrencyAmount(pool.reserve1)
  };
}
function toSerializableInfinityBinPool(infinityBinPool) {
  const pool = infinityBinPool.getPoolData();
  return {
    ...pool,
    currency0: toSerializableCurrency(pool.currency0),
    currency1: toSerializableCurrency(pool.currency1),
    reserveOfBin: toSerializableBinPoolReserveOfBin(pool.reserveOfBin),
    reserve0: pool.reserve0 && toSerializableCurrencyAmount(pool.reserve0),
    reserve1: pool.reserve1 && toSerializableCurrencyAmount(pool.reserve1)
  };
}
function parseTick(tick) {
  return new Tick(tick);
}
function parseInfinityCLPool(chainId, pool) {
  const poolData = {
    ...pool,
    currency0: parseCurrency(chainId, pool.currency0),
    currency1: parseCurrency(chainId, pool.currency1),
    liquidity: BigInt(pool.liquidity),
    sqrtRatioX96: BigInt(pool.sqrtRatioX96),
    ticks: pool.ticks?.map(parseTick),
    reserve0: pool.reserve0 && parseCurrencyAmount(chainId, pool.reserve0),
    reserve1: pool.reserve1 && parseCurrencyAmount(chainId, pool.reserve1)
  };
  return createInfinityCLPool(poolData);
}
function parseInfinityBinPoolReserveOfBins(reserveOfBin) {
  if (!reserveOfBin)
    return void 0;
  const bins = Object.keys(reserveOfBin);
  const parsed = {};
  for (const bin of bins) {
    const reserves = reserveOfBin[bin];
    parsed[Number(bin)] = {
      reserveX: BigInt(reserves.reserveX),
      reserveY: BigInt(reserves.reserveY)
    };
  }
  return parsed;
}
function parseInfinityBinPool(chainId, pool) {
  const poolData = {
    ...pool,
    currency0: parseCurrency(chainId, pool.currency0),
    currency1: parseCurrency(chainId, pool.currency1),
    reserveOfBin: parseInfinityBinPoolReserveOfBins(pool.reserveOfBin),
    reserve0: pool.reserve0 && parseCurrencyAmount(chainId, pool.reserve0),
    reserve1: pool.reserve1 && parseCurrencyAmount(chainId, pool.reserve1)
  };
  return createInfinityBinPool(poolData);
}
function parseInfinityStablePool(chainId, pool) {
  const poolData = {
    ...pool,
    currency0: parseCurrency(chainId, pool.currency0),
    currency1: parseCurrency(chainId, pool.currency1),
    reserve0: pool.reserve0 && parseCurrencyAmount(chainId, pool.reserve0),
    reserve1: pool.reserve1 && parseCurrencyAmount(chainId, pool.reserve1)
  };
  return createInfinityStablePool(poolData);
}

export { BASE_SWAP_COST_STABLE_SWAP, BASE_SWAP_COST_V3, COST_PER_EXTRA_HOP_STABLE_SWAP, COST_PER_HOP_V3, COST_PER_INIT_TICK, COST_PER_UNINIT_TICK, INFI_BIN_POOL_TYPE, INFI_CL_POOL_TYPE, INFI_STABLE_POOL_TYPE, MAX_FEE, NEGATIVE_ONE, ONE_HUNDRED_PERCENT, Q128, Q192, Q96, ZERO_PERCENT, createInfinityBinPool, createInfinityCLPool, createInfinityStablePool, getInfinityPoolFee, isInfinityBinPool, isInfinityCLPool, isInfinityStablePool, parseInfinityBinPool, parseInfinityBinPoolReserveOfBins, parseInfinityCLPool, parseInfinityStablePool, parseTick, toSerializableBinPoolReserveOfBin, toSerializableInfinityBinPool, toSerializableInfinityCLPool, toSerializableInfinityStablePool, toSerializableTick };
