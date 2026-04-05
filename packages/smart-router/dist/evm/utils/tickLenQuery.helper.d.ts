import { BigintIsh } from '@pancakeswap/swap-sdk-core';
import { Tick } from '@pancakeswap/v3-sdk';
import { InfinityClPool, OnChainProvider, V3Pool } from '../v3-router/types';
type WithMulticallGasLimit = {
    gasLimit?: BigintIsh;
};
type WithClientProvider = {
    clientProvider?: OnChainProvider;
};
export declare function getBitmapTickRange(bitmapIndex: number, tickSpacing: number): {
    minTick: number;
    maxTick: number;
};
export type FetchTickLenPoolsTickParams = {
    pools: (V3Pool | InfinityClPool)[];
    disableFilterNoTicks?: boolean;
} & WithClientProvider & WithMulticallGasLimit;
export declare function fetchTickLenPoolsTick({ pools, clientProvider, gasLimit, disableFilterNoTicks, }: FetchTickLenPoolsTickParams): Promise<Record<string, Tick[]>>;
export {};
//# sourceMappingURL=tickLenQuery.helper.d.ts.map