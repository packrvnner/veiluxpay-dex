import { Currency, Price } from '@pancakeswap/sdk';
import { computePoolAddress } from '@pancakeswap/v3-sdk';
import { Address } from 'viem';
import { InfinityBinPool, InfinityClPool, InfinityStablePool, Pool, StablePool, V2Pool, V3Pool } from '../types';
export declare function isV2Pool(pool: Pool): pool is V2Pool;
export declare function isV3Pool(pool: Pool): pool is V3Pool;
export declare function isStablePool(pool: Pool): pool is StablePool;
export declare function isInfinityBinPool(pool: Pool): pool is InfinityBinPool;
export declare function isInfinityClPool(pool: Pool): pool is InfinityClPool;
export declare function isInfinityStablePool(pool: Pool): pool is InfinityStablePool;
export declare function involvesCurrency(pool: Pool, currency: Currency): any;
export declare function getOutputCurrency(pool: Pool, currencyIn: Currency): Currency;
export declare const computeV3PoolAddress: typeof computePoolAddress & {
    cache: Map<any, `0x${string}`>;
};
export declare const computeV2PoolAddress: any;
export declare const getPoolAddress: (pool: Pool) => Address | "";
export declare const getPoolCurrency0: (pool: Pool) => Currency;
export declare const getPoolCurrency1: (pool: Pool) => Currency;
export declare function getTokenPrice(pool: Pool, base: Currency, quote: Currency): Price<Currency, Currency>;
/**
 * Convert InfinityStable pools (hook-based) into StableSwap-style pools.
 * This function is used to display InfinityStable Pool in UI.
 * Why we don't return StablePool-like candidated pools instead of InfinityStablePool?
 * Because we want to keep Swap flow compatiable with CLInfinityPool.
 */
export declare function convertInfinityStablePoolToStablePool(pool: InfinityStablePool): StablePool;
//# sourceMappingURL=pool.d.ts.map