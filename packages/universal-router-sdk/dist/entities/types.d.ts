import { ActionsPlanner } from '@pancakeswap/infinity-sdk';
import { PermitSingle } from '@pancakeswap/permit2-sdk';
import { BigintIsh, Currency, CurrencyAmount, TradeType } from '@pancakeswap/sdk';
import { BaseRoute, Pool, RouteType, SmartRouterTrade, SwapOptions } from '@pancakeswap/smart-router';
import { Address } from 'viem';
export interface Permit2Signature extends PermitSingle {
    signature: `0x${string}`;
}
export type SwapRouterConfig = {
    sender?: Address;
    deadline?: BigintIsh | undefined;
};
export type FlatFeeOptions = {
    amount: BigintIsh;
    recipient: Address;
};
export type PaymentOptions = {
    /**
     * Whether the payer of the trade is the user. Defaults to true.
     */
    payerIsUser?: boolean;
};
export type PancakeSwapOptions = Omit<SwapOptions, 'inputTokenPermit'> & {
    inputTokenPermit?: Permit2Signature;
    flatFee?: FlatFeeOptions;
} & PaymentOptions;
export type SwapRouteMeta = {
    maximumAmountIn: CurrencyAmount<Currency>;
    minimumAmountOut: CurrencyAmount<Currency>;
    sections: SwapSection[];
};
export type SwapSection = {
    type: RouteType.V2 | RouteType.V3 | RouteType.InfinityBIN | RouteType.InfinityCL | RouteType.STABLE;
    poolIn: Currency;
    poolOut: Currency;
    wrapInput: boolean;
    unwrapInput: boolean;
    wrapOutput: boolean;
    unwrapOutput: boolean;
    isFirstSection: boolean;
    isLastSection: boolean;
    payerIsUser: boolean;
    pools: Pool[];
    route: BaseRoute;
    nextSection: SwapSection | null;
    prevSection: SwapSection | null;
    isInfinity: boolean;
};
export type SwapTradeContext = {
    trade: Omit<SmartRouterTrade<TradeType>, 'gasEstimate'>;
    options: PancakeSwapOptions;
    routes: SwapRouteMeta[];
    mustCustody: boolean;
    user: Address;
    returnChanges: {
        wrap: boolean;
    } | null;
    /**
     * Take over the wrap/unwrap process in last stage
     */
    takeOverWrapSweep: {
        wrap: boolean;
    } | null;
    mergedWrapBeforeTrade: {
        wrap: boolean;
    } | null;
    reusedActionPlaner: ActionsPlanner | null;
};
//# sourceMappingURL=types.d.ts.map