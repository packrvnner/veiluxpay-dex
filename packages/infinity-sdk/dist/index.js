'use strict';

var viem = require('viem');
var chains = require('@pancakeswap/chains');
var v3Sdk = require('@pancakeswap/v3-sdk');
var invariant12 = require('tiny-invariant');
var swapSdkCore = require('@pancakeswap/swap-sdk-core');
var BigNumber2 = require('bignumber.js');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var invariant12__default = /*#__PURE__*/_interopDefault(invariant12);
var BigNumber2__default = /*#__PURE__*/_interopDefault(BigNumber2);

// src/constants/index.ts

// src/constants/actions.ts
var ACTIONS = /* @__PURE__ */ ((ACTIONS2) => {
  ACTIONS2[ACTIONS2["CL_INCREASE_LIQUIDITY"] = 0] = "CL_INCREASE_LIQUIDITY";
  ACTIONS2[ACTIONS2["CL_DECREASE_LIQUIDITY"] = 1] = "CL_DECREASE_LIQUIDITY";
  ACTIONS2[ACTIONS2["CL_MINT_POSITION"] = 2] = "CL_MINT_POSITION";
  ACTIONS2[ACTIONS2["CL_BURN_POSITION"] = 3] = "CL_BURN_POSITION";
  ACTIONS2[ACTIONS2["CL_INCREASE_LIQUIDITY_FROM_DELTAS"] = 4] = "CL_INCREASE_LIQUIDITY_FROM_DELTAS";
  ACTIONS2[ACTIONS2["CL_MINT_POSITION_FROM_DELTAS"] = 5] = "CL_MINT_POSITION_FROM_DELTAS";
  ACTIONS2[ACTIONS2["CL_SWAP_EXACT_IN_SINGLE"] = 6] = "CL_SWAP_EXACT_IN_SINGLE";
  ACTIONS2[ACTIONS2["CL_SWAP_EXACT_IN"] = 7] = "CL_SWAP_EXACT_IN";
  ACTIONS2[ACTIONS2["CL_SWAP_EXACT_OUT_SINGLE"] = 8] = "CL_SWAP_EXACT_OUT_SINGLE";
  ACTIONS2[ACTIONS2["CL_SWAP_EXACT_OUT"] = 9] = "CL_SWAP_EXACT_OUT";
  ACTIONS2[ACTIONS2["CL_DONATE"] = 10] = "CL_DONATE";
  ACTIONS2[ACTIONS2["SETTLE"] = 11] = "SETTLE";
  ACTIONS2[ACTIONS2["SETTLE_ALL"] = 12] = "SETTLE_ALL";
  ACTIONS2[ACTIONS2["SETTLE_PAIR"] = 13] = "SETTLE_PAIR";
  ACTIONS2[ACTIONS2["TAKE"] = 14] = "TAKE";
  ACTIONS2[ACTIONS2["TAKE_ALL"] = 15] = "TAKE_ALL";
  ACTIONS2[ACTIONS2["TAKE_PORTION"] = 16] = "TAKE_PORTION";
  ACTIONS2[ACTIONS2["TAKE_PAIR"] = 17] = "TAKE_PAIR";
  ACTIONS2[ACTIONS2["CLOSE_CURRENCY"] = 18] = "CLOSE_CURRENCY";
  ACTIONS2[ACTIONS2["CLEAR_OR_TAKE"] = 19] = "CLEAR_OR_TAKE";
  ACTIONS2[ACTIONS2["SWEEP"] = 20] = "SWEEP";
  ACTIONS2[ACTIONS2["WRAP"] = 21] = "WRAP";
  ACTIONS2[ACTIONS2["UNWRAP"] = 22] = "UNWRAP";
  ACTIONS2[ACTIONS2["MINT_6909"] = 23] = "MINT_6909";
  ACTIONS2[ACTIONS2["BURN_6909"] = 24] = "BURN_6909";
  ACTIONS2[ACTIONS2["BIN_ADD_LIQUIDITY"] = 25] = "BIN_ADD_LIQUIDITY";
  ACTIONS2[ACTIONS2["BIN_REMOVE_LIQUIDITY"] = 26] = "BIN_REMOVE_LIQUIDITY";
  ACTIONS2[ACTIONS2["BIN_ADD_LIQUIDITY_FROM_DELTAS"] = 27] = "BIN_ADD_LIQUIDITY_FROM_DELTAS";
  ACTIONS2[ACTIONS2["BIN_SWAP_EXACT_IN_SINGLE"] = 28] = "BIN_SWAP_EXACT_IN_SINGLE";
  ACTIONS2[ACTIONS2["BIN_SWAP_EXACT_IN"] = 29] = "BIN_SWAP_EXACT_IN";
  ACTIONS2[ACTIONS2["BIN_SWAP_EXACT_OUT_SINGLE"] = 30] = "BIN_SWAP_EXACT_OUT_SINGLE";
  ACTIONS2[ACTIONS2["BIN_SWAP_EXACT_OUT"] = 31] = "BIN_SWAP_EXACT_OUT";
  ACTIONS2[ACTIONS2["BIN_DONATE"] = 32] = "BIN_DONATE";
  return ACTIONS2;
})(ACTIONS || {});
var ACTION_CONSTANTS = {
  OPEN_DELTA: 0n,
  CONTRACT_BALANCE: "0x8000000000000000000000000000000000000000000000000000000000000000",
  MSG_SENDER: "0x0000000000000000000000000000000000000001",
  ADDRESS_THIS: "0x0000000000000000000000000000000000000002"
};

// src/constants/abiStructFragments.ts
var composeABIFragment = (structString, relatedStructs = []) => {
  return [structString, ...relatedStructs].map((s) => s.replace(/\n/g, "").trim());
};
var ABI_STRUCT_POOL_KEY = composeABIFragment(`
struct PoolKey {
  address currency0;
  address currency1;
  address hooks;
  address poolManager;
  uint24 fee;
  bytes32 parameters;
}`);
var ABI_STRUCT_PATH_KEY = composeABIFragment(`
struct PathKey {
  address intermediateCurrency;
  uint24 fee;
  address hooks;
  address poolManager;
  bytes hookData;
  bytes32 parameters;
}`);
var ABI_STRUCT_POSITION_CONFIG = composeABIFragment(
  `
struct PositionConfig {
  PoolKey poolKey;
  int24 tickLower;
  int24 tickUpper;
}
`,
  ABI_STRUCT_POOL_KEY
);
var ABI_STRUCT_CL_SWAP_EXACT_INPUT_SINGLE_PARAMS = composeABIFragment(
  `
struct CLSwapExactInputSingleParams {
  PoolKey poolKey;
  bool zeroForOne;
  uint128 amountIn;
  uint128 amountOutMinimum;
  bytes hookData;
}
`,
  ABI_STRUCT_POOL_KEY
);
var ABI_STRUCT_CL_SWAP_EXACT_INPUT_PARAMS = composeABIFragment(
  `
struct CLSwapExactInputParams {
  address currencyIn;
  PathKey[] path;
  uint128 amountIn;
  uint128 amountOutMinimum;
}
  `,
  ABI_STRUCT_PATH_KEY
);
var ABI_STRUCT_CL_SWAP_EXACT_OUTPUT_SINGLE_PARAMS = composeABIFragment(
  `
struct CLSwapExactOutputSingleParams {
  PoolKey poolKey;
  bool zeroForOne;
  uint128 amountOut;
  uint128 amountInMaximum;
  bytes hookData;
}
  `,
  ABI_STRUCT_POOL_KEY
);
var ABI_STRUCT_CL_SWAP_EXACT_OUTPUT_PARAMS = composeABIFragment(
  `
struct CLSwapExactOutputParams {
  address currencyOut;
  PathKey[] path;
  uint128 amountOut;
  uint128 amountInMaximum;
}
  `,
  ABI_STRUCT_PATH_KEY
);
var ABI_STRUCT_BIN_ADD_LIQUIDITY_FROM_DELTAS_PARAMS = composeABIFragment(
  `
struct BinAddLiquidityFromDeltasParams {
  PoolKey poolKey;
  uint128 amount0Max;
  uint128 amount1Max;
  uint256 activeIdDesired;
  uint256 idSlippage;
  int256[] deltaIds;
  uint256[] distributionX;
  uint256[] distributionY;
  address to;
  bytes hookData; 
}
`,
  ABI_STRUCT_POOL_KEY
);
var ABI_STRUCT_BIN_ADD_LIQUIDITY_PARAMS = composeABIFragment(
  `
struct BinAddLiquidityParams {
  PoolKey poolKey;
  uint128 amount0;
  uint128 amount1;
  uint128 amount0Max;
  uint128 amount1Max;
  uint256 activeIdDesired;
  uint256 idSlippage;
  int256[] deltaIds;
  uint256[] distributionX;
  uint256[] distributionY;
  address to;
  bytes hookData;
}
  `,
  ABI_STRUCT_POOL_KEY
);
var ABI_STRUCT_BIN_REMOVE_LIQUIDITY_PARAMS = composeABIFragment(
  `
struct BinRemoveLiquidityParams {
  PoolKey poolKey;
  uint128 amount0Min;
  uint128 amount1Min;
  uint256[] ids;
  uint256[] amounts;
  address from;
  bytes hookData;
}
  `,
  ABI_STRUCT_POOL_KEY
);
var ABI_STRUCT_BIN_SWAP_EXACT_INPUT_SINGLE_PARAMS = composeABIFragment(
  `
struct BinSwapExactInputSingleParams {
  PoolKey poolKey;
  bool zeroForOne;
  uint128 amountIn;
  uint128 amountOutMinimum;
  bytes hookData;
}
  `,
  ABI_STRUCT_POOL_KEY
);
var ABI_STRUCT_BIN_SWAP_EXACT_INPUT_PARAMS = composeABIFragment(
  `
struct BinSwapExactInputParams {
  address currencyIn;
  PathKey[] path;
  uint128 amountIn;
  uint128 amountOutMinimum;
}
`,
  ABI_STRUCT_PATH_KEY
);
var ABI_STRUCT_BIN_SWAP_EXACT_OUTPUT_SINGLE_PARAMS = composeABIFragment(
  `
struct BinSwapExactOutputSingleParams {
  PoolKey poolKey;
  bool zeroForOne;
  uint128 amountOut;
  uint128 amountInMaximum;
  bytes hookData;
}
  `,
  ABI_STRUCT_POOL_KEY
);
var ABI_STRUCT_BIN_SWAP_EXACT_OUTPUT_PARAMS = composeABIFragment(
  `
struct BinSwapExactOutputParams {
  address currencyOut;
  PathKey[] path;
  uint128 amountOut;
  uint128 amountInMaximum;
}
`,
  ABI_STRUCT_PATH_KEY
);

// src/constants/actionsAbiParameters.ts
var ACTIONS_ABI = {
  // 0x00
  [0 /* CL_INCREASE_LIQUIDITY */]: viem.parseAbiParameters([
    "uint256 tokenId, uint128 liquidity, uint128 amount0Max, uint128 amount1Max, bytes hookData",
    ...ABI_STRUCT_POSITION_CONFIG
  ]),
  // 0x01
  [1 /* CL_DECREASE_LIQUIDITY */]: viem.parseAbiParameters(
    "uint256 tokenId, uint128 liquidity, uint128 amount0Min, uint128 amount1Min, bytes hookData"
  ),
  // 0x02
  [2 /* CL_MINT_POSITION */]: viem.parseAbiParameters([
    "PositionConfig positionConfig, uint128 liquidity, uint128 amount0Max, uint128 amount1Max, address owner, bytes hookData",
    ...ABI_STRUCT_POSITION_CONFIG
  ]),
  // 0x03
  [3 /* CL_BURN_POSITION */]: viem.parseAbiParameters([
    "uint256 tokenId, PositionConfig config, uint128 amount0Min, uint128 amount1Min, bytes hookData",
    ...ABI_STRUCT_POSITION_CONFIG
  ]),
  // 0x04
  [4 /* CL_INCREASE_LIQUIDITY_FROM_DELTAS */]: viem.parseAbiParameters([
    "uint256 tokenId, uint128 amount0Max, uint128 amount1Max, bytes hookData"
  ]),
  // 0x05
  [5 /* CL_MINT_POSITION_FROM_DELTAS */]: viem.parseAbiParameters([
    "PoolKey poolKey, int24 tickLower, int24 tickUpper, uint128 amount0Max, uint128 amount1Max, address owner, bytes hookData",
    ...ABI_STRUCT_POOL_KEY
  ]),
  // 0x06
  [6 /* CL_SWAP_EXACT_IN_SINGLE */]: viem.parseAbiParameters([
    "CLSwapExactInputSingleParams params",
    ...ABI_STRUCT_CL_SWAP_EXACT_INPUT_SINGLE_PARAMS
  ]),
  // 0x07
  [7 /* CL_SWAP_EXACT_IN */]: viem.parseAbiParameters([
    "CLSwapExactInputParams params",
    ...ABI_STRUCT_CL_SWAP_EXACT_INPUT_PARAMS
  ]),
  // 0x08
  [8 /* CL_SWAP_EXACT_OUT_SINGLE */]: viem.parseAbiParameters([
    "CLSwapExactOutputSingleParams params",
    ...ABI_STRUCT_CL_SWAP_EXACT_OUTPUT_SINGLE_PARAMS
  ]),
  // 0x09
  [9 /* CL_SWAP_EXACT_OUT */]: viem.parseAbiParameters([
    "CLSwapExactOutputParams params",
    ...ABI_STRUCT_CL_SWAP_EXACT_OUTPUT_PARAMS
  ]),
  // [ACTIONS.CL_DONATE]: parseAbiParameters('NOT SUPPORTED'),
  // 0x0b
  [11 /* SETTLE */]: viem.parseAbiParameters("address currency, uint256 amount, bool payerIsUser"),
  // 0x0c
  [12 /* SETTLE_ALL */]: viem.parseAbiParameters("address currency, uint256 maxAmount"),
  // 0x0d
  [13 /* SETTLE_PAIR */]: viem.parseAbiParameters("address currency0, address currency1"),
  // 0x0e
  [14 /* TAKE */]: viem.parseAbiParameters("address currency, address recipient, uint256 amount"),
  // 0x0f
  [15 /* TAKE_ALL */]: viem.parseAbiParameters("address currency, uint256 minAmount"),
  // 0x10
  [16 /* TAKE_PORTION */]: viem.parseAbiParameters("address currency, address recipient, uint256 bips"),
  // 0x11
  [17 /* TAKE_PAIR */]: viem.parseAbiParameters("address currency0, address currency1, address to"),
  // 0x12
  [18 /* CLOSE_CURRENCY */]: viem.parseAbiParameters("address currency"),
  // 0x13
  [19 /* CLEAR_OR_TAKE */]: viem.parseAbiParameters("address currency, uint256 amountMax"),
  // 0x14
  [20 /* SWEEP */]: viem.parseAbiParameters("address currency, address to"),
  // 0x15
  [21 /* WRAP */]: viem.parseAbiParameters("uint256 amount"),
  // 0x16
  [22 /* UNWRAP */]: viem.parseAbiParameters("uint256 amount"),
  // 0x17
  // [ACTIONS.MINT_6909]: parseAbiParameters('NOT SUPPORTED'),
  // 0x18
  // [ACTIONS.BURN_6909]: parseAbiParameters('NOT SUPPORTED'),
  // 0x19
  [25 /* BIN_ADD_LIQUIDITY */]: viem.parseAbiParameters([
    "BinAddLiquidityParams params",
    ...ABI_STRUCT_BIN_ADD_LIQUIDITY_PARAMS
  ]),
  // 0x1a
  [26 /* BIN_REMOVE_LIQUIDITY */]: viem.parseAbiParameters([
    "BinRemoveLiquidityParams params",
    ...ABI_STRUCT_BIN_REMOVE_LIQUIDITY_PARAMS
  ]),
  // 0x1b
  [27 /* BIN_ADD_LIQUIDITY_FROM_DELTAS */]: viem.parseAbiParameters([
    "BinAddLiquidityFromDeltasParams params",
    ...ABI_STRUCT_BIN_ADD_LIQUIDITY_FROM_DELTAS_PARAMS
  ]),
  // 0x1c
  [28 /* BIN_SWAP_EXACT_IN_SINGLE */]: viem.parseAbiParameters([
    "BinSwapExactInputSingleParams params",
    ...ABI_STRUCT_BIN_SWAP_EXACT_INPUT_SINGLE_PARAMS
  ]),
  // 0x1d
  [29 /* BIN_SWAP_EXACT_IN */]: viem.parseAbiParameters([
    "BinSwapExactInputParams params",
    ...ABI_STRUCT_BIN_SWAP_EXACT_INPUT_PARAMS
  ]),
  // 0x1e
  [30 /* BIN_SWAP_EXACT_OUT_SINGLE */]: viem.parseAbiParameters([
    "BinSwapExactOutputSingleParams params",
    ...ABI_STRUCT_BIN_SWAP_EXACT_OUTPUT_SINGLE_PARAMS
  ]),
  // 0x1f
  [31 /* BIN_SWAP_EXACT_OUT */]: viem.parseAbiParameters([
    "BinSwapExactOutputParams params",
    ...ABI_STRUCT_BIN_SWAP_EXACT_OUTPUT_PARAMS
  ])
  // [ACTIONS.BIN_DONATE]: parseAbiParameters('NOT SUPPORTED'),
};
var INFINITY_SUPPORTED_CHAINS = [chains.ChainId.BSC, chains.ChainId.BSC_TESTNET, chains.ChainId.SEPOLIA, chains.ChainId.BASE];
var INFI_VAULT_ADDRESSES = {
  [chains.ChainId.BSC]: "0x238a358808379702088667322f80aC48bAd5e6c4",
  [chains.ChainId.BSC_TESTNET]: "0x2CdB3EC82EE13d341Dc6E73637BE0Eab79cb79dD",
  [chains.ChainId.SEPOLIA]: "0x4670F769Daa625FF5F89719AE5295E9824f5805f",
  [chains.ChainId.BASE]: "0x238a358808379702088667322f80aC48bAd5e6c4"
};
var INFI_CL_POOL_MANAGER_ADDRESSES = {
  [chains.ChainId.BSC]: "0xa0FfB9c1CE1Fe56963B0321B32E7A0302114058b",
  [chains.ChainId.BSC_TESTNET]: "0x36A12c70c9Cf64f24E89ee132BF93Df2DCD199d4",
  [chains.ChainId.SEPOLIA]: "0xD4EAc75ee0E76EAD6AC6995DF30CA14b38549682",
  [chains.ChainId.BASE]: "0xa0FfB9c1CE1Fe56963B0321B32E7A0302114058b"
};
var INFI_BIN_POOL_MANAGER_ADDRESSES = {
  [chains.ChainId.BSC]: "0xC697d2898e0D09264376196696c51D7aBbbAA4a9",
  [chains.ChainId.BSC_TESTNET]: "0xe71d2e0230cE0765be53A8A1ee05bdACF30F296B",
  [chains.ChainId.SEPOLIA]: "0x0Ca8430E263A098B998E47e0544C2C82B30CbDB1",
  [chains.ChainId.BASE]: "0xC697d2898e0D09264376196696c51D7aBbbAA4a9"
};
var INFI_CL_POSITION_MANAGER_ADDRESSES = {
  [chains.ChainId.BSC]: "0x55f4c8abA71A1e923edC303eb4fEfF14608cC226",
  [chains.ChainId.BSC_TESTNET]: "0x77DedB52EC6260daC4011313DBEE09616d30d122",
  [chains.ChainId.SEPOLIA]: "0x53C9802F47295979c0E154779eD10fa6af27D7cA",
  [chains.ChainId.BASE]: "0x55f4c8abA71A1e923edC303eb4fEfF14608cC226"
};
var INFI_BIN_POSITION_MANAGER_ADDRESSES = {
  [chains.ChainId.BSC]: "0x3D311D6283Dd8aB90bb0031835C8e606349e2850",
  [chains.ChainId.BSC_TESTNET]: "0x68B834232da911c787bcF782CED84ec5d36909a7",
  [chains.ChainId.SEPOLIA]: "0x21015eF9927e06b7Fc19D986A214e449Aa22FF7d",
  [chains.ChainId.BASE]: "0x3D311D6283Dd8aB90bb0031835C8e606349e2850"
};
var INFI_CL_QUOTER_ADDRESSES = {
  [chains.ChainId.BSC]: "0xd0737C9762912dD34c3271197E362Aa736Df0926",
  [chains.ChainId.BSC_TESTNET]: "0x5d544D0ad627a72d7Fb53c22D8888663FC5d5B0d",
  [chains.ChainId.SEPOLIA]: "0x6B71bA938100FD313Be08E680639900E0cfE3d74",
  [chains.ChainId.BASE]: "0xd0737C9762912dD34c3271197E362Aa736Df0926"
};
var INFI_BIN_QUOTER_ADDRESSES = {
  [chains.ChainId.BSC]: "0xC631f4B0Fc2Dd68AD45f74B2942628db117dD359",
  [chains.ChainId.BSC_TESTNET]: "0x82E7741E3DE763692785cfDB536D168B1226c4d5",
  [chains.ChainId.SEPOLIA]: "0x4DcaF8f6040B12a2C6149956Cc2e36FA3b7a60b9",
  [chains.ChainId.BASE]: "0xC631f4B0Fc2Dd68AD45f74B2942628db117dD359"
};
var INFI_MIXED_QUOTER_ADDRESSES = {
  [chains.ChainId.BSC]: "0x2dCbF7B985c8C5C931818e4E107bAe8aaC8dAB7C",
  [chains.ChainId.BSC_TESTNET]: "0xdf70a0A2DADC2a01dbE165702aa6dCdf034628b0",
  [chains.ChainId.SEPOLIA]: "0x3F47BDA24e069FC5f28B74d4FAB27EeBA006eF92",
  [chains.ChainId.BASE]: "0x2dCbF7B985c8C5C931818e4E107bAe8aaC8dAB7C"
};
var INFI_CL_MIGRATOR_ADDRESSES = {
  [chains.ChainId.BSC]: "0x",
  [chains.ChainId.BSC_TESTNET]: "0x8637035016cbF8E38519c9A1362b1fDDcA1c1A91",
  [chains.ChainId.SEPOLIA]: "0x32D31C2020868057E0ba5876c1710962978d3EC3",
  [chains.ChainId.BASE]: "0x"
};
var INFI_BIN_MIGRATOR_ADDRESSES = {
  [chains.ChainId.BSC]: "0x",
  [chains.ChainId.BSC_TESTNET]: "0x3bA139617F8318ca7638b2470DA660653FB5F486",
  [chains.ChainId.SEPOLIA]: "0x1A9A9e622dB78075fED5Cf77F382aA74CB657517",
  [chains.ChainId.BASE]: "0x"
};
var INFI_CL_LP_FEES_HELPER_ADDRESSES = {
  [chains.ChainId.BSC]: "0x4e6825d29BbeA5F29Ee7AEfA40C3EAaBB27A9733",
  [chains.ChainId.BSC_TESTNET]: "0x54DE53BD47F35A72Dc57A7A3e1a3B6EEB83b9cB4",
  [chains.ChainId.SEPOLIA]: "0xF49bfc71F7C5C5489f9D1BF17B91c9726b919918",
  [chains.ChainId.BASE]: "0x4e6825d29BbeA5F29Ee7AEfA40C3EAaBB27A9733"
};
var INFI_FARMING_DISTRIBUTOR_ADDRESSES = {
  [chains.ChainId.BSC]: "0xEA8620aAb2F07a0ae710442590D649ADE8440877",
  [chains.ChainId.BSC_TESTNET]: "0xFBb5B0B69f89B75E18c37A8211C1f2Fa3B7D2728",
  [chains.ChainId.SEPOLIA]: "0xB8f2A9f0427e4814023530b21D98DD0168d26258",
  [chains.ChainId.BASE]: "0xEA8620aAb2F07a0ae710442590D649ADE8440877"
};
var INFI_CL_PROTOCOL_FEE_CONTROLLER_ADDRESSES = {
  [chains.ChainId.BSC]: "0x12F2a2965A665F8aBCf955C4dA26CC4Ec437b2c8",
  [chains.ChainId.BSC_TESTNET]: "0x5ab6c844F3c0e818b92932e55b9942B2c8a2D205",
  [chains.ChainId.SEPOLIA]: "0x",
  [chains.ChainId.BASE]: "0x12F2a2965A665F8aBCf955C4dA26CC4Ec437b2c8"
};
var INFI_BIN_PROTOCOL_FEE_CONTROLLER_ADDRESSES = {
  [chains.ChainId.BSC]: "0xC7C41cc1F0f4BC4CA96ac860E5c724B9A265B9A8",
  [chains.ChainId.BSC_TESTNET]: "0xB91451e44f5D1D8048F8b5c093b705D61C7893F8",
  [chains.ChainId.SEPOLIA]: "0x",
  [chains.ChainId.BASE]: "0xC7C41cc1F0f4BC4CA96ac860E5c724B9A265B9A8"
};
var INFI_CL_TICK_LENS_ADDRESSES = {
  [chains.ChainId.BSC_TESTNET]: "0x05a732bb9A23256F57f9FdF255212979368Ece39",
  [chains.ChainId.BSC]: "0x8BcF30285413F25032fb983C2bF4deFe29a33f3a",
  [chains.ChainId.BASE]: "0x8BcF30285413F25032fb983C2bF4deFe29a33f3a"
};

// src/constants/binPool.ts
var SCALE_OFFSET = 128n;
var SCALE = 1n << SCALE_OFFSET;
var PRECISION = BigInt(1e18);
var SQUARED_PRECISION = BigInt(1e36);
var BASIS_POINT_MAX = 10000n;
var REAL_ID_SHIFT = 1n << 23n;
var BIN_SHAPE_DISTRIBUTION_SUM = BigInt(1e18);

// src/constants/fee.ts
var ONE_HUNDRED_PERCENT_FEE = 1000000n;
var TEN_PERCENT_FEE = 100000n;
var MAX_PROTOCOL_FEE = 1000n;
var DYNAMIC_FEE_FLAG = 8388608;

// src/constants/hookRegistrationOffset.ts
var HOOKS_REGISTRATION_OFFSET = {
  beforeInitialize: 0,
  afterInitialize: 1,
  beforeAddLiquidity: 2,
  afterAddLiquidity: 3,
  beforeRemoveLiquidity: 4,
  afterRemoveLiquidity: 5,
  beforeSwap: 6,
  afterSwap: 7,
  beforeDonate: 8,
  afterDonate: 9,
  beforeSwapReturnsDelta: 10,
  afterSwapReturnsDelta: 11,
  afterMintReturnsDelta: 12,
  afterBurnReturnsDelta: 13
};

// src/types.ts
var BinLiquidityShape = /* @__PURE__ */ ((BinLiquidityShape2) => {
  BinLiquidityShape2["Spot"] = "Spot";
  BinLiquidityShape2["Curve"] = "Curve";
  BinLiquidityShape2["BidAsk"] = "BidAsk";
  return BinLiquidityShape2;
})(BinLiquidityShape || {});
var POOL_TYPE = /* @__PURE__ */ ((POOL_TYPE2) => {
  POOL_TYPE2["CLAMM"] = "CL";
  POOL_TYPE2["Bin"] = "Bin";
  return POOL_TYPE2;
})(POOL_TYPE || {});
var HOOK_CATEGORY = /* @__PURE__ */ ((HOOK_CATEGORY2) => {
  HOOK_CATEGORY2["DynamicFees"] = "Dynamic Fees";
  HOOK_CATEGORY2["LiquidityIncentivisation"] = "Liquidity Incentivisation";
  HOOK_CATEGORY2["YieldOptimisation"] = "Yield Optimisation";
  HOOK_CATEGORY2["JIT"] = "JIT";
  HOOK_CATEGORY2["MEV"] = "MEV";
  HOOK_CATEGORY2["RWA"] = "RWA";
  HOOK_CATEGORY2["ALM"] = "ALM";
  HOOK_CATEGORY2["CrossChain"] = "Cross-Chain";
  HOOK_CATEGORY2["Leverage"] = "Leverage";
  HOOK_CATEGORY2["PricingCurve"] = "Pricing Curve";
  HOOK_CATEGORY2["OrderType"] = "Order Type";
  HOOK_CATEGORY2["Oracle"] = "Oracle";
  HOOK_CATEGORY2["Others"] = "Others";
  HOOK_CATEGORY2["BrevisDiscount"] = "Fee Discount (Brevis)";
  HOOK_CATEGORY2["PrimusDiscount"] = "Fee Discount (Primus)";
  return HOOK_CATEGORY2;
})(HOOK_CATEGORY || {});
var HookType = /* @__PURE__ */ ((HookType2) => {
  HookType2["Universal"] = "Universal";
  HookType2["PerPool"] = "PerPool";
  return HookType2;
})(HookType || {});
var CL_DYNAMIC_FEE_HOOK_REGISTRATION_BITMAP = {
  [chains.ChainId.BSC]: "0x00C2",
  [chains.ChainId.BSC_TESTNET]: "0x0042",
  [chains.ChainId.SEPOLIA]: "0x0042",
  [chains.ChainId.BASE]: "0x0042"
};
var BIN_DYNAMIC_FEE_HOOK_REGISTRATION_BITMAP = "0x0046";
var CL_DYNAMIC_FEE_HOOKS_BY_CHAIN = {
  [chains.ChainId.BSC]: "0x32C59D556B16DB81DFc32525eFb3CB257f7e493d",
  [chains.ChainId.BSC_TESTNET]: "0xEce0656EeFA49C16a98447807f62714496aef518",
  [chains.ChainId.SEPOLIA]: "0x0E647d71d3b5dfcd2Ad5d77c36723Ef646784664",
  [chains.ChainId.BASE]: "0x32C59D556B16DB81DFc32525eFb3CB257f7e493d"
};
var BIN_DYNAMIC_FEE_HOOKS_BY_CHAIN = {
  [chains.ChainId.BSC]: "0x",
  [chains.ChainId.BSC_TESTNET]: "0x870c167eFCEEaDd081EE783Af8c5c7b436f1d3Ce",
  [chains.ChainId.SEPOLIA]: "0x8F3654C0eA6712C69bAC45644478942cDe955Db2",
  [chains.ChainId.BASE]: "0x"
};

