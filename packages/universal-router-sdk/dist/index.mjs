import { ChainId } from '@pancakeswap/chains';
import { TradeType, CurrencyAmount, WETH9, ZERO_ADDRESS } from '@pancakeswap/sdk';
import { SmartRouter, ADDRESS_THIS as ADDRESS_THIS$1, RouteType, getPoolAddress, MSG_SENDER, PoolType } from '@pancakeswap/smart-router';
import { ActionsPlanner, ACTIONS, encodePoolKey, isDynamicFeeHook, decodeHooksRegistration, ACTIONS_ABI, DYNAMIC_FEE_FLAG } from '@pancakeswap/infinity-sdk';
import first from 'lodash/first';
import last from 'lodash/last';
import { parseAbiParameters, encodeFunctionData, toHex, zeroAddress, decodeFunctionData, decodeAbiParameters, toBytes, encodeAbiParameters } from 'viem';
import invariant2 from 'tiny-invariant';

// src/constants.ts
var UNIVERSAL_ROUTER_ADDRESSES = {
  [ChainId.ETHEREUM]: "0x65b382653f7C31bC0Af67f188122035461ec9C76",
  [ChainId.GOERLI]: "0xC46abF8B66Df4B9Eb0cC0cf6eba24226AC6E6285",
  [ChainId.SEPOLIA]: "0x6A3d58cc25a92d90Fa3a8f0f5d5e75AD01ccd7a6",
  [ChainId.BSC]: "0xd9C500DfF816a1Da21A48A732d3498Bf09dc9AEB",
  [ChainId.BSC_TESTNET]: "0x87FD5305E6a40F378da124864B2D479c2028BD86",
  // [ChainId.SCROLL]: '0xB89a6778D1efE7a5b7096757A21b810CC2886fa1',
  [ChainId.SCROLL_SEPOLIA]: "0xB89a6778D1efE7a5b7096757A21b810CC2886fa1",
  [ChainId.ARBITRUM_ONE]: "0xFE6508f0015C778Bdcc1fB5465bA5ebE224C9912",
  [ChainId.ARBITRUM_GOERLI]: "0xa8EEA7aa6620712524d18D742821848e55E773B5",
  [ChainId.ARBITRUM_SEPOLIA]: "0xFE6508f0015C778Bdcc1fB5465bA5ebE224C9912",
  [ChainId.BASE]: "0xd9C500DfF816a1Da21A48A732d3498Bf09dc9AEB",
  [ChainId.BASE_TESTNET]: "0xa8EEA7aa6620712524d18D742821848e55E773B5",
  [ChainId.BASE_SEPOLIA]: "0xFE6508f0015C778Bdcc1fB5465bA5ebE224C9912",
  [ChainId.LINEA]: "0xFE6508f0015C778Bdcc1fB5465bA5ebE224C9912",
  [ChainId.LINEA_TESTNET]: "0x9f3Cb8251492a069dBF0634C24e9De305d6946B8",
  [ChainId.ZKSYNC]: "0xdAee41E335322C85ff2c5a6745c98e1351806e98",
  [ChainId.ZKSYNC_TESTNET]: "0xCa97D1FAFCEa54EFc68d66eA914AB2F8Fbfe93c5",
  [ChainId.OPBNB]: "0xB89a6778D1efE7a5b7096757A21b810CC2886fa1",
  [ChainId.OPBNB_TESTNET]: "0xa8EEA7aa6620712524d18D742821848e55E773B5",
  [ChainId.MONAD_MAINNET]: "0x23682a588CF2601ACa977dF200938634c9F7d552",
  [ChainId.MONAD_TESTNET]: "0x94D220C58A23AE0c2eE29344b00A30D1c2d9F1bc"
};
var getUniversalRouterAddress = (chainId) => {
  if (!(chainId in UNIVERSAL_ROUTER_ADDRESSES))
    throw new Error(`Universal Router not deployed on chain ${chainId}`);
  return UNIVERSAL_ROUTER_ADDRESSES[chainId];
};
var ADDRESS_THIS = "0x0000000000000000000000000000000000000002";
var ACTION_CONSTANTS = {
  OPEN_DELTA: 0n,
  CONTRACT_BALANCE: "0x8000000000000000000000000000000000000000000000000000000000000000",
  MSG_SENDER: "0x0000000000000000000000000000000000000001",
  ADDRESS_THIS: "0x0000000000000000000000000000000000000002"
};

// src/router.types.ts
var CommandType = /* @__PURE__ */ ((CommandType2) => {
  CommandType2[CommandType2["ALLOW_REVERT_FLAG"] = 128] = "ALLOW_REVERT_FLAG";
  CommandType2[CommandType2["COMMAND_TYPE_MASK"] = 63] = "COMMAND_TYPE_MASK";
  CommandType2[CommandType2["V3_SWAP_EXACT_IN"] = 0] = "V3_SWAP_EXACT_IN";
  CommandType2[CommandType2["V3_SWAP_EXACT_OUT"] = 1] = "V3_SWAP_EXACT_OUT";
  CommandType2[CommandType2["PERMIT2_TRANSFER_FROM"] = 2] = "PERMIT2_TRANSFER_FROM";
  CommandType2[CommandType2["PERMIT2_PERMIT_BATCH"] = 3] = "PERMIT2_PERMIT_BATCH";
  CommandType2[CommandType2["SWEEP"] = 4] = "SWEEP";
  CommandType2[CommandType2["TRANSFER"] = 5] = "TRANSFER";
  CommandType2[CommandType2["PAY_PORTION"] = 6] = "PAY_PORTION";
  CommandType2[CommandType2["V2_SWAP_EXACT_IN"] = 8] = "V2_SWAP_EXACT_IN";
  CommandType2[CommandType2["V2_SWAP_EXACT_OUT"] = 9] = "V2_SWAP_EXACT_OUT";
  CommandType2[CommandType2["PERMIT2_PERMIT"] = 10] = "PERMIT2_PERMIT";
  CommandType2[CommandType2["WRAP_ETH"] = 11] = "WRAP_ETH";
  CommandType2[CommandType2["UNWRAP_WETH"] = 12] = "UNWRAP_WETH";
  CommandType2[CommandType2["PERMIT2_TRANSFER_FROM_BATCH"] = 13] = "PERMIT2_TRANSFER_FROM_BATCH";
  CommandType2[CommandType2["BALANCE_CHECK_ERC20"] = 14] = "BALANCE_CHECK_ERC20";
  CommandType2[CommandType2["INFI_SWAP"] = 16] = "INFI_SWAP";
  CommandType2[CommandType2["V3_POSITION_MANAGER_PERMIT"] = 17] = "V3_POSITION_MANAGER_PERMIT";
  CommandType2[CommandType2["V3_POSITION_MANAGER_CALL"] = 18] = "V3_POSITION_MANAGER_CALL";
  CommandType2[CommandType2["INFI_CL_INITIALIZE_POOL"] = 19] = "INFI_CL_INITIALIZE_POOL";
  CommandType2[CommandType2["INFI_BIN_INITIALIZE_POOL"] = 20] = "INFI_BIN_INITIALIZE_POOL";
  CommandType2[CommandType2["INFI_CL_POSITION_CALL"] = 21] = "INFI_CL_POSITION_CALL";
  CommandType2[CommandType2["INFI_BIN_POSITION_CALL"] = 22] = "INFI_BIN_POSITION_CALL";
  CommandType2[CommandType2["EXECUTE_SUB_PLAN"] = 32] = "EXECUTE_SUB_PLAN";
  CommandType2[CommandType2["STABLE_SWAP_EXACT_IN"] = 34] = "STABLE_SWAP_EXACT_IN";
  CommandType2[CommandType2["STABLE_SWAP_EXACT_OUT"] = 35] = "STABLE_SWAP_EXACT_OUT";
  return CommandType2;
})(CommandType || {});
function currencyAddressInfinity(currency) {
  return currency.isNative ? ZERO_ADDRESS : currency.wrapped.address;
}
var getPoolKey = (pool) => {
  const base = {
    currency0: currencyAddressInfinity(pool.currency0),
    currency1: currencyAddressInfinity(pool.currency1),
    hooks: pool.hooks || zeroAddress,
    poolManager: pool.poolManager,
    fee: pool.fee
  };
  const { chainId } = pool.currency0;
  if (isDynamicFeeHook(chainId, pool.hooks)) {
    base.fee = DYNAMIC_FEE_FLAG;
  }
  const hooksRegistration = pool.hooksRegistrationBitmap !== void 0 ? decodeHooksRegistration(pool.hooksRegistrationBitmap) : void 0;
  if (SmartRouter.isInfinityClPool(pool) || SmartRouter.isInfinityStablePool(pool)) {
    const params = {
      tickSpacing: pool.tickSpacing,
      hooksRegistration
    };
    return { ...base, parameters: params };
  }
  if (SmartRouter.isInfinityBinPool(pool)) {
    const params = {
      binStep: pool.binStep,
      hooksRegistration
    };
    return { ...base, parameters: params };
  }
  throw new Error("Invalid pool type");
};

