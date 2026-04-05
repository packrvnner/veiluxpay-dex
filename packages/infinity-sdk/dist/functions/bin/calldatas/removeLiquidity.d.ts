import { Address, Hex } from 'viem';
import { PoolKey } from '../../../types';
export type RemoveBinLiquidityParam = {
    poolKey: PoolKey<'Bin'>;
    amount0Min: bigint;
    amount1Min: bigint;
    ids: number[];
    amounts: bigint[];
    from: Address;
    hookData?: Hex;
    wrapAddress?: Address;
    recipient?: Address;
};
export declare const encodeBinPositionManagerRemoveLiquidityCalldata: (params: RemoveBinLiquidityParam, deadline: bigint) => `0x${string}`;
//# sourceMappingURL=removeLiquidity.d.ts.map