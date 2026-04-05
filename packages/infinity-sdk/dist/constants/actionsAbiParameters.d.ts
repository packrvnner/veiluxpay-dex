import { AbiParameter, AbiParameterKind, AbiParameterToPrimitiveType, Prettify } from 'viem';
export declare const ACTIONS_ABI: {
    0: readonly [{
        readonly type: "uint256";
        readonly name: "tokenId";
    }, {
        readonly type: "uint128";
        readonly name: "liquidity";
    }, {
        readonly type: "uint128";
        readonly name: "amount0Max";
    }, {
        readonly type: "uint128";
        readonly name: "amount1Max";
    }, {
        readonly type: "bytes";
        readonly name: "hookData";
    }];
    1: readonly [{
        readonly type: "uint256";
        readonly name: "tokenId";
    }, {
        readonly type: "uint128";
        readonly name: "liquidity";
    }, {
        readonly type: "uint128";
        readonly name: "amount0Min";
    }, {
        readonly type: "uint128";
        readonly name: "amount1Min";
    }, {
        readonly type: "bytes";
        readonly name: "hookData";
    }];
    2: readonly [{
        readonly type: "PositionConfig";
        readonly name: "positionConfig";
    }, {
        readonly type: "uint128";
        readonly name: "liquidity";
    }, {
        readonly type: "uint128";
        readonly name: "amount0Max";
    }, {
        readonly type: "uint128";
        readonly name: "amount1Max";
    }, {
        readonly type: "address";
        readonly name: "owner";
    }, {
        readonly type: "bytes";
        readonly name: "hookData";
    }];
    3: readonly [{
        readonly type: "uint256";
        readonly name: "tokenId";
    }, {
        readonly type: "PositionConfig";
        readonly name: "config";
    }, {
        readonly type: "uint128";
        readonly name: "amount0Min";
    }, {
        readonly type: "uint128";
        readonly name: "amount1Min";
    }, {
        readonly type: "bytes";
        readonly name: "hookData";
    }];
    4: readonly [{
        readonly type: "uint256";
        readonly name: "tokenId";
    }, {
        readonly type: "uint128";
        readonly name: "amount0Max";
    }, {
        readonly type: "uint128";
        readonly name: "amount1Max";
    }, {
        readonly type: "bytes";
        readonly name: "hookData";
    }];
    5: readonly [{
        readonly type: "PoolKey";
        readonly name: "poolKey";
    }, {
        readonly type: "int24";
        readonly name: "tickLower";
    }, {
        readonly type: "int24";
        readonly name: "tickUpper";
    }, {
        readonly type: "uint128";
        readonly name: "amount0Max";
    }, {
        readonly type: "uint128";
        readonly name: "amount1Max";
    }, {
        readonly type: "address";
        readonly name: "owner";
    }, {
        readonly type: "bytes";
        readonly name: "hookData";
    }];
    6: readonly [{
        readonly type: "CLSwapExactInputSingleParams";
        readonly name: "params";
    }];
    7: readonly [{
        readonly type: "CLSwapExactInputParams";
        readonly name: "params";
    }];
    8: readonly [{
        readonly type: "CLSwapExactOutputSingleParams";
        readonly name: "params";
    }];
    9: readonly [{
        readonly type: "CLSwapExactOutputParams";
        readonly name: "params";
    }];
    11: readonly [{
        readonly type: "address";
        readonly name: "currency";
    }, {
        readonly type: "uint256";
        readonly name: "amount";
    }, {
        readonly type: "bool";
        readonly name: "payerIsUser";
    }];
    12: readonly [{
        readonly type: "address";
        readonly name: "currency";
    }, {
        readonly type: "uint256";
        readonly name: "maxAmount";
    }];
    13: readonly [{
        readonly type: "address";
        readonly name: "currency0";
    }, {
        readonly type: "address";
        readonly name: "currency1";
    }];
    14: readonly [{
        readonly type: "address";
        readonly name: "currency";
    }, {
        readonly type: "address";
        readonly name: "recipient";
    }, {
        readonly type: "uint256";
        readonly name: "amount";
    }];
    15: readonly [{
        readonly type: "address";
        readonly name: "currency";
    }, {
        readonly type: "uint256";
        readonly name: "minAmount";
    }];
    16: readonly [{
        readonly type: "address";
        readonly name: "currency";
    }, {
        readonly type: "address";
        readonly name: "recipient";
    }, {
        readonly type: "uint256";
        readonly name: "bips";
    }];
    17: readonly [{
        readonly type: "address";
        readonly name: "currency0";
    }, {
        readonly type: "address";
        readonly name: "currency1";
    }, {
        readonly type: "address";
        readonly name: "to";
    }];
    18: readonly [{
        readonly type: "address";
        readonly name: "currency";
    }];
    19: readonly [{
        readonly type: "address";
        readonly name: "currency";
    }, {
        readonly type: "uint256";
        readonly name: "amountMax";
    }];
    20: readonly [{
        readonly type: "address";
        readonly name: "currency";
    }, {
        readonly type: "address";
        readonly name: "to";
    }];
    21: readonly [{
        readonly type: "uint256";
        readonly name: "amount";
    }];
    22: readonly [{
        readonly type: "uint256";
        readonly name: "amount";
    }];
    25: readonly [{
        readonly type: "BinAddLiquidityParams";
        readonly name: "params";
    }];
    26: readonly [{
        readonly type: "BinRemoveLiquidityParams";
        readonly name: "params";
    }];
    27: readonly [{
        readonly type: "BinAddLiquidityFromDeltasParams";
        readonly name: "params";
    }];
    28: readonly [{
        readonly type: "BinSwapExactInputSingleParams";
        readonly name: "params";
    }];
    29: readonly [{
        readonly type: "BinSwapExactInputParams";
        readonly name: "params";
    }];
    30: readonly [{
        readonly type: "BinSwapExactOutputSingleParams";
        readonly name: "params";
    }];
    31: readonly [{
        readonly type: "BinSwapExactOutputParams";
        readonly name: "params";
    }];
};
type AbiParametersToPrimitiveTypes<TAbiParameters extends readonly AbiParameter[], TAbiParameterKind extends AbiParameterKind = AbiParameterKind> = Prettify<{
    [K in keyof TAbiParameters]: AbiParameterToPrimitiveType<TAbiParameters[K], TAbiParameterKind>;
}>;
export type InfinityABIType = typeof ACTIONS_ABI;
export type InfinityUsedAction = keyof InfinityABIType;
export type InfinityABIParametersToValuesType<TAction extends InfinityUsedAction> = AbiParametersToPrimitiveTypes<InfinityABIType[TAction]>;
export {};
//# sourceMappingURL=actionsAbiParameters.d.ts.map