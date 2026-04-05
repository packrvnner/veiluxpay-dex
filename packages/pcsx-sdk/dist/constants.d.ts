import type { Address } from 'viem';
export declare const SupportedChainId: readonly [any, any, any, any, any, any];
export type XSupportedChainId = (typeof SupportedChainId)[number];
export declare const PERMIT2_MAPPING: {
    readonly [x: number]: any;
};
export declare const ORDER_QUOTER_MAPPING: {
    readonly [x: number]: "0x369B57fE0Fab4d5a110e4F02b871979DE0300C18" | "0x6f73C295E70Cd87307dD73c4730c685Bb977bB70" | "0x180415ddfBeD6bf9a6C0fcE0EB23DE60B0157f58" | "0xF812A85c70b05Df76ff3bC802c0244307033Ccd0" | "0xfd86a340c9cb94559C97b3bF5c7b4c2fE197ecDd";
};
export declare enum OrderType {
    ExclusiveDutchOrder = "ExclusiveDutchOrder"
}
export type Reactors = {
    [key in OrderType]: Address;
};
export declare const REACTOR_ADDRESS_MAPPING: {
    readonly [x: number]: {
        readonly ExclusiveDutchOrder: "0xDB9D365b50E62fce747A90515D2bd1254A16EbB9";
    } | {
        readonly ExclusiveDutchOrder: "0xCfe2a565072f85381775Eb12644d297bf0F66773";
    } | {
        readonly ExclusiveDutchOrder: "0xbfCC755375250C1EA9722EB1B8d97076f681627C";
    } | {
        readonly ExclusiveDutchOrder: "0x35db01D1425685789dCc9228d47C7A5C049388d8";
    } | {
        readonly ExclusiveDutchOrder: "0x6b9906d7106e5890852Bf98eF13ba5D8761712b9";
    };
};
//# sourceMappingURL=constants.d.ts.map