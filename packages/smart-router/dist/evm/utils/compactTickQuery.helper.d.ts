import { Tick } from '@pancakeswap/v3-sdk';
import { Hex } from 'viem';
import { BigintIsh } from '@pancakeswap/swap-sdk-core';
import { InfinityClPool, OnChainProvider, V3Pool } from '../v3-router/types';
/**
 * Decide `len` parameter for compact tick queries.
 *
 * @param priceRangeBps Desired price coverage in basis points (default: 500 bps = ±5%)
 * @param tickSpacing The pool’s tickSpacing
 * @param maxLen Hard cap to avoid blowing gas (default: 1000)
 * @returns len for queryCompactTicks
 */
export declare function decideCompactTickLen(priceRangeBps: number, tickSpacing: number, maxLen?: bigint): bigint;
export declare function decodeTicksFromBytes(data: Hex): Tick[];
type WithMulticallGasLimit = {
    gasLimit?: BigintIsh;
};
type WithClientProvider = {
    clientProvider?: OnChainProvider;
};
export declare function getCompactTickQueryCalldata(pool: V3Pool | InfinityClPool, len: bigint): `0x${string}`;
export declare function decodeCompactTickResult(result: Hex, pool: V3Pool | InfinityClPool): Tick[];
export declare function getTickSpacing(pool: V3Pool | InfinityClPool): number;
export declare function fetchCompactPoolsTick({ pools, clientProvider, gasLimit, }: {
    pools: (V3Pool | InfinityClPool)[];
} & WithClientProvider & WithMulticallGasLimit): Promise<Record<string, Tick[]>>;
export declare function formatGas(gasUnits: bigint): string;
export {};
//# sourceMappingURL=compactTickQuery.helper.d.ts.map