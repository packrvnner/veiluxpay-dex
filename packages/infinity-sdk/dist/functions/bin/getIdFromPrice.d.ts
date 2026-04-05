import { Currency, Price } from '@pancakeswap/swap-sdk-core';
/**
 * Returns the price of bin given its id and the bin step
 */
export declare const getIdFromPrice: (price: number, binStep: number) => number;
export declare const getIdFromCurrencyPrice: (price: Price<Currency, Currency>, binStep: number) => number;
/**
 * @deprecated
 */
export declare const getIdFromInvertedPrice: (price: number, binStep: number) => number;
//# sourceMappingURL=getIdFromPrice.d.ts.map