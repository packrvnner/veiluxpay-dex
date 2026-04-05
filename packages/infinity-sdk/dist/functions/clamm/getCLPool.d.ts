import { GetPoolPrams, InfinityPoolState } from '../getPool';
export interface InfinityCLPoolState extends InfinityPoolState {
    poolType: 'CL';
}
export declare const getCLPool: ({ currencyA, currencyB, fee, sqrtRatioX96, liquidity, tickCurrent, tickSpacing, ticks, }: Omit<GetPoolPrams, "poolType">) => InfinityPoolState;
//# sourceMappingURL=getCLPool.d.ts.map