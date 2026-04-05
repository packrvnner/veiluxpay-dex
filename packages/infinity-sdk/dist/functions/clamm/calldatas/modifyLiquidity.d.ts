import { Hex } from 'viem';
import { Bytes32, PoolKey } from '../../../types';
export type CLPoolModifyLiquidityParams = {
    tickLower: number;
    tickUpper: number;
    liquidityDelta: bigint;
    salt: Bytes32;
};
export declare const encodeCLPoolModifyLiquidityCalldata: (poolKey: PoolKey<"CL">, params: CLPoolModifyLiquidityParams, hookData?: Hex) => `0x${string}`;
//# sourceMappingURL=modifyLiquidity.d.ts.map