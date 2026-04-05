export declare const infinityStableHookABI: readonly [{
    readonly type: "constructor";
    readonly inputs: readonly [{
        readonly name: "_name";
        readonly type: "string";
    }, {
        readonly name: "_symbol";
        readonly type: "string";
    }, {
        readonly name: "_A";
        readonly type: "uint256";
    }, {
        readonly name: "_fee";
        readonly type: "uint256";
    }, {
        readonly name: "_offpeg_fee_multiplier";
        readonly type: "uint256";
    }, {
        readonly name: "_oracle_helper";
        readonly type: "address";
    }, {
        readonly name: "_coins";
        readonly type: "address[]";
    }, {
        readonly name: "_rate_multipliers";
        readonly type: "uint256[]";
    }, {
        readonly name: "_asset_types";
        readonly type: "uint8[]";
    }, {
        readonly name: "_method_ids";
        readonly type: "bytes4[]";
    }, {
        readonly name: "_oracles";
        readonly type: "address[]";
    }];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "A";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "A_precise";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "D_ma_time";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "D_oracle";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "MIN_RAMP_TIME";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "N_COINS";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "add_liquidity";
    readonly inputs: readonly [{
        readonly name: "_amount0";
        readonly type: "uint256";
    }, {
        readonly name: "_amount1";
        readonly type: "uint256";
    }, {
        readonly name: "_min_mint_amount";
        readonly type: "uint256";
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "add_liquidity";
    readonly inputs: readonly [{
        readonly name: "_amount0";
        readonly type: "uint256";
    }, {
        readonly name: "_amount1";
        readonly type: "uint256";
    }, {
        readonly name: "_min_mint_amount";
        readonly type: "uint256";
    }, {
        readonly name: "_receiver";
        readonly type: "address";
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "admin_balances";
    readonly inputs: readonly [{
        readonly name: "arg0";
        readonly type: "uint256";
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "admin_fee";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "allowance";
    readonly inputs: readonly [{
        readonly name: "arg0";
        readonly type: "address";
    }, {
        readonly name: "arg1";
        readonly type: "address";
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "approve";
    readonly inputs: readonly [{
        readonly name: "_spender";
        readonly type: "address";
    }, {
        readonly name: "_value";
        readonly type: "uint256";
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "bool";
    }];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "balanceOf";
    readonly inputs: readonly [{
        readonly name: "arg0";
        readonly type: "address";
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "balances";
    readonly inputs: readonly [{
        readonly name: "i";
        readonly type: "uint256";
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "beforeAddLiquidity";
    readonly inputs: readonly [{
        readonly name: "sender";
        readonly type: "address";
    }, {
        readonly name: "key";
        readonly type: "tuple";
        readonly components: readonly [{
            readonly name: "currency0";
            readonly type: "address";
        }, {
            readonly name: "currency1";
            readonly type: "address";
        }, {
            readonly name: "hooks";
            readonly type: "address";
        }, {
            readonly name: "poolManager";
            readonly type: "address";
        }, {
            readonly name: "fee";
            readonly type: "uint24";
        }, {
            readonly name: "parameters";
            readonly type: "bytes32";
        }];
    }, {
        readonly name: "params";
        readonly type: "tuple";
        readonly components: readonly [{
            readonly name: "tickLower";
            readonly type: "int24";
        }, {
            readonly name: "tickUpper";
            readonly type: "int24";
        }, {
            readonly name: "liquidityDelta";
            readonly type: "int256";
        }, {
            readonly name: "salt";
            readonly type: "bytes32";
        }];
    }, {
        readonly name: "hookData";
        readonly type: "bytes";
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "bytes4";
    }];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "beforeInitialize";
    readonly inputs: readonly [{
        readonly name: "sender";
        readonly type: "address";
    }, {
        readonly name: "key";
        readonly type: "tuple";
        readonly components: readonly [{
            readonly name: "currency0";
            readonly type: "address";
        }, {
            readonly name: "currency1";
            readonly type: "address";
        }, {
            readonly name: "hooks";
            readonly type: "address";
        }, {
            readonly name: "poolManager";
            readonly type: "address";
        }, {
            readonly name: "fee";
            readonly type: "uint24";
        }, {
            readonly name: "parameters";
            readonly type: "bytes32";
        }];
    }, {
        readonly name: "sqrtPriceX96";
        readonly type: "uint160";
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "bytes4";
    }];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "beforeRemoveLiquidity";
    readonly inputs: readonly [{
        readonly name: "sender";
        readonly type: "address";
    }, {
        readonly name: "key";
        readonly type: "tuple";
        readonly components: readonly [{
            readonly name: "currency0";
            readonly type: "address";
        }, {
            readonly name: "currency1";
            readonly type: "address";
        }, {
            readonly name: "hooks";
            readonly type: "address";
        }, {
            readonly name: "poolManager";
            readonly type: "address";
        }, {
            readonly name: "fee";
            readonly type: "uint24";
        }, {
            readonly name: "parameters";
            readonly type: "bytes32";
        }];
    }, {
        readonly name: "params";
        readonly type: "tuple";
        readonly components: readonly [{
            readonly name: "tickLower";
            readonly type: "int24";
        }, {
            readonly name: "tickUpper";
            readonly type: "int24";
        }, {
            readonly name: "liquidityDelta";
            readonly type: "int256";
        }, {
            readonly name: "salt";
            readonly type: "bytes32";
        }];
    }, {
        readonly name: "hookData";
        readonly type: "bytes";
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "bytes4";
    }];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "beforeSwap";
    readonly inputs: readonly [{
        readonly name: "sender";
        readonly type: "address";
    }, {
        readonly name: "key";
        readonly type: "tuple";
        readonly components: readonly [{
            readonly name: "currency0";
            readonly type: "address";
        }, {
            readonly name: "currency1";
            readonly type: "address";
        }, {
            readonly name: "hooks";
            readonly type: "address";
        }, {
            readonly name: "poolManager";
            readonly type: "address";
        }, {
            readonly name: "fee";
            readonly type: "uint24";
        }, {
            readonly name: "parameters";
            readonly type: "bytes32";
        }];
    }, {
        readonly name: "params";
        readonly type: "tuple";
        readonly components: readonly [{
            readonly name: "zeroForOne";
            readonly type: "bool";
        }, {
            readonly name: "amountSpecified";
            readonly type: "int256";
        }, {
            readonly name: "sqrtPriceLimitX96";
            readonly type: "uint160";
        }];
    }, {
        readonly name: "hookData";
        readonly type: "bytes";
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "bytes4";
    }, {
        readonly name: "";
        readonly type: "int256";
    }, {
        readonly name: "";
        readonly type: "uint24";
    }];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "calc_token_amount";
    readonly inputs: readonly [{
        readonly name: "_amounts";
        readonly type: "uint256[]";
    }, {
        readonly name: "_is_deposit";
        readonly type: "bool";
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "calc_withdraw_one_coin";
    readonly inputs: readonly [{
        readonly name: "_burn_amount";
        readonly type: "uint256";
    }, {
        readonly name: "i";
        readonly type: "int128";
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "coins";
    readonly inputs: readonly [{
        readonly name: "arg0";
        readonly type: "uint256";
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "decimals";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint8";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "dynamic_fee";
    readonly inputs: readonly [{
        readonly name: "i";
        readonly type: "int128";
    }, {
        readonly name: "j";
        readonly type: "int128";
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "ema_price";
    readonly inputs: readonly [{
        readonly name: "i";
        readonly type: "uint256";
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "fee";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "future_A";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "future_A_time";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "getHooksRegistrationBitmap";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint16";
    }];
    readonly stateMutability: "pure";
}, {
    readonly type: "function";
    readonly name: "get_balances";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint256[]";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "get_dx";
    readonly inputs: readonly [{
        readonly name: "i";
        readonly type: "int128";
    }, {
        readonly name: "j";
        readonly type: "int128";
    }, {
        readonly name: "dy";
        readonly type: "uint256";
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "get_dy";
    readonly inputs: readonly [{
        readonly name: "i";
        readonly type: "int128";
    }, {
        readonly name: "j";
        readonly type: "int128";
    }, {
        readonly name: "dx";
        readonly type: "uint256";
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "get_p";
    readonly inputs: readonly [{
        readonly name: "i";
        readonly type: "uint256";
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "get_virtual_price";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "initial_A";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "initial_A_time";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "is_binded";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "bool";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "last_price";
    readonly inputs: readonly [{
        readonly name: "i";
        readonly type: "uint256";
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "lockAcquired";
    readonly inputs: readonly [{
        readonly name: "data";
        readonly type: "bytes";
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "bytes";
    }];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "lock_acquired_add_liquidity";
    readonly inputs: readonly [{
        readonly name: "_sender";
        readonly type: "address";
    }, {
        readonly name: "_amount0";
        readonly type: "uint256";
    }, {
        readonly name: "_amount1";
        readonly type: "uint256";
    }, {
        readonly name: "_min_mint_amount";
        readonly type: "uint256";
    }, {
        readonly name: "_receiver";
        readonly type: "address";
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "bytes";
    }];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "lock_acquired_remove_liquidity";
    readonly inputs: readonly [{
        readonly name: "_sender";
        readonly type: "address";
    }, {
        readonly name: "_burn_amount";
        readonly type: "uint256";
    }, {
        readonly name: "_min_amount0";
        readonly type: "uint256";
    }, {
        readonly name: "_min_amount1";
        readonly type: "uint256";
    }, {
        readonly name: "_receiver";
        readonly type: "address";
    }, {
        readonly name: "_claim_admin_fees";
        readonly type: "bool";
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "bytes";
    }];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "lock_acquired_remove_liquidity_imbalance";
    readonly inputs: readonly [{
        readonly name: "_sender";
        readonly type: "address";
    }, {
        readonly name: "_amount0";
        readonly type: "uint256";
    }, {
        readonly name: "_amount1";
        readonly type: "uint256";
    }, {
        readonly name: "_max_burn_amount";
        readonly type: "uint256";
    }, {
        readonly name: "_receiver";
        readonly type: "address";
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "bytes";
    }];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "lock_acquired_remove_liquidity_one_coin";
    readonly inputs: readonly [{
        readonly name: "_sender";
        readonly type: "address";
    }, {
        readonly name: "_burn_amount";
        readonly type: "uint256";
    }, {
        readonly name: "_zero_or_one";
        readonly type: "bool";
    }, {
        readonly name: "_min_received";
        readonly type: "uint256";
    }, {
        readonly name: "_receiver";
        readonly type: "address";
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "bytes";
    }];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "lock_acquired_withdraw_admin_fees";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "bytes";
    }];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "ma_exp_time";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "ma_last_time";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "name";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "string";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "offpeg_fee_multiplier";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "oracle";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "pool_manager";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "price_oracle";
    readonly inputs: readonly [{
        readonly name: "i";
        readonly type: "uint256";
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "ramp_A";
    readonly inputs: readonly [{
        readonly name: "_future_A";
        readonly type: "uint256";
    }, {
        readonly name: "_future_time";
        readonly type: "uint256";
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "remove_liquidity";
    readonly inputs: readonly [{
        readonly name: "_burn_amount";
        readonly type: "uint256";
    }, {
        readonly name: "_min_amount0";
        readonly type: "uint256";
    }, {
        readonly name: "_min_amount1";
        readonly type: "uint256";
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint256";
    }, {
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "remove_liquidity";
    readonly inputs: readonly [{
        readonly name: "_burn_amount";
        readonly type: "uint256";
    }, {
        readonly name: "_min_amount0";
        readonly type: "uint256";
    }, {
        readonly name: "_min_amount1";
        readonly type: "uint256";
    }, {
        readonly name: "_receiver";
        readonly type: "address";
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint256";
    }, {
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "remove_liquidity";
    readonly inputs: readonly [{
        readonly name: "_burn_amount";
        readonly type: "uint256";
    }, {
        readonly name: "_min_amount0";
        readonly type: "uint256";
    }, {
        readonly name: "_min_amount1";
        readonly type: "uint256";
    }, {
        readonly name: "_receiver";
        readonly type: "address";
    }, {
        readonly name: "_claim_admin_fees";
        readonly type: "bool";
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint256";
    }, {
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "remove_liquidity_imbalance";
    readonly inputs: readonly [{
        readonly name: "_amount0";
        readonly type: "uint256";
    }, {
        readonly name: "_amount1";
        readonly type: "uint256";
    }, {
        readonly name: "_max_burn_amount";
        readonly type: "uint256";
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "remove_liquidity_imbalance";
    readonly inputs: readonly [{
        readonly name: "_amount0";
        readonly type: "uint256";
    }, {
        readonly name: "_amount1";
        readonly type: "uint256";
    }, {
        readonly name: "_max_burn_amount";
        readonly type: "uint256";
    }, {
        readonly name: "_receiver";
        readonly type: "address";
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "remove_liquidity_one_coin";
    readonly inputs: readonly [{
        readonly name: "_burn_amount";
        readonly type: "uint256";
    }, {
        readonly name: "_zero_or_one";
        readonly type: "bool";
    }, {
        readonly name: "_min_received";
        readonly type: "uint256";
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "remove_liquidity_one_coin";
    readonly inputs: readonly [{
        readonly name: "_burn_amount";
        readonly type: "uint256";
    }, {
        readonly name: "_zero_or_one";
        readonly type: "bool";
    }, {
        readonly name: "_min_received";
        readonly type: "uint256";
    }, {
        readonly name: "_receiver";
        readonly type: "address";
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "set_ma_exp_time";
    readonly inputs: readonly [{
        readonly name: "_ma_exp_time";
        readonly type: "uint256";
    }, {
        readonly name: "_D_ma_time";
        readonly type: "uint256";
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "set_new_fee";
    readonly inputs: readonly [{
        readonly name: "_new_fee";
        readonly type: "uint256";
    }, {
        readonly name: "_new_offpeg_fee_multiplier";
        readonly type: "uint256";
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "stop_ramp_A";
    readonly inputs: readonly [];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "stored_rates";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint256[]";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "symbol";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "string";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "totalSupply";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "transfer";
    readonly inputs: readonly [{
        readonly name: "_to";
        readonly type: "address";
    }, {
        readonly name: "_value";
        readonly type: "uint256";
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "bool";
    }];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "transferFrom";
    readonly inputs: readonly [{
        readonly name: "_from";
        readonly type: "address";
    }, {
        readonly name: "_to";
        readonly type: "address";
    }, {
        readonly name: "_value";
        readonly type: "uint256";
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "bool";
    }];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "vault";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "withdraw_admin_fees";
    readonly inputs: readonly [];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "event";
    readonly name: "AddLiquidity";
    readonly inputs: readonly [{
        readonly name: "provider";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "token_amounts";
        readonly type: "uint256[]";
        readonly indexed: false;
    }, {
        readonly name: "fees";
        readonly type: "uint256[]";
        readonly indexed: false;
    }, {
        readonly name: "invariant";
        readonly type: "uint256";
        readonly indexed: false;
    }, {
        readonly name: "token_supply";
        readonly type: "uint256";
        readonly indexed: false;
    }];
    readonly anonymous: false;
}, {
    readonly type: "event";
    readonly name: "AdminFeesReceiverUpdated";
    readonly inputs: readonly [{
        readonly name: "new_admin_fees_receiver";
        readonly type: "address";
        readonly indexed: true;
    }];
    readonly anonymous: false;
}, {
    readonly type: "event";
    readonly name: "ApplyNewFee";
    readonly inputs: readonly [{
        readonly name: "fee";
        readonly type: "uint256";
        readonly indexed: false;
    }, {
        readonly name: "offpeg_fee_multiplier";
        readonly type: "uint256";
        readonly indexed: false;
    }];
    readonly anonymous: false;
}, {
    readonly type: "event";
    readonly name: "Approval";
    readonly inputs: readonly [{
        readonly name: "owner";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "spender";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "value";
        readonly type: "uint256";
        readonly indexed: false;
    }];
    readonly anonymous: false;
}, {
    readonly type: "event";
    readonly name: "RampA";
    readonly inputs: readonly [{
        readonly name: "old_A";
        readonly type: "uint256";
        readonly indexed: false;
    }, {
        readonly name: "new_A";
        readonly type: "uint256";
        readonly indexed: false;
    }, {
        readonly name: "initial_time";
        readonly type: "uint256";
        readonly indexed: false;
    }, {
        readonly name: "future_time";
        readonly type: "uint256";
        readonly indexed: false;
    }];
    readonly anonymous: false;
}, {
    readonly type: "event";
    readonly name: "RemoveLiquidity";
    readonly inputs: readonly [{
        readonly name: "provider";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "token_amounts";
        readonly type: "uint256[]";
        readonly indexed: false;
    }, {
        readonly name: "fees";
        readonly type: "uint256[]";
        readonly indexed: false;
    }, {
        readonly name: "token_supply";
        readonly type: "uint256";
        readonly indexed: false;
    }];
    readonly anonymous: false;
}, {
    readonly type: "event";
    readonly name: "RemoveLiquidityImbalance";
    readonly inputs: readonly [{
        readonly name: "provider";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "token_amounts";
        readonly type: "uint256[]";
        readonly indexed: false;
    }, {
        readonly name: "fees";
        readonly type: "uint256[]";
        readonly indexed: false;
    }, {
        readonly name: "invariant";
        readonly type: "uint256";
        readonly indexed: false;
    }, {
        readonly name: "token_supply";
        readonly type: "uint256";
        readonly indexed: false;
    }];
    readonly anonymous: false;
}, {
    readonly type: "event";
    readonly name: "RemoveLiquidityOne";
    readonly inputs: readonly [{
        readonly name: "provider";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "token_id";
        readonly type: "int128";
        readonly indexed: false;
    }, {
        readonly name: "token_amount";
        readonly type: "uint256";
        readonly indexed: false;
    }, {
        readonly name: "coin_amount";
        readonly type: "uint256";
        readonly indexed: false;
    }, {
        readonly name: "token_supply";
        readonly type: "uint256";
        readonly indexed: false;
    }];
    readonly anonymous: false;
}, {
    readonly type: "event";
    readonly name: "SetNewMATime";
    readonly inputs: readonly [{
        readonly name: "ma_exp_time";
        readonly type: "uint256";
        readonly indexed: false;
    }, {
        readonly name: "D_ma_time";
        readonly type: "uint256";
        readonly indexed: false;
    }];
    readonly anonymous: false;
}, {
    readonly type: "event";
    readonly name: "StopRampA";
    readonly inputs: readonly [{
        readonly name: "A";
        readonly type: "uint256";
        readonly indexed: false;
    }, {
        readonly name: "t";
        readonly type: "uint256";
        readonly indexed: false;
    }];
    readonly anonymous: false;
}, {
    readonly type: "event";
    readonly name: "TokenExchange";
    readonly inputs: readonly [{
        readonly name: "buyer";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "sold_id";
        readonly type: "int128";
        readonly indexed: false;
    }, {
        readonly name: "tokens_sold";
        readonly type: "uint256";
        readonly indexed: false;
    }, {
        readonly name: "bought_id";
        readonly type: "int128";
        readonly indexed: false;
    }, {
        readonly name: "tokens_bought";
        readonly type: "uint256";
        readonly indexed: false;
    }];
    readonly anonymous: false;
}, {
    readonly type: "event";
    readonly name: "Transfer";
    readonly inputs: readonly [{
        readonly name: "sender";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "receiver";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "value";
        readonly type: "uint256";
        readonly indexed: false;
    }];
    readonly anonymous: false;
}];
//# sourceMappingURL=infinityStableHookABI.d.ts.map