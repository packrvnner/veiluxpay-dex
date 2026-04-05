import { Currency } from '@pancakeswap/sdk';
import { Pair, StableSwapPair } from '../types';
export declare function involvesToken(pair: Pair, token: Currency): any;
export declare function includesPair(pairs: Pair[], pair: Pair): boolean;
export declare function isSamePair(one: Pair, another: Pair): any;
export declare function getOutputToken(pair: Pair, inputToken: Currency): any;
export declare function isStableSwapPair(pair: Pair): pair is StableSwapPair;
//# sourceMappingURL=pair.d.ts.map