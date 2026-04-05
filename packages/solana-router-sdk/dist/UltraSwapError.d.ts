export declare enum UltraSwapErrorType {
    REJECTED = "REJECTED",
    FAILED = "FAILED",
    WALLET_SIGNING_FAILED = "WALLET_SIGNING_FAILED"
}
export declare class UltraSwapError extends Error {
    type: UltraSwapErrorType;
    txid?: string;
    constructor(message: string, type: UltraSwapErrorType, txid?: string);
}
//# sourceMappingURL=UltraSwapError.d.ts.map