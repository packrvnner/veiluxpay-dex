import { PermitBatch } from '@pancakeswap/permit2-sdk';
import { Address, Hex } from 'viem';
import { Permit2Signature } from '../types';
export declare const encodePermit2: (owner: Address, permit2Signature: Permit2Signature) => `0x${string}`;
export declare const encodePermit2Batch: (owner: Address, permit2Batch: PermitBatch, signatures: Hex) => `0x${string}`;
//# sourceMappingURL=encodePermit2.d.ts.map