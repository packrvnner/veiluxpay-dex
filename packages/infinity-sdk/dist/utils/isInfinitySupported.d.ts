import { ChainId } from '@pancakeswap/chains';
import { INFINITY_SUPPORTED_CHAINS } from '../constants';
type InfinitySupportedChain = (typeof INFINITY_SUPPORTED_CHAINS)[number];
export declare function isInfinitySupported(chainId: ChainId): chainId is InfinitySupportedChain;
export {};
//# sourceMappingURL=isInfinitySupported.d.ts.map