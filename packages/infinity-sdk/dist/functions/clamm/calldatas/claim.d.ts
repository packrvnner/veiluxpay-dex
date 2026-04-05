import { Address } from 'viem';
interface ClaimParams {
    token: Address;
    amount: bigint;
    proof: Address[];
}
export declare const encodeClaimCalldata: (claimParams: ClaimParams[]) => `0x${string}`;
export {};
//# sourceMappingURL=claim.d.ts.map