import { ChainId } from '@pancakeswap/chains';
import { Address } from 'viem';
export declare const INFINITY_SUPPORTED_CHAINS: readonly [any, any, any, any];
export type InfinitySupportedChains = (typeof INFINITY_SUPPORTED_CHAINS)[number];
export declare const INFI_VAULT_ADDRESSES: Record<InfinitySupportedChains, Address>;
export declare const INFI_CL_POOL_MANAGER_ADDRESSES: Record<InfinitySupportedChains, Address>;
export declare const INFI_BIN_POOL_MANAGER_ADDRESSES: Record<InfinitySupportedChains, Address>;
export declare const INFI_CL_POSITION_MANAGER_ADDRESSES: Record<InfinitySupportedChains, Address>;
export declare const INFI_BIN_POSITION_MANAGER_ADDRESSES: Record<InfinitySupportedChains, Address>;
export declare const INFI_CL_QUOTER_ADDRESSES: Record<InfinitySupportedChains, Address>;
export declare const INFI_BIN_QUOTER_ADDRESSES: Record<InfinitySupportedChains, Address>;
export declare const INFI_MIXED_QUOTER_ADDRESSES: Record<InfinitySupportedChains, Address>;
export declare const INFI_CL_MIGRATOR_ADDRESSES: Record<InfinitySupportedChains, Address>;
export declare const INFI_BIN_MIGRATOR_ADDRESSES: Record<InfinitySupportedChains, Address>;
export declare const INFI_CL_LP_FEES_HELPER_ADDRESSES: Record<InfinitySupportedChains, Address>;
export declare const INFI_FARMING_DISTRIBUTOR_ADDRESSES: Record<InfinitySupportedChains, Address>;
export declare const INFI_CL_PROTOCOL_FEE_CONTROLLER_ADDRESSES: Record<InfinitySupportedChains, Address>;
export declare const INFI_BIN_PROTOCOL_FEE_CONTROLLER_ADDRESSES: Record<InfinitySupportedChains, Address>;
export declare const INFI_CL_TICK_LENS_ADDRESSES: {
    [key in ChainId]?: Address;
};
//# sourceMappingURL=addresses.d.ts.map