// src/utils/numbers.ts
function encodeFeeBips(fee) {
  return fee.multiply(1e4).quotient.toString();
}
function getInputCurrency(pool, currencyIn) {
  const list = getCurrencies(pool);
  const result = list.find((currency) => currency.wrapped.equals(currencyIn.wrapped));
  if (!result) {
    throw new Error(
      `Cannot get input currency by invalid pool: pool=${list[0].symbol}-${list[1].symbol}, curIn=${currencyIn.symbol}`
    );
  }
  return result;
}
function isFirstCurrency(pool, currency) {
  const list = getCurrencies(pool);
  const first2 = list[0];
  return first2.wrapped.equals(currency.wrapped);
}
function getCurrencies(pool) {
  if (SmartRouter.isV2Pool(pool)) {
    const { reserve0, reserve1 } = pool;
    return [reserve0.currency, reserve1.currency];
  }
  if (SmartRouter.isV3Pool(pool)) {
    const { token0, token1 } = pool;
    return [token0, token1];
  }
  if (SmartRouter.isStablePool(pool)) {
    const { balances } = pool;
    return balances.map((b) => b.currency);
  }
  if (SmartRouter.isInfinityClPool(pool) || SmartRouter.isInfinityBinPool(pool) || SmartRouter.isInfinityStablePool(pool)) {
    const { currency0, currency1 } = pool;
    return [currency0, currency1];
  }
  throw new Error("Cannot get tokens by invalid pool");
}
var ABI_STRUCT_PERMIT_DETAILS = `
struct PermitDetails {
  address token;
  uint160 amount;
  uint48 expiration;
  uint48 nonce;
}`.replaceAll("\n", "");
var ABI_STRUCT_PERMIT_SINGLE = `
struct PermitSingle {
  PermitDetails details;
  address spender;
  uint256 sigDeadline;
}
`.replaceAll("\n", "");
var ABI_STRUCT_PERMIT_BATCH = `
struct PermitBatch {
  PermitSingle[] details;
  address spender;
  uint256 sigDeadline;
}
`.replaceAll("\n", "");
var ABI_STRUCT_ALLOWANCE_TRANSFER_DETAILS = `
struct AllowanceTransferDetails {
  address from;
  address to;
  uint160 amount;
  address token;
}
`.replaceAll("\n", "");
var ABI_PARAMETER = {
  // Batch Reverts
  [32 /* EXECUTE_SUB_PLAN */]: parseAbiParameters("bytes _commands, bytes[] _inputs"),
  // Permit2 Actions
  [10 /* PERMIT2_PERMIT */]: parseAbiParameters([
    "PermitSingle permitSingle, bytes data",
    ABI_STRUCT_PERMIT_SINGLE,
    ABI_STRUCT_PERMIT_DETAILS
  ]),
  [3 /* PERMIT2_PERMIT_BATCH */]: parseAbiParameters([
    "PermitBatch permitBatch, bytes data",
    ABI_STRUCT_PERMIT_BATCH,
    ABI_STRUCT_PERMIT_SINGLE,
    ABI_STRUCT_PERMIT_DETAILS
  ]),
  [2 /* PERMIT2_TRANSFER_FROM */]: parseAbiParameters("address token, address recipient, uint160 amount"),
  [13 /* PERMIT2_TRANSFER_FROM_BATCH */]: parseAbiParameters([
    "AllowanceTransferDetails[] batchDetails",
    ABI_STRUCT_ALLOWANCE_TRANSFER_DETAILS
  ]),
  // swap actions
  [0 /* V3_SWAP_EXACT_IN */]: parseAbiParameters(
    "address recipient, uint256 amountIn, uint256 amountOutMin, bytes path, bool payerIsUser"
  ),
  [1 /* V3_SWAP_EXACT_OUT */]: parseAbiParameters(
    "address recipient, uint256 amountOut, uint256 amountInMax, bytes path, bool payerIsUser"
  ),
  [8 /* V2_SWAP_EXACT_IN */]: parseAbiParameters(
    "address recipient, uint256 amountIn, uint256 amountOutMin, address[] path, bool payerIsUser"
  ),
  [9 /* V2_SWAP_EXACT_OUT */]: parseAbiParameters(
    "address recipient, uint256 amountOut, uint256 amountInMax, address[] path, bool payerIsUser"
  ),
  [34 /* STABLE_SWAP_EXACT_IN */]: parseAbiParameters(
    "address recipient, uint256 amountIn, uint256 amountOutMin, address[] path, uint256[] flag, bool payerIsUser"
  ),
  [35 /* STABLE_SWAP_EXACT_OUT */]: parseAbiParameters(
    "address recipient, uint256 amountOut, uint256 amountInMax, address[] path, uint256[] flag, bool payerIsUser"
  ),
  // Token Actions and Checks
  [11 /* WRAP_ETH */]: parseAbiParameters("address recipient, uint256 amountMin"),
  [12 /* UNWRAP_WETH */]: parseAbiParameters("address recipient, uint256 amountMin"),
  [4 /* SWEEP */]: parseAbiParameters("address token, address recipient, uint256 amountMin"),
  // [CommandType.SWEEP_ERC721]: parseAbiParameters('address token, address recipient, uint256 id'),
  // [CommandType.SWEEP_ERC1155]: parseAbiParameters('address token, address recipient, uint256 id, uint256 amount'),
  [5 /* TRANSFER */]: parseAbiParameters("address token, address recipient, uint256 value"),
  [6 /* PAY_PORTION */]: parseAbiParameters("address token, address recipient, uint256 bips"),
  [14 /* BALANCE_CHECK_ERC20 */]: parseAbiParameters("address owner, address token, uint256 minBalance"),
  // [CommandType.OWNER_CHECK_721]: parseAbiParameters('address owner, address token, uint256 id'),
  // [CommandType.OWNER_CHECK_1155]: parseAbiParameters('address owner, address token, uint256 id, uint256 minBalance'),
  // [CommandType.APPROVE_ERC20]: parseAbiParameters('address token, uint256 spender'),
  // NFT Markets
  // [CommandType.SEAPORT_V1_5]: parseAbiParameters('uint256 value, bytes data'),
  // [CommandType.SEAPORT_V1_4]: parseAbiParameters('uint256 value, bytes data'),
  // @fixme: contract not implemented
  // [CommandType.LOOKS_RARE_V2]: parseAbiParameters('uint256 value, bytes data'),
  // [CommandType.X2Y2_721]: parseAbiParameters('uint256 value, bytes data, address recipient, address token, uint256 id'),
  // [CommandType.X2Y2_1155]: parseAbiParameters(
  //   'uint256 value, bytes data, address recipient, address token, uint256 id, uint256 amount',
  // ),
  // [CommandType.PANCAKE_NFT_WBNB]: parseAbiParameters('address collection, uint256 tokenId, uint256 price'),
  // [CommandType.PANCAKE_NFT_BNB]: parseAbiParameters('address collection, uint256 tokenId, uint256 price'),
  // @notice: following marketplace not supported now
  // [CommandType.NFTX]: parseAbiParameters('uint256 value, bytes data'),
  // [CommandType.FOUNDATION]: parseAbiParameters(
  //   'uint256 value, bytes data, address recipient, address token, uint256 id'
  // ),
  // [CommandType.SUDOSWAP]: parseAbiParameters('uint256 value, bytes data'),
  // [CommandType.NFT20]: parseAbiParameters('uint256 value, bytes data'),
  // [CommandType.CRYPTOPUNKS]: parseAbiParameters('uint256 punkId, address recipient, uint256 value'),
  // [CommandType.ELEMENT_MARKET]: parseAbiParameters('uint256 value, bytes data'),
  [16 /* INFI_SWAP */]: parseAbiParameters("bytes actions, bytes[] params")
};
function createCommand(type, parameters) {
  const encodedInput = encodeAbiParameters(ABI_PARAMETER[type], parameters);
  return { type, encodedInput };
}

