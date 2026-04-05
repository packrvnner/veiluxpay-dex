import { Currency } from '@pancakeswap/sdk';
import { BaseRoute, Pool, Route, RouteType } from '../types';
export declare function buildBaseRoute(pools: Pool[], currencyIn: Currency, currencyOut: Currency): BaseRoute;
export declare function getRouteTypeByPools(pools: Pick<Pool, 'type'>[]): RouteType;
export declare function getQuoteCurrency({ input, output }: BaseRoute, baseCurrency: Currency): any;
export declare function getMidPrice({ path, pools }: Pick<Route, 'path' | 'pools'>): any;
//# sourceMappingURL=route.d.ts.map