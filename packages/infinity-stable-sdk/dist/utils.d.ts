import { ChainId, Currency } from '@pancakeswap/sdk';
import { Address } from 'viem';
/**
 * Validates that a currency is a valid token
 */
export declare function validateCurrency(currency: Currency): void;
/**
 * Validates that two currencies are different and valid
 */
export declare function validateCurrencyPair(tokenA: Currency, tokenB: Currency): void;
/**
 * Sorts two currencies and returns them in deterministic order
 * This ensures consistent pool creation regardless of input order
 */
export declare function sortCurrencies(tokenA: Currency, tokenB: Currency): [Currency, Currency];
/**
 * Gets the sorted token addresses from two currencies
 */
export declare function getSortedTokenAddresses(tokenA: Currency, tokenB: Currency): [Address, Address];
/**
 * Generates a pool name from two currencies
 */
export declare function generatePoolName(tokenA: Currency, tokenB: Currency): string;
/**
 * Generates a pool symbol from two currencies
 */
export declare function generatePoolSymbol(tokenA: Currency, tokenB: Currency): string;
/**
 * Validates that a fee is within acceptable bounds
 */
export declare function validateFee(fee: bigint): void;
/**
 * Validates that an amplification parameter is within acceptable bounds
 */
export declare function validateAmplification(A: bigint): void;
/**
 * Converts a decimal percentage (0-1 range) to fee format
 * Example: 0.00000001 -> 1n (minimum unit)
 * Uses Math.round for better precision with small values
 */
export declare function percentageToFee(percentage: number): bigint;
/**
 * Converts fee format to decimal percentage (0-1 range)
 * Example: 1n -> 0.00000001
 */
export declare function feeToPercentage(fee: bigint): number;
export declare function getPoolIdFromReceipt(receipt?: {
    logs: {
        topics: string[];
    }[];
}): string | undefined;
export declare function getHookAddressFromReceipt(receipt?: {
    logs: {
        data?: string;
    }[];
}): Address | undefined;
export declare function isInfinityStableSupported(chainId: ChainId): boolean;
//# sourceMappingURL=utils.d.ts.map