import { Percent, TradeType } from '@pancakeswap/swap-sdk-core';
import { Trade, Route } from '../types';
export declare function getPriceImpact(trade: Pick<Trade<TradeType>, 'outputAmount' | 'routes'> & {
    routes: Pick<Route, 'path' | 'pools'>[];
}): Percent;
export declare function getMidPrice({ path, pools }: Pick<Route, 'path' | 'pools'>): any;
//# sourceMappingURL=getPriceImpact.d.ts.map