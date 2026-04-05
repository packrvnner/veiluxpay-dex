'use strict';

var viem = require('viem');
var invariant = require('tiny-invariant');
var chains = require('@pancakeswap/chains');
var sdk = require('@pancakeswap/sdk');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var invariant__default = /*#__PURE__*/_interopDefault(invariant);

// src/InfinityStableHook.ts

// src/abis/infinityStableHookABI.ts
var infinityStableHookABI = [
  {
    type: "constructor",
    inputs: [
      { name: "_name", type: "string" },
      { name: "_symbol", type: "string" },
      { name: "_A", type: "uint256" },
      { name: "_fee", type: "uint256" },
      { name: "_offpeg_fee_multiplier", type: "uint256" },
      { name: "_oracle_helper", type: "address" },
      { name: "_coins", type: "address[]" },
      { name: "_rate_multipliers", type: "uint256[]" },
      { name: "_asset_types", type: "uint8[]" },
      { name: "_method_ids", type: "bytes4[]" },
      { name: "_oracles", type: "address[]" }
    ],
    stateMutability: "nonpayable"
  },
  { type: "function", name: "A", inputs: [], outputs: [{ name: "", type: "uint256" }], stateMutability: "view" },
  {
    type: "function",
    name: "A_precise",
    inputs: [],
    outputs: [{ name: "", type: "uint256" }],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "D_ma_time",
    inputs: [],
    outputs: [{ name: "", type: "uint256" }],
    stateMutability: "view"
  },
  { type: "function", name: "D_oracle", inputs: [], outputs: [{ name: "", type: "uint256" }], stateMutability: "view" },
  {
    type: "function",
    name: "MIN_RAMP_TIME",
    inputs: [],
    outputs: [{ name: "", type: "uint256" }],
    stateMutability: "view"
  },
  { type: "function", name: "N_COINS", inputs: [], outputs: [{ name: "", type: "uint256" }], stateMutability: "view" },
  {
    type: "function",
    name: "add_liquidity",
    inputs: [
      { name: "_amount0", type: "uint256" },
      { name: "_amount1", type: "uint256" },
      { name: "_min_mint_amount", type: "uint256" }
    ],
    outputs: [{ name: "", type: "uint256" }],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "add_liquidity",
    inputs: [
      { name: "_amount0", type: "uint256" },
      { name: "_amount1", type: "uint256" },
      { name: "_min_mint_amount", type: "uint256" },
      { name: "_receiver", type: "address" }
    ],
    outputs: [{ name: "", type: "uint256" }],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "admin_balances",
    inputs: [{ name: "arg0", type: "uint256" }],
    outputs: [{ name: "", type: "uint256" }],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "admin_fee",
    inputs: [],
    outputs: [{ name: "", type: "uint256" }],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "allowance",
    inputs: [
      { name: "arg0", type: "address" },
      { name: "arg1", type: "address" }
    ],
    outputs: [{ name: "", type: "uint256" }],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "approve",
    inputs: [
      { name: "_spender", type: "address" },
      { name: "_value", type: "uint256" }
    ],
    outputs: [{ name: "", type: "bool" }],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "balanceOf",
    inputs: [{ name: "arg0", type: "address" }],
    outputs: [{ name: "", type: "uint256" }],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "balances",
    inputs: [{ name: "i", type: "uint256" }],
    outputs: [{ name: "", type: "uint256" }],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "beforeAddLiquidity",
    inputs: [
      { name: "sender", type: "address" },
      {
        name: "key",
        type: "tuple",
        components: [
          { name: "currency0", type: "address" },
          { name: "currency1", type: "address" },
          { name: "hooks", type: "address" },
          { name: "poolManager", type: "address" },
          { name: "fee", type: "uint24" },
          { name: "parameters", type: "bytes32" }
        ]
      },
      {
        name: "params",
        type: "tuple",
        components: [
          { name: "tickLower", type: "int24" },
          { name: "tickUpper", type: "int24" },
          { name: "liquidityDelta", type: "int256" },
          { name: "salt", type: "bytes32" }
        ]
      },
      { name: "hookData", type: "bytes" }
    ],
    outputs: [{ name: "", type: "bytes4" }],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "beforeInitialize",
    inputs: [
      { name: "sender", type: "address" },
      {
        name: "key",
        type: "tuple",
        components: [
          { name: "currency0", type: "address" },
          { name: "currency1", type: "address" },
          { name: "hooks", type: "address" },
          { name: "poolManager", type: "address" },
          { name: "fee", type: "uint24" },
          { name: "parameters", type: "bytes32" }
        ]
      },
      { name: "sqrtPriceX96", type: "uint160" }
    ],
    outputs: [{ name: "", type: "bytes4" }],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "beforeRemoveLiquidity",
    inputs: [
      { name: "sender", type: "address" },
      {
        name: "key",
        type: "tuple",
        components: [
          { name: "currency0", type: "address" },
          { name: "currency1", type: "address" },
          { name: "hooks", type: "address" },
          { name: "poolManager", type: "address" },
          { name: "fee", type: "uint24" },
          { name: "parameters", type: "bytes32" }
        ]
      },
      {
        name: "params",
        type: "tuple",
        components: [
          { name: "tickLower", type: "int24" },
          { name: "tickUpper", type: "int24" },
          { name: "liquidityDelta", type: "int256" },
          { name: "salt", type: "bytes32" }
        ]
      },
      { name: "hookData", type: "bytes" }
    ],
    outputs: [{ name: "", type: "bytes4" }],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "beforeSwap",
    inputs: [
      { name: "sender", type: "address" },
      {
        name: "key",
        type: "tuple",
        components: [
          { name: "currency0", type: "address" },
          { name: "currency1", type: "address" },
          { name: "hooks", type: "address" },
          { name: "poolManager", type: "address" },
          { name: "fee", type: "uint24" },
          { name: "parameters", type: "bytes32" }
        ]
      },
      {
        name: "params",
        type: "tuple",
        components: [
          { name: "zeroForOne", type: "bool" },
          { name: "amountSpecified", type: "int256" },
          { name: "sqrtPriceLimitX96", type: "uint160" }
        ]
      },
      { name: "hookData", type: "bytes" }
    ],
    outputs: [
      { name: "", type: "bytes4" },
      { name: "", type: "int256" },
      { name: "", type: "uint24" }
    ],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "calc_token_amount",
    inputs: [
      { name: "_amounts", type: "uint256[]" },
      { name: "_is_deposit", type: "bool" }
    ],
    outputs: [{ name: "", type: "uint256" }],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "calc_withdraw_one_coin",
    inputs: [
      { name: "_burn_amount", type: "uint256" },
      { name: "i", type: "int128" }
    ],
    outputs: [{ name: "", type: "uint256" }],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "coins",
    inputs: [{ name: "arg0", type: "uint256" }],
    outputs: [{ name: "", type: "address" }],
    stateMutability: "view"
  },
  { type: "function", name: "decimals", inputs: [], outputs: [{ name: "", type: "uint8" }], stateMutability: "view" },
  {
    type: "function",
    name: "dynamic_fee",
    inputs: [
      { name: "i", type: "int128" },
      { name: "j", type: "int128" }
    ],
    outputs: [{ name: "", type: "uint256" }],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "ema_price",
    inputs: [{ name: "i", type: "uint256" }],
    outputs: [{ name: "", type: "uint256" }],
    stateMutability: "view"
  },
  { type: "function", name: "fee", inputs: [], outputs: [{ name: "", type: "uint256" }], stateMutability: "view" },
  { type: "function", name: "future_A", inputs: [], outputs: [{ name: "", type: "uint256" }], stateMutability: "view" },
  {
    type: "function",
    name: "future_A_time",
    inputs: [],
    outputs: [{ name: "", type: "uint256" }],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "getHooksRegistrationBitmap",
    inputs: [],
    outputs: [{ name: "", type: "uint16" }],
    stateMutability: "pure"
  },
  {
    type: "function",
    name: "get_balances",
    inputs: [],
    outputs: [{ name: "", type: "uint256[]" }],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "get_dx",
    inputs: [
      { name: "i", type: "int128" },
      { name: "j", type: "int128" },
      { name: "dy", type: "uint256" }
    ],
    outputs: [{ name: "", type: "uint256" }],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "get_dy",
    inputs: [
      { name: "i", type: "int128" },
      { name: "j", type: "int128" },
      { name: "dx", type: "uint256" }
    ],
    outputs: [{ name: "", type: "uint256" }],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "get_p",
    inputs: [{ name: "i", type: "uint256" }],
    outputs: [{ name: "", type: "uint256" }],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "get_virtual_price",
    inputs: [],
    outputs: [{ name: "", type: "uint256" }],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "initial_A",
    inputs: [],
    outputs: [{ name: "", type: "uint256" }],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "initial_A_time",
    inputs: [],
    outputs: [{ name: "", type: "uint256" }],
    stateMutability: "view"
  },
  { type: "function", name: "is_binded", inputs: [], outputs: [{ name: "", type: "bool" }], stateMutability: "view" },
  {
    type: "function",
    name: "last_price",
    inputs: [{ name: "i", type: "uint256" }],
    outputs: [{ name: "", type: "uint256" }],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "lockAcquired",
    inputs: [{ name: "data", type: "bytes" }],
    outputs: [{ name: "", type: "bytes" }],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "lock_acquired_add_liquidity",
    inputs: [
      { name: "_sender", type: "address" },
      { name: "_amount0", type: "uint256" },
      { name: "_amount1", type: "uint256" },
      { name: "_min_mint_amount", type: "uint256" },
      { name: "_receiver", type: "address" }
    ],
    outputs: [{ name: "", type: "bytes" }],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "lock_acquired_remove_liquidity",
    inputs: [
      { name: "_sender", type: "address" },
      { name: "_burn_amount", type: "uint256" },
      { name: "_min_amount0", type: "uint256" },
      { name: "_min_amount1", type: "uint256" },
      { name: "_receiver", type: "address" },
      { name: "_claim_admin_fees", type: "bool" }
    ],
    outputs: [{ name: "", type: "bytes" }],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "lock_acquired_remove_liquidity_imbalance",
    inputs: [
      { name: "_sender", type: "address" },
      { name: "_amount0", type: "uint256" },
      { name: "_amount1", type: "uint256" },
      { name: "_max_burn_amount", type: "uint256" },
      { name: "_receiver", type: "address" }
    ],
    outputs: [{ name: "", type: "bytes" }],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "lock_acquired_remove_liquidity_one_coin",
    inputs: [
      { name: "_sender", type: "address" },
      { name: "_burn_amount", type: "uint256" },
      { name: "_zero_or_one", type: "bool" },
      { name: "_min_received", type: "uint256" },
      { name: "_receiver", type: "address" }
    ],
    outputs: [{ name: "", type: "bytes" }],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "lock_acquired_withdraw_admin_fees",
    inputs: [],
    outputs: [{ name: "", type: "bytes" }],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "ma_exp_time",
    inputs: [],
    outputs: [{ name: "", type: "uint256" }],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "ma_last_time",
    inputs: [],
    outputs: [{ name: "", type: "uint256" }],
    stateMutability: "view"
  },
  { type: "function", name: "name", inputs: [], outputs: [{ name: "", type: "string" }], stateMutability: "view" },
  {
    type: "function",
    name: "offpeg_fee_multiplier",
    inputs: [],
    outputs: [{ name: "", type: "uint256" }],
    stateMutability: "view"
  },
  { type: "function", name: "oracle", inputs: [], outputs: [{ name: "", type: "address" }], stateMutability: "view" },
  {
    type: "function",
    name: "pool_manager",
    inputs: [],
    outputs: [{ name: "", type: "address" }],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "price_oracle",
    inputs: [{ name: "i", type: "uint256" }],
    outputs: [{ name: "", type: "uint256" }],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "ramp_A",
    inputs: [
      { name: "_future_A", type: "uint256" },
      { name: "_future_time", type: "uint256" }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "remove_liquidity",
    inputs: [
      { name: "_burn_amount", type: "uint256" },
      { name: "_min_amount0", type: "uint256" },
      { name: "_min_amount1", type: "uint256" }
    ],
    outputs: [
      { name: "", type: "uint256" },
      { name: "", type: "uint256" }
    ],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "remove_liquidity",
    inputs: [
      { name: "_burn_amount", type: "uint256" },
      { name: "_min_amount0", type: "uint256" },
      { name: "_min_amount1", type: "uint256" },
      { name: "_receiver", type: "address" }
    ],
    outputs: [
      { name: "", type: "uint256" },
      { name: "", type: "uint256" }
    ],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "remove_liquidity",
    inputs: [
      { name: "_burn_amount", type: "uint256" },
      { name: "_min_amount0", type: "uint256" },
      { name: "_min_amount1", type: "uint256" },
      { name: "_receiver", type: "address" },
      { name: "_claim_admin_fees", type: "bool" }
    ],
    outputs: [
      { name: "", type: "uint256" },
      { name: "", type: "uint256" }
    ],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "remove_liquidity_imbalance",
    inputs: [
      { name: "_amount0", type: "uint256" },
      { name: "_amount1", type: "uint256" },
      { name: "_max_burn_amount", type: "uint256" }
    ],
    outputs: [{ name: "", type: "uint256" }],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "remove_liquidity_imbalance",
    inputs: [
      { name: "_amount0", type: "uint256" },
      { name: "_amount1", type: "uint256" },
      { name: "_max_burn_amount", type: "uint256" },
      { name: "_receiver", type: "address" }
    ],
    outputs: [{ name: "", type: "uint256" }],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "remove_liquidity_one_coin",
    inputs: [
      { name: "_burn_amount", type: "uint256" },
      { name: "_zero_or_one", type: "bool" },
      { name: "_min_received", type: "uint256" }
    ],
    outputs: [{ name: "", type: "uint256" }],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "remove_liquidity_one_coin",
    inputs: [
      { name: "_burn_amount", type: "uint256" },
      { name: "_zero_or_one", type: "bool" },
      { name: "_min_received", type: "uint256" },
      { name: "_receiver", type: "address" }
    ],
    outputs: [{ name: "", type: "uint256" }],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "set_ma_exp_time",
    inputs: [
      { name: "_ma_exp_time", type: "uint256" },
      { name: "_D_ma_time", type: "uint256" }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "set_new_fee",
    inputs: [
      { name: "_new_fee", type: "uint256" },
      { name: "_new_offpeg_fee_multiplier", type: "uint256" }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  { type: "function", name: "stop_ramp_A", inputs: [], outputs: [], stateMutability: "nonpayable" },
  {
    type: "function",
    name: "stored_rates",
    inputs: [],
    outputs: [{ name: "", type: "uint256[]" }],
    stateMutability: "view"
  },
  { type: "function", name: "symbol", inputs: [], outputs: [{ name: "", type: "string" }], stateMutability: "view" },
  {
    type: "function",
    name: "totalSupply",
    inputs: [],
    outputs: [{ name: "", type: "uint256" }],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "transfer",
    inputs: [
      { name: "_to", type: "address" },
      { name: "_value", type: "uint256" }
    ],
    outputs: [{ name: "", type: "bool" }],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "transferFrom",
    inputs: [
      { name: "_from", type: "address" },
      { name: "_to", type: "address" },
      { name: "_value", type: "uint256" }
    ],
    outputs: [{ name: "", type: "bool" }],
    stateMutability: "nonpayable"
  },
  { type: "function", name: "vault", inputs: [], outputs: [{ name: "", type: "address" }], stateMutability: "view" },
  { type: "function", name: "withdraw_admin_fees", inputs: [], outputs: [], stateMutability: "nonpayable" },
  {
    type: "event",
    name: "AddLiquidity",
    inputs: [
      { name: "provider", type: "address", indexed: true },
      { name: "token_amounts", type: "uint256[]", indexed: false },
      { name: "fees", type: "uint256[]", indexed: false },
      { name: "invariant", type: "uint256", indexed: false },
      { name: "token_supply", type: "uint256", indexed: false }
    ],
    anonymous: false
  },
  {
    type: "event",
    name: "AdminFeesReceiverUpdated",
    inputs: [{ name: "new_admin_fees_receiver", type: "address", indexed: true }],
    anonymous: false
  },
  {
    type: "event",
    name: "ApplyNewFee",
    inputs: [
      { name: "fee", type: "uint256", indexed: false },
      { name: "offpeg_fee_multiplier", type: "uint256", indexed: false }
    ],
    anonymous: false
  },
  {
    type: "event",
    name: "Approval",
    inputs: [
      { name: "owner", type: "address", indexed: true },
      { name: "spender", type: "address", indexed: true },
      { name: "value", type: "uint256", indexed: false }
    ],
    anonymous: false
  },
  {
    type: "event",
    name: "RampA",
    inputs: [
      { name: "old_A", type: "uint256", indexed: false },
      { name: "new_A", type: "uint256", indexed: false },
      { name: "initial_time", type: "uint256", indexed: false },
      { name: "future_time", type: "uint256", indexed: false }
    ],
    anonymous: false
  },
  {
    type: "event",
    name: "RemoveLiquidity",
    inputs: [
      { name: "provider", type: "address", indexed: true },
      { name: "token_amounts", type: "uint256[]", indexed: false },
      { name: "fees", type: "uint256[]", indexed: false },
      { name: "token_supply", type: "uint256", indexed: false }
    ],
    anonymous: false
  },
  {
    type: "event",
    name: "RemoveLiquidityImbalance",
    inputs: [
      { name: "provider", type: "address", indexed: true },
      { name: "token_amounts", type: "uint256[]", indexed: false },
      { name: "fees", type: "uint256[]", indexed: false },
      { name: "invariant", type: "uint256", indexed: false },
      { name: "token_supply", type: "uint256", indexed: false }
    ],
    anonymous: false
  },
  {
    type: "event",
    name: "RemoveLiquidityOne",
    inputs: [
      { name: "provider", type: "address", indexed: true },
      { name: "token_id", type: "int128", indexed: false },
      { name: "token_amount", type: "uint256", indexed: false },
      { name: "coin_amount", type: "uint256", indexed: false },
      { name: "token_supply", type: "uint256", indexed: false }
    ],
    anonymous: false
  },
  {
    type: "event",
    name: "SetNewMATime",
    inputs: [
      { name: "ma_exp_time", type: "uint256", indexed: false },
      { name: "D_ma_time", type: "uint256", indexed: false }
    ],
    anonymous: false
  },
  {
    type: "event",
    name: "StopRampA",
    inputs: [
      { name: "A", type: "uint256", indexed: false },
      { name: "t", type: "uint256", indexed: false }
    ],
    anonymous: false
  },
  {
    type: "event",
    name: "TokenExchange",
    inputs: [
      { name: "buyer", type: "address", indexed: true },
      { name: "sold_id", type: "int128", indexed: false },
      { name: "tokens_sold", type: "uint256", indexed: false },
      { name: "bought_id", type: "int128", indexed: false },
      { name: "tokens_bought", type: "uint256", indexed: false }
    ],
    anonymous: false
  },
  {
    type: "event",
    name: "Transfer",
    inputs: [
      { name: "sender", type: "address", indexed: true },
      { name: "receiver", type: "address", indexed: true },
      { name: "value", type: "uint256", indexed: false }
    ],
    anonymous: false
  }
];

// src/InfinityStableHook.ts
var InfinityStableHook = class {
  constructor(contractAddress, publicClient) {
    this.contractAddress = contractAddress;
    this.publicClient = publicClient;
  }
  /**
   * Get LP token balances for multiple hook addresses in a single multicall
   * @param publicClient The public client to use for the multicall
   * @param hookAddresses Array of hook addresses to check
   * @param account The account address to check balances for
   * @returns Promise<Array<{ hookAddress: Address; balance: bigint }>> Array of hook addresses with non-zero balances
   */
  static async getBalancesOfMany(publicClient, hookAddresses, account) {
    if (!hookAddresses.length) {
      return [];
    }
    try {
      const balanceResults = await publicClient.multicall({
        contracts: hookAddresses.map((hookAddress) => ({
          abi: infinityStableHookABI,
          address: hookAddress,
          functionName: "balanceOf",
          args: [account]
        })),
        allowFailure: true
      });
      return hookAddresses.map((hookAddress, index) => {
        const result = balanceResults[index];
        const balance = result.status === "success" && result.result ? result.result : 0n;
        return { hookAddress, balance };
      }).filter((position) => position.balance > 0n);
    } catch (error) {
      console.error("Error fetching balances for multiple hooks:", error);
      throw error;
    }
  }
  /**
   * Get token addresses for multiple hook addresses in a single multicall
   * @param publicClient The public client to use for the multicall
   * @param hookAddresses Array of hook addresses to query
   * @returns Promise<Array<{ hookAddress: Address; coin0: Address; coin1: Address }>> Array of hook addresses with their token pairs
   */
  static async getCoinsMany(publicClient, hookAddresses) {
    if (!hookAddresses.length) {
      return [];
    }
    try {
      const coinResults = await publicClient.multicall({
        contracts: hookAddresses.flatMap((hookAddress) => [
          {
            abi: infinityStableHookABI,
            address: hookAddress,
            functionName: "coins",
            args: [0n]
          },
          {
            abi: infinityStableHookABI,
            address: hookAddress,
            functionName: "coins",
            args: [1n]
          }
        ]),
        allowFailure: true
      });
      return hookAddresses.map((hookAddress, index) => {
        const coin0Result = coinResults[index * 2];
        const coin1Result = coinResults[index * 2 + 1];
        const coin0 = coin0Result && coin0Result.status === "success" && coin0Result.result ? coin0Result.result : "0x0000000000000000000000000000000000000000";
        const coin1 = coin1Result && coin1Result.status === "success" && coin1Result.result ? coin1Result.result : "0x0000000000000000000000000000000000000000";
        return { hookAddress, coin0, coin1 };
      });
    } catch (error) {
      console.error("Error fetching coins for multiple hooks:", error);
      throw error;
    }
  }
  /**
   * Get pool balances (reserves) for multiple hook addresses in a single multicall
   * @param publicClient The public client to use for the multicall
   * @param hookAddresses Array of hook addresses to query
   * @returns Promise<Array<{ hookAddress: Address; balances: bigint[] }>> Array of hook addresses with their pool balances
   */
  static async getPoolBalancesMany(publicClient, hookAddresses) {
    if (!hookAddresses.length) {
      return [];
    }
    try {
      const balanceResults = await publicClient.multicall({
        contracts: hookAddresses.map((hookAddress) => ({
          abi: infinityStableHookABI,
          address: hookAddress,
          functionName: "get_balances",
          args: []
        })),
        allowFailure: true
      });
      return hookAddresses.map((hookAddress, index) => {
        const result = balanceResults[index];
        const balances = result && result.status === "success" && result.result ? result.result : [0n, 0n];
        return { hookAddress, balances };
      });
    } catch (error) {
      console.error("Error fetching pool balances for multiple hooks:", error);
      throw error;
    }
  }
  /**
   * Calculate the amount of LP tokens to be minted for given token amounts
   * @param amounts Array of token amounts [amount0, amount1]
   * @param deposit True for adding liquidity, false for removing
   * @returns Promise<bigint> LP token amount
   */
  async calcTokenAmount(amounts, deposit = true) {
    try {
      const result = await this.publicClient.readContract({
        address: this.contractAddress,
        abi: infinityStableHookABI,
        functionName: "calc_token_amount",
        args: [amounts, deposit]
      });
      return result;
    } catch (error) {
      console.error("Error calculating token amount:", error);
      throw error;
    }
  }
  /**
   * Get the total supply of LP tokens
   * @returns Promise<bigint> Total supply of LP tokens
   */
  async totalSupply() {
    try {
      const result = await this.publicClient.readContract({
        address: this.contractAddress,
        abi: infinityStableHookABI,
        functionName: "totalSupply",
        args: []
      });
      return result;
    } catch (error) {
      console.error("Error getting total supply:", error);
      throw error;
    }
  }
  /**
   * Get the fee of the stable swap pool
   * @returns Promise<bigint> Fee value
   */
  async fee() {
    try {
      const result = await this.publicClient.readContract({
        address: this.contractAddress,
        abi: infinityStableHookABI,
        functionName: "fee",
        args: []
      });
      return result;
    } catch (error) {
      console.error("Error getting fee:", error);
      throw error;
    }
  }
  /**
   * Get calldata for adding liquidity to the stable swap pool
   * @param amount0 Amount of token0 to add
   * @param amount1 Amount of token1 to add
   * @param minMintAmount Minimum amount of LP tokens to mint
   * @returns Calldata object with address and encoded function data
   */
  getAddLiquidityCalldata(amount0, amount1, minMintAmount) {
    return {
      address: this.contractAddress,
      calldata: viem.encodeFunctionData({
        abi: infinityStableHookABI,
        functionName: "add_liquidity",
        args: [amount0, amount1, minMintAmount]
      })
    };
  }
  /**
   * Get the LP token balance of an account
   * @param account The account address to check
   * @returns Promise<bigint> LP token balance
   */
  async balanceOf(account) {
    try {
      const result = await this.publicClient.readContract({
        address: this.contractAddress,
        abi: infinityStableHookABI,
        functionName: "balanceOf",
        args: [account]
      });
      return result;
    } catch (error) {
      console.error("Error getting balance:", error);
      throw error;
    }
  }
  /**
   * Get the pool balance for a specific token
   * @param index The token index (0 or 1)
   * @returns Promise<bigint> Pool balance for the token
   */
  async balances(index) {
    try {
      const result = await this.publicClient.readContract({
        address: this.contractAddress,
        abi: infinityStableHookABI,
        functionName: "balances",
        args: [BigInt(index)]
      });
      return result;
    } catch (error) {
      console.error("Error getting pool balance:", error);
      throw error;
    }
  }
  /**
   * Get all pool balances (reserves) for both tokens
   * @returns Promise<bigint[]> Array of pool balances [balance0, balance1]
   */
  async getPoolBalances() {
    try {
      const result = await this.publicClient.readContract({
        address: this.contractAddress,
        abi: infinityStableHookABI,
        functionName: "get_balances",
        args: []
      });
      return result;
    } catch (error) {
      console.error("Error getting pool balances:", error);
      throw error;
    }
  }
  /**
   * Get both pool coin addresses
   * @returns Promise<[Address, Address]> Tuple of coin addresses [coin0, coin1]
   */
  async getCoins() {
    try {
      const [coin0, coin1] = await this.publicClient.multicall({
        allowFailure: false,
        contracts: [
          {
            address: this.contractAddress,
            abi: infinityStableHookABI,
            functionName: "coins",
            args: [0n]
          },
          {
            address: this.contractAddress,
            abi: infinityStableHookABI,
            functionName: "coins",
            args: [1n]
          }
        ]
      });
      return [coin0, coin1];
    } catch (error) {
      console.error("Error getting coins:", error);
      throw error;
    }
  }
  /**
   * Get calldata for removing liquidity from the stable swap pool
   * @param burnAmount Amount of LP tokens to burn
   * @param minAmount0 Minimum amount of token0 to receive
   * @param minAmount1 Minimum amount of token1 to receive
   * @param recipient Address to receive the tokens
   * @returns Calldata object with address and encoded function data
   */
  getRemoveLiquidityCalldata(burnAmount, minAmount0, minAmount1, recipient) {
    return {
      address: this.contractAddress,
      calldata: viem.encodeFunctionData({
        abi: infinityStableHookABI,
        functionName: "remove_liquidity",
        args: [burnAmount, minAmount0, minAmount1, recipient, false]
      })
    };
  }
  /**
   * Calculate the amount of a single token that will be received when burning LP tokens
   * @param burnAmount Amount of LP tokens to burn
   * @param index Token index (0 or 1)
   * @returns Promise<bigint> Amount of tokens that will be received
   */
  async calcWithdrawOneCoin(burnAmount, index) {
    try {
      const result = await this.publicClient.readContract({
        address: this.contractAddress,
        abi: infinityStableHookABI,
        functionName: "calc_withdraw_one_coin",
        args: [burnAmount, BigInt(index)]
      });
      return result;
    } catch (error) {
      console.error("Error calculating withdraw one coin:", error);
      throw error;
    }
  }
  /**
   * Get calldata for removing liquidity and receiving only one token
   * @param burnAmount Amount of LP tokens to burn
   * @param zeroOrOne True for token0, false for token1
   * @param minReceived Minimum amount of tokens to receive
   * @returns Calldata object with address and encoded function data
   */
  getRemoveLiquidityOneCoinCalldata(burnAmount, zeroOrOne, minReceived) {
    return {
      address: this.contractAddress,
      calldata: viem.encodeFunctionData({
        abi: infinityStableHookABI,
        functionName: "remove_liquidity_one_coin",
        args: [burnAmount, zeroOrOne, minReceived]
      })
    };
  }
  /**
   * Get calldata for removing liquidity with imbalanced token amounts
   * @param amount0 Amount of token0 to withdraw
   * @param amount1 Amount of token1 to withdraw
   * @param maxBurnAmount Maximum amount of LP tokens to burn
   * @returns Calldata object with address and encoded function data
   */
  getRemoveLiquidityImbalanceCalldata(amount0, amount1, maxBurnAmount) {
    return {
      address: this.contractAddress,
      calldata: viem.encodeFunctionData({
        abi: infinityStableHookABI,
        functionName: "remove_liquidity_imbalance",
        args: [amount0, amount1, maxBurnAmount]
      })
    };
  }
};
InfinityStableHook.ABI = infinityStableHookABI;

// src/abis/infinityStablePoolFactoryABI.ts
var infinityStablePoolFactoryABI = [
  {
    inputs: [{ internalType: "address", name: "_hookFactory", type: "address" }],
    stateMutability: "nonpayable",
    type: "constructor"
  },
  { inputs: [], name: "NameTooLong", type: "error" },
  {
    inputs: [{ internalType: "address", name: "token", type: "address" }],
    name: "SafeERC20FailedOperation",
    type: "error"
  },
  { inputs: [], name: "SymbolTooLong", type: "error" },
  {
    anonymous: false,
    inputs: [
      { indexed: false, internalType: "address[]", name: "coins", type: "address[]" },
      { indexed: false, internalType: "uint256", name: "A", type: "uint256" },
      { indexed: false, internalType: "uint256", name: "fee", type: "uint256" },
      { indexed: true, internalType: "address", name: "creator", type: "address" },
      { indexed: true, internalType: "PoolId", name: "poolId", type: "bytes32" }
    ],
    name: "PoolCreated",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      { indexed: false, internalType: "address[]", name: "coins", type: "address[]" },
      { indexed: false, internalType: "uint256", name: "A", type: "uint256" },
      { indexed: false, internalType: "uint256", name: "fee", type: "uint256" },
      { indexed: true, internalType: "address", name: "creator", type: "address" },
      { indexed: true, internalType: "PoolId", name: "poolId", type: "bytes32" },
      { indexed: false, internalType: "uint256", name: "amount0", type: "uint256" },
      { indexed: false, internalType: "uint256", name: "amount1", type: "uint256" },
      { indexed: false, internalType: "uint256", name: "lpMinted", type: "uint256" },
      { indexed: false, internalType: "address", name: "receiver", type: "address" }
    ],
    name: "PoolCreatedAndLiquidityAdded",
    type: "event"
  },
  {
    inputs: [
      {
        components: [
          { internalType: "string", name: "name", type: "string" },
          { internalType: "string", name: "symbol", type: "string" },
          { internalType: "address[]", name: "coins", type: "address[]" },
          { internalType: "uint256", name: "A", type: "uint256" },
          { internalType: "uint256", name: "fee", type: "uint256" },
          { internalType: "uint256", name: "offpegFeeMultiplier", type: "uint256" },
          { internalType: "uint256", name: "maExpTime", type: "uint256" },
          { internalType: "uint256", name: "implementationIdx", type: "uint256" },
          { internalType: "uint8[]", name: "assetTypes", type: "uint8[]" },
          { internalType: "bytes4[]", name: "methodIds", type: "bytes4[]" },
          { internalType: "address[]", name: "oracles", type: "address[]" }
        ],
        internalType: "struct ICLStableSwapPoolFactory.CreatePoolParam",
        name: "param",
        type: "tuple"
      }
    ],
    name: "createPool",
    outputs: [
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
        name: "",
        type: "tuple"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        components: [
          { internalType: "string", name: "name", type: "string" },
          { internalType: "string", name: "symbol", type: "string" },
          { internalType: "address[]", name: "coins", type: "address[]" },
          { internalType: "uint256", name: "A", type: "uint256" },
          { internalType: "uint256", name: "fee", type: "uint256" },
          { internalType: "uint256", name: "offpegFeeMultiplier", type: "uint256" },
          { internalType: "uint256", name: "maExpTime", type: "uint256" },
          { internalType: "uint256", name: "implementationIdx", type: "uint256" },
          { internalType: "uint8[]", name: "assetTypes", type: "uint8[]" },
          { internalType: "bytes4[]", name: "methodIds", type: "bytes4[]" },
          { internalType: "address[]", name: "oracles", type: "address[]" }
        ],
        internalType: "struct ICLStableSwapPoolFactory.CreatePoolParam",
        name: "createPoolParam",
        type: "tuple"
      },
      {
        components: [
          { internalType: "uint256", name: "amount0", type: "uint256" },
          { internalType: "uint256", name: "amount1", type: "uint256" },
          { internalType: "uint256", name: "minMintAmount", type: "uint256" },
          { internalType: "address", name: "receiver", type: "address" }
        ],
        internalType: "struct ICLStableSwapPoolFactory.AddLiquidityParam",
        name: "addLiquidityParam",
        type: "tuple"
      }
    ],
    name: "createPoolAndAddLiquidity",
    outputs: [
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
        name: "",
        type: "tuple"
      },
      { internalType: "uint256", name: "", type: "uint256" }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "hookFactory",
    outputs: [{ internalType: "contract ICLStableSwapHookFactory", name: "", type: "address" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "poolManager",
    outputs: [{ internalType: "contract ICLPoolManager", name: "", type: "address" }],
    stateMutability: "view",
    type: "function"
  }
];
var CL_STABLE_SWAP_POOL_FACTORY_ADDRESS = {
  [chains.ChainId.BSC]: "0x3669dDD1a9ee009dB9Eb2174C5C760FFfc66cfeF",
  [chains.ChainId.BSC_TESTNET]: "0x41187151170541bE6Ec0F3C235781ED9d7EF9923"
};
var HOOK_INFINITY_STABLE_HOOK_FACTORY_ADDRESS = {
  [chains.ChainId.BSC]: "0x44de03599d1088b205D959b09A842448A0a63173",
  [chains.ChainId.BSC_TESTNET]: "0x9188584835110FB6e0eB3BAE10ef1459Acf99edB"
  // TODO: Update with actual testnet address
};
var NULL_METHOD_ID = "0x00000000";
var DEFAULT_IMPLEMENTATION_IDX = 0n;
var DEFAULT_ASSET_TYPE = 0;
var MAX_FEE = 10000000n;
var MIN_A = 1n;
var MAX_A = 10000n;
var INFINITY_STABLE_POOL_FEE_DENOMINATOR = 1e10;

// src/types.ts
var TokenType = /* @__PURE__ */ ((TokenType2) => {
  TokenType2[TokenType2["STANDARD"] = 0] = "STANDARD";
  TokenType2[TokenType2["ORACLE"] = 1] = "ORACLE";
  return TokenType2;
})(TokenType || {});
var ADDRESS_ZERO = "0x0000000000000000000000000000000000000000";
var PRESET_CONFIGS = {
  fiat: {
    A: 1000n,
    fee: 1000000n,
    // 0.01%
    offpegFeeMultiplier: 100000000000n,
    // 10
    maExpTime: 866n
  },
  crypto: {
    A: 500n,
    fee: 2000000n,
    // 0.02%
    offpegFeeMultiplier: 200000000000n,
    // 20
    maExpTime: 866n
  },
  lrt: {
    A: 2000n,
    fee: 500000n,
    // 0.005%
    offpegFeeMultiplier: 50000000000n,
    // 5
    maExpTime: 866n
  }
};
function tokenConfigsToArrays(tokenAConfig, tokenBConfig) {
  return {
    methodIds: [tokenAConfig.methodId, tokenBConfig.methodId],
    oracles: [tokenAConfig.oracleAddress, tokenBConfig.oracleAddress]
  };
}

// src/InfinityStablePoolFactory.ts
function validateCurrencies(tokenA, tokenB) {
  invariant__default.default(!tokenA.equals(tokenB), "IDENTICAL_CURRENCIES");
  invariant__default.default(tokenA.wrapped.address !== tokenB.wrapped.address, "IDENTICAL_ADDRESSES");
}
function sortCurrencies(tokenA, tokenB) {
  return tokenA.wrapped.sortsBefore(tokenB.wrapped) ? [tokenA, tokenB] : [tokenB, tokenA];
}
var _InfinityStablePoolFactory = class {
  /**
   * Get the factory address for a specific chain
   */
  static getFactoryAddress(chainId) {
    const address = CL_STABLE_SWAP_POOL_FACTORY_ADDRESS[chainId];
    invariant__default.default(address, `Unsupported chainId: ${chainId}`);
    return address;
  }
  /**
   * Cannot be constructed.
   */
  // eslint-disable-next-line
  constructor() {
  }
  /**
   * Encodes the createPool function call
   */
  static encodeCreatePool(options) {
    const [tokenA, tokenB] = sortCurrencies(options.tokenA, options.tokenB);
    const name = `${tokenA.symbol}-${tokenB.symbol}`;
    const symbol = `${tokenA.symbol}-${tokenB.symbol}`;
    const coins = [tokenA.wrapped.address, tokenB.wrapped.address];
    invariant__default.default(options.A !== void 0, "A parameter is required");
    invariant__default.default(options.fee !== void 0, "fee parameter is required");
    invariant__default.default(options.offpegFeeMultiplier !== void 0, "offpegFeeMultiplier parameter is required");
    invariant__default.default(options.maExpTime !== void 0, "maExpTime parameter is required");
    invariant__default.default(options.assetTypes !== void 0, "assetTypes parameter is required");
    const { A } = options;
    const { fee } = options;
    const { offpegFeeMultiplier } = options;
    const { maExpTime } = options;
    const implementationIdx = 0n;
    const { assetTypes } = options;
    const methodIds = [options.methodIds?.[0] ?? NULL_METHOD_ID, options.methodIds?.[1] ?? NULL_METHOD_ID];
    const oracles = [options.oracles?.[0] ?? ADDRESS_ZERO, options.oracles?.[1] ?? ADDRESS_ZERO];
    console.info("[debug] InfinityStablePoolFactory.encodeCreatePool call parameters", {
      name,
      symbol,
      coins,
      A,
      fee,
      offpegFeeMultiplier,
      maExpTime,
      implementationIdx,
      assetTypes,
      methodIds,
      oracles
    });
    return viem.encodeFunctionData({
      abi: _InfinityStablePoolFactory.ABI,
      functionName: "createPool",
      args: [
        {
          name,
          symbol,
          coins,
          A,
          fee,
          offpegFeeMultiplier,
          maExpTime,
          implementationIdx,
          assetTypes,
          methodIds,
          oracles
        }
      ]
    });
  }
  /**
   * Creates call parameters for pool creation
   */
  static createPoolCallParameters(options) {
    validateCurrencies(options.tokenA, options.tokenB);
    return {
      calldata: this.encodeCreatePool(options),
      value: viem.toHex(0)
    };
  }
  /**
   * Creates call parameters using a preset configuration
   */
  static createPoolWithPresetCallParameters(tokenA, tokenB, preset) {
    const presetConfig = PRESET_CONFIGS[preset];
    invariant__default.default(presetConfig, `Unknown preset: ${preset}`);
    return this.createPoolCallParameters({
      tokenA,
      tokenB,
      ...presetConfig
    });
  }
  /**
   * Get preset configuration
   */
  static getPresetConfig(preset) {
    const presetConfig = PRESET_CONFIGS[preset];
    invariant__default.default(presetConfig, `Unknown preset: ${preset}`);
    return presetConfig;
  }
  /**
   * Encodes the createPoolAndAddLiquidity function call
   */
  static encodeCreatePoolAndAddLiquidity(options) {
    const [tokenA, tokenB] = sortCurrencies(options.tokenA, options.tokenB);
    const name = `${tokenA.symbol}-${tokenB.symbol}`;
    const symbol = `${tokenA.symbol}-${tokenB.symbol}`;
    const coins = [tokenA.wrapped.address, tokenB.wrapped.address];
    invariant__default.default(options.A !== void 0, "A parameter is required");
    invariant__default.default(options.fee !== void 0, "fee parameter is required");
    invariant__default.default(options.offpegFeeMultiplier !== void 0, "offpegFeeMultiplier parameter is required");
    invariant__default.default(options.maExpTime !== void 0, "maExpTime parameter is required");
    invariant__default.default(options.assetTypes !== void 0, "assetTypes parameter is required");
    invariant__default.default(options.amount0 !== void 0, "amount0 is required");
    invariant__default.default(options.amount1 !== void 0, "amount1 is required");
    invariant__default.default(options.minMintAmount !== void 0, "minMintAmount is required");
    invariant__default.default(options.receiver !== void 0, "receiver is required");
    const { A } = options;
    const { fee } = options;
    const { offpegFeeMultiplier } = options;
    const { maExpTime } = options;
    const implementationIdx = 0n;
    const { assetTypes } = options;
    const methodIds = [options.methodIds?.[0] ?? NULL_METHOD_ID, options.methodIds?.[1] ?? NULL_METHOD_ID];
    const oracles = [options.oracles?.[0] ?? ADDRESS_ZERO, options.oracles?.[1] ?? ADDRESS_ZERO];
    const isSorted = options.tokenA.wrapped.sortsBefore(options.tokenB.wrapped);
    const amount0 = isSorted ? options.amount0 : options.amount1;
    const amount1 = isSorted ? options.amount1 : options.amount0;
    console.info("[debug] InfinityStablePoolFactory.encodeCreatePoolAndAddLiquidity call parameters", {
      name,
      symbol,
      coins,
      A,
      fee,
      offpegFeeMultiplier,
      maExpTime,
      implementationIdx,
      assetTypes,
      methodIds,
      oracles,
      amount0,
      amount1,
      minMintAmount: options.minMintAmount,
      receiver: options.receiver
    });
    return viem.encodeFunctionData({
      abi: _InfinityStablePoolFactory.ABI,
      functionName: "createPoolAndAddLiquidity",
      args: [
        {
          name,
          symbol,
          coins,
          A,
          fee,
          offpegFeeMultiplier,
          maExpTime,
          implementationIdx,
          assetTypes,
          methodIds,
          oracles
        },
        {
          amount0,
          amount1,
          minMintAmount: options.minMintAmount,
          receiver: options.receiver
        }
      ]
    });
  }
  /**
   * Converts raw string form params (as entered by the user) into SDK-compatible bigint pool options.
   * Handles swap fee percentage, amplification parameter, off-peg fee multiplier, and moving average time.
   */
  static parsePoolFormParams(params) {
    const result = {};
    if (params.swapFee) {
      const swapFeeValue = parseFloat(params.swapFee);
      const clampedSwapFee = Math.max(0, Math.min(1, swapFeeValue));
      result.fee = BigInt(Math.floor(clampedSwapFee / 100 * INFINITY_STABLE_POOL_FEE_DENOMINATOR));
    }
    if (params.isAdvancedEnabled) {
      if (params.amplificationParam) {
        result.A = BigInt(params.amplificationParam.replace(/,/g, ""));
      }
      if (params.offpegFeeMultiplier) {
        result.offpegFeeMultiplier = BigInt(Math.floor(parseFloat(params.offpegFeeMultiplier) * 1e10));
      }
      if (params.movingAverageTime) {
        result.maExpTime = BigInt(Math.floor(parseInt(params.movingAverageTime, 10) / Math.log(2)));
      }
    }
    return result;
  }
  /**
   * Creates call parameters for pool creation with initial liquidity
   */
  static createPoolAndAddLiquidityCallParameters(options) {
    validateCurrencies(options.tokenA, options.tokenB);
    return {
      calldata: this.encodeCreatePoolAndAddLiquidity(options),
      value: viem.toHex(0)
    };
  }
};
var InfinityStablePoolFactory = _InfinityStablePoolFactory;
InfinityStablePoolFactory.ABI = infinityStablePoolFactoryABI;

// src/abis/infinityStableHookFactoryABI.ts
var infinityStableHookFactoryABI = [
  {
    stateMutability: "view",
    type: "function",
    name: "pool_list",
    inputs: [
      {
        name: "arg0",
        type: "uint256"
      }
    ],
    outputs: [
      {
        name: "",
        type: "address"
      }
    ]
  },
  {
    stateMutability: "view",
    type: "function",
    name: "pool_count",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256"
      }
    ]
  }
];
function validateCurrency(currency) {
  invariant__default.default(currency, "INVALID_CURRENCY");
  invariant__default.default(currency.wrapped, "CURRENCY_NOT_WRAPPED");
}
function validateCurrencyPair(tokenA, tokenB) {
  validateCurrency(tokenA);
  validateCurrency(tokenB);
  invariant__default.default(!tokenA.equals(tokenB), "IDENTICAL_CURRENCIES");
  invariant__default.default(tokenA.wrapped.address !== tokenB.wrapped.address, "IDENTICAL_ADDRESSES");
}
function sortCurrencies2(tokenA, tokenB) {
  validateCurrencyPair(tokenA, tokenB);
  return tokenA.wrapped.sortsBefore(tokenB.wrapped) ? [tokenA, tokenB] : [tokenB, tokenA];
}
function getSortedTokenAddresses(tokenA, tokenB) {
  const [token0, token1] = sortCurrencies2(tokenA, tokenB);
  return [token0.wrapped.address, token1.wrapped.address];
}
function generatePoolName(tokenA, tokenB) {
  const [token0, token1] = sortCurrencies2(tokenA, tokenB);
  return `${token0.symbol}-${token1.symbol}`;
}
function generatePoolSymbol(tokenA, tokenB) {
  return generatePoolName(tokenA, tokenB);
}
function validateFee(fee) {
  invariant__default.default(fee >= 0n, "NEGATIVE_FEE");
  invariant__default.default(fee <= 10000000n, "FEE_TOO_HIGH");
}
function validateAmplification(A) {
  invariant__default.default(A >= 1n, "AMPLIFICATION_TOO_LOW");
  invariant__default.default(A <= 10000n, "AMPLIFICATION_TOO_HIGH");
}
var FEE_PRECISION = 1e8;
function percentageToFee(percentage) {
  invariant__default.default(percentage >= 0 && percentage <= 1, "INVALID_PERCENTAGE");
  return BigInt(Math.round(percentage * FEE_PRECISION));
}
function feeToPercentage(fee) {
  return Number(fee) / FEE_PRECISION;
}
function getPoolIdFromReceipt(receipt) {
  if (receipt && Array.isArray(receipt.logs) && receipt.logs.length > 2 && receipt.logs[2]?.topics?.length > 1) {
    return receipt.logs[2]?.topics[1];
  }
  return void 0;
}
function getHookAddressFromReceipt(receipt) {
  const calldata = receipt?.logs?.[2]?.data;
  if (typeof calldata !== "string" || !calldata.startsWith("0x")) {
    return void 0;
  }
  const dataNoPrefix = calldata.slice(2);
  if (dataNoPrefix.length < 64) {
    return void 0;
  }
  const firstWord = dataNoPrefix.slice(0, 64);
  const addressHex = firstWord.slice(24);
  if (addressHex.length !== 40) {
    return void 0;
  }
  try {
    return viem.getAddress(`0x${addressHex}`);
  } catch {
    return void 0;
  }
}
var INFINITY_STABLE_SUPPORTED_CHAINS = [sdk.ChainId.BSC, sdk.ChainId.BSC_TESTNET];
function isInfinityStableSupported(chainId) {
  return INFINITY_STABLE_SUPPORTED_CHAINS.includes(chainId);
}

// src/InfinityStableHookFactory.ts
var _InfinityStableHookFactory = class {
  /**
   * Get the singleton instance
   */
  static getInstance() {
    if (!_InfinityStableHookFactory.instance) {
      _InfinityStableHookFactory.instance = new _InfinityStableHookFactory();
    }
    return _InfinityStableHookFactory.instance;
  }
  /**
   * Get the hook factory address for a specific chain
   */
  static getHookFactoryAddress(chainId) {
    if (!isInfinityStableSupported(chainId)) {
      throw new Error(`Unsupported chainId: ${chainId}`);
    }
    const address = HOOK_INFINITY_STABLE_HOOK_FACTORY_ADDRESS[chainId];
    if (!address) {
      throw new Error(`HOOK_INFINITY_STABLE_HOOK_FACTORY_ADDRESS not found for chainId: ${chainId}`);
    }
    return address;
  }
  /**
   * Get the number of pools from the hook factory contract
   * @param publicClient The viem public client for making contract calls
   * @param chainId The chain ID
   * @returns Number of pools in the factory
   */
  static async getPoolCount(publicClient, chainId) {
    if (!isInfinityStableSupported(chainId)) {
      throw new Error(`Unsupported chainId: ${chainId}`);
    }
    const hookFactoryAddress = _InfinityStableHookFactory.getHookFactoryAddress(chainId);
    try {
      const poolCountResult = await publicClient.readContract({
        address: hookFactoryAddress,
        abi: infinityStableHookFactoryABI,
        functionName: "pool_count"
      });
      return Number(poolCountResult?.toString());
    } catch (error) {
      throw new Error(`pool_count() call failed: ${error}`);
    }
  }
  /**
   * Get pool addresses in batch using multicall
   * @param publicClient The viem public client for making contract calls
   * @param chainId The chain ID
   * @param poolCount Number of pools to fetch
   * @returns Array of pool addresses
   */
  static async getPoolAddressesBatch(publicClient, chainId, poolCount) {
    if (!isInfinityStableSupported(chainId)) {
      throw new Error(`Unsupported chainId: ${chainId}`);
    }
    if (poolCount === 0) {
      return [];
    }
    const hookFactoryAddress = _InfinityStableHookFactory.getHookFactoryAddress(chainId);
    const poolCalls = Array.from({ length: poolCount }, (_, i) => ({
      abi: infinityStableHookFactoryABI,
      address: hookFactoryAddress,
      functionName: "pool_list",
      args: [BigInt(i)]
    }));
    const poolResults = await publicClient.multicall({
      contracts: poolCalls,
      allowFailure: true
    });
    const pools = poolResults.map((result) => result.result).filter((address) => address !== void 0);
    return pools;
  }
  /**
   * Get all pools from the hook factory contract
   * @param publicClient The viem public client for making contract calls
   * @param chainId The chain ID
   * @returns Array of pool addresses
   */
  static async getPools(publicClient, chainId) {
    if (!isInfinityStableSupported(chainId)) {
      throw new Error(`Unsupported chainId: ${chainId}`);
    }
    const hookFactoryAddress = _InfinityStableHookFactory.getHookFactoryAddress(chainId);
    try {
      let poolCount = 0;
      try {
        const poolCountResult = await publicClient.readContract({
          address: hookFactoryAddress,
          abi: infinityStableHookFactoryABI,
          functionName: "pool_count"
        });
        poolCount = Number(poolCountResult?.toString());
      } catch (error) {
        throw new Error(`pool_count() call failed: ${error}`);
      }
      if (poolCount === 0) {
        return [];
      }
      const pools = [];
      for (let i = 0; i < poolCount; i++) {
        const pool = await publicClient.readContract({
          address: hookFactoryAddress,
          abi: infinityStableHookFactoryABI,
          functionName: "pool_list",
          args: [BigInt(i)]
        });
        pools.push(pool);
      }
      return pools;
    } catch (error) {
      console.error("InfinityStableHookFactory Error: getPools() call failed", error);
      return [];
    }
  }
};
var InfinityStableHookFactory = _InfinityStableHookFactory;
InfinityStableHookFactory.instance = null;

exports.ADDRESS_ZERO = ADDRESS_ZERO;
exports.CL_STABLE_SWAP_POOL_FACTORY_ADDRESS = CL_STABLE_SWAP_POOL_FACTORY_ADDRESS;
exports.DEFAULT_ASSET_TYPE = DEFAULT_ASSET_TYPE;
exports.DEFAULT_IMPLEMENTATION_IDX = DEFAULT_IMPLEMENTATION_IDX;
exports.HOOK_INFINITY_STABLE_HOOK_FACTORY_ADDRESS = HOOK_INFINITY_STABLE_HOOK_FACTORY_ADDRESS;
exports.INFINITY_STABLE_POOL_FEE_DENOMINATOR = INFINITY_STABLE_POOL_FEE_DENOMINATOR;
exports.InfinityStableHook = InfinityStableHook;
exports.InfinityStableHookFactory = InfinityStableHookFactory;
exports.InfinityStablePoolFactory = InfinityStablePoolFactory;
exports.MAX_A = MAX_A;
exports.MAX_FEE = MAX_FEE;
exports.MIN_A = MIN_A;
exports.NULL_METHOD_ID = NULL_METHOD_ID;
exports.PRESET_CONFIGS = PRESET_CONFIGS;
exports.TokenType = TokenType;
exports.feeToPercentage = feeToPercentage;
exports.generatePoolName = generatePoolName;
exports.generatePoolSymbol = generatePoolSymbol;
exports.getHookAddressFromReceipt = getHookAddressFromReceipt;
exports.getPoolIdFromReceipt = getPoolIdFromReceipt;
exports.getSortedTokenAddresses = getSortedTokenAddresses;
exports.infinityStablePoolFactoryABI = infinityStablePoolFactoryABI;
exports.isInfinityStableSupported = isInfinityStableSupported;
exports.percentageToFee = percentageToFee;
exports.sortCurrencies = sortCurrencies2;
exports.tokenConfigsToArrays = tokenConfigsToArrays;
exports.validateAmplification = validateAmplification;
exports.validateCurrency = validateCurrency;
exports.validateCurrencyPair = validateCurrencyPair;
exports.validateFee = validateFee;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=index.cjs.map