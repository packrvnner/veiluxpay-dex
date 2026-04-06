import { Address, PublicClient } from 'viem';
export declare const feeOnTransferDetectorAddresses: {
    readonly 1: "0xe9200516a475b9e6FD4D1c452858097F345A6760";
    readonly 11155111: "0xD8b14F915b1b4b1c4EE4bF8321Bea018E72E5cf3";
    readonly 56: "0x003BD52f589F23346E03fA431209C29cD599d693";
    readonly 97: "0xE83BD854c1fBf54424b4d914163BF855aB1131Aa";
    readonly 42161: "0xD8b14F915b1b4b1c4EE4bF8321Bea018E72E5cf3";
    readonly 421614: "0xD8b14F915b1b4b1c4EE4bF8321Bea018E72E5cf3";
    readonly 8453: "0xD8b14F915b1b4b1c4EE4bF8321Bea018E72E5cf3";
    readonly 84532: "0xD8b14F915b1b4b1c4EE4bF8321Bea018E72E5cf3";
    readonly 324: "0xED87D01674199355CEfC05648d17E037306d7962";
    readonly 280: "0x869505373d830104130F95c1E7d578dE7E58C0a8";
    readonly 59144: "0xD8b14F915b1b4b1c4EE4bF8321Bea018E72E5cf3";
    readonly 59140: "0x3412378f17B1b44E8bcFD157EcE1a4f59DA5A77a";
};
export declare function fetchTokenFeeOnTransfer<TPublicClient extends PublicClient>(publicClient: TPublicClient, tokenAddress: Address): Promise<{
    result: {
        buyFeeBps: bigint;
        sellFeeBps: bigint;
    };
}>;
export declare function fetchTokenFeeOnTransferBatch<TPublicClient extends PublicClient>(publicClient: TPublicClient, tokens: {
    address: Address;
}[]): Promise<Array<{
    error?: Error;
    result?: {
        buyFeeBps: bigint;
        sellFeeBps: bigint;
    };
    status: 'success' | 'failure';
}>>;
//# sourceMappingURL=fot.d.ts.map