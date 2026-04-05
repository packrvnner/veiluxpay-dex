import { AbortControl } from '@pancakeswap/utils/abortControl';
import { GetGasLimitParams } from './getGasLimit';
import { MulticallRequestWithGas } from './types';
export type CallByGasLimitParams = AbortControl & GetGasLimitParams & {
    blockConflictTolerance?: number;
    dropUnexecutedCalls?: boolean;
    retryFailedCallsWithGreaterLimit?: {
        gasLimitMultiplier: number;
        maxRetry?: number;
    } | undefined;
};
export type MulticallByGasLimitResult = CallResult & {
    chunkCount: number;
    chunkSizes: number[];
    totalGasUsed: bigint;
    gasLimit: bigint;
    maxSingleCallGasUsage: bigint;
    minSingleCallGasUsage: bigint;
    avgGasUsagePerCall: bigint;
    timeUsage: number;
};
export declare function multicallByGasLimit(calls: MulticallRequestWithGas[], { chainId, gasBuffer, client, dropUnexecutedCalls, signal, retryFailedCallsWithGreaterLimit, account, blockConflictTolerance, ...rest }: CallByGasLimitParams): Promise<MulticallByGasLimitResult>;
export type SingleCallResult = {
    result: string;
    gasUsed: bigint;
    success: boolean;
};
export type CallResult = {
    results: SingleCallResult[];
    blockNumber: bigint;
};
export type MulticallReturn = CallResult & {
    lastSuccessIndex: number;
};
//# sourceMappingURL=multicall.d.ts.map