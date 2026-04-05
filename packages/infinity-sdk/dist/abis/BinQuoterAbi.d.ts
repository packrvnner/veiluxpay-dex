export declare const BinQuoterAbi: readonly [{
    readonly type: "constructor";
    readonly inputs: readonly [{
        readonly name: "_poolManager";
        readonly type: "address";
        readonly internalType: "address";
    }];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "_quoteExactInput";
    readonly inputs: readonly [{
        readonly name: "params";
        readonly type: "tuple";
        readonly internalType: "struct IQuoter.QuoteExactParams";
        readonly components: readonly [{
            readonly name: "exactCurrency";
            readonly type: "address";
            readonly internalType: "Currency";
        }, {
            readonly name: "path";
            readonly type: "tuple[]";
            readonly internalType: "struct PathKey[]";
            readonly components: readonly [{
                readonly name: "intermediateCurrency";
                readonly type: "address";
                readonly internalType: "Currency";
            }, {
                readonly name: "fee";
                readonly type: "uint24";
                readonly internalType: "uint24";
            }, {
                readonly name: "hooks";
                readonly type: "address";
                readonly internalType: "contract IHooks";
            }, {
                readonly name: "poolManager";
                readonly type: "address";
                readonly internalType: "contract IPoolManager";
            }, {
                readonly name: "hookData";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }, {
                readonly name: "parameters";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }];
        }, {
            readonly name: "exactAmount";
            readonly type: "uint128";
            readonly internalType: "uint128";
        }];
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "bytes";
        readonly internalType: "bytes";
    }];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "_quoteExactInputSingle";
    readonly inputs: readonly [{
        readonly name: "params";
        readonly type: "tuple";
        readonly internalType: "struct IQuoter.QuoteExactSingleParams";
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
            readonly name: "zeroForOne";
            readonly type: "bool";
            readonly internalType: "bool";
        }, {
            readonly name: "exactAmount";
            readonly type: "uint128";
            readonly internalType: "uint128";
        }, {
            readonly name: "hookData";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "bytes";
        readonly internalType: "bytes";
    }];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "_quoteExactInputSingleList";
    readonly inputs: readonly [{
        readonly name: "swapParamList";
        readonly type: "tuple[]";
        readonly internalType: "struct IQuoter.QuoteExactSingleParams[]";
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
            readonly name: "zeroForOne";
            readonly type: "bool";
            readonly internalType: "bool";
        }, {
            readonly name: "exactAmount";
            readonly type: "uint128";
            readonly internalType: "uint128";
        }, {
            readonly name: "hookData";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "bytes";
        readonly internalType: "bytes";
    }];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "_quoteExactOutput";
    readonly inputs: readonly [{
        readonly name: "params";
        readonly type: "tuple";
        readonly internalType: "struct IQuoter.QuoteExactParams";
        readonly components: readonly [{
            readonly name: "exactCurrency";
            readonly type: "address";
            readonly internalType: "Currency";
        }, {
            readonly name: "path";
            readonly type: "tuple[]";
            readonly internalType: "struct PathKey[]";
            readonly components: readonly [{
                readonly name: "intermediateCurrency";
                readonly type: "address";
                readonly internalType: "Currency";
            }, {
                readonly name: "fee";
                readonly type: "uint24";
                readonly internalType: "uint24";
            }, {
                readonly name: "hooks";
                readonly type: "address";
                readonly internalType: "contract IHooks";
            }, {
                readonly name: "poolManager";
                readonly type: "address";
                readonly internalType: "contract IPoolManager";
            }, {
                readonly name: "hookData";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }, {
                readonly name: "parameters";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }];
        }, {
            readonly name: "exactAmount";
            readonly type: "uint128";
            readonly internalType: "uint128";
        }];
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "bytes";
        readonly internalType: "bytes";
    }];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "_quoteExactOutputSingle";
    readonly inputs: readonly [{
        readonly name: "params";
        readonly type: "tuple";
        readonly internalType: "struct IQuoter.QuoteExactSingleParams";
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
            readonly name: "zeroForOne";
            readonly type: "bool";
            readonly internalType: "bool";
        }, {
            readonly name: "exactAmount";
            readonly type: "uint128";
            readonly internalType: "uint128";
        }, {
            readonly name: "hookData";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "bytes";
        readonly internalType: "bytes";
    }];
    readonly stateMutability: "nonpayable";
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
    readonly name: "poolManager";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "address";
        readonly internalType: "contract IBinPoolManager";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "quoteExactInput";
    readonly inputs: readonly [{
        readonly name: "params";
        readonly type: "tuple";
        readonly internalType: "struct IQuoter.QuoteExactParams";
        readonly components: readonly [{
            readonly name: "exactCurrency";
            readonly type: "address";
            readonly internalType: "Currency";
        }, {
            readonly name: "path";
            readonly type: "tuple[]";
            readonly internalType: "struct PathKey[]";
            readonly components: readonly [{
                readonly name: "intermediateCurrency";
                readonly type: "address";
                readonly internalType: "Currency";
            }, {
                readonly name: "fee";
                readonly type: "uint24";
                readonly internalType: "uint24";
            }, {
                readonly name: "hooks";
                readonly type: "address";
                readonly internalType: "contract IHooks";
            }, {
                readonly name: "poolManager";
                readonly type: "address";
                readonly internalType: "contract IPoolManager";
            }, {
                readonly name: "hookData";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }, {
                readonly name: "parameters";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }];
        }, {
            readonly name: "exactAmount";
            readonly type: "uint128";
            readonly internalType: "uint128";
        }];
    }];
    readonly outputs: readonly [{
        readonly name: "amountOut";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }, {
        readonly name: "gasEstimate";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "quoteExactInputSingle";
    readonly inputs: readonly [{
        readonly name: "params";
        readonly type: "tuple";
        readonly internalType: "struct IQuoter.QuoteExactSingleParams";
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
            readonly name: "zeroForOne";
            readonly type: "bool";
            readonly internalType: "bool";
        }, {
            readonly name: "exactAmount";
            readonly type: "uint128";
            readonly internalType: "uint128";
        }, {
            readonly name: "hookData";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
    }];
    readonly outputs: readonly [{
        readonly name: "amountOut";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }, {
        readonly name: "gasEstimate";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "quoteExactInputSingleList";
    readonly inputs: readonly [{
        readonly name: "params";
        readonly type: "tuple[]";
        readonly internalType: "struct IQuoter.QuoteExactSingleParams[]";
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
            readonly name: "zeroForOne";
            readonly type: "bool";
            readonly internalType: "bool";
        }, {
            readonly name: "exactAmount";
            readonly type: "uint128";
            readonly internalType: "uint128";
        }, {
            readonly name: "hookData";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
    }];
    readonly outputs: readonly [{
        readonly name: "amountIn";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }, {
        readonly name: "gasEstimate";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "quoteExactOutput";
    readonly inputs: readonly [{
        readonly name: "params";
        readonly type: "tuple";
        readonly internalType: "struct IQuoter.QuoteExactParams";
        readonly components: readonly [{
            readonly name: "exactCurrency";
            readonly type: "address";
            readonly internalType: "Currency";
        }, {
            readonly name: "path";
            readonly type: "tuple[]";
            readonly internalType: "struct PathKey[]";
            readonly components: readonly [{
                readonly name: "intermediateCurrency";
                readonly type: "address";
                readonly internalType: "Currency";
            }, {
                readonly name: "fee";
                readonly type: "uint24";
                readonly internalType: "uint24";
            }, {
                readonly name: "hooks";
                readonly type: "address";
                readonly internalType: "contract IHooks";
            }, {
                readonly name: "poolManager";
                readonly type: "address";
                readonly internalType: "contract IPoolManager";
            }, {
                readonly name: "hookData";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }, {
                readonly name: "parameters";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }];
        }, {
            readonly name: "exactAmount";
            readonly type: "uint128";
            readonly internalType: "uint128";
        }];
    }];
    readonly outputs: readonly [{
        readonly name: "amountIn";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }, {
        readonly name: "gasEstimate";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "quoteExactOutputSingle";
    readonly inputs: readonly [{
        readonly name: "params";
        readonly type: "tuple";
        readonly internalType: "struct IQuoter.QuoteExactSingleParams";
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
            readonly name: "zeroForOne";
            readonly type: "bool";
            readonly internalType: "bool";
        }, {
            readonly name: "exactAmount";
            readonly type: "uint128";
            readonly internalType: "uint128";
        }, {
            readonly name: "hookData";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
    }];
    readonly outputs: readonly [{
        readonly name: "amountIn";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }, {
        readonly name: "gasEstimate";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
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
    readonly type: "error";
    readonly name: "NotEnoughLiquidity";
    readonly inputs: readonly [{
        readonly name: "poolId";
        readonly type: "bytes32";
        readonly internalType: "PoolId";
    }];
}, {
    readonly type: "error";
    readonly name: "NotSelf";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "NotVault";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "QuoteSwap";
    readonly inputs: readonly [{
        readonly name: "amount";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
}, {
    readonly type: "error";
    readonly name: "UnexpectedCallSuccess";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "UnexpectedRevertBytes";
    readonly inputs: readonly [{
        readonly name: "revertData";
        readonly type: "bytes";
        readonly internalType: "bytes";
    }];
}];
//# sourceMappingURL=BinQuoterAbi.d.ts.map