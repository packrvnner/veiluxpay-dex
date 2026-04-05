import { Currency, Trade, TradeType } from '@pancakeswap/sdk';
import { BestTradeOptions, StableSwapPair } from './types';
export declare function getBestTradeWithStableSwap(baseTrade: Trade<Currency, Currency, TradeType>, stableSwapPairs: StableSwapPair[], options: BestTradeOptions): Promise<{
    tradeType: TradeType;
    inputAmount: CurrencyAmount<TInput>;
    outputAmount: CurrencyAmount<TOutput>;
    route: import("./types").RouteWithStableSwap<any, any>;
}>;
//# sourceMappingURL=getBestTradeWithStableSwap.d.ts.map