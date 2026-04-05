import { ChainId, UnifiedChainId } from './chainId';
import { mainnetChainNamesInKebabCase } from './chainNames';
export declare function getChainName(chainId: UnifiedChainId): string;
export declare function getChainNameInKebabCase(chainId: UnifiedChainId): "goerli" | "bsc" | "linea" | "base" | "sepolia" | "monad" | "sol" | "aptos" | "ethereum" | "bsc-testnet" | "arbitrum" | "arbitrum-goerli" | "zksync" | "zksync-testnet" | "linea-testnet" | "opbnb" | "opbnb-testnet" | "base-testnet" | "scroll-sepolia" | "arbitrum-sepolia" | "base-sepolia" | "monad-testnet";
export declare function getMainnetChainNameInKebabCase(chainId: keyof typeof mainnetChainNamesInKebabCase): "bsc" | "linea" | "base" | "monad" | "sol" | "aptos" | "ethereum" | "arbitrum" | "zksync" | "opbnb";
export declare function getLlamaChainName(chainId: ChainId): string;
export declare function getChainIdByChainName(chainName?: string): UnifiedChainId | undefined;
export declare function isTestnetChainId(chainId: UnifiedChainId): boolean;
export declare function isEvm(chainId?: number): boolean;
export declare function isSolana(chainId?: UnifiedChainId): boolean;
export declare function isAptos(chainId?: UnifiedChainId): boolean;
export declare function isChainSupported(chainId?: UnifiedChainId): boolean;
//# sourceMappingURL=utils.d.ts.map