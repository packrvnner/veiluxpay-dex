import { BaseRoute } from '@pancakeswap/routing-sdk';
import { Address } from 'viem';
import { SupportedPool } from '../types';
/**
 * Converts a route to an array of path key
 * @param route the mixed path to convert to an encoded path
 * @returns the encoded path keys
 */
export declare function encodeInfinityMixedRouteCurrencyPath(route: Omit<BaseRoute<SupportedPool>, 'percent' | 'inputAmount' | 'outputAmount' | 'gasUseEstimate'>): Address[];
//# sourceMappingURL=encodeInfinityMixedRouteCurrencyPath.d.ts.map