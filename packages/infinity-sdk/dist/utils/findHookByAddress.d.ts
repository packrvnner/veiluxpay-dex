import { Hex, PublicClient } from 'viem';
import { hooksList } from '../constants';
import { HookData, PoolType } from '../types';
export declare const findHookByAddress: ({ poolId, publicClient, chainId, poolType, hookAddress, }: {
    poolId: Hex | undefined;
    chainId: keyof typeof hooksList;
    publicClient: PublicClient | undefined;
    poolType: PoolType;
    hookAddress?: `0x${string}`;
}) => Promise<HookData | null>;
//# sourceMappingURL=findHookByAddress.d.ts.map