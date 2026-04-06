import type { Address } from 'viem';
import { InfinitySupportedChains } from '../addresses';
export declare const CL_DYNAMIC_FEE_HOOK_REGISTRATION_BITMAP: {
    readonly 56: "0x00C2";
    readonly 97: "0x0042";
    readonly 11155111: "0x0042";
    readonly 8453: "0x0042";
};
export declare const BIN_DYNAMIC_FEE_HOOK_REGISTRATION_BITMAP = "0x0046";
export declare const CL_DYNAMIC_FEE_HOOKS_BY_CHAIN: {
    [key in InfinitySupportedChains]: Address;
};
export declare const BIN_DYNAMIC_FEE_HOOKS_BY_CHAIN: {
    [key in InfinitySupportedChains]: Address;
};
//# sourceMappingURL=dynamicFeeHook.d.ts.map