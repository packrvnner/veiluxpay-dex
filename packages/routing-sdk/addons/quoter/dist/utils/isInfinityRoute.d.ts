import type { Pool } from '@pancakeswap/routing-sdk';
import { InfinityBinPool, InfinityCLPool, InfinityStablePool } from '@pancakeswap/routing-sdk-addon-infinity';
type Route<P extends Pool = Pool> = {
    pools: P[];
};
export declare function isInfinityCLRoute(r: Route<Pool>): r is Route<InfinityCLPool>;
export declare function isInfinityBinRoute(r: Route<Pool>): r is Route<InfinityBinPool>;
export declare function isInfinityStableRoute(r: Route<Pool>): r is Route<InfinityStablePool>;
export {};
//# sourceMappingURL=isInfinityRoute.d.ts.map