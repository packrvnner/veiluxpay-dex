import { ChainId } from '@pancakeswap/chains';
export declare const hooksList: {
    56: import("../..").HookData[];
    97: import("../..").HookData[];
    8453: import("../..").HookData[];
    11155111: never[];
};
export declare const dynamicHooksList: {
    56: Record<"CL" | "Bin", import("../..").HookData | undefined>;
    97: Record<"CL" | "Bin", import("../..").HookData>;
    8453: Record<"CL" | "Bin", import("../..").HookData | undefined>;
    11155111: never[];
};
export declare const whitelistLabeledHooksList: {
    56: `0x${string}`[];
    97: never[];
    8453: never[];
    11155111: never[];
};
export declare function findHook(hook: string, chainId: ChainId): import("../..").HookData | undefined;
export * from './dynamicFeeHook';
//# sourceMappingURL=index.d.ts.map