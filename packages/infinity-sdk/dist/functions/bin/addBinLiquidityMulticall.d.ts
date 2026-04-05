import { Address, Hex } from 'viem';
import { BinLiquidityShape, PoolKey, Permit2Signature } from '../../types';
export type AddBinLiquidityMulticallParams = {
    isInitialized: boolean;
    activeIdDesired: bigint | number;
    idSlippage: bigint | number;
    poolKey: PoolKey<'Bin'>;
    lowerBinId: number;
    upperBinId: number;
    liquidityShape: BinLiquidityShape;
    owner: Address;
    amount0: bigint;
    amount1: bigint;
    amount0Max: bigint;
    amount1Max: bigint;
    token0Permit2Signature: Permit2Signature | undefined;
    token1Permit2Signature: Permit2Signature | undefined;
    modifyPositionHookData?: Hex;
    deadline: bigint;
};
export declare const addBinLiquidityMulticall: ({ isInitialized, activeIdDesired, idSlippage, liquidityShape, lowerBinId, upperBinId, poolKey, amount0, amount1, amount0Max, amount1Max, owner, token1Permit2Signature, token0Permit2Signature, deadline, modifyPositionHookData, }: AddBinLiquidityMulticallParams) => `0x${string}`;
//# sourceMappingURL=addBinLiquidityMulticall.d.ts.map