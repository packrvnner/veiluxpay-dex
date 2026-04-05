export declare const infinityCLTickLensAbi: readonly [{
    readonly type: "constructor";
    readonly inputs: readonly [{
        readonly name: "_poolManager";
        readonly type: "address";
        readonly internalType: "contract ICLPoolManager";
    }];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "getPopulatedTicksInWord";
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
        readonly name: "tickBitmapIndex";
        readonly type: "int16";
        readonly internalType: "int16";
    }];
    readonly outputs: readonly [{
        readonly name: "populatedTicks";
        readonly type: "tuple[]";
        readonly internalType: "struct ITickLens.PopulatedTick[]";
        readonly components: readonly [{
            readonly name: "tick";
            readonly type: "int24";
            readonly internalType: "int24";
        }, {
            readonly name: "liquidityNet";
            readonly type: "int128";
            readonly internalType: "int128";
        }, {
            readonly name: "liquidityGross";
            readonly type: "uint128";
            readonly internalType: "uint128";
        }];
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "getPopulatedTicksInWord";
    readonly inputs: readonly [{
        readonly name: "id";
        readonly type: "bytes32";
        readonly internalType: "PoolId";
    }, {
        readonly name: "tickBitmapIndex";
        readonly type: "int16";
        readonly internalType: "int16";
    }];
    readonly outputs: readonly [{
        readonly name: "populatedTicks";
        readonly type: "tuple[]";
        readonly internalType: "struct ITickLens.PopulatedTick[]";
        readonly components: readonly [{
            readonly name: "tick";
            readonly type: "int24";
            readonly internalType: "int24";
        }, {
            readonly name: "liquidityNet";
            readonly type: "int128";
            readonly internalType: "int128";
        }, {
            readonly name: "liquidityGross";
            readonly type: "uint128";
            readonly internalType: "uint128";
        }];
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "poolManager";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "address";
        readonly internalType: "contract ICLPoolManager";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "error";
    readonly name: "PoolNotInitialized";
    readonly inputs: readonly [];
}];
//# sourceMappingURL=IInfinityCLTickLens.d.ts.map