// src/utils/RoutePlanner.ts
var RoutePlanner = class {
  constructor() {
    this.commands = "0x";
    this.inputs = [];
  }
  addCommand(type, parameters, allowRevert = false) {
    const command = createCommand(type, parameters);
    this.inputs.push(command.encodedInput);
    if (allowRevert) {
      if (!REVERTIBLE_COMMANDS.has(command.type)) {
        throw new Error(`command type: ${command.type} cannot be allowed to revert`);
      }
      command.type |= ALLOW_REVERT_FLAG;
    }
    this.commands = this.commands.concat(command.type.toString(16).padStart(2, "0"));
  }
  size() {
    return this.inputs.length;
  }
};
var ALLOW_REVERT_FLAG = 128;
var REVERTIBLE_COMMANDS = /* @__PURE__ */ new Set([32 /* EXECUTE_SUB_PLAN */]);
var parseSwapTradeContext = (trade, options) => {
  const context = {
    trade,
    options,
    routes: [],
    mustCustody: Boolean(options.fee || options.flatFee),
    user: options.recipient || MSG_SENDER,
    returnChanges: null,
    takeOverWrapSweep: null,
    mergedWrapBeforeTrade: null,
    reusedActionPlaner: null
  };
  for (let k = 0; k < trade.routes.length; k++) {
    const route = trade.routes[k];
    const sections = partition(route);
    const amountIn = SmartRouter.maximumAmountIn(trade, options.slippageTolerance, route.inputAmount);
    const amountOut = SmartRouter.minimumAmountOut(trade, options.slippageTolerance, route.outputAmount);
    const routeContext = {
      sections: [],
      maximumAmountIn: amountIn,
      minimumAmountOut: amountOut
    };
    let inputCurrency = trade.inputAmount.currency;
    for (let i = 0; i < sections.length; i++) {
      const section = sections[i];
      invariant2(section.length, "EMPTY_SECTION");
      const type = poolTypeToRouteType(section[0].type);
      invariant2(
        type === RouteType.V2 || type === RouteType.V3 || type === RouteType.InfinityBIN || type === RouteType.InfinityCL || type === RouteType.STABLE,
        "INVALID_ROUTE_TYPE"
      );
      const isFirstSection = i === 0;
      const isLastSection = i === sections.length - 1;
      const poolIn = getInputCurrency(section[0], inputCurrency);
      const poolOut = SmartRouter.getOutputOfPools(section, poolIn);
      const output = isLastSection ? trade.outputAmount.currency : poolOut;
      const newRoute = SmartRouter.buildBaseRoute([...section], poolIn, poolOut);
      const swap = {
        type,
        poolIn,
        poolOut,
        isFirstSection,
        isLastSection,
        nextSection: null,
        prevSection: null,
        wrapInput: inputCurrency.isNative && !poolIn.isNative,
        unwrapInput: !inputCurrency.isNative && poolIn.isNative,
        wrapOutput: !output.isNative && poolOut.isNative,
        unwrapOutput: output.isNative && !poolOut.isNative,
        payerIsUser: false,
        pools: section,
        route: newRoute,
        isInfinity: section[0].type === PoolType.InfinityBIN || section[0].type === PoolType.InfinityCL || section[0].type === PoolType.InfinityStable
      };
      swap.payerIsUser = context.options.payerIsUser ? swap.isFirstSection && !(swap.wrapInput || swap.unwrapInput) : false;
      inputCurrency = poolOut;
      routeContext.sections.push(swap);
    }
    context.routes.push(routeContext);
  }
  for (let i = 0; i < context.routes.length; i++) {
    const route = context.routes[i];
    for (let j = 0; j < route.sections.length; j++) {
      if (j < route.sections.length - 1) {
        route.sections[j].nextSection = route.sections[j + 1];
      }
      if (j > 0) {
        route.sections[j].prevSection = route.sections[j - 1];
      }
    }
  }
  const firstSections = context.routes.map((route) => route.sections[0]);
  const shouldMergeWrap = firstSections.every((section) => section.wrapInput);
  const shouldMergeUnrap = firstSections.every((section) => section.unwrapInput);
  if (shouldMergeWrap || shouldMergeUnrap) {
    context.mergedWrapBeforeTrade = {
      wrap: shouldMergeWrap
    };
  }
  return context;
};
function poolTypeToRouteType(poolType) {
  switch (poolType) {
    case PoolType.V2:
      return RouteType.V2;
    case PoolType.V3:
      return RouteType.V3;
    case PoolType.STABLE:
      return RouteType.STABLE;
    case PoolType.InfinityBIN:
      return RouteType.InfinityBIN;
    case PoolType.InfinityCL:
    case PoolType.InfinityStable:
      return RouteType.InfinityCL;
    default:
      throw new Error("Invalid pool type");
  }
}
function partition(route) {
  const sections = [];
  let currentSection = [];
  function isSameType(a, b) {
    return a.type === b.type;
  }
  function noNeedWrap(a, b) {
    return a.isNative && b.isNative || !a.isNative && !b.isNative;
  }
  let inputCurrency = route.inputAmount.currency;
  for (const pool of route.pools) {
    const outputCurrency = SmartRouter.getOutputCurrency(pool, inputCurrency);
    const lastPool = currentSection[currentSection.length - 1];
    const poolIn = getInputCurrency(pool, inputCurrency);
    if (!lastPool || isSameType(lastPool, pool) && noNeedWrap(inputCurrency, poolIn)) {
      currentSection.push(pool);
    } else {
      sections.push(currentSection);
      currentSection = [pool];
    }
    inputCurrency = outputCurrency;
  }
  if (currentSection.length > 0) {
    sections.push(currentSection);
  }
  return sections;
}

