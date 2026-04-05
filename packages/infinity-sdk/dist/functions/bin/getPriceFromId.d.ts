import { Currency, Price } from '@pancakeswap/swap-sdk-core';
/**
 * Calculates the price from the given activeId and binStep
 *
 * @param activeId
 * @param binStep
 * @returns price: 128.128 fixed point number
 */
export declare const getPriceX128FromId: (activeId: bigint, binStep: bigint) => bigint;
export declare const getPriceFromId: (activeId: number, binStep: number) => number;
export declare const getCurrencyPriceFromId: (activeId: number, binStep: number, baseCurrency: Currency, quoteCurrency: Currency) => Price<Currency, Currency>;
export declare const getInvertedPriceFromId: (activeId: number, binStep: number) => number;
//# sourceMappingURL=getPriceFromId.d.ts.map