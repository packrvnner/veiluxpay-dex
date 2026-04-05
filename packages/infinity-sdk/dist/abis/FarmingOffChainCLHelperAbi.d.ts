export declare const FARMING_OFFCHAIN_CL_HELPER_ABI: readonly [{
    readonly type: "function";
    readonly name: "getLPFees";
    readonly inputs: readonly [{
        readonly name: "poolManager";
        readonly type: "address";
        readonly internalType: "contract ICLPoolManager";
    }, {
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
        readonly name: "feesOwed0";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }, {
        readonly name: "feesOwed1";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly stateMutability: "view";
}];
//# sourceMappingURL=FarmingOffChainCLHelperAbi.d.ts.map