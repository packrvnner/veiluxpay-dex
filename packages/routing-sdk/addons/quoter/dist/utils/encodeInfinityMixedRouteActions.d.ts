import { BaseRoute } from '@pancakeswap/routing-sdk';
import { Hex } from 'viem';
import { SupportedPool } from '../types';
export declare function encodeInfinityMixedRouteActions(route: Omit<BaseRoute<SupportedPool>, 'percent' | 'inputAmount' | 'outputAmount' | 'gasUseEstimate'>): Hex;
//# sourceMappingURL=encodeInfinityMixedRouteActions.d.ts.map