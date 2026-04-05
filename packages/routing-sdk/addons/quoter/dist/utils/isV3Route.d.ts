import type { Pool } from '@pancakeswap/routing-sdk';
import { V3Pool } from '@pancakeswap/routing-sdk-addon-v3';
type Route<P extends Pool = Pool> = {
    pools: P[];
};
export declare function isV3Route(r: Route): r is Route<V3Pool>;
export {};
//# sourceMappingURL=isV3Route.d.ts.map