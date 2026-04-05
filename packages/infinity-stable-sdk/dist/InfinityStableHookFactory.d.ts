import { Address, PublicClient } from 'viem';
import { ChainId } from '@pancakeswap/chains';
/**
 * Hook Factory for Stable Swap
 * Utility for fetching pools from the hook factory contract
 */
export declare class InfinityStableHookFactory {
    private static instance;
    /**
     * Get the singleton instance
     */
    static getInstance(): InfinityStableHookFactory;
    /**
     * Get the hook factory address for a specific chain
     */
    static getHookFactoryAddress(chainId: ChainId): Address;
    /**
     * Get the number of pools from the hook factory contract
     * @param publicClient The viem public client for making contract calls
     * @param chainId The chain ID
     * @returns Number of pools in the factory
     */
    static getPoolCount(publicClient: PublicClient, chainId: ChainId): Promise<number>;
    /**
     * Get pool addresses in batch using multicall
     * @param publicClient The viem public client for making contract calls
     * @param chainId The chain ID
     * @param poolCount Number of pools to fetch
     * @returns Array of pool addresses
     */
    static getPoolAddressesBatch(publicClient: PublicClient, chainId: ChainId, poolCount: number): Promise<Address[]>;
    /**
     * Get all pools from the hook factory contract
     * @param publicClient The viem public client for making contract calls
     * @param chainId The chain ID
     * @returns Array of pool addresses
     */
    static getPools(publicClient: PublicClient, chainId: ChainId): Promise<Address[]>;
}
//# sourceMappingURL=InfinityStableHookFactory.d.ts.map