// src/constants/hooksList/bsc.ts
var CL_DYNAMIC_HOOK = {
  address: CL_DYNAMIC_FEE_HOOKS_BY_CHAIN[chains.ChainId.BSC],
  name: "Dynamic Fees (CLAMM)",
  poolType: "CL" /* CLAMM */,
  description: "PancakeSwap\u2019s Dynamic Fee Hook adjusts swap fees based on market volatility\u2014penalizing arbitrageurs and rewarding LPs during turbulence, while keeping fees low in stable conditions for smoother trading.",
  github: "https://github.com/pancakeswap/infinity-dynamic-fee-hook",
  learnMoreLink: "https://docs.pancakeswap.finance/trade/pancakeswap-infinity/hooks/dynamic-fee-hook",
  category: ["Dynamic Fees" /* DynamicFees */],
  isVerified: false,
  isUpgradable: false,
  creator: "https://github.com/pancakeswap/",
  defaultFee: 500,
  hooksRegistration: {
    afterInitialize: true,
    beforeSwap: true,
    afterSwap: true
  },
  hookType: "Universal" /* Universal */
};
var dynamicHooksList = [CL_DYNAMIC_HOOK];
var bscHooksList = [
  ...dynamicHooksList,
  // {
  //   // bnb/usdt
  //   poolType: POOL_TYPE.CLAMM,
  //   address: '0x9c5554cCEa7F38c3337f017E8357C3eD62BF9885',
  //   name: 'CEX Whale Discount Hook (Primus)',
  //   description: `Prove your CEX 30-day spot trading volume exceeded $1M with zkTLS by Primus and get 50% off the pool fee. Create your proof here: https://hook.primuslabs.xyz/cexwhale . The proof is valid for 14 days.`,
  //   github: 'https://github.com/primus-labs/pancakeswapv4-cex-trading-hooks',
  //   category: [HOOK_CATEGORY.PrimusDiscount, HOOK_CATEGORY.DynamicFees],
  //   creator: 'https://github.com/primus-labs/',
  //   audit: '',
  //   isVerified: true,
  //   isUpgradable: false,
  //   hooksRegistration: {
  //     afterInitialize: true,
  //     beforeSwap: true,
  //   },
  //   hookType: HookType.PerPool,
  //   defaultFee: 500,
  // },
  {
    // cake-usdt
    poolType: "CL" /* CLAMM */,
    address: "0x1A3DFBCAc585e22F993Cc8e09BcC0dB388Cc1Ca3",
    name: "CAKE Holder Discount Hook (Brevis)",
    description: `Powered by Brevis, this hook enables swap fee discounts for CAKE holders who have made at least 1 swap in this pool in the last 30 days. The fee discount tier is based on a user\u2019s last 30-day Time-Weighted Average (TWA) CAKE balance: 
(VIP 1) 5% discount if 100 CAKE < TWA <= 1,000 CAKE, 
(VIP 2) 15% discount if 1,000 CAKE < TWA <= 10,000 CAKE,
(VIP 3) 25% discount if 10,000 CAKE < TWA <= 20,000 CAKE,
(VIP 4) 35% discount if 20,000 CAKE < TWA <= 30,000 CAKE, 
(VIP 5) 45% discount if TWA > 30,000 CAKE.
    `,
    github: "https://github.com/brevis-network/pancake-tokenholding-hook/tree/main",
    category: ["Fee Discount (Brevis)" /* BrevisDiscount */, "Dynamic Fees" /* DynamicFees */],
    creator: "https://github.com/brevis-network",
    audit: "https://github.com/brevis-network/pancake-tokenholding-hook/tree/main/audits",
    isVerified: true,
    isUpgradable: true,
    hooksRegistration: {
      beforeSwap: true
    },
    hookType: "PerPool" /* PerPool */,
    defaultFee: 2500
  },
  {
    // USDT-USDC
    poolType: "CL" /* CLAMM */,
    address: "0x1e9c64Cad39DDD36fB808E004067Cffc710EB71D",
    name: "VIP discount Hook (Brevis)",
    description: `Powered by Brevis, this hook enables swap fee discounts for VIP traders based on their cumulative trading volume in this pool in the last 30 days:
(VIP 1) 5% discount if 50,000 USDT < 30-Day Volume <= 1,000,000 USDT, 
(VIP 2) 15% discount if 1,000,000 USDT < 30-Day Volume <= 5,000,000 USDT,
(VIP 3) 25% discount if 5,000,000 USDT < 30-Day Volume <= 15,000,000 USDT,
(VIP 4) 35% discount if 15,000,000 USDT < 30-Day Volume <= 20,000,000 USDT,
(VIP 5) 45% discount if 30-Day Volume > 20,000,000 USDT.
    `,
    github: "https://github.com/brevis-network/vip-hook",
    category: ["Fee Discount (Brevis)" /* BrevisDiscount */, "Dynamic Fees" /* DynamicFees */],
    creator: "https://github.com/brevis-network",
    audit: "https://github.com/brevis-network/vip-hook/tree/main/audits",
    isVerified: true,
    isUpgradable: true,
    hooksRegistration: {
      beforeSwap: true
    },
    hookType: "PerPool" /* PerPool */,
    defaultFee: 100
  },
  {
    // ETH-USDT
    poolType: "CL" /* CLAMM */,
    address: "0xF27b9134B23957D842b08fFa78b07722fB9845BD",
    name: "VIP discount Hook (Brevis)",
    description: `Powered by Brevis, this hook enables swap fee discounts for VIP traders based on their cumulative trading volume in this pool in the last 30 days:
(VIP 1) 5% discount if 28 ETH < 30-Day Volume <= 555 ETH, 
(VIP 2) 15% discount if 555 ETH < 30-Day Volume <= 2,778 ETH,
(VIP 3) 25% discount if 2,778 ETH < 30-Day Volume <= 8,333 ETH,
(VIP 4) 35% discount if 8,333 ETH < 30-Day Volume <= 11,111 ETH,
(VIP 5) 45% discount if 30-Day Volume > 11,111 ETH.
    `,
    github: "https://github.com/brevis-network/vip-hook",
    category: ["Fee Discount (Brevis)" /* BrevisDiscount */, "Dynamic Fees" /* DynamicFees */],
    creator: "https://github.com/brevis-network",
    audit: "https://github.com/brevis-network/vip-hook/tree/main/audits",
    isVerified: true,
    isUpgradable: true,
    hooksRegistration: {
      beforeSwap: true
    },
    hookType: "PerPool" /* PerPool */,
    defaultFee: 500
  },
  {
    // BNB-USDT
    poolType: "Bin" /* Bin */,
    address: "0x60FbCAfaB24bc117b6facECd00D3e8f56ca4D5e9",
    name: "CAKE Holder Discount Hook (Brevis)",
    description: `Powered by Brevis, this hook enables swap fee discounts for CAKE holders who have made at least 1 swap in this pool in the last 30 days. The fee discount tier is based on a user\u2019s last 30-day Time-Weighted Average (TWA) CAKE balance: 
(VIP 1) 5% discount if 100 CAKE < TWA <= 1,000 CAKE, 
(VIP 2) 15% discount if 1,000 CAKE < TWA <= 10,000 CAKE,
(VIP 3) 25% discount if 10,000 CAKE < TWA <= 20,000 CAKE,
(VIP 4) 35% discount if 20,000 CAKE < TWA <= 30,000 CAKE, 
(VIP 5) 45% discount if TWA > 30,000 CAKE.
    `,
    github: "https://github.com/brevis-network/pancake-tokenholding-hook/tree/main",
    category: ["Fee Discount (Brevis)" /* BrevisDiscount */, "Dynamic Fees" /* DynamicFees */],
    creator: "https://github.com/brevis-network",
    audit: "https://github.com/brevis-network/pancake-tokenholding-hook/tree/main/audits",
    isVerified: true,
    isUpgradable: true,
    hooksRegistration: {
      beforeSwap: true
    },
    hookType: "PerPool" /* PerPool */,
    defaultFee: 500
  },
  {
    // BTCB-BNB
    poolType: "CL" /* CLAMM */,
    address: "0x0fcF6D110Cf96BE56D251716E69E37619932edF2",
    name: "CAKE Holder Discount Hook (Brevis)",
    description: `Powered by Brevis, this hook enables swap fee discounts for CAKE holders who have made at least 1 swap in this pool in the last 30 days. The fee discount tier is based on a user\u2019s last 30-day Time-Weighted Average (TWA) CAKE balance: 
(VIP 1) 5% discount if 100 CAKE < TWA <= 1,000 CAKE, 
(VIP 2) 15% discount if 1,000 CAKE < TWA <= 10,000 CAKE,
(VIP 3) 25% discount if 10,000 CAKE < TWA <= 20,000 CAKE,
(VIP 4) 35% discount if 20,000 CAKE < TWA <= 30,000 CAKE, 
(VIP 5) 45% discount if TWA > 30,000 CAKE.
    `,
    github: "https://github.com/brevis-network/pancake-tokenholding-hook/tree/main",
    category: ["Fee Discount (Brevis)" /* BrevisDiscount */, "Dynamic Fees" /* DynamicFees */],
    creator: "https://github.com/brevis-network",
    audit: "https://github.com/brevis-network/pancake-tokenholding-hook/tree/main/audits",
    isVerified: true,
    isUpgradable: true,
    hooksRegistration: {
      beforeSwap: true
    },
    hookType: "PerPool" /* PerPool */,
    defaultFee: 500
  },
  {
    // CAKE-BNB
    poolType: "CL" /* CLAMM */,
    address: "0xDfdfB2c5a717AB00B370E883021f20C2fbaEd277",
    name: "CAKE Holder Discount Hook (Brevis)",
    description: `Powered by Brevis, this hook enables swap fee discounts for CAKE holders who have made at least 1 swap in this pool in the last 30 days. The fee discount tier is based on a user\u2019s last 30-day Time-Weighted Average (TWA) CAKE balance: 
(VIP 1) 5% discount if 100 CAKE < TWA <= 1,000 CAKE, 
(VIP 2) 15% discount if 1,000 CAKE < TWA <= 10,000 CAKE,
(VIP 3) 25% discount if 10,000 CAKE < TWA <= 20,000 CAKE,
(VIP 4) 35% discount if 20,000 CAKE < TWA <= 30,000 CAKE, 
(VIP 5) 45% discount if TWA > 30,000 CAKE.
    `,
    github: "https://github.com/brevis-network/pancake-tokenholding-hook/tree/main",
    category: ["Fee Discount (Brevis)" /* BrevisDiscount */, "Dynamic Fees" /* DynamicFees */],
    creator: "https://github.com/brevis-network",
    audit: "https://github.com/brevis-network/pancake-tokenholding-hook/tree/main/audits",
    isVerified: true,
    isUpgradable: true,
    hooksRegistration: {
      beforeSwap: true
    },
    hookType: "PerPool" /* PerPool */,
    defaultFee: 2500
  },
  {
    poolType: "CL" /* CLAMM */,
    address: "0xD7059ABd653e87cb124690E2eba175391AC52243",
    name: "Arbiter MEV Capture",
    description: `Arbiter hook allows LPs to capture significant part of MEV extracted from pool. This is achieved by introducing auction for MEV actors. Winner can control the pool\u2019s fee, outperform competitors and optimize routing traffic - increasing their and LPs profits as proceeds from auction go to LPs.`,
    github: "https://github.com/ArbiterFinance/arbiter-contracts/blob/main/src/ArbiterAmAmmPoolCurrencyHook.sol",
    category: ["MEV" /* MEV */, "Dynamic Fees" /* DynamicFees */],
    creator: "https://github.com/ArbiterFinance",
    audit: "https://github.com/ArbiterFinance/arbiter-contracts/tree/main/audits",
    isVerified: true,
    isUpgradable: false,
    hooksRegistration: {
      afterInitialize: true,
      beforeAddLiquidity: true,
      beforeSwap: true,
      beforeSwapReturnsDelta: true
    },
    hookType: "PerPool" /* PerPool */,
    defaultFee: 500
    // 0.05%
  },
  {
    address: "0x6AdC560aF85377f9a73d17c658D798c9B39186e8",
    name: "Limit Order",
    poolType: "CL" /* CLAMM */,
    description: "Fee Earning Limit Orders let you set a target price to buy or sell tokens automatically, while earning fees.",
    github: "https://github.com/pancakeswap/limit-order-hook-contract",
    category: ["Order Type" /* OrderType */],
    isVerified: true,
    isUpgradable: false,
    hooksRegistration: {
      beforeInitialize: true,
      afterInitialize: true,
      beforeSwap: true,
      afterSwap: true
    },
    hookType: "Universal" /* Universal */
  }
];
var bscDynamicHooks = {
  CL: CL_DYNAMIC_HOOK,
  Bin: void 0
};
var bscWhitelistLabeledHooks = [
  "0x9a9B5331ce8d74b2B721291D57DE696E878353fd",
  // IDO TGE
  "0x72e09eBd9b24F47730b651889a4eD984CBa53d90",
  "0x44428C6ce391915D51F963C0Dd395Cd0f95fdFD2"
];
var CL_DYNAMIC_HOOK2 = {
  address: CL_DYNAMIC_FEE_HOOKS_BY_CHAIN[chains.ChainId.BSC_TESTNET],
  name: "Dynamic Fees (CLAMM)",
  poolType: "CL" /* CLAMM */,
  description: "It will set lpFee to 3000 i.e 0.3% in afterInitialize",
  github: "https://testnet.bscscan.com/address/0xEce0656EeFA49C16a98447807f62714496aef518",
  category: ["Dynamic Fees" /* DynamicFees */],
  isVerified: true,
  isUpgradable: false,
  hooksRegistration: {
    afterInitialize: true,
    beforeSwap: true
  }
};
var BIN_DYNAMIC_HOOK = {
  address: BIN_DYNAMIC_FEE_HOOKS_BY_CHAIN[chains.ChainId.BSC_TESTNET],
  name: "Dynamic Fees (Bin)",
  poolType: "Bin" /* Bin */,
  description: "It will set lpFee to 3000 i.e 0.3% in afterInitialize",
  github: "https://testnet.bscscan.com/address/0x870c167eFCEEaDd081EE783Af8c5c7b436f1d3Ce",
  category: ["Dynamic Fees" /* DynamicFees */],
  isVerified: true,
  isUpgradable: false,
  hooksRegistration: {
    afterInitialize: true,
    beforeAddLiquidity: true,
    beforeSwap: true
  }
};
var dynamicHooksList2 = [CL_DYNAMIC_HOOK2, BIN_DYNAMIC_HOOK];
var bscTestnetHooksList = [
  ...dynamicHooksList2,
  {
    address: "0x0A6440c9cfb5f28BE699a9e4e83BF8A89de72498",
    name: "veCake Exclusive (CLAMM)",
    poolType: "CL" /* CLAMM */,
    description: "This multi-feature contract allows for liquidity locks, TWAMM (Time weighted average market maker), and impermanent loss hedging on pools. Check the Github readme for more details.",
    github: "https://testnet.bscscan.com/address/0x0A6440c9cfb5f28BE699a9e4e83BF8A89de72498",
    category: ["Oracle" /* Oracle */, "JIT" /* JIT */, "Others" /* Others */],
    creator: "https://github.com/pancakeswap",
    audit: "https://github.com/pancakeswap",
    isVerified: true,
    isUpgradable: false,
    hooksRegistration: {
      beforeSwap: true
    }
  },
  {
    address: "0x0284ceB8F3Ad42131A6feB69E3F324990837Ef2c",
    name: "veCake Exclusive (Bin)",
    poolType: "Bin" /* Bin */,
    description: "Exclusive to holders of veCake (0x3c3C66383690d3cf08205cD3Ba862bc4F6348829)",
    github: "https://testnet.bscscan.com/address/0x0284ceB8F3Ad42131A6feB69E3F324990837Ef2c",
    category: ["Others" /* Others */],
    isVerified: true,
    isUpgradable: false,
    hooksRegistration: {
      beforeSwap: true
    }
  }
];
var bscTestnetDynamicHooks = {
  CL: CL_DYNAMIC_HOOK2,
  Bin: BIN_DYNAMIC_HOOK
};
var CL_DYNAMIC_HOOK3 = {
  address: CL_DYNAMIC_FEE_HOOKS_BY_CHAIN[chains.ChainId.BASE],
  name: "Dynamic Fees (CLAMM)",
  poolType: "CL" /* CLAMM */,
  description: "PancakeSwap\u2019s Dynamic Fee Hook adjusts swap fees based on market volatility\u2014penalizing arbitrageurs and rewarding LPs during turbulence, while keeping fees low in stable conditions for smoother trading.",
  github: "https://github.com/pancakeswap/",
  learnMoreLink: "https://docs.pancakeswap.finance/trade/pancakeswap-infinity/hooks/dynamic-fee-hook",
  category: ["Dynamic Fees" /* DynamicFees */],
  isVerified: false,
  isUpgradable: false,
  creator: "https://github.com/pancakeswap/",
  defaultFee: 500,
  hooksRegistration: {
    afterInitialize: true,
    beforeSwap: true,
    afterSwap: true
  },
  hookType: "Universal" /* Universal */
};
var dynamicHooksList3 = [CL_DYNAMIC_HOOK3];
var baseHooksList = [...dynamicHooksList3];
var baseDynamicHooks = {
  CL: CL_DYNAMIC_HOOK3,
  Bin: void 0
};

// src/constants/hooksList/index.ts
var hooksList = {
  [chains.ChainId.BSC]: bscHooksList,
  [chains.ChainId.BSC_TESTNET]: bscTestnetHooksList,
  [chains.ChainId.BASE]: baseHooksList,
  [chains.ChainId.SEPOLIA]: []
};
var dynamicHooksList4 = {
  [chains.ChainId.BSC]: bscDynamicHooks,
  [chains.ChainId.BSC_TESTNET]: bscTestnetDynamicHooks,
  [chains.ChainId.BASE]: baseDynamicHooks,
  [chains.ChainId.SEPOLIA]: []
};
var whitelistLabeledHooksList = {
  [chains.ChainId.BSC]: bscWhitelistLabeledHooks,
  [chains.ChainId.BSC_TESTNET]: [],
  [chains.ChainId.BASE]: [],
  [chains.ChainId.SEPOLIA]: []
};
function findHook(hook, chainId) {
  const list = hooksList[chainId];
  return list.find((x) => x.address === hook);
}

// src/constants/index.ts
var MAX_TICK_SPACING = viem.maxInt16;
var MIN_TICK_SPACING = 1n;
var MIN_BIN_STEP = 1n;
var MAX_BIN_STEP = 100n;
var encodeMulticall = (calldatas) => {
  if (!Array.isArray(calldatas)) {
    calldatas = [calldatas];
  }
  return calldatas.length === 1 ? calldatas[0] : viem.encodeFunctionData({ abi: v3Sdk.Multicall.ABI, functionName: "multicall", args: [calldatas] });
};

