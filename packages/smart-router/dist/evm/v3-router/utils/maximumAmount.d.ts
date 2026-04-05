import { Percent, TradeType } from '@pancakeswap/sdk';
import { SmartRouterTrade } from '../types';
export declare function maximumAmountIn(trade: Pick<SmartRouterTrade<TradeType>, 'inputAmount' | 'tradeType'>, slippage: Percent, amountIn?: CurrencyAmount<Currency>): any;
export declare function minimumAmountOut(trade: Pick<SmartRouterTrade<TradeType>, 'outputAmount' | 'tradeType'>, slippage: Percent, amountOut?: CurrencyAmount<Currency>): any;
//# sourceMappingURL=maximumAmount.d.ts.map