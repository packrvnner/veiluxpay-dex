'use strict';

var chains = require('@pancakeswap/chains');
var swapSdkCore = require('@pancakeswap/swap-sdk-core');
var infinitySdk = require('@pancakeswap/infinity-sdk');
var routingSdk = require('@pancakeswap/routing-sdk');
var v3Sdk = require('@pancakeswap/v3-sdk');
var memoize = require('lodash/memoize.js');
var invariant = require('tiny-invariant');
var stableSwapSdk = require('@pancakeswap/stable-swap-sdk');
var infinityStableSdk = require('@pancakeswap/infinity-stable-sdk');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var memoize__default = /*#__PURE__*/_interopDefault(memoize);
var invariant__default = /*#__PURE__*/_interopDefault(invariant);

// src/constants/poolType.ts
var INFI_CL_POOL_TYPE = "InfinityCL";
var INFI_BIN_POOL_TYPE = "InfinityBIN";
var INFI_STABLE_POOL_TYPE = "InfinityStable";
var COST_PER_UNINIT_TICK = 0n;
var BASE_SWAP_COST_V3 = (id) => {
  switch (id) {
    case chains.ChainId.BSC:
    case chains.ChainId.BSC_TESTNET:
    case chains.ChainId.ETHEREUM:
    case chains.ChainId.GOERLI:
    case chains.ChainId.ZKSYNC:
    case chains.ChainId.ZKSYNC_TESTNET:
    case chains.ChainId.ARBITRUM_ONE:
    case chains.ChainId.OPBNB:
    case chains.ChainId.OPBNB_TESTNET:
      return 2000n;
    default:
      return 0n;
  }
};
var COST_PER_INIT_TICK = (id) => {
  switch (id) {
    case chains.ChainId.BSC:
    case chains.ChainId.BSC_TESTNET:
    case chains.ChainId.ETHEREUM:
    case chains.ChainId.GOERLI:
    case chains.ChainId.ZKSYNC:
    case chains.ChainId.ZKSYNC_TESTNET:
    case chains.ChainId.ARBITRUM_ONE:
    case chains.ChainId.OPBNB:
    case chains.ChainId.OPBNB_TESTNET:
      return 31000n;
    default:
      return 0n;
  }
};
var COST_PER_HOP_V3 = (id) => {
  switch (id) {
    case chains.ChainId.BSC:
    case chains.ChainId.BSC_TESTNET:
    case chains.ChainId.ETHEREUM:
    case chains.ChainId.GOERLI:
    case chains.ChainId.ZKSYNC:
    case chains.ChainId.ZKSYNC_TESTNET:
    case chains.ChainId.ARBITRUM_ONE:
    case chains.ChainId.OPBNB:
    case chains.ChainId.OPBNB_TESTNET:
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
var ONE_HUNDRED_PERCENT = new swapSdkCore.Percent("1");
var ZERO_PERCENT = new swapSdkCore.Percent("0");
var Q128 = 2n ** 128n;
function getInfinityPoolFee(fee, protocolFee) {
  const pf = infinitySdk.parseProtocolFeesToNumbers(protocolFee);
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
    getReserve: (c) => p.currency0.wrapped.equals(c.wrapped) ? p.reserve0 ?? swapSdkCore.CurrencyAmount.fromRawAmount(p.currency0, 0n) : p.reserve1 ?? swapSdkCore.CurrencyAmount.fromRawAmount(p.currency1, 0n),
    getCurrentPrice: (base) => {
      return infinitySdk.getBinPoolTokenPrice(
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
    log: () => `Infinity Bin ${p.currency0.symbol} - ${p.currency1.symbol} (${getInfinityPoolFee(p.fee, p.protocolFee)}) - ${p.id} - price ${infinitySdk.getBinPoolTokenPrice(
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
        const binPool = infinitySdk.createBinPool({
          currencyA: currency0,
          currencyB: currency1,
          binStep,
          activeId,
          reserveOfBin,
          lpFee: fee,
          protocolFees: infinitySdk.parseProtocolFeesToNumbers(protocolFee)
        });
        const result = isExactIn ? infinitySdk.getSwapOut(binPool, amount.quotient, amount.currency.wrapped.equals(currency0.wrapped)) : infinitySdk.getSwapIn(binPool, amount.quotient, amount.currency.wrapped.equals(currency1.wrapped));
        const quoteRaw = isExactIn ? result.amountOut : result.amountIn;
        if (quoteRaw <= 0n) {
          return void 0;
        }
        const quoteCurrency = amount.currency.wrapped.equals(currency0.wrapped) ? currency1 : currency0;
        const quote = swapSdkCore.CurrencyAmount.fromRawAmount(quoteCurrency, quoteRaw);
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
  const tickSpacing = p.tickSpacing ?? v3Sdk.TICK_SPACINGS[getInfinityPoolFee(p.fee, p.protocolFee)];
  invariant__default.default(Boolean(tickSpacing) === true, "Invalid fee for v3 pool");
  const pool = {
    type: INFI_CL_POOL_TYPE,
    getReserve: (c) => p.currency0.wrapped.equals(c.wrapped) ? p.reserve0 ?? swapSdkCore.CurrencyAmount.fromRawAmount(p.currency0, 0n) : p.reserve1 ?? swapSdkCore.CurrencyAmount.fromRawAmount(p.currency1, 0n),
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
      invariant__default.default(ticks !== void 0, "[Estimate gas]: No valid tick list found");
      const numOfTicksCrossed = v3Sdk.TickList.countInitializedTicksCrossed(ticks, tick, tickAfter);
      const tickGasUse = COST_PER_INIT_TICK(chainId) * BigInt(numOfTicksCrossed);
      return BASE_SWAP_COST_V3(chainId) + COST_PER_HOP_V3(chainId) + tickGasUse;
    }
  };
  return pool;
}
var token0Price = memoize__default.default(
  ({
    currency0,
    currency1,
    sqrtRatioX96
  }) => {
    return new swapSdkCore.Price(currency0, currency1, Q192, sqrtRatioX96 * sqrtRatioX96);
  },
  ({ currency0, currency1, sqrtRatioX96 }) => `${routingSdk.logCurrency(currency0)}_${routingSdk.logCurrency(currency1)}_${sqrtRatioX96}`
);
var token1Price = memoize__default.default(
  ({
    currency0,
    currency1,
    sqrtRatioX96
  }) => {
    return new swapSdkCore.Price(currency1, currency0, sqrtRatioX96 * sqrtRatioX96, Q192);
  },
  ({ currency0, currency1, sqrtRatioX96 }) => `${routingSdk.logCurrency(currency0)}_${routingSdk.logCurrency(currency1)}_${sqrtRatioX96}`
);
function priceOf(p, token) {
  invariant__default.default(involvesToken(p, token), "TOKEN");
  return token.wrapped.equals(p.currency0.wrapped) ? token0Price(p) : token1Price(p);
}
function involvesToken(p, token) {
  return token.wrapped.equals(p.currency0.wrapped) || token.wrapped.equals(p.currency1.wrapped);
}
function getOutputAmount(inputAmount, { sqrtPriceLimitX96, ...pool }) {
  invariant__default.default(involvesToken(pool, inputAmount.currency), "TOKEN");
  const fee = getInfinityPoolFee(pool.fee, pool.protocolFee);
  const tickSpacing = pool.tickSpacing ?? v3Sdk.TICK_SPACINGS[fee];
  invariant__default.default(!!tickSpacing, "Invalid tick spacing");
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
    swapSdkCore.CurrencyAmount.fromRawAmount(outputToken, outputAmount * NEGATIVE_ONE),
    {
      ...pool,
      sqrtRatioX96,
      liquidity,
      tick: tickCurrent
    }
  ];
}
function getInputAmount(outputAmount, { sqrtPriceLimitX96, exactOut, ...pool }) {
  invariant__default.default(outputAmount.currency.isToken && involvesToken(pool, outputAmount.currency), "TOKEN");
  const protocolFee = infinitySdk.parseProtocolFeesToNumbers(pool.protocolFee);
  const fee = pool.fee + (protocolFee?.[0] ?? 0);
  const tickSpacing = pool.tickSpacing ?? v3Sdk.TICK_SPACINGS[fee];
  invariant__default.default(!!tickSpacing, "Invalid tick spacing");
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
    invariant__default.default(amountSpecifiedRemaining === 0n, "INSUFFICIENT_LIQUIDITY_EXACT_OUT");
  }
  const inputToken = zeroForOne ? pool.currency0 : pool.currency1;
  return [
    swapSdkCore.CurrencyAmount.fromRawAmount(inputToken, inputAmount),
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
  invariant__default.default(ticks !== void 0, "[Swap]: No valid tick list found");
  if (!sqrtPriceLimitX96)
    sqrtPriceLimitX96 = zeroForOne ? v3Sdk.TickMath.MIN_SQRT_RATIO + swapSdkCore.ONE : v3Sdk.TickMath.MAX_SQRT_RATIO - swapSdkCore.ONE;
  if (zeroForOne) {
    invariant__default.default(sqrtPriceLimitX96 > v3Sdk.TickMath.MIN_SQRT_RATIO, "RATIO_MIN");
    invariant__default.default(sqrtPriceLimitX96 < sqrtRatioX96, "RATIO_CURRENT");
  } else {
    invariant__default.default(sqrtPriceLimitX96 < v3Sdk.TickMath.MAX_SQRT_RATIO, "RATIO_MAX");
    invariant__default.default(sqrtPriceLimitX96 > sqrtRatioX96, "RATIO_CURRENT");
  }
  const exactInput = amountSpecified >= swapSdkCore.ZERO;
  const state = {
    amountSpecifiedRemaining: amountSpecified,
    amountCalculated: swapSdkCore.ZERO,
    sqrtPriceX96: sqrtRatioX96,
    tick: tickCurrent,
    liquidity
  };
  while (state.amountSpecifiedRemaining !== swapSdkCore.ZERO && state.sqrtPriceX96 !== sqrtPriceLimitX96) {
    const step = {};
    step.sqrtPriceStartX96 = state.sqrtPriceX96;
    [step.tickNext, step.initialized] = v3Sdk.TickList.nextInitializedTickWithinOneWord(
      ticks,
      state.tick,
      zeroForOne,
      tickSpacing
    );
    if (step.tickNext < v3Sdk.TickMath.MIN_TICK) {
      step.tickNext = v3Sdk.TickMath.MIN_TICK;
    } else if (step.tickNext > v3Sdk.TickMath.MAX_TICK) {
      step.tickNext = v3Sdk.TickMath.MAX_TICK;
    }
    step.sqrtPriceNextX96 = v3Sdk.TickMath.getSqrtRatioAtTick(step.tickNext);
    [state.sqrtPriceX96, step.amountIn, step.amountOut, step.feeAmount] = v3Sdk.SwapMath.computeSwapStep(
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
        let liquidityNet = BigInt(v3Sdk.TickList.getTick(ticks, step.tickNext).liquidityNet);
        if (zeroForOne)
          liquidityNet *= NEGATIVE_ONE;
        state.liquidity = v3Sdk.LiquidityMath.addDelta(state.liquidity, liquidityNet);
      }
      state.tick = zeroForOne ? step.tickNext - 1 : step.tickNext;
    } else if (state.sqrtPriceX96 !== step.sqrtPriceStartX96) {
      state.tick = v3Sdk.TickMath.getTickAtSqrtRatio(state.sqrtPriceX96);
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
        return swapSdkCore.CurrencyAmount.fromRawAmount(currency, BigInt(typedValueParsed));
      }
      return swapSdkCore.UnifiedCurrencyAmount.fromRawAmount(currency, BigInt(typedValueParsed));
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
    getReserve: (c) => p.currency0.wrapped.equals(c.wrapped) ? p.reserve0 ?? swapSdkCore.CurrencyAmount.fromRawAmount(p.currency0, 0n) : p.reserve1 ?? swapSdkCore.CurrencyAmount.fromRawAmount(p.currency1, 0n),
    getCurrentPrice: (base, quote) => {
      const { amplifier, stableFee } = p;
      const baseIn = tryParseAmount_default("1", base);
      if (!baseIn) {
        throw new Error(`Cannot parse amount for ${base.symbol}`);
      }
      const reserve0 = p.reserve0 ?? swapSdkCore.CurrencyAmount.fromRawAmount(p.currency0, 0n);
      const reserve1 = p.reserve1 ?? swapSdkCore.CurrencyAmount.fromRawAmount(p.currency1, 0n);
      const balances = [reserve0, reserve1];
      const quoteOut = stableSwapSdk.getSwapOutput({
        amplifier: BigInt(amplifier),
        balances,
        fee: new swapSdkCore.Percent(BigInt(stableFee), infinityStableSdk.INFINITY_STABLE_POOL_FEE_DENOMINATOR),
        outputCurrency: quote,
        amount: baseIn
      });
      return new swapSdkCore.Price({
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
      const reserve0 = p.reserve0 ?? swapSdkCore.CurrencyAmount.fromRawAmount(p.currency0, 0n);
      const reserve1 = p.reserve1 ?? swapSdkCore.CurrencyAmount.fromRawAmount(p.currency1, 0n);
      const balances = [reserve0, reserve1];
      const getQuote = isExactIn ? stableSwapSdk.getQuoteExactIn : stableSwapSdk.getQuoteExactOut;
      const [quote, { balances: newBalances }] = getQuote({
        amount,
        balances,
        amplifier: BigInt(amplifier),
        outputCurrency: quoteCurrency,
        fee: new swapSdkCore.Percent(BigInt(stableFee), infinityStableSdk.INFINITY_STABLE_POOL_FEE_DENOMINATOR)
      });
      const newReserve0 = newBalances.find((b) => b.currency.wrapped.equals(p.currency0.wrapped));
      const newReserve1 = newBalances.find((b) => b.currency.wrapped.equals(p.currency1.wrapped));
      invariant__default.default(newReserve0 !== void 0 && newReserve1 !== void 0, "NO_RESERVE_FOUND");
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
    currency0: routingSdk.toSerializableCurrency(pool.currency0),
    currency1: routingSdk.toSerializableCurrency(pool.currency1),
    liquidity: pool.liquidity.toString(),
    sqrtRatioX96: pool.sqrtRatioX96.toString(),
    ticks: pool.ticks?.map(toSerializableTick),
    reserve0: pool.reserve0 && routingSdk.toSerializableCurrencyAmount(pool.reserve0),
    reserve1: pool.reserve1 && routingSdk.toSerializableCurrencyAmount(pool.reserve1)
  };
}
function toSerializableInfinityStablePool(infinityStablePool) {
  const pool = infinityStablePool.getPoolData();
  return {
    ...pool,
    id: pool.id,
    currency0: routingSdk.toSerializableCurrency(pool.currency0),
    currency1: routingSdk.toSerializableCurrency(pool.currency1),
    reserve0: pool.reserve0 && routingSdk.toSerializableCurrencyAmount(pool.reserve0),
    reserve1: pool.reserve1 && routingSdk.toSerializableCurrencyAmount(pool.reserve1)
  };
}
function toSerializableInfinityBinPool(infinityBinPool) {
  const pool = infinityBinPool.getPoolData();
  return {
    ...pool,
    currency0: routingSdk.toSerializableCurrency(pool.currency0),
    currency1: routingSdk.toSerializableCurrency(pool.currency1),
    reserveOfBin: toSerializableBinPoolReserveOfBin(pool.reserveOfBin),
    reserve0: pool.reserve0 && routingSdk.toSerializableCurrencyAmount(pool.reserve0),
    reserve1: pool.reserve1 && routingSdk.toSerializableCurrencyAmount(pool.reserve1)
  };
}
function parseTick(tick) {
  return new v3Sdk.Tick(tick);
}
function parseInfinityCLPool(chainId, pool) {
  const poolData = {
    ...pool,
    currency0: routingSdk.parseCurrency(chainId, pool.currency0),
    currency1: routingSdk.parseCurrency(chainId, pool.currency1),
    liquidity: BigInt(pool.liquidity),
    sqrtRatioX96: BigInt(pool.sqrtRatioX96),
    ticks: pool.ticks?.map(parseTick),
    reserve0: pool.reserve0 && routingSdk.parseCurrencyAmount(chainId, pool.reserve0),
    reserve1: pool.reserve1 && routingSdk.parseCurrencyAmount(chainId, pool.reserve1)
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
    currency0: routingSdk.parseCurrency(chainId, pool.currency0),
    currency1: routingSdk.parseCurrency(chainId, pool.currency1),
    reserveOfBin: parseInfinityBinPoolReserveOfBins(pool.reserveOfBin),
    reserve0: pool.reserve0 && routingSdk.parseCurrencyAmount(chainId, pool.reserve0),
    reserve1: pool.reserve1 && routingSdk.parseCurrencyAmount(chainId, pool.reserve1)
  };
  return createInfinityBinPool(poolData);
}
function parseInfinityStablePool(chainId, pool) {
  const poolData = {
    ...pool,
    currency0: routingSdk.parseCurrency(chainId, pool.currency0),
    currency1: routingSdk.parseCurrency(chainId, pool.currency1),
    reserve0: pool.reserve0 && routingSdk.parseCurrencyAmount(chainId, pool.reserve0),
    reserve1: pool.reserve1 && routingSdk.parseCurrencyAmount(chainId, pool.reserve1)
  };
  return createInfinityStablePool(poolData);
}

exports.BASE_SWAP_COST_STABLE_SWAP = BASE_SWAP_COST_STABLE_SWAP;
exports.BASE_SWAP_COST_V3 = BASE_SWAP_COST_V3;
exports.COST_PER_EXTRA_HOP_STABLE_SWAP = COST_PER_EXTRA_HOP_STABLE_SWAP;
exports.COST_PER_HOP_V3 = COST_PER_HOP_V3;
exports.COST_PER_INIT_TICK = COST_PER_INIT_TICK;
exports.COST_PER_UNINIT_TICK = COST_PER_UNINIT_TICK;
exports.INFI_BIN_POOL_TYPE = INFI_BIN_POOL_TYPE;
exports.INFI_CL_POOL_TYPE = INFI_CL_POOL_TYPE;
exports.INFI_STABLE_POOL_TYPE = INFI_STABLE_POOL_TYPE;
exports.MAX_FEE = MAX_FEE;
exports.NEGATIVE_ONE = NEGATIVE_ONE;
exports.ONE_HUNDRED_PERCENT = ONE_HUNDRED_PERCENT;
exports.Q128 = Q128;
exports.Q192 = Q192;
exports.Q96 = Q96;
exports.ZERO_PERCENT = ZERO_PERCENT;
exports.createInfinityBinPool = createInfinityBinPool;
exports.createInfinityCLPool = createInfinityCLPool;
exports.createInfinityStablePool = createInfinityStablePool;
exports.getInfinityPoolFee = getInfinityPoolFee;
exports.isInfinityBinPool = isInfinityBinPool;
exports.isInfinityCLPool = isInfinityCLPool;
exports.isInfinityStablePool = isInfinityStablePool;
exports.parseInfinityBinPool = parseInfinityBinPool;
exports.parseInfinityBinPoolReserveOfBins = parseInfinityBinPoolReserveOfBins;
exports.parseInfinityCLPool = parseInfinityCLPool;
exports.parseInfinityStablePool = parseInfinityStablePool;
exports.parseTick = parseTick;
exports.toSerializableBinPoolReserveOfBin = toSerializableBinPoolReserveOfBin;
exports.toSerializableInfinityBinPool = toSerializableInfinityBinPool;
exports.toSerializableInfinityCLPool = toSerializableInfinityCLPool;
exports.toSerializableInfinityStablePool = toSerializableInfinityStablePool;
exports.toSerializableTick = toSerializableTick;
