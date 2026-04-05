import { PublicKey } from '@solana/web3.js';
import { Infer } from 'superstruct';
export declare const FormattedUltraQuoteResponse: import("superstruct").Struct<{
    inputMint: PublicKey;
    outputMint: PublicKey;
    inAmount: string;
    outAmount: string;
    otherAmountThreshold: string;
    priceImpact: number;
    routePlan: {
        swapInfo: {
            ammKey: PublicKey;
            label: string;
            inputMint: string;
            outputMint: string;
            inAmount: string;
            outAmount: string;
            feeAmount?: string | undefined;
            feeMint?: PublicKey | undefined;
        };
        percent: number;
        bps?: number | undefined;
    }[];
    slippageBps: number;
    contextSlot: number;
    transaction: string | null;
    swapType: string;
    gasless: boolean;
    requestId: string;
    feeBps: number;
    router: string;
    computedAutoSlippage?: number | undefined;
    prioritizationFeeLamports?: number | undefined;
}, {
    inputMint: import("superstruct").Struct<PublicKey, null>;
    inAmount: import("superstruct").Struct<string, null>;
    outputMint: import("superstruct").Struct<PublicKey, null>;
    outAmount: import("superstruct").Struct<string, null>;
    otherAmountThreshold: import("superstruct").Struct<string, null>;
    priceImpact: import("superstruct").Struct<number, null>;
    routePlan: import("superstruct").Struct<{
        swapInfo: {
            ammKey: PublicKey;
            label: string;
            inputMint: string;
            outputMint: string;
            inAmount: string;
            outAmount: string;
            feeAmount?: string | undefined;
            feeMint?: PublicKey | undefined;
        };
        percent: number;
        bps?: number | undefined;
    }[], import("superstruct").Struct<{
        swapInfo: {
            ammKey: PublicKey;
            label: string;
            inputMint: string;
            outputMint: string;
            inAmount: string;
            outAmount: string;
            feeAmount?: string | undefined;
            feeMint?: PublicKey | undefined;
        };
        percent: number;
        bps?: number | undefined;
    }, {
        swapInfo: import("superstruct").Struct<{
            ammKey: PublicKey;
            label: string;
            inputMint: string;
            outputMint: string;
            inAmount: string;
            outAmount: string;
            feeAmount?: string | undefined;
            feeMint?: PublicKey | undefined;
        }, {
            ammKey: import("superstruct").Struct<PublicKey, null>;
            label: import("superstruct").Struct<string, null>;
            inputMint: import("superstruct").Struct<string, null>;
            outputMint: import("superstruct").Struct<string, null>;
            inAmount: import("superstruct").Struct<string, null>;
            outAmount: import("superstruct").Struct<string, null>;
            feeAmount: import("superstruct").Struct<string | undefined, null>;
            feeMint: import("superstruct").Struct<PublicKey | undefined, null>;
        }>;
        percent: import("superstruct").Struct<number, null>;
        bps: import("superstruct").Struct<number | undefined, null>;
    }>>;
    slippageBps: import("superstruct").Struct<number, null>;
    contextSlot: import("superstruct").Struct<number, null>;
    computedAutoSlippage: import("superstruct").Struct<number | undefined, null>;
    transaction: import("superstruct").Struct<string | null, null>;
    swapType: import("superstruct").Struct<string, null>;
    gasless: import("superstruct").Struct<boolean, null>;
    requestId: import("superstruct").Struct<string, null>;
    prioritizationFeeLamports: import("superstruct").Struct<number | undefined, null>;
    feeBps: import("superstruct").Struct<number, null>;
    router: import("superstruct").Struct<string, null>;
}>;
export type FormattedUltraQuoteResponse = Infer<typeof FormattedUltraQuoteResponse>;
//# sourceMappingURL=FormattedUltraQuoteResponse.d.ts.map