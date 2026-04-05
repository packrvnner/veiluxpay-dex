export declare const cakeVaultV1ABI: readonly [{
    readonly inputs: readonly [];
    readonly name: "withdrawAll";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "getPricePerFullShare";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "";
        readonly type: "address";
    }];
    readonly name: "userInfo";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "shares";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "lastDepositedTime";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "cakeAtLastUserAction";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "lastUserActionTime";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "performanceFee";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}];
//# sourceMappingURL=ICakeVaultV1.d.ts.map