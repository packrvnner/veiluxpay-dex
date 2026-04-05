import { BaseRoute } from '@pancakeswap/routing-sdk';
import { Hex } from 'viem';
import { SupportedPool } from '../types';
export declare function encodeInfinityMixedRouteParams(route: Omit<BaseRoute<SupportedPool>, 'percent' | 'inputAmount' | 'outputAmount' | 'gasUseEstimate'>): Hex[];
//# sourceMappingURL=encodeInfinityMixedRouteParams.d.ts.map