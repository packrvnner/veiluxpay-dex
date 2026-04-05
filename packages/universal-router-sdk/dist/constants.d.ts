import { ChainId } from '@pancakeswap/chains';
import { Address } from 'viem';
export declare const getUniversalRouterAddress: (chainId: ChainId) => Address;
export declare const CONTRACT_BALANCE: bigint;
export declare const MSG_SENDER = "0x0000000000000000000000000000000000000001";
export declare const ADDRESS_THIS = "0x0000000000000000000000000000000000000002";
export declare const ADDRESS_ZERO = "0x0000000000000000000000000000000000000000";
export declare const SIGNATURE_LENGTH = 65;
export declare const EIP_2098_SIGNATURE_LENGTH = 64;
export declare const ACTION_CONSTANTS: {
    readonly OPEN_DELTA: 0n;
    readonly CONTRACT_BALANCE: "0x8000000000000000000000000000000000000000000000000000000000000000";
    readonly MSG_SENDER: "0x0000000000000000000000000000000000000001";
    readonly ADDRESS_THIS: "0x0000000000000000000000000000000000000002";
};
//# sourceMappingURL=constants.d.ts.map