// src/abis/BinMigratorAbi.ts
var BinMigratorAbi = [
  {
    type: "constructor",
    inputs: [
      { name: "_WETH9", type: "address", internalType: "address" },
      { name: "_binPositionManager", type: "address", internalType: "address" },
      { name: "_permit2", type: "address", internalType: "contract IAllowanceTransfer" }
    ],
    stateMutability: "nonpayable"
  },
  { type: "receive", stateMutability: "payable" },
  {
    type: "function",
    name: "WETH9",
    inputs: [],
    outputs: [{ name: "", type: "address", internalType: "address" }],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "binPositionManager",
    inputs: [],
    outputs: [{ name: "", type: "address", internalType: "contract IBinPositionManager" }],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "initializePool",
    inputs: [
      {
        name: "poolKey",
        type: "tuple",
        internalType: "struct PoolKey",
        components: [
          { name: "currency0", type: "address", internalType: "Currency" },
          { name: "currency1", type: "address", internalType: "Currency" },
          { name: "hooks", type: "address", internalType: "contract IHooks" },
          { name: "poolManager", type: "address", internalType: "contract IPoolManager" },
          { name: "fee", type: "uint24", internalType: "uint24" },
          { name: "parameters", type: "bytes32", internalType: "bytes32" }
        ]
      },
      { name: "activeId", type: "uint24", internalType: "uint24" }
    ],
    outputs: [],
    stateMutability: "payable"
  },
  {
    type: "function",
    name: "migrateFromV2",
    inputs: [
      {
        name: "v2PoolParams",
        type: "tuple",
        internalType: "struct IBaseMigrator.V2PoolParams",
        components: [
          { name: "pair", type: "address", internalType: "address" },
          { name: "migrateAmount", type: "uint256", internalType: "uint256" },
          { name: "amount0Min", type: "uint256", internalType: "uint256" },
          { name: "amount1Min", type: "uint256", internalType: "uint256" }
        ]
      },
      {
        name: "infiPoolParams",
        type: "tuple",
        internalType: "struct IBinMigrator.InfiBinPoolParams",
        components: [
          {
            name: "poolKey",
            type: "tuple",
            internalType: "struct PoolKey",
            components: [
              { name: "currency0", type: "address", internalType: "Currency" },
              { name: "currency1", type: "address", internalType: "Currency" },
              { name: "hooks", type: "address", internalType: "contract IHooks" },
              { name: "poolManager", type: "address", internalType: "contract IPoolManager" },
              { name: "fee", type: "uint24", internalType: "uint24" },
              { name: "parameters", type: "bytes32", internalType: "bytes32" }
            ]
          },
          { name: "amount0Max", type: "uint128", internalType: "uint128" },
          { name: "amount1Max", type: "uint128", internalType: "uint128" },
          { name: "activeIdDesired", type: "uint256", internalType: "uint256" },
          { name: "idSlippage", type: "uint256", internalType: "uint256" },
          { name: "deltaIds", type: "int256[]", internalType: "int256[]" },
          { name: "distributionX", type: "uint256[]", internalType: "uint256[]" },
          { name: "distributionY", type: "uint256[]", internalType: "uint256[]" },
          { name: "to", type: "address", internalType: "address" },
          { name: "deadline", type: "uint256", internalType: "uint256" },
          { name: "hookData", type: "bytes", internalType: "bytes" }
        ]
      },
      { name: "extraAmount0", type: "uint256", internalType: "uint256" },
      { name: "extraAmount1", type: "uint256", internalType: "uint256" }
    ],
    outputs: [],
    stateMutability: "payable"
  },
  {
    type: "function",
    name: "migrateFromV3",
    inputs: [
      {
        name: "v3PoolParams",
        type: "tuple",
        internalType: "struct IBaseMigrator.V3PoolParams",
        components: [
          { name: "nfp", type: "address", internalType: "address" },
          { name: "tokenId", type: "uint256", internalType: "uint256" },
          { name: "liquidity", type: "uint128", internalType: "uint128" },
          { name: "amount0Min", type: "uint256", internalType: "uint256" },
          { name: "amount1Min", type: "uint256", internalType: "uint256" },
          { name: "collectFee", type: "bool", internalType: "bool" },
          { name: "deadline", type: "uint256", internalType: "uint256" }
        ]
      },
      {
        name: "infiPoolParams",
        type: "tuple",
        internalType: "struct IBinMigrator.InfiBinPoolParams",
        components: [
          {
            name: "poolKey",
            type: "tuple",
            internalType: "struct PoolKey",
            components: [
              { name: "currency0", type: "address", internalType: "Currency" },
              { name: "currency1", type: "address", internalType: "Currency" },
              { name: "hooks", type: "address", internalType: "contract IHooks" },
              { name: "poolManager", type: "address", internalType: "contract IPoolManager" },
              { name: "fee", type: "uint24", internalType: "uint24" },
              { name: "parameters", type: "bytes32", internalType: "bytes32" }
            ]
          },
          { name: "amount0Max", type: "uint128", internalType: "uint128" },
          { name: "amount1Max", type: "uint128", internalType: "uint128" },
          { name: "activeIdDesired", type: "uint256", internalType: "uint256" },
          { name: "idSlippage", type: "uint256", internalType: "uint256" },
          { name: "deltaIds", type: "int256[]", internalType: "int256[]" },
          { name: "distributionX", type: "uint256[]", internalType: "uint256[]" },
          { name: "distributionY", type: "uint256[]", internalType: "uint256[]" },
          { name: "to", type: "address", internalType: "address" },
          { name: "deadline", type: "uint256", internalType: "uint256" },
          { name: "hookData", type: "bytes", internalType: "bytes" }
        ]
      },
      { name: "extraAmount0", type: "uint256", internalType: "uint256" },
      { name: "extraAmount1", type: "uint256", internalType: "uint256" }
    ],
    outputs: [],
    stateMutability: "payable"
  },
  {
    type: "function",
    name: "multicall",
    inputs: [{ name: "data", type: "bytes[]", internalType: "bytes[]" }],
    outputs: [{ name: "results", type: "bytes[]", internalType: "bytes[]" }],
    stateMutability: "payable"
  },
  {
    type: "function",
    name: "owner",
    inputs: [],
    outputs: [{ name: "", type: "address", internalType: "address" }],
    stateMutability: "view"
  },
  { type: "function", name: "pause", inputs: [], outputs: [], stateMutability: "nonpayable" },
  {
    type: "function",
    name: "paused",
    inputs: [],
    outputs: [{ name: "res", type: "bool", internalType: "bool" }],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "permit",
    inputs: [
      { name: "owner", type: "address", internalType: "address" },
      {
        name: "permitSingle",
        type: "tuple",
        internalType: "struct IAllowanceTransfer.PermitSingle",
        components: [
          {
            name: "details",
            type: "tuple",
            internalType: "struct IAllowanceTransfer.PermitDetails",
            components: [
              { name: "token", type: "address", internalType: "address" },
              { name: "amount", type: "uint160", internalType: "uint160" },
              { name: "expiration", type: "uint48", internalType: "uint48" },
              { name: "nonce", type: "uint48", internalType: "uint48" }
            ]
          },
          { name: "spender", type: "address", internalType: "address" },
          { name: "sigDeadline", type: "uint256", internalType: "uint256" }
        ]
      },
      { name: "signature", type: "bytes", internalType: "bytes" }
    ],
    outputs: [{ name: "err", type: "bytes", internalType: "bytes" }],
    stateMutability: "payable"
  },
  {
    type: "function",
    name: "permit2",
    inputs: [],
    outputs: [{ name: "", type: "address", internalType: "contract IAllowanceTransfer" }],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "permitBatch",
    inputs: [
      { name: "owner", type: "address", internalType: "address" },
      {
        name: "_permitBatch",
        type: "tuple",
        internalType: "struct IAllowanceTransfer.PermitBatch",
        components: [
          {
            name: "details",
            type: "tuple[]",
            internalType: "struct IAllowanceTransfer.PermitDetails[]",
            components: [
              { name: "token", type: "address", internalType: "address" },
              { name: "amount", type: "uint160", internalType: "uint160" },
              { name: "expiration", type: "uint48", internalType: "uint48" },
              { name: "nonce", type: "uint48", internalType: "uint48" }
            ]
          },
          { name: "spender", type: "address", internalType: "address" },
          { name: "sigDeadline", type: "uint256", internalType: "uint256" }
        ]
      },
      { name: "signature", type: "bytes", internalType: "bytes" }
    ],
    outputs: [{ name: "err", type: "bytes", internalType: "bytes" }],
    stateMutability: "payable"
  },
  {
    type: "function",
    name: "positionManagerPermit2",
    inputs: [],
    outputs: [{ name: "", type: "address", internalType: "contract IAllowanceTransfer" }],
    stateMutability: "view"
  },
  { type: "function", name: "refundETH", inputs: [], outputs: [], stateMutability: "payable" },
  {
    type: "function",
    name: "selfPermitERC721",
    inputs: [
      { name: "token", type: "address", internalType: "address" },
      { name: "tokenId", type: "uint256", internalType: "uint256" },
      { name: "deadline", type: "uint256", internalType: "uint256" },
      { name: "v", type: "uint8", internalType: "uint8" },
      { name: "r", type: "bytes32", internalType: "bytes32" },
      { name: "s", type: "bytes32", internalType: "bytes32" }
    ],
    outputs: [],
    stateMutability: "payable"
  },
  {
    type: "function",
    name: "selfPermitERC721IfNecessary",
    inputs: [
      { name: "token", type: "address", internalType: "address" },
      { name: "tokenId", type: "uint256", internalType: "uint256" },
      { name: "deadline", type: "uint256", internalType: "uint256" },
      { name: "v", type: "uint8", internalType: "uint8" },
      { name: "r", type: "bytes32", internalType: "bytes32" },
      { name: "s", type: "bytes32", internalType: "bytes32" }
    ],
    outputs: [],
    stateMutability: "payable"
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
    type: "event",
    name: "ExtraFundsAdded",
    inputs: [
      { name: "currency0", type: "address", indexed: false, internalType: "address" },
      { name: "currency1", type: "address", indexed: false, internalType: "address" },
      { name: "extraAmount0", type: "uint256", indexed: false, internalType: "uint256" },
      { name: "extraAmount1", type: "uint256", indexed: false, internalType: "uint256" }
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
    name: "Unpaused",
    inputs: [{ name: "account", type: "address", indexed: false, internalType: "address" }],
    anonymous: false
  },
  { type: "error", name: "ContractLocked", inputs: [] },
  { type: "error", name: "EnforcedPause", inputs: [] },
  { type: "error", name: "INSUFFICIENT_AMOUNTS_RECEIVED", inputs: [] },
  { type: "error", name: "INVALID_ETHER_SENDER", inputs: [] },
  { type: "error", name: "NOT_TOKEN_OWNER", inputs: [] },
  {
    type: "error",
    name: "SafeCastOverflowedUintDowncast",
    inputs: [
      { name: "bits", type: "uint8", internalType: "uint8" },
      { name: "value", type: "uint256", internalType: "uint256" }
    ]
  },
  { type: "error", name: "TOKEN_NOT_MATCH", inputs: [] }
];

// src/abis/BinPoolManagerAbi.ts
var BinPoolManagerAbi = [
  {
    type: "constructor",
    inputs: [{ name: "vault", type: "address", internalType: "contract IVault" }],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "MIN_BIN_STEP",
    inputs: [],
    outputs: [{ name: "", type: "uint16", internalType: "uint16" }],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "burn",
    inputs: [
      {
        name: "key",
        type: "tuple",
        internalType: "struct PoolKey",
        components: [
          { name: "currency0", type: "address", internalType: "Currency" },
          { name: "currency1", type: "address", internalType: "Currency" },
          { name: "hooks", type: "address", internalType: "contract IHooks" },
          { name: "poolManager", type: "address", internalType: "contract IPoolManager" },
          { name: "fee", type: "uint24", internalType: "uint24" },
          { name: "parameters", type: "bytes32", internalType: "bytes32" }
        ]
      },
      {
        name: "params",
        type: "tuple",
        internalType: "struct IBinPoolManager.BurnParams",
        components: [
          { name: "ids", type: "uint256[]", internalType: "uint256[]" },
          { name: "amountsToBurn", type: "uint256[]", internalType: "uint256[]" },
          { name: "salt", type: "bytes32", internalType: "bytes32" }
        ]
      },
      { name: "hookData", type: "bytes", internalType: "bytes" }
    ],
    outputs: [{ name: "delta", type: "int256", internalType: "BalanceDelta" }],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "collectProtocolFees",
    inputs: [
      { name: "recipient", type: "address", internalType: "address" },
      { name: "currency", type: "address", internalType: "Currency" },
      { name: "amount", type: "uint256", internalType: "uint256" }
    ],
    outputs: [{ name: "amountCollected", type: "uint256", internalType: "uint256" }],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "donate",
    inputs: [
      {
        name: "key",
        type: "tuple",
        internalType: "struct PoolKey",
        components: [
          { name: "currency0", type: "address", internalType: "Currency" },
          { name: "currency1", type: "address", internalType: "Currency" },
          { name: "hooks", type: "address", internalType: "contract IHooks" },
          { name: "poolManager", type: "address", internalType: "contract IPoolManager" },
          { name: "fee", type: "uint24", internalType: "uint24" },
          { name: "parameters", type: "bytes32", internalType: "bytes32" }
        ]
      },
      { name: "amount0", type: "uint128", internalType: "uint128" },
      { name: "amount1", type: "uint128", internalType: "uint128" },
      { name: "hookData", type: "bytes", internalType: "bytes" }
    ],
    outputs: [
      { name: "delta", type: "int256", internalType: "BalanceDelta" },
      { name: "binId", type: "uint24", internalType: "uint24" }
    ],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "extsload",
    inputs: [{ name: "slot", type: "bytes32", internalType: "bytes32" }],
    outputs: [{ name: "", type: "bytes32", internalType: "bytes32" }],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "extsload",
    inputs: [{ name: "slots", type: "bytes32[]", internalType: "bytes32[]" }],
    outputs: [{ name: "", type: "bytes32[]", internalType: "bytes32[]" }],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "getBin",
    inputs: [
      { name: "id", type: "bytes32", internalType: "PoolId" },
      { name: "binId", type: "uint24", internalType: "uint24" }
    ],
    outputs: [
      { name: "binReserveX", type: "uint128", internalType: "uint128" },
      { name: "binReserveY", type: "uint128", internalType: "uint128" },
      { name: "binLiquidity", type: "uint256", internalType: "uint256" },
      { name: "totalShares", type: "uint256", internalType: "uint256" }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "getNextNonEmptyBin",
    inputs: [
      { name: "id", type: "bytes32", internalType: "PoolId" },
      { name: "swapForY", type: "bool", internalType: "bool" },
      { name: "binId", type: "uint24", internalType: "uint24" }
    ],
    outputs: [{ name: "nextId", type: "uint24", internalType: "uint24" }],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "getPosition",
    inputs: [
      { name: "id", type: "bytes32", internalType: "PoolId" },
      { name: "owner", type: "address", internalType: "address" },
      { name: "binId", type: "uint24", internalType: "uint24" },
      { name: "salt", type: "bytes32", internalType: "bytes32" }
    ],
    outputs: [
      {
        name: "position",
        type: "tuple",
        internalType: "struct BinPosition.Info",
        components: [{ name: "share", type: "uint256", internalType: "uint256" }]
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "getSlot0",
    inputs: [{ name: "id", type: "bytes32", internalType: "PoolId" }],
    outputs: [
      { name: "activeId", type: "uint24", internalType: "uint24" },
      { name: "protocolFee", type: "uint24", internalType: "uint24" },
      { name: "lpFee", type: "uint24", internalType: "uint24" }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "initialize",
    inputs: [
      {
        name: "key",
        type: "tuple",
        internalType: "struct PoolKey",
        components: [
          { name: "currency0", type: "address", internalType: "Currency" },
          { name: "currency1", type: "address", internalType: "Currency" },
          { name: "hooks", type: "address", internalType: "contract IHooks" },
          { name: "poolManager", type: "address", internalType: "contract IPoolManager" },
          { name: "fee", type: "uint24", internalType: "uint24" },
          { name: "parameters", type: "bytes32", internalType: "bytes32" }
        ]
      },
      { name: "activeId", type: "uint24", internalType: "uint24" }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "maxBinStep",
    inputs: [],
    outputs: [{ name: "", type: "uint16", internalType: "uint16" }],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "minBinShareForDonate",
    inputs: [],
    outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "mint",
    inputs: [
      {
        name: "key",
        type: "tuple",
        internalType: "struct PoolKey",
        components: [
          { name: "currency0", type: "address", internalType: "Currency" },
          { name: "currency1", type: "address", internalType: "Currency" },
          { name: "hooks", type: "address", internalType: "contract IHooks" },
          { name: "poolManager", type: "address", internalType: "contract IPoolManager" },
          { name: "fee", type: "uint24", internalType: "uint24" },
          { name: "parameters", type: "bytes32", internalType: "bytes32" }
        ]
      },
      {
        name: "params",
        type: "tuple",
        internalType: "struct IBinPoolManager.MintParams",
        components: [
          { name: "liquidityConfigs", type: "bytes32[]", internalType: "bytes32[]" },
          { name: "amountIn", type: "bytes32", internalType: "bytes32" },
          { name: "salt", type: "bytes32", internalType: "bytes32" }
        ]
      },
      { name: "hookData", type: "bytes", internalType: "bytes" }
    ],
    outputs: [
      { name: "delta", type: "int256", internalType: "BalanceDelta" },
      {
        name: "mintArray",
        type: "tuple",
        internalType: "struct BinPool.MintArrays",
        components: [
          { name: "ids", type: "uint256[]", internalType: "uint256[]" },
          { name: "amounts", type: "bytes32[]", internalType: "bytes32[]" },
          { name: "liquidityMinted", type: "uint256[]", internalType: "uint256[]" }
        ]
      }
    ],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "owner",
    inputs: [],
    outputs: [{ name: "", type: "address", internalType: "address" }],
    stateMutability: "view"
  },
  { type: "function", name: "pause", inputs: [], outputs: [], stateMutability: "nonpayable" },
  {
    type: "function",
    name: "paused",
    inputs: [],
    outputs: [{ name: "res", type: "bool", internalType: "bool" }],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "poolIdToPoolKey",
    inputs: [{ name: "id", type: "bytes32", internalType: "PoolId" }],
    outputs: [
      { name: "currency0", type: "address", internalType: "Currency" },
      { name: "currency1", type: "address", internalType: "Currency" },
      { name: "hooks", type: "address", internalType: "contract IHooks" },
      { name: "poolManager", type: "address", internalType: "contract IPoolManager" },
      { name: "fee", type: "uint24", internalType: "uint24" },
      { name: "parameters", type: "bytes32", internalType: "bytes32" }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "pools",
    inputs: [{ name: "id", type: "bytes32", internalType: "PoolId" }],
    outputs: [
      { name: "slot0", type: "bytes32", internalType: "BinSlot0" },
      { name: "level0", type: "bytes32", internalType: "bytes32" }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "protocolFeeController",
    inputs: [],
    outputs: [{ name: "", type: "address", internalType: "contract IProtocolFeeController" }],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "protocolFeesAccrued",
    inputs: [{ name: "currency", type: "address", internalType: "Currency" }],
    outputs: [{ name: "amount", type: "uint256", internalType: "uint256" }],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "setMaxBinStep",
    inputs: [{ name: "newMaxBinStep", type: "uint16", internalType: "uint16" }],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "setMinBinSharesForDonate",
    inputs: [{ name: "minBinShare", type: "uint256", internalType: "uint256" }],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "setProtocolFee",
    inputs: [
      {
        name: "key",
        type: "tuple",
        internalType: "struct PoolKey",
        components: [
          { name: "currency0", type: "address", internalType: "Currency" },
          { name: "currency1", type: "address", internalType: "Currency" },
          { name: "hooks", type: "address", internalType: "contract IHooks" },
          { name: "poolManager", type: "address", internalType: "contract IPoolManager" },
          { name: "fee", type: "uint24", internalType: "uint24" },
          { name: "parameters", type: "bytes32", internalType: "bytes32" }
        ]
      },
      { name: "newProtocolFee", type: "uint24", internalType: "uint24" }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "setProtocolFeeController",
    inputs: [{ name: "controller", type: "address", internalType: "contract IProtocolFeeController" }],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "swap",
    inputs: [
      {
        name: "key",
        type: "tuple",
        internalType: "struct PoolKey",
        components: [
          { name: "currency0", type: "address", internalType: "Currency" },
          { name: "currency1", type: "address", internalType: "Currency" },
          { name: "hooks", type: "address", internalType: "contract IHooks" },
          { name: "poolManager", type: "address", internalType: "contract IPoolManager" },
          { name: "fee", type: "uint24", internalType: "uint24" },
          { name: "parameters", type: "bytes32", internalType: "bytes32" }
        ]
      },
      { name: "swapForY", type: "bool", internalType: "bool" },
      { name: "amountSpecified", type: "int128", internalType: "int128" },
      { name: "hookData", type: "bytes", internalType: "bytes" }
    ],
    outputs: [{ name: "delta", type: "int256", internalType: "BalanceDelta" }],
    stateMutability: "nonpayable"
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
    name: "updateDynamicLPFee",
    inputs: [
      {
        name: "key",
        type: "tuple",
        internalType: "struct PoolKey",
        components: [
          { name: "currency0", type: "address", internalType: "Currency" },
          { name: "currency1", type: "address", internalType: "Currency" },
          { name: "hooks", type: "address", internalType: "contract IHooks" },
          { name: "poolManager", type: "address", internalType: "contract IPoolManager" },
          { name: "fee", type: "uint24", internalType: "uint24" },
          { name: "parameters", type: "bytes32", internalType: "bytes32" }
        ]
      },
      { name: "newDynamicLPFee", type: "uint24", internalType: "uint24" }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "vault",
    inputs: [],
    outputs: [{ name: "", type: "address", internalType: "contract IVault" }],
    stateMutability: "view"
  },
  {
    type: "event",
    name: "Burn",
    inputs: [
      { name: "id", type: "bytes32", indexed: true, internalType: "PoolId" },
      { name: "sender", type: "address", indexed: true, internalType: "address" },
      { name: "ids", type: "uint256[]", indexed: false, internalType: "uint256[]" },
      { name: "salt", type: "bytes32", indexed: false, internalType: "bytes32" },
      { name: "amounts", type: "bytes32[]", indexed: false, internalType: "bytes32[]" }
    ],
    anonymous: false
  },
  {
    type: "event",
    name: "Donate",
    inputs: [
      { name: "id", type: "bytes32", indexed: true, internalType: "PoolId" },
      { name: "sender", type: "address", indexed: true, internalType: "address" },
      { name: "amount0", type: "int128", indexed: false, internalType: "int128" },
      { name: "amount1", type: "int128", indexed: false, internalType: "int128" },
      { name: "binId", type: "uint24", indexed: false, internalType: "uint24" }
    ],
    anonymous: false
  },
  {
    type: "event",
    name: "DynamicLPFeeUpdated",
    inputs: [
      { name: "id", type: "bytes32", indexed: true, internalType: "PoolId" },
      { name: "dynamicLPFee", type: "uint24", indexed: false, internalType: "uint24" }
    ],
    anonymous: false
  },
  {
    type: "event",
    name: "Initialize",
    inputs: [
      { name: "id", type: "bytes32", indexed: true, internalType: "PoolId" },
      { name: "currency0", type: "address", indexed: true, internalType: "Currency" },
      { name: "currency1", type: "address", indexed: true, internalType: "Currency" },
      { name: "hooks", type: "address", indexed: false, internalType: "contract IHooks" },
      { name: "fee", type: "uint24", indexed: false, internalType: "uint24" },
      { name: "parameters", type: "bytes32", indexed: false, internalType: "bytes32" },
      { name: "activeId", type: "uint24", indexed: false, internalType: "uint24" }
    ],
    anonymous: false
  },
  {
    type: "event",
    name: "Mint",
    inputs: [
      { name: "id", type: "bytes32", indexed: true, internalType: "PoolId" },
      { name: "sender", type: "address", indexed: true, internalType: "address" },
      { name: "ids", type: "uint256[]", indexed: false, internalType: "uint256[]" },
      { name: "salt", type: "bytes32", indexed: false, internalType: "bytes32" },
      { name: "amounts", type: "bytes32[]", indexed: false, internalType: "bytes32[]" },
      { name: "compositionFeeAmount", type: "bytes32", indexed: false, internalType: "bytes32" },
      { name: "feeAmountToProtocol", type: "bytes32", indexed: false, internalType: "bytes32" }
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
    name: "ProtocolFeeControllerUpdated",
    inputs: [{ name: "protocolFeeController", type: "address", indexed: true, internalType: "address" }],
    anonymous: false
  },
  {
    type: "event",
    name: "ProtocolFeeUpdated",
    inputs: [
      { name: "id", type: "bytes32", indexed: true, internalType: "PoolId" },
      { name: "protocolFee", type: "uint24", indexed: false, internalType: "uint24" }
    ],
    anonymous: false
  },
  {
    type: "event",
    name: "SetMaxBinStep",
    inputs: [{ name: "maxBinStep", type: "uint16", indexed: false, internalType: "uint16" }],
    anonymous: false
  },
  {
    type: "event",
    name: "SetMinBinSharesForDonate",
    inputs: [{ name: "minLiquidity", type: "uint256", indexed: false, internalType: "uint256" }],
    anonymous: false
  },
  {
    type: "event",
    name: "Swap",
    inputs: [
      { name: "id", type: "bytes32", indexed: true, internalType: "PoolId" },
      { name: "sender", type: "address", indexed: true, internalType: "address" },
      { name: "amount0", type: "int128", indexed: false, internalType: "int128" },
      { name: "amount1", type: "int128", indexed: false, internalType: "int128" },
      { name: "activeId", type: "uint24", indexed: false, internalType: "uint24" },
      { name: "fee", type: "uint24", indexed: false, internalType: "uint24" },
      { name: "protocolFee", type: "uint16", indexed: false, internalType: "uint16" }
    ],
    anonymous: false
  },
  {
    type: "event",
    name: "Unpaused",
    inputs: [{ name: "account", type: "address", indexed: false, internalType: "address" }],
    anonymous: false
  },
  { type: "error", name: "AmountSpecifiedIsZero", inputs: [] },
  {
    type: "error",
    name: "BinHelper__CompositionFactorFlawed",
    inputs: [{ name: "id", type: "uint24", internalType: "uint24" }]
  },
  { type: "error", name: "BinPool__BurnZeroAmount", inputs: [{ name: "id", type: "uint24", internalType: "uint24" }] },
  { type: "error", name: "BinPool__EmptyLiquidityConfigs", inputs: [] },
  { type: "error", name: "BinPool__InsufficientAmountUnSpecified", inputs: [] },
  { type: "error", name: "BinPool__InvalidBurnInput", inputs: [] },
  { type: "error", name: "BinPool__MaxLiquidityPerBinExceeded", inputs: [] },
  { type: "error", name: "BinPool__NoLiquidityToReceiveFees", inputs: [] },
  { type: "error", name: "BinPool__ZeroAmountsOut", inputs: [{ name: "id", type: "uint24", internalType: "uint24" }] },
  { type: "error", name: "BinPool__ZeroShares", inputs: [{ name: "id", type: "uint24", internalType: "uint24" }] },
  { type: "error", name: "BinStepTooLarge", inputs: [{ name: "binStep", type: "uint16", internalType: "uint16" }] },
  { type: "error", name: "BinStepTooSmall", inputs: [{ name: "binStep", type: "uint16", internalType: "uint16" }] },
  {
    type: "error",
    name: "CurrenciesInitializedOutOfOrder",
    inputs: [
      { name: "currency0", type: "address", internalType: "address" },
      { name: "currency1", type: "address", internalType: "address" }
    ]
  },
  { type: "error", name: "EnforcedPause", inputs: [] },
  { type: "error", name: "HookConfigValidationError", inputs: [] },
  { type: "error", name: "HookDeltaExceedsSwapAmount", inputs: [] },
  { type: "error", name: "HookPermissionsValidationError", inputs: [] },
  {
    type: "error",
    name: "InsufficientBinShareForDonate",
    inputs: [{ name: "shares", type: "uint256", internalType: "uint256" }]
  },
  { type: "error", name: "InvalidCaller", inputs: [] },
  { type: "error", name: "InvalidHookResponse", inputs: [] },
  { type: "error", name: "LPFeeTooLarge", inputs: [{ name: "fee", type: "uint24", internalType: "uint24" }] },
  { type: "error", name: "LiquidityConfigurations__InvalidConfig", inputs: [] },
  {
    type: "error",
    name: "MaxBinStepTooSmall",
    inputs: [{ name: "maxBinStep", type: "uint16", internalType: "uint16" }]
  },
  { type: "error", name: "PackedUint128Math__AddOverflow", inputs: [] },
  { type: "error", name: "PackedUint128Math__SubUnderflow", inputs: [] },
  { type: "error", name: "PoolAlreadyInitialized", inputs: [] },
  { type: "error", name: "PoolManagerMismatch", inputs: [] },
  { type: "error", name: "PoolNotInitialized", inputs: [] },
  { type: "error", name: "ProtocolFeeCannotBeFetched", inputs: [] },
  { type: "error", name: "ProtocolFeeTooLarge", inputs: [{ name: "fee", type: "uint24", internalType: "uint24" }] },
  {
    type: "error",
    name: "Uint128x128Math__PowUnderflow",
    inputs: [
      { name: "x", type: "uint256", internalType: "uint256" },
      { name: "y", type: "int256", internalType: "int256" }
    ]
  },
  { type: "error", name: "Uint256x256Math__MulDivOverflow", inputs: [] },
  { type: "error", name: "Uint256x256Math__MulShiftOverflow", inputs: [] },
  { type: "error", name: "UnauthorizedDynamicLPFeeUpdate", inputs: [] },
  { type: "error", name: "UnusedBitsNonZero", inputs: [] }
];

// src/abis/BinPositionManagerAbi.ts
var BinPositionManagerAbi = [
  {
    type: "constructor",
    inputs: [
      { name: "_vault", type: "address", internalType: "contract IVault" },
      { name: "_binPoolManager", type: "address", internalType: "contract IBinPoolManager" },
      { name: "_permit2", type: "address", internalType: "contract IAllowanceTransfer" },
      { name: "_weth9", type: "address", internalType: "contract IWETH9" }
    ],
    stateMutability: "nonpayable"
  },
  { type: "receive", stateMutability: "payable" },
  {
    type: "function",
    name: "WETH9",
    inputs: [],
    outputs: [{ name: "", type: "address", internalType: "contract IWETH9" }],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "approveForAll",
    inputs: [
      { name: "operator", type: "address", internalType: "address" },
      { name: "approved", type: "bool", internalType: "bool" }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "balanceOf",
    inputs: [
      { name: "", type: "address", internalType: "address" },
      { name: "", type: "uint256", internalType: "uint256" }
    ],
    outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "balanceOfBatch",
    inputs: [
      { name: "owners", type: "address[]", internalType: "address[]" },
      { name: "ids", type: "uint256[]", internalType: "uint256[]" }
    ],
    outputs: [{ name: "balances", type: "uint256[]", internalType: "uint256[]" }],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "batchTransferFrom",
    inputs: [
      { name: "from", type: "address", internalType: "address" },
      { name: "to", type: "address", internalType: "address" },
      { name: "ids", type: "uint256[]", internalType: "uint256[]" },
      { name: "amounts", type: "uint256[]", internalType: "uint256[]" }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "binPoolManager",
    inputs: [],
    outputs: [{ name: "", type: "address", internalType: "contract IBinPoolManager" }],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "initializePool",
    inputs: [
      {
        name: "key",
        type: "tuple",
        internalType: "struct PoolKey",
        components: [
          { name: "currency0", type: "address", internalType: "Currency" },
          { name: "currency1", type: "address", internalType: "Currency" },
          { name: "hooks", type: "address", internalType: "contract IHooks" },
          { name: "poolManager", type: "address", internalType: "contract IPoolManager" },
          { name: "fee", type: "uint24", internalType: "uint24" },
          { name: "parameters", type: "bytes32", internalType: "bytes32" }
        ]
      },
      { name: "activeId", type: "uint24", internalType: "uint24" }
    ],
    outputs: [],
    stateMutability: "payable"
  },
  {
    type: "function",
    name: "isApprovedForAll",
    inputs: [
      { name: "", type: "address", internalType: "address" },
      { name: "", type: "address", internalType: "address" }
    ],
    outputs: [{ name: "", type: "bool", internalType: "bool" }],
    stateMutability: "view"
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
    name: "modifyLiquidities",
    inputs: [
      { name: "payload", type: "bytes", internalType: "bytes" },
      { name: "deadline", type: "uint256", internalType: "uint256" }
    ],
    outputs: [],
    stateMutability: "payable"
  },
  {
    type: "function",
    name: "modifyLiquiditiesWithoutLock",
    inputs: [
      { name: "actions", type: "bytes", internalType: "bytes" },
      { name: "params", type: "bytes[]", internalType: "bytes[]" }
    ],
    outputs: [],
    stateMutability: "payable"
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
    name: "multicall",
    inputs: [{ name: "data", type: "bytes[]", internalType: "bytes[]" }],
    outputs: [{ name: "results", type: "bytes[]", internalType: "bytes[]" }],
    stateMutability: "payable"
  },
  {
    type: "function",
    name: "name",
    inputs: [],
    outputs: [{ name: "", type: "string", internalType: "string" }],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "permit",
    inputs: [
      { name: "owner", type: "address", internalType: "address" },
      {
        name: "permitSingle",
        type: "tuple",
        internalType: "struct IAllowanceTransfer.PermitSingle",
        components: [
          {
            name: "details",
            type: "tuple",
            internalType: "struct IAllowanceTransfer.PermitDetails",
            components: [
              { name: "token", type: "address", internalType: "address" },
              { name: "amount", type: "uint160", internalType: "uint160" },
              { name: "expiration", type: "uint48", internalType: "uint48" },
              { name: "nonce", type: "uint48", internalType: "uint48" }
            ]
          },
          { name: "spender", type: "address", internalType: "address" },
          { name: "sigDeadline", type: "uint256", internalType: "uint256" }
        ]
      },
      { name: "signature", type: "bytes", internalType: "bytes" }
    ],
    outputs: [{ name: "err", type: "bytes", internalType: "bytes" }],
    stateMutability: "payable"
  },
  {
    type: "function",
    name: "permit2",
    inputs: [],
    outputs: [{ name: "", type: "address", internalType: "contract IAllowanceTransfer" }],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "permitBatch",
    inputs: [
      { name: "owner", type: "address", internalType: "address" },
      {
        name: "_permitBatch",
        type: "tuple",
        internalType: "struct IAllowanceTransfer.PermitBatch",
        components: [
          {
            name: "details",
            type: "tuple[]",
            internalType: "struct IAllowanceTransfer.PermitDetails[]",
            components: [
              { name: "token", type: "address", internalType: "address" },
              { name: "amount", type: "uint160", internalType: "uint160" },
              { name: "expiration", type: "uint48", internalType: "uint48" },
              { name: "nonce", type: "uint48", internalType: "uint48" }
            ]
          },
          { name: "spender", type: "address", internalType: "address" },
          { name: "sigDeadline", type: "uint256", internalType: "uint256" }
        ]
      },
      { name: "signature", type: "bytes", internalType: "bytes" }
    ],
    outputs: [{ name: "err", type: "bytes", internalType: "bytes" }],
    stateMutability: "payable"
  },
  {
    type: "function",
    name: "positions",
    inputs: [{ name: "tokenId", type: "uint256", internalType: "uint256" }],
    outputs: [
      {
        name: "",
        type: "tuple",
        internalType: "struct PoolKey",
        components: [
          { name: "currency0", type: "address", internalType: "Currency" },
          { name: "currency1", type: "address", internalType: "Currency" },
          { name: "hooks", type: "address", internalType: "contract IHooks" },
          { name: "poolManager", type: "address", internalType: "contract IPoolManager" },
          { name: "fee", type: "uint24", internalType: "uint24" },
          { name: "parameters", type: "bytes32", internalType: "bytes32" }
        ]
      },
      { name: "", type: "uint24", internalType: "uint24" }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "symbol",
    inputs: [],
    outputs: [{ name: "", type: "string", internalType: "string" }],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "totalSupply",
    inputs: [{ name: "", type: "uint256", internalType: "uint256" }],
    outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "vault",
    inputs: [],
    outputs: [{ name: "", type: "address", internalType: "contract IVault" }],
    stateMutability: "view"
  },
  {
    type: "event",
    name: "ApprovalForAll",
    inputs: [
      { name: "account", type: "address", indexed: true, internalType: "address" },
      { name: "sender", type: "address", indexed: true, internalType: "address" },
      { name: "approved", type: "bool", indexed: false, internalType: "bool" }
    ],
    anonymous: false
  },
  {
    type: "event",
    name: "TransferBatch",
    inputs: [
      { name: "sender", type: "address", indexed: true, internalType: "address" },
      { name: "from", type: "address", indexed: true, internalType: "address" },
      { name: "to", type: "address", indexed: true, internalType: "address" },
      { name: "ids", type: "uint256[]", indexed: false, internalType: "uint256[]" },
      { name: "amounts", type: "uint256[]", indexed: false, internalType: "uint256[]" }
    ],
    anonymous: false
  },
  { type: "error", name: "AddLiquidityInputActiveIdMismatch", inputs: [] },
  { type: "error", name: "BinFungibleToken_AddressThisOrZero", inputs: [] },
  {
    type: "error",
    name: "BinFungibleToken_BurnExceedsBalance",
    inputs: [
      { name: "from", type: "address", internalType: "address" },
      { name: "id", type: "uint256", internalType: "uint256" },
      { name: "amount", type: "uint256", internalType: "uint256" }
    ]
  },
  { type: "error", name: "BinFungibleToken_InvalidLength", inputs: [] },
  {
    type: "error",
    name: "BinFungibleToken_SelfApproval",
    inputs: [{ name: "owner", type: "address", internalType: "address" }]
  },
  {
    type: "error",
    name: "BinFungibleToken_SpenderNotApproved",
    inputs: [
      { name: "from", type: "address", internalType: "address" },
      { name: "spender", type: "address", internalType: "address" }
    ]
  },
  {
    type: "error",
    name: "BinFungibleToken_TransferExceedsBalance",
    inputs: [
      { name: "from", type: "address", internalType: "address" },
      { name: "id", type: "uint256", internalType: "uint256" },
      { name: "amount", type: "uint256", internalType: "uint256" }
    ]
  },
  { type: "error", name: "ContractLocked", inputs: [] },
  { type: "error", name: "DeadlinePassed", inputs: [{ name: "deadline", type: "uint256", internalType: "uint256" }] },
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
  { type: "error", name: "IdOverflows", inputs: [{ name: "", type: "int256", internalType: "int256" }] },
  {
    type: "error",
    name: "IdSlippageCaught",
    inputs: [
      { name: "activeIdDesired", type: "uint256", internalType: "uint256" },
      { name: "idSlippage", type: "uint256", internalType: "uint256" },
      { name: "activeId", type: "uint24", internalType: "uint24" }
    ]
  },
  { type: "error", name: "InputLengthMismatch", inputs: [] },
  { type: "error", name: "InsufficientBalance", inputs: [] },
  { type: "error", name: "InvalidEthSender", inputs: [] },
  { type: "error", name: "InvalidTokenID", inputs: [] },
  {
    type: "error",
    name: "MaximumAmountExceeded",
    inputs: [
      { name: "maximumAmount", type: "uint128", internalType: "uint128" },
      { name: "amountRequested", type: "uint128", internalType: "uint128" }
    ]
  },
  {
    type: "error",
    name: "MinimumAmountInsufficient",
    inputs: [
      { name: "minimumAmount", type: "uint128", internalType: "uint128" },
      { name: "amountReceived", type: "uint128", internalType: "uint128" }
    ]
  },
  { type: "error", name: "NotVault", inputs: [] },
  { type: "error", name: "SafeCastOverflow", inputs: [] },
  { type: "error", name: "UnsupportedAction", inputs: [{ name: "action", type: "uint256", internalType: "uint256" }] },
  { type: "error", name: "VaultMustBeUnlocked", inputs: [] }
];

// src/abis/BinQuoterAbi.ts
var BinQuoterAbi = [
  {
    type: "constructor",
    inputs: [{ name: "_poolManager", type: "address", internalType: "address" }],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "_quoteExactInput",
    inputs: [
      {
        name: "params",
        type: "tuple",
        internalType: "struct IQuoter.QuoteExactParams",
        components: [
          { name: "exactCurrency", type: "address", internalType: "Currency" },
          {
            name: "path",
            type: "tuple[]",
            internalType: "struct PathKey[]",
            components: [
              { name: "intermediateCurrency", type: "address", internalType: "Currency" },
              { name: "fee", type: "uint24", internalType: "uint24" },
              { name: "hooks", type: "address", internalType: "contract IHooks" },
              { name: "poolManager", type: "address", internalType: "contract IPoolManager" },
              { name: "hookData", type: "bytes", internalType: "bytes" },
              { name: "parameters", type: "bytes32", internalType: "bytes32" }
            ]
          },
          { name: "exactAmount", type: "uint128", internalType: "uint128" }
        ]
      }
    ],
    outputs: [{ name: "", type: "bytes", internalType: "bytes" }],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "_quoteExactInputSingle",
    inputs: [
      {
        name: "params",
        type: "tuple",
        internalType: "struct IQuoter.QuoteExactSingleParams",
        components: [
          {
            name: "poolKey",
            type: "tuple",
            internalType: "struct PoolKey",
            components: [
              { name: "currency0", type: "address", internalType: "Currency" },
              { name: "currency1", type: "address", internalType: "Currency" },
              { name: "hooks", type: "address", internalType: "contract IHooks" },
              { name: "poolManager", type: "address", internalType: "contract IPoolManager" },
              { name: "fee", type: "uint24", internalType: "uint24" },
              { name: "parameters", type: "bytes32", internalType: "bytes32" }
            ]
          },
          { name: "zeroForOne", type: "bool", internalType: "bool" },
          { name: "exactAmount", type: "uint128", internalType: "uint128" },
          { name: "hookData", type: "bytes", internalType: "bytes" }
        ]
      }
    ],
    outputs: [{ name: "", type: "bytes", internalType: "bytes" }],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "_quoteExactInputSingleList",
    inputs: [
      {
        name: "swapParamList",
        type: "tuple[]",
        internalType: "struct IQuoter.QuoteExactSingleParams[]",
        components: [
          {
            name: "poolKey",
            type: "tuple",
            internalType: "struct PoolKey",
            components: [
              { name: "currency0", type: "address", internalType: "Currency" },
              { name: "currency1", type: "address", internalType: "Currency" },
              { name: "hooks", type: "address", internalType: "contract IHooks" },
              { name: "poolManager", type: "address", internalType: "contract IPoolManager" },
              { name: "fee", type: "uint24", internalType: "uint24" },
              { name: "parameters", type: "bytes32", internalType: "bytes32" }
            ]
          },
          { name: "zeroForOne", type: "bool", internalType: "bool" },
          { name: "exactAmount", type: "uint128", internalType: "uint128" },
          { name: "hookData", type: "bytes", internalType: "bytes" }
        ]
      }
    ],
    outputs: [{ name: "", type: "bytes", internalType: "bytes" }],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "_quoteExactOutput",
    inputs: [
      {
        name: "params",
        type: "tuple",
        internalType: "struct IQuoter.QuoteExactParams",
        components: [
          { name: "exactCurrency", type: "address", internalType: "Currency" },
          {
            name: "path",
            type: "tuple[]",
            internalType: "struct PathKey[]",
            components: [
              { name: "intermediateCurrency", type: "address", internalType: "Currency" },
              { name: "fee", type: "uint24", internalType: "uint24" },
              { name: "hooks", type: "address", internalType: "contract IHooks" },
              { name: "poolManager", type: "address", internalType: "contract IPoolManager" },
              { name: "hookData", type: "bytes", internalType: "bytes" },
              { name: "parameters", type: "bytes32", internalType: "bytes32" }
            ]
          },
          { name: "exactAmount", type: "uint128", internalType: "uint128" }
        ]
      }
    ],
    outputs: [{ name: "", type: "bytes", internalType: "bytes" }],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "_quoteExactOutputSingle",
    inputs: [
      {
        name: "params",
        type: "tuple",
        internalType: "struct IQuoter.QuoteExactSingleParams",
        components: [
          {
            name: "poolKey",
            type: "tuple",
            internalType: "struct PoolKey",
            components: [
              { name: "currency0", type: "address", internalType: "Currency" },
              { name: "currency1", type: "address", internalType: "Currency" },
              { name: "hooks", type: "address", internalType: "contract IHooks" },
              { name: "poolManager", type: "address", internalType: "contract IPoolManager" },
              { name: "fee", type: "uint24", internalType: "uint24" },
              { name: "parameters", type: "bytes32", internalType: "bytes32" }
            ]
          },
          { name: "zeroForOne", type: "bool", internalType: "bool" },
          { name: "exactAmount", type: "uint128", internalType: "uint128" },
          { name: "hookData", type: "bytes", internalType: "bytes" }
        ]
      }
    ],
    outputs: [{ name: "", type: "bytes", internalType: "bytes" }],
    stateMutability: "nonpayable"
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
    name: "poolManager",
    inputs: [],
    outputs: [{ name: "", type: "address", internalType: "contract IBinPoolManager" }],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "quoteExactInput",
    inputs: [
      {
        name: "params",
        type: "tuple",
        internalType: "struct IQuoter.QuoteExactParams",
        components: [
          { name: "exactCurrency", type: "address", internalType: "Currency" },
          {
            name: "path",
            type: "tuple[]",
            internalType: "struct PathKey[]",
            components: [
              { name: "intermediateCurrency", type: "address", internalType: "Currency" },
              { name: "fee", type: "uint24", internalType: "uint24" },
              { name: "hooks", type: "address", internalType: "contract IHooks" },
              { name: "poolManager", type: "address", internalType: "contract IPoolManager" },
              { name: "hookData", type: "bytes", internalType: "bytes" },
              { name: "parameters", type: "bytes32", internalType: "bytes32" }
            ]
          },
          { name: "exactAmount", type: "uint128", internalType: "uint128" }
        ]
      }
    ],
    outputs: [
      { name: "amountOut", type: "uint256", internalType: "uint256" },
      { name: "gasEstimate", type: "uint256", internalType: "uint256" }
    ],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "quoteExactInputSingle",
    inputs: [
      {
        name: "params",
        type: "tuple",
        internalType: "struct IQuoter.QuoteExactSingleParams",
        components: [
          {
            name: "poolKey",
            type: "tuple",
            internalType: "struct PoolKey",
            components: [
              { name: "currency0", type: "address", internalType: "Currency" },
              { name: "currency1", type: "address", internalType: "Currency" },
              { name: "hooks", type: "address", internalType: "contract IHooks" },
              { name: "poolManager", type: "address", internalType: "contract IPoolManager" },
              { name: "fee", type: "uint24", internalType: "uint24" },
              { name: "parameters", type: "bytes32", internalType: "bytes32" }
            ]
          },
          { name: "zeroForOne", type: "bool", internalType: "bool" },
          { name: "exactAmount", type: "uint128", internalType: "uint128" },
          { name: "hookData", type: "bytes", internalType: "bytes" }
        ]
      }
    ],
    outputs: [
      { name: "amountOut", type: "uint256", internalType: "uint256" },
      { name: "gasEstimate", type: "uint256", internalType: "uint256" }
    ],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "quoteExactInputSingleList",
    inputs: [
      {
        name: "params",
        type: "tuple[]",
        internalType: "struct IQuoter.QuoteExactSingleParams[]",
        components: [
          {
            name: "poolKey",
            type: "tuple",
            internalType: "struct PoolKey",
            components: [
              { name: "currency0", type: "address", internalType: "Currency" },
              { name: "currency1", type: "address", internalType: "Currency" },
              { name: "hooks", type: "address", internalType: "contract IHooks" },
              { name: "poolManager", type: "address", internalType: "contract IPoolManager" },
              { name: "fee", type: "uint24", internalType: "uint24" },
              { name: "parameters", type: "bytes32", internalType: "bytes32" }
            ]
          },
          { name: "zeroForOne", type: "bool", internalType: "bool" },
          { name: "exactAmount", type: "uint128", internalType: "uint128" },
          { name: "hookData", type: "bytes", internalType: "bytes" }
        ]
      }
    ],
    outputs: [
      { name: "amountIn", type: "uint256", internalType: "uint256" },
      { name: "gasEstimate", type: "uint256", internalType: "uint256" }
    ],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "quoteExactOutput",
    inputs: [
      {
        name: "params",
        type: "tuple",
        internalType: "struct IQuoter.QuoteExactParams",
        components: [
          { name: "exactCurrency", type: "address", internalType: "Currency" },
          {
            name: "path",
            type: "tuple[]",
            internalType: "struct PathKey[]",
            components: [
              { name: "intermediateCurrency", type: "address", internalType: "Currency" },
              { name: "fee", type: "uint24", internalType: "uint24" },
              { name: "hooks", type: "address", internalType: "contract IHooks" },
              { name: "poolManager", type: "address", internalType: "contract IPoolManager" },
              { name: "hookData", type: "bytes", internalType: "bytes" },
              { name: "parameters", type: "bytes32", internalType: "bytes32" }
            ]
          },
          { name: "exactAmount", type: "uint128", internalType: "uint128" }
        ]
      }
    ],
    outputs: [
      { name: "amountIn", type: "uint256", internalType: "uint256" },
      { name: "gasEstimate", type: "uint256", internalType: "uint256" }
    ],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "quoteExactOutputSingle",
    inputs: [
      {
        name: "params",
        type: "tuple",
        internalType: "struct IQuoter.QuoteExactSingleParams",
        components: [
          {
            name: "poolKey",
            type: "tuple",
            internalType: "struct PoolKey",
            components: [
              { name: "currency0", type: "address", internalType: "Currency" },
              { name: "currency1", type: "address", internalType: "Currency" },
              { name: "hooks", type: "address", internalType: "contract IHooks" },
              { name: "poolManager", type: "address", internalType: "contract IPoolManager" },
              { name: "fee", type: "uint24", internalType: "uint24" },
              { name: "parameters", type: "bytes32", internalType: "bytes32" }
            ]
          },
          { name: "zeroForOne", type: "bool", internalType: "bool" },
          { name: "exactAmount", type: "uint128", internalType: "uint128" },
          { name: "hookData", type: "bytes", internalType: "bytes" }
        ]
      }
    ],
    outputs: [
      { name: "amountIn", type: "uint256", internalType: "uint256" },
      { name: "gasEstimate", type: "uint256", internalType: "uint256" }
    ],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "vault",
    inputs: [],
    outputs: [{ name: "", type: "address", internalType: "contract IVault" }],
    stateMutability: "view"
  },
  { type: "error", name: "NotEnoughLiquidity", inputs: [{ name: "poolId", type: "bytes32", internalType: "PoolId" }] },
  { type: "error", name: "NotSelf", inputs: [] },
  { type: "error", name: "NotVault", inputs: [] },
  { type: "error", name: "QuoteSwap", inputs: [{ name: "amount", type: "uint256", internalType: "uint256" }] },
  { type: "error", name: "UnexpectedCallSuccess", inputs: [] },
  {
    type: "error",
    name: "UnexpectedRevertBytes",
    inputs: [{ name: "revertData", type: "bytes", internalType: "bytes" }]
  }
];

// src/abis/CLMigratorAbi.ts
var CLMigratorAbi = [
  {
    type: "constructor",
    inputs: [
      { name: "_WETH9", type: "address", internalType: "address" },
      { name: "_clPositionManager", type: "address", internalType: "address" },
      { name: "_permit2", type: "address", internalType: "contract IAllowanceTransfer" }
    ],
    stateMutability: "nonpayable"
  },
  { type: "receive", stateMutability: "payable" },
  {
    type: "function",
    name: "WETH9",
    inputs: [],
    outputs: [{ name: "", type: "address", internalType: "address" }],
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
    name: "clPositionManager",
    inputs: [],
    outputs: [{ name: "", type: "address", internalType: "contract ICLPositionManager" }],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "initializePool",
    inputs: [
      {
        name: "poolKey",
        type: "tuple",
        internalType: "struct PoolKey",
        components: [
          { name: "currency0", type: "address", internalType: "Currency" },
          { name: "currency1", type: "address", internalType: "Currency" },
          { name: "hooks", type: "address", internalType: "contract IHooks" },
          { name: "poolManager", type: "address", internalType: "contract IPoolManager" },
          { name: "fee", type: "uint24", internalType: "uint24" },
          { name: "parameters", type: "bytes32", internalType: "bytes32" }
        ]
      },
      { name: "sqrtPriceX96", type: "uint160", internalType: "uint160" }
    ],
    outputs: [{ name: "tick", type: "int24", internalType: "int24" }],
    stateMutability: "payable"
  },
  {
    type: "function",
    name: "migrateFromV2",
    inputs: [
      {
        name: "v2PoolParams",
        type: "tuple",
        internalType: "struct IBaseMigrator.V2PoolParams",
        components: [
          { name: "pair", type: "address", internalType: "address" },
          { name: "migrateAmount", type: "uint256", internalType: "uint256" },
          { name: "amount0Min", type: "uint256", internalType: "uint256" },
          { name: "amount1Min", type: "uint256", internalType: "uint256" }
        ]
      },
      {
        name: "infiPoolParams",
        type: "tuple",
        internalType: "struct ICLMigrator.InfiCLPoolParams",
        components: [
          {
            name: "poolKey",
            type: "tuple",
            internalType: "struct PoolKey",
            components: [
              { name: "currency0", type: "address", internalType: "Currency" },
              { name: "currency1", type: "address", internalType: "Currency" },
              { name: "hooks", type: "address", internalType: "contract IHooks" },
              { name: "poolManager", type: "address", internalType: "contract IPoolManager" },
              { name: "fee", type: "uint24", internalType: "uint24" },
              { name: "parameters", type: "bytes32", internalType: "bytes32" }
            ]
          },
          { name: "tickLower", type: "int24", internalType: "int24" },
          { name: "tickUpper", type: "int24", internalType: "int24" },
          { name: "liquidityMin", type: "uint256", internalType: "uint256" },
          { name: "recipient", type: "address", internalType: "address" },
          { name: "deadline", type: "uint256", internalType: "uint256" },
          { name: "hookData", type: "bytes", internalType: "bytes" }
        ]
      },
      { name: "extraAmount0", type: "uint256", internalType: "uint256" },
      { name: "extraAmount1", type: "uint256", internalType: "uint256" }
    ],
    outputs: [],
    stateMutability: "payable"
  },
  {
    type: "function",
    name: "migrateFromV3",
    inputs: [
      {
        name: "v3PoolParams",
        type: "tuple",
        internalType: "struct IBaseMigrator.V3PoolParams",
        components: [
          { name: "nfp", type: "address", internalType: "address" },
          { name: "tokenId", type: "uint256", internalType: "uint256" },
          { name: "liquidity", type: "uint128", internalType: "uint128" },
          { name: "amount0Min", type: "uint256", internalType: "uint256" },
          { name: "amount1Min", type: "uint256", internalType: "uint256" },
          { name: "collectFee", type: "bool", internalType: "bool" },
          { name: "deadline", type: "uint256", internalType: "uint256" }
        ]
      },
      {
        name: "infiPoolParams",
        type: "tuple",
        internalType: "struct ICLMigrator.InfiCLPoolParams",
        components: [
          {
            name: "poolKey",
            type: "tuple",
            internalType: "struct PoolKey",
            components: [
              { name: "currency0", type: "address", internalType: "Currency" },
              { name: "currency1", type: "address", internalType: "Currency" },
              { name: "hooks", type: "address", internalType: "contract IHooks" },
              { name: "poolManager", type: "address", internalType: "contract IPoolManager" },
              { name: "fee", type: "uint24", internalType: "uint24" },
              { name: "parameters", type: "bytes32", internalType: "bytes32" }
            ]
          },
          { name: "tickLower", type: "int24", internalType: "int24" },
          { name: "tickUpper", type: "int24", internalType: "int24" },
          { name: "liquidityMin", type: "uint256", internalType: "uint256" },
          { name: "recipient", type: "address", internalType: "address" },
          { name: "deadline", type: "uint256", internalType: "uint256" },
          { name: "hookData", type: "bytes", internalType: "bytes" }
        ]
      },
      { name: "extraAmount0", type: "uint256", internalType: "uint256" },
      { name: "extraAmount1", type: "uint256", internalType: "uint256" }
    ],
    outputs: [],
    stateMutability: "payable"
  },
  {
    type: "function",
    name: "multicall",
    inputs: [{ name: "data", type: "bytes[]", internalType: "bytes[]" }],
    outputs: [{ name: "results", type: "bytes[]", internalType: "bytes[]" }],
    stateMutability: "payable"
  },
  {
    type: "function",
    name: "owner",
    inputs: [],
    outputs: [{ name: "", type: "address", internalType: "address" }],
    stateMutability: "view"
  },
  { type: "function", name: "pause", inputs: [], outputs: [], stateMutability: "nonpayable" },
  {
    type: "function",
    name: "paused",
    inputs: [],
    outputs: [{ name: "res", type: "bool", internalType: "bool" }],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "permit",
    inputs: [
      { name: "owner", type: "address", internalType: "address" },
      {
        name: "permitSingle",
        type: "tuple",
        internalType: "struct IAllowanceTransfer.PermitSingle",
        components: [
          {
            name: "details",
            type: "tuple",
            internalType: "struct IAllowanceTransfer.PermitDetails",
            components: [
              { name: "token", type: "address", internalType: "address" },
              { name: "amount", type: "uint160", internalType: "uint160" },
              { name: "expiration", type: "uint48", internalType: "uint48" },
              { name: "nonce", type: "uint48", internalType: "uint48" }
            ]
          },
          { name: "spender", type: "address", internalType: "address" },
          { name: "sigDeadline", type: "uint256", internalType: "uint256" }
        ]
      },
      { name: "signature", type: "bytes", internalType: "bytes" }
    ],
    outputs: [{ name: "err", type: "bytes", internalType: "bytes" }],
    stateMutability: "payable"
  },
  {
    type: "function",
    name: "permit2",
    inputs: [],
    outputs: [{ name: "", type: "address", internalType: "contract IAllowanceTransfer" }],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "permitBatch",
    inputs: [
      { name: "owner", type: "address", internalType: "address" },
      {
        name: "_permitBatch",
        type: "tuple",
        internalType: "struct IAllowanceTransfer.PermitBatch",
        components: [
          {
            name: "details",
            type: "tuple[]",
            internalType: "struct IAllowanceTransfer.PermitDetails[]",
            components: [
              { name: "token", type: "address", internalType: "address" },
              { name: "amount", type: "uint160", internalType: "uint160" },
              { name: "expiration", type: "uint48", internalType: "uint48" },
              { name: "nonce", type: "uint48", internalType: "uint48" }
            ]
          },
          { name: "spender", type: "address", internalType: "address" },
          { name: "sigDeadline", type: "uint256", internalType: "uint256" }
        ]
      },
      { name: "signature", type: "bytes", internalType: "bytes" }
    ],
    outputs: [{ name: "err", type: "bytes", internalType: "bytes" }],
    stateMutability: "payable"
  },
  {
    type: "function",
    name: "positionManagerPermit2",
    inputs: [],
    outputs: [{ name: "", type: "address", internalType: "contract IAllowanceTransfer" }],
    stateMutability: "view"
  },
  { type: "function", name: "refundETH", inputs: [], outputs: [], stateMutability: "payable" },
  {
    type: "function",
    name: "selfPermitERC721",
    inputs: [
      { name: "token", type: "address", internalType: "address" },
      { name: "tokenId", type: "uint256", internalType: "uint256" },
      { name: "deadline", type: "uint256", internalType: "uint256" },
      { name: "v", type: "uint8", internalType: "uint8" },
      { name: "r", type: "bytes32", internalType: "bytes32" },
      { name: "s", type: "bytes32", internalType: "bytes32" }
    ],
    outputs: [],
    stateMutability: "payable"
  },
  {
    type: "function",
    name: "selfPermitERC721IfNecessary",
    inputs: [
      { name: "token", type: "address", internalType: "address" },
      { name: "tokenId", type: "uint256", internalType: "uint256" },
      { name: "deadline", type: "uint256", internalType: "uint256" },
      { name: "v", type: "uint8", internalType: "uint8" },
      { name: "r", type: "bytes32", internalType: "bytes32" },
      { name: "s", type: "bytes32", internalType: "bytes32" }
    ],
    outputs: [],
    stateMutability: "payable"
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
    type: "event",
    name: "ExtraFundsAdded",
    inputs: [
      { name: "currency0", type: "address", indexed: false, internalType: "address" },
      { name: "currency1", type: "address", indexed: false, internalType: "address" },
      { name: "extraAmount0", type: "uint256", indexed: false, internalType: "uint256" },
      { name: "extraAmount1", type: "uint256", indexed: false, internalType: "uint256" }
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
    name: "Unpaused",
    inputs: [{ name: "account", type: "address", indexed: false, internalType: "address" }],
    anonymous: false
  },
  { type: "error", name: "ContractLocked", inputs: [] },
  { type: "error", name: "EnforcedPause", inputs: [] },
  { type: "error", name: "INSUFFICIENT_AMOUNTS_RECEIVED", inputs: [] },
  { type: "error", name: "INSUFFICIENT_LIQUIDITY", inputs: [] },
  { type: "error", name: "INVALID_ETHER_SENDER", inputs: [] },
  { type: "error", name: "InvalidTick", inputs: [{ name: "tick", type: "int24", internalType: "int24" }] },
  { type: "error", name: "NOT_TOKEN_OWNER", inputs: [] },
  { type: "error", name: "SafeCastOverflow", inputs: [] },
  {
    type: "error",
    name: "SafeCastOverflowedUintDowncast",
    inputs: [
      { name: "bits", type: "uint8", internalType: "uint8" },
      { name: "value", type: "uint256", internalType: "uint256" }
    ]
  },
  { type: "error", name: "TOKEN_NOT_MATCH", inputs: [] }
];

// src/abis/CLPoolManagerAbi.ts
var CLPoolManagerAbi = [
  {
    type: "constructor",
    inputs: [{ name: "_vault", type: "address", internalType: "contract IVault" }],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "collectProtocolFees",
    inputs: [
      { name: "recipient", type: "address", internalType: "address" },
      { name: "currency", type: "address", internalType: "Currency" },
      { name: "amount", type: "uint256", internalType: "uint256" }
    ],
    outputs: [{ name: "amountCollected", type: "uint256", internalType: "uint256" }],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "donate",
    inputs: [
      {
        name: "key",
        type: "tuple",
        internalType: "struct PoolKey",
        components: [
          { name: "currency0", type: "address", internalType: "Currency" },
          { name: "currency1", type: "address", internalType: "Currency" },
          { name: "hooks", type: "address", internalType: "contract IHooks" },
          { name: "poolManager", type: "address", internalType: "contract IPoolManager" },
          { name: "fee", type: "uint24", internalType: "uint24" },
          { name: "parameters", type: "bytes32", internalType: "bytes32" }
        ]
      },
      { name: "amount0", type: "uint256", internalType: "uint256" },
      { name: "amount1", type: "uint256", internalType: "uint256" },
      { name: "hookData", type: "bytes", internalType: "bytes" }
    ],
    outputs: [{ name: "delta", type: "int256", internalType: "BalanceDelta" }],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "extsload",
    inputs: [{ name: "slot", type: "bytes32", internalType: "bytes32" }],
    outputs: [{ name: "", type: "bytes32", internalType: "bytes32" }],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "extsload",
    inputs: [{ name: "slots", type: "bytes32[]", internalType: "bytes32[]" }],
    outputs: [{ name: "", type: "bytes32[]", internalType: "bytes32[]" }],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "getFeeGrowthGlobals",
    inputs: [{ name: "id", type: "bytes32", internalType: "PoolId" }],
    outputs: [
      { name: "feeGrowthGlobal0x128", type: "uint256", internalType: "uint256" },
      { name: "feeGrowthGlobal1x128", type: "uint256", internalType: "uint256" }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "getLiquidity",
    inputs: [
      { name: "id", type: "bytes32", internalType: "PoolId" },
      { name: "_owner", type: "address", internalType: "address" },
      { name: "tickLower", type: "int24", internalType: "int24" },
      { name: "tickUpper", type: "int24", internalType: "int24" },
      { name: "salt", type: "bytes32", internalType: "bytes32" }
    ],
    outputs: [{ name: "liquidity", type: "uint128", internalType: "uint128" }],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "getLiquidity",
    inputs: [{ name: "id", type: "bytes32", internalType: "PoolId" }],
    outputs: [{ name: "liquidity", type: "uint128", internalType: "uint128" }],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "getPoolBitmapInfo",
    inputs: [
      { name: "id", type: "bytes32", internalType: "PoolId" },
      { name: "word", type: "int16", internalType: "int16" }
    ],
    outputs: [{ name: "tickBitmap", type: "uint256", internalType: "uint256" }],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "getPoolTickInfo",
    inputs: [
      { name: "id", type: "bytes32", internalType: "PoolId" },
      { name: "tick", type: "int24", internalType: "int24" }
    ],
    outputs: [
      {
        name: "",
        type: "tuple",
        internalType: "struct Tick.Info",
        components: [
          { name: "liquidityGross", type: "uint128", internalType: "uint128" },
          { name: "liquidityNet", type: "int128", internalType: "int128" },
          { name: "feeGrowthOutside0X128", type: "uint256", internalType: "uint256" },
          { name: "feeGrowthOutside1X128", type: "uint256", internalType: "uint256" }
        ]
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "getPosition",
    inputs: [
      { name: "id", type: "bytes32", internalType: "PoolId" },
      { name: "owner", type: "address", internalType: "address" },
      { name: "tickLower", type: "int24", internalType: "int24" },
      { name: "tickUpper", type: "int24", internalType: "int24" },
      { name: "salt", type: "bytes32", internalType: "bytes32" }
    ],
    outputs: [
      {
        name: "position",
        type: "tuple",
        internalType: "struct CLPosition.Info",
        components: [
          { name: "liquidity", type: "uint128", internalType: "uint128" },
          { name: "feeGrowthInside0LastX128", type: "uint256", internalType: "uint256" },
          { name: "feeGrowthInside1LastX128", type: "uint256", internalType: "uint256" }
        ]
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "getSlot0",
    inputs: [{ name: "id", type: "bytes32", internalType: "PoolId" }],
    outputs: [
      { name: "sqrtPriceX96", type: "uint160", internalType: "uint160" },
      { name: "tick", type: "int24", internalType: "int24" },
      { name: "protocolFee", type: "uint24", internalType: "uint24" },
      { name: "lpFee", type: "uint24", internalType: "uint24" }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "initialize",
    inputs: [
      {
        name: "key",
        type: "tuple",
        internalType: "struct PoolKey",
        components: [
          { name: "currency0", type: "address", internalType: "Currency" },
          { name: "currency1", type: "address", internalType: "Currency" },
          { name: "hooks", type: "address", internalType: "contract IHooks" },
          { name: "poolManager", type: "address", internalType: "contract IPoolManager" },
          { name: "fee", type: "uint24", internalType: "uint24" },
          { name: "parameters", type: "bytes32", internalType: "bytes32" }
        ]
      },
      { name: "sqrtPriceX96", type: "uint160", internalType: "uint160" }
    ],
    outputs: [{ name: "tick", type: "int24", internalType: "int24" }],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "modifyLiquidity",
    inputs: [
      {
        name: "key",
        type: "tuple",
        internalType: "struct PoolKey",
        components: [
          { name: "currency0", type: "address", internalType: "Currency" },
          { name: "currency1", type: "address", internalType: "Currency" },
          { name: "hooks", type: "address", internalType: "contract IHooks" },
          { name: "poolManager", type: "address", internalType: "contract IPoolManager" },
          { name: "fee", type: "uint24", internalType: "uint24" },
          { name: "parameters", type: "bytes32", internalType: "bytes32" }
        ]
      },
      {
        name: "params",
        type: "tuple",
        internalType: "struct ICLPoolManager.ModifyLiquidityParams",
        components: [
          { name: "tickLower", type: "int24", internalType: "int24" },
          { name: "tickUpper", type: "int24", internalType: "int24" },
          { name: "liquidityDelta", type: "int256", internalType: "int256" },
          { name: "salt", type: "bytes32", internalType: "bytes32" }
        ]
      },
      { name: "hookData", type: "bytes", internalType: "bytes" }
    ],
    outputs: [
      { name: "delta", type: "int256", internalType: "BalanceDelta" },
      { name: "feeDelta", type: "int256", internalType: "BalanceDelta" }
    ],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "owner",
    inputs: [],
    outputs: [{ name: "", type: "address", internalType: "address" }],
    stateMutability: "view"
  },
  { type: "function", name: "pause", inputs: [], outputs: [], stateMutability: "nonpayable" },
  {
    type: "function",
    name: "paused",
    inputs: [],
    outputs: [{ name: "res", type: "bool", internalType: "bool" }],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "poolIdToPoolKey",
    inputs: [{ name: "id", type: "bytes32", internalType: "PoolId" }],
    outputs: [
      { name: "currency0", type: "address", internalType: "Currency" },
      { name: "currency1", type: "address", internalType: "Currency" },
      { name: "hooks", type: "address", internalType: "contract IHooks" },
      { name: "poolManager", type: "address", internalType: "contract IPoolManager" },
      { name: "fee", type: "uint24", internalType: "uint24" },
      { name: "parameters", type: "bytes32", internalType: "bytes32" }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "protocolFeeController",
    inputs: [],
    outputs: [{ name: "", type: "address", internalType: "contract IProtocolFeeController" }],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "protocolFeesAccrued",
    inputs: [{ name: "currency", type: "address", internalType: "Currency" }],
    outputs: [{ name: "amount", type: "uint256", internalType: "uint256" }],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "setProtocolFee",
    inputs: [
      {
        name: "key",
        type: "tuple",
        internalType: "struct PoolKey",
        components: [
          { name: "currency0", type: "address", internalType: "Currency" },
          { name: "currency1", type: "address", internalType: "Currency" },
          { name: "hooks", type: "address", internalType: "contract IHooks" },
          { name: "poolManager", type: "address", internalType: "contract IPoolManager" },
          { name: "fee", type: "uint24", internalType: "uint24" },
          { name: "parameters", type: "bytes32", internalType: "bytes32" }
        ]
      },
      { name: "newProtocolFee", type: "uint24", internalType: "uint24" }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "setProtocolFeeController",
    inputs: [{ name: "controller", type: "address", internalType: "contract IProtocolFeeController" }],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "swap",
    inputs: [
      {
        name: "key",
        type: "tuple",
        internalType: "struct PoolKey",
        components: [
          { name: "currency0", type: "address", internalType: "Currency" },
          { name: "currency1", type: "address", internalType: "Currency" },
          { name: "hooks", type: "address", internalType: "contract IHooks" },
          { name: "poolManager", type: "address", internalType: "contract IPoolManager" },
          { name: "fee", type: "uint24", internalType: "uint24" },
          { name: "parameters", type: "bytes32", internalType: "bytes32" }
        ]
      },
      {
        name: "params",
        type: "tuple",
        internalType: "struct ICLPoolManager.SwapParams",
        components: [
          { name: "zeroForOne", type: "bool", internalType: "bool" },
          { name: "amountSpecified", type: "int256", internalType: "int256" },
          { name: "sqrtPriceLimitX96", type: "uint160", internalType: "uint160" }
        ]
      },
      { name: "hookData", type: "bytes", internalType: "bytes" }
    ],
    outputs: [{ name: "delta", type: "int256", internalType: "BalanceDelta" }],
    stateMutability: "nonpayable"
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
    name: "updateDynamicLPFee",
    inputs: [
      {
        name: "key",
        type: "tuple",
        internalType: "struct PoolKey",
        components: [
          { name: "currency0", type: "address", internalType: "Currency" },
          { name: "currency1", type: "address", internalType: "Currency" },
          { name: "hooks", type: "address", internalType: "contract IHooks" },
          { name: "poolManager", type: "address", internalType: "contract IPoolManager" },
          { name: "fee", type: "uint24", internalType: "uint24" },
          { name: "parameters", type: "bytes32", internalType: "bytes32" }
        ]
      },
      { name: "newDynamicLPFee", type: "uint24", internalType: "uint24" }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "vault",
    inputs: [],
    outputs: [{ name: "", type: "address", internalType: "contract IVault" }],
    stateMutability: "view"
  },
  {
    type: "event",
    name: "Donate",
    inputs: [
      { name: "id", type: "bytes32", indexed: true, internalType: "PoolId" },
      { name: "sender", type: "address", indexed: true, internalType: "address" },
      { name: "amount0", type: "uint256", indexed: false, internalType: "uint256" },
      { name: "amount1", type: "uint256", indexed: false, internalType: "uint256" },
      { name: "tick", type: "int24", indexed: false, internalType: "int24" }
    ],
    anonymous: false
  },
  {
    type: "event",
    name: "DynamicLPFeeUpdated",
    inputs: [
      { name: "id", type: "bytes32", indexed: true, internalType: "PoolId" },
      { name: "dynamicLPFee", type: "uint24", indexed: false, internalType: "uint24" }
    ],
    anonymous: false
  },
  {
    type: "event",
    name: "Initialize",
    inputs: [
      { name: "id", type: "bytes32", indexed: true, internalType: "PoolId" },
      { name: "currency0", type: "address", indexed: true, internalType: "Currency" },
      { name: "currency1", type: "address", indexed: true, internalType: "Currency" },
      { name: "hooks", type: "address", indexed: false, internalType: "contract IHooks" },
      { name: "fee", type: "uint24", indexed: false, internalType: "uint24" },
      { name: "parameters", type: "bytes32", indexed: false, internalType: "bytes32" },
      { name: "sqrtPriceX96", type: "uint160", indexed: false, internalType: "uint160" },
      { name: "tick", type: "int24", indexed: false, internalType: "int24" }
    ],
    anonymous: false
  },
  {
    type: "event",
    name: "ModifyLiquidity",
    inputs: [
      { name: "id", type: "bytes32", indexed: true, internalType: "PoolId" },
      { name: "sender", type: "address", indexed: true, internalType: "address" },
      { name: "tickLower", type: "int24", indexed: false, internalType: "int24" },
      { name: "tickUpper", type: "int24", indexed: false, internalType: "int24" },
      { name: "liquidityDelta", type: "int256", indexed: false, internalType: "int256" },
      { name: "salt", type: "bytes32", indexed: false, internalType: "bytes32" }
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
    name: "ProtocolFeeControllerUpdated",
    inputs: [{ name: "protocolFeeController", type: "address", indexed: true, internalType: "address" }],
    anonymous: false
  },
  {
    type: "event",
    name: "ProtocolFeeUpdated",
    inputs: [
      { name: "id", type: "bytes32", indexed: true, internalType: "PoolId" },
      { name: "protocolFee", type: "uint24", indexed: false, internalType: "uint24" }
    ],
    anonymous: false
  },
  {
    type: "event",
    name: "Swap",
    inputs: [
      { name: "id", type: "bytes32", indexed: true, internalType: "PoolId" },
      { name: "sender", type: "address", indexed: true, internalType: "address" },
      { name: "amount0", type: "int128", indexed: false, internalType: "int128" },
      { name: "amount1", type: "int128", indexed: false, internalType: "int128" },
      { name: "sqrtPriceX96", type: "uint160", indexed: false, internalType: "uint160" },
      { name: "liquidity", type: "uint128", indexed: false, internalType: "uint128" },
      { name: "tick", type: "int24", indexed: false, internalType: "int24" },
      { name: "fee", type: "uint24", indexed: false, internalType: "uint24" },
      { name: "protocolFee", type: "uint16", indexed: false, internalType: "uint16" }
    ],
    anonymous: false
  },
  {
    type: "event",
    name: "Unpaused",
    inputs: [{ name: "account", type: "address", indexed: false, internalType: "address" }],
    anonymous: false
  },
  { type: "error", name: "CannotUpdateEmptyPosition", inputs: [] },
  {
    type: "error",
    name: "CurrenciesInitializedOutOfOrder",
    inputs: [
      { name: "currency0", type: "address", internalType: "address" },
      { name: "currency1", type: "address", internalType: "address" }
    ]
  },
  { type: "error", name: "EnforcedPause", inputs: [] },
  { type: "error", name: "HookConfigValidationError", inputs: [] },
  { type: "error", name: "HookDeltaExceedsSwapAmount", inputs: [] },
  { type: "error", name: "HookPermissionsValidationError", inputs: [] },
  { type: "error", name: "InvalidCaller", inputs: [] },
  { type: "error", name: "InvalidFeeForExactOut", inputs: [] },
  { type: "error", name: "InvalidHookResponse", inputs: [] },
  {
    type: "error",
    name: "InvalidSqrtPriceLimit",
    inputs: [
      { name: "sqrtPriceCurrentX96", type: "uint160", internalType: "uint160" },
      { name: "sqrtPriceLimitX96", type: "uint160", internalType: "uint160" }
    ]
  },
  {
    type: "error",
    name: "InvalidSqrtRatio",
    inputs: [{ name: "sqrtPriceX96", type: "uint160", internalType: "uint160" }]
  },
  { type: "error", name: "InvalidTick", inputs: [{ name: "tick", type: "int24", internalType: "int24" }] },
  { type: "error", name: "LPFeeTooLarge", inputs: [{ name: "fee", type: "uint24", internalType: "uint24" }] },
  { type: "error", name: "NoLiquidityToReceiveFees", inputs: [] },
  { type: "error", name: "PoolAlreadyInitialized", inputs: [] },
  { type: "error", name: "PoolManagerMismatch", inputs: [] },
  { type: "error", name: "PoolNotInitialized", inputs: [] },
  { type: "error", name: "PoolPaused", inputs: [] },
  { type: "error", name: "ProtocolFeeCannotBeFetched", inputs: [] },
  { type: "error", name: "ProtocolFeeTooLarge", inputs: [{ name: "fee", type: "uint24", internalType: "uint24" }] },
  { type: "error", name: "SwapAmountCannotBeZero", inputs: [] },
  { type: "error", name: "TickLiquidityOverflow", inputs: [{ name: "tick", type: "int24", internalType: "int24" }] },
  {
    type: "error",
    name: "TickLowerOutOfBounds",
    inputs: [{ name: "tickLower", type: "int24", internalType: "int24" }]
  },
  {
    type: "error",
    name: "TickSpacingTooLarge",
    inputs: [{ name: "tickSpacing", type: "int24", internalType: "int24" }]
  },
  {
    type: "error",
    name: "TickSpacingTooSmall",
    inputs: [{ name: "tickSpacing", type: "int24", internalType: "int24" }]
  },
  {
    type: "error",
    name: "TickUpperOutOfBounds",
    inputs: [{ name: "tickUpper", type: "int24", internalType: "int24" }]
  },
  {
    type: "error",
    name: "TicksMisordered",
    inputs: [
      { name: "tickLower", type: "int24", internalType: "int24" },
      { name: "tickUpper", type: "int24", internalType: "int24" }
    ]
  },
  { type: "error", name: "UnauthorizedDynamicLPFeeUpdate", inputs: [] },
  { type: "error", name: "UnusedBitsNonZero", inputs: [] }
];

// src/abis/CLPositionManagerAbi.ts
var CLPositionManagerAbi = [
  {
    type: "constructor",
    inputs: [
      { name: "_vault", type: "address", internalType: "contract IVault" },
      { name: "_clPoolManager", type: "address", internalType: "contract ICLPoolManager" },
      { name: "_permit2", type: "address", internalType: "contract IAllowanceTransfer" },
      { name: "_unsubscribeGasLimit", type: "uint256", internalType: "uint256" },
      { name: "_tokenDescriptor", type: "address", internalType: "contract ICLPositionDescriptor" },
      { name: "_weth9", type: "address", internalType: "contract IWETH9" }
    ],
    stateMutability: "nonpayable"
  },
  { type: "receive", stateMutability: "payable" },
  {
    type: "function",
    name: "DOMAIN_SEPARATOR",
    inputs: [],
    outputs: [{ name: "", type: "bytes32", internalType: "bytes32" }],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "WETH9",
    inputs: [],
    outputs: [{ name: "", type: "address", internalType: "contract IWETH9" }],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "approve",
    inputs: [
      { name: "spender", type: "address", internalType: "address" },
      { name: "id", type: "uint256", internalType: "uint256" }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "balanceOf",
    inputs: [{ name: "owner", type: "address", internalType: "address" }],
    outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
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
    name: "getApproved",
    inputs: [{ name: "", type: "uint256", internalType: "uint256" }],
    outputs: [{ name: "", type: "address", internalType: "address" }],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "getPoolAndPositionInfo",
    inputs: [{ name: "tokenId", type: "uint256", internalType: "uint256" }],
    outputs: [
      {
        name: "poolKey",
        type: "tuple",
        internalType: "struct PoolKey",
        components: [
          { name: "currency0", type: "address", internalType: "Currency" },
          { name: "currency1", type: "address", internalType: "Currency" },
          { name: "hooks", type: "address", internalType: "contract IHooks" },
          { name: "poolManager", type: "address", internalType: "contract IPoolManager" },
          { name: "fee", type: "uint24", internalType: "uint24" },
          { name: "parameters", type: "bytes32", internalType: "bytes32" }
        ]
      },
      { name: "info", type: "uint256", internalType: "CLPositionInfo" }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "getPositionLiquidity",
    inputs: [{ name: "tokenId", type: "uint256", internalType: "uint256" }],
    outputs: [{ name: "liquidity", type: "uint128", internalType: "uint128" }],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "initializePool",
    inputs: [
      {
        name: "key",
        type: "tuple",
        internalType: "struct PoolKey",
        components: [
          { name: "currency0", type: "address", internalType: "Currency" },
          { name: "currency1", type: "address", internalType: "Currency" },
          { name: "hooks", type: "address", internalType: "contract IHooks" },
          { name: "poolManager", type: "address", internalType: "contract IPoolManager" },
          { name: "fee", type: "uint24", internalType: "uint24" },
          { name: "parameters", type: "bytes32", internalType: "bytes32" }
        ]
      },
      { name: "sqrtPriceX96", type: "uint160", internalType: "uint160" }
    ],
    outputs: [{ name: "", type: "int24", internalType: "int24" }],
    stateMutability: "payable"
  },
  {
    type: "function",
    name: "isApprovedForAll",
    inputs: [
      { name: "", type: "address", internalType: "address" },
      { name: "", type: "address", internalType: "address" }
    ],
    outputs: [{ name: "", type: "bool", internalType: "bool" }],
    stateMutability: "view"
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
    name: "modifyLiquidities",
    inputs: [
      { name: "payload", type: "bytes", internalType: "bytes" },
      { name: "deadline", type: "uint256", internalType: "uint256" }
    ],
    outputs: [],
    stateMutability: "payable"
  },
  {
    type: "function",
    name: "modifyLiquiditiesWithoutLock",
    inputs: [
      { name: "actions", type: "bytes", internalType: "bytes" },
      { name: "params", type: "bytes[]", internalType: "bytes[]" }
    ],
    outputs: [],
    stateMutability: "payable"
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
    name: "multicall",
    inputs: [{ name: "data", type: "bytes[]", internalType: "bytes[]" }],
    outputs: [{ name: "results", type: "bytes[]", internalType: "bytes[]" }],
    stateMutability: "payable"
  },
  {
    type: "function",
    name: "name",
    inputs: [],
    outputs: [{ name: "", type: "string", internalType: "string" }],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "nextTokenId",
    inputs: [],
    outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "nonces",
    inputs: [
      { name: "owner", type: "address", internalType: "address" },
      { name: "word", type: "uint256", internalType: "uint256" }
    ],
    outputs: [{ name: "bitmap", type: "uint256", internalType: "uint256" }],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "ownerOf",
    inputs: [{ name: "id", type: "uint256", internalType: "uint256" }],
    outputs: [{ name: "owner", type: "address", internalType: "address" }],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "permit",
    inputs: [
      { name: "spender", type: "address", internalType: "address" },
      { name: "tokenId", type: "uint256", internalType: "uint256" },
      { name: "deadline", type: "uint256", internalType: "uint256" },
      { name: "nonce", type: "uint256", internalType: "uint256" },
      { name: "signature", type: "bytes", internalType: "bytes" }
    ],
    outputs: [],
    stateMutability: "payable"
  },
  {
    type: "function",
    name: "permit",
    inputs: [
      { name: "owner", type: "address", internalType: "address" },
      {
        name: "permitSingle",
        type: "tuple",
        internalType: "struct IAllowanceTransfer.PermitSingle",
        components: [
          {
            name: "details",
            type: "tuple",
            internalType: "struct IAllowanceTransfer.PermitDetails",
            components: [
              { name: "token", type: "address", internalType: "address" },
              { name: "amount", type: "uint160", internalType: "uint160" },
              { name: "expiration", type: "uint48", internalType: "uint48" },
              { name: "nonce", type: "uint48", internalType: "uint48" }
            ]
          },
          { name: "spender", type: "address", internalType: "address" },
          { name: "sigDeadline", type: "uint256", internalType: "uint256" }
        ]
      },
      { name: "signature", type: "bytes", internalType: "bytes" }
    ],
    outputs: [{ name: "err", type: "bytes", internalType: "bytes" }],
    stateMutability: "payable"
  },
  {
    type: "function",
    name: "permit2",
    inputs: [],
    outputs: [{ name: "", type: "address", internalType: "contract IAllowanceTransfer" }],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "permitBatch",
    inputs: [
      { name: "owner", type: "address", internalType: "address" },
      {
        name: "_permitBatch",
        type: "tuple",
        internalType: "struct IAllowanceTransfer.PermitBatch",
        components: [
          {
            name: "details",
            type: "tuple[]",
            internalType: "struct IAllowanceTransfer.PermitDetails[]",
            components: [
              { name: "token", type: "address", internalType: "address" },
              { name: "amount", type: "uint160", internalType: "uint160" },
              { name: "expiration", type: "uint48", internalType: "uint48" },
              { name: "nonce", type: "uint48", internalType: "uint48" }
            ]
          },
          { name: "spender", type: "address", internalType: "address" },
          { name: "sigDeadline", type: "uint256", internalType: "uint256" }
        ]
      },
      { name: "signature", type: "bytes", internalType: "bytes" }
    ],
    outputs: [{ name: "err", type: "bytes", internalType: "bytes" }],
    stateMutability: "payable"
  },
  {
    type: "function",
    name: "permitForAll",
    inputs: [
      { name: "owner", type: "address", internalType: "address" },
      { name: "operator", type: "address", internalType: "address" },
      { name: "approved", type: "bool", internalType: "bool" },
      { name: "deadline", type: "uint256", internalType: "uint256" },
      { name: "nonce", type: "uint256", internalType: "uint256" },
      { name: "signature", type: "bytes", internalType: "bytes" }
    ],
    outputs: [],
    stateMutability: "payable"
  },
  {
    type: "function",
    name: "poolKeys",
    inputs: [{ name: "poolId", type: "bytes25", internalType: "bytes25" }],
    outputs: [
      { name: "currency0", type: "address", internalType: "Currency" },
      { name: "currency1", type: "address", internalType: "Currency" },
      { name: "hooks", type: "address", internalType: "contract IHooks" },
      { name: "poolManager", type: "address", internalType: "contract IPoolManager" },
      { name: "fee", type: "uint24", internalType: "uint24" },
      { name: "parameters", type: "bytes32", internalType: "bytes32" }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "positionInfo",
    inputs: [{ name: "tokenId", type: "uint256", internalType: "uint256" }],
    outputs: [{ name: "info", type: "uint256", internalType: "CLPositionInfo" }],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "positions",
    inputs: [{ name: "tokenId", type: "uint256", internalType: "uint256" }],
    outputs: [
      {
        name: "poolKey",
        type: "tuple",
        internalType: "struct PoolKey",
        components: [
          { name: "currency0", type: "address", internalType: "Currency" },
          { name: "currency1", type: "address", internalType: "Currency" },
          { name: "hooks", type: "address", internalType: "contract IHooks" },
          { name: "poolManager", type: "address", internalType: "contract IPoolManager" },
          { name: "fee", type: "uint24", internalType: "uint24" },
          { name: "parameters", type: "bytes32", internalType: "bytes32" }
        ]
      },
      { name: "tickLower", type: "int24", internalType: "int24" },
      { name: "tickUpper", type: "int24", internalType: "int24" },
      { name: "liquidity", type: "uint128", internalType: "uint128" },
      { name: "feeGrowthInside0LastX128", type: "uint256", internalType: "uint256" },
      { name: "feeGrowthInside1LastX128", type: "uint256", internalType: "uint256" },
      { name: "_subscriber", type: "address", internalType: "contract ICLSubscriber" }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "revokeNonce",
    inputs: [{ name: "nonce", type: "uint256", internalType: "uint256" }],
    outputs: [],
    stateMutability: "payable"
  },
  {
    type: "function",
    name: "safeTransferFrom",
    inputs: [
      { name: "from", type: "address", internalType: "address" },
      { name: "to", type: "address", internalType: "address" },
      { name: "id", type: "uint256", internalType: "uint256" }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "safeTransferFrom",
    inputs: [
      { name: "from", type: "address", internalType: "address" },
      { name: "to", type: "address", internalType: "address" },
      { name: "id", type: "uint256", internalType: "uint256" },
      { name: "data", type: "bytes", internalType: "bytes" }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "setApprovalForAll",
    inputs: [
      { name: "operator", type: "address", internalType: "address" },
      { name: "approved", type: "bool", internalType: "bool" }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "subscribe",
    inputs: [
      { name: "tokenId", type: "uint256", internalType: "uint256" },
      { name: "newSubscriber", type: "address", internalType: "address" },
      { name: "data", type: "bytes", internalType: "bytes" }
    ],
    outputs: [],
    stateMutability: "payable"
  },
  {
    type: "function",
    name: "subscriber",
    inputs: [{ name: "tokenId", type: "uint256", internalType: "uint256" }],
    outputs: [{ name: "subscriber", type: "address", internalType: "contract ICLSubscriber" }],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "supportsInterface",
    inputs: [{ name: "interfaceId", type: "bytes4", internalType: "bytes4" }],
    outputs: [{ name: "", type: "bool", internalType: "bool" }],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "symbol",
    inputs: [],
    outputs: [{ name: "", type: "string", internalType: "string" }],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "tokenDescriptor",
    inputs: [],
    outputs: [{ name: "", type: "address", internalType: "contract ICLPositionDescriptor" }],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "tokenURI",
    inputs: [{ name: "tokenId", type: "uint256", internalType: "uint256" }],
    outputs: [{ name: "", type: "string", internalType: "string" }],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "transferFrom",
    inputs: [
      { name: "from", type: "address", internalType: "address" },
      { name: "to", type: "address", internalType: "address" },
      { name: "id", type: "uint256", internalType: "uint256" }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "unsubscribe",
    inputs: [{ name: "tokenId", type: "uint256", internalType: "uint256" }],
    outputs: [],
    stateMutability: "payable"
  },
  {
    type: "function",
    name: "unsubscribeGasLimit",
    inputs: [],
    outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "vault",
    inputs: [],
    outputs: [{ name: "", type: "address", internalType: "contract IVault" }],
    stateMutability: "view"
  },
  {
    type: "event",
    name: "Approval",
    inputs: [
      { name: "owner", type: "address", indexed: true, internalType: "address" },
      { name: "spender", type: "address", indexed: true, internalType: "address" },
      { name: "id", type: "uint256", indexed: true, internalType: "uint256" }
    ],
    anonymous: false
  },
  {
    type: "event",
    name: "ApprovalForAll",
    inputs: [
      { name: "owner", type: "address", indexed: true, internalType: "address" },
      { name: "operator", type: "address", indexed: true, internalType: "address" },
      { name: "approved", type: "bool", indexed: false, internalType: "bool" }
    ],
    anonymous: false
  },
  {
    type: "event",
    name: "MintPosition",
    inputs: [{ name: "tokenId", type: "uint256", indexed: true, internalType: "uint256" }],
    anonymous: false
  },
  {
    type: "event",
    name: "ModifyLiquidity",
    inputs: [
      { name: "tokenId", type: "uint256", indexed: true, internalType: "uint256" },
      { name: "liquidityChange", type: "int256", indexed: false, internalType: "int256" },
      { name: "feesAccrued", type: "int256", indexed: false, internalType: "BalanceDelta" }
    ],
    anonymous: false
  },
  {
    type: "event",
    name: "Subscription",
    inputs: [
      { name: "tokenId", type: "uint256", indexed: true, internalType: "uint256" },
      { name: "subscriber", type: "address", indexed: true, internalType: "address" }
    ],
    anonymous: false
  },
  {
    type: "event",
    name: "Transfer",
    inputs: [
      { name: "from", type: "address", indexed: true, internalType: "address" },
      { name: "to", type: "address", indexed: true, internalType: "address" },
      { name: "id", type: "uint256", indexed: true, internalType: "uint256" }
    ],
    anonymous: false
  },
  {
    type: "event",
    name: "Unsubscription",
    inputs: [
      { name: "tokenId", type: "uint256", indexed: true, internalType: "uint256" },
      { name: "subscriber", type: "address", indexed: true, internalType: "address" }
    ],
    anonymous: false
  },
  {
    type: "error",
    name: "AlreadySubscribed",
    inputs: [
      { name: "tokenId", type: "uint256", internalType: "uint256" },
      { name: "subscriber", type: "address", internalType: "address" }
    ]
  },
  {
    type: "error",
    name: "BurnNotificationReverted",
    inputs: [
      { name: "subscriber", type: "address", internalType: "address" },
      { name: "reason", type: "bytes", internalType: "bytes" }
    ]
  },
  { type: "error", name: "ContractLocked", inputs: [] },
  { type: "error", name: "DeadlinePassed", inputs: [{ name: "deadline", type: "uint256", internalType: "uint256" }] },
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
  { type: "error", name: "GasLimitTooLow", inputs: [] },
  { type: "error", name: "InputLengthMismatch", inputs: [] },
  { type: "error", name: "InsufficientBalance", inputs: [] },
  { type: "error", name: "InvalidContractSignature", inputs: [] },
  { type: "error", name: "InvalidEthSender", inputs: [] },
  { type: "error", name: "InvalidSignature", inputs: [] },
  { type: "error", name: "InvalidSignatureLength", inputs: [] },
  { type: "error", name: "InvalidSigner", inputs: [] },
  { type: "error", name: "InvalidTick", inputs: [{ name: "tick", type: "int24", internalType: "int24" }] },
  { type: "error", name: "InvalidTokenID", inputs: [] },
  {
    type: "error",
    name: "MaximumAmountExceeded",
    inputs: [
      { name: "maximumAmount", type: "uint128", internalType: "uint128" },
      { name: "amountRequested", type: "uint128", internalType: "uint128" }
    ]
  },
  {
    type: "error",
    name: "MinimumAmountInsufficient",
    inputs: [
      { name: "minimumAmount", type: "uint128", internalType: "uint128" },
      { name: "amountReceived", type: "uint128", internalType: "uint128" }
    ]
  },
  {
    type: "error",
    name: "ModifyLiquidityNotificationReverted",
    inputs: [
      { name: "subscriber", type: "address", internalType: "address" },
      { name: "reason", type: "bytes", internalType: "bytes" }
    ]
  },
  { type: "error", name: "NoCodeSubscriber", inputs: [] },
  { type: "error", name: "NoSelfPermit", inputs: [] },
  { type: "error", name: "NonceAlreadyUsed", inputs: [] },
  { type: "error", name: "NotApproved", inputs: [{ name: "caller", type: "address", internalType: "address" }] },
  { type: "error", name: "NotSubscribed", inputs: [] },
  { type: "error", name: "NotVault", inputs: [] },
  { type: "error", name: "SafeCastOverflow", inputs: [] },
  { type: "error", name: "SignatureDeadlineExpired", inputs: [] },
  {
    type: "error",
    name: "SubscriptionReverted",
    inputs: [
      { name: "subscriber", type: "address", internalType: "address" },
      { name: "reason", type: "bytes", internalType: "bytes" }
    ]
  },
  { type: "error", name: "Unauthorized", inputs: [] },
  { type: "error", name: "UnsupportedAction", inputs: [{ name: "action", type: "uint256", internalType: "uint256" }] },
  { type: "error", name: "VaultMustBeUnlocked", inputs: [] }
];

// src/abis/CLQuoterAbi.ts
var CLQuoterAbi = [
  {
    type: "constructor",
    inputs: [{ name: "_poolManager", type: "address", internalType: "address" }],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "_quoteExactInput",
    inputs: [
      {
        name: "params",
        type: "tuple",
        internalType: "struct IQuoter.QuoteExactParams",
        components: [
          { name: "exactCurrency", type: "address", internalType: "Currency" },
          {
            name: "path",
            type: "tuple[]",
            internalType: "struct PathKey[]",
            components: [
              { name: "intermediateCurrency", type: "address", internalType: "Currency" },
              { name: "fee", type: "uint24", internalType: "uint24" },
              { name: "hooks", type: "address", internalType: "contract IHooks" },
              { name: "poolManager", type: "address", internalType: "contract IPoolManager" },
              { name: "hookData", type: "bytes", internalType: "bytes" },
              { name: "parameters", type: "bytes32", internalType: "bytes32" }
            ]
          },
          { name: "exactAmount", type: "uint128", internalType: "uint128" }
        ]
      }
    ],
    outputs: [{ name: "", type: "bytes", internalType: "bytes" }],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "_quoteExactInputSingle",
    inputs: [
      {
        name: "params",
        type: "tuple",
        internalType: "struct IQuoter.QuoteExactSingleParams",
        components: [
          {
            name: "poolKey",
            type: "tuple",
            internalType: "struct PoolKey",
            components: [
              { name: "currency0", type: "address", internalType: "Currency" },
              { name: "currency1", type: "address", internalType: "Currency" },
              { name: "hooks", type: "address", internalType: "contract IHooks" },
              { name: "poolManager", type: "address", internalType: "contract IPoolManager" },
              { name: "fee", type: "uint24", internalType: "uint24" },
              { name: "parameters", type: "bytes32", internalType: "bytes32" }
            ]
          },
          { name: "zeroForOne", type: "bool", internalType: "bool" },
          { name: "exactAmount", type: "uint128", internalType: "uint128" },
          { name: "hookData", type: "bytes", internalType: "bytes" }
        ]
      }
    ],
    outputs: [{ name: "", type: "bytes", internalType: "bytes" }],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "_quoteExactInputSingleList",
    inputs: [
      {
        name: "swapParamList",
        type: "tuple[]",
        internalType: "struct IQuoter.QuoteExactSingleParams[]",
        components: [
          {
            name: "poolKey",
            type: "tuple",
            internalType: "struct PoolKey",
            components: [
              { name: "currency0", type: "address", internalType: "Currency" },
              { name: "currency1", type: "address", internalType: "Currency" },
              { name: "hooks", type: "address", internalType: "contract IHooks" },
              { name: "poolManager", type: "address", internalType: "contract IPoolManager" },
              { name: "fee", type: "uint24", internalType: "uint24" },
              { name: "parameters", type: "bytes32", internalType: "bytes32" }
            ]
          },
          { name: "zeroForOne", type: "bool", internalType: "bool" },
          { name: "exactAmount", type: "uint128", internalType: "uint128" },
          { name: "hookData", type: "bytes", internalType: "bytes" }
        ]
      }
    ],
    outputs: [{ name: "", type: "bytes", internalType: "bytes" }],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "_quoteExactOutput",
    inputs: [
      {
        name: "params",
        type: "tuple",
        internalType: "struct IQuoter.QuoteExactParams",
        components: [
          { name: "exactCurrency", type: "address", internalType: "Currency" },
          {
            name: "path",
            type: "tuple[]",
            internalType: "struct PathKey[]",
            components: [
              { name: "intermediateCurrency", type: "address", internalType: "Currency" },
              { name: "fee", type: "uint24", internalType: "uint24" },
              { name: "hooks", type: "address", internalType: "contract IHooks" },
              { name: "poolManager", type: "address", internalType: "contract IPoolManager" },
              { name: "hookData", type: "bytes", internalType: "bytes" },
              { name: "parameters", type: "bytes32", internalType: "bytes32" }
            ]
          },
          { name: "exactAmount", type: "uint128", internalType: "uint128" }
        ]
      }
    ],
    outputs: [{ name: "", type: "bytes", internalType: "bytes" }],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "_quoteExactOutputSingle",
    inputs: [
      {
        name: "params",
        type: "tuple",
        internalType: "struct IQuoter.QuoteExactSingleParams",
        components: [
          {
            name: "poolKey",
            type: "tuple",
            internalType: "struct PoolKey",
            components: [
              { name: "currency0", type: "address", internalType: "Currency" },
              { name: "currency1", type: "address", internalType: "Currency" },
              { name: "hooks", type: "address", internalType: "contract IHooks" },
              { name: "poolManager", type: "address", internalType: "contract IPoolManager" },
              { name: "fee", type: "uint24", internalType: "uint24" },
              { name: "parameters", type: "bytes32", internalType: "bytes32" }
            ]
          },
          { name: "zeroForOne", type: "bool", internalType: "bool" },
          { name: "exactAmount", type: "uint128", internalType: "uint128" },
          { name: "hookData", type: "bytes", internalType: "bytes" }
        ]
      }
    ],
    outputs: [{ name: "", type: "bytes", internalType: "bytes" }],
    stateMutability: "nonpayable"
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
    name: "poolManager",
    inputs: [],
    outputs: [{ name: "", type: "address", internalType: "contract ICLPoolManager" }],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "quoteExactInput",
    inputs: [
      {
        name: "params",
        type: "tuple",
        internalType: "struct IQuoter.QuoteExactParams",
        components: [
          { name: "exactCurrency", type: "address", internalType: "Currency" },
          {
            name: "path",
            type: "tuple[]",
            internalType: "struct PathKey[]",
            components: [
              { name: "intermediateCurrency", type: "address", internalType: "Currency" },
              { name: "fee", type: "uint24", internalType: "uint24" },
              { name: "hooks", type: "address", internalType: "contract IHooks" },
              { name: "poolManager", type: "address", internalType: "contract IPoolManager" },
              { name: "hookData", type: "bytes", internalType: "bytes" },
              { name: "parameters", type: "bytes32", internalType: "bytes32" }
            ]
          },
          { name: "exactAmount", type: "uint128", internalType: "uint128" }
        ]
      }
    ],
    outputs: [
      { name: "amountOut", type: "uint256", internalType: "uint256" },
      { name: "gasEstimate", type: "uint256", internalType: "uint256" }
    ],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "quoteExactInputSingle",
    inputs: [
      {
        name: "params",
        type: "tuple",
        internalType: "struct IQuoter.QuoteExactSingleParams",
        components: [
          {
            name: "poolKey",
            type: "tuple",
            internalType: "struct PoolKey",
            components: [
              { name: "currency0", type: "address", internalType: "Currency" },
              { name: "currency1", type: "address", internalType: "Currency" },
              { name: "hooks", type: "address", internalType: "contract IHooks" },
              { name: "poolManager", type: "address", internalType: "contract IPoolManager" },
              { name: "fee", type: "uint24", internalType: "uint24" },
              { name: "parameters", type: "bytes32", internalType: "bytes32" }
            ]
          },
          { name: "zeroForOne", type: "bool", internalType: "bool" },
          { name: "exactAmount", type: "uint128", internalType: "uint128" },
          { name: "hookData", type: "bytes", internalType: "bytes" }
        ]
      }
    ],
    outputs: [
      { name: "amountOut", type: "uint256", internalType: "uint256" },
      { name: "gasEstimate", type: "uint256", internalType: "uint256" }
    ],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "quoteExactInputSingleList",
    inputs: [
      {
        name: "params",
        type: "tuple[]",
        internalType: "struct IQuoter.QuoteExactSingleParams[]",
        components: [
          {
            name: "poolKey",
            type: "tuple",
            internalType: "struct PoolKey",
            components: [
              { name: "currency0", type: "address", internalType: "Currency" },
              { name: "currency1", type: "address", internalType: "Currency" },
              { name: "hooks", type: "address", internalType: "contract IHooks" },
              { name: "poolManager", type: "address", internalType: "contract IPoolManager" },
              { name: "fee", type: "uint24", internalType: "uint24" },
              { name: "parameters", type: "bytes32", internalType: "bytes32" }
            ]
          },
          { name: "zeroForOne", type: "bool", internalType: "bool" },
          { name: "exactAmount", type: "uint128", internalType: "uint128" },
          { name: "hookData", type: "bytes", internalType: "bytes" }
        ]
      }
    ],
    outputs: [
      { name: "amountIn", type: "uint256", internalType: "uint256" },
      { name: "gasEstimate", type: "uint256", internalType: "uint256" }
    ],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "quoteExactOutput",
    inputs: [
      {
        name: "params",
        type: "tuple",
        internalType: "struct IQuoter.QuoteExactParams",
        components: [
          { name: "exactCurrency", type: "address", internalType: "Currency" },
          {
            name: "path",
            type: "tuple[]",
            internalType: "struct PathKey[]",
            components: [
              { name: "intermediateCurrency", type: "address", internalType: "Currency" },
              { name: "fee", type: "uint24", internalType: "uint24" },
              { name: "hooks", type: "address", internalType: "contract IHooks" },
              { name: "poolManager", type: "address", internalType: "contract IPoolManager" },
              { name: "hookData", type: "bytes", internalType: "bytes" },
              { name: "parameters", type: "bytes32", internalType: "bytes32" }
            ]
          },
          { name: "exactAmount", type: "uint128", internalType: "uint128" }
        ]
      }
    ],
    outputs: [
      { name: "amountIn", type: "uint256", internalType: "uint256" },
      { name: "gasEstimate", type: "uint256", internalType: "uint256" }
    ],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "quoteExactOutputSingle",
    inputs: [
      {
        name: "params",
        type: "tuple",
        internalType: "struct IQuoter.QuoteExactSingleParams",
        components: [
          {
            name: "poolKey",
            type: "tuple",
            internalType: "struct PoolKey",
            components: [
              { name: "currency0", type: "address", internalType: "Currency" },
              { name: "currency1", type: "address", internalType: "Currency" },
              { name: "hooks", type: "address", internalType: "contract IHooks" },
              { name: "poolManager", type: "address", internalType: "contract IPoolManager" },
              { name: "fee", type: "uint24", internalType: "uint24" },
              { name: "parameters", type: "bytes32", internalType: "bytes32" }
            ]
          },
          { name: "zeroForOne", type: "bool", internalType: "bool" },
          { name: "exactAmount", type: "uint128", internalType: "uint128" },
          { name: "hookData", type: "bytes", internalType: "bytes" }
        ]
      }
    ],
    outputs: [
      { name: "amountIn", type: "uint256", internalType: "uint256" },
      { name: "gasEstimate", type: "uint256", internalType: "uint256" }
    ],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "vault",
    inputs: [],
    outputs: [{ name: "", type: "address", internalType: "contract IVault" }],
    stateMutability: "view"
  },
  { type: "error", name: "NotEnoughLiquidity", inputs: [{ name: "poolId", type: "bytes32", internalType: "PoolId" }] },
  { type: "error", name: "NotSelf", inputs: [] },
  { type: "error", name: "NotVault", inputs: [] },
  { type: "error", name: "QuoteSwap", inputs: [{ name: "amount", type: "uint256", internalType: "uint256" }] },
  { type: "error", name: "UnexpectedCallSuccess", inputs: [] },
  {
    type: "error",
    name: "UnexpectedRevertBytes",
    inputs: [{ name: "revertData", type: "bytes", internalType: "bytes" }]
  }
];

// src/abis/FarmingOffChainAbi.ts
var FARMING_OFFCHAIN_ABI = [
  {
    type: "constructor",
    inputs: [{ name: "defaultAdmin", type: "address", internalType: "address" }],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "DEFAULT_ADMIN_ROLE",
    inputs: [],
    outputs: [{ name: "", type: "bytes32", internalType: "bytes32" }],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "DEFAULT_DISPUTE_PERIOD",
    inputs: [],
    outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "DISPUTE_RESOLVER_ROLE",
    inputs: [],
    outputs: [{ name: "", type: "bytes32", internalType: "bytes32" }],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "MERKLE_TREE_SETTER_ROLE",
    inputs: [],
    outputs: [{ name: "", type: "bytes32", internalType: "bytes32" }],
    stateMutability: "view"
  },
  { type: "function", name: "acceptDefaultAdminTransfer", inputs: [], outputs: [], stateMutability: "nonpayable" },
  {
    type: "function",
    name: "allowUserToDispute",
    inputs: [{ name: "user", type: "address", internalType: "address" }],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "beginDefaultAdminTransfer",
    inputs: [{ name: "newAdmin", type: "address", internalType: "address" }],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "campaignManager",
    inputs: [],
    outputs: [{ name: "", type: "address", internalType: "address" }],
    stateMutability: "view"
  },
  { type: "function", name: "cancelDefaultAdminTransfer", inputs: [], outputs: [], stateMutability: "nonpayable" },
  {
    type: "function",
    name: "changeDefaultAdminDelay",
    inputs: [{ name: "newDelay", type: "uint48", internalType: "uint48" }],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "claim",
    inputs: [
      {
        name: "claimParams",
        type: "tuple[]",
        internalType: "struct IDistributor.ClaimParams[]",
        components: [
          { name: "token", type: "address", internalType: "address" },
          { name: "amount", type: "uint256", internalType: "uint256" },
          { name: "proof", type: "bytes32[]", internalType: "bytes32[]" }
        ]
      }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "claimedAmounts",
    inputs: [
      { name: "token", type: "address", internalType: "address" },
      { name: "user", type: "address", internalType: "address" }
    ],
    outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "defaultAdmin",
    inputs: [],
    outputs: [{ name: "", type: "address", internalType: "address" }],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "defaultAdminDelay",
    inputs: [],
    outputs: [{ name: "", type: "uint48", internalType: "uint48" }],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "defaultAdminDelayIncreaseWait",
    inputs: [],
    outputs: [{ name: "", type: "uint48", internalType: "uint48" }],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "disallowUserToDispute",
    inputs: [{ name: "user", type: "address", internalType: "address" }],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "dispute",
    inputs: [{ name: "reason", type: "string", internalType: "string" }],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "disputeAmount",
    inputs: [],
    outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "disputePeriod",
    inputs: [],
    outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "disputeToken",
    inputs: [],
    outputs: [{ name: "", type: "address", internalType: "contract IERC20" }],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "disputeTokenWhitelist",
    inputs: [{ name: "", type: "address", internalType: "address" }],
    outputs: [{ name: "", type: "bool", internalType: "bool" }],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "disputer",
    inputs: [],
    outputs: [{ name: "", type: "address", internalType: "address" }],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "endOfDisputePeriod",
    inputs: [],
    outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "getMerkleTreeRoot",
    inputs: [],
    outputs: [{ name: "", type: "bytes32", internalType: "bytes32" }],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "getRoleAdmin",
    inputs: [{ name: "role", type: "bytes32", internalType: "bytes32" }],
    outputs: [{ name: "", type: "bytes32", internalType: "bytes32" }],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "grantRole",
    inputs: [
      { name: "role", type: "bytes32", internalType: "bytes32" },
      { name: "account", type: "address", internalType: "address" }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "hasRole",
    inputs: [
      { name: "role", type: "bytes32", internalType: "bytes32" },
      { name: "account", type: "address", internalType: "address" }
    ],
    outputs: [{ name: "", type: "bool", internalType: "bool" }],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "isAllowedToDispute",
    inputs: [{ name: "user", type: "address", internalType: "address" }],
    outputs: [{ name: "", type: "bool", internalType: "bool" }],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "isEveryoneAllowedToDispute",
    inputs: [],
    outputs: [{ name: "", type: "bool", internalType: "bool" }],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "lastMerkleTreeRoot",
    inputs: [],
    outputs: [{ name: "", type: "bytes32", internalType: "bytes32" }],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "merkleTreeRoot",
    inputs: [],
    outputs: [{ name: "", type: "bytes32", internalType: "bytes32" }],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "owner",
    inputs: [],
    outputs: [{ name: "", type: "address", internalType: "address" }],
    stateMutability: "view"
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
    name: "pendingDefaultAdmin",
    inputs: [],
    outputs: [
      { name: "newAdmin", type: "address", internalType: "address" },
      { name: "schedule", type: "uint48", internalType: "uint48" }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "pendingDefaultAdminDelay",
    inputs: [],
    outputs: [
      { name: "newDelay", type: "uint48", internalType: "uint48" },
      { name: "schedule", type: "uint48", internalType: "uint48" }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "renounceRole",
    inputs: [
      { name: "role", type: "bytes32", internalType: "bytes32" },
      { name: "account", type: "address", internalType: "address" }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "resolveDispute",
    inputs: [{ name: "isValid", type: "bool", internalType: "bool" }],
    outputs: [],
    stateMutability: "nonpayable"
  },
  { type: "function", name: "revokeMerkleTree", inputs: [], outputs: [], stateMutability: "nonpayable" },
  {
    type: "function",
    name: "revokeRole",
    inputs: [
      { name: "role", type: "bytes32", internalType: "bytes32" },
      { name: "account", type: "address", internalType: "address" }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  { type: "function", name: "rollbackDefaultAdminDelay", inputs: [], outputs: [], stateMutability: "nonpayable" },
  {
    type: "function",
    name: "setCampaignManager",
    inputs: [{ name: "_campaignManager", type: "address", internalType: "address" }],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "setDisputePeriod",
    inputs: [{ name: "period", type: "uint256", internalType: "uint256" }],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "setDisputeTokenAndAmount",
    inputs: [
      { name: "token", type: "address", internalType: "address" },
      { name: "amount", type: "uint256", internalType: "uint256" }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "setIsEveryoneAllowedToDispute",
    inputs: [{ name: "isEveryoneAllowedToDispute_", type: "bool", internalType: "bool" }],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "setMerkleTree",
    inputs: [
      { name: "root", type: "bytes32", internalType: "bytes32" },
      { name: "ipfsHash", type: "bytes32", internalType: "bytes32" }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "supportsInterface",
    inputs: [{ name: "interfaceId", type: "bytes4", internalType: "bytes4" }],
    outputs: [{ name: "", type: "bool", internalType: "bool" }],
    stateMutability: "view"
  },
  { type: "function", name: "unpause", inputs: [], outputs: [], stateMutability: "nonpayable" },
  {
    type: "function",
    name: "unwhitelistDisputeToken",
    inputs: [{ name: "token", type: "address", internalType: "address" }],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "whitelistDisputeToken",
    inputs: [{ name: "token", type: "address", internalType: "address" }],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "withdrawRewardFromStoppedCampaign",
    inputs: [
      { name: "_token", type: "address", internalType: "contract IERC20" },
      { name: "_recipient", type: "address", internalType: "address" },
      { name: "_amount", type: "uint256", internalType: "uint256" }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "event",
    name: "CampaignManagerUpdated",
    inputs: [{ name: "campaignManager", type: "address", indexed: true, internalType: "address" }],
    anonymous: false
  },
  {
    type: "event",
    name: "Claimed",
    inputs: [
      { name: "user", type: "address", indexed: true, internalType: "address" },
      { name: "token", type: "address", indexed: true, internalType: "address" },
      { name: "amount", type: "uint256", indexed: false, internalType: "uint256" }
    ],
    anonymous: false
  },
  { type: "event", name: "DefaultAdminDelayChangeCanceled", inputs: [], anonymous: false },
  {
    type: "event",
    name: "DefaultAdminDelayChangeScheduled",
    inputs: [
      { name: "newDelay", type: "uint48", indexed: false, internalType: "uint48" },
      { name: "effectSchedule", type: "uint48", indexed: false, internalType: "uint48" }
    ],
    anonymous: false
  },
  { type: "event", name: "DefaultAdminTransferCanceled", inputs: [], anonymous: false },
  {
    type: "event",
    name: "DefaultAdminTransferScheduled",
    inputs: [
      { name: "newAdmin", type: "address", indexed: true, internalType: "address" },
      { name: "acceptSchedule", type: "uint48", indexed: false, internalType: "uint48" }
    ],
    anonymous: false
  },
  {
    type: "event",
    name: "DisputePeriodUpdated",
    inputs: [{ name: "period", type: "uint256", indexed: false, internalType: "uint256" }],
    anonymous: false
  },
  {
    type: "event",
    name: "DisputeResolved",
    inputs: [{ name: "isValid", type: "bool", indexed: false, internalType: "bool" }],
    anonymous: false
  },
  {
    type: "event",
    name: "DisputeTokenAndAmountUpdated",
    inputs: [
      { name: "token", type: "address", indexed: true, internalType: "address" },
      { name: "amount", type: "uint256", indexed: false, internalType: "uint256" }
    ],
    anonymous: false
  },
  {
    type: "event",
    name: "DisputeTokenUnwhitelisted",
    inputs: [{ name: "token", type: "address", indexed: true, internalType: "address" }],
    anonymous: false
  },
  {
    type: "event",
    name: "DisputeTokenWhitelisted",
    inputs: [{ name: "token", type: "address", indexed: true, internalType: "address" }],
    anonymous: false
  },
  {
    type: "event",
    name: "Disputed",
    inputs: [{ name: "reason", type: "string", indexed: false, internalType: "string" }],
    anonymous: false
  },
  {
    type: "event",
    name: "IsEveryoneAllowedToDisputeUpdated",
    inputs: [{ name: "isEveryoneAllowedToDispute", type: "bool", indexed: false, internalType: "bool" }],
    anonymous: false
  },
  { type: "event", name: "MerkleTreeRevoked", inputs: [], anonymous: false },
  {
    type: "event",
    name: "MerkleTreeUpdated",
    inputs: [
      { name: "root", type: "bytes32", indexed: false, internalType: "bytes32" },
      { name: "ipfsHash", type: "bytes32", indexed: false, internalType: "bytes32" }
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
    name: "RoleAdminChanged",
    inputs: [
      { name: "role", type: "bytes32", indexed: true, internalType: "bytes32" },
      { name: "previousAdminRole", type: "bytes32", indexed: true, internalType: "bytes32" },
      { name: "newAdminRole", type: "bytes32", indexed: true, internalType: "bytes32" }
    ],
    anonymous: false
  },
  {
    type: "event",
    name: "RoleGranted",
    inputs: [
      { name: "role", type: "bytes32", indexed: true, internalType: "bytes32" },
      { name: "account", type: "address", indexed: true, internalType: "address" },
      { name: "sender", type: "address", indexed: true, internalType: "address" }
    ],
    anonymous: false
  },
  {
    type: "event",
    name: "RoleRevoked",
    inputs: [
      { name: "role", type: "bytes32", indexed: true, internalType: "bytes32" },
      { name: "account", type: "address", indexed: true, internalType: "address" },
      { name: "sender", type: "address", indexed: true, internalType: "address" }
    ],
    anonymous: false
  },
  {
    type: "event",
    name: "Unpaused",
    inputs: [{ name: "account", type: "address", indexed: false, internalType: "address" }],
    anonymous: false
  },
  {
    type: "event",
    name: "UserAllowedToDispute",
    inputs: [{ name: "user", type: "address", indexed: true, internalType: "address" }],
    anonymous: false
  },
  {
    type: "event",
    name: "UserDisallowedToDispute",
    inputs: [{ name: "user", type: "address", indexed: true, internalType: "address" }],
    anonymous: false
  },
  {
    type: "event",
    name: "WithdrawUnusedReward",
    inputs: [
      { name: "token", type: "address", indexed: true, internalType: "address" },
      { name: "recipient", type: "address", indexed: false, internalType: "address" },
      { name: "amount", type: "uint256", indexed: false, internalType: "uint256" }
    ],
    anonymous: false
  },
  { type: "error", name: "AccessControlBadConfirmation", inputs: [] },
  {
    type: "error",
    name: "AccessControlEnforcedDefaultAdminDelay",
    inputs: [{ name: "schedule", type: "uint48", internalType: "uint48" }]
  },
  { type: "error", name: "AccessControlEnforcedDefaultAdminRules", inputs: [] },
  {
    type: "error",
    name: "AccessControlInvalidDefaultAdmin",
    inputs: [{ name: "defaultAdmin", type: "address", internalType: "address" }]
  },
  {
    type: "error",
    name: "AccessControlUnauthorizedAccount",
    inputs: [
      { name: "account", type: "address", internalType: "address" },
      { name: "neededRole", type: "bytes32", internalType: "bytes32" }
    ]
  },
  { type: "error", name: "AddressEmptyCode", inputs: [{ name: "target", type: "address", internalType: "address" }] },
  {
    type: "error",
    name: "AddressInsufficientBalance",
    inputs: [{ name: "account", type: "address", internalType: "address" }]
  },
  { type: "error", name: "DisputePeriodEnded", inputs: [] },
  { type: "error", name: "DisputePeriodNotEnded", inputs: [] },
  { type: "error", name: "DisputeTokenNotWhitelisted", inputs: [] },
  { type: "error", name: "EnforcedPause", inputs: [] },
  { type: "error", name: "ExpectedPause", inputs: [] },
  { type: "error", name: "FailedInnerCall", inputs: [] },
  { type: "error", name: "InvalidProof", inputs: [] },
  { type: "error", name: "NoDispute", inputs: [] },
  { type: "error", name: "NotAllowedToDispute", inputs: [] },
  { type: "error", name: "OnlyCampaignManager", inputs: [] },
  {
    type: "error",
    name: "SafeCastOverflowedUintDowncast",
    inputs: [
      { name: "bits", type: "uint8", internalType: "uint8" },
      { name: "value", type: "uint256", internalType: "uint256" }
    ]
  },
  {
    type: "error",
    name: "SafeERC20FailedOperation",
    inputs: [{ name: "token", type: "address", internalType: "address" }]
  },
  { type: "error", name: "UnresolvedDispute", inputs: [] },
  { type: "error", name: "ZeroAddress", inputs: [] }
];

// src/abis/FarmingOffChainCLHelperAbi.ts
var FARMING_OFFCHAIN_CL_HELPER_ABI = [
  {
    type: "function",
    name: "getLPFees",
    inputs: [
      { name: "poolManager", type: "address", internalType: "contract ICLPoolManager" },
      { name: "id", type: "bytes32", internalType: "PoolId" },
      { name: "owner", type: "address", internalType: "address" },
      { name: "tickLower", type: "int24", internalType: "int24" },
      { name: "tickUpper", type: "int24", internalType: "int24" },
      { name: "salt", type: "bytes32", internalType: "bytes32" }
    ],
    outputs: [
      { name: "feesOwed0", type: "uint256", internalType: "uint256" },
      { name: "feesOwed1", type: "uint256", internalType: "uint256" }
    ],
    stateMutability: "view"
  }
];

// src/abis/MixedQuoterAbi.ts
var MixedQuoterAbi = [
  {
    type: "constructor",
    inputs: [
      { name: "_factoryV3", type: "address", internalType: "address" },
      { name: "_factoryV2", type: "address", internalType: "address" },
      { name: "_factoryStable", type: "address", internalType: "address" },
      { name: "_WETH9", type: "address", internalType: "address" },
      { name: "_clQuoter", type: "address", internalType: "contract ICLQuoter" },
      { name: "_binQuoter", type: "address", internalType: "contract IBinQuoter" }
    ],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "WETH9",
    inputs: [],
    outputs: [{ name: "", type: "address", internalType: "address" }],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "binQuoter",
    inputs: [],
    outputs: [{ name: "", type: "address", internalType: "contract IBinQuoter" }],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "clQuoter",
    inputs: [],
    outputs: [{ name: "", type: "address", internalType: "contract ICLQuoter" }],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "factoryStable",
    inputs: [],
    outputs: [{ name: "", type: "address", internalType: "address" }],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "factoryV2",
    inputs: [],
    outputs: [{ name: "", type: "address", internalType: "address" }],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "factoryV3",
    inputs: [],
    outputs: [{ name: "", type: "address", internalType: "address" }],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "multicall",
    inputs: [{ name: "data", type: "bytes[]", internalType: "bytes[]" }],
    outputs: [{ name: "results", type: "bytes[]", internalType: "bytes[]" }],
    stateMutability: "payable"
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
    stateMutability: "view"
  },
  {
    type: "function",
    name: "quoteExactInputSingleStable",
    inputs: [
      {
        name: "params",
        type: "tuple",
        internalType: "struct IMixedQuoter.QuoteExactInputSingleStableParams",
        components: [
          { name: "tokenIn", type: "address", internalType: "address" },
          { name: "tokenOut", type: "address", internalType: "address" },
          { name: "amountIn", type: "uint256", internalType: "uint256" },
          { name: "flag", type: "uint256", internalType: "uint256" }
        ]
      }
    ],
    outputs: [
      { name: "amountOut", type: "uint256", internalType: "uint256" },
      { name: "gasEstimate", type: "uint256", internalType: "uint256" }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "quoteExactInputSingleV2",
    inputs: [
      {
        name: "params",
        type: "tuple",
        internalType: "struct IMixedQuoter.QuoteExactInputSingleV2Params",
        components: [
          { name: "tokenIn", type: "address", internalType: "address" },
          { name: "tokenOut", type: "address", internalType: "address" },
          { name: "amountIn", type: "uint256", internalType: "uint256" }
        ]
      }
    ],
    outputs: [
      { name: "amountOut", type: "uint256", internalType: "uint256" },
      { name: "gasEstimate", type: "uint256", internalType: "uint256" }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "quoteExactInputSingleV3",
    inputs: [
      {
        name: "params",
        type: "tuple",
        internalType: "struct IMixedQuoter.QuoteExactInputSingleV3Params",
        components: [
          { name: "tokenIn", type: "address", internalType: "address" },
          { name: "tokenOut", type: "address", internalType: "address" },
          { name: "amountIn", type: "uint256", internalType: "uint256" },
          { name: "fee", type: "uint24", internalType: "uint24" },
          { name: "sqrtPriceLimitX96", type: "uint160", internalType: "uint160" }
        ]
      }
    ],
    outputs: [
      { name: "amountOut", type: "uint256", internalType: "uint256" },
      { name: "sqrtPriceX96After", type: "uint160", internalType: "uint160" },
      { name: "initializedTicksCrossed", type: "uint32", internalType: "uint32" },
      { name: "gasEstimate", type: "uint256", internalType: "uint256" }
    ],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "quoteMixedExactInput",
    inputs: [
      { name: "paths", type: "address[]", internalType: "address[]" },
      { name: "actions", type: "bytes", internalType: "bytes" },
      { name: "params", type: "bytes[]", internalType: "bytes[]" },
      { name: "amountIn", type: "uint256", internalType: "uint256" }
    ],
    outputs: [
      { name: "amountOut", type: "uint256", internalType: "uint256" },
      { name: "gasEstimate", type: "uint256", internalType: "uint256" }
    ],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "quoteMixedExactInputSharedContext",
    inputs: [
      { name: "paths", type: "address[]", internalType: "address[]" },
      { name: "actions", type: "bytes", internalType: "bytes" },
      { name: "params", type: "bytes[]", internalType: "bytes[]" },
      { name: "amountIn", type: "uint256", internalType: "uint256" }
    ],
    outputs: [
      { name: "amountOut", type: "uint256", internalType: "uint256" },
      { name: "gasEstimate", type: "uint256", internalType: "uint256" }
    ],
    stateMutability: "nonpayable"
  },
  { type: "error", name: "INVALID_ADDRESS", inputs: [] },
  { type: "error", name: "INVALID_SWAP_DIRECTION", inputs: [] },
  { type: "error", name: "InputLengthMismatch", inputs: [] },
  { type: "error", name: "InvalidPath", inputs: [] },
  { type: "error", name: "InvalidPoolKeyCurrency", inputs: [] },
  { type: "error", name: "NoActions", inputs: [] },
  {
    type: "error",
    name: "SafeCastOverflowedUintDowncast",
    inputs: [
      { name: "bits", type: "uint8", internalType: "uint8" },
      { name: "value", type: "uint256", internalType: "uint256" }
    ]
  },
  {
    type: "error",
    name: "SafeCastOverflowedUintToInt",
    inputs: [{ name: "value", type: "uint256", internalType: "uint256" }]
  },
  { type: "error", name: "UnsupportedAction", inputs: [{ name: "action", type: "uint256", internalType: "uint256" }] }
];

// src/abis/Permit2ForwardAbi.ts
var Permit2ForwardAbi = [
  {
    type: "constructor",
    inputs: [{ name: "_permit2", type: "address", internalType: "contract IAllowanceTransfer" }],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "permit",
    inputs: [
      { name: "owner", type: "address", internalType: "address" },
      {
        name: "permitSingle",
        type: "tuple",
        internalType: "struct IAllowanceTransfer.PermitSingle",
        components: [
          {
            name: "details",
            type: "tuple",
            internalType: "struct IAllowanceTransfer.PermitDetails",
            components: [
              { name: "token", type: "address", internalType: "address" },
              { name: "amount", type: "uint160", internalType: "uint160" },
              { name: "expiration", type: "uint48", internalType: "uint48" },
              { name: "nonce", type: "uint48", internalType: "uint48" }
            ]
          },
          { name: "spender", type: "address", internalType: "address" },
          { name: "sigDeadline", type: "uint256", internalType: "uint256" }
        ]
      },
      { name: "signature", type: "bytes", internalType: "bytes" }
    ],
    outputs: [{ name: "err", type: "bytes", internalType: "bytes" }],
    stateMutability: "payable"
  },
  {
    type: "function",
    name: "permit2",
    inputs: [],
    outputs: [{ name: "", type: "address", internalType: "contract IAllowanceTransfer" }],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "permitBatch",
    inputs: [
      { name: "owner", type: "address", internalType: "address" },
      {
        name: "_permitBatch",
        type: "tuple",
        internalType: "struct IAllowanceTransfer.PermitBatch",
        components: [
          {
            name: "details",
            type: "tuple[]",
            internalType: "struct IAllowanceTransfer.PermitDetails[]",
            components: [
              { name: "token", type: "address", internalType: "address" },
              { name: "amount", type: "uint160", internalType: "uint160" },
              { name: "expiration", type: "uint48", internalType: "uint48" },
              { name: "nonce", type: "uint48", internalType: "uint48" }
            ]
          },
          { name: "spender", type: "address", internalType: "address" },
          { name: "sigDeadline", type: "uint256", internalType: "uint256" }
        ]
      },
      { name: "signature", type: "bytes", internalType: "bytes" }
    ],
    outputs: [{ name: "err", type: "bytes", internalType: "bytes" }],
    stateMutability: "payable"
  }
];

// src/abis/ProtocolFeeControllerAbi.ts
var ProtocolFeeControllerAbi = [
  {
    type: "constructor",
    inputs: [{ name: "_poolManager", type: "address", internalType: "address" }],
    stateMutability: "nonpayable"
  },
  { type: "function", name: "acceptOwnership", inputs: [], outputs: [], stateMutability: "nonpayable" },
  {
    type: "function",
    name: "collectProtocolFee",
    inputs: [
      { name: "recipient", type: "address", internalType: "address" },
      { name: "currency", type: "address", internalType: "Currency" },
      { name: "amount", type: "uint256", internalType: "uint256" }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "getLPFeeFromTotalFee",
    inputs: [{ name: "totalFee", type: "uint24", internalType: "uint24" }],
    outputs: [{ name: "", type: "uint24", internalType: "uint24" }],
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
    name: "pendingOwner",
    inputs: [],
    outputs: [{ name: "", type: "address", internalType: "address" }],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "poolManager",
    inputs: [],
    outputs: [{ name: "", type: "address", internalType: "address" }],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "protocolFeeForPool",
    inputs: [
      {
        name: "poolKey",
        type: "tuple",
        internalType: "struct PoolKey",
        components: [
          { name: "currency0", type: "address", internalType: "Currency" },
          { name: "currency1", type: "address", internalType: "Currency" },
          { name: "hooks", type: "address", internalType: "contract IHooks" },
          { name: "poolManager", type: "address", internalType: "contract IPoolManager" },
          { name: "fee", type: "uint24", internalType: "uint24" },
          { name: "parameters", type: "bytes32", internalType: "bytes32" }
        ]
      }
    ],
    outputs: [{ name: "protocolFee", type: "uint24", internalType: "uint24" }],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "protocolFeeSplitRatio",
    inputs: [],
    outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
    stateMutability: "view"
  },
  { type: "function", name: "renounceOwnership", inputs: [], outputs: [], stateMutability: "nonpayable" },
  {
    type: "function",
    name: "setProtocolFee",
    inputs: [
      {
        name: "key",
        type: "tuple",
        internalType: "struct PoolKey",
        components: [
          { name: "currency0", type: "address", internalType: "Currency" },
          { name: "currency1", type: "address", internalType: "Currency" },
          { name: "hooks", type: "address", internalType: "contract IHooks" },
          { name: "poolManager", type: "address", internalType: "contract IPoolManager" },
          { name: "fee", type: "uint24", internalType: "uint24" },
          { name: "parameters", type: "bytes32", internalType: "bytes32" }
        ]
      },
      { name: "newProtocolFee", type: "uint24", internalType: "uint24" }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "setProtocolFeeSplitRatio",
    inputs: [{ name: "newProtocolFeeSplitRatio", type: "uint256", internalType: "uint256" }],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "transferOwnership",
    inputs: [{ name: "newOwner", type: "address", internalType: "address" }],
    outputs: [],
    stateMutability: "nonpayable"
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
    name: "ProtocolFeeCollected",
    inputs: [
      { name: "currency", type: "address", indexed: true, internalType: "Currency" },
      { name: "amount", type: "uint256", indexed: false, internalType: "uint256" }
    ],
    anonymous: false
  },
  {
    type: "event",
    name: "ProtocolFeeSplitRatioUpdated",
    inputs: [
      { name: "oldProtocolFeeSplitRatio", type: "uint256", indexed: false, internalType: "uint256" },
      { name: "newProtocolFeeSplitRatio", type: "uint256", indexed: false, internalType: "uint256" }
    ],
    anonymous: false
  },
  { type: "error", name: "InvalidPoolManager", inputs: [] },
  { type: "error", name: "InvalidProtocolFeeSplitRatio", inputs: [] },
  { type: "error", name: "OwnableInvalidOwner", inputs: [{ name: "owner", type: "address", internalType: "address" }] },
  {
    type: "error",
    name: "OwnableUnauthorizedAccount",
    inputs: [{ name: "account", type: "address", internalType: "address" }]
  }
];

// src/abis/VaultAbi.ts
var VaultAbi = [
  { type: "constructor", inputs: [], stateMutability: "nonpayable" },
  { type: "function", name: "acceptOwnership", inputs: [], outputs: [], stateMutability: "nonpayable" },
  {
    type: "function",
    name: "accountAppBalanceDelta",
    inputs: [
      { name: "currency0", type: "address", internalType: "Currency" },
      { name: "currency1", type: "address", internalType: "Currency" },
      { name: "delta", type: "int256", internalType: "BalanceDelta" },
      { name: "settler", type: "address", internalType: "address" },
      { name: "hookDelta", type: "int256", internalType: "BalanceDelta" },
      { name: "hook", type: "address", internalType: "address" }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "accountAppBalanceDelta",
    inputs: [
      { name: "currency", type: "address", internalType: "Currency" },
      { name: "delta", type: "int128", internalType: "int128" },
      { name: "settler", type: "address", internalType: "address" }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "accountAppBalanceDelta",
    inputs: [
      { name: "currency0", type: "address", internalType: "Currency" },
      { name: "currency1", type: "address", internalType: "Currency" },
      { name: "delta", type: "int256", internalType: "BalanceDelta" },
      { name: "settler", type: "address", internalType: "address" }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "allowance",
    inputs: [
      { name: "owner", type: "address", internalType: "address" },
      { name: "spender", type: "address", internalType: "address" },
      { name: "currency", type: "address", internalType: "Currency" }
    ],
    outputs: [{ name: "amount", type: "uint256", internalType: "uint256" }],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "approve",
    inputs: [
      { name: "spender", type: "address", internalType: "address" },
      { name: "currency", type: "address", internalType: "Currency" },
      { name: "amount", type: "uint256", internalType: "uint256" }
    ],
    outputs: [{ name: "", type: "bool", internalType: "bool" }],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "balanceOf",
    inputs: [
      { name: "owner", type: "address", internalType: "address" },
      { name: "currency", type: "address", internalType: "Currency" }
    ],
    outputs: [{ name: "balance", type: "uint256", internalType: "uint256" }],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "burn",
    inputs: [
      { name: "from", type: "address", internalType: "address" },
      { name: "currency", type: "address", internalType: "Currency" },
      { name: "amount", type: "uint256", internalType: "uint256" }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "clear",
    inputs: [
      { name: "currency", type: "address", internalType: "Currency" },
      { name: "amount", type: "uint256", internalType: "uint256" }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "collectFee",
    inputs: [
      { name: "currency", type: "address", internalType: "Currency" },
      { name: "amount", type: "uint256", internalType: "uint256" },
      { name: "recipient", type: "address", internalType: "address" }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "currencyDelta",
    inputs: [
      { name: "settler", type: "address", internalType: "address" },
      { name: "currency", type: "address", internalType: "Currency" }
    ],
    outputs: [{ name: "", type: "int256", internalType: "int256" }],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "getLocker",
    inputs: [],
    outputs: [{ name: "", type: "address", internalType: "address" }],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "getUnsettledDeltasCount",
    inputs: [],
    outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "getVaultReserve",
    inputs: [],
    outputs: [
      { name: "", type: "address", internalType: "Currency" },
      { name: "", type: "uint256", internalType: "uint256" }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "isAppRegistered",
    inputs: [{ name: "app", type: "address", internalType: "address" }],
    outputs: [{ name: "isRegistered", type: "bool", internalType: "bool" }],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "isOperator",
    inputs: [
      { name: "owner", type: "address", internalType: "address" },
      { name: "operator", type: "address", internalType: "address" }
    ],
    outputs: [{ name: "isOperator", type: "bool", internalType: "bool" }],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "lock",
    inputs: [{ name: "data", type: "bytes", internalType: "bytes" }],
    outputs: [{ name: "result", type: "bytes", internalType: "bytes" }],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "mint",
    inputs: [
      { name: "to", type: "address", internalType: "address" },
      { name: "currency", type: "address", internalType: "Currency" },
      { name: "amount", type: "uint256", internalType: "uint256" }
    ],
    outputs: [],
    stateMutability: "nonpayable"
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
    name: "pendingOwner",
    inputs: [],
    outputs: [{ name: "", type: "address", internalType: "address" }],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "registerApp",
    inputs: [{ name: "app", type: "address", internalType: "address" }],
    outputs: [],
    stateMutability: "nonpayable"
  },
  { type: "function", name: "renounceOwnership", inputs: [], outputs: [], stateMutability: "nonpayable" },
  {
    type: "function",
    name: "reservesOfApp",
    inputs: [
      { name: "app", type: "address", internalType: "address" },
      { name: "currency", type: "address", internalType: "Currency" }
    ],
    outputs: [{ name: "reserve", type: "uint256", internalType: "uint256" }],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "setOperator",
    inputs: [
      { name: "operator", type: "address", internalType: "address" },
      { name: "approved", type: "bool", internalType: "bool" }
    ],
    outputs: [{ name: "", type: "bool", internalType: "bool" }],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "settle",
    inputs: [],
    outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
    stateMutability: "payable"
  },
  {
    type: "function",
    name: "settleFor",
    inputs: [{ name: "recipient", type: "address", internalType: "address" }],
    outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
    stateMutability: "payable"
  },
  {
    type: "function",
    name: "supportsInterface",
    inputs: [{ name: "interfaceId", type: "bytes4", internalType: "bytes4" }],
    outputs: [{ name: "", type: "bool", internalType: "bool" }],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "sync",
    inputs: [{ name: "currency", type: "address", internalType: "Currency" }],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "take",
    inputs: [
      { name: "currency", type: "address", internalType: "Currency" },
      { name: "to", type: "address", internalType: "address" },
      { name: "amount", type: "uint256", internalType: "uint256" }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "transfer",
    inputs: [
      { name: "receiver", type: "address", internalType: "address" },
      { name: "currency", type: "address", internalType: "Currency" },
      { name: "amount", type: "uint256", internalType: "uint256" }
    ],
    outputs: [{ name: "", type: "bool", internalType: "bool" }],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "transferFrom",
    inputs: [
      { name: "sender", type: "address", internalType: "address" },
      { name: "receiver", type: "address", internalType: "address" },
      { name: "currency", type: "address", internalType: "Currency" },
      { name: "amount", type: "uint256", internalType: "uint256" }
    ],
    outputs: [{ name: "", type: "bool", internalType: "bool" }],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "transferOwnership",
    inputs: [{ name: "newOwner", type: "address", internalType: "address" }],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "event",
    name: "AppRegistered",
    inputs: [{ name: "app", type: "address", indexed: true, internalType: "address" }],
    anonymous: false
  },
  {
    type: "event",
    name: "Approval",
    inputs: [
      { name: "owner", type: "address", indexed: true, internalType: "address" },
      { name: "spender", type: "address", indexed: true, internalType: "address" },
      { name: "currency", type: "address", indexed: true, internalType: "Currency" },
      { name: "amount", type: "uint256", indexed: false, internalType: "uint256" }
    ],
    anonymous: false
  },
  {
    type: "event",
    name: "OperatorSet",
    inputs: [
      { name: "owner", type: "address", indexed: true, internalType: "address" },
      { name: "operator", type: "address", indexed: true, internalType: "address" },
      { name: "approved", type: "bool", indexed: false, internalType: "bool" }
    ],
    anonymous: false
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
    name: "Transfer",
    inputs: [
      { name: "caller", type: "address", indexed: false, internalType: "address" },
      { name: "from", type: "address", indexed: true, internalType: "address" },
      { name: "to", type: "address", indexed: true, internalType: "address" },
      { name: "currency", type: "address", indexed: true, internalType: "Currency" },
      { name: "amount", type: "uint256", indexed: false, internalType: "uint256" }
    ],
    anonymous: false
  },
  { type: "error", name: "AppUnregistered", inputs: [] },
  { type: "error", name: "CurrencyNotSettled", inputs: [] },
  { type: "error", name: "FeeCurrencySynced", inputs: [] },
  { type: "error", name: "LockerAlreadySet", inputs: [{ name: "locker", type: "address", internalType: "address" }] },
  { type: "error", name: "MustClearExactPositiveDelta", inputs: [] },
  { type: "error", name: "NoLocker", inputs: [] },
  { type: "error", name: "OwnableInvalidOwner", inputs: [{ name: "owner", type: "address", internalType: "address" }] },
  {
    type: "error",
    name: "OwnableUnauthorizedAccount",
    inputs: [{ name: "account", type: "address", internalType: "address" }]
  },
  { type: "error", name: "SettleNonNativeCurrencyWithValue", inputs: [] }
];

// src/utils/encodePermit2.ts
var encodePermit2 = (owner, permit2Signature) => {
  const { signature, details, spender, sigDeadline } = permit2Signature;
  const permitSingle = {
    details: {
      token: details.token,
      amount: BigInt(details.amount),
      expiration: Number(details.expiration),
      nonce: Number(details.nonce)
    },
    spender,
    sigDeadline: BigInt(sigDeadline)
  };
  return viem.encodeFunctionData({
    abi: Permit2ForwardAbi,
    functionName: "permit",
    args: [owner, permitSingle, signature]
  });
};
var ActionsPlanner = class {
  constructor() {
    this.plans = [];
  }
  add(action, param) {
    this.plans.push({ action, param });
  }
  encodeActions() {
    const actions = viem.concat(
      this.plans.map(
        (plan) => viem.toHex(plan.action, {
          size: 1
        })
      )
    );
    return actions;
  }
  encodePlans() {
    return this.plans.map((plan) => viem.encodeAbiParameters(ACTIONS_ABI[plan.action], plan.param));
  }
  encode() {
    const encodeAbi = viem.parseAbiParameters("bytes, bytes[]");
    const actions = viem.concat(
      this.plans.map(
        (plan) => viem.toHex(plan.action, {
          size: 1
        })
      )
    );
    return viem.encodeAbiParameters(encodeAbi, [
      actions,
      this.plans.map((plan) => viem.encodeAbiParameters(ACTIONS_ABI[plan.action], plan.param))
    ]);
  }
  static decode(calls) {
    const decodeAbi = viem.parseAbiParameters("bytes, bytes[]");
    const [actions_, params] = viem.decodeAbiParameters(decodeAbi, calls);
    const actionsSize = viem.size(actions_);
    const actions = [];
    for (let i = 0; i < actionsSize; i++) {
      const action = Number(viem.sliceHex(actions_, i, i + 1));
      actions.push(action);
    }
    const plans = [];
    for (let i = 0; i < actionsSize; i++) {
      plans.push({
        action: actions[i],
        actionName: ACTIONS[actions[i]],
        param: viem.decodeAbiParameters(ACTIONS_ABI[actions[i]], params[i])
      });
    }
    return plans;
  }
  finalizeModifyLiquidityWithTake(poolKey, takeRecipient) {
    this.add(14 /* TAKE */, [poolKey.currency0, takeRecipient, ACTION_CONSTANTS.OPEN_DELTA]);
    this.add(14 /* TAKE */, [poolKey.currency1, takeRecipient, ACTION_CONSTANTS.OPEN_DELTA]);
    return this.encode();
  }
  finalizeModifyLiquidityWithClose(poolKey) {
    this.add(18 /* CLOSE_CURRENCY */, [poolKey.currency0]);
    this.add(18 /* CLOSE_CURRENCY */, [poolKey.currency1]);
    return this.encode();
  }
  finalizeModifyLiquidityWithCloseWrap(poolKey, wrapAddress, recipient) {
    const wrapAmount = BigInt(ACTION_CONSTANTS.CONTRACT_BALANCE);
    this.add(14 /* TAKE */, [viem.zeroAddress, ACTION_CONSTANTS.ADDRESS_THIS, ACTION_CONSTANTS.OPEN_DELTA]);
    this.add(18 /* CLOSE_CURRENCY */, [poolKey.currency1]);
    this.add(21 /* WRAP */, [wrapAmount]);
    this.add(20 /* SWEEP */, [wrapAddress, recipient]);
    return this.encode();
  }
  finalizeModifyLiquidityWithCloseNative(poolKey, sweepRecipient) {
    invariant12__default.default(poolKey.currency0 === viem.zeroAddress, "currency0 must be native currency");
    this.add(18 /* CLOSE_CURRENCY */, [poolKey.currency0]);
    this.add(18 /* CLOSE_CURRENCY */, [poolKey.currency1]);
    this.add(20 /* SWEEP */, [poolKey.currency0, sweepRecipient]);
    return this.encode();
  }
  /**
   * Pay and settle currency pair. User's token0 and token1 will be transferred from user and paid.
   * This is commonly used for increase liquidity or mint action.
   */
  finalizeModifyLiquidityWithSettlePair(poolKey, sweepRecipient) {
    this.add(13 /* SETTLE_PAIR */, [poolKey.currency0, poolKey.currency1]);
    if (poolKey.currency0 === viem.zeroAddress) {
      this.add(20 /* SWEEP */, [poolKey.currency0, sweepRecipient]);
    }
    return this.encode();
  }
  /**
   * Take all amount owed from currency pair. Owed token0 and token1 will be transferred to `takeRecipient`.
   * This is commonly used for decrease liquidity or burn action.
   */
  finalizeModifyLiquidityWithTakePair(poolKey, takeRecipient) {
    this.add(17 /* TAKE_PAIR */, [poolKey.currency0, poolKey.currency1, takeRecipient]);
    return this.encode();
  }
  finalizeSwap(inputCurrency, outputCurrency, takeRecipient) {
    if (viem.isAddressEqual(takeRecipient, ACTION_CONSTANTS.MSG_SENDER)) {
      this.add(12 /* SETTLE_ALL */, [inputCurrency, viem.maxUint256]);
      this.add(15 /* TAKE_ALL */, [outputCurrency, 0n]);
    } else {
      this.add(11 /* SETTLE */, [inputCurrency, ACTION_CONSTANTS.OPEN_DELTA, true]);
      this.add(14 /* TAKE */, [outputCurrency, takeRecipient, ACTION_CONSTANTS.OPEN_DELTA]);
    }
    return this.encode();
  }
};

// src/utils/convertBinIdsToRelative.ts
var convertBinIdsToRelative = (absoluteIds, activeId) => {
  return absoluteIds.map((id) => id - activeId);
};
var decodeHooksRegistration = (encoded) => {
  const registration = typeof encoded === "number" ? encoded : parseInt(encoded, 16);
  invariant12__default.default(registration >= 0 && registration <= 16383, "Invalid hooks registration");
  const hooksRegistration = {};
  for (const key in HOOKS_REGISTRATION_OFFSET) {
    if (registration & 1 << HOOKS_REGISTRATION_OFFSET[key]) {
      hooksRegistration[key] = true;
    }
  }
  return hooksRegistration;
};
var decodeCLPoolParameters = (encoded) => {
  const tickSpacing = viem.hexToNumber(viem.sliceHex(encoded, -5, -2), { signed: true });
  const hooksRegistration = decodeHooksRegistration(viem.sliceHex(viem.trim(encoded), -2));
  return {
    tickSpacing,
    hooksRegistration
  };
};
var decodeBinPoolParameters = (encoded) => {
  const binStep = viem.hexToNumber(viem.sliceHex(encoded, 0, -2));
  const hooksRegistration = decodeHooksRegistration(viem.sliceHex(encoded, -2));
  return {
    binStep,
    hooksRegistration
  };
};

// src/utils/decodePoolKey.ts
var decodePoolKey = (encodedPoolKey, poolType) => {
  const { currency0, currency1, hooks, fee, parameters, poolManager } = encodedPoolKey;
  if (poolType === "CL") {
    const { tickSpacing, hooksRegistration: hooksRegistration2 } = decodeCLPoolParameters(parameters);
    return {
      currency0,
      currency1,
      hooks,
      fee,
      poolManager,
      parameters: {
        tickSpacing,
        hooksRegistration: hooksRegistration2
      }
    };
  }
  const { binStep, hooksRegistration } = decodeBinPoolParameters(parameters);
  return {
    currency0,
    currency1,
    hooks,
    fee,
    poolManager,
    parameters: {
      binStep,
      hooksRegistration
    }
  };
};

// src/utils/encodeHooksRegistration.ts
var encodeHooksRegistration = (hooksRegistration) => {
  let registration = 0;
  if (hooksRegistration) {
    for (const key in hooksRegistration) {
      if (hooksRegistration[key]) {
        registration |= 1 << HOOKS_REGISTRATION_OFFSET[key];
      }
    }
  }
  return `0x${registration.toString(16).padStart(4, "0")}`;
};
var encodeCLPoolParameters = (params) => {
  const hooks = encodeHooksRegistration(params?.hooksRegistration);
  const tickSpacing = viem.encodePacked(["int24"], [params.tickSpacing]);
  return viem.pad(viem.concat([tickSpacing, hooks]));
};
var encodeBinPoolParameters = (params) => {
  const hooks = encodeHooksRegistration(params?.hooksRegistration);
  const binStep = viem.encodePacked(["uint16"], [params.binStep]);
  return viem.pad(viem.concat([binStep, hooks]));
};
var encodePoolParameters = (params) => {
  if ("tickSpacing" in params) {
    return encodeCLPoolParameters(params);
  }
  return encodeBinPoolParameters(params);
};

// src/utils/encodePoolKey.ts
var encodePoolKey = (poolKey) => {
  return {
    ...poolKey,
    hooks: poolKey.hooks ?? viem.zeroAddress,
    parameters: encodePoolParameters(poolKey.parameters)
  };
};

// src/utils/getAddLiquidityParameters.ts
var getAddBinParams = ({
  poolKey,
  binIds,
  amount0,
  amount0Min = 0n,
  amount1,
  amount1Min = 0n,
  activeId,
  isSlippage = 0n,
  recipient,
  deadline
}) => {
  const { numBinY, numBinX } = binIds.reduce(
    (acc, id) => {
      if (id <= activeId)
        acc.numBinY += 1n;
      if (id >= activeId)
        acc.numBinX += 1n;
      return acc;
    },
    {
      numBinY: 0n,
      numBinX: 0n
    }
  );
  const { distributionX, distributionY } = binIds.reduce(
    (acc, id) => {
      acc.distributionX.push(id >= activeId && numBinX > 0 ? BigInt(1e18) / numBinX : 0n);
      acc.distributionY.push(id <= activeId && numBinY > 0 ? BigInt(1e18) / numBinY : 0n);
      return acc;
    },
    {
      distributionX: [],
      distributionY: []
    }
  );
  const params = {
    poolKey,
    amount0,
    amount1,
    amount0Min,
    amount1Min,
    isSlippage,
    activeIdDesired: activeId,
    deltaIds: convertBinIdsToRelative(binIds.map(Number), Number(activeId)).map(BigInt),
    distributionX,
    distributionY,
    to: recipient,
    deadline
  };
  return params;
};

// src/utils/getBinIds.ts
var getBinIds = (activeId, numBins, relative = false) => {
  let startId = Math.ceil(activeId - numBins / 2);
  const binIds = [];
  for (let index = 0; index < numBins; index++) {
    binIds.push(Number(startId));
    startId++;
  }
  return relative ? convertBinIdsToRelative(binIds, Number(activeId)) : binIds;
};
var getPoolId = ({
  currency0,
  currency1,
  hooks = viem.zeroAddress,
  poolManager,
  fee,
  parameters
}) => {
  const poolParameter = encodePoolParameters(parameters);
  return viem.keccak256(
    viem.encodeAbiParameters(viem.parseAbiParameters("address, address, address, address, uint24, bytes32"), [
      currency0,
      currency1,
      hooks,
      poolManager,
      fee,
      poolParameter
    ])
  );
};

// src/utils/getIsInitializedByPoolKey.ts
var getIsInitializedByPoolKey = async (publicClient, poolKey) => {
  const chainId = publicClient.chain?.id;
  if (!chainId || !INFINITY_SUPPORTED_CHAINS.includes(chainId))
    return false;
  const isCLPool = poolKey.parameters.tickSpacing !== void 0;
  const positionManagerAddress = isCLPool ? INFI_CL_POOL_MANAGER_ADDRESSES[chainId] : INFI_BIN_POOL_MANAGER_ADDRESSES[chainId];
  try {
    const poolKey_ = await publicClient.readContract({
      address: positionManagerAddress,
      abi: isCLPool ? CLPoolManagerAbi : BinPoolManagerAbi,
      functionName: "poolIdToPoolKey",
      args: [getPoolId(poolKey)]
    });
    return poolKey_[3] !== viem.zeroAddress;
  } catch (error) {
    console.error(error);
    return false;
  }
};

// src/utils/isInfinitySupported.ts
function isInfinitySupported(chainId) {
  return INFINITY_SUPPORTED_CHAINS.includes(chainId);
}
var toHex32 = (value) => {
  return viem.toHex(BigInt(value) & viem.maxUint256, { size: 32 });
};
var contains = (tree, id) => {
  const key2 = Number(id >> 8n);
  const leaves = BigInt(tree.level2[key2] || "0");
  return (leaves & 1n << (id & viem.maxUint8)) !== 0n;
};
var add = (tree, id) => {
  const key2 = Number(id >> 8n);
  let leaves = BigInt(tree.level2[key2] || "0");
  const newLeaves = leaves | 1n << (id & viem.maxUint8);
  if (leaves !== newLeaves) {
    tree.level2[key2] = toHex32(newLeaves);
    if (leaves === 0n) {
      const key1 = Number(id >> 16n);
      leaves = BigInt(tree.level1[key1] || "0");
      tree.level1[key1] = toHex32(leaves | 1n << (BigInt(key2) & viem.maxUint8));
      if (leaves === 0n) {
        tree.level0 = toHex32(BigInt(tree.level0) | 1n << (BigInt(key1) & viem.maxUint8));
      }
    }
    return true;
  }
  return false;
};
var remove = (tree, id) => {
  const key2 = Number(id >> 8n);
  const leaves = BigInt(tree.level2[key2] || "0");
  let newLeaves = leaves & ~(1n << (id & viem.maxUint8));
  if (leaves !== newLeaves) {
    tree.level2[key2] = toHex32(newLeaves);
    if (newLeaves === 0n) {
      const key1 = Number(id >> 16n);
      newLeaves = BigInt(tree.level1[key1]) & ~(1n << (BigInt(key2) & viem.maxUint8));
      tree.level1[key1] = toHex32(newLeaves);
      if (newLeaves === 0n) {
        tree.level0 = toHex32(BigInt(tree.level0) & ~(1n << (BigInt(key1) & viem.maxUint8)));
      }
    }
    return true;
  }
  return false;
};
var mostSignificantBit = (value) => {
  return BigInt(BigInt(value).toString(2).length - 1);
};
var leastSignificantBit = (value = 0n) => {
  value = BigInt(value);
  if (value === 0n)
    return 255n;
  let bitPosition = 0n;
  while ((value & 1n) === 0n) {
    value >>= 1n;
    bitPosition++;
  }
  return bitPosition;
};
var closestBitLeft = (leaves, bit) => {
  bit += 1n;
  const l = BigInt(leaves) >> bit;
  return l === 0n ? viem.maxUint256 : leastSignificantBit(l) + bit;
};
var closestBitRight = (leaves, bit) => {
  const shift = 255n - (bit - 1n);
  const r = toHex32(BigInt(leaves) << shift);
  return BigInt(r) === 0n ? viem.maxUint256 : mostSignificantBit(r) - shift;
};
var findFirstRight = (tree, id) => {
  let leaves;
  let key2 = Number(id >> 8n);
  let bit = id & viem.maxUint8;
  if (bit !== 0n) {
    leaves = tree.level2[key2];
    const closestBit = closestBitRight(leaves, bit);
    if (closestBit !== viem.maxUint256) {
      return BigInt(key2) << 8n | closestBit;
    }
  }
  let key1 = Number(id >> 16n);
  bit = BigInt(key2) & viem.maxUint8;
  if (bit !== 0n) {
    leaves = tree.level1[key1];
    const closestBit = closestBitRight(leaves, bit);
    if (closestBit !== viem.maxUint256) {
      key2 = Number(BigInt(key1) << 8n | closestBit);
      leaves = tree.level2[key2];
      return BigInt(key2) << 8n | mostSignificantBit(leaves);
    }
  }
  bit = BigInt(key1) & viem.maxUint8;
  if (bit !== 0n) {
    leaves = tree.level0;
    const closestBit = closestBitRight(leaves, bit);
    if (closestBit !== viem.maxUint256) {
      key1 = Number(closestBit);
      leaves = tree.level1[key1];
      key2 = Number(BigInt(key1) << 8n | mostSignificantBit(leaves));
      leaves = tree.level2[key2];
      return BigInt(key2) << 8n | mostSignificantBit(leaves);
    }
  }
  return viem.maxUint24;
};
var findFirstLeft = (tree, id) => {
  let leaves;
  let key2 = Number(id >> 8n);
  let bit = id & viem.maxUint8;
  if (bit !== 255n) {
    leaves = tree.level2[key2];
    const closestBit = closestBitLeft(leaves, bit);
    if (closestBit !== viem.maxUint256) {
      return BigInt(key2) << 8n | closestBit;
    }
  }
  let key1 = Number(id >> 16n);
  bit = BigInt(key2) & viem.maxUint8;
  if (bit !== 255n) {
    leaves = tree.level1[key1];
    const closestBit = closestBitLeft(leaves, bit);
    if (closestBit !== viem.maxUint256) {
      key2 = Number(BigInt(key1) << 8n | closestBit);
      leaves = tree.level2[key2];
      return BigInt(key2) << 8n | leastSignificantBit(leaves);
    }
  }
  bit = BigInt(key1) & viem.maxUint8;
  if (bit !== 255n) {
    leaves = tree.level0;
    const closestBit = closestBitLeft(leaves, bit);
    if (closestBit !== viem.maxUint256) {
      key1 = Number(closestBit);
      leaves = tree.level1[key1] ?? "";
      key2 = Number(BigInt(key1) << 8n | leastSignificantBit(leaves));
      leaves = tree.level2[key2] ?? "";
      return BigInt(key2) << 8n | leastSignificantBit(leaves);
    }
  }
  return 0n;
};
var TreeMath = {
  contains,
  add,
  remove,
  findFirstLeft,
  findFirstRight
};
var mulShiftRoundUp = (x, y, offset) => {
  let result = mulShiftRoundDown(x, y, offset);
  if (x * y % (1n << offset) !== 0n) {
    result++;
  }
  return result;
};
var mulShiftRoundDown = (x, y, offset) => {
  const [prod0, prod1] = _getMulProds(x, y);
  let result = 0n;
  if (prod0 !== 0n) {
    result = prod0 >> offset;
  }
  if (prod1 !== 0n) {
    invariant12__default.default(offset < 1n << offset, "MUL_SHIFT_OVERFLOW");
    result += prod1 << 256n - offset;
  }
  return result;
};
var _getMulProds = (x, y) => {
  const mm = x * y % viem.maxUint256;
  const prod0 = x * y;
  const prod1 = mm - prod0 - (mm < prod0 ? 1n : 0n);
  return [prod0, prod1];
};
var shiftDivRoundDown = (x, offset, denominator) => {
  const prod0 = x << BigInt(offset);
  const prod1 = x >> 256n - BigInt(offset);
  return _getEndOfDivRoundDown(x, 1n << BigInt(offset), denominator, prod0, prod1);
};
var shiftDivRoundUp = (x, offset, denominator) => {
  let result = shiftDivRoundDown(x, offset, denominator);
  if (x * (1n << BigInt(offset)) % denominator !== 0n) {
    result++;
  }
  return result;
};
var _getEndOfDivRoundDown = (x, y, denominator, prod0, prod1) => {
  if (prod1 === 0n) {
    return prod0 / denominator;
  }
  invariant12__default.default(prod1 < denominator, "MUL_DIV_OVERFLOW");
  const remainder = x * y % denominator;
  prod1 = prod1 - remainder > prod0 ? 1n : 0n;
  prod0 -= remainder;
  let lpotdod = denominator & ~denominator + 1n;
  denominator /= lpotdod;
  prod0 /= lpotdod;
  lpotdod = -lpotdod / lpotdod + 1n;
  prod0 |= prod1 * lpotdod;
  let inverse = 3n * denominator ^ 2n;
  let n = 0;
  while (n < 5) {
    inverse *= 2n - denominator * inverse;
    n++;
  }
  return prod0 * inverse;
};
var FEE_BASE = 10n ** 4n;
function parseProtocolFees(feeProtocol) {
  const fees = parseProtocolFeesToNumbers(feeProtocol);
  if (!fees)
    return void 0;
  const [token0ProtocolFee, token1ProtocolFee] = fees;
  return [new swapSdkCore.Percent(token0ProtocolFee, FEE_BASE), new swapSdkCore.Percent(token1ProtocolFee, FEE_BASE)];
}
function parseProtocolFeesToNumbers(feeProtocol) {
  if (feeProtocol === void 0) {
    return void 0;
  }
  const packed = Number(feeProtocol);
  if (Number.isNaN(packed)) {
    throw new Error(`Invalid fee protocol ${feeProtocol}`);
  }
  const token0ProtocolFee = packed % 2 ** 12;
  const token1ProtocolFee = packed >> 12;
  return [token0ProtocolFee, token1ProtocolFee];
}
var parsePoolKey = (poolType, currency0, currency1, hooks, poolManager, fee, parameters) => {
  return {
    currency0,
    currency1,
    hooks,
    poolManager,
    fee,
    parameters: poolType === "CL" /* CLAMM */ ? decodeCLPoolParameters(parameters) : decodeBinPoolParameters(parameters)
  };
};
var poolIdToPoolKey = async ({
  poolId,
  poolType,
  publicClient
}) => {
  const chainId = publicClient?.chain?.id;
  if (!publicClient || !chainId || !poolId || !INFINITY_SUPPORTED_CHAINS.includes(chainId))
    return void 0;
  if (!poolType) {
    const clPoolManagerAddress = INFI_CL_POOL_MANAGER_ADDRESSES[chainId];
    const binPoolManagerAddress = INFI_BIN_POOL_MANAGER_ADDRESSES[chainId];
    const [{ result: clPoolKey }, { result: binPoolKey }] = await publicClient.multicall({
      contracts: [
        {
          address: clPoolManagerAddress,
          functionName: "poolIdToPoolKey",
          abi: CLPoolManagerAbi,
          args: [poolId]
        },
        {
          address: binPoolManagerAddress,
          functionName: "poolIdToPoolKey",
          abi: BinPoolManagerAbi,
          args: [poolId]
        }
      ]
    });
    const clPoolManager = clPoolKey?.[3];
    const binPoolManager = binPoolKey?.[3];
    if (clPoolManager && viem.isAddress(clPoolManager) && !viem.isAddressEqual(clPoolManager, viem.zeroAddress)) {
      return parsePoolKey("CL" /* CLAMM */, ...clPoolKey);
    }
    if (binPoolManager && viem.isAddress(binPoolManager) && !viem.isAddressEqual(binPoolManager, viem.zeroAddress)) {
      return parsePoolKey("Bin" /* Bin */, ...binPoolKey);
    }
    return void 0;
  }
  if (poolType === "CL" /* CLAMM */) {
    const clPoolKey = await publicClient.readContract({
      address: INFI_CL_POOL_MANAGER_ADDRESSES[chainId],
      functionName: "poolIdToPoolKey",
      abi: CLPoolManagerAbi,
      args: [poolId]
    });
    const clPoolManager = clPoolKey?.[3];
    if (clPoolManager && viem.isAddress(clPoolManager) && !viem.isAddressEqual(clPoolManager, viem.zeroAddress)) {
      return parsePoolKey("CL" /* CLAMM */, ...clPoolKey);
    }
    return void 0;
  }
  if (poolType === "Bin" /* Bin */) {
    const binPoolKey = await publicClient.readContract({
      address: INFI_BIN_POOL_MANAGER_ADDRESSES[chainId],
      functionName: "poolIdToPoolKey",
      abi: BinPoolManagerAbi,
      args: [poolId]
    });
    const binPoolManager = binPoolKey?.[3];
    if (binPoolManager && viem.isAddress(binPoolManager) && !viem.isAddressEqual(binPoolManager, viem.zeroAddress)) {
      return parsePoolKey("Bin" /* Bin */, ...binPoolKey);
    }
    return void 0;
  }
  return void 0;
};
var binPoolIdToPoolKey = async ({
  poolId,
  publicClient
}) => {
  return poolIdToPoolKey({ poolId, poolType: "Bin" /* Bin */, publicClient });
};
var clPoolIdToPoolKey = async ({
  poolId,
  publicClient
}) => {
  return poolIdToPoolKey({ poolId, poolType: "CL" /* CLAMM */, publicClient });
};

// src/utils/findHookByAddress.ts
var findHookByAddress = async ({
  poolId,
  publicClient,
  chainId,
  poolType,
  hookAddress
}) => {
  if (!hookAddress) {
    return null;
  }
  const whiteListedHook = findHook(hookAddress, chainId);
  if (whiteListedHook) {
    return whiteListedHook;
  }
  const poolKey = await poolIdToPoolKey({ poolId, publicClient, poolType });
  const hook = {
    address: hookAddress,
    poolType: poolType === "CL" ? "CL" /* CLAMM */ : "Bin" /* Bin */,
    hooksRegistration: poolKey?.parameters.hooksRegistration
  };
  return hook;
};
var encodeBinPositionModifyLiquidities = (calls, deadline) => {
  return viem.encodeFunctionData({
    abi: BinPositionManagerAbi,
    functionName: "modifyLiquidities",
    args: [calls, deadline]
  });
};

// src/functions/bin/calldatas/addLiquidity.ts
var encodeBinPositionManagerAddLiquidityCalldata = (params, deadline) => {
  const planner = new ActionsPlanner();
  const decodedParams = {
    ...params,
    poolKey: {
      ...params.poolKey,
      parameters: encodeBinPoolParameters(params.poolKey.parameters)
    }
  };
  const containNativeCurrency = params.poolKey.currency0 === viem.zeroAddress;
  planner.add(25 /* BIN_ADD_LIQUIDITY */, [decodedParams]);
  const calls = containNativeCurrency ? planner.finalizeModifyLiquidityWithCloseNative(params.poolKey, params.to) : planner.finalizeModifyLiquidityWithClose(params.poolKey);
  return encodeBinPositionModifyLiquidities(calls, deadline);
};
var encodeBinPositionManagerInitializePoolCalldata = (poolKey, activeId) => {
  return viem.encodeFunctionData({
    abi: BinPositionManagerAbi,
    functionName: "initializePool",
    args: [encodePoolKey(poolKey), Number(activeId)]
  });
};
var encodeLiquidityConfig = ({ distributionX, distributionY, id }) => {
  return viem.toHex(BigInt.asUintN(64, distributionX) << 88n | BigInt.asUintN(64, distributionY) << 24n | id, {
    size: 32
  });
};

// src/functions/bin/calldatas/mint.ts
var binPoolMintCalldata = (key, params, hookData) => {
  invariant12__default.default(params.liquidityConfigs.length > 0, "LIQUIDITY_CONFIGS_EMPTY");
  const [X, Y] = params.amountIn;
  return viem.encodeFunctionData({
    abi: BinPoolManagerAbi,
    functionName: "mint",
    args: [
      encodePoolKey(key),
      {
        ...params,
        // eslint-disable-next-line no-bitwise
        amountIn: viem.toHex(Y << 128n | X, { size: 32 }),
        salt: viem.toHex(params.salt, { size: 32 }),
        liquidityConfigs: params.liquidityConfigs.map((config) => encodeLiquidityConfig(config))
      },
      hookData
    ]
  });
};
var encodeBinPositionManagerRemoveLiquidityCalldata = (params, deadline) => {
  const planner = new ActionsPlanner();
  const { wrapAddress, recipient, ...p } = params;
  const decodedParams = {
    ...p,
    hookData: params.hookData ?? "0x",
    poolKey: {
      ...params.poolKey,
      parameters: encodeBinPoolParameters(params.poolKey.parameters)
    }
  };
  planner.add(26 /* BIN_REMOVE_LIQUIDITY */, [decodedParams]);
  let calls;
  if (wrapAddress && !viem.isAddressEqual(wrapAddress, viem.zeroAddress)) {
    invariant12__default.default(recipient && viem.isAddress(recipient), "Invalid Wrap Config");
    calls = planner.finalizeModifyLiquidityWithCloseWrap(params.poolKey, wrapAddress, recipient);
  } else {
    calls = planner.finalizeModifyLiquidityWithClose(params.poolKey);
  }
  return encodeBinPositionModifyLiquidities(calls, deadline);
};
var binPoolSwapCalldata = (poolKey, swapForY, amountIn, hookData = "0x") => {
  return viem.encodeFunctionData({
    abi: BinPoolManagerAbi,
    functionName: "swap",
    args: [encodePoolKey(poolKey), swapForY, amountIn, hookData]
  });
};

// src/functions/bin/getLiquidityShape.ts
var getLiquidityShape = ({
  shape,
  lowerBinId,
  upperBinId,
  activeIdDesired,
  amount0,
  amount1
}) => {
  const binIds = [];
  for (let i = lowerBinId; i <= upperBinId; i++) {
    binIds.push(i);
  }
  const relativeBinIds = convertBinIdsToRelative(binIds, activeIdDesired);
  switch (shape) {
    case "Spot" /* Spot */:
      return getSpotLiquidityShape({ binIds: relativeBinIds, amount0, amount1 });
    case "Curve" /* Curve */:
      return getCurveLiquidityShape({ binIds: relativeBinIds, amount0, amount1 });
    case "BidAsk" /* BidAsk */:
      return getBidAskLiquidityShape({ binIds: relativeBinIds, amount0, amount1 });
    default:
      throw new Error("Invalid liquidity shape");
  }
};
var getSpotLiquidityShape = ({ binIds, amount0, amount1 }) => {
  const deltaIds = binIds;
  const distributionX = [];
  const distributionY = [];
  const token0Nums = binIds.filter((id) => id >= 0).length;
  const token1Nums = binIds.filter((id) => id <= 0).length;
  let token0Weight = 0;
  let token1Weight = 0;
  if (token0Nums > 0) {
    token0Weight = token1Nums === 0 ? token0Nums : token0Nums * 2 - 1;
  }
  if (token1Nums > 0) {
    token1Weight = token0Nums === 0 ? token1Nums : token1Nums * 2 - 1;
  }
  const token0Unit = amount0 > 0n && token0Weight > 0 ? (BIN_SHAPE_DISTRIBUTION_SUM - 1n) / BigInt(token0Weight) : 0n;
  const token1Unit = amount1 > 0n && token1Weight > 0 ? (BIN_SHAPE_DISTRIBUTION_SUM - 1n) / BigInt(token1Weight) : 0n;
  for (let i = 0; i < binIds.length; i++) {
    if (binIds[i] < 0 && amount1 > 0n) {
      distributionY[i] = token0Nums === 0 ? token1Unit : token1Unit * 2n;
      distributionX[i] = 0n;
    } else if (binIds[i] > 0 && amount0 > 0n) {
      distributionX[i] = token1Nums === 0 ? token0Unit : token0Unit * 2n;
      distributionY[i] = 0n;
    } else {
      distributionX[i] = token0Unit;
      distributionY[i] = token1Unit;
    }
  }
  return {
    deltaIds,
    distributionX,
    distributionY
  };
};
var getCurveLiquidityShape = ({
  binIds,
  amount0,
  amount1,
  sd = 1 / 5
  // standard deviation
}) => {
  const deltaIds = binIds;
  const distributionX = [];
  const distributionY = [];
  console.info("getCurveLiquidityShape", { binIds, amount0, amount1 });
  const gaussianWeights = binIds.map((id) => {
    const middleIndex = Math.floor(binIds.length / 2);
    const relativePosition = (id - binIds[middleIndex]) / binIds.length;
    return Math.exp(-(relativePosition * relativePosition) / (2 * sd * sd));
  });
  let xNums = binIds.filter((id) => id >= 0).length;
  let yNums = binIds.filter((id) => id <= 0).length;
  let xSum = 0;
  let ySum = 0;
  const gaussianX = new Array(binIds.length).fill(0);
  const gaussianY = new Array(binIds.length).fill(0);
  binIds.forEach((id, i) => {
    if (id <= 0 && amount1 > 0n) {
      gaussianY[i] = gaussianWeights[i];
    }
    if (id >= 0 && amount0 > 0n) {
      gaussianX[i] = gaussianWeights[i];
    }
    if (id === 0 && amount0 > 0n && amount1 > 0n) {
      gaussianX[i] /= 2;
      gaussianY[i] /= 2;
    }
    xSum += gaussianX[i];
    ySum += gaussianY[i];
  });
  const xUnit = amount0 > 0n && xSum > 0n ? BigInt(Math.floor(Number(BIN_SHAPE_DISTRIBUTION_SUM - 1n) / xSum)) : 0n;
  const yUnit = amount1 > 0n && ySum > 0n ? BigInt(Math.floor(Number(BIN_SHAPE_DISTRIBUTION_SUM - 1n) / ySum)) : 0n;
  let xDistSum = BIN_SHAPE_DISTRIBUTION_SUM - 1n;
  let yDistSum = BIN_SHAPE_DISTRIBUTION_SUM - 1n;
  for (let i = 0; i < binIds.length; i++) {
    if (binIds[i] < 0 && amount1 > 0n) {
      let weight = 0n;
      yNums--;
      if (yNums > 0) {
        weight = BigInt(Math.floor(Number(yUnit) * gaussianY[i]));
        yDistSum -= weight;
      } else {
        weight = yDistSum;
      }
      distributionX[i] = 0n;
      distributionY[i] = weight;
    } else if (binIds[i] > 0 && amount0 > 0n) {
      let weight = 0n;
      xNums--;
      if (xNums > 0) {
        weight = BigInt(Math.floor(Number(xUnit) * gaussianX[i]));
        xDistSum -= weight;
      } else {
        weight = xDistSum;
      }
      distributionX[i] = weight;
      distributionY[i] = 0n;
    } else if (binIds[i] === 0 && amount0 > 0n && amount1 > 0n) {
      let weightX = 0n;
      xNums--;
      if (xNums > 0) {
        weightX = BigInt(Math.floor(Number(xUnit) * gaussianX[i]));
        xDistSum -= weightX;
      } else {
        weightX = xDistSum;
      }
      distributionX[i] = weightX;
      yNums--;
      let weightY = 0n;
      if (yNums > 0) {
        weightY = BigInt(Math.floor(Number(yUnit) * gaussianY[i]));
        yDistSum -= weightY;
      } else {
        weightY = yDistSum;
      }
      distributionY[i] = weightY;
    }
  }
  return {
    deltaIds,
    distributionX,
    distributionY
  };
};
var getBidAskLiquidityShape = ({ binIds, amount0, amount1 }) => {
  const deltaIds = binIds;
  const distributionX = [];
  const distributionY = [];
  const token0Nums = binIds.filter((id) => id >= 0).length;
  const token1Nums = binIds.filter((id) => id <= 0).length;
  const generateSequence = (n) => {
    if (n <= 0)
      return [];
    if (n === 1)
      return [1];
    const result = new Array(n);
    const mid = Math.floor(n / 2);
    const max = Math.ceil(n / 2);
    for (let i = 0; i <= mid; i++) {
      result[i] = max - i;
    }
    for (let i = n - 1; i >= mid; i--) {
      result[i] = max - (n - 1 - i);
    }
    return result;
  };
  let sequence = generateSequence(binIds.length);
  let token0Weight = 0;
  let token1Weight = 0;
  if (token0Nums > 0 && token1Nums === 0) {
    token0Weight = sequence.reduce((acc, cur) => acc + cur, 0);
  } else if (token1Nums > 0 && token0Nums === 0) {
    token1Weight = sequence.reduce((acc, cur) => acc + cur, 0);
  } else {
    sequence = sequence.map((x) => x === 1 ? x : 2 * x);
    binIds.forEach((id, i) => {
      if (id >= 0)
        token0Weight += sequence[i];
      if (id <= 0)
        token1Weight += sequence[i];
    });
  }
  const token0Unit = amount0 > 0n && token0Weight > 0 ? BIN_SHAPE_DISTRIBUTION_SUM / BigInt(token0Weight) : 0n;
  const token1Unit = amount1 > 0n && token1Weight > 0 ? BIN_SHAPE_DISTRIBUTION_SUM / BigInt(token1Weight) : 0n;
  for (let i = 0; i < binIds.length; i++) {
    const binId = binIds[i];
    if (binId < 0 && amount1 > 0n) {
      distributionX[i] = 0n;
      distributionY[i] = token1Unit * BigInt(sequence[i]);
    } else if (binId > 0 && amount0 > 0n) {
      distributionX[i] = token0Unit * BigInt(sequence[i]);
      distributionY[i] = 0n;
    } else {
      distributionX[i] = token0Unit * BigInt(sequence[i]);
      distributionY[i] = token1Unit * BigInt(sequence[i]);
    }
  }
  return {
    deltaIds,
    distributionX,
    distributionY
  };
};

// src/functions/bin/addBinLiquidityMulticall.ts
var addBinLiquidityMulticall = ({
  isInitialized,
  activeIdDesired,
  idSlippage,
  liquidityShape,
  lowerBinId,
  upperBinId,
  poolKey,
  amount0,
  amount1,
  amount0Max,
  amount1Max,
  owner,
  token1Permit2Signature,
  token0Permit2Signature,
  deadline,
  modifyPositionHookData = "0x"
}) => {
  const calls = [];
  if (!isInitialized) {
    calls.push(encodeBinPositionManagerInitializePoolCalldata(poolKey, activeIdDesired));
  }
  if (token0Permit2Signature) {
    calls.push(encodePermit2(owner, token0Permit2Signature));
  }
  if (token1Permit2Signature) {
    calls.push(encodePermit2(owner, token1Permit2Signature));
  }
  const shape = getLiquidityShape({
    shape: liquidityShape,
    lowerBinId,
    upperBinId,
    activeIdDesired: Number(activeIdDesired),
    amount0,
    amount1
  });
  console.debug("debug shape", viem.stringify(shape, null, 2));
  const addLiquidityParams = {
    poolKey,
    amount0,
    amount1,
    amount0Max,
    amount1Max,
    activeIdDesired: BigInt(activeIdDesired),
    idSlippage: BigInt(idSlippage),
    hookData: modifyPositionHookData,
    to: owner,
    ...shape
  };
  calls.push(encodeBinPositionManagerAddLiquidityCalldata(addLiquidityParams, deadline));
  return encodeMulticall(calls);
};
var createBinPool = ({
  currencyA,
  currencyB,
  activeId,
  binStep,
  lpFee,
  protocolFees = [0n, 0n],
  lmPool,
  tree: treeOverride,
  reserveOfBin
}) => {
  invariant12__default.default(Number.isInteger(lpFee) && BigInt(lpFee) >= 0 && BigInt(lpFee) <= TEN_PERCENT_FEE, "SWAP_FEE");
  invariant12__default.default(
    protocolFees.every(
      (protocolFee) => Number.isInteger(Number(protocolFee)) && BigInt(protocolFee) >= 0 && BigInt(protocolFee) <= MAX_PROTOCOL_FEE
    ),
    "PROTOCOL_FEE"
  );
  invariant12__default.default(Number.isInteger(binStep) && BigInt(binStep) >= MIN_BIN_STEP && BigInt(binStep) <= MAX_BIN_STEP, "BIN_STEP");
  invariant12__default.default(Number.isInteger(activeId), "ACTIVE_ID");
  const [currencyX, currencyY] = swapSdkCore.sortCurrencies([currencyA, currencyB]);
  let tree = treeOverride;
  if (reserveOfBin && !tree) {
    tree = {
      level0: "0x0",
      level1: {},
      level2: {}
    };
    const binIds = Object.keys(reserveOfBin);
    for (const bin of binIds) {
      const binId = Number(bin);
      const { reserveX, reserveY } = reserveOfBin[binId];
      if (reserveX !== 0n || reserveY !== 0n) {
        TreeMath.add(tree, BigInt(binId));
      }
    }
  }
  return {
    currencyX,
    currencyY,
    activeId: BigInt(activeId),
    binStep: BigInt(binStep),
    lpFee: BigInt(lpFee),
    protocolFees: [BigInt(protocolFees[0]), BigInt(protocolFees[1])],
    lmPool,
    reserveOfBin: reserveOfBin || {},
    tree
  };
};

// src/utils/calculateSwapFee.ts
var calculateSwapFee = (protocolFee, lpFee) => {
  return protocolFee + lpFee - protocolFee * lpFee / 1000000n;
};

// src/functions/bin/getFeeAmount.ts
var getFeeAmount = (amount, feeBips) => {
  const totalFee = feeBips * BigInt(1e12);
  const denominator = PRECISION - totalFee;
  return (amount * totalFee + denominator - 1n) / denominator;
};

// src/functions/bin/getFeeAmountFrom.ts
var getFeeAmountFrom = (amountWithFees, feeBips) => {
  const totalFee = feeBips * BigInt(1e12);
  return (amountWithFees * totalFee + PRECISION - 1n) / PRECISION;
};
var getBase = (binStep) => {
  return SCALE + (binStep << SCALE_OFFSET) / BASIS_POINT_MAX;
};
var Q128 = 2n ** 128n;
var Q20 = 2n ** 20n;
var getPriceX128FromId = (activeId, binStep) => {
  const base = getBase(binStep);
  let exponent = activeId - REAL_ID_SHIFT;
  let invert = false;
  if (exponent === 0n) {
    return SCALE;
  }
  if (exponent < 0n) {
    exponent = -exponent;
    invert = true;
  }
  invariant12__default.default(exponent < Q20, "EXPONENT");
  let squared = base;
  let result = SCALE;
  if (base > viem.maxUint128) {
    squared = viem.maxUint256 / squared;
    invert = invert === false;
  }
  for (let i = 0; i < 20; i++) {
    if (exponent & 2n ** BigInt(i)) {
      result = result * squared / Q128;
    }
    squared = squared * squared / Q128;
  }
  return invert ? viem.maxUint256 / result : result;
};
var getPriceFromId = (activeId, binStep) => {
  return (1 + binStep / 1e4) ** Number(activeId - 8388608);
};
var getCurrencyPriceFromId = (activeId, binStep, baseCurrency, quoteCurrency) => {
  const price = new BigNumber2.BigNumber(getPriceFromId(activeId, binStep));
  const [intNumerator, intDenominator] = price.isFinite() ? price.toFraction() : [0, 1];
  return new swapSdkCore.Price(baseCurrency, quoteCurrency, BigInt(intDenominator.toString()), BigInt(intNumerator.toString()));
};
var getInvertedPriceFromId = (activeId, binStep) => {
  return (1 + binStep / 1e4) ** Number(8388608 - activeId);
};

// src/functions/bin/getAmounts.ts
var getAmounts = (binPool, swapForY, amountIn) => {
  let amountInWithFee = amountIn;
  let amountOutOfBin = 0n;
  let totalFee = 0n;
  const binReserves = binPool.reserveOfBin[Number(binPool.activeId)];
  const price = getPriceX128FromId(binPool.activeId, binPool.binStep);
  const binReserveOut = swapForY ? binReserves.reserveY : binReserves.reserveX;
  let maxAmountIn = swapForY ? shiftDivRoundUp(binReserveOut, SCALE_OFFSET, price) : mulShiftRoundUp(binReserveOut, price, SCALE_OFFSET);
  const protocolFee = binPool.protocolFees[swapForY ? 0 : 1];
  const swapFee = calculateSwapFee(protocolFee, binPool.lpFee);
  const maxFee = getFeeAmount(maxAmountIn, swapFee);
  maxAmountIn += maxFee;
  if (amountIn >= maxAmountIn) {
    totalFee = maxFee;
    amountInWithFee = maxAmountIn;
    amountOutOfBin = binReserveOut;
  } else {
    totalFee = getFeeAmountFrom(amountIn, swapFee);
    const amountsInWithoutFee = amountIn - totalFee;
    amountOutOfBin = swapForY ? mulShiftRoundDown(amountsInWithoutFee, price, SCALE_OFFSET) : shiftDivRoundDown(amountsInWithoutFee, SCALE_OFFSET, price);
    if (amountOutOfBin > binReserveOut) {
      amountOutOfBin = binReserveOut;
    }
  }
  return {
    amountsInWithFee: swapForY ? [amountInWithFee, 0n] : [0n, amountInWithFee],
    amountsOutOfBin: swapForY ? [0n, amountOutOfBin] : [amountOutOfBin, 0n],
    totalFees: swapForY ? [totalFee, 0n] : [0n, totalFee]
  };
};
var BASIS = BigInt(1e4);
var LIMIT = BigInt(8388608);
function getBinPoolTokenPrice(pool, base) {
  const { binStep, activeId, currencyX, currencyY } = pool;
  const exponent = BigInt(activeId) - LIMIT;
  const priceRevert = exponent < 0n;
  const exponentAbs = priceRevert ? -exponent : exponent;
  const numerator = (BASIS + BigInt(binStep)) ** exponentAbs;
  const denominator = BASIS ** exponentAbs;
  const price = new swapSdkCore.Price(
    currencyX,
    currencyY,
    priceRevert ? numerator : denominator,
    priceRevert ? denominator : numerator
  );
  return base.wrapped.equals(currencyX.wrapped) ? price : price.invert();
}

// src/functions/bin/getExternalFeeAmt.ts
var getExternalFeeAmt = (amounts, protocolFees, swapFee) => {
  if (swapFee === 0n || protocolFees.every((fee) => fee === 0n)) {
    return [0n, 0n];
  }
  const [feeX, feeY] = protocolFees;
  const [amountX, amountY] = amounts;
  const feeXAmt = feeX === 0n ? 0n : amountX * feeX / swapFee;
  const feeYAmt = feeY === 0n ? 0n : amountY * feeY / swapFee;
  return [feeXAmt, feeYAmt];
};
var getIdFromPrice = (price, binStep) => {
  return Math.round(Math.log(price) / Math.log(1 + binStep / 1e4)) + 2 ** 23;
};
var getIdFromCurrencyPrice = (price, binStep) => {
  return getIdFromPrice(
    Number(new BigNumber2__default.default(price.numerator.toString()).div(price.denominator.toString()).toFixed()),
    binStep
  );
};
var getIdFromInvertedPrice = (price, binStep) => {
  return 2 ** 23 - getIdFromPrice(price, binStep);
};

// src/functions/bin/getIdSlippage.ts
var getIdSlippage = (slippagePercentage, binStep, activeId) => {
  return Math.abs(getIdFromPrice(1 + slippagePercentage, binStep) - activeId);
};
var getNextNonEmptyBin = (binPool, activeId, swapForY) => {
  invariant12__default.default(binPool.tree, "EMPTY_BIN_POOL");
  return swapForY ? TreeMath.findFirstRight(binPool.tree, BigInt(activeId)) : TreeMath.findFirstLeft(binPool.tree, BigInt(activeId));
};

// src/functions/bin/decodeBinAmount.ts
var decodeBinAmount = (amount) => {
  const value = BigInt(amount);
  const mask = (1n << 128n) - 1n;
  const amountX = value & mask;
  const amountY = value >> 128n;
  return {
    amountX,
    amountY
  };
};

// src/functions/bin/parseReserveOfBin.ts
var parseReserveOfBin = (liquidities) => {
  return liquidities.reduce(
    (acc, { binId: _binId, liquidity: _liquidity }) => {
      try {
        const binId = Number(BigInt(_binId));
        const liquidity = BigInt(_liquidity);
        const { amountX, amountY } = decodeBinAmount(liquidity);
        acc.push({
          binId,
          liquidity,
          reserveX: amountX,
          reserveY: amountY
        });
        return acc;
      } catch (error) {
        return acc;
      }
    },
    []
  );
};

// src/functions/bin/priceConvert.ts
var convertDecimalPriceTo128x128 = (price) => {
  return (price << SCALE_OFFSET) / PRECISION;
};
var convert128x128ToDecimalPrice = (price) => {
  return price * PRECISION >> SCALE_OFFSET;
};
var swap = (binPool, amountIn, swapForY) => {
  invariant12__default.default(amountIn > 0n, "INSUFFICIENT_AMOUNT_IN");
  const inside = swapForY ? "0" : "1";
  const outside = swapForY ? "1" : "0";
  const { protocolFees } = binPool;
  let { activeId } = binPool;
  let amountLeft = amountIn;
  let amountOut = 0n;
  let feeForProtocol = 0n;
  const swapFee = calculateSwapFee(protocolFees[swapForY ? 0 : 1], binPool.lpFee);
  while (true) {
    const binReserves = binPool.reserveOfBin[Number(activeId)];
    const binReserveTarget = swapForY ? binReserves.reserveY : binReserves.reserveX;
    if (binReserveTarget) {
      const { amountsInWithFee, amountsOutOfBin, totalFees } = getAmounts(
        { ...binPool, activeId },
        swapForY,
        amountLeft
      );
      if (amountsInWithFee[0] + amountsInWithFee[1] > 0n) {
        amountLeft -= amountsInWithFee[inside];
        amountOut += amountsOutOfBin[outside];
        const pFees = getExternalFeeAmt(totalFees, protocolFees, swapFee);
        feeForProtocol += pFees[inside];
        const amountInWithFee = amountsInWithFee[inside] - pFees[inside];
        binPool.reserveOfBin[Number(activeId)][`reserve${swapForY ? "X" : "Y"}`] += amountInWithFee;
        binPool.reserveOfBin[Number(activeId)][`reserve${swapForY ? "Y" : "X"}`] -= amountsOutOfBin[inside];
      }
    }
    if (amountLeft === 0n) {
      break;
    } else {
      const nextId = getNextNonEmptyBin(binPool, activeId, swapForY);
      if (nextId === 0n || nextId === viem.maxUint24) {
        throw new Error("OUT_OF_LIQUIDITY");
      }
      activeId = nextId;
    }
  }
  if (amountOut === 0n) {
    throw new Error("INSUFFICIENT_AMOUNT_OUT");
  }
  binPool.activeId = activeId;
  let result = [0n, 0n];
  const consumed = amountIn - amountLeft;
  result = swapForY ? [consumed, -amountOut] : [-amountOut, consumed];
  return {
    binPool,
    feeForProtocol,
    result
  };
};
var getSwapIn = (binPool, amountOut, swapForY) => {
  let id = binPool.activeId;
  let amountOutLeft = amountOut;
  let amountIn = 0n;
  let fee = 0n;
  const swapFee = calculateSwapFee(binPool.protocolFees[swapForY ? 0 : 1], binPool.lpFee);
  while (true) {
    const { reserveX, reserveY } = binPool.reserveOfBin[Number(id)];
    const reserve = swapForY ? reserveY : reserveX;
    if (reserve > 0n) {
      const price = getPriceX128FromId(id, binPool.binStep);
      const amountOutOfBin = reserve > amountOutLeft ? amountOutLeft : reserve;
      const amountInWithoutFee = swapForY ? shiftDivRoundUp(amountOutOfBin, SCALE_OFFSET, price) : mulShiftRoundUp(amountOutOfBin, price, SCALE_OFFSET);
      const feeAmount = getFeeAmount(amountInWithoutFee, swapFee);
      amountIn += amountInWithoutFee + feeAmount;
      amountOutLeft -= amountOutOfBin;
      fee += feeAmount;
    }
    if (amountOutLeft === 0n) {
      break;
    } else {
      const nextId = getNextNonEmptyBin(binPool, id, swapForY);
      if (nextId === 0n || nextId === viem.maxUint24)
        break;
      id = nextId;
    }
  }
  if (amountOutLeft > 0n) {
    throw new Error("INSUFFICIENT_LIQUIDITY_EXACT_OUT");
  }
  return {
    amountIn,
    fee,
    amountOutLeft
  };
};
var getSwapOut = (binPool, amountIn, swapForY) => {
  let id = binPool.activeId;
  let amountInLeft = amountIn;
  let amountOut = 0n;
  let fee = 0n;
  while (true) {
    const { reserveX, reserveY } = binPool.reserveOfBin[Number(id)];
    const reserve = swapForY ? reserveY : reserveX;
    if (reserve > 0n) {
      const { amountsInWithFee, amountsOutOfBin, totalFees } = getAmounts(
        {
          ...binPool,
          activeId: id
        },
        swapForY,
        amountInLeft
      );
      const inside = swapForY ? "0" : "1";
      const outside = swapForY ? "1" : "0";
      if (amountsInWithFee[inside] > 0) {
        amountInLeft -= amountsInWithFee[inside];
        amountOut += amountsOutOfBin[outside];
        fee += totalFees[inside];
      }
    }
    if (amountInLeft === 0n) {
      break;
    } else {
      const nextId = getNextNonEmptyBin(binPool, id, swapForY);
      if (nextId === 0n || nextId === viem.maxUint24)
        break;
      id = nextId;
    }
  }
  return {
    amountOut,
    fee,
    amountInLeft
  };
};
var encodeCLPositionManagerBurnCalldata = (tokenId, positionConfig, amount0Min, amount1Min, hookData = "0x", deadline) => {
  const planner = new ActionsPlanner();
  const encodedPositionConfig = {
    poolKey: {
      ...positionConfig.poolKey,
      parameters: encodeCLPoolParameters(positionConfig.poolKey.parameters)
    },
    tickLower: positionConfig.tickLower,
    tickUpper: positionConfig.tickUpper
  };
  planner.add(3 /* CL_BURN_POSITION */, [tokenId, encodedPositionConfig, amount0Min, amount1Min, hookData]);
  const calls = planner.finalizeModifyLiquidityWithClose(positionConfig.poolKey);
  return viem.encodeFunctionData({
    abi: CLPositionManagerAbi,
    functionName: "modifyLiquidities",
    args: [calls, deadline]
  });
};
var encodeCLPositionModifyLiquidities = (calls, deadline) => {
  return viem.encodeFunctionData({
    abi: CLPositionManagerAbi,
    functionName: "modifyLiquidities",
    args: [calls, deadline]
  });
};

// src/functions/clamm/calldatas/decreaseLiquidity.ts
var encodeCLPositionManagerDecreaseLiquidityCalldata = ({
  tokenId,
  poolKey,
  liquidity,
  amount0Min,
  amount1Min,
  wrapAddress,
  recipient,
  hookData,
  deadline
}) => {
  const planner = new ActionsPlanner();
  planner.add(1 /* CL_DECREASE_LIQUIDITY */, [tokenId, liquidity, amount0Min, amount1Min, hookData ?? "0x"]);
  let calls;
  if (wrapAddress && !viem.isAddressEqual(wrapAddress, viem.zeroAddress)) {
    invariant12__default.default(recipient && !viem.isAddressEqual(recipient, viem.zeroAddress), "Invalid Wrap Config");
    calls = planner.finalizeModifyLiquidityWithCloseWrap(poolKey, wrapAddress, recipient);
  } else {
    calls = planner.finalizeModifyLiquidityWithClose(poolKey);
  }
  return encodeCLPositionModifyLiquidities(calls, deadline);
};
var encodeCLPoolDonateCalldata = (poolKey, amount0, amount1, hookData = "0x") => {
  return viem.encodeFunctionData({
    abi: CLPoolManagerAbi,
    functionName: "donate",
    args: [encodePoolKey(poolKey), amount0, amount1, hookData]
  });
};

// src/functions/clamm/calldatas/increaseLiquidity.ts
var encodeCLPositionManagerIncreaseLiquidityCalldata = (tokenId, positionConfig, liquidity, amount0Max, amount1Max, recipient, hookData = "0x", deadline) => {
  const planner = new ActionsPlanner();
  planner.add(0 /* CL_INCREASE_LIQUIDITY */, [tokenId, liquidity, amount0Max, amount1Max, hookData]);
  const calls = planner.finalizeModifyLiquidityWithSettlePair(positionConfig.poolKey, recipient);
  return encodeCLPositionModifyLiquidities(calls, deadline);
};
var encodeCLPoolInitializeCalldata = (poolKey, sqrtPriceX96) => {
  return viem.encodeFunctionData({
    abi: CLPoolManagerAbi,
    functionName: "initialize",
    args: [encodePoolKey(poolKey), sqrtPriceX96]
  });
};
var encodeCLPositionManagerInitializePoolCalldata = (poolKey, sqrtPriceX96) => {
  return viem.encodeFunctionData({
    abi: CLPositionManagerAbi,
    functionName: "initializePool",
    args: [encodePoolKey(poolKey), sqrtPriceX96]
  });
};
var encodeCLPositionManagerMintCalldata = (positionConfig, liquidity, recipient, amount0Max, amount1Max, deadline, hookData = "0x") => {
  const planner = new ActionsPlanner();
  if (!positionConfig.poolKey.hooks) {
    positionConfig.poolKey.hooks = viem.zeroAddress;
  }
  const encodedPositionConfig = {
    ...positionConfig,
    poolKey: {
      ...positionConfig.poolKey,
      parameters: encodeCLPoolParameters(positionConfig.poolKey.parameters)
    }
  };
  planner.add(2 /* CL_MINT_POSITION */, [encodedPositionConfig, liquidity, amount0Max, amount1Max, recipient, hookData]);
  const calls = planner.finalizeModifyLiquidityWithSettlePair(positionConfig.poolKey, recipient);
  return viem.encodeFunctionData({
    abi: CLPositionManagerAbi,
    functionName: "modifyLiquidities",
    args: [calls, deadline]
  });
};
var encodeCLPoolModifyLiquidityCalldata = (poolKey, params, hookData = "0x") => {
  return viem.encodeFunctionData({
    abi: CLPoolManagerAbi,
    functionName: "modifyLiquidity",
    args: [encodePoolKey(poolKey), params, hookData]
  });
};
var encodeCLPoolSwapCalldata = (poolKey, swapParams, hookData = "0x") => {
  return viem.encodeFunctionData({
    abi: CLPoolManagerAbi,
    functionName: "swap",
    args: [encodePoolKey(poolKey), swapParams, hookData]
  });
};
var encodeClaimCalldata = (claimParams) => {
  return viem.encodeFunctionData({
    abi: FARMING_OFFCHAIN_ABI,
    functionName: "claim",
    args: [claimParams]
  });
};

// src/functions/clamm/addCLLiquidityMulticall.ts
var addCLLiquidityMulticall = ({
  isInitialized,
  sqrtPriceX96,
  tokenId,
  positionConfig,
  liquidity,
  owner,
  recipient,
  amount0Max,
  amount1Max,
  deadline,
  modifyPositionHookData,
  token0Permit2Signature,
  token1Permit2Signature
}) => {
  const calls = [];
  if (!isInitialized) {
    calls.push(encodeCLPositionManagerInitializePoolCalldata(positionConfig.poolKey, sqrtPriceX96));
  }
  if (token0Permit2Signature) {
    calls.push(encodePermit2(owner, token0Permit2Signature));
  }
  if (token1Permit2Signature) {
    calls.push(encodePermit2(owner, token1Permit2Signature));
  }
  if (typeof tokenId === "undefined") {
    calls.push(
      encodeCLPositionManagerMintCalldata(
        positionConfig,
        liquidity,
        recipient,
        amount0Max,
        amount1Max,
        deadline,
        modifyPositionHookData
      )
    );
  } else {
    calls.push(
      encodeCLPositionManagerIncreaseLiquidityCalldata(
        tokenId,
        positionConfig,
        liquidity,
        amount0Max,
        amount1Max,
        recipient,
        modifyPositionHookData,
        deadline
      )
    );
  }
  return encodeMulticall(calls);
};
var getPool = ({
  currencyA,
  currencyB,
  fee,
  sqrtRatioX96,
  liquidity,
  tickCurrent,
  tickSpacing,
  ticks,
  poolType
}) => {
  return {
    ...v3Sdk.getPool({
      currencyA,
      currencyB,
      fee,
      sqrtRatioX96,
      liquidity,
      tickCurrent,
      tickSpacing,
      ticks
    }),
    poolType
  };
};

// src/functions/clamm/getCLPool.ts
var getCLPool = ({
  currencyA,
  currencyB,
  fee,
  sqrtRatioX96,
  liquidity,
  tickCurrent,
  tickSpacing,
  ticks
}) => {
  return {
    ...getPool({
      currencyA,
      currencyB,
      fee,
      sqrtRatioX96,
      liquidity,
      tickCurrent,
      tickSpacing,
      ticks,
      poolType: "CL"
    })
  };
};
function cacheByMem(fn) {
  const cache = /* @__PURE__ */ new Map();
  return (...args) => {
    const key = viem.stringify(args);
    if (cache.has(key)) {
      return cache.get(key);
    }
    const result = fn(...args);
    cache.set(key, result);
    return result;
  };
}

// src/functions/hooks/isDynamicFeeHook.ts
var isDynamicFeeHook = cacheByMem((chainId, hook) => {
  if (!hook)
    return false;
  const relatedHook = findHook(hook, chainId);
  if (relatedHook?.category?.includes("Dynamic Fees" /* DynamicFees */)) {
    return true;
  }
  return false;
});
var isDynamicFeeHookForSupportedChains = cacheByMem((hook) => {
  if (!hook)
    return false;
  for (const chainId of INFINITY_SUPPORTED_CHAINS) {
    if (isDynamicFeeHook(chainId, hook)) {
      return true;
    }
  }
  return false;
});
var NEGATIVE_ONE = BigInt(-1);
var ZERO = 0n;
var ONE = 1n;
var Q96 = 2n ** 96n;
var Q192 = Q96 ** 2n;
new swapSdkCore.Percent("1");
new swapSdkCore.Percent("0");

// src/entities/pool.ts
var NO_TICK_DATA_PROVIDER_DEFAULT = new v3Sdk.NoTickDataProvider();
var Pool = class {
  static getAddress(tokenA, tokenB, fee, initCodeHashManualOverride, deployerAddressOverride) {
    return v3Sdk.computePoolAddress({
      deployerAddress: deployerAddressOverride ?? v3Sdk.DEPLOYER_ADDRESSES[tokenA.chainId],
      fee,
      tokenA,
      tokenB,
      initCodeHashManualOverride
    });
  }
  /**
   * Construct a pool
   * @param tokenA One of the tokens in the pool
   * @param tokenB The other token in the pool
   * @param fee The fee in hundredths of a bips of the input amount of every swap that is collected by the pool
   * @param sqrtRatioX96 The sqrt of the current ratio of amounts of token1 to token0
   * @param liquidity The current value of in range liquidity
   * @param tickCurrent The current tick of the pool
   * @param ticks The current state of the pool ticks or a data provider that can return tick data
   */
  constructor({
    poolType,
    tokenA,
    tokenB,
    fee,
    protocolFee,
    sqrtRatioX96,
    liquidity,
    tickCurrent,
    ticks = NO_TICK_DATA_PROVIDER_DEFAULT,
    tickSpacing,
    dynamic
  }) {
    invariant12__default.default(Number.isInteger(fee) && fee < 1e6, "FEE");
    [this.token0, this.token1] = swapSdkCore.sortCurrencies([tokenA, tokenB]);
    this.fee = fee;
    this.protocolFee = protocolFee;
    this.sqrtRatioX96 = BigInt(sqrtRatioX96);
    this.liquidity = BigInt(liquidity);
    this.tickCurrent = tickCurrent;
    this.tickDataProvider = Array.isArray(ticks) ? new v3Sdk.TickListDataProvider(ticks) : ticks;
    this.tickSpacing = tickSpacing;
    this.poolType = poolType;
    this.dynamic = dynamic;
  }
  /**
   * Returns true if the token is either token0 or token1
   * @param token The token to check
   * @returns True if token is either token0 or token
   */
  involvesToken(token) {
    if (token.isNative && this.token0.isNative)
      return true;
    return token.equals(this.token0) || token.equals(this.token1);
  }
  /**
   * Returns the current mid price of the pool in terms of token0, i.e. the ratio of token1 over token0
   */
  get token0Price() {
    this._token0Price = this._token0Price ?? new swapSdkCore.Price(this.token0, this.token1, Q192, this.sqrtRatioX96 * this.sqrtRatioX96);
    return this._token0Price;
  }
  /**
   * Returns the current mid price of the pool in terms of token1, i.e. the ratio of token0 over token1
   */
  get token1Price() {
    this._token1Price = this._token1Price ?? new swapSdkCore.Price(this.token1, this.token0, this.sqrtRatioX96 * this.sqrtRatioX96, Q192);
    return this._token1Price;
  }
  /**
   * Return the price of the given token in terms of the other token in the pool.
   * @param token The token to return price of
   * @returns The price of the given token, in terms of the other.
   */
  priceOf(token) {
    invariant12__default.default(this.involvesToken(token), "TOKEN");
    return token.equals(this.token0) ? this.token0Price : this.token1Price;
  }
  /**
   * Returns the chain ID of the tokens in the pool.
   */
  get chainId() {
    return this.token0.chainId;
  }
  /**
   * Given an input amount of a token, return the computed output amount, and a pool with state updated after the trade
   * @param inputAmount The input amount for which to quote the output amount
   * @param sqrtPriceLimitX96 The Q64.96 sqrt price limit
   * @returns The output amount and the pool with updated state
   */
  async getOutputAmount(inputAmount, sqrtPriceLimitX96) {
    invariant12__default.default(this.involvesToken(inputAmount.currency), "TOKEN");
    const zeroForOne = inputAmount.currency.equals(this.token0);
    const {
      amountCalculated: outputAmount,
      sqrtRatioX96,
      liquidity,
      tickCurrent
    } = await this.swap(zeroForOne, inputAmount.quotient, sqrtPriceLimitX96);
    const outputToken = zeroForOne ? this.token1 : this.token0;
    return [
      swapSdkCore.CurrencyAmount.fromRawAmount(outputToken, outputAmount * NEGATIVE_ONE),
      new Pool({
        poolType: this.poolType,
        tokenA: this.token0,
        tokenB: this.token1,
        fee: this.fee,
        protocolFee: this.protocolFee,
        sqrtRatioX96,
        liquidity,
        tickCurrent,
        ticks: this.tickDataProvider,
        tickSpacing: this.tickSpacing
      })
    ];
  }
  /**
   * Given a desired output amount of a token, return the computed input amount and a pool with state updated after the trade
   * @param outputAmount the output amount for which to quote the input amount
   * @param sqrtPriceLimitX96 The Q64.96 sqrt price limit. If zero for one, the price cannot be less than this value after the swap. If one for zero, the price cannot be greater than this value after the swap
   * @returns The input amount and the pool with updated state
   */
  async getInputAmount(outputAmount, sqrtPriceLimitX96) {
    invariant12__default.default(outputAmount.currency.isToken && this.involvesToken(outputAmount.currency), "TOKEN");
    const zeroForOne = outputAmount.currency.equals(this.token1);
    const {
      amountCalculated: inputAmount,
      sqrtRatioX96,
      liquidity,
      tickCurrent
    } = await this.swap(zeroForOne, outputAmount.quotient * NEGATIVE_ONE, sqrtPriceLimitX96);
    const inputToken = zeroForOne ? this.token0 : this.token1;
    return [
      swapSdkCore.CurrencyAmount.fromRawAmount(inputToken, inputAmount),
      new Pool({
        poolType: this.poolType,
        tokenA: this.token0,
        tokenB: this.token1,
        fee: this.fee,
        protocolFee: this.protocolFee,
        sqrtRatioX96,
        liquidity,
        tickCurrent,
        ticks: this.tickDataProvider,
        tickSpacing: this.tickSpacing
      })
    ];
  }
  /**
   * Given a desired output amount of a token, return the computed input amount and a pool with state updated after the trade
   * @param outputAmount the output amount for which to quote the input amount
   * @param sqrtPriceLimitX96 The Q64.96 sqrt price limit. If zero for one, the price cannot be less than this value after the swap. If one for zero, the price cannot be greater than this value after the swap
   * @returns The input amount and the pool with updated state
   */
  async getInputAmountByExactOut(outputAmount, sqrtPriceLimitX96) {
    invariant12__default.default(outputAmount.currency.isToken && this.involvesToken(outputAmount.currency), "TOKEN");
    const zeroForOne = outputAmount.currency.equals(this.token1);
    const {
      amountSpecifiedRemaining,
      amountCalculated: inputAmount,
      sqrtRatioX96,
      liquidity,
      tickCurrent
    } = await this.swap(zeroForOne, outputAmount.quotient * NEGATIVE_ONE, sqrtPriceLimitX96);
    invariant12__default.default(amountSpecifiedRemaining === 0n, "INSUFFICIENT_LIQUIDITY");
    const inputToken = zeroForOne ? this.token0 : this.token1;
    return [
      swapSdkCore.CurrencyAmount.fromRawAmount(inputToken, inputAmount),
      new Pool({
        poolType: this.poolType,
        tokenA: this.token0,
        tokenB: this.token1,
        fee: this.fee,
        protocolFee: this.protocolFee,
        sqrtRatioX96,
        liquidity,
        tickCurrent,
        ticks: this.tickDataProvider,
        tickSpacing: this.tickSpacing
      })
    ];
  }
  /**
   * Executes a swap
   * @param zeroForOne Whether the amount in is token0 or token1
   * @param amountSpecified The amount of the swap, which implicitly configures the swap as exact input (positive), or exact output (negative)
   * @param sqrtPriceLimitX96 The Q64.96 sqrt price limit. If zero for one, the price cannot be less than this value after the swap. If one for zero, the price cannot be greater than this value after the swap
   * @returns amountCalculated
   * @returns sqrtRatioX96
   * @returns liquidity
   * @returns tickCurrent
   */
  async swap(zeroForOne, amountSpecified, _sqrtPriceLimitX96) {
    const sqrtPriceLimitX96 = _sqrtPriceLimitX96 ?? (zeroForOne ? v3Sdk.TickMath.MIN_SQRT_RATIO + ONE : v3Sdk.TickMath.MAX_SQRT_RATIO - ONE);
    if (zeroForOne) {
      invariant12__default.default(sqrtPriceLimitX96 > v3Sdk.TickMath.MIN_SQRT_RATIO, "RATIO_MIN");
      invariant12__default.default(sqrtPriceLimitX96 < this.sqrtRatioX96, "RATIO_CURRENT");
    } else {
      invariant12__default.default(sqrtPriceLimitX96 < v3Sdk.TickMath.MAX_SQRT_RATIO, "RATIO_MAX");
      invariant12__default.default(sqrtPriceLimitX96 > this.sqrtRatioX96, "RATIO_CURRENT");
    }
    const exactInput = amountSpecified >= ZERO;
    const state = {
      amountSpecifiedRemaining: amountSpecified,
      amountCalculated: ZERO,
      sqrtPriceX96: this.sqrtRatioX96,
      tick: this.tickCurrent,
      liquidity: this.liquidity
    };
    while (state.amountSpecifiedRemaining !== ZERO && state.sqrtPriceX96 !== sqrtPriceLimitX96) {
      const step = {};
      step.sqrtPriceStartX96 = state.sqrtPriceX96;
      [step.tickNext, step.initialized] = await this.tickDataProvider.nextInitializedTickWithinOneWord(
        state.tick,
        zeroForOne,
        this.tickSpacing
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
        this.fee
      );
      if (exactInput) {
        state.amountSpecifiedRemaining = state.amountSpecifiedRemaining - (step.amountIn + step.feeAmount);
        state.amountCalculated = state.amountCalculated - step.amountOut;
      } else {
        state.amountSpecifiedRemaining = state.amountSpecifiedRemaining + step.amountOut;
        state.amountCalculated = state.amountCalculated + (step.amountIn + step.feeAmount);
      }
      if (state.sqrtPriceX96 === step.sqrtPriceNextX96) {
        if (step.initialized) {
          let liquidityNet = BigInt((await this.tickDataProvider.getTick(step.tickNext)).liquidityNet);
          if (zeroForOne)
            liquidityNet = liquidityNet * NEGATIVE_ONE;
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
};

Object.defineProperty(exports, 'getInputAmount', {
  enumerable: true,
  get: function () { return v3Sdk.getInputAmount; }
});
Object.defineProperty(exports, 'getOutputAmount', {
  enumerable: true,
  get: function () { return v3Sdk.getOutputAmount; }
});
exports.ACTIONS = ACTIONS;
exports.ACTIONS_ABI = ACTIONS_ABI;
exports.ACTION_CONSTANTS = ACTION_CONSTANTS;
exports.ActionsPlanner = ActionsPlanner;
exports.BASIS_POINT_MAX = BASIS_POINT_MAX;
exports.BIN_DYNAMIC_FEE_HOOKS_BY_CHAIN = BIN_DYNAMIC_FEE_HOOKS_BY_CHAIN;
exports.BIN_DYNAMIC_FEE_HOOK_REGISTRATION_BITMAP = BIN_DYNAMIC_FEE_HOOK_REGISTRATION_BITMAP;
exports.BIN_SHAPE_DISTRIBUTION_SUM = BIN_SHAPE_DISTRIBUTION_SUM;
exports.BinLiquidityShape = BinLiquidityShape;
exports.BinMigratorAbi = BinMigratorAbi;
exports.BinPoolManagerAbi = BinPoolManagerAbi;
exports.BinPositionManagerAbi = BinPositionManagerAbi;
exports.BinQuoterAbi = BinQuoterAbi;
exports.CLMigratorAbi = CLMigratorAbi;
exports.CLPoolManagerAbi = CLPoolManagerAbi;
exports.CLPositionManagerAbi = CLPositionManagerAbi;
exports.CLQuoterAbi = CLQuoterAbi;
exports.CL_DYNAMIC_FEE_HOOKS_BY_CHAIN = CL_DYNAMIC_FEE_HOOKS_BY_CHAIN;
exports.CL_DYNAMIC_FEE_HOOK_REGISTRATION_BITMAP = CL_DYNAMIC_FEE_HOOK_REGISTRATION_BITMAP;
exports.DYNAMIC_FEE_FLAG = DYNAMIC_FEE_FLAG;
exports.FARMING_OFFCHAIN_ABI = FARMING_OFFCHAIN_ABI;
exports.FARMING_OFFCHAIN_CL_HELPER_ABI = FARMING_OFFCHAIN_CL_HELPER_ABI;
exports.HOOKS_REGISTRATION_OFFSET = HOOKS_REGISTRATION_OFFSET;
exports.HOOK_CATEGORY = HOOK_CATEGORY;
exports.HookType = HookType;
exports.INFINITY_SUPPORTED_CHAINS = INFINITY_SUPPORTED_CHAINS;
exports.INFI_BIN_MIGRATOR_ADDRESSES = INFI_BIN_MIGRATOR_ADDRESSES;
exports.INFI_BIN_POOL_MANAGER_ADDRESSES = INFI_BIN_POOL_MANAGER_ADDRESSES;
exports.INFI_BIN_POSITION_MANAGER_ADDRESSES = INFI_BIN_POSITION_MANAGER_ADDRESSES;
exports.INFI_BIN_PROTOCOL_FEE_CONTROLLER_ADDRESSES = INFI_BIN_PROTOCOL_FEE_CONTROLLER_ADDRESSES;
exports.INFI_BIN_QUOTER_ADDRESSES = INFI_BIN_QUOTER_ADDRESSES;
exports.INFI_CL_LP_FEES_HELPER_ADDRESSES = INFI_CL_LP_FEES_HELPER_ADDRESSES;
exports.INFI_CL_MIGRATOR_ADDRESSES = INFI_CL_MIGRATOR_ADDRESSES;
exports.INFI_CL_POOL_MANAGER_ADDRESSES = INFI_CL_POOL_MANAGER_ADDRESSES;
exports.INFI_CL_POSITION_MANAGER_ADDRESSES = INFI_CL_POSITION_MANAGER_ADDRESSES;
exports.INFI_CL_PROTOCOL_FEE_CONTROLLER_ADDRESSES = INFI_CL_PROTOCOL_FEE_CONTROLLER_ADDRESSES;
exports.INFI_CL_QUOTER_ADDRESSES = INFI_CL_QUOTER_ADDRESSES;
exports.INFI_CL_TICK_LENS_ADDRESSES = INFI_CL_TICK_LENS_ADDRESSES;
exports.INFI_FARMING_DISTRIBUTOR_ADDRESSES = INFI_FARMING_DISTRIBUTOR_ADDRESSES;
exports.INFI_MIXED_QUOTER_ADDRESSES = INFI_MIXED_QUOTER_ADDRESSES;
exports.INFI_VAULT_ADDRESSES = INFI_VAULT_ADDRESSES;
exports.MAX_BIN_STEP = MAX_BIN_STEP;
exports.MAX_PROTOCOL_FEE = MAX_PROTOCOL_FEE;
exports.MAX_TICK_SPACING = MAX_TICK_SPACING;
exports.MIN_BIN_STEP = MIN_BIN_STEP;
exports.MIN_TICK_SPACING = MIN_TICK_SPACING;
exports.MixedQuoterAbi = MixedQuoterAbi;
exports.ONE_HUNDRED_PERCENT_FEE = ONE_HUNDRED_PERCENT_FEE;
exports.POOL_TYPE = POOL_TYPE;
exports.PRECISION = PRECISION;
exports.Permit2ForwardAbi = Permit2ForwardAbi;
exports.Pool = Pool;
exports.ProtocolFeeControllerAbi = ProtocolFeeControllerAbi;
exports.REAL_ID_SHIFT = REAL_ID_SHIFT;
exports.SCALE = SCALE;
exports.SCALE_OFFSET = SCALE_OFFSET;
exports.SQUARED_PRECISION = SQUARED_PRECISION;
exports.TEN_PERCENT_FEE = TEN_PERCENT_FEE;
exports.TreeMath = TreeMath;
exports.VaultAbi = VaultAbi;
exports.addBinLiquidityMulticall = addBinLiquidityMulticall;
exports.addCLLiquidityMulticall = addCLLiquidityMulticall;
exports.binPoolIdToPoolKey = binPoolIdToPoolKey;
exports.binPoolMintCalldata = binPoolMintCalldata;
exports.binPoolSwapCalldata = binPoolSwapCalldata;
exports.clPoolIdToPoolKey = clPoolIdToPoolKey;
exports.convert128x128ToDecimalPrice = convert128x128ToDecimalPrice;
exports.convertBinIdsToRelative = convertBinIdsToRelative;
exports.convertDecimalPriceTo128x128 = convertDecimalPriceTo128x128;
exports.createBinPool = createBinPool;
exports.decodeBinPoolParameters = decodeBinPoolParameters;
exports.decodeCLPoolParameters = decodeCLPoolParameters;
exports.decodeHooksRegistration = decodeHooksRegistration;
exports.decodePoolKey = decodePoolKey;
exports.dynamicHooksList = dynamicHooksList4;
exports.encodeBinPoolParameters = encodeBinPoolParameters;
exports.encodeBinPositionManagerAddLiquidityCalldata = encodeBinPositionManagerAddLiquidityCalldata;
exports.encodeBinPositionManagerInitializePoolCalldata = encodeBinPositionManagerInitializePoolCalldata;
exports.encodeBinPositionManagerRemoveLiquidityCalldata = encodeBinPositionManagerRemoveLiquidityCalldata;
exports.encodeBinPositionModifyLiquidities = encodeBinPositionModifyLiquidities;
exports.encodeCLPoolDonateCalldata = encodeCLPoolDonateCalldata;
exports.encodeCLPoolInitializeCalldata = encodeCLPoolInitializeCalldata;
exports.encodeCLPoolModifyLiquidityCalldata = encodeCLPoolModifyLiquidityCalldata;
exports.encodeCLPoolParameters = encodeCLPoolParameters;
exports.encodeCLPoolSwapCalldata = encodeCLPoolSwapCalldata;
exports.encodeCLPositionManagerBurnCalldata = encodeCLPositionManagerBurnCalldata;
exports.encodeCLPositionManagerDecreaseLiquidityCalldata = encodeCLPositionManagerDecreaseLiquidityCalldata;
exports.encodeCLPositionManagerIncreaseLiquidityCalldata = encodeCLPositionManagerIncreaseLiquidityCalldata;
exports.encodeCLPositionManagerInitializePoolCalldata = encodeCLPositionManagerInitializePoolCalldata;
exports.encodeCLPositionManagerMintCalldata = encodeCLPositionManagerMintCalldata;
exports.encodeCLPositionModifyLiquidities = encodeCLPositionModifyLiquidities;
exports.encodeClaimCalldata = encodeClaimCalldata;
exports.encodeHooksRegistration = encodeHooksRegistration;
exports.encodePoolKey = encodePoolKey;
exports.encodePoolParameters = encodePoolParameters;
exports.findHook = findHook;
exports.findHookByAddress = findHookByAddress;
exports.getAddBinParams = getAddBinParams;
exports.getAmounts = getAmounts;
exports.getBidAskLiquidityShape = getBidAskLiquidityShape;
exports.getBinIds = getBinIds;
exports.getBinPoolTokenPrice = getBinPoolTokenPrice;
exports.getCLPool = getCLPool;
exports.getCurrencyPriceFromId = getCurrencyPriceFromId;
exports.getCurveLiquidityShape = getCurveLiquidityShape;
exports.getExternalFeeAmt = getExternalFeeAmt;
exports.getFeeAmount = getFeeAmount;
exports.getFeeAmountFrom = getFeeAmountFrom;
exports.getIdFromCurrencyPrice = getIdFromCurrencyPrice;
exports.getIdFromInvertedPrice = getIdFromInvertedPrice;
exports.getIdFromPrice = getIdFromPrice;
exports.getIdSlippage = getIdSlippage;
exports.getInvertedPriceFromId = getInvertedPriceFromId;
exports.getIsInitializedByPoolKey = getIsInitializedByPoolKey;
exports.getLiquidityShape = getLiquidityShape;
exports.getNextNonEmptyBin = getNextNonEmptyBin;
exports.getPool = getPool;
exports.getPoolId = getPoolId;
exports.getPriceFromId = getPriceFromId;
exports.getPriceX128FromId = getPriceX128FromId;
exports.getSpotLiquidityShape = getSpotLiquidityShape;
exports.getSwapIn = getSwapIn;
exports.getSwapOut = getSwapOut;
exports.hooksList = hooksList;
exports.isDynamicFeeHook = isDynamicFeeHook;
exports.isDynamicFeeHookForSupportedChains = isDynamicFeeHookForSupportedChains;
exports.isInfinitySupported = isInfinitySupported;
exports.mulShiftRoundDown = mulShiftRoundDown;
exports.mulShiftRoundUp = mulShiftRoundUp;
exports.parsePoolKey = parsePoolKey;
exports.parseProtocolFees = parseProtocolFees;
exports.parseProtocolFeesToNumbers = parseProtocolFeesToNumbers;
exports.parseReserveOfBin = parseReserveOfBin;
exports.poolIdToPoolKey = poolIdToPoolKey;
exports.shiftDivRoundDown = shiftDivRoundDown;
exports.shiftDivRoundUp = shiftDivRoundUp;
exports.swap = swap;
exports.whitelistLabeledHooksList = whitelistLabeledHooksList;
