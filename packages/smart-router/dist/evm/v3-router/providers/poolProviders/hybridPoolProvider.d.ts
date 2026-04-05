import { OnChainProvider, PoolProvider, SubgraphProvider } from '../../types';
export interface HybridPoolProviderConfig {
    onChainProvider?: OnChainProvider;
    v3SubgraphProvider?: SubgraphProvider;
}
export declare function createHybridPoolProvider({ onChainProvider, v3SubgraphProvider, }: HybridPoolProviderConfig): PoolProvider;
//# sourceMappingURL=hybridPoolProvider.d.ts.map