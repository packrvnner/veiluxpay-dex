import { TradeType } from '@pancakeswap/sdk';
import { SmartRouterTrade } from '@pancakeswap/smart-router';
import { PancakeSwapOptions, SwapTradeContext } from '../types';
export declare const parseSwapTradeContext: (trade: Omit<SmartRouterTrade<TradeType>, "gasEstimate">, options: PancakeSwapOptions) => SwapTradeContext;
//# sourceMappingURL=parseSwapTradeContext.d.ts.map