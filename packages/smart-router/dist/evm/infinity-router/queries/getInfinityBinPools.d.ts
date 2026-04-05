import { BigintIsh, Currency } from '@pancakeswap/swap-sdk-core';
import { InfinityBinPool, OnChainProvider } from '../../v3-router/types';
import { GetInfinityCandidatePoolsParams } from '../types';
type WithMulticallGasLimit = {
    gasLimit?: BigintIsh;
};
type WithClientProvider = {
    clientProvider?: OnChainProvider;
};
export declare function getInfinityBinCandidatePools({ currencyA, currencyB, clientProvider, gasLimit, }: GetInfinityCandidatePoolsParams): Promise<InfinityBinPool[]>;
export declare function getInfinityBinCandidatePoolsWithoutBins({ currencyA, currencyB, clientProvider, }: Omit<GetInfinityCandidatePoolsParams, 'gasLimit'>): Promise<InfinityBinPool[]>;
export declare const getInfinityBinPoolsWithoutBins: (pairs: [Currency, Currency][], provider?: OnChainProvider, _blockNumber?: BigintIsh) => Promise<InfinityBinPool[]>;
type FillPoolsWithBinsParams = {
    pools: InfinityBinPool[];
    priceRange?: number;
} & WithClientProvider & WithMulticallGasLimit;
export declare function fillPoolsWithBins({ pools, clientProvider, gasLimit, priceRange, }: FillPoolsWithBinsParams): Promise<InfinityBinPool[]>;
export {};
//# sourceMappingURL=getInfinityBinPools.d.ts.map