// src/entities/protocols/TradePlanner.ts
var TradePlanner = class extends RoutePlanner {
  constructor(trade, options) {
    super();
    this.trade = trade;
    this.options = options;
    if (options.fee && options.flatFee) {
      throw new Error("Cannot specify both fee and flatFee");
    }
    this.context = parseSwapTradeContext(trade, options);
  }
  encode() {
    this.addMergedWrapBeforeTrade();
    for (const route of this.context.routes) {
      for (const section of route.sections) {
        this.addWrapBeforeSwap(route, section);
        this.addSwapCommand(route, section);
      }
      this.addWrapAfterRoute(route);
    }
    this.payFee();
    this.returnChanges();
  }
  addMergedWrapBeforeTrade() {
    if (this.context.mergedWrapBeforeTrade) {
      const { wrap } = this.context.mergedWrapBeforeTrade;
      const recipient = ADDRESS_THIS$1;
      const amount = SmartRouter.maximumAmountIn(this.trade, this.options.slippageTolerance).quotient;
      if (wrap) {
        this.addCommand(11 /* WRAP_ETH */, [recipient, amount]);
      } else {
        const { trade } = this.context;
        if (this.context.options.payerIsUser) {
          this.addCommand(2 /* PERMIT2_TRANSFER_FROM */, [
            trade.inputAmount.currency.wrapped.address,
            ADDRESS_THIS$1,
            amount
          ]);
        }
        this.addCommand(12 /* UNWRAP_WETH */, [recipient, amount]);
      }
    }
  }
  addSwapCommand(route, section) {
    const { isFirstSection, isLastSection, payerIsUser, route: sectionRoute, nextSection } = section;
    const { tradeType } = this.context.trade;
    const lastSection = last(route.sections);
    const wrapFlag = lastSection.unwrapOutput || lastSection.wrapOutput || nextSection?.wrapInput;
    const isRouteCustody = this.context.mustCustody || !isLastSection || wrapFlag;
    const nextIsV2 = Boolean(nextSection && nextSection.type === RouteType.V2);
    const nextRouteAddress = relaxToV2(nextIsV2, nextSection ? nextSection.pools[0] : null);
    const nextRecipient = nextSection?.wrapInput || nextSection?.unwrapInput ? ADDRESS_THIS$1 : nextRouteAddress;
    const recipient = isRouteCustody ? nextRecipient : this.context.user;
    const amountOut = !isLastSection ? 0n : route.minimumAmountOut.quotient;
    switch (section.type) {
      case RouteType.V2: {
        const amountIn = isFirstSection ? route.maximumAmountIn.quotient : BigInt(ACTION_CONSTANTS.CONTRACT_BALANCE);
        const path = sectionRoute.path.map((token) => token.wrapped.address);
        if (tradeType === TradeType.EXACT_INPUT) {
          this.addCommand(8 /* V2_SWAP_EXACT_IN */, [recipient, amountIn, amountOut, path, payerIsUser]);
          return;
        }
        this.addCommand(9 /* V2_SWAP_EXACT_OUT */, [recipient, amountOut, amountIn, path, payerIsUser]);
        break;
      }
      case RouteType.V3: {
        const amountIn = isFirstSection ? route.maximumAmountIn.quotient : BigInt(ACTION_CONSTANTS.CONTRACT_BALANCE);
        const path = SmartRouter.encodeMixedRouteToPath(
          { ...sectionRoute, input: sectionRoute.input, output: sectionRoute.output },
          tradeType === TradeType.EXACT_OUTPUT
        );
        if (tradeType === TradeType.EXACT_INPUT) {
          const params = [
            recipient,
            amountIn,
            amountOut,
            path,
            payerIsUser
          ];
          this.addCommand(0 /* V3_SWAP_EXACT_IN */, params);
        } else {
          const params = [
            recipient,
            amountOut,
            amountIn,
            path,
            payerIsUser
          ];
          this.addCommand(1 /* V3_SWAP_EXACT_OUT */, params);
        }
        break;
      }
      case RouteType.STABLE: {
        const amountIn = isFirstSection ? route.maximumAmountIn.quotient : BigInt(ACTION_CONSTANTS.CONTRACT_BALANCE);
        const flags = sectionRoute.pools.map((p) => BigInt(p.balances.length));
        const path = sectionRoute.path.map((token) => token.wrapped.address);
        if (tradeType === TradeType.EXACT_INPUT) {
          const params = [
            recipient,
            amountIn,
            amountOut,
            path,
            flags,
            payerIsUser
          ];
          this.addCommand(34 /* STABLE_SWAP_EXACT_IN */, params);
        } else {
          const params = [
            recipient,
            amountOut,
            amountIn,
            path,
            flags,
            payerIsUser
          ];
          this.addCommand(35 /* STABLE_SWAP_EXACT_OUT */, params);
        }
        break;
      }
      case RouteType.InfinityBIN:
      case RouteType.InfinityCL: {
        if (!this.context.reusedActionPlaner) {
          this.context.reusedActionPlaner = new ActionsPlanner();
        }
        const actionPlaner = this.context.reusedActionPlaner;
        const amountIn = isFirstSection ? route.maximumAmountIn.quotient : ACTION_CONSTANTS.OPEN_DELTA;
        this.initializeInfinitySwap(actionPlaner, section, route);
        this.addInfinityCommand(actionPlaner, section, amountIn, amountOut);
        this.finalizeInfinitySwap(actionPlaner, section, recipient, amountIn);
        break;
      }
      default:
        throw new Error("Invalid route type");
    }
  }
  addInfinityCommand(actionPlaner, section, amountIn, amountOut) {
    if (section.pools.length === 1) {
      this.addInfinitySingleHop(actionPlaner, section, amountIn, amountOut);
      return;
    }
    this.addInfinityMultiHop(actionPlaner, section, amountIn, amountOut);
  }
  addInfinityMultiHop(actionPlaner, section, amountIn, amountOut) {
    const { tradeType } = this.context.trade;
    const pool = section.pools[0];
    const isCL = SmartRouter.isInfinityClPool(pool) || SmartRouter.isInfinityStablePool(pool);
    if (tradeType === TradeType.EXACT_INPUT) {
      const params = {
        currencyIn: currencyAddressInfinity(section.poolIn),
        path: SmartRouter.encodeInfinityRouteToPath(section.route, false),
        amountIn,
        amountOutMinimum: amountOut
      };
      actionPlaner.add(isCL ? ACTIONS.CL_SWAP_EXACT_IN : ACTIONS.BIN_SWAP_EXACT_IN, [params]);
    } else {
      const params = {
        currencyOut: currencyAddressInfinity(section.poolOut),
        path: SmartRouter.encodeInfinityRouteToPath(section.route, true),
        amountOut,
        amountInMaximum: amountIn
      };
      actionPlaner.add(isCL ? ACTIONS.CL_SWAP_EXACT_OUT : ACTIONS.BIN_SWAP_EXACT_OUT, [params]);
    }
  }
  addInfinitySingleHop(actionPlaner, section, amountIn, amountOut) {
    const pool = section.pools[0];
    const poolKey = getPoolKey(pool);
    const _encodedPoolKey = encodePoolKey(poolKey);
    const { tradeType } = this.context.trade;
    const zeroForOne = isFirstCurrency(section.pools[0], section.poolIn);
    const baseParams = {
      poolKey: _encodedPoolKey,
      zeroForOne,
      // we are using universal router for slippage check, passing an empty hookData should be fine
      // if using ZeraAddress, Stable Infinity hook will throw error
      hookData: "0x"
    };
    const isCL = SmartRouter.isInfinityClPool(pool) || SmartRouter.isInfinityStablePool(pool);
    if (tradeType === TradeType.EXACT_INPUT) {
      const params = {
        ...baseParams,
        amountIn,
        amountOutMinimum: amountOut
      };
      actionPlaner.add(isCL ? ACTIONS.CL_SWAP_EXACT_IN_SINGLE : ACTIONS.BIN_SWAP_EXACT_IN_SINGLE, [params]);
    } else {
      const params = {
        ...baseParams,
        amountOut,
        amountInMaximum: amountIn
      };
      actionPlaner.add(isCL ? ACTIONS.CL_SWAP_EXACT_OUT_SINGLE : ACTIONS.BIN_SWAP_EXACT_OUT_SINGLE, [params]);
    }
  }
  addWrapBeforeSwap(route, section) {
    if (this.context.mergedWrapBeforeTrade && section.isFirstSection) {
      return;
    }
    if (!section.wrapInput && !section.unwrapInput) {
      return;
    }
    const { nextSection } = section;
    const forwardV2 = !section.isFirstSection && Boolean(nextSection && nextSection.type === RouteType.V2);
    const recipient = relaxToV2(forwardV2, nextSection ? nextSection.pools[0] : null);
    if (section.wrapInput) {
      const amount = section.isFirstSection ? route.maximumAmountIn.quotient : BigInt(ACTION_CONSTANTS.CONTRACT_BALANCE);
      this.addCommand(11 /* WRAP_ETH */, [recipient, amount]);
    }
    if (section.unwrapInput) {
      const amount = section.isFirstSection ? route.maximumAmountIn.quotient : 0n;
      if (section.payerIsUser) {
        this.addCommand(2 /* PERMIT2_TRANSFER_FROM */, [section.route.input.wrapped.address, ADDRESS_THIS$1, amount]);
      }
      this.addCommand(12 /* UNWRAP_WETH */, [recipient, amount]);
    }
  }
  addWrapAfterRoute(route) {
    const { sections } = route;
    const lastSection = last(sections);
    const firstSection = first(sections);
    const { mustCustody, trade } = this.context;
    const { tradeType } = trade;
    if (this.context.returnChanges === null && tradeType === TradeType.EXACT_OUTPUT && (firstSection.wrapInput || firstSection.unwrapInput)) {
      this.context.returnChanges = { wrap: !firstSection.wrapInput };
    }
    if (!lastSection.wrapOutput && !lastSection.unwrapOutput) {
      return;
    }
    const recipient = mustCustody ? ADDRESS_THIS$1 : this.context.user;
    const amount = mustCustody ? BigInt(ACTION_CONSTANTS.CONTRACT_BALANCE) : route.minimumAmountOut.quotient;
    if (this.context.mustCustody && this.context.routes.length === 1) {
      this.context.takeOverWrapSweep = {
        wrap: lastSection.wrapOutput
      };
    } else {
      if (lastSection.wrapOutput) {
        this.addWrapOut(recipient, amount, lastSection.poolOut);
        return;
      }
      this.addUnwrapOut(recipient, amount);
    }
  }
  addWrapOut(recipient, amountMinimum, currency) {
    this.addCommand(11 /* WRAP_ETH */, [ADDRESS_THIS$1, BigInt(ACTION_CONSTANTS.CONTRACT_BALANCE)]);
    this.addSweepCommand(currency.wrapped, recipient, amountMinimum);
  }
  addUnwrapOut(recipient, amountMinimum) {
    this.addCommand(12 /* UNWRAP_WETH */, [recipient, amountMinimum]);
  }
  addSweepCommand(currency, recipient, amountMinimum) {
    this.addCommand(4 /* SWEEP */, [currencyAddressInfinity(currency), recipient, amountMinimum]);
  }
  payFee() {
    let outAmount = SmartRouter.minimumAmountOut(this.trade, this.context.options.slippageTolerance);
    const { tradeType } = this.context.trade;
    if (this.context.takeOverWrapSweep) {
      const route = this.context.routes[0];
      const outputCurrency = route.sections[route.sections.length - 1].poolOut;
      outAmount = CurrencyAmount.fromRawAmount(outputCurrency, outAmount.quotient);
    }
    const { fee, flatFee } = this.options;
    if (fee) {
      const feeBips = BigInt(encodeFeeBips(fee.fee));
      this.addCommand(6 /* PAY_PORTION */, [currencyAddressInfinity(outAmount.currency), fee.recipient, feeBips]);
      if (tradeType === TradeType.EXACT_OUTPUT) {
        outAmount = outAmount.subtract(outAmount.multiply(feeBips).divide(1e4));
      }
    }
    if (flatFee) {
      const _fee = BigInt(flatFee.amount.toString());
      if (_fee < outAmount.quotient)
        throw new Error("Flat fee can't be greater than minimum amount out");
      this.addCommand(5 /* TRANSFER */, [currencyAddressInfinity(outAmount.currency), flatFee.recipient, _fee]);
      if (tradeType === TradeType.EXACT_OUTPUT) {
        outAmount = outAmount.subtract(_fee);
      }
    }
    if (this.context.mustCustody) {
      if (this.context.takeOverWrapSweep) {
        const { wrap } = this.context.takeOverWrapSweep;
        if (wrap) {
          this.addWrapOut(this.context.user, outAmount.quotient, outAmount.currency);
        } else {
          this.addUnwrapOut(this.context.user, outAmount.quotient);
        }
      } else {
        this.addCommand(4 /* SWEEP */, [
          currencyAddressInfinity(outAmount.currency),
          this.context.user,
          outAmount.quotient
        ]);
      }
    }
  }
  returnChanges() {
    const { returnChanges, user } = this.context;
    if (returnChanges) {
      const { wrap } = returnChanges;
      if (wrap) {
        this.addCommand(11 /* WRAP_ETH */, [user, BigInt(ACTION_CONSTANTS.CONTRACT_BALANCE)]);
      } else {
        this.addCommand(12 /* UNWRAP_WETH */, [user, 0n]);
      }
    }
  }
  // eslint-disable-next-line class-methods-use-this
  initializeInfinitySwap(actionPlaner, section, route) {
    const { prevSection, wrapInput, unwrapInput, payerIsUser, isFirstSection } = section;
    const inputWrapped = wrapInput || unwrapInput;
    const mergePrev = prevSection && prevSection.isInfinity && !inputWrapped;
    if (mergePrev || payerIsUser) {
      return;
    }
    const amountIn = route.maximumAmountIn.quotient;
    actionPlaner.add(ACTIONS.SETTLE, [
      currencyAddressInfinity(section.poolIn),
      isFirstSection ? amountIn : BigInt(ACTION_CONSTANTS.CONTRACT_BALANCE),
      false
    ]);
  }
  finalizeInfinitySwap(actionPlaner, section, recipient, amountIn) {
    const { prevSection, nextSection, wrapInput, unwrapInput, payerIsUser } = section;
    const inputWrapped = wrapInput || unwrapInput;
    const mergePrev = prevSection && prevSection.isInfinity && !inputWrapped;
    const mergeNext = Boolean(
      nextSection && nextSection.isInfinity && !nextSection.wrapInput && !nextSection.unwrapInput
    );
    if (!mergePrev) {
      if (payerIsUser) {
        actionPlaner.add(ACTIONS.SETTLE, [currencyAddressInfinity(section.poolIn), amountIn, true]);
      }
    }
    if (!mergeNext) {
      actionPlaner.add(ACTIONS.TAKE, [currencyAddressInfinity(section.poolOut), recipient, ACTION_CONSTANTS.OPEN_DELTA]);
      if (this.trade.tradeType === TradeType.EXACT_OUTPUT) {
        actionPlaner.add(ACTIONS.TAKE, [
          currencyAddressInfinity(section.poolIn),
          recipient,
          ACTION_CONSTANTS.OPEN_DELTA
        ]);
      }
    }
    if (!mergeNext) {
      this.addCommand(16 /* INFI_SWAP */, [actionPlaner.encodeActions(), actionPlaner.encodePlans()]);
      this.context.reusedActionPlaner = null;
    }
  }
};
function relaxToV2(forwardV2, pool) {
  const nextRouteAddress = forwardV2 ? getPoolAddress(pool) : ADDRESS_THIS$1;
  if (!nextRouteAddress) {
    throw new Error("unknown v2 pool address");
  }
  return nextRouteAddress;
}

