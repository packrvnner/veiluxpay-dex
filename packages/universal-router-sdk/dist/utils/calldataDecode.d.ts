import { Hex, ParseAbiParameters } from 'viem';
export type DecodedArg = {
    type: string;
    name: string;
    value: unknown;
};
export type DecodedAction = {
    action: string;
    args: DecodedArg[];
};
export type DecodedCommand = {
    command: string;
    args: DecodedArg[];
    actions?: DecodedAction[];
};
export declare function decodeUniversalCalldata(calldata: Hex, abiParameter?: Record<string, ParseAbiParameters<string>>): DecodedCommand[];
//# sourceMappingURL=calldataDecode.d.ts.map