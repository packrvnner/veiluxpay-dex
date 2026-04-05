import { BinLiquidityShape } from '../../types';
export type GetLiquidityShapeParams = {
    shape: BinLiquidityShape;
    lowerBinId: number;
    upperBinId: number;
    amount0: bigint;
    amount1: bigint;
    activeIdDesired: number;
};
export type LiquidityShape = {
    deltaIds: number[];
    distributionX: bigint[];
    distributionY: bigint[];
};
export declare const getLiquidityShape: ({ shape, lowerBinId, upperBinId, activeIdDesired, amount0, amount1, }: GetLiquidityShapeParams) => LiquidityShape;
export type BinRange = [bigint, bigint];
export type GenerateLiquidityShapeParams = {
    binIds: number[];
    amount0: bigint;
    amount1: bigint;
};
export declare const getSpotLiquidityShape: ({ binIds, amount0, amount1 }: GenerateLiquidityShapeParams) => LiquidityShape;
/**
 * follow Gaussian Distribution Curve
 * @param param0
 * @returns
 */
export declare const getCurveLiquidityShape: ({ binIds, amount0, amount1, sd, }: GenerateLiquidityShapeParams & {
    sd?: number;
}) => LiquidityShape;
export declare const getBidAskLiquidityShape: ({ binIds, amount0, amount1 }: GenerateLiquidityShapeParams) => LiquidityShape;
//# sourceMappingURL=getLiquidityShape.d.ts.map