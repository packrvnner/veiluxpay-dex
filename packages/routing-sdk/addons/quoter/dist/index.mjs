import { INFI_MIXED_QUOTER_ADDRESSES, INFI_CL_QUOTER_ADDRESSES, INFI_BIN_QUOTER_ADDRESSES, isDynamicFeeHook, DYNAMIC_FEE_FLAG, decodeHooksRegistration, encodePoolKey, encodePoolParameters } from '@pancakeswap/infinity-sdk';
export { INFI_BIN_QUOTER_ADDRESSES, INFI_CL_QUOTER_ADDRESSES, INFI_MIXED_QUOTER_ADDRESSES } from '@pancakeswap/infinity-sdk';
import { ChainId } from '@pancakeswap/chains';
import { encodePacked, bytesToHex, encodeAbiParameters, parseAbiParameters, zeroAddress } from 'viem';
import { isV3Pool } from '@pancakeswap/routing-sdk-addon-v3';
import { isInfinityCLPool, isInfinityBinPool, isInfinityStablePool } from '@pancakeswap/routing-sdk-addon-infinity';
import { CurrencyAmount, getMatchedCurrency, getCurrencyAddress } from '@pancakeswap/swap-sdk-core';
import { isStablePool } from '@pancakeswap/routing-sdk-addon-stable-swap';
import { isV2Pool } from '@pancakeswap/routing-sdk-addon-v2';
import invariant from 'tiny-invariant';

