import { Bytes32, PoolKey } from '../types';
/**
 * `PoolId` is a bytes32 of `keccak256(abi.encode(poolKey))`
 * @see {@link PoolKey}
 * @see {@link https://github.com/pancakeswap/infinity-core/blob/main/src/types/PoolId.sol|infinity-core}
 * @param param0
 * @returns
 */
export declare const getPoolId: ({ currency0, currency1, hooks, poolManager, fee, parameters, }: PoolKey) => Bytes32;
//# sourceMappingURL=getPoolId.d.ts.map