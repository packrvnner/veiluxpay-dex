import { paths } from '../schema';
export declare const getPoolsByMints: ({ mintA, mintB, poolType, pageSize, page, }: {
    mintA: string | undefined;
    mintB: string | undefined;
    poolType?: string;
    poolSortField?: string;
    sortType?: string;
    pageSize?: string | number;
    page?: string | number;
}) => Promise<paths["/cached/v1/pools/info/mint"]["get"]["responses"]["200"]["content"]["application/json"]["data"] | undefined>;
//# sourceMappingURL=getPoolsByMints.d.ts.map