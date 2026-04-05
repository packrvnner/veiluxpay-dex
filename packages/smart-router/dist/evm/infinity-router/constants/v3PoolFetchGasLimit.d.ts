import { ChainId } from '@pancakeswap/chains';
type V3PoolFetchConfig = {
    gasLimit: bigint;
    retryGasMultiplier: number;
};
export declare function getV3PoolFetchConfig(chainId: ChainId): V3PoolFetchConfig;
export declare function getInfinityPoolFetchConfig(chainId: ChainId): V3PoolFetchConfig;
export declare function getTickQueryFetchConfig(): V3PoolFetchConfig;
export declare function getTickLensFetchConfig(): V3PoolFetchConfig;
export {};
//# sourceMappingURL=v3PoolFetchGasLimit.d.ts.map