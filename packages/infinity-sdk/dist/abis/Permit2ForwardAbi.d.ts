export declare const Permit2ForwardAbi: readonly [{
    readonly type: "constructor";
    readonly inputs: readonly [{
        readonly name: "_permit2";
        readonly type: "address";
        readonly internalType: "contract IAllowanceTransfer";
    }];
    readonly stateMutability: "nonpayable";
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
}];
//# sourceMappingURL=Permit2ForwardAbi.d.ts.map