// src/utils/encodePermit.ts
function encodePermit(planner, permit2) {
  planner.addCommand(10 /* PERMIT2_PERMIT */, [permit2, permit2.signature]);
}

// src/utils/inputTokens.ts
function encodeInputTokenOptions(planner, options) {
  if (!!options.approval && !!options.permit2Permit)
    invariant2(options.approval.token === options.permit2Permit.details.token, `inconsistent token`);
  if (!!options.approval && !!options.permit2TransferFrom)
    invariant2(options.approval.token === options.permit2TransferFrom.token, `inconsistent token`);
  if (!!options.permit2TransferFrom && !!options.permit2Permit)
    invariant2(options.permit2TransferFrom.token === options.permit2Permit.details.token, `inconsistent token`);
  if (options.permit2Permit) {
    encodePermit(planner, options.permit2Permit);
  }
  if (options.permit2TransferFrom) {
    planner.addCommand(2 /* PERMIT2_TRANSFER_FROM */, [
      options.permit2TransferFrom.token,
      options.permit2TransferFrom.recipient ? options.permit2TransferFrom.recipient : ADDRESS_THIS,
      BigInt(options.permit2TransferFrom.amount)
    ]);
  }
}

// src/entities/Command.ts
var RouterTradeType = /* @__PURE__ */ ((RouterTradeType2) => {
  RouterTradeType2["PancakeSwapTrade"] = "PancakeSwapTrade";
  RouterTradeType2["UnwrapWETH"] = "UnwrapWETH";
  return RouterTradeType2;
})(RouterTradeType || {});

