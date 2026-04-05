import type { Pool } from '@pancakeswap/routing-sdk';
import { SupportedPool, V3SupportedPool } from '../types';
type Route<P extends Pool = Pool> = {
    pools: P[];
};
export declare function isMixedRoute(r: Route<Pool>): r is Route<V3SupportedPool>;
export declare function isInfinityMixedRoute(r: Route<Pool>): r is Route<SupportedPool>;
export {};
//# sourceMappingURL=isMixedRoute.d.ts.map