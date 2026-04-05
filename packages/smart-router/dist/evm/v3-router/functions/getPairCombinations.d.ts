import { Currency, Token } from '@pancakeswap/sdk';
export declare const getCheckAgainstBaseTokens: ((currencyA?: Currency, currencyB?: Currency) => Promise<Token[]>) & {
    cache: Map<any, Promise<Token[]>>;
};
export declare const getPairCombinations: ((currencyA?: Currency, currencyB?: Currency) => Promise<[Currency, Currency][]>) & {
    cache: Map<any, Promise<[Currency, Currency][]>>;
};
//# sourceMappingURL=getPairCombinations.d.ts.map