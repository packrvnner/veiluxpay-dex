import { Cluster } from '@solana/web3.js';
/**
 * Get the current Solana cluster based on the RPC endpoint.
 * @param rpcEndpoint The RPC endpoint URL.
 * @returns The current cluster or undefined if not found. Not supported on localnet.
 */
export declare const getCurrentCluster: (rpcEndpoint: string) => Promise<Cluster | undefined>;
//# sourceMappingURL=getCurrentCluster.d.ts.map