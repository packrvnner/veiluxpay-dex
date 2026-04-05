export declare const UniversalRouterABI: readonly [{
    readonly type: "constructor";
    readonly inputs: readonly [{
        readonly name: "params";
        readonly type: "tuple";
        readonly internalType: "struct RouterParameters";
        readonly components: readonly [{
            readonly name: "permit2";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "weth9";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "v2Factory";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "v3Factory";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "v3Deployer";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "v2InitCodeHash";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "v3InitCodeHash";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "stableFactory";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "stableInfo";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "infiVault";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "infiClPoolManager";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "infiBinPoolManager";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "v3NFTPositionManager";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "infiClPositionManager";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "infiBinPositionManager";
            readonly type: "address";
            readonly internalType: "address";
        }];
    }];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "receive";
    readonly stateMutability: "payable";
}, {
    readonly type: "function";
    readonly name: "INFI_BIN_POSITION_MANAGER";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "address";
        readonly internalType: "contract IPositionManager";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "INFI_CL_POSITION_MANAGER";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "address";
        readonly internalType: "contract IPositionManager";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "V3_POSITION_MANAGER";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "address";
        readonly internalType: "contract IV3NonfungiblePositionManager";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "acceptOwnership";
    readonly inputs: readonly [];
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
    readonly name: "clPoolManager";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "address";
        readonly internalType: "contract ICLPoolManager";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "execute";
    readonly inputs: readonly [{
        readonly name: "commands";
        readonly type: "bytes";
        readonly internalType: "bytes";
    }, {
        readonly name: "inputs";
        readonly type: "bytes[]";
        readonly internalType: "bytes[]";
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "payable";
}, {
    readonly type: "function";
    readonly name: "execute";
    readonly inputs: readonly [{
        readonly name: "commands";
        readonly type: "bytes";
        readonly internalType: "bytes";
    }, {
        readonly name: "inputs";
        readonly type: "bytes[]";
        readonly internalType: "bytes[]";
    }, {
        readonly name: "deadline";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "payable";
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
    readonly stateMutability: "nonpayable";
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
        readonly name: "";
        readonly type: "bool";
        readonly internalType: "bool";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "pendingOwner";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "address";
        readonly internalType: "address";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "renounceOwnership";
    readonly inputs: readonly [];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "setStableSwap";
    readonly inputs: readonly [{
        readonly name: "_factory";
        readonly type: "address";
        readonly internalType: "address";
    }, {
        readonly name: "_info";
        readonly type: "address";
        readonly internalType: "address";
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "stableSwapFactory";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "address";
        readonly internalType: "address";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "stableSwapInfo";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "address";
        readonly internalType: "address";
    }];
    readonly stateMutability: "view";
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
    readonly name: "OwnershipTransferStarted";
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
    readonly name: "SetStableSwap";
    readonly inputs: readonly [{
        readonly name: "factory";
        readonly type: "address";
        readonly indexed: true;
        readonly internalType: "address";
    }, {
        readonly name: "info";
        readonly type: "address";
        readonly indexed: true;
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
    readonly name: "BalanceTooLow";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "ContractLocked";
    readonly inputs: readonly [];
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
    readonly name: "ETHNotAccepted";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "EnforcedPause";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "ExecutionFailed";
    readonly inputs: readonly [{
        readonly name: "commandIndex";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }, {
        readonly name: "message";
        readonly type: "bytes";
        readonly internalType: "bytes";
    }];
}, {
    readonly type: "error";
    readonly name: "ExpectedPause";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "FromAddressIsNotOwner";
    readonly inputs: readonly [];
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
    readonly name: "InsufficientETH";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "InsufficientToken";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "InvalidAction";
    readonly inputs: readonly [{
        readonly name: "action";
        readonly type: "bytes4";
        readonly internalType: "bytes4";
    }];
}, {
    readonly type: "error";
    readonly name: "InvalidBips";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "InvalidCommandType";
    readonly inputs: readonly [{
        readonly name: "commandType";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
}, {
    readonly type: "error";
    readonly name: "InvalidEthSender";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "InvalidPath";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "InvalidPoolAddress";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "InvalidPoolLength";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "InvalidReserves";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "LengthMismatch";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "NotAuthorizedForToken";
    readonly inputs: readonly [{
        readonly name: "tokenId";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
}, {
    readonly type: "error";
    readonly name: "NotVault";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "OnlyAddLiqudityAllowed";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "OnlyMintAllowed";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "OwnableInvalidOwner";
    readonly inputs: readonly [{
        readonly name: "owner";
        readonly type: "address";
        readonly internalType: "address";
    }];
}, {
    readonly type: "error";
    readonly name: "OwnableUnauthorizedAccount";
    readonly inputs: readonly [{
        readonly name: "account";
        readonly type: "address";
        readonly internalType: "address";
    }];
}, {
    readonly type: "error";
    readonly name: "SafeCastOverflow";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "SliceOutOfBounds";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "StableInvalidPath";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "StableTooLittleReceived";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "StableTooMuchRequested";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "TooLittleReceived";
    readonly inputs: readonly [{
        readonly name: "minAmountOutReceived";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }, {
        readonly name: "amountReceived";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
}, {
    readonly type: "error";
    readonly name: "TooMuchRequested";
    readonly inputs: readonly [{
        readonly name: "maxAmountInRequested";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }, {
        readonly name: "amountRequested";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
}, {
    readonly type: "error";
    readonly name: "TransactionDeadlinePassed";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "UnsafeCast";
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
    readonly name: "V2InvalidPath";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "V2TooLittleReceived";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "V2TooMuchRequested";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "V3InvalidAmountOut";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "V3InvalidCaller";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "V3InvalidSwap";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "V3TooLittleReceived";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "V3TooMuchRequested";
    readonly inputs: readonly [];
}];
//# sourceMappingURL=UniversalRouter.d.ts.map