import { ChainId } from '@pancakeswap/chains';
export declare const hooksList: {
    [x: number]: import("../..").HookData[];
};
export declare const dynamicHooksList: {
    [x: number]: never[] | Record<"CL" | "Bin", import("../..").HookData | undefined>;
};
export declare const whitelistLabeledHooksList: {
    [x: number]: `0x${string}`[];
};
export declare function findHook(hook: string, chainId: ChainId): import("../..").HookData | undefined;
export * from './dynamicFeeHook';
//# sourceMappingURL=index.d.ts.map