import { type InfinitySupportedChains, type PoolKey, type PoolType } from '@pancakeswap/infinity-sdk';
import { type Address, type Hex } from 'viem';
export type HookPreset<P extends PoolType> = {
    address: Address;
    registrationBitmap?: Hex | number;
    poolKeyOverride?: Partial<PoolKey<P>>;
};
export declare const EMPTY_HOOK: {
    address: "0x0000000000000000000000000000000000000000";
};
export declare const CL_HOOK_PRESETS_BY_CHAIN: {
    [key in InfinitySupportedChains]: HookPreset<'CL'>[];
};
export declare const BIN_HOOK_PRESETS_BY_CHAIN: {
    [key in InfinitySupportedChains]: HookPreset<'Bin'>[];
};
type CLPoolPreset = {
    fee: number;
    tickSpacing: number;
};
export declare enum InfinityFeeTier {
    LOWEST = 67,
    LOW = 335,
    MEDIUM = 1676,
    HIGH = 6722
}
export declare const CL_PRESETS_BY_CHAIN: {
    [key in InfinitySupportedChains]: CLPoolPreset[];
};
export declare const CL_PRESETS: {
    fee: number;
    tickSpacing: number;
}[];
type BinPoolPreset = {
    fee: number;
    binStep: number;
};
export declare const BIN_PRESETS_BY_CHAIN: {
    [key in InfinitySupportedChains]: BinPoolPreset[];
};
export {};
//# sourceMappingURL=infinityPresets.d.ts.map