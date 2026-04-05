import { Address, Hex } from 'viem';
import { PoolKey } from '../../../types';
export type BinAddLiquidityParams = {
    poolKey: PoolKey<'Bin'>;
    amount0: bigint;
    amount1: bigint;
    amount0Max: bigint;
    amount1Max: bigint;
    activeIdDesired: bigint;
    idSlippage: bigint;
    deltaIds: number[];
    to: Address;
    distributionX: bigint[];
    distributionY: bigint[];
    hookData?: Hex;
};
export declare const encodeBinPositionManagerAddLiquidityCalldata: (params: BinAddLiquidityParams, deadline: bigint) => `0x${string}`;
//# sourceMappingURL=addLiquidity.d.ts.map