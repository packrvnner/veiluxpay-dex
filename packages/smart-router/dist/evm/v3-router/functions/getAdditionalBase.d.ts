import { ChainId } from '@pancakeswap/chains';
import { Token } from '@pancakeswap/swap-sdk-core';
import { Address } from 'viem';
type TokenBases = {
    [tokenAddress: Address]: Token[];
};
export declare function getAdditionalBases(chainId?: ChainId): Promise<TokenBases>;
export {};
//# sourceMappingURL=getAdditionalBase.d.ts.map