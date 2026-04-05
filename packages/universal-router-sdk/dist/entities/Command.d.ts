import { RoutePlanner } from '../utils/RoutePlanner';
import { PaymentOptions } from './types';
export type TradeConfig = PaymentOptions & {
    allowRevert: boolean;
};
export declare enum RouterTradeType {
    PancakeSwapTrade = "PancakeSwapTrade",
    UnwrapWETH = "UnwrapWETH"
}
export interface Command {
    tradeType: RouterTradeType;
    encode(planner: RoutePlanner, config: PaymentOptions): void;
}
//# sourceMappingURL=Command.d.ts.map