import { Currency, Price } from '@pancakeswap/swap-sdk-core';
import { BinPoolState } from './createBinPool';
export declare function getBinPoolTokenPrice(pool: Pick<BinPoolState, 'currencyX' | 'currencyY' | 'activeId' | 'binStep'>, base: Currency): Price<Currency, Currency>;
//# sourceMappingURL=getBinPoolTokenPrice.d.ts.map