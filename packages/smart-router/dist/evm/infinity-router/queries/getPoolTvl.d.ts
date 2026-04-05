import { InfinityBinPool, InfinityClPool } from '../../v3-router/types';
export interface InfinityPoolTvlReference extends Pick<InfinityClPool | InfinityBinPool, 'id'> {
    tvlUSD: bigint | string;
}
export type InfinityPoolTvlReferenceMap = Record<`0x${string}`, InfinityPoolTvlReference>;
export declare const getInfinityPoolTvl: (map: InfinityPoolTvlReferenceMap, poolId: `0x${string}`) => bigint;
//# sourceMappingURL=getPoolTvl.d.ts.map