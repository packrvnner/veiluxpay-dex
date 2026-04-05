import { BalanceResponse, RouterResponse, UltraQuoteResponse, UltraSwapQuoteParams, UltraSwapResponse } from './types';
export declare enum Severity {
    INFO = "info",
    WARNING = "warning",
    CRITICAL = "critical"
}
export type Warning = {
    type: string;
    message: string;
    severity: Severity;
};
export interface ShieldResponse {
    warnings: {
        [mintAddress: string]: Warning[];
    };
}
interface IUltraSwapService {
    getQuote(params: UltraSwapQuoteParams): Promise<UltraQuoteResponse>;
    submitSwap(signedTransaction: string, requestId: string): Promise<UltraSwapResponse>;
}
declare class UltraSwapService implements IUltraSwapService {
    private BASE_URL;
    private ROUTE;
    getQuote(params: UltraSwapQuoteParams, signal?: AbortSignal): Promise<UltraQuoteResponse>;
    submitSwap(signedTransaction: string, requestId: string): Promise<UltraSwapResponse>;
    getRouters(): Promise<RouterResponse>;
    getBalance(address: string, signal?: AbortSignal): Promise<BalanceResponse>;
    getShield(mintAddress: string[]): Promise<ShieldResponse>;
}
export declare const ultraSwapService: UltraSwapService;
export {};
//# sourceMappingURL=UltraSwapService.d.ts.map