import { Bytes32 } from '../../types';
/**
 * Decode a bytes32 amount into two amounts, one for each token
 * [0 - 128[: x1
 * [128 - 256[: x2
 *
 * @returns amountX the amount of the first token
 * @returns amountY the amount of the second token
 */
export declare const decodeBinAmount: (amount: Bytes32 | bigint) => {
    amountX: bigint;
    amountY: bigint;
};
export declare const decodeBinAmountForX: (amount: Bytes32) => bigint;
export declare const decodeBinAmountForY: (amount: Bytes32) => bigint;
//# sourceMappingURL=decodeBinAmount.d.ts.map