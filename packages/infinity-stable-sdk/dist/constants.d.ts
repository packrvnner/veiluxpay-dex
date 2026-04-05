import { Address } from 'viem';
import { ChainId } from '@pancakeswap/chains';
/**
 * InfinityStable Pool Factory contract addresses by chain
 */
export declare const CL_STABLE_SWAP_POOL_FACTORY_ADDRESS: Record<ChainId.BSC | ChainId.BSC_TESTNET, Address>;
/**
 * InfinityStable Hook Factory contract addresses by chain
 */
export declare const HOOK_INFINITY_STABLE_HOOK_FACTORY_ADDRESS: Record<ChainId.BSC | ChainId.BSC_TESTNET, Address>;
/**
 * Default null method ID
 */
export declare const NULL_METHOD_ID: "0x00000000";
/**
 * Default implementation index
 */
export declare const DEFAULT_IMPLEMENTATION_IDX = 0n;
/**
 * Default asset type (standard ERC20)
 */
export declare const DEFAULT_ASSET_TYPE = 0;
/**
 * Maximum fee (1% = 10000000)
 */
export declare const MAX_FEE = 10000000n;
/**
 * Minimum amplification parameter
 */
export declare const MIN_A = 1n;
/**
 * Maximum amplification parameter
 */
export declare const MAX_A = 10000n;
export declare const INFINITY_STABLE_POOL_FEE_DENOMINATOR = 10000000000;
//# sourceMappingURL=constants.d.ts.map