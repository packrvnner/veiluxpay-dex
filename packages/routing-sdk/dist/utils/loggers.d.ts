import { Currency, CurrencyAmount, TradeType } from '@pancakeswap/swap-sdk-core';
import { Pool, Route, TradeWithGraph } from '../types';
export declare const logPools: (quoteId: string | undefined, pools: Pool[]) => void;
export declare const logAmts: (quoteId: string | undefined, amts: {
    amount: CurrencyAmount<Currency>;
    percent: number;
}[]) => void;
export declare const logRouteForSplit: (quoteId: string | undefined, route: Route, amount: string, percent: string) => void;
export declare const logTrade: (quoteId: string | undefined, trade?: TradeWithGraph<TradeType>) => void;
//# sourceMappingURL=loggers.d.ts.map