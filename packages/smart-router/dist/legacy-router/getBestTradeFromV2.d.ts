import { Currency, CurrencyAmount, TradeType } from '@pancakeswap/sdk';
import { BestTradeOptions } from './types';
export declare const getBestTradeFromV2ExactIn: <In extends Currency, Out extends Currency>(amountIn: CurrencyAmount<In>, output: Out, options: BestTradeOptions) => Promise<any>;
export declare const getBestTradeFromV2ExactOut: <In extends Currency, Out extends Currency>(amountIn: CurrencyAmount<In>, output: Out, options: BestTradeOptions) => Promise<any>;
export declare function getBestTradeFromV2<TInput extends Currency, TOutput extends Currency, TTradeType extends TradeType>(amountIn: CurrencyAmount<TInput>, output: TOutput, tradeType: TTradeType, options: BestTradeOptions): Promise<any>;
//# sourceMappingURL=getBestTradeFromV2.d.ts.map