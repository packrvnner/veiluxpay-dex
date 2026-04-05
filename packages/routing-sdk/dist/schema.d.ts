import { z, ZodObject } from 'zod';
type GetRouterPostParamsSchemaOptions = {
    zCandidatePools: ZodObject<any>;
};
export declare function getRouterPostParamsSchema({ zCandidatePools }: GetRouterPostParamsSchemaOptions): z.ZodObject<{
    tradeType: z.ZodNativeEnum<any>;
    amount: z.ZodObject<{
        currency: z.ZodObject<{
            address: z.ZodType<`0x${string}`, z.ZodTypeDef, `0x${string}`>;
            decimals: z.ZodNumber;
            symbol: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            symbol: string;
            address: `0x${string}`;
            decimals: number;
        }, {
            symbol: string;
            address: `0x${string}`;
            decimals: number;
        }>;
        value: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        currency: {
            symbol: string;
            address: `0x${string}`;
            decimals: number;
        };
        value: string;
    }, {
        currency: {
            symbol: string;
            address: `0x${string}`;
            decimals: number;
        };
        value: string;
    }>;
    gasPriceWei: z.ZodOptional<z.ZodString>;
    chainId: z.ZodNativeEnum<any>;
    currency: z.ZodObject<{
        address: z.ZodType<`0x${string}`, z.ZodTypeDef, `0x${string}`>;
        decimals: z.ZodNumber;
        symbol: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        symbol: string;
        address: `0x${string}`;
        decimals: number;
    }, {
        symbol: string;
        address: `0x${string}`;
        decimals: number;
    }>;
    maxHops: z.ZodOptional<z.ZodNumber>;
    maxSplits: z.ZodOptional<z.ZodNumber>;
    candidatePools: z.ZodObject<any, z.UnknownKeysParam, z.ZodTypeAny, {
        [x: string]: any;
    }, {
        [x: string]: any;
    }>;
}, "strip", z.ZodTypeAny, {
    [x: string]: any;
    tradeType?: unknown;
    amount?: unknown;
    gasPriceWei?: unknown;
    chainId?: unknown;
    currency?: unknown;
    maxHops?: unknown;
    maxSplits?: unknown;
    candidatePools?: unknown;
}, {
    [x: string]: any;
    tradeType?: unknown;
    amount?: unknown;
    gasPriceWei?: unknown;
    chainId?: unknown;
    currency?: unknown;
    maxHops?: unknown;
    maxSplits?: unknown;
    candidatePools?: unknown;
}>;
export type RouterPostParams = z.infer<ReturnType<typeof getRouterPostParamsSchema>>;
export {};
//# sourceMappingURL=schema.d.ts.map