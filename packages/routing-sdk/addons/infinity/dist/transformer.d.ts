import { ChainId } from '@pancakeswap/chains';
import { Tick } from '@pancakeswap/v3-sdk';
import { BinReserves, InfinityBinPool, InfinityCLPool, InfinityStablePool, SerializableBinReserves, SerializableInfinityBinPool, SerializableInfinityCLPool, SerializableInfinityStablePool, SerializableTick } from './types';
export declare function toSerializableBinPoolReserveOfBin(reserveOfBin?: Record<number, BinReserves>): Record<string, SerializableBinReserves> | undefined;
export declare function toSerializableTick(tick: Tick): SerializableTick;
export declare function toSerializableInfinityCLPool(infinityCLPool: InfinityCLPool): SerializableInfinityCLPool;
export declare function toSerializableInfinityStablePool(infinityStablePool: InfinityStablePool): SerializableInfinityStablePool;
export declare function toSerializableInfinityBinPool(infinityBinPool: InfinityBinPool): SerializableInfinityBinPool;
export declare function parseTick(tick: SerializableTick): Tick;
export declare function parseInfinityCLPool(chainId: ChainId, pool: SerializableInfinityCLPool): InfinityCLPool;
export declare function parseInfinityBinPoolReserveOfBins(reserveOfBin?: Record<string, SerializableBinReserves>): Record<number, BinReserves> | undefined;
export declare function parseInfinityBinPool(chainId: ChainId, pool: SerializableInfinityBinPool): InfinityBinPool;
export declare function parseInfinityStablePool(chainId: ChainId, pool: SerializableInfinityStablePool): InfinityStablePool;
//# sourceMappingURL=transformer.d.ts.map