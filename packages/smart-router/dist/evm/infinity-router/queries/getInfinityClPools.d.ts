import { BigintIsh, Currency } from '@pancakeswap/swap-sdk-core';
import { Address, Hex } from 'viem';
import { PoolMeta } from '../../v3-router/providers/poolProviders/internalTypes';
import { InfinityClPool, OnChainProvider } from '../../v3-router/types';
import { GetInfinityCandidatePoolsParams } from '../types';
type WithMulticallGasLimit = {
    gasLimit?: BigintIsh;
};
type WithClientProvider = {
    clientProvider?: OnChainProvider;
};
export declare function getInfinityClCandidatePools({ currencyA, currencyB, clientProvider, gasLimit, }: GetInfinityCandidatePoolsParams): Promise<InfinityClPool[]>;
export declare function getInfinityClCandidatePoolsWithoutTicks({ currencyA, currencyB, clientProvider, }: Omit<GetInfinityCandidatePoolsParams, 'gasLimit'>): Promise<InfinityClPool[]>;
export type InfinityClPoolMeta = PoolMeta & {
    fee: number;
    protocolFee?: number;
    poolManager: Address;
    tickSpacing: number;
    hooks: Address;
    hooksRegistrationBitmap?: Hex | number;
};
export declare const getInfinityClPoolsWithoutTicks: (pairs: [Currency, Currency][], provider?: OnChainProvider, _blockNumber?: BigintIsh) => Promise<InfinityClPool[]>;
type FillPoolsWithTicksParams = {
    pools: InfinityClPool[];
} & WithClientProvider & WithMulticallGasLimit;
export declare function fillClPoolsWithTicks({ pools, clientProvider, gasLimit, }: FillPoolsWithTicksParams): Promise<InfinityClPool[]>;
export {};
//# sourceMappingURL=getInfinityClPools.d.ts.map