import { Cluster } from '@solana/web3.js';
export type AmmConfig = {
    index: number;
    id: string;
    protocolFeeRate: number;
    tradeFeeRate: number;
    tickSpacing: number;
    fundFeeRate: number;
    fundOwner: string;
    description?: string;
    defaultRange: number;
    defaultRangePoint: number[];
};
export declare const ammConfigs: {
    [key in Cluster]?: Record<string, AmmConfig>;
};
//# sourceMappingURL=ammConfigs.d.ts.map