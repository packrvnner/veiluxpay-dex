import { ChainId } from '@pancakeswap/chains';
import { BigintIsh } from '@pancakeswap/sdk';
import { PublicClient } from 'viem';
export type GetGasLimitParams = {
    chainId: ChainId;
    client?: PublicClient;
    gasLimit?: BigintIsh;
    maxGasLimit?: BigintIsh;
    gasBuffer?: BigintIsh;
    account?: `0x${string}`;
};
export declare function getDefaultGasLimit(chainId?: ChainId): bigint;
export declare function getDefaultGasBuffer(chainId?: ChainId): bigint;
export type GetGasLimitOnChainParams = Pick<GetGasLimitParams, 'chainId' | 'client'>;
export declare function getGasLimitOnChain({ chainId, client }: GetGasLimitOnChainParams): Promise<bigint>;
export declare function getGasLimit({ chainId, gasLimit: gasLimitInput, maxGasLimit: maxGasLimitInput, gasBuffer: gasBufferInput, client, }: GetGasLimitParams): Promise<bigint>;
//# sourceMappingURL=getGasLimit.d.ts.map