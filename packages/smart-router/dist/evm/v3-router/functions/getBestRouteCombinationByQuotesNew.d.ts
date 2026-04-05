import { Currency, CurrencyAmount, TradeType } from '@pancakeswap/sdk';
import { BestRoutes, RouteWithQuote } from '../types';
interface Config {
    minSplits?: number;
    maxSplits?: number;
}
export declare function getBestRouteCombinationByQuotesNew(amount: CurrencyAmount<Currency>, quoteCurrency: Currency, routesWithQuote: RouteWithQuote[], tradeType: TradeType, config: Config, quoteId?: string): BestRoutes | null;
export {};
//# sourceMappingURL=getBestRouteCombinationByQuotesNew.d.ts.map