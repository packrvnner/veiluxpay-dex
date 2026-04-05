export declare const MixedQuoterAbi: readonly [{
    readonly type: "constructor";
    readonly inputs: readonly [{
        readonly name: "_factoryV3";
        readonly type: "address";
        readonly internalType: "address";
    }, {
        readonly name: "_factoryV2";
        readonly type: "address";
        readonly internalType: "address";
    }, {
        readonly name: "_factoryStable";
        readonly type: "address";
        readonly internalType: "address";
    }, {
        readonly name: "_WETH9";
        readonly type: "address";
        readonly internalType: "address";
    }, {
        readonly name: "_clQuoter";
        readonly type: "address";
        readonly internalType: "contract ICLQuoter";
    }, {
        readonly name: "_binQuoter";
        readonly type: "address";
        readonly internalType: "contract IBinQuoter";
    }];
    readonly stateMutability: "nonpayable";
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
    readonly name: "binQuoter";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "address";
        readonly internalType: "contract IBinQuoter";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "clQuoter";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "address";
        readonly internalType: "contract ICLQuoter";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "factoryStable";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "address";
        readonly internalType: "address";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "factoryV2";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "address";
        readonly internalType: "address";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "factoryV3";
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
    readonly name: "pancakeV3SwapCallback";
    readonly inputs: readonly [{
        readonly name: "amount0Delta";
        readonly type: "int256";
        readonly internalType: "int256";
    }, {
        readonly name: "amount1Delta";
        readonly type: "int256";
        readonly internalType: "int256";
    }, {
        readonly name: "data";
        readonly type: "bytes";
        readonly internalType: "bytes";
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "quoteExactInputSingleStable";
    readonly inputs: readonly [{
        readonly name: "params";
        readonly type: "tuple";
        readonly internalType: "struct IMixedQuoter.QuoteExactInputSingleStableParams";
        readonly components: readonly [{
            readonly name: "tokenIn";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "tokenOut";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "amountIn";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "flag";
            readonly type: "uint256";
            readonly internalType: "uint256";
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
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "quoteExactInputSingleV2";
    readonly inputs: readonly [{
        readonly name: "params";
        readonly type: "tuple";
        readonly internalType: "struct IMixedQuoter.QuoteExactInputSingleV2Params";
        readonly components: readonly [{
            readonly name: "tokenIn";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "tokenOut";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "amountIn";
            readonly type: "uint256";
            readonly internalType: "uint256";
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
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "quoteExactInputSingleV3";
    readonly inputs: readonly [{
        readonly name: "params";
        readonly type: "tuple";
        readonly internalType: "struct IMixedQuoter.QuoteExactInputSingleV3Params";
        readonly components: readonly [{
            readonly name: "tokenIn";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "tokenOut";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "amountIn";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "fee";
            readonly type: "uint24";
            readonly internalType: "uint24";
        }, {
            readonly name: "sqrtPriceLimitX96";
            readonly type: "uint160";
            readonly internalType: "uint160";
        }];
    }];
    readonly outputs: readonly [{
        readonly name: "amountOut";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }, {
        readonly name: "sqrtPriceX96After";
        readonly type: "uint160";
        readonly internalType: "uint160";
    }, {
        readonly name: "initializedTicksCrossed";
        readonly type: "uint32";
        readonly internalType: "uint32";
    }, {
        readonly name: "gasEstimate";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "quoteMixedExactInput";
    readonly inputs: readonly [{
        readonly name: "paths";
        readonly type: "address[]";
        readonly internalType: "address[]";
    }, {
        readonly name: "actions";
        readonly type: "bytes";
        readonly internalType: "bytes";
    }, {
        readonly name: "params";
        readonly type: "bytes[]";
        readonly internalType: "bytes[]";
    }, {
        readonly name: "amountIn";
        readonly type: "uint256";
        readonly internalType: "uint256";
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
    readonly name: "quoteMixedExactInputSharedContext";
    readonly inputs: readonly [{
        readonly name: "paths";
        readonly type: "address[]";
        readonly internalType: "address[]";
    }, {
        readonly name: "actions";
        readonly type: "bytes";
        readonly internalType: "bytes";
    }, {
        readonly name: "params";
        readonly type: "bytes[]";
        readonly internalType: "bytes[]";
    }, {
        readonly name: "amountIn";
        readonly type: "uint256";
        readonly internalType: "uint256";
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
    readonly type: "error";
    readonly name: "INVALID_ADDRESS";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "INVALID_SWAP_DIRECTION";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "InputLengthMismatch";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "InvalidPath";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "InvalidPoolKeyCurrency";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "NoActions";
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
    readonly name: "SafeCastOverflowedUintToInt";
    readonly inputs: readonly [{
        readonly name: "value";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
}, {
    readonly type: "error";
    readonly name: "UnsupportedAction";
    readonly inputs: readonly [{
        readonly name: "action";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
}];
//# sourceMappingURL=MixedQuoterAbi.d.ts.map