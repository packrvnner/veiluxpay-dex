import { ChainId } from '@pancakeswap/chains';
import { Address } from 'viem';
import { SupportedChainId } from './supportedChains';
export type ContractAddresses<T extends ChainId = SupportedChainId> = {
    [chainId in T]: Address;
};
export declare const ICAKE: {
    readonly [x: number]: "0x3C458828D1622F5f4d526eb0d24Da8C4Eb8F07b1" | "0x5FB0b7a782c2f192493d86922dD3873b6392C8e8" | "0x";
};
export declare const CAKE_VAULT: {
    readonly [x: number]: "0x" | "0x45c54210128a065de780C4B0Df3d16664f7f859e" | "0x1088Fb24053F03802F673b84d16AE1A7023E400b";
};
export declare const CAKE_FLEXIBLE_SIDE_VAULT: {
    readonly [x: number]: "0x" | "0x1088Fb24053F03802F673b84d16AE1A7023E400b" | "0x615e896A8C2CA8470A2e9dc2E9552998f8658Ea0";
};
//# sourceMappingURL=contracts.d.ts.map