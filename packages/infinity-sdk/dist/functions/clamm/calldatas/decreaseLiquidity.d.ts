import { Address, Hex } from 'viem';
import { PoolKey } from '../../../types';
export declare const encodeCLPositionManagerDecreaseLiquidityCalldata: ({ tokenId, poolKey, liquidity, amount0Min, amount1Min, wrapAddress, recipient, hookData, deadline, }: {
    tokenId: bigint;
    poolKey: PoolKey<"CL">;
    liquidity: bigint;
    amount0Min: bigint;
    amount1Min: bigint;
    wrapAddress?: Address;
    recipient?: Address;
    hookData?: Hex;
    deadline: bigint;
}) => `0x${string}`;
//# sourceMappingURL=decreaseLiquidity.d.ts.map