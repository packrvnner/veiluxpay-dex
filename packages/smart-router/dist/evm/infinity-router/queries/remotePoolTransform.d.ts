import { HookData, hooksList } from '@pancakeswap/infinity-sdk';
import { Currency, CurrencyAmount } from '@pancakeswap/swap-sdk-core';
import { InfinityBinPool, InfinityClPool, InfinityStablePool, PoolType, StablePool, V2Pool, V3Pool, WithTvl } from '../../v3-router/types';
import { RemotePool, RemotePoolBIN, RemotePoolCL, RemotePoolInfinityStable, RemotePoolStable, RemotePoolV2, RemotePoolV3 } from './remotePool.type';
export declare function parseRemotePool(remote: RemotePool): V2Pool | StablePool | V3Pool | InfinityClPool | InfinityBinPool | (import("../../v3-router/types").BasePool & {
    id: `0x${string}`;
    currency0: Currency;
    currency1: Currency;
    fee: number;
    protocolFee?: number;
    hooks?: `0x${string}`;
    hooksRegistrationBitmap?: `0x${string}` | number;
    poolManager: `0x${string}`;
    reserve0?: CurrencyAmount<Currency>;
    reserve1?: CurrencyAmount<Currency>;
} & {
    type: PoolType.InfinityStable;
    tickSpacing: number;
    amplifier: number;
    stableFee: number;
} & WithTvl);
export declare function parseRemoteStablePool(remote: RemotePoolStable): StablePool;
export declare function parseRemoteInfinityStablePool(remote: RemotePoolInfinityStable): InfinityStablePool & WithTvl;
export declare function parseRemoteV2Pool(remote: RemotePoolV2): V2Pool;
export declare function parseRemoteV3Pool(remote: RemotePoolV3): V3Pool;
export declare function toLocalInfinityPool(remote: RemotePoolCL | RemotePoolBIN, chainId: keyof typeof hooksList, hooksMap?: Record<string, HookData>): InfinityClPool | InfinityBinPool;
export declare function toRemoteInfinityPool(pool: (InfinityClPool & WithTvl) | (InfinityBinPool & WithTvl)): RemotePoolCL | RemotePoolBIN;
//# sourceMappingURL=remotePoolTransform.d.ts.map