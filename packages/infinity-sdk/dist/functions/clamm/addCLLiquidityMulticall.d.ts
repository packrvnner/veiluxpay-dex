import { Address, Hex } from 'viem';
import { CLPositionConfig, Permit2Signature } from '../../types';
export declare const addCLLiquidityMulticall: ({ isInitialized, sqrtPriceX96, tokenId, positionConfig, liquidity, owner, recipient, amount0Max, amount1Max, deadline, modifyPositionHookData, token0Permit2Signature, token1Permit2Signature, }: {
    isInitialized: boolean;
    sqrtPriceX96: bigint;
    tokenId?: bigint;
    positionConfig: CLPositionConfig;
    liquidity: bigint;
    owner: Address;
    recipient: Address;
    amount0Max: bigint;
    amount1Max: bigint;
    deadline: bigint;
    modifyPositionHookData: Hex;
    token0Permit2Signature?: Permit2Signature;
    token1Permit2Signature?: Permit2Signature;
}) => `0x${string}`;
//# sourceMappingURL=addCLLiquidityMulticall.d.ts.map