import { BaseRoute } from '@pancakeswap/routing-sdk';
import { Address } from 'viem';
import { InfinitySupportedPool } from '../types';
export type PathKey = {
    intermediateCurrency: Address;
    fee: number;
    hooks: Address;
    poolManager: Address;
    hookData: `0x${string}`;
    parameters: `0x${string}`;
};
/**
 * Converts a route to an array of path key
 * @param route the mixed path to convert to an encoded path
 * @returns the encoded path keys
 */
export declare function encodeInfinityRouteToPath<P extends InfinitySupportedPool = InfinitySupportedPool>(route: Omit<BaseRoute<P>, 'percent' | 'inputAmount' | 'outputAmount' | 'gasUseEstimate'>, exactOutput: boolean): PathKey[];
//# sourceMappingURL=encodeInfinityRouteToPath.d.ts.map