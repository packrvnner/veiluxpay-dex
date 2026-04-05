import { Address } from 'viem';
import { type HookData, type PoolType } from '../../types';
export declare const CL_DYNAMIC_HOOK: HookData;
export declare const bscHooksList: HookData[];
/**
 * Dynamic hook for each pool type for auto-selection on "Dynamic" fee tier
 */
export declare const bscDynamicHooks: Record<PoolType, HookData | undefined>;
export declare const bscWhitelistLabeledHooks: Address[];
//# sourceMappingURL=bsc.d.ts.map