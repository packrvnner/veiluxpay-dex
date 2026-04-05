import { Address, Hex } from 'viem';
import { ACTIONS } from '../constants/actions';
import { InfinityABIParametersToValuesType, InfinityUsedAction } from '../constants/actionsAbiParameters';
import { PoolKey } from '../types';
export declare class ActionsPlanner {
    private plans;
    add<TAction extends InfinityUsedAction>(action: TAction, param: InfinityABIParametersToValuesType<TAction>): void;
    encodeActions(): `0x${string}`;
    encodePlans(): `0x${string}`[];
    encode(): Hex;
    static decode(calls: Hex): {
        action: ACTIONS;
        actionName: string;
        param: readonly [bigint, bigint, bigint, bigint, `0x${string}`] | readonly [unknown, bigint, bigint, bigint, `0x${string}`, `0x${string}`] | readonly [bigint, unknown, bigint, bigint, `0x${string}`] | readonly [bigint, bigint, bigint, `0x${string}`] | readonly [unknown, number, number, bigint, bigint, `0x${string}`, `0x${string}`] | readonly [unknown] | readonly [`0x${string}`, bigint, boolean] | readonly [`0x${string}`, bigint] | readonly [`0x${string}`, `0x${string}`] | readonly [`0x${string}`, `0x${string}`, bigint] | readonly [`0x${string}`, `0x${string}`, `0x${string}`] | readonly [`0x${string}`] | readonly [bigint];
    }[];
    finalizeModifyLiquidityWithTake(poolKey: PoolKey, takeRecipient: Address): `0x${string}`;
    finalizeModifyLiquidityWithClose(poolKey: PoolKey): `0x${string}`;
    finalizeModifyLiquidityWithCloseWrap(poolKey: PoolKey, wrapAddress: Address, recipient: Address): `0x${string}`;
    finalizeModifyLiquidityWithCloseNative(poolKey: PoolKey, sweepRecipient: Address): `0x${string}`;
    /**
     * Pay and settle currency pair. User's token0 and token1 will be transferred from user and paid.
     * This is commonly used for increase liquidity or mint action.
     */
    finalizeModifyLiquidityWithSettlePair(poolKey: PoolKey, sweepRecipient: Address): `0x${string}`;
    /**
     * Take all amount owed from currency pair. Owed token0 and token1 will be transferred to `takeRecipient`.
     * This is commonly used for decrease liquidity or burn action.
     */
    finalizeModifyLiquidityWithTakePair(poolKey: PoolKey, takeRecipient: Address): `0x${string}`;
    finalizeSwap(inputCurrency: Address, outputCurrency: Address, takeRecipient: Address): `0x${string}`;
}
//# sourceMappingURL=ActionsPlanner.d.ts.map