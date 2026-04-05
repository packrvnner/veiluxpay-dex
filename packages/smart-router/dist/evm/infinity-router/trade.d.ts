import { Currency, CurrencyAmount, TradeType } from '@pancakeswap/sdk';
import { InfinityTrade, TradeConfig } from './types';
export declare function getBestTrade(amount: CurrencyAmount<Currency>, quoteCurrency: Currency, tradeType: TradeType, { candidatePools, gasPriceWei, maxHops, maxSplits }: TradeConfig): Promise<InfinityTrade<TradeType> | undefined>;
//# sourceMappingURL=trade.d.ts.map