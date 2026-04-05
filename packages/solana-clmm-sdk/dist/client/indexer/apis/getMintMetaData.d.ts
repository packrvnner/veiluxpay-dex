import { paths } from '../schema';
export type MintMetaData = paths['/cached/v1/tokens/metadata/{address}']['get']['responses']['200']['content']['application/json']['data'];
export declare const getMintMetaFromDAS: (mint: string) => Promise<{
    success: boolean;
    data: {
        symbol: any;
        name: any;
        decimals: any;
        address: string;
        logoURI: any;
        programId: any;
    };
    error?: undefined;
} | {
    error: {
        message: string;
    };
    success?: undefined;
    data?: undefined;
} | undefined>;
export declare const getMintMetaData: (mint: string) => Promise<{
    success: boolean;
    data: {
        symbol: any;
        name: any;
        decimals: any;
        address: string;
        logoURI: any;
        programId: any;
    };
    error?: undefined;
} | {
    error: {
        message: string;
    };
    success?: undefined;
    data?: undefined;
} | {
    data: {
        tags: any;
        extensions: any;
        address: string;
        symbol: string;
        name: string;
        decimals?: number;
        logoURI?: string;
        programId?: string;
    } | {
        tags: any;
        extensions: any;
        address: string;
        symbol: string;
        name: string;
        decimals?: number;
        logoURI?: string;
        programId?: string;
    } | {
        tags: any;
        extensions: any;
        address: string;
        symbol: string;
        name: string;
        decimals?: number;
        logoURI?: string;
        programId?: string;
    };
    success: boolean;
} | undefined>;
//# sourceMappingURL=getMintMetaData.d.ts.map