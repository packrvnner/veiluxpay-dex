export declare const CLPoolManagerAbi: readonly [{
    readonly type: "constructor";
    readonly inputs: readonly [{
        readonly name: "_vault";
        readonly type: "address";
        readonly internalType: "contract IVault";
    }];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "collectProtocolFees";
    readonly inputs: readonly [{
        readonly name: "recipient";
        readonly type: "address";
        readonly internalType: "address";
    }, {
        readonly name: "currency";
        readonly type: "address";
        readonly internalType: "Currency";
    }, {
        readonly name: "amount";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly outputs: readonly [{
        readonly name: "amountCollected";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "donate";
    readonly inputs: readonly [{
        readonly name: "key";
        readonly type: "tuple";
        readonly internalType: "struct PoolKey";
        readonly components: readonly [{
            readonly name: "currency0";
            readonly type: "address";
            readonly internalType: "Currency";
        }, {
            readonly name: "currency1";
            readonly type: "address";
            readonly internalType: "Currency";
        }, {
            readonly name: "hooks";
            readonly type: "address";
            readonly internalType: "contract IHooks";
        }, {
            readonly name: "poolManager";
            readonly type: "address";
            readonly internalType: "contract IPoolManager";
        }, {
            readonly name: "fee";
            readonly type: "uint24";
            readonly internalType: "uint24";
        }, {
            readonly name: "parameters";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
    }, {
        readonly name: "amount0";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }, {
        readonly name: "amount1";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }, {
        readonly name: "hookData";
        readonly type: "bytes";
        readonly internalType: "bytes";
    }];
    readonly outputs: readonly [{
        readonly name: "delta";
        readonly type: "int256";
        readonly internalType: "BalanceDelta";
    }];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "extsload";
    readonly inputs: readonly [{
        readonly name: "slot";
        readonly type: "bytes32";
        readonly internalType: "bytes32";
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "bytes32";
        readonly internalType: "bytes32";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "extsload";
    readonly inputs: readonly [{
        readonly name: "slots";
        readonly type: "bytes32[]";
        readonly internalType: "bytes32[]";
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "bytes32[]";
        readonly internalType: "bytes32[]";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "getFeeGrowthGlobals";
    readonly inputs: readonly [{
        readonly name: "id";
        readonly type: "bytes32";
        readonly internalType: "PoolId";
    }];
    readonly outputs: readonly [{
        readonly name: "feeGrowthGlobal0x128";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }, {
        readonly name: "feeGrowthGlobal1x128";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "getLiquidity";
    readonly inputs: readonly [{
        readonly name: "id";
        readonly type: "bytes32";
        readonly internalType: "PoolId";
    }, {
        readonly name: "_owner";
        readonly type: "address";
        readonly internalType: "address";
    }, {
        readonly name: "tickLower";
        readonly type: "int24";
        readonly internalType: "int24";
    }, {
        readonly name: "tickUpper";
        readonly type: "int24";
        readonly internalType: "int24";
    }, {
        readonly name: "salt";
        readonly type: "bytes32";
        readonly internalType: "bytes32";
    }];
    readonly outputs: readonly [{
        readonly name: "liquidity";
        readonly type: "uint128";
        readonly internalType: "uint128";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "getLiquidity";
    readonly inputs: readonly [{
        readonly name: "id";
        readonly type: "bytes32";
        readonly internalType: "PoolId";
    }];
    readonly outputs: readonly [{
        readonly name: "liquidity";
        readonly type: "uint128";
        readonly internalType: "uint128";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "getPoolBitmapInfo";
    readonly inputs: readonly [{
        readonly name: "id";
        readonly type: "bytes32";
        readonly internalType: "PoolId";
    }, {
        readonly name: "word";
        readonly type: "int16";
        readonly internalType: "int16";
    }];
    readonly outputs: readonly [{
        readonly name: "tickBitmap";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "getPoolTickInfo";
    readonly inputs: readonly [{
        readonly name: "id";
        readonly type: "bytes32";
        readonly internalType: "PoolId";
    }, {
        readonly name: "tick";
        readonly type: "int24";
        readonly internalType: "int24";
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "tuple";
        readonly internalType: "struct Tick.Info";
        readonly components: readonly [{
            readonly name: "liquidityGross";
            readonly type: "uint128";
            readonly internalType: "uint128";
        }, {
            readonly name: "liquidityNet";
            readonly type: "int128";
            readonly internalType: "int128";
        }, {
            readonly name: "feeGrowthOutside0X128";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "feeGrowthOutside1X128";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "getPosition";
    readonly inputs: readonly [{
        readonly name: "id";
        readonly type: "bytes32";
        readonly internalType: "PoolId";
    }, {
        readonly name: "owner";
        readonly type: "address";
        readonly internalType: "address";
    }, {
        readonly name: "tickLower";
        readonly type: "int24";
        readonly internalType: "int24";
    }, {
        readonly name: "tickUpper";
        readonly type: "int24";
        readonly internalType: "int24";
    }, {
        readonly name: "salt";
        readonly type: "bytes32";
        readonly internalType: "bytes32";
    }];
    readonly outputs: readonly [{
        readonly name: "position";
        readonly type: "tuple";
        readonly internalType: "struct CLPosition.Info";
        readonly components: readonly [{
            readonly name: "liquidity";
            readonly type: "uint128";
            readonly internalType: "uint128";
        }, {
            readonly name: "feeGrowthInside0LastX128";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "feeGrowthInside1LastX128";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "getSlot0";
    readonly inputs: readonly [{
        readonly name: "id";
        readonly type: "bytes32";
        readonly internalType: "PoolId";
    }];
    readonly outputs: readonly [{
        readonly name: "sqrtPriceX96";
        readonly type: "uint160";
        readonly internalType: "uint160";
    }, {
        readonly name: "tick";
        readonly type: "int24";
        readonly internalType: "int24";
    }, {
        readonly name: "protocolFee";
        readonly type: "uint24";
        readonly internalType: "uint24";
    }, {
        readonly name: "lpFee";
        readonly type: "uint24";
        readonly internalType: "uint24";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "initialize";
    readonly inputs: readonly [{
        readonly name: "key";
        readonly type: "tuple";
        readonly internalType: "struct PoolKey";
        readonly components: readonly [{
            readonly name: "currency0";
            readonly type: "address";
            readonly internalType: "Currency";
        }, {
            readonly name: "currency1";
            readonly type: "address";
            readonly internalType: "Currency";
        }, {
            readonly name: "hooks";
            readonly type: "address";
            readonly internalType: "contract IHooks";
        }, {
            readonly name: "poolManager";
            readonly type: "address";
            readonly internalType: "contract IPoolManager";
        }, {
            readonly name: "fee";
            readonly type: "uint24";
            readonly internalType: "uint24";
        }, {
            readonly name: "parameters";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
    }, {
        readonly name: "sqrtPriceX96";
        readonly type: "uint160";
        readonly internalType: "uint160";
    }];
    readonly outputs: readonly [{
        readonly name: "tick";
        readonly type: "int24";
        readonly internalType: "int24";
    }];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "modifyLiquidity";
    readonly inputs: readonly [{
        readonly name: "key";
        readonly type: "tuple";
        readonly internalType: "struct PoolKey";
        readonly components: readonly [{
            readonly name: "currency0";
            readonly type: "address";
            readonly internalType: "Currency";
        }, {
            readonly name: "currency1";
            readonly type: "address";
            readonly internalType: "Currency";
        }, {
            readonly name: "hooks";
            readonly type: "address";
            readonly internalType: "contract IHooks";
        }, {
            readonly name: "poolManager";
            readonly type: "address";
            readonly internalType: "contract IPoolManager";
        }, {
            readonly name: "fee";
            readonly type: "uint24";
            readonly internalType: "uint24";
        }, {
            readonly name: "parameters";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
    }, {
        readonly name: "params";
        readonly type: "tuple";
        readonly internalType: "struct ICLPoolManager.ModifyLiquidityParams";
        readonly components: readonly [{
            readonly name: "tickLower";
            readonly type: "int24";
            readonly internalType: "int24";
        }, {
            readonly name: "tickUpper";
            readonly type: "int24";
            readonly internalType: "int24";
        }, {
            readonly name: "liquidityDelta";
            readonly type: "int256";
            readonly internalType: "int256";
        }, {
            readonly name: "salt";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
    }, {
        readonly name: "hookData";
        readonly type: "bytes";
        readonly internalType: "bytes";
    }];
    readonly outputs: readonly [{
        readonly name: "delta";
        readonly type: "int256";
        readonly internalType: "BalanceDelta";
    }, {
        readonly name: "feeDelta";
        readonly type: "int256";
        readonly internalType: "BalanceDelta";
    }];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "owner";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "address";
        readonly internalType: "address";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "pause";
    readonly inputs: readonly [];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "paused";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "res";
        readonly type: "bool";
        readonly internalType: "bool";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "poolIdToPoolKey";
    readonly inputs: readonly [{
        readonly name: "id";
        readonly type: "bytes32";
        readonly internalType: "PoolId";
    }];
    readonly outputs: readonly [{
        readonly name: "currency0";
        readonly type: "address";
        readonly internalType: "Currency";
    }, {
        readonly name: "currency1";
        readonly type: "address";
        readonly internalType: "Currency";
    }, {
        readonly name: "hooks";
        readonly type: "address";
        readonly internalType: "contract IHooks";
    }, {
        readonly name: "poolManager";
        readonly type: "address";
        readonly internalType: "contract IPoolManager";
    }, {
        readonly name: "fee";
        readonly type: "uint24";
        readonly internalType: "uint24";
    }, {
        readonly name: "parameters";
        readonly type: "bytes32";
        readonly internalType: "bytes32";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "protocolFeeController";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "address";
        readonly internalType: "contract IProtocolFeeController";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "protocolFeesAccrued";
    readonly inputs: readonly [{
        readonly name: "currency";
        readonly type: "address";
        readonly internalType: "Currency";
    }];
    readonly outputs: readonly [{
        readonly name: "amount";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "setProtocolFee";
    readonly inputs: readonly [{
        readonly name: "key";
        readonly type: "tuple";
        readonly internalType: "struct PoolKey";
        readonly components: readonly [{
            readonly name: "currency0";
            readonly type: "address";
            readonly internalType: "Currency";
        }, {
            readonly name: "currency1";
            readonly type: "address";
            readonly internalType: "Currency";
        }, {
            readonly name: "hooks";
            readonly type: "address";
            readonly internalType: "contract IHooks";
        }, {
            readonly name: "poolManager";
            readonly type: "address";
            readonly internalType: "contract IPoolManager";
        }, {
            readonly name: "fee";
            readonly type: "uint24";
            readonly internalType: "uint24";
        }, {
            readonly name: "parameters";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
    }, {
        readonly name: "newProtocolFee";
        readonly type: "uint24";
        readonly internalType: "uint24";
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "setProtocolFeeController";
    readonly inputs: readonly [{
        readonly name: "controller";
        readonly type: "address";
        readonly internalType: "contract IProtocolFeeController";
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "swap";
    readonly inputs: readonly [{
        readonly name: "key";
        readonly type: "tuple";
        readonly internalType: "struct PoolKey";
        readonly components: readonly [{
            readonly name: "currency0";
            readonly type: "address";
            readonly internalType: "Currency";
        }, {
            readonly name: "currency1";
            readonly type: "address";
            readonly internalType: "Currency";
        }, {
            readonly name: "hooks";
            readonly type: "address";
            readonly internalType: "contract IHooks";
        }, {
            readonly name: "poolManager";
            readonly type: "address";
            readonly internalType: "contract IPoolManager";
        }, {
            readonly name: "fee";
            readonly type: "uint24";
            readonly internalType: "uint24";
        }, {
            readonly name: "parameters";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
    }, {
        readonly name: "params";
        readonly type: "tuple";
        readonly internalType: "struct ICLPoolManager.SwapParams";
        readonly components: readonly [{
            readonly name: "zeroForOne";
            readonly type: "bool";
            readonly internalType: "bool";
        }, {
            readonly name: "amountSpecified";
            readonly type: "int256";
            readonly internalType: "int256";
        }, {
            readonly name: "sqrtPriceLimitX96";
            readonly type: "uint160";
            readonly internalType: "uint160";
        }];
    }, {
        readonly name: "hookData";
        readonly type: "bytes";
        readonly internalType: "bytes";
    }];
    readonly outputs: readonly [{
        readonly name: "delta";
        readonly type: "int256";
        readonly internalType: "BalanceDelta";
    }];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "transferOwnership";
    readonly inputs: readonly [{
        readonly name: "newOwner";
        readonly type: "address";
        readonly internalType: "address";
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "unpause";
    readonly inputs: readonly [];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "updateDynamicLPFee";
    readonly inputs: readonly [{
        readonly name: "key";
        readonly type: "tuple";
        readonly internalType: "struct PoolKey";
        readonly components: readonly [{
            readonly name: "currency0";
            readonly type: "address";
            readonly internalType: "Currency";
        }, {
            readonly name: "currency1";
            readonly type: "address";
            readonly internalType: "Currency";
        }, {
            readonly name: "hooks";
            readonly type: "address";
            readonly internalType: "contract IHooks";
        }, {
            readonly name: "poolManager";
            readonly type: "address";
            readonly internalType: "contract IPoolManager";
        }, {
            readonly name: "fee";
            readonly type: "uint24";
            readonly internalType: "uint24";
        }, {
            readonly name: "parameters";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
    }, {
        readonly name: "newDynamicLPFee";
        readonly type: "uint24";
        readonly internalType: "uint24";
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "vault";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "address";
        readonly internalType: "contract IVault";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "event";
    readonly name: "Donate";
    readonly inputs: readonly [{
        readonly name: "id";
        readonly type: "bytes32";
        readonly indexed: true;
        readonly internalType: "PoolId";
    }, {
        readonly name: "sender";
        readonly type: "address";
        readonly indexed: true;
        readonly internalType: "address";
    }, {
        readonly name: "amount0";
        readonly type: "uint256";
        readonly indexed: false;
        readonly internalType: "uint256";
    }, {
        readonly name: "amount1";
        readonly type: "uint256";
        readonly indexed: false;
        readonly internalType: "uint256";
    }, {
        readonly name: "tick";
        readonly type: "int24";
        readonly indexed: false;
        readonly internalType: "int24";
    }];
    readonly anonymous: false;
}, {
    readonly type: "event";
    readonly name: "DynamicLPFeeUpdated";
    readonly inputs: readonly [{
        readonly name: "id";
        readonly type: "bytes32";
        readonly indexed: true;
        readonly internalType: "PoolId";
    }, {
        readonly name: "dynamicLPFee";
        readonly type: "uint24";
        readonly indexed: false;
        readonly internalType: "uint24";
    }];
    readonly anonymous: false;
}, {
    readonly type: "event";
    readonly name: "Initialize";
    readonly inputs: readonly [{
        readonly name: "id";
        readonly type: "bytes32";
        readonly indexed: true;
        readonly internalType: "PoolId";
    }, {
        readonly name: "currency0";
        readonly type: "address";
        readonly indexed: true;
        readonly internalType: "Currency";
    }, {
        readonly name: "currency1";
        readonly type: "address";
        readonly indexed: true;
        readonly internalType: "Currency";
    }, {
        readonly name: "hooks";
        readonly type: "address";
        readonly indexed: false;
        readonly internalType: "contract IHooks";
    }, {
        readonly name: "fee";
        readonly type: "uint24";
        readonly indexed: false;
        readonly internalType: "uint24";
    }, {
        readonly name: "parameters";
        readonly type: "bytes32";
        readonly indexed: false;
        readonly internalType: "bytes32";
    }, {
        readonly name: "sqrtPriceX96";
        readonly type: "uint160";
        readonly indexed: false;
        readonly internalType: "uint160";
    }, {
        readonly name: "tick";
        readonly type: "int24";
        readonly indexed: false;
        readonly internalType: "int24";
    }];
    readonly anonymous: false;
}, {
    readonly type: "event";
    readonly name: "ModifyLiquidity";
    readonly inputs: readonly [{
        readonly name: "id";
        readonly type: "bytes32";
        readonly indexed: true;
        readonly internalType: "PoolId";
    }, {
        readonly name: "sender";
        readonly type: "address";
        readonly indexed: true;
        readonly internalType: "address";
    }, {
        readonly name: "tickLower";
        readonly type: "int24";
        readonly indexed: false;
        readonly internalType: "int24";
    }, {
        readonly name: "tickUpper";
        readonly type: "int24";
        readonly indexed: false;
        readonly internalType: "int24";
    }, {
        readonly name: "liquidityDelta";
        readonly type: "int256";
        readonly indexed: false;
        readonly internalType: "int256";
    }, {
        readonly name: "salt";
        readonly type: "bytes32";
        readonly indexed: false;
        readonly internalType: "bytes32";
    }];
    readonly anonymous: false;
}, {
    readonly type: "event";
    readonly name: "OwnershipTransferred";
    readonly inputs: readonly [{
        readonly name: "previousOwner";
        readonly type: "address";
        readonly indexed: true;
        readonly internalType: "address";
    }, {
        readonly name: "newOwner";
        readonly type: "address";
        readonly indexed: true;
        readonly internalType: "address";
    }];
    readonly anonymous: false;
}, {
    readonly type: "event";
    readonly name: "Paused";
    readonly inputs: readonly [{
        readonly name: "account";
        readonly type: "address";
        readonly indexed: false;
        readonly internalType: "address";
    }];
    readonly anonymous: false;
}, {
    readonly type: "event";
    readonly name: "ProtocolFeeControllerUpdated";
    readonly inputs: readonly [{
        readonly name: "protocolFeeController";
        readonly type: "address";
        readonly indexed: true;
        readonly internalType: "address";
    }];
    readonly anonymous: false;
}, {
    readonly type: "event";
    readonly name: "ProtocolFeeUpdated";
    readonly inputs: readonly [{
        readonly name: "id";
        readonly type: "bytes32";
        readonly indexed: true;
        readonly internalType: "PoolId";
    }, {
        readonly name: "protocolFee";
        readonly type: "uint24";
        readonly indexed: false;
        readonly internalType: "uint24";
    }];
    readonly anonymous: false;
}, {
    readonly type: "event";
    readonly name: "Swap";
    readonly inputs: readonly [{
        readonly name: "id";
        readonly type: "bytes32";
        readonly indexed: true;
        readonly internalType: "PoolId";
    }, {
        readonly name: "sender";
        readonly type: "address";
        readonly indexed: true;
        readonly internalType: "address";
    }, {
        readonly name: "amount0";
        readonly type: "int128";
        readonly indexed: false;
        readonly internalType: "int128";
    }, {
        readonly name: "amount1";
        readonly type: "int128";
        readonly indexed: false;
        readonly internalType: "int128";
    }, {
        readonly name: "sqrtPriceX96";
        readonly type: "uint160";
        readonly indexed: false;
        readonly internalType: "uint160";
    }, {
        readonly name: "liquidity";
        readonly type: "uint128";
        readonly indexed: false;
        readonly internalType: "uint128";
    }, {
        readonly name: "tick";
        readonly type: "int24";
        readonly indexed: false;
        readonly internalType: "int24";
    }, {
        readonly name: "fee";
        readonly type: "uint24";
        readonly indexed: false;
        readonly internalType: "uint24";
    }, {
        readonly name: "protocolFee";
        readonly type: "uint16";
        readonly indexed: false;
        readonly internalType: "uint16";
    }];
    readonly anonymous: false;
}, {
    readonly type: "event";
    readonly name: "Unpaused";
    readonly inputs: readonly [{
        readonly name: "account";
        readonly type: "address";
        readonly indexed: false;
        readonly internalType: "address";
    }];
    readonly anonymous: false;
}, {
    readonly type: "error";
    readonly name: "CannotUpdateEmptyPosition";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "CurrenciesInitializedOutOfOrder";
    readonly inputs: readonly [{
        readonly name: "currency0";
        readonly type: "address";
        readonly internalType: "address";
    }, {
        readonly name: "currency1";
        readonly type: "address";
        readonly internalType: "address";
    }];
}, {
    readonly type: "error";
    readonly name: "EnforcedPause";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "HookConfigValidationError";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "HookDeltaExceedsSwapAmount";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "HookPermissionsValidationError";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "InvalidCaller";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "InvalidFeeForExactOut";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "InvalidHookResponse";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "InvalidSqrtPriceLimit";
    readonly inputs: readonly [{
        readonly name: "sqrtPriceCurrentX96";
        readonly type: "uint160";
        readonly internalType: "uint160";
    }, {
        readonly name: "sqrtPriceLimitX96";
        readonly type: "uint160";
        readonly internalType: "uint160";
    }];
}, {
    readonly type: "error";
    readonly name: "InvalidSqrtRatio";
    readonly inputs: readonly [{
        readonly name: "sqrtPriceX96";
        readonly type: "uint160";
        readonly internalType: "uint160";
    }];
}, {
    readonly type: "error";
    readonly name: "InvalidTick";
    readonly inputs: readonly [{
        readonly name: "tick";
        readonly type: "int24";
        readonly internalType: "int24";
    }];
}, {
    readonly type: "error";
    readonly name: "LPFeeTooLarge";
    readonly inputs: readonly [{
        readonly name: "fee";
        readonly type: "uint24";
        readonly internalType: "uint24";
    }];
}, {
    readonly type: "error";
    readonly name: "NoLiquidityToReceiveFees";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "PoolAlreadyInitialized";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "PoolManagerMismatch";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "PoolNotInitialized";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "PoolPaused";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "ProtocolFeeCannotBeFetched";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "ProtocolFeeTooLarge";
    readonly inputs: readonly [{
        readonly name: "fee";
        readonly type: "uint24";
        readonly internalType: "uint24";
    }];
}, {
    readonly type: "error";
    readonly name: "SwapAmountCannotBeZero";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "TickLiquidityOverflow";
    readonly inputs: readonly [{
        readonly name: "tick";
        readonly type: "int24";
        readonly internalType: "int24";
    }];
}, {
    readonly type: "error";
    readonly name: "TickLowerOutOfBounds";
    readonly inputs: readonly [{
        readonly name: "tickLower";
        readonly type: "int24";
        readonly internalType: "int24";
    }];
}, {
    readonly type: "error";
    readonly name: "TickSpacingTooLarge";
    readonly inputs: readonly [{
        readonly name: "tickSpacing";
        readonly type: "int24";
        readonly internalType: "int24";
    }];
}, {
    readonly type: "error";
    readonly name: "TickSpacingTooSmall";
    readonly inputs: readonly [{
        readonly name: "tickSpacing";
        readonly type: "int24";
        readonly internalType: "int24";
    }];
}, {
    readonly type: "error";
    readonly name: "TickUpperOutOfBounds";
    readonly inputs: readonly [{
        readonly name: "tickUpper";
        readonly type: "int24";
        readonly internalType: "int24";
    }];
}, {
    readonly type: "error";
    readonly name: "TicksMisordered";
    readonly inputs: readonly [{
        readonly name: "tickLower";
        readonly type: "int24";
        readonly internalType: "int24";
    }, {
        readonly name: "tickUpper";
        readonly type: "int24";
        readonly internalType: "int24";
    }];
}, {
    readonly type: "error";
    readonly name: "UnauthorizedDynamicLPFeeUpdate";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "UnusedBitsNonZero";
    readonly inputs: readonly [];
}];
//# sourceMappingURL=CLPoolManagerAbi.d.ts.map