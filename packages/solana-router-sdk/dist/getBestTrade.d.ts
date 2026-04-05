import { SPLToken, TradeType, UnifiedCurrencyAmount } from '@pancakeswap/sdk';
import { PublicKey } from '@solana/web3.js';
interface BestSolanaTradeParams {
    inputCurrency: SPLToken;
    outputCurrency: SPLToken;
    amount: UnifiedCurrencyAmount<SPLToken>;
    account?: string;
    slippageBps?: number;
    tradeType: TradeType;
    excludeRouters?: string;
    excludeDexes?: string;
    priorityFeeLamports?: number;
    signal?: AbortSignal;
}
export interface RouterPlan {
    swapInfo: {
        inputMint: string;
        inAmount: string;
        outputMint: string;
        outAmount: string;
        ammKey: PublicKey;
        label: string;
        feeAmount?: string;
        feeMint?: PublicKey;
    };
    bps?: number;
    percent: number;
}
export interface SolRouterTrade {
    tradeType: TradeType;
    inputAmount: UnifiedCurrencyAmount<SPLToken>;
    outputAmount: UnifiedCurrencyAmount<SPLToken>;
    routes: RouterPlan[];
    requestId: string;
    otherAmountThreshold: string;
    priceImpactPct: string;
    slippageBps: number;
    transaction: string | null;
}
export declare const getBestSolanaTrade: ({ inputCurrency, outputCurrency, tradeType, amount, account, slippageBps, priorityFeeLamports, signal, }: BestSolanaTradeParams) => Promise<SolRouterTrade>;
export {};
//# sourceMappingURL=getBestTrade.d.ts.map