import { BigintIsh } from '@pancakeswap/swap-sdk-core';
import { Tick } from '@pancakeswap/v3-sdk';
import { OnChainProvider, V3Pool, InfinityClPool } from '../v3-router/types';
type WithMulticallGasLimit = {
    gasLimit?: BigintIsh;
};
type WithClientProvider = {
    clientProvider?: OnChainProvider;
};
export type CombinedTickQueryParams = {
    pools: (V3Pool | InfinityClPool)[];
    disableFilterNoTicks?: boolean;
} & WithClientProvider & WithMulticallGasLimit;
/**
 * Combined tick query that tries tickLen first as the default query, then falls back to compact ticks
 * only when tickLen fails to find ticks for the pool. This provides comprehensive tick coverage
 * by using the more reliable tickLens approach first and falling back to compact ticks when needed.
 */
export declare function fetchCombinedPoolsTick({ pools, clientProvider, gasLimit, disableFilterNoTicks, }: CombinedTickQueryParams): Promise<Record<string, Tick[]>>;
export {};
//# sourceMappingURL=combinedTickQuery.helper.d.ts.map