export declare const BinPositionManagerAbi: readonly [{
    readonly type: "constructor";
    readonly inputs: readonly [{
        readonly name: "_vault";
        readonly type: "address";
        readonly internalType: "contract IVault";
    }, {
        readonly name: "_binPoolManager";
        readonly type: "address";
        readonly internalType: "contract IBinPoolManager";
    }, {
        readonly name: "_permit2";
        readonly type: "address";
        readonly internalType: "contract IAllowanceTransfer";
    }, {
        readonly name: "_weth9";
        readonly type: "address";
        readonly internalType: "contract IWETH9";
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
        readonly internalType: "contract IWETH9";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "approveForAll";
    readonly inputs: readonly [{
        readonly name: "operator";
        readonly type: "address";
        readonly internalType: "address";
    }, {
        readonly name: "approved";
        readonly type: "bool";
        readonly internalType: "bool";
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "balanceOf";
    readonly inputs: readonly [{
        readonly name: "";
        readonly type: "address";
        readonly internalType: "address";
    }, {
        readonly name: "";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "balanceOfBatch";
    readonly inputs: readonly [{
        readonly name: "owners";
        readonly type: "address[]";
        readonly internalType: "address[]";
    }, {
        readonly name: "ids";
        readonly type: "uint256[]";
        readonly internalType: "uint256[]";
    }];
    readonly outputs: readonly [{
        readonly name: "balances";
        readonly type: "uint256[]";
        readonly internalType: "uint256[]";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "batchTransferFrom";
    readonly inputs: readonly [{
        readonly name: "from";
        readonly type: "address";
        readonly internalType: "address";
    }, {
        readonly name: "to";
        readonly type: "address";
        readonly internalType: "address";
    }, {
        readonly name: "ids";
        readonly type: "uint256[]";
        readonly internalType: "uint256[]";
    }, {
        readonly name: "amounts";
        readonly type: "uint256[]";
        readonly internalType: "uint256[]";
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "binPoolManager";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "address";
        readonly internalType: "contract IBinPoolManager";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "initializePool";
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
        readonly name: "activeId";
        readonly type: "uint24";
        readonly internalType: "uint24";
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "payable";
}, {
    readonly type: "function";
    readonly name: "isApprovedForAll";
    readonly inputs: readonly [{
        readonly name: "";
        readonly type: "address";
        readonly internalType: "address";
    }, {
        readonly name: "";
        readonly type: "address";
        readonly internalType: "address";
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "bool";
        readonly internalType: "bool";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "lockAcquired";
    readonly inputs: readonly [{
        readonly name: "data";
        readonly type: "bytes";
        readonly internalType: "bytes";
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "bytes";
        readonly internalType: "bytes";
    }];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "modifyLiquidities";
    readonly inputs: readonly [{
        readonly name: "payload";
        readonly type: "bytes";
        readonly internalType: "bytes";
    }, {
        readonly name: "deadline";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "payable";
}, {
    readonly type: "function";
    readonly name: "modifyLiquiditiesWithoutLock";
    readonly inputs: readonly [{
        readonly name: "actions";
        readonly type: "bytes";
        readonly internalType: "bytes";
    }, {
        readonly name: "params";
        readonly type: "bytes[]";
        readonly internalType: "bytes[]";
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "payable";
}, {
    readonly type: "function";
    readonly name: "msgSender";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "address";
        readonly internalType: "address";
    }];
    readonly stateMutability: "view";
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
    readonly name: "name";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "string";
        readonly internalType: "string";
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
    readonly name: "positions";
    readonly inputs: readonly [{
        readonly name: "tokenId";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly outputs: readonly [{
        readonly name: "";
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
        readonly name: "";
        readonly type: "uint24";
        readonly internalType: "uint24";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "symbol";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "string";
        readonly internalType: "string";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "totalSupply";
    readonly inputs: readonly [{
        readonly name: "";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly stateMutability: "view";
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
    readonly name: "ApprovalForAll";
    readonly inputs: readonly [{
        readonly name: "account";
        readonly type: "address";
        readonly indexed: true;
        readonly internalType: "address";
    }, {
        readonly name: "sender";
        readonly type: "address";
        readonly indexed: true;
        readonly internalType: "address";
    }, {
        readonly name: "approved";
        readonly type: "bool";
        readonly indexed: false;
        readonly internalType: "bool";
    }];
    readonly anonymous: false;
}, {
    readonly type: "event";
    readonly name: "TransferBatch";
    readonly inputs: readonly [{
        readonly name: "sender";
        readonly type: "address";
        readonly indexed: true;
        readonly internalType: "address";
    }, {
        readonly name: "from";
        readonly type: "address";
        readonly indexed: true;
        readonly internalType: "address";
    }, {
        readonly name: "to";
        readonly type: "address";
        readonly indexed: true;
        readonly internalType: "address";
    }, {
        readonly name: "ids";
        readonly type: "uint256[]";
        readonly indexed: false;
        readonly internalType: "uint256[]";
    }, {
        readonly name: "amounts";
        readonly type: "uint256[]";
        readonly indexed: false;
        readonly internalType: "uint256[]";
    }];
    readonly anonymous: false;
}, {
    readonly type: "error";
    readonly name: "AddLiquidityInputActiveIdMismatch";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "BinFungibleToken_AddressThisOrZero";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "BinFungibleToken_BurnExceedsBalance";
    readonly inputs: readonly [{
        readonly name: "from";
        readonly type: "address";
        readonly internalType: "address";
    }, {
        readonly name: "id";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }, {
        readonly name: "amount";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
}, {
    readonly type: "error";
    readonly name: "BinFungibleToken_InvalidLength";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "BinFungibleToken_SelfApproval";
    readonly inputs: readonly [{
        readonly name: "owner";
        readonly type: "address";
        readonly internalType: "address";
    }];
}, {
    readonly type: "error";
    readonly name: "BinFungibleToken_SpenderNotApproved";
    readonly inputs: readonly [{
        readonly name: "from";
        readonly type: "address";
        readonly internalType: "address";
    }, {
        readonly name: "spender";
        readonly type: "address";
        readonly internalType: "address";
    }];
}, {
    readonly type: "error";
    readonly name: "BinFungibleToken_TransferExceedsBalance";
    readonly inputs: readonly [{
        readonly name: "from";
        readonly type: "address";
        readonly internalType: "address";
    }, {
        readonly name: "id";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }, {
        readonly name: "amount";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
}, {
    readonly type: "error";
    readonly name: "ContractLocked";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "DeadlinePassed";
    readonly inputs: readonly [{
        readonly name: "deadline";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
}, {
    readonly type: "error";
    readonly name: "DeltaNotNegative";
    readonly inputs: readonly [{
        readonly name: "currency";
        readonly type: "address";
        readonly internalType: "Currency";
    }];
}, {
    readonly type: "error";
    readonly name: "DeltaNotPositive";
    readonly inputs: readonly [{
        readonly name: "currency";
        readonly type: "address";
        readonly internalType: "Currency";
    }];
}, {
    readonly type: "error";
    readonly name: "IdOverflows";
    readonly inputs: readonly [{
        readonly name: "";
        readonly type: "int256";
        readonly internalType: "int256";
    }];
}, {
    readonly type: "error";
    readonly name: "IdSlippageCaught";
    readonly inputs: readonly [{
        readonly name: "activeIdDesired";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }, {
        readonly name: "idSlippage";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }, {
        readonly name: "activeId";
        readonly type: "uint24";
        readonly internalType: "uint24";
    }];
}, {
    readonly type: "error";
    readonly name: "InputLengthMismatch";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "InsufficientBalance";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "InvalidEthSender";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "InvalidTokenID";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "MaximumAmountExceeded";
    readonly inputs: readonly [{
        readonly name: "maximumAmount";
        readonly type: "uint128";
        readonly internalType: "uint128";
    }, {
        readonly name: "amountRequested";
        readonly type: "uint128";
        readonly internalType: "uint128";
    }];
}, {
    readonly type: "error";
    readonly name: "MinimumAmountInsufficient";
    readonly inputs: readonly [{
        readonly name: "minimumAmount";
        readonly type: "uint128";
        readonly internalType: "uint128";
    }, {
        readonly name: "amountReceived";
        readonly type: "uint128";
        readonly internalType: "uint128";
    }];
}, {
    readonly type: "error";
    readonly name: "NotVault";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "SafeCastOverflow";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "UnsupportedAction";
    readonly inputs: readonly [{
        readonly name: "action";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
}, {
    readonly type: "error";
    readonly name: "VaultMustBeUnlocked";
    readonly inputs: readonly [];
}];
//# sourceMappingURL=BinPositionManagerAbi.d.ts.map