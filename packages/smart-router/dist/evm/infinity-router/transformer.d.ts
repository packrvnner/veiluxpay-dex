import { ChainId } from '@pancakeswap/chains';
import { TradeType } from '@pancakeswap/swap-sdk-core';
import { SerializedCurrency, SerializedCurrencyAmount, SerializedPool } from '../v3-router/utils/transformer';
import { InfinityRoute, InfinityTrade } from './types';
export type SerializedGasUseInfo = {
    gasUseEstimate: string;
    gasUseEstimateBase: SerializedCurrencyAmount;
    gasUseEstimateQuote: SerializedCurrencyAmount;
    inputAmountWithGasAdjusted: SerializedCurrencyAmount;
    outputAmountWithGasAdjusted: SerializedCurrencyAmount;
};
export type SerializedInfinityRoute = Omit<InfinityRoute, 'pools' | 'path' | 'input' | 'output' | 'inputAmount' | 'outputAmount' | 'gasUseEstimate' | 'gasUseEstimateBase' | 'gasUseEstimateQuote' | 'inputAmountWithGasAdjusted' | 'outputAmountWithGasAdjusted'> & SerializedGasUseInfo & {
    pools: SerializedPool[];
    path: SerializedCurrency[];
    inputAmount: SerializedCurrencyAmount;
    outputAmount: SerializedCurrencyAmount;
};
export type SerializedInfinityTrade = Omit<InfinityTrade<TradeType>, 'inputAmount' | 'outputAmount' | 'gasUseEstimate' | 'gasUseEstimateBase' | 'gasUseEstimateQuote' | 'routes' | 'graph' | 'inputAmountWithGasAdjusted' | 'outputAmountWithGasAdjusted'> & SerializedGasUseInfo & {
    inputAmount: SerializedCurrencyAmount;
    outputAmount: SerializedCurrencyAmount;
    routes: SerializedInfinityRoute[];
};
export declare function serializeRoute(route: InfinityRoute): SerializedInfinityRoute;
export declare function parseRoute(chainId: ChainId, route: SerializedInfinityRoute): InfinityRoute;
type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;
export declare function serializeTrade(trade: Optional<InfinityTrade<TradeType>, 'graph'>): SerializedInfinityTrade;
export declare function parseTrade<tradeType extends TradeType = TradeType>(chainId: ChainId, trade: SerializedInfinityTrade): Omit<InfinityTrade<tradeType>, 'graph'>;
export {};
//# sourceMappingURL=transformer.d.ts.map