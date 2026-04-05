import type { Address } from 'viem';
import { InfinitySupportedChains } from '../addresses';
export declare const CL_DYNAMIC_FEE_HOOK_REGISTRATION_BITMAP: {
    readonly [x: number]: "0x00C2" | "0x0042";
};
export declare const BIN_DYNAMIC_FEE_HOOK_REGISTRATION_BITMAP = "0x0046";
export declare const CL_DYNAMIC_FEE_HOOKS_BY_CHAIN: {
    [key in InfinitySupportedChains]: Address;
};
export declare const BIN_DYNAMIC_FEE_HOOKS_BY_CHAIN: {
    [key in InfinitySupportedChains]: Address;
};
//# sourceMappingURL=dynamicFeeHook.d.ts.map