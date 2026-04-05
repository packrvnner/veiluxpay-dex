import { HOOK_CATEGORY, POOL_TYPE, type HookData, type PoolType } from '../../types';
export declare const CL_DYNAMIC_HOOK: {
    address: `0x${string}`;
    name: string;
    poolType: POOL_TYPE;
    description: string;
    github: string;
    category: HOOK_CATEGORY[];
    isVerified: boolean;
    isUpgradable: boolean;
    hooksRegistration: {
        afterInitialize: boolean;
        beforeSwap: boolean;
    };
};
export declare const bscTestnetHooksList: HookData[];
/**
 * Dynamic hook for each pool type for auto-selection on "Dynamic" fee tier
 */
export declare const bscTestnetDynamicHooks: Record<PoolType, HookData>;
//# sourceMappingURL=bscTestnet.d.ts.map