// src/entities/protocols/unwrapWETH.ts
var UnwrapWETH = class {
  constructor(amount, chainId, permit2) {
    this.tradeType = "UnwrapWETH" /* UnwrapWETH */;
    this.wethAddress = WETH9[chainId].address;
    this.amount = amount;
    if (permit2) {
      invariant2(
        permit2.details.token.toLowerCase() === this.wethAddress.toLowerCase(),
        `must be permitting WETH address: ${this.wethAddress}`
      );
      invariant2(permit2.details.amount >= amount, `Did not permit enough WETH for unwrapWETH transaction`);
      this.permit2Data = permit2;
    }
  }
  encode(planner, _) {
    encodeInputTokenOptions(planner, {
      permit2Permit: this.permit2Data,
      permit2TransferFrom: {
        token: this.wethAddress,
        amount: this.amount.toString()
      }
    });
    planner.addCommand(12 /* UNWRAP_WETH */, [ADDRESS_THIS$1, BigInt(this.amount.toString())]);
  }
};

// src/abis/UniversalRouter.ts
var UniversalRouterABI = [
  {
    type: "constructor",
    inputs: [
      {
        name: "params",
        type: "tuple",
        internalType: "struct RouterParameters",
        components: [
          { name: "permit2", type: "address", internalType: "address" },
          { name: "weth9", type: "address", internalType: "address" },
          { name: "v2Factory", type: "address", internalType: "address" },
          { name: "v3Factory", type: "address", internalType: "address" },
          { name: "v3Deployer", type: "address", internalType: "address" },
          { name: "v2InitCodeHash", type: "bytes32", internalType: "bytes32" },
          { name: "v3InitCodeHash", type: "bytes32", internalType: "bytes32" },
          { name: "stableFactory", type: "address", internalType: "address" },
          { name: "stableInfo", type: "address", internalType: "address" },
          { name: "infiVault", type: "address", internalType: "address" },
          { name: "infiClPoolManager", type: "address", internalType: "address" },
          { name: "infiBinPoolManager", type: "address", internalType: "address" },
          { name: "v3NFTPositionManager", type: "address", internalType: "address" },
          { name: "infiClPositionManager", type: "address", internalType: "address" },
          { name: "infiBinPositionManager", type: "address", internalType: "address" }
        ]
      }
    ],
    stateMutability: "nonpayable"
  },
  { type: "receive", stateMutability: "payable" },
  {
    type: "function",
    name: "INFI_BIN_POSITION_MANAGER",
    inputs: [],
    outputs: [{ name: "", type: "address", internalType: "contract IPositionManager" }],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "INFI_CL_POSITION_MANAGER",
    inputs: [],
    outputs: [{ name: "", type: "address", internalType: "contract IPositionManager" }],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "V3_POSITION_MANAGER",
    inputs: [],
    outputs: [{ name: "", type: "address", internalType: "contract IV3NonfungiblePositionManager" }],
    stateMutability: "view"
  },
  { type: "function", name: "acceptOwnership", inputs: [], outputs: [], stateMutability: "nonpayable" },
  {
    type: "function",
    name: "binPoolManager",
    inputs: [],
    outputs: [{ name: "", type: "address", internalType: "contract IBinPoolManager" }],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "clPoolManager",
    inputs: [],
    outputs: [{ name: "", type: "address", internalType: "contract ICLPoolManager" }],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "execute",
    inputs: [
      { name: "commands", type: "bytes", internalType: "bytes" },
      { name: "inputs", type: "bytes[]", internalType: "bytes[]" }
    ],
    outputs: [],
    stateMutability: "payable"
  },
  {
    type: "function",
    name: "execute",
    inputs: [
      { name: "commands", type: "bytes", internalType: "bytes" },
      { name: "inputs", type: "bytes[]", internalType: "bytes[]" },
      { name: "deadline", type: "uint256", internalType: "uint256" }
    ],
    outputs: [],
    stateMutability: "payable"
  },
  {
    type: "function",
    name: "lockAcquired",
    inputs: [{ name: "data", type: "bytes", internalType: "bytes" }],
    outputs: [{ name: "", type: "bytes", internalType: "bytes" }],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "msgSender",
    inputs: [],
    outputs: [{ name: "", type: "address", internalType: "address" }],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "owner",
    inputs: [],
    outputs: [{ name: "", type: "address", internalType: "address" }],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "pancakeV3SwapCallback",
    inputs: [
      { name: "amount0Delta", type: "int256", internalType: "int256" },
      { name: "amount1Delta", type: "int256", internalType: "int256" },
      { name: "data", type: "bytes", internalType: "bytes" }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  { type: "function", name: "pause", inputs: [], outputs: [], stateMutability: "nonpayable" },
  {
    type: "function",
    name: "paused",
    inputs: [],
    outputs: [{ name: "", type: "bool", internalType: "bool" }],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "pendingOwner",
    inputs: [],
    outputs: [{ name: "", type: "address", internalType: "address" }],
    stateMutability: "view"
  },
  { type: "function", name: "renounceOwnership", inputs: [], outputs: [], stateMutability: "nonpayable" },
  {
    type: "function",
    name: "setStableSwap",
    inputs: [
      { name: "_factory", type: "address", internalType: "address" },
      { name: "_info", type: "address", internalType: "address" }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "stableSwapFactory",
    inputs: [],
    outputs: [{ name: "", type: "address", internalType: "address" }],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "stableSwapInfo",
    inputs: [],
    outputs: [{ name: "", type: "address", internalType: "address" }],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "transferOwnership",
    inputs: [{ name: "newOwner", type: "address", internalType: "address" }],
    outputs: [],
    stateMutability: "nonpayable"
  },
  { type: "function", name: "unpause", inputs: [], outputs: [], stateMutability: "nonpayable" },
  {
    type: "function",
    name: "vault",
    inputs: [],
    outputs: [{ name: "", type: "address", internalType: "contract IVault" }],
    stateMutability: "view"
  },
  {
    type: "event",
    name: "OwnershipTransferStarted",
    inputs: [
      { name: "previousOwner", type: "address", indexed: true, internalType: "address" },
      { name: "newOwner", type: "address", indexed: true, internalType: "address" }
    ],
    anonymous: false
  },
  {
    type: "event",
    name: "OwnershipTransferred",
    inputs: [
      { name: "previousOwner", type: "address", indexed: true, internalType: "address" },
      { name: "newOwner", type: "address", indexed: true, internalType: "address" }
    ],
    anonymous: false
  },
  {
    type: "event",
    name: "Paused",
    inputs: [{ name: "account", type: "address", indexed: false, internalType: "address" }],
    anonymous: false
  },
  {
    type: "event",
    name: "SetStableSwap",
    inputs: [
      { name: "factory", type: "address", indexed: true, internalType: "address" },
      { name: "info", type: "address", indexed: true, internalType: "address" }
    ],
    anonymous: false
  },
  {
    type: "event",
    name: "Unpaused",
    inputs: [{ name: "account", type: "address", indexed: false, internalType: "address" }],
    anonymous: false
  },
  { type: "error", name: "BalanceTooLow", inputs: [] },
  { type: "error", name: "ContractLocked", inputs: [] },
  {
    type: "error",
    name: "DeltaNotNegative",
    inputs: [{ name: "currency", type: "address", internalType: "Currency" }]
  },
  {
    type: "error",
    name: "DeltaNotPositive",
    inputs: [{ name: "currency", type: "address", internalType: "Currency" }]
  },
  { type: "error", name: "ETHNotAccepted", inputs: [] },
  { type: "error", name: "EnforcedPause", inputs: [] },
  {
    type: "error",
    name: "ExecutionFailed",
    inputs: [
      { name: "commandIndex", type: "uint256", internalType: "uint256" },
      { name: "message", type: "bytes", internalType: "bytes" }
    ]
  },
  { type: "error", name: "ExpectedPause", inputs: [] },
  { type: "error", name: "FromAddressIsNotOwner", inputs: [] },
  { type: "error", name: "InputLengthMismatch", inputs: [] },
  { type: "error", name: "InsufficientBalance", inputs: [] },
  { type: "error", name: "InsufficientETH", inputs: [] },
  { type: "error", name: "InsufficientToken", inputs: [] },
  { type: "error", name: "InvalidAction", inputs: [{ name: "action", type: "bytes4", internalType: "bytes4" }] },
  { type: "error", name: "InvalidBips", inputs: [] },
  {
    type: "error",
    name: "InvalidCommandType",
    inputs: [{ name: "commandType", type: "uint256", internalType: "uint256" }]
  },
  { type: "error", name: "InvalidEthSender", inputs: [] },
  { type: "error", name: "InvalidPath", inputs: [] },
  { type: "error", name: "InvalidPoolAddress", inputs: [] },
  { type: "error", name: "InvalidPoolLength", inputs: [] },
  { type: "error", name: "InvalidReserves", inputs: [] },
  { type: "error", name: "LengthMismatch", inputs: [] },
  {
    type: "error",
    name: "NotAuthorizedForToken",
    inputs: [{ name: "tokenId", type: "uint256", internalType: "uint256" }]
  },
  { type: "error", name: "NotVault", inputs: [] },
  { type: "error", name: "OnlyAddLiqudityAllowed", inputs: [] },
  { type: "error", name: "OnlyMintAllowed", inputs: [] },
  { type: "error", name: "OwnableInvalidOwner", inputs: [{ name: "owner", type: "address", internalType: "address" }] },
  {
    type: "error",
    name: "OwnableUnauthorizedAccount",
    inputs: [{ name: "account", type: "address", internalType: "address" }]
  },
  { type: "error", name: "SafeCastOverflow", inputs: [] },
  { type: "error", name: "SliceOutOfBounds", inputs: [] },
  { type: "error", name: "StableInvalidPath", inputs: [] },
  { type: "error", name: "StableTooLittleReceived", inputs: [] },
  { type: "error", name: "StableTooMuchRequested", inputs: [] },
  {
    type: "error",
    name: "TooLittleReceived",
    inputs: [
      { name: "minAmountOutReceived", type: "uint256", internalType: "uint256" },
      { name: "amountReceived", type: "uint256", internalType: "uint256" }
    ]
  },
  {
    type: "error",
    name: "TooMuchRequested",
    inputs: [
      { name: "maxAmountInRequested", type: "uint256", internalType: "uint256" },
      { name: "amountRequested", type: "uint256", internalType: "uint256" }
    ]
  },
  { type: "error", name: "TransactionDeadlinePassed", inputs: [] },
  { type: "error", name: "UnsafeCast", inputs: [] },
  { type: "error", name: "UnsupportedAction", inputs: [{ name: "action", type: "uint256", internalType: "uint256" }] },
  { type: "error", name: "V2InvalidPath", inputs: [] },
  { type: "error", name: "V2TooLittleReceived", inputs: [] },
  { type: "error", name: "V2TooMuchRequested", inputs: [] },
  { type: "error", name: "V3InvalidAmountOut", inputs: [] },
  { type: "error", name: "V3InvalidCaller", inputs: [] },
  { type: "error", name: "V3InvalidSwap", inputs: [] },
  { type: "error", name: "V3TooLittleReceived", inputs: [] },
  { type: "error", name: "V3TooMuchRequested", inputs: [] }
];
function decodeUniversalCalldata(calldata, abiParameter = ABI_PARAMETER) {
  const { functionName, args } = decodeFunctionData({
    abi: UniversalRouterABI,
    data: calldata
  });
  if (functionName !== "execute")
    throw RangeError(`Invalid function called: ${functionName}, support 'execute' only`);
  const commands = args[0].toString().match(/../g)?.splice(1).map((str) => BigInt(`0x${str}`).toString()) ?? [];
  const decoded = [];
  for (const [index, command] of Object.entries(commands)) {
    const abi = abiParameter[command];
    const commandName = CommandType[parseInt(command)];
    const parameters = decodeAbiParameters(abi, args[1][Number(index)]);
    const formatedArgs = [];
    for (const [i, p] of Object.entries(abi)) {
      formatedArgs.push({
        type: p.type,
        name: p.name,
        value: parameters[Number(i)]
      });
    }
    if (commandName === "INFI_SWAP") {
      const decodedActions = decodeActions(formatedArgs[0].value, formatedArgs[1].value);
      decoded.push({
        command: commandName,
        args: [],
        actions: decodedActions
      });
    } else {
      decoded.push({
        command: commandName,
        args: formatedArgs
      });
    }
  }
  return decoded;
}
function decodeActions(actionsHex, inputs) {
  const actions = Array.from(toBytes(actionsHex));
  const decodedActions = [];
  for (const [actionIndex, actionCode] of Object.entries(actions)) {
    const actionType = actionCode;
    const actionName = ACTIONS[actionType];
    const abi = ACTIONS_ABI[actionType];
    const parameters = decodeAbiParameters(abi, inputs[Number(actionIndex)]);
    const formatedArgs = [];
    for (const [i, p] of Object.entries(abi)) {
      formatedArgs.push({
        type: p.type,
        name: p.name,
        value: parameters[Number(i)]
      });
    }
    decodedActions.push({
      action: actionName,
      args: formatedArgs
    });
  }
  return decodedActions;
}

// src/PancakeSwapUniversalRouter.ts
var PancakeSwapUniversalRouter = class {
  /**
   * Produces the on-chain method name to call and the hex encoded parameters to pass as arguments for a given trade.
   * @param trades to produce call parameters for
   * @param options options for the call parameters
   */
  static swapERC20CallParameters(trade, _options) {
    const options = { payerIsUser: true, ..._options };
    const planner = new TradePlanner(trade, options);
    const inputCurrency = planner.trade.inputAmount.currency;
    if (options.payerIsUser) {
      invariant2(!(inputCurrency.isNative && !!options.inputTokenPermit), "NATIVE_INPUT_PERMIT");
    }
    if (options.inputTokenPermit && typeof options.inputTokenPermit === "object") {
      encodePermit(planner, options.inputTokenPermit);
    }
    const nativeCurrencyValue = options.payerIsUser ? inputCurrency.isNative ? SmartRouter.maximumAmountIn(planner.trade, options.slippageTolerance, planner.trade.inputAmount).quotient : 0n : 0n;
    planner.encode();
    const encoded = PancakeSwapUniversalRouter.encodePlan(planner, nativeCurrencyValue, {
      deadline: options.deadlineOrPreviousBlockhash ? BigInt(options.deadlineOrPreviousBlockhash.toString()) : void 0
    });
    return encoded;
  }
  static decodeCallData(calldata) {
    return decodeUniversalCalldata(calldata);
  }
  /**
   * Encodes a planned route into a method name and parameters for the Router contract.
   * @param planner the planned route
   * @param nativeCurrencyValue the native currency value of the planned route
   * @param config the router config
   */
  static encodePlan(planner, nativeCurrencyValue, config = {}) {
    const { commands, inputs } = planner;
    const calldata = config.deadline ? encodeFunctionData({
      abi: UniversalRouterABI,
      args: [commands, inputs, BigInt(config.deadline)],
      functionName: "execute"
    }) : encodeFunctionData({ abi: UniversalRouterABI, args: [commands, inputs], functionName: "execute" });
    return { calldata, value: toHex(nativeCurrencyValue) };
  }
};

export { PancakeSwapUniversalRouter, RouterTradeType, TradePlanner, UnwrapWETH, getUniversalRouterAddress };