// src/types.ts
var InfinityMixedQuoterActions = /* @__PURE__ */ ((InfinityMixedQuoterActions2) => {
  InfinityMixedQuoterActions2[InfinityMixedQuoterActions2["SS_2_EXACT_INPUT_SINGLE"] = 0] = "SS_2_EXACT_INPUT_SINGLE";
  InfinityMixedQuoterActions2[InfinityMixedQuoterActions2["SS_3_EXACT_INPUT_SINGLE"] = 1] = "SS_3_EXACT_INPUT_SINGLE";
  InfinityMixedQuoterActions2[InfinityMixedQuoterActions2["V2_EXACT_INPUT_SINGLE"] = 2] = "V2_EXACT_INPUT_SINGLE";
  InfinityMixedQuoterActions2[InfinityMixedQuoterActions2["V3_EXACT_INPUT_SINGLE"] = 3] = "V3_EXACT_INPUT_SINGLE";
  InfinityMixedQuoterActions2[InfinityMixedQuoterActions2["INFI_CL_EXACT_INPUT_SINGLE"] = 4] = "INFI_CL_EXACT_INPUT_SINGLE";
  InfinityMixedQuoterActions2[InfinityMixedQuoterActions2["INFI_BIN_EXACT_INPUT_SINGLE"] = 5] = "INFI_BIN_EXACT_INPUT_SINGLE";
  return InfinityMixedQuoterActions2;
})(InfinityMixedQuoterActions || {});
var EMPTY_FEE_PATH_PLACEHOLDER = 8388608;
var MIXED_ROUTE_QUOTER_ADDRESSES = {
  [ChainId.ETHEREUM]: "0x678Aa4bF4E210cf2166753e054d5b7c31cc7fa86",
  [ChainId.GOERLI]: "0xB048Bbc1Ee6b733FFfCFb9e9CeF7375518e25997",
  [ChainId.BSC]: "0x678Aa4bF4E210cf2166753e054d5b7c31cc7fa86",
  [ChainId.BSC_TESTNET]: "0xB048Bbc1Ee6b733FFfCFb9e9CeF7375518e25997",
  [ChainId.ARBITRUM_ONE]: "0x5457fa0318753E9eaC2d17DFfdb6383da207d705",
  [ChainId.ARBITRUM_GOERLI]: "0x805e03325116Da555Babf012C7bd490Bdd6EEa95",
  [ChainId.ZKSYNC]: "0x9B1edFB3848660402E4f1DC25733764e80aA627A",
  [ChainId.ZKSYNC_TESTNET]: "0x7931c270f59Cb1c2617e87976689bD6803afF50a",
  [ChainId.LINEA]: "0x4c650FB471fe4e0f476fD3437C3411B1122c4e3B",
  [ChainId.LINEA_TESTNET]: "0x7d3ed219e45637Cfa77b1a634d0489a2950d1B7F",
  [ChainId.OPBNB]: "0x4c650FB471fe4e0f476fD3437C3411B1122c4e3B",
  [ChainId.OPBNB_TESTNET]: "0x118F080BF268aa7De4bE6d5e579D926903E7d6Cb",
  [ChainId.BASE]: "0x4c650FB471fe4e0f476fD3437C3411B1122c4e3B",
  [ChainId.BASE_TESTNET]: "0x9d4277f1D41CCB30C0e91f7d1bBA2A739E19032C",
  [ChainId.SCROLL_SEPOLIA]: "0x9d4277f1D41CCB30C0e91f7d1bBA2A739E19032C",
  [ChainId.SEPOLIA]: "0x4c650FB471fe4e0f476fD3437C3411B1122c4e3B",
  [ChainId.ARBITRUM_SEPOLIA]: "0x4c650FB471fe4e0f476fD3437C3411B1122c4e3B",
  [ChainId.BASE_SEPOLIA]: "0x4c650FB471fe4e0f476fD3437C3411B1122c4e3B",
  [ChainId.MONAD_MAINNET]: "0x678Aa4bF4E210cf2166753e054d5b7c31cc7fa86",
  [ChainId.MONAD_TESTNET]: "0x7f988126C2c5d4967Bb5E70bDeB7e26DB6BD5C28"
};
var V3_QUOTER_ADDRESSES = {
  [ChainId.ETHEREUM]: "0xB048Bbc1Ee6b733FFfCFb9e9CeF7375518e25997",
  [ChainId.GOERLI]: "0xbC203d7f83677c7ed3F7acEc959963E7F4ECC5C2",
  [ChainId.BSC]: "0xB048Bbc1Ee6b733FFfCFb9e9CeF7375518e25997",
  [ChainId.BSC_TESTNET]: "0xbC203d7f83677c7ed3F7acEc959963E7F4ECC5C2",
  [ChainId.ARBITRUM_ONE]: "0xB048Bbc1Ee6b733FFfCFb9e9CeF7375518e25997",
  [ChainId.ARBITRUM_GOERLI]: "0xC0F9488345ed89105b3bd135150905F718Bb254E",
  [ChainId.ZKSYNC]: "0x3d146FcE6c1006857750cBe8aF44f76a28041CCc",
  [ChainId.ZKSYNC_TESTNET]: "0x43e273b4Ffd6bC9d6Be1a862D19893549c3b9b46",
  [ChainId.LINEA]: "0xB048Bbc1Ee6b733FFfCFb9e9CeF7375518e25997",
  [ChainId.LINEA_TESTNET]: "0x669254936caE83bE34008BdFdeeA63C902497B31",
  [ChainId.OPBNB]: "0xB048Bbc1Ee6b733FFfCFb9e9CeF7375518e25997",
  [ChainId.OPBNB_TESTNET]: "0x052a99849Ef2e13a5CB28275862991671D4b6fF5",
  [ChainId.BASE]: "0xB048Bbc1Ee6b733FFfCFb9e9CeF7375518e25997",
  [ChainId.BASE_TESTNET]: "0x6cc56b20bf8C4FfD58050D15AbA2978A745CC691",
  [ChainId.SCROLL_SEPOLIA]: "0x6cc56b20bf8C4FfD58050D15AbA2978A745CC691",
  [ChainId.SEPOLIA]: "0xB048Bbc1Ee6b733FFfCFb9e9CeF7375518e25997",
  [ChainId.ARBITRUM_SEPOLIA]: "0xB048Bbc1Ee6b733FFfCFb9e9CeF7375518e25997",
  [ChainId.BASE_SEPOLIA]: "0xB048Bbc1Ee6b733FFfCFb9e9CeF7375518e25997",
  [ChainId.MONAD_MAINNET]: "0xB048Bbc1Ee6b733FFfCFb9e9CeF7375518e25997",
  [ChainId.MONAD_TESTNET]: "0x74b06eFA24F39C60AA7F61BD516a3eaf39613D57"
};
function encodeRouteToPath(route, exactOutput) {
  const firstInputToken = route.path[0].wrapped;
  const { path, types } = route.pools.reduce(
    ({ inputToken, path: p, types: t }, pool, index) => {
      const outputToken = route.path[index + 1].wrapped;
      const fee = isV3Pool(pool) ? pool.getPoolData().fee : EMPTY_FEE_PATH_PLACEHOLDER;
      if (index === 0) {
        return {
          inputToken: outputToken,
          types: ["address", "uint24", "address"],
          path: [inputToken.address, fee, outputToken.address]
        };
      }
      return {
        inputToken: outputToken,
        types: [...t, "uint24", "address"],
        path: [...p, fee, outputToken.address]
      };
    },
    { inputToken: firstInputToken, path: [], types: [] }
  );
  return exactOutput ? encodePacked(types.reverse(), path.reverse()) : encodePacked(types, path);
}
function isInfinityCLRoute(r) {
  const { pools } = r;
  return pools.every((p) => isInfinityCLPool(p));
}
function isInfinityBinRoute(r) {
  const { pools } = r;
  return pools.every((p) => isInfinityBinPool(p));
}
function isInfinityStableRoute(r) {
  const { pools } = r;
  return pools.every((p) => isInfinityStablePool(p));
}
function isMixedRoute(r) {
  const { pools } = r;
  const hasInfinityPool = pools.some((p) => isInfinityCLPool(p) || isInfinityStablePool(p));
  if (hasInfinityPool) {
    return false;
  }
  let lastType;
  for (const p of pools) {
    if (lastType === void 0) {
      lastType = p.type;
      continue;
    }
    if (lastType !== p.type) {
      return true;
    }
  }
  return false;
}
function isInfinityMixedRoute(r) {
  const { pools } = r;
  const hasInfinityPool = pools.some((p) => isInfinityCLPool(p) || isInfinityBinPool(p) || isInfinityStablePool(p));
  if (!hasInfinityPool) {
    return false;
  }
  let lastType;
  for (const p of pools) {
    if (lastType === void 0) {
      lastType = p.type;
      continue;
    }
    if (lastType !== p.type) {
      return true;
    }
  }
  return false;
}
function isV3Route(r) {
  const { pools } = r;
  return pools.every((p) => isV3Pool(p));
}

