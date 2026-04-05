import { AbiParametersToPrimitiveTypes } from 'abitype';
import { AbiParameter, Hex } from 'viem';
export type ABIType = {
    [key in CommandUsed]: readonly AbiParameter[];
};
export type ABIParametersType<TCommandType extends CommandUsed> = AbiParametersToPrimitiveTypes<(typeof ABI_PARAMETER)[TCommandType]>;
export declare const ABI_PARAMETER: {
    32: readonly [{
        readonly type: "bytes";
        readonly name: "_commands";
    }, {
        readonly type: "bytes[]";
        readonly name: "_inputs";
    }];
    10: readonly [{
        readonly type: "PermitSingle";
        readonly name: "permitSingle";
    }, {
        readonly type: "bytes";
        readonly name: "data";
    }];
    3: readonly [{
        readonly type: "PermitBatch";
        readonly name: "permitBatch";
    }, {
        readonly type: "bytes";
        readonly name: "data";
    }];
    2: readonly [{
        readonly type: "address";
        readonly name: "token";
    }, {
        readonly type: "address";
        readonly name: "recipient";
    }, {
        readonly type: "uint160";
        readonly name: "amount";
    }];
    13: readonly [{
        readonly type: "AllowanceTransferDetails[]";
        readonly name: "batchDetails";
    }];
    0: readonly [{
        readonly type: "address";
        readonly name: "recipient";
    }, {
        readonly type: "uint256";
        readonly name: "amountIn";
    }, {
        readonly type: "uint256";
        readonly name: "amountOutMin";
    }, {
        readonly type: "bytes";
        readonly name: "path";
    }, {
        readonly type: "bool";
        readonly name: "payerIsUser";
    }];
    1: readonly [{
        readonly type: "address";
        readonly name: "recipient";
    }, {
        readonly type: "uint256";
        readonly name: "amountOut";
    }, {
        readonly type: "uint256";
        readonly name: "amountInMax";
    }, {
        readonly type: "bytes";
        readonly name: "path";
    }, {
        readonly type: "bool";
        readonly name: "payerIsUser";
    }];
    8: readonly [{
        readonly type: "address";
        readonly name: "recipient";
    }, {
        readonly type: "uint256";
        readonly name: "amountIn";
    }, {
        readonly type: "uint256";
        readonly name: "amountOutMin";
    }, {
        readonly type: "address[]";
        readonly name: "path";
    }, {
        readonly type: "bool";
        readonly name: "payerIsUser";
    }];
    9: readonly [{
        readonly type: "address";
        readonly name: "recipient";
    }, {
        readonly type: "uint256";
        readonly name: "amountOut";
    }, {
        readonly type: "uint256";
        readonly name: "amountInMax";
    }, {
        readonly type: "address[]";
        readonly name: "path";
    }, {
        readonly type: "bool";
        readonly name: "payerIsUser";
    }];
    34: readonly [{
        readonly type: "address";
        readonly name: "recipient";
    }, {
        readonly type: "uint256";
        readonly name: "amountIn";
    }, {
        readonly type: "uint256";
        readonly name: "amountOutMin";
    }, {
        readonly type: "address[]";
        readonly name: "path";
    }, {
        readonly type: "uint256[]";
        readonly name: "flag";
    }, {
        readonly type: "bool";
        readonly name: "payerIsUser";
    }];
    35: readonly [{
        readonly type: "address";
        readonly name: "recipient";
    }, {
        readonly type: "uint256";
        readonly name: "amountOut";
    }, {
        readonly type: "uint256";
        readonly name: "amountInMax";
    }, {
        readonly type: "address[]";
        readonly name: "path";
    }, {
        readonly type: "uint256[]";
        readonly name: "flag";
    }, {
        readonly type: "bool";
        readonly name: "payerIsUser";
    }];
    11: readonly [{
        readonly type: "address";
        readonly name: "recipient";
    }, {
        readonly type: "uint256";
        readonly name: "amountMin";
    }];
    12: readonly [{
        readonly type: "address";
        readonly name: "recipient";
    }, {
        readonly type: "uint256";
        readonly name: "amountMin";
    }];
    4: readonly [{
        readonly type: "address";
        readonly name: "token";
    }, {
        readonly type: "address";
        readonly name: "recipient";
    }, {
        readonly type: "uint256";
        readonly name: "amountMin";
    }];
    5: readonly [{
        readonly type: "address";
        readonly name: "token";
    }, {
        readonly type: "address";
        readonly name: "recipient";
    }, {
        readonly type: "uint256";
        readonly name: "value";
    }];
    6: readonly [{
        readonly type: "address";
        readonly name: "token";
    }, {
        readonly type: "address";
        readonly name: "recipient";
    }, {
        readonly type: "uint256";
        readonly name: "bips";
    }];
    14: readonly [{
        readonly type: "address";
        readonly name: "owner";
    }, {
        readonly type: "address";
        readonly name: "token";
    }, {
        readonly type: "uint256";
        readonly name: "minBalance";
    }];
    16: readonly [{
        readonly type: "bytes";
        readonly name: "actions";
    }, {
        readonly type: "bytes[]";
        readonly name: "params";
    }];
};
export type CommandUsed = keyof typeof ABI_PARAMETER;
export type RouterCommand = {
    type: CommandUsed;
    encodedInput: Hex;
};
export declare function createCommand<TCommandType extends CommandUsed>(type: TCommandType, parameters: ABIParametersType<TCommandType>): RouterCommand;
//# sourceMappingURL=createCommand.d.ts.map