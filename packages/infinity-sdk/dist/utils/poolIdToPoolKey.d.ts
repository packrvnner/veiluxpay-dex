import { Address, Hex, PublicClient } from 'viem';
import { POOL_TYPE, PoolKey, PoolType } from '../types';
export declare const parsePoolKey: <T extends PoolType = "CL" | "Bin">(poolType: T, currency0: Address, currency1: Address, hooks: Address, poolManager: Address, fee: number, parameters: Address) => PoolKey<T>;
export declare const poolIdToPoolKey: <TPoolType extends PoolType = "CL" | "Bin">({ poolId, poolType, publicClient, }: {
    poolId: Hex | undefined;
    poolType?: TPoolType | undefined;
    publicClient: PublicClient | undefined;
}) => Promise<PoolKey<TPoolType> | undefined>;
export declare const binPoolIdToPoolKey: ({ poolId, publicClient, }: {
    poolId: Hex | undefined;
    publicClient: PublicClient | undefined;
}) => Promise<PoolKey<POOL_TYPE.Bin> | undefined>;
export declare const clPoolIdToPoolKey: ({ poolId, publicClient, }: {
    poolId: Hex | undefined;
    publicClient: PublicClient | undefined;
}) => Promise<PoolKey<POOL_TYPE.CLAMM> | undefined>;
//# sourceMappingURL=poolIdToPoolKey.d.ts.map