// src/abis/IQuoterV2.ts
var quoterV2ABI = [
  {
    inputs: [
      {
        internalType: "bytes",
        name: "path",
        type: "bytes"
      },
      {
        internalType: "uint256",
        name: "amountIn",
        type: "uint256"
      }
    ],
    name: "quoteExactInput",
    outputs: [
      {
        internalType: "uint256",
        name: "amountOut",
        type: "uint256"
      },
      {
        internalType: "uint160[]",
        name: "sqrtPriceX96AfterList",
        type: "uint160[]"
      },
      {
        internalType: "uint32[]",
        name: "initializedTicksCrossedList",
        type: "uint32[]"
      },
      {
        internalType: "uint256",
        name: "gasEstimate",
        type: "uint256"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "path",
        type: "bytes"
      },
      {
        internalType: "uint256",
        name: "amountOut",
        type: "uint256"
      }
    ],
    name: "quoteExactOutput",
    outputs: [
      {
        internalType: "uint256",
        name: "amountIn",
        type: "uint256"
      },
      {
        internalType: "uint160[]",
        name: "sqrtPriceX96AfterList",
        type: "uint160[]"
      },
      {
        internalType: "uint32[]",
        name: "initializedTicksCrossedList",
        type: "uint32[]"
      },
      {
        internalType: "uint256",
        name: "gasEstimate",
        type: "uint256"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  }
];

// src/fetchV3Quote.ts
function buildV3QuoteCall(route) {
  const { path, amount } = route;
  const {
    currency: { chainId }
  } = amount;
  const isExactOut = path[path.length - 1].wrapped.equals(amount.currency.wrapped);
  return {
    address: V3_QUOTER_ADDRESSES[chainId],
    abi: quoterV2ABI,
    functionName: isExactOut ? "quoteExactOutput" : "quoteExactInput",
    args: [encodeRouteToPath(route, isExactOut), amount.quotient]
  };
}
var fetchV3Quote = async ({ route, client }) => {
  const { path, amount } = route;
  const isExactOut = path[path.length - 1].wrapped.equals(amount.currency.wrapped);
  const result = await client.multicall({
    contracts: [buildV3QuoteCall(route)],
    allowFailure: false
  });
  const [[quote, , , gasUseEstimate]] = result;
  const outCurrency = isExactOut ? path[0] : path[path.length - 1];
  return {
    quote: CurrencyAmount.fromRawAmount(outCurrency, quote),
    gasUseEstimate
  };
};

// src/abis/IBinQuoter.ts
var binQuoterAbi = [
  {
    inputs: [{ internalType: "address", name: "_poolManager", type: "address" }],
    stateMutability: "nonpayable",
    type: "constructor"
  },
  { inputs: [{ internalType: "PoolId", name: "poolId", type: "bytes32" }], name: "NotEnoughLiquidity", type: "error" },
  { inputs: [], name: "NotSelf", type: "error" },
  { inputs: [], name: "NotVault", type: "error" },
  { inputs: [{ internalType: "uint256", name: "amount", type: "uint256" }], name: "QuoteSwap", type: "error" },
  { inputs: [], name: "UnexpectedCallSuccess", type: "error" },
  {
    inputs: [{ internalType: "bytes", name: "revertData", type: "bytes" }],
    name: "UnexpectedRevertBytes",
    type: "error"
  },
  {
    inputs: [
      {
        components: [
          { internalType: "Currency", name: "exactCurrency", type: "address" },
          {
            components: [
              { internalType: "Currency", name: "intermediateCurrency", type: "address" },
              { internalType: "uint24", name: "fee", type: "uint24" },
              { internalType: "contract IHooks", name: "hooks", type: "address" },
              { internalType: "contract IPoolManager", name: "poolManager", type: "address" },
              { internalType: "bytes", name: "hookData", type: "bytes" },
              { internalType: "bytes32", name: "parameters", type: "bytes32" }
            ],
            internalType: "struct PathKey[]",
            name: "path",
            type: "tuple[]"
          },
          { internalType: "uint128", name: "exactAmount", type: "uint128" }
        ],
        internalType: "struct IQuoter.QuoteExactParams",
        name: "params",
        type: "tuple"
      }
    ],
    name: "_quoteExactInput",
    outputs: [{ internalType: "bytes", name: "", type: "bytes" }],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        components: [
          {
            components: [
              { internalType: "Currency", name: "currency0", type: "address" },
              { internalType: "Currency", name: "currency1", type: "address" },
              { internalType: "contract IHooks", name: "hooks", type: "address" },
              { internalType: "contract IPoolManager", name: "poolManager", type: "address" },
              { internalType: "uint24", name: "fee", type: "uint24" },
              { internalType: "bytes32", name: "parameters", type: "bytes32" }
            ],
            internalType: "struct PoolKey",
            name: "poolKey",
            type: "tuple"
          },
          { internalType: "bool", name: "zeroForOne", type: "bool" },
          { internalType: "uint128", name: "exactAmount", type: "uint128" },
          { internalType: "bytes", name: "hookData", type: "bytes" }
        ],
        internalType: "struct IQuoter.QuoteExactSingleParams",
        name: "params",
        type: "tuple"
      }
    ],
    name: "_quoteExactInputSingle",
    outputs: [{ internalType: "bytes", name: "", type: "bytes" }],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        components: [
          { internalType: "Currency", name: "exactCurrency", type: "address" },
          {
            components: [
              { internalType: "Currency", name: "intermediateCurrency", type: "address" },
              { internalType: "uint24", name: "fee", type: "uint24" },
              { internalType: "contract IHooks", name: "hooks", type: "address" },
              { internalType: "contract IPoolManager", name: "poolManager", type: "address" },
              { internalType: "bytes", name: "hookData", type: "bytes" },
              { internalType: "bytes32", name: "parameters", type: "bytes32" }
            ],
            internalType: "struct PathKey[]",
            name: "path",
            type: "tuple[]"
          },
          { internalType: "uint128", name: "exactAmount", type: "uint128" }
        ],
        internalType: "struct IQuoter.QuoteExactParams",
        name: "params",
        type: "tuple"
      }
    ],
    name: "_quoteExactOutput",
    outputs: [{ internalType: "bytes", name: "", type: "bytes" }],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        components: [
          {
            components: [
              { internalType: "Currency", name: "currency0", type: "address" },
              { internalType: "Currency", name: "currency1", type: "address" },
              { internalType: "contract IHooks", name: "hooks", type: "address" },
              { internalType: "contract IPoolManager", name: "poolManager", type: "address" },
              { internalType: "uint24", name: "fee", type: "uint24" },
              { internalType: "bytes32", name: "parameters", type: "bytes32" }
            ],
            internalType: "struct PoolKey",
            name: "poolKey",
            type: "tuple"
          },
          { internalType: "bool", name: "zeroForOne", type: "bool" },
          { internalType: "uint128", name: "exactAmount", type: "uint128" },
          { internalType: "bytes", name: "hookData", type: "bytes" }
        ],
        internalType: "struct IQuoter.QuoteExactSingleParams",
        name: "params",
        type: "tuple"
      }
    ],
    name: "_quoteExactOutputSingle",
    outputs: [{ internalType: "bytes", name: "", type: "bytes" }],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [{ internalType: "bytes", name: "data", type: "bytes" }],
    name: "lockAcquired",
    outputs: [{ internalType: "bytes", name: "", type: "bytes" }],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "poolManager",
    outputs: [{ internalType: "contract IBinPoolManager", name: "", type: "address" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        components: [
          { internalType: "Currency", name: "exactCurrency", type: "address" },
          {
            components: [
              { internalType: "Currency", name: "intermediateCurrency", type: "address" },
              { internalType: "uint24", name: "fee", type: "uint24" },
              { internalType: "contract IHooks", name: "hooks", type: "address" },
              { internalType: "contract IPoolManager", name: "poolManager", type: "address" },
              { internalType: "bytes", name: "hookData", type: "bytes" },
              { internalType: "bytes32", name: "parameters", type: "bytes32" }
            ],
            internalType: "struct PathKey[]",
            name: "path",
            type: "tuple[]"
          },
          { internalType: "uint128", name: "exactAmount", type: "uint128" }
        ],
        internalType: "struct IQuoter.QuoteExactParams",
        name: "params",
        type: "tuple"
      }
    ],
    name: "quoteExactInput",
    outputs: [
      { internalType: "uint256", name: "amountOut", type: "uint256" },
      { internalType: "uint256", name: "gasEstimate", type: "uint256" }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        components: [
          {
            components: [
              { internalType: "Currency", name: "currency0", type: "address" },
              { internalType: "Currency", name: "currency1", type: "address" },
              { internalType: "contract IHooks", name: "hooks", type: "address" },
              { internalType: "contract IPoolManager", name: "poolManager", type: "address" },
              { internalType: "uint24", name: "fee", type: "uint24" },
              { internalType: "bytes32", name: "parameters", type: "bytes32" }
            ],
            internalType: "struct PoolKey",
            name: "poolKey",
            type: "tuple"
          },
          { internalType: "bool", name: "zeroForOne", type: "bool" },
          { internalType: "uint128", name: "exactAmount", type: "uint128" },
          { internalType: "bytes", name: "hookData", type: "bytes" }
        ],
        internalType: "struct IQuoter.QuoteExactSingleParams",
        name: "params",
        type: "tuple"
      }
    ],
    name: "quoteExactInputSingle",
    outputs: [
      { internalType: "uint256", name: "amountOut", type: "uint256" },
      { internalType: "uint256", name: "gasEstimate", type: "uint256" }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        components: [
          { internalType: "Currency", name: "exactCurrency", type: "address" },
          {
            components: [
              { internalType: "Currency", name: "intermediateCurrency", type: "address" },
              { internalType: "uint24", name: "fee", type: "uint24" },
              { internalType: "contract IHooks", name: "hooks", type: "address" },
              { internalType: "contract IPoolManager", name: "poolManager", type: "address" },
              { internalType: "bytes", name: "hookData", type: "bytes" },
              { internalType: "bytes32", name: "parameters", type: "bytes32" }
            ],
            internalType: "struct PathKey[]",
            name: "path",
            type: "tuple[]"
          },
          { internalType: "uint128", name: "exactAmount", type: "uint128" }
        ],
        internalType: "struct IQuoter.QuoteExactParams",
        name: "params",
        type: "tuple"
      }
    ],
    name: "quoteExactOutput",
    outputs: [
      { internalType: "uint256", name: "amountIn", type: "uint256" },
      { internalType: "uint256", name: "gasEstimate", type: "uint256" }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        components: [
          {
            components: [
              { internalType: "Currency", name: "currency0", type: "address" },
              { internalType: "Currency", name: "currency1", type: "address" },
              { internalType: "contract IHooks", name: "hooks", type: "address" },
              { internalType: "contract IPoolManager", name: "poolManager", type: "address" },
              { internalType: "uint24", name: "fee", type: "uint24" },
              { internalType: "bytes32", name: "parameters", type: "bytes32" }
            ],
            internalType: "struct PoolKey",
            name: "poolKey",
            type: "tuple"
          },
          { internalType: "bool", name: "zeroForOne", type: "bool" },
          { internalType: "uint128", name: "exactAmount", type: "uint128" },
          { internalType: "bytes", name: "hookData", type: "bytes" }
        ],
        internalType: "struct IQuoter.QuoteExactSingleParams",
        name: "params",
        type: "tuple"
      }
    ],
    name: "quoteExactOutputSingle",
    outputs: [
      { internalType: "uint256", name: "amountIn", type: "uint256" },
      { internalType: "uint256", name: "gasEstimate", type: "uint256" }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "vault",
    outputs: [{ internalType: "contract IVault", name: "", type: "address" }],
    stateMutability: "view",
    type: "function"
  }
];

// src/abis/ICLQuoter.ts
var clQuoterAbi = [
  {
    inputs: [{ internalType: "address", name: "_poolManager", type: "address" }],
    stateMutability: "nonpayable",
    type: "constructor"
  },
  { inputs: [{ internalType: "PoolId", name: "poolId", type: "bytes32" }], name: "NotEnoughLiquidity", type: "error" },
  { inputs: [], name: "NotSelf", type: "error" },
  { inputs: [], name: "NotVault", type: "error" },
  { inputs: [{ internalType: "uint256", name: "amount", type: "uint256" }], name: "QuoteSwap", type: "error" },
  { inputs: [], name: "UnexpectedCallSuccess", type: "error" },
  {
    inputs: [{ internalType: "bytes", name: "revertData", type: "bytes" }],
    name: "UnexpectedRevertBytes",
    type: "error"
  },
  {
    inputs: [
      {
        components: [
          { internalType: "Currency", name: "exactCurrency", type: "address" },
          {
            components: [
              { internalType: "Currency", name: "intermediateCurrency", type: "address" },
              { internalType: "uint24", name: "fee", type: "uint24" },
              { internalType: "contract IHooks", name: "hooks", type: "address" },
              { internalType: "contract IPoolManager", name: "poolManager", type: "address" },
              { internalType: "bytes", name: "hookData", type: "bytes" },
              { internalType: "bytes32", name: "parameters", type: "bytes32" }
            ],
            internalType: "struct PathKey[]",
            name: "path",
            type: "tuple[]"
          },
          { internalType: "uint128", name: "exactAmount", type: "uint128" }
        ],
        internalType: "struct IQuoter.QuoteExactParams",
        name: "params",
        type: "tuple"
      }
    ],
    name: "_quoteExactInput",
    outputs: [{ internalType: "bytes", name: "", type: "bytes" }],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        components: [
          {
            components: [
              { internalType: "Currency", name: "currency0", type: "address" },
              { internalType: "Currency", name: "currency1", type: "address" },
              { internalType: "contract IHooks", name: "hooks", type: "address" },
              { internalType: "contract IPoolManager", name: "poolManager", type: "address" },
              { internalType: "uint24", name: "fee", type: "uint24" },
              { internalType: "bytes32", name: "parameters", type: "bytes32" }
            ],
            internalType: "struct PoolKey",
            name: "poolKey",
            type: "tuple"
          },
          { internalType: "bool", name: "zeroForOne", type: "bool" },
          { internalType: "uint128", name: "exactAmount", type: "uint128" },
          { internalType: "bytes", name: "hookData", type: "bytes" }
        ],
        internalType: "struct IQuoter.QuoteExactSingleParams",
        name: "params",
        type: "tuple"
      }
    ],
    name: "_quoteExactInputSingle",
    outputs: [{ internalType: "bytes", name: "", type: "bytes" }],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        components: [
          { internalType: "Currency", name: "exactCurrency", type: "address" },
          {
            components: [
              { internalType: "Currency", name: "intermediateCurrency", type: "address" },
              { internalType: "uint24", name: "fee", type: "uint24" },
              { internalType: "contract IHooks", name: "hooks", type: "address" },
              { internalType: "contract IPoolManager", name: "poolManager", type: "address" },
              { internalType: "bytes", name: "hookData", type: "bytes" },
              { internalType: "bytes32", name: "parameters", type: "bytes32" }
            ],
            internalType: "struct PathKey[]",
            name: "path",
            type: "tuple[]"
          },
          { internalType: "uint128", name: "exactAmount", type: "uint128" }
        ],
        internalType: "struct IQuoter.QuoteExactParams",
        name: "params",
        type: "tuple"
      }
    ],
    name: "_quoteExactOutput",
    outputs: [{ internalType: "bytes", name: "", type: "bytes" }],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        components: [
          {
            components: [
              { internalType: "Currency", name: "currency0", type: "address" },
              { internalType: "Currency", name: "currency1", type: "address" },
              { internalType: "contract IHooks", name: "hooks", type: "address" },
              { internalType: "contract IPoolManager", name: "poolManager", type: "address" },
              { internalType: "uint24", name: "fee", type: "uint24" },
              { internalType: "bytes32", name: "parameters", type: "bytes32" }
            ],
            internalType: "struct PoolKey",
            name: "poolKey",
            type: "tuple"
          },
          { internalType: "bool", name: "zeroForOne", type: "bool" },
          { internalType: "uint128", name: "exactAmount", type: "uint128" },
          { internalType: "bytes", name: "hookData", type: "bytes" }
        ],
        internalType: "struct IQuoter.QuoteExactSingleParams",
        name: "params",
        type: "tuple"
      }
    ],
    name: "_quoteExactOutputSingle",
    outputs: [{ internalType: "bytes", name: "", type: "bytes" }],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [{ internalType: "bytes", name: "data", type: "bytes" }],
    name: "lockAcquired",
    outputs: [{ internalType: "bytes", name: "", type: "bytes" }],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "poolManager",
    outputs: [{ internalType: "contract ICLPoolManager", name: "", type: "address" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        components: [
          { internalType: "Currency", name: "exactCurrency", type: "address" },
          {
            components: [
              { internalType: "Currency", name: "intermediateCurrency", type: "address" },
              { internalType: "uint24", name: "fee", type: "uint24" },
              { internalType: "contract IHooks", name: "hooks", type: "address" },
              { internalType: "contract IPoolManager", name: "poolManager", type: "address" },
              { internalType: "bytes", name: "hookData", type: "bytes" },
              { internalType: "bytes32", name: "parameters", type: "bytes32" }
            ],
            internalType: "struct PathKey[]",
            name: "path",
            type: "tuple[]"
          },
          { internalType: "uint128", name: "exactAmount", type: "uint128" }
        ],
        internalType: "struct IQuoter.QuoteExactParams",
        name: "params",
        type: "tuple"
      }
    ],
    name: "quoteExactInput",
    outputs: [
      { internalType: "uint256", name: "amountOut", type: "uint256" },
      { internalType: "uint256", name: "gasEstimate", type: "uint256" }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        components: [
          {
            components: [
              { internalType: "Currency", name: "currency0", type: "address" },
              { internalType: "Currency", name: "currency1", type: "address" },
              { internalType: "contract IHooks", name: "hooks", type: "address" },
              { internalType: "contract IPoolManager", name: "poolManager", type: "address" },
              { internalType: "uint24", name: "fee", type: "uint24" },
              { internalType: "bytes32", name: "parameters", type: "bytes32" }
            ],
            internalType: "struct PoolKey",
            name: "poolKey",
            type: "tuple"
          },
          { internalType: "bool", name: "zeroForOne", type: "bool" },
          { internalType: "uint128", name: "exactAmount", type: "uint128" },
          { internalType: "bytes", name: "hookData", type: "bytes" }
        ],
        internalType: "struct IQuoter.QuoteExactSingleParams",
        name: "params",
        type: "tuple"
      }
    ],
    name: "quoteExactInputSingle",
    outputs: [
      { internalType: "uint256", name: "amountOut", type: "uint256" },
      { internalType: "uint256", name: "gasEstimate", type: "uint256" }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        components: [
          { internalType: "Currency", name: "exactCurrency", type: "address" },
          {
            components: [
              { internalType: "Currency", name: "intermediateCurrency", type: "address" },
              { internalType: "uint24", name: "fee", type: "uint24" },
              { internalType: "contract IHooks", name: "hooks", type: "address" },
              { internalType: "contract IPoolManager", name: "poolManager", type: "address" },
              { internalType: "bytes", name: "hookData", type: "bytes" },
              { internalType: "bytes32", name: "parameters", type: "bytes32" }
            ],
            internalType: "struct PathKey[]",
            name: "path",
            type: "tuple[]"
          },
          { internalType: "uint128", name: "exactAmount", type: "uint128" }
        ],
        internalType: "struct IQuoter.QuoteExactParams",
        name: "params",
        type: "tuple"
      }
    ],
    name: "quoteExactOutput",
    outputs: [
      { internalType: "uint256", name: "amountIn", type: "uint256" },
      { internalType: "uint256", name: "gasEstimate", type: "uint256" }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        components: [
          {
            components: [
              { internalType: "Currency", name: "currency0", type: "address" },
              { internalType: "Currency", name: "currency1", type: "address" },
              { internalType: "contract IHooks", name: "hooks", type: "address" },
              { internalType: "contract IPoolManager", name: "poolManager", type: "address" },
              { internalType: "uint24", name: "fee", type: "uint24" },
              { internalType: "bytes32", name: "parameters", type: "bytes32" }
            ],
            internalType: "struct PoolKey",
            name: "poolKey",
            type: "tuple"
          },
          { internalType: "bool", name: "zeroForOne", type: "bool" },
          { internalType: "uint128", name: "exactAmount", type: "uint128" },
          { internalType: "bytes", name: "hookData", type: "bytes" }
        ],
        internalType: "struct IQuoter.QuoteExactSingleParams",
        name: "params",
        type: "tuple"
      }
    ],
    name: "quoteExactOutputSingle",
    outputs: [
      { internalType: "uint256", name: "amountIn", type: "uint256" },
      { internalType: "uint256", name: "gasEstimate", type: "uint256" }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "vault",
    outputs: [{ internalType: "contract IVault", name: "", type: "address" }],
    stateMutability: "view",
    type: "function"
  }
];

// src/abis/IInfinityMixedRouteQuoter.ts
var infinityMixedRouteQuoterAbi = [
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
function encodeInfinityMixedRouteActions(route) {
  return bytesToHex(
    new Uint8Array(
      route.pools.map((p) => {
        if (isV2Pool(p)) {
          return 2 /* V2_EXACT_INPUT_SINGLE */;
        }
        if (isV3Pool(p)) {
          return 3 /* V3_EXACT_INPUT_SINGLE */;
        }
        if (isStablePool(p)) {
          return 0 /* SS_2_EXACT_INPUT_SINGLE */;
        }
        if (isInfinityCLPool(p) || isInfinityStablePool(p)) {
          return 4 /* INFI_CL_EXACT_INPUT_SINGLE */;
        }
        if (isInfinityBinPool(p)) {
          return 5 /* INFI_BIN_EXACT_INPUT_SINGLE */;
        }
        throw new Error(`Unrecognized pool type ${p}`);
      })
    )
  );
}
function getOutputCurrency(pool, currencyIn) {
  const tokenIn = currencyIn.wrapped;
  if (isV2Pool(pool)) {
    const { reserve0, reserve1 } = pool.getPoolData();
    return reserve0.currency.equals(tokenIn) ? reserve1.currency : reserve0.currency;
  }
  if (isV3Pool(pool)) {
    const { token0, token1 } = pool.getPoolData();
    return token0.equals(tokenIn) ? token1 : token0;
  }
  if (isStablePool(pool)) {
    const { balances } = pool.getPoolData();
    return balances[0].currency.equals(tokenIn) ? balances[1].currency : balances[0].currency;
  }
  if (isInfinityCLPool(pool) || isInfinityBinPool(pool) || isInfinityStablePool(pool)) {
    const { currency0, currency1 } = pool.getPoolData();
    return currency0.wrapped.equals(tokenIn) ? currency1 : currency0;
  }
  throw new Error("Cannot get output currency by invalid pool");
}

// src/utils/encodeInfinityMixedRouteCurrencyPath.ts
function encodeInfinityMixedRouteCurrencyPath(route) {
  const { pools } = route;
  const currencyStart = route.path[0];
  const pathStart = getMatchedCurrency(currencyStart, pools[0].getTradingPairs()[0]);
  if (!pathStart) {
    throw new Error("Failed to encode path keys. Invalid start currency.");
  }
  const { path } = pools.reduce(
    ({ baseCurrency, path: path2 }, p) => {
      const quoteCurrency = getOutputCurrency(p, baseCurrency);
      return {
        baseCurrency: quoteCurrency,
        path: [...path2, getCurrencyAddress(quoteCurrency)]
      };
    },
    { baseCurrency: pathStart, path: [getCurrencyAddress(pathStart)] }
  );
  return path;
}
var infinityRouteParamsAbi = [
  {
    components: [
      {
        components: [
          { name: "currency0", type: "address" },
          { name: "currency1", type: "address" },
          { name: "hooks", type: "address" },
          { name: "poolManager", type: "address" },
          { name: "fee", type: "uint24" },
          { name: "parameters", type: "bytes32" }
        ],
        name: "poolKey",
        type: "tuple"
      },
      { name: "hookData", type: "bytes" }
    ],
    name: "params",
    type: "tuple"
  }
];
function encodeInfinityMixedRouteParams(route) {
  return route.pools.map((p) => {
    if (isV2Pool(p) || isStablePool(p)) {
      return "0x";
    }
    if (isV3Pool(p)) {
      return encodeAbiParameters(parseAbiParameters("uint24"), [p.getPoolData().fee]);
    }
    if (isInfinityCLPool(p) || isInfinityStablePool(p)) {
      const pool = p.getPoolData();
      const poolKey = {
        currency0: getCurrencyAddress(pool.currency0),
        currency1: getCurrencyAddress(pool.currency1),
        fee: isDynamicFeeHook(pool.currency0.chainId, pool.hooks) ? DYNAMIC_FEE_FLAG : pool.fee,
        hooks: pool.hooks,
        poolManager: pool.poolManager,
        parameters: {
          tickSpacing: pool.tickSpacing,
          hooksRegistration: pool.hooksRegistrationBitmap !== void 0 ? decodeHooksRegistration(pool.hooksRegistrationBitmap) : void 0
        }
      };
      return encodeAbiParameters(infinityRouteParamsAbi, [
        {
          poolKey: encodePoolKey(poolKey),
          hookData: "0x"
        }
      ]);
    }
    if (isInfinityBinPool(p)) {
      const pool = p.getPoolData();
      const poolKey = {
        currency0: getCurrencyAddress(pool.currency0),
        currency1: getCurrencyAddress(pool.currency1),
        fee: isDynamicFeeHook(pool.currency0.chainId, pool.hooks) ? DYNAMIC_FEE_FLAG : pool.fee,
        hooks: pool.hooks,
        poolManager: pool.poolManager,
        parameters: {
          binStep: Number(pool.binStep),
          hooksRegistration: pool.hooksRegistrationBitmap !== void 0 ? decodeHooksRegistration(pool.hooksRegistrationBitmap) : void 0
        }
      };
      return encodeAbiParameters(infinityRouteParamsAbi, [
        {
          poolKey: encodePoolKey(poolKey),
          hookData: "0x"
        }
      ]);
    }
    throw new Error(`Invalid pool type ${p}`);
  });
}
function encodeInfinityRouteToPath(route, exactOutput) {
  if (route.pools.some((p) => !isInfinityCLPool(p) && !isInfinityBinPool(p) && !isInfinityStablePool(p))) {
    throw new Error("Failed to encode path keys. Invalid infinity pool found in route.");
  }
  const currencyStart = exactOutput ? route.path[route.path.length - 1] : route.path[0];
  const pools = exactOutput ? [...route.pools].reverse() : route.pools;
  const { path } = pools.reduce(
    ({ baseCurrency, path: path2 }, p) => {
      const isInfinityCl = isInfinityCLPool(p);
      const isInfinityBin = isInfinityBinPool(p);
      const isInfinityStable = isInfinityStablePool(p);
      if (!isInfinityCl && !isInfinityBin && !isInfinityStable)
        throw new Error(`Invalid Infinity pool ${p}`);
      const quoteCurrency = getOutputCurrency(p, baseCurrency);
      const pool = p.getPoolData();
      const hooksRegistration = pool.hooksRegistrationBitmap !== void 0 ? decodeHooksRegistration(pool.hooksRegistrationBitmap) : void 0;
      const parameters = encodePoolParameters(
        isInfinityCl || isInfinityStable ? {
          tickSpacing: p.getPoolData().tickSpacing,
          hooksRegistration
        } : {
          binStep: p.getPoolData().binStep,
          hooksRegistration
        }
      );
      return {
        baseCurrency: quoteCurrency,
        path: [
          ...path2,
          {
            intermediateCurrency: getCurrencyAddress(quoteCurrency),
            fee: isDynamicFeeHook(pool.currency0.chainId, pool.hooks) ? DYNAMIC_FEE_FLAG : pool.fee,
            hooks: pool.hooks ?? zeroAddress,
            poolManager: pool.poolManager,
            hookData: "0x",
            parameters
          }
        ]
      };
    },
    { baseCurrency: currencyStart, path: [] }
  );
  return exactOutput ? path.reverse() : path;
}

// src/fetchInfinityQuote.ts
function buildInfinityMixedQuoteCall(route) {
  const { amount } = route;
  const {
    currency: { chainId }
  } = amount;
  return {
    address: INFI_MIXED_QUOTER_ADDRESSES[chainId],
    abi: infinityMixedRouteQuoterAbi,
    functionName: "quoteMixedExactInput",
    args: [
      encodeInfinityMixedRouteCurrencyPath(route),
      encodeInfinityMixedRouteActions(route),
      encodeInfinityMixedRouteParams(route),
      route.amount.quotient
    ]
  };
}
function buildInfinityCLQuoteCall(route) {
  const { path, amount } = route;
  const {
    currency: { chainId }
  } = amount;
  const isExactOut = path[path.length - 1].wrapped.equals(amount.currency.wrapped);
  const firstPool = route.pools[isExactOut ? route.pools.length - 1 : 0];
  const baseCurrency = getMatchedCurrency(route.amount.currency, firstPool.getTradingPairs()[0]);
  if (!baseCurrency) {
    throw new Error("ROUTING_SDK_ADDON_INFINITY_CL_QUOTER_CALL_INPUTS: INVALID_POOL");
  }
  const exactCurrency = getCurrencyAddress(baseCurrency);
  return {
    address: INFI_CL_QUOTER_ADDRESSES[chainId],
    abi: clQuoterAbi,
    functionName: isExactOut ? "quoteExactOutput" : "quoteExactInput",
    args: [
      {
        exactCurrency,
        path: encodeInfinityRouteToPath(route, isExactOut),
        exactAmount: `0x${route.amount.quotient.toString(16)}`
      }
    ]
  };
}
function buildInfinityBinQuoteCall(route) {
  const { path, amount } = route;
  const {
    currency: { chainId }
  } = amount;
  const isExactOut = path[path.length - 1].wrapped.equals(amount.currency.wrapped);
  const firstPool = route.pools[isExactOut ? route.pools.length - 1 : 0];
  const baseCurrency = getMatchedCurrency(route.amount.currency, firstPool.getTradingPairs()[0]);
  if (!baseCurrency) {
    throw new Error("ROUTING_SDK_ADDON_INFINITY_BIN_QUOTER_CALL_INPUTS: INVALID_POOL");
  }
  const exactCurrency = getCurrencyAddress(baseCurrency);
  return {
    address: INFI_BIN_QUOTER_ADDRESSES[chainId],
    abi: binQuoterAbi,
    functionName: isExactOut ? "quoteExactOutput" : "quoteExactInput",
    args: [
      {
        exactCurrency,
        path: encodeInfinityRouteToPath(route, isExactOut),
        exactAmount: `0x${route.amount.quotient.toString(16)}`
      }
    ]
  };
}

// src/abis/IMixedRouteQuoterV1.ts
var mixedRouteQuoterV1ABI = [
  {
    inputs: [
      {
        internalType: "bytes",
        name: "path",
        type: "bytes"
      },
      {
        internalType: "uint256[]",
        name: "flag",
        type: "uint256[]"
      },
      {
        internalType: "uint256",
        name: "amountIn",
        type: "uint256"
      }
    ],
    name: "quoteExactInput",
    outputs: [
      {
        internalType: "uint256",
        name: "amountOut",
        type: "uint256"
      },
      {
        internalType: "uint160[]",
        name: "v3SqrtPriceX96AfterList",
        type: "uint160[]"
      },
      {
        internalType: "uint32[]",
        name: "v3InitializedTicksCrossedList",
        type: "uint32[]"
      },
      {
        internalType: "uint256",
        name: "v3SwapGasEstimate",
        type: "uint256"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  }
];

// src/fetchMixedRouteQuote.ts
function buildMixedRouteQuoteCall(route) {
  const { path, amount } = route;
  const {
    currency: { chainId }
  } = amount;
  const isExactOut = path[path.length - 1].wrapped.equals(amount.currency.wrapped);
  invariant(!isExactOut, "EXACT_OUT_NOT_SUPPORTED");
  return {
    address: MIXED_ROUTE_QUOTER_ADDRESSES[chainId],
    abi: mixedRouteQuoterV1ABI,
    functionName: "quoteExactInput",
    args: [
      encodeRouteToPath(route, false),
      route.pools.map((pool) => {
        if (isV3Pool(pool)) {
          return 0n;
        }
        if (isV2Pool(pool)) {
          return 1n;
        }
        if (isStablePool(pool)) {
          const stablePool = pool.getPoolData();
          if (stablePool.balances.length === 2) {
            return 2n;
          }
          if (stablePool.balances.length === 3) {
            return 3n;
          }
        }
        return -1n;
      }).filter((index) => index >= 0),
      amount.quotient
    ]
  };
}

// src/fetchQuotes.ts
var fetchQuotes = async ({ routes, client }) => {
  const [route] = routes;
  const { amount, path } = route;
  const isExactOut = path[path.length - 1].wrapped.equals(amount.currency.wrapped);
  const calls = routes.map((r) => {
    if (isV3Route(r)) {
      return buildV3QuoteCall(r);
    }
    if (isInfinityCLRoute(r)) {
      return isExactOut ? buildInfinityCLQuoteCall(r) : buildInfinityMixedQuoteCall(r);
    }
    if (isInfinityBinRoute(r)) {
      return isExactOut ? buildInfinityBinQuoteCall(r) : buildInfinityMixedQuoteCall(r);
    }
    if (isInfinityStableRoute(r) || isInfinityMixedRoute(r)) {
      return buildInfinityMixedQuoteCall(r);
    }
    return buildMixedRouteQuoteCall(r);
  });
  const results = await client.multicall({
    contracts: calls
  });
  return results.map((result, i) => {
    if (result.status === "failure") {
      console.warn("[routing-sdk][QUOTER]: fail to get quote", result.error);
      console.warn("failed route & call ", routes[i], calls[i]);
      return void 0;
    }
    const { path: currentPath } = routes[i];
    const outCurrency = isExactOut ? currentPath[0] : currentPath[currentPath.length - 1];
    if (result.result.length === 2) {
      const [quote2, gasUseEstimate2] = result.result;
      return {
        quote: CurrencyAmount.fromRawAmount(outCurrency, quote2),
        gasUseEstimate: gasUseEstimate2
      };
    }
    const [quote, , , gasUseEstimate] = result.result;
    return {
      quote: CurrencyAmount.fromRawAmount(outCurrency, quote),
      gasUseEstimate
    };
  });
};

export { EMPTY_FEE_PATH_PLACEHOLDER, InfinityMixedQuoterActions, MIXED_ROUTE_QUOTER_ADDRESSES, V3_QUOTER_ADDRESSES, buildV3QuoteCall, encodeRouteToPath, fetchQuotes, fetchV3Quote, isInfinityBinRoute, isInfinityCLRoute, isInfinityMixedRoute, isInfinityStableRoute, isMixedRoute, isV3Route };
