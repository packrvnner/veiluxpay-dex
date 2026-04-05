export declare const BinMigratorAbi: readonly [{
    readonly type: "constructor";
    readonly inputs: readonly [{
        readonly name: "_WETH9";
        readonly type: "address";
        readonly internalType: "address";
    }, {
        readonly name: "_binPositionManager";
        readonly type: "address";
        readonly internalType: "address";
    }, {
        readonly name: "_permit2";
        readonly type: "address";
        readonly internalType: "contract IAllowanceTransfer";
    }];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "receive";
    readonly stateMutability: "payable";
}, {
    readonly type: "function";
    readonly name: "WETH9";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "address";
        readonly internalType: "address";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "binPositionManager";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "address";
        readonly internalType: "contract IBinPositionManager";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "initializePool";
    readonly inputs: readonly [{
        readonly name: "poolKey";
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
        readonly name: "activeId";
        readonly type: "uint24";
        readonly internalType: "uint24";
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "payable";
}, {
    readonly type: "function";
    readonly name: "migrateFromV2";
    readonly inputs: readonly [{
        readonly name: "v2PoolParams";
        readonly type: "tuple";
        readonly internalType: "struct IBaseMigrator.V2PoolParams";
        readonly components: readonly [{
            readonly name: "pair";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "migrateAmount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "amount0Min";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "amount1Min";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
    }, {
        readonly name: "infiPoolParams";
        readonly type: "tuple";
        readonly internalType: "struct IBinMigrator.InfiBinPoolParams";
        readonly components: readonly [{
            readonly name: "poolKey";
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
            readonly name: "amount0Max";
            readonly type: "uint128";
            readonly internalType: "uint128";
        }, {
            readonly name: "amount1Max";
            readonly type: "uint128";
            readonly internalType: "uint128";
        }, {
            readonly name: "activeIdDesired";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "idSlippage";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "deltaIds";
            readonly type: "int256[]";
            readonly internalType: "int256[]";
        }, {
            readonly name: "distributionX";
            readonly type: "uint256[]";
            readonly internalType: "uint256[]";
        }, {
            readonly name: "distributionY";
            readonly type: "uint256[]";
            readonly internalType: "uint256[]";
        }, {
            readonly name: "to";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "deadline";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "hookData";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
    }, {
        readonly name: "extraAmount0";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }, {
        readonly name: "extraAmount1";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "payable";
}, {
    readonly type: "function";
    readonly name: "migrateFromV3";
    readonly inputs: readonly [{
        readonly name: "v3PoolParams";
        readonly type: "tuple";
        readonly internalType: "struct IBaseMigrator.V3PoolParams";
        readonly components: readonly [{
            readonly name: "nfp";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "tokenId";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "liquidity";
            readonly type: "uint128";
            readonly internalType: "uint128";
        }, {
            readonly name: "amount0Min";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "amount1Min";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "collectFee";
            readonly type: "bool";
            readonly internalType: "bool";
        }, {
            readonly name: "deadline";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
    }, {
        readonly name: "infiPoolParams";
        readonly type: "tuple";
        readonly internalType: "struct IBinMigrator.InfiBinPoolParams";
        readonly components: readonly [{
            readonly name: "poolKey";
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
            readonly name: "amount0Max";
            readonly type: "uint128";
            readonly internalType: "uint128";
        }, {
            readonly name: "amount1Max";
            readonly type: "uint128";
            readonly internalType: "uint128";
        }, {
            readonly name: "activeIdDesired";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "idSlippage";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "deltaIds";
            readonly type: "int256[]";
            readonly internalType: "int256[]";
        }, {
            readonly name: "distributionX";
            readonly type: "uint256[]";
            readonly internalType: "uint256[]";
        }, {
            readonly name: "distributionY";
            readonly type: "uint256[]";
            readonly internalType: "uint256[]";
        }, {
            readonly name: "to";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "deadline";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "hookData";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
    }, {
        readonly name: "extraAmount0";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }, {
        readonly name: "extraAmount1";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "payable";
}, {
    readonly type: "function";
    readonly name: "multicall";
    readonly inputs: readonly [{
        readonly name: "data";
        readonly type: "bytes[]";
        readonly internalType: "bytes[]";
    }];
    readonly outputs: readonly [{
        readonly name: "results";
        readonly type: "bytes[]";
        readonly internalType: "bytes[]";
    }];
    readonly stateMutability: "payable";
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
    readonly name: "permit";
    readonly inputs: readonly [{
        readonly name: "owner";
        readonly type: "address";
        readonly internalType: "address";
    }, {
        readonly name: "permitSingle";
        readonly type: "tuple";
        readonly internalType: "struct IAllowanceTransfer.PermitSingle";
        readonly components: readonly [{
            readonly name: "details";
            readonly type: "tuple";
            readonly internalType: "struct IAllowanceTransfer.PermitDetails";
            readonly components: readonly [{
                readonly name: "token";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "amount";
                readonly type: "uint160";
                readonly internalType: "uint160";
            }, {
                readonly name: "expiration";
                readonly type: "uint48";
                readonly internalType: "uint48";
            }, {
                readonly name: "nonce";
                readonly type: "uint48";
                readonly internalType: "uint48";
            }];
        }, {
            readonly name: "spender";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "sigDeadline";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
    }, {
        readonly name: "signature";
        readonly type: "bytes";
        readonly internalType: "bytes";
    }];
    readonly outputs: readonly [{
        readonly name: "err";
        readonly type: "bytes";
        readonly internalType: "bytes";
    }];
    readonly stateMutability: "payable";
}, {
    readonly type: "function";
    readonly name: "permit2";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "address";
        readonly internalType: "contract IAllowanceTransfer";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "permitBatch";
    readonly inputs: readonly [{
        readonly name: "owner";
        readonly type: "address";
        readonly internalType: "address";
    }, {
        readonly name: "_permitBatch";
        readonly type: "tuple";
        readonly internalType: "struct IAllowanceTransfer.PermitBatch";
        readonly components: readonly [{
            readonly name: "details";
            readonly type: "tuple[]";
            readonly internalType: "struct IAllowanceTransfer.PermitDetails[]";
            readonly components: readonly [{
                readonly name: "token";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "amount";
                readonly type: "uint160";
                readonly internalType: "uint160";
            }, {
                readonly name: "expiration";
                readonly type: "uint48";
                readonly internalType: "uint48";
            }, {
                readonly name: "nonce";
                readonly type: "uint48";
                readonly internalType: "uint48";
            }];
        }, {
            readonly name: "spender";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "sigDeadline";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
    }, {
        readonly name: "signature";
        readonly type: "bytes";
        readonly internalType: "bytes";
    }];
    readonly outputs: readonly [{
        readonly name: "err";
        readonly type: "bytes";
        readonly internalType: "bytes";
    }];
    readonly stateMutability: "payable";
}, {
    readonly type: "function";
    readonly name: "positionManagerPermit2";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "address";
        readonly internalType: "contract IAllowanceTransfer";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "refundETH";
    readonly inputs: readonly [];
    readonly outputs: readonly [];
    readonly stateMutability: "payable";
}, {
    readonly type: "function";
    readonly name: "selfPermitERC721";
    readonly inputs: readonly [{
        readonly name: "token";
        readonly type: "address";
        readonly internalType: "address";
    }, {
        readonly name: "tokenId";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }, {
        readonly name: "deadline";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }, {
        readonly name: "v";
        readonly type: "uint8";
        readonly internalType: "uint8";
    }, {
        readonly name: "r";
        readonly type: "bytes32";
        readonly internalType: "bytes32";
    }, {
        readonly name: "s";
        readonly type: "bytes32";
        readonly internalType: "bytes32";
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "payable";
}, {
    readonly type: "function";
    readonly name: "selfPermitERC721IfNecessary";
    readonly inputs: readonly [{
        readonly name: "token";
        readonly type: "address";
        readonly internalType: "address";
    }, {
        readonly name: "tokenId";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }, {
        readonly name: "deadline";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }, {
        readonly name: "v";
        readonly type: "uint8";
        readonly internalType: "uint8";
    }, {
        readonly name: "r";
        readonly type: "bytes32";
        readonly internalType: "bytes32";
    }, {
        readonly name: "s";
        readonly type: "bytes32";
        readonly internalType: "bytes32";
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "payable";
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
    readonly type: "event";
    readonly name: "ExtraFundsAdded";
    readonly inputs: readonly [{
        readonly name: "currency0";
        readonly type: "address";
        readonly indexed: false;
        readonly internalType: "address";
    }, {
        readonly name: "currency1";
        readonly type: "address";
        readonly indexed: false;
        readonly internalType: "address";
    }, {
        readonly name: "extraAmount0";
        readonly type: "uint256";
        readonly indexed: false;
        readonly internalType: "uint256";
    }, {
        readonly name: "extraAmount1";
        readonly type: "uint256";
        readonly indexed: false;
        readonly internalType: "uint256";
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
    readonly name: "ContractLocked";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "EnforcedPause";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "INSUFFICIENT_AMOUNTS_RECEIVED";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "INVALID_ETHER_SENDER";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "NOT_TOKEN_OWNER";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "SafeCastOverflowedUintDowncast";
    readonly inputs: readonly [{
        readonly name: "bits";
        readonly type: "uint8";
        readonly internalType: "uint8";
    }, {
        readonly name: "value";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
}, {
    readonly type: "error";
    readonly name: "TOKEN_NOT_MATCH";
    readonly inputs: readonly [];
}];
//# sourceMappingURL=BinMigratorAbi.d.ts.map