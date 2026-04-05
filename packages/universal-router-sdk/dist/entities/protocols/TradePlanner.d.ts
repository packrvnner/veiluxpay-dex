import { TradeType } from '@pancakeswap/sdk';
import { SmartRouterTrade } from '@pancakeswap/smart-router';
import { RoutePlanner } from '../../utils/RoutePlanner';
import { PancakeSwapOptions } from '../types';
export declare class TradePlanner extends RoutePlanner {
    trade: Omit<SmartRouterTrade<TradeType>, 'gasEstimate'>;
    options: PancakeSwapOptions;
    private context;
    constructor(trade: Omit<SmartRouterTrade<TradeType>, 'gasEstimate'>, options: PancakeSwapOptions);
    encode(): void;
    private addMergedWrapBeforeTrade;
    private addSwapCommand;
    private addInfinityCommand;
    private addInfinityMultiHop;
    private addInfinitySingleHop;
    private addWrapBeforeSwap;
    private addWrapAfterRoute;
    private addWrapOut;
    private addUnwrapOut;
    private addSweepCommand;
    private payFee;
    private returnChanges;
    private initializeInfinitySwap;
    private finalizeInfinitySwap;
}
//# sourceMappingURL=TradePlanner.d.ts.map