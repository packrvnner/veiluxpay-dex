import { Currency } from '@pancakeswap/sdk';
import { ChainId } from '@pancakeswap/chains';
import { Address } from 'viem';
import { AdvancedPoolFormParams, CreateInfinityStablePoolOptions, CreatePoolAndAddLiquidityOptions, MethodParameters, PoolPreset } from './types';
/**
 * StableSwapNG Pool Factory for creating and managing stable swap pools
 */
export declare abstract class InfinityStablePoolFactory {
    static ABI: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_hookFactory";
            readonly type: "address";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "constructor";
    }, {
        readonly inputs: readonly [];
        readonly name: "NameTooLong";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "token";
            readonly type: "address";
        }];
        readonly name: "SafeERC20FailedOperation";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "SymbolTooLong";
        readonly type: "error";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "address[]";
            readonly name: "coins";
            readonly type: "address[]";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "A";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "fee";
            readonly type: "uint256";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "creator";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "PoolId";
            readonly name: "poolId";
            readonly type: "bytes32";
        }];
        readonly name: "PoolCreated";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "address[]";
            readonly name: "coins";
            readonly type: "address[]";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "A";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "fee";
            readonly type: "uint256";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "creator";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "PoolId";
            readonly name: "poolId";
            readonly type: "bytes32";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "amount0";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "amount1";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "lpMinted";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "receiver";
            readonly type: "address";
        }];
        readonly name: "PoolCreatedAndLiquidityAdded";
        readonly type: "event";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "string";
                readonly name: "name";
                readonly type: "string";
            }, {
                readonly internalType: "string";
                readonly name: "symbol";
                readonly type: "string";
            }, {
                readonly internalType: "address[]";
                readonly name: "coins";
                readonly type: "address[]";
            }, {
                readonly internalType: "uint256";
                readonly name: "A";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "fee";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "offpegFeeMultiplier";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "maExpTime";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "implementationIdx";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint8[]";
                readonly name: "assetTypes";
                readonly type: "uint8[]";
            }, {
                readonly internalType: "bytes4[]";
                readonly name: "methodIds";
                readonly type: "bytes4[]";
            }, {
                readonly internalType: "address[]";
                readonly name: "oracles";
                readonly type: "address[]";
            }];
            readonly internalType: "struct ICLStableSwapPoolFactory.CreatePoolParam";
            readonly name: "param";
            readonly type: "tuple";
        }];
        readonly name: "createPool";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "Currency";
                readonly name: "currency0";
                readonly type: "address";
            }, {
                readonly internalType: "Currency";
                readonly name: "currency1";
                readonly type: "address";
            }, {
                readonly internalType: "contract IHooks";
                readonly name: "hooks";
                readonly type: "address";
            }, {
                readonly internalType: "contract IPoolManager";
                readonly name: "poolManager";
                readonly type: "address";
            }, {
                readonly internalType: "uint24";
                readonly name: "fee";
                readonly type: "uint24";
            }, {
                readonly internalType: "bytes32";
                readonly name: "parameters";
                readonly type: "bytes32";
            }];
            readonly internalType: "struct PoolKey";
            readonly name: "";
            readonly type: "tuple";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "string";
                readonly name: "name";
                readonly type: "string";
            }, {
                readonly internalType: "string";
                readonly name: "symbol";
                readonly type: "string";
            }, {
                readonly internalType: "address[]";
                readonly name: "coins";
                readonly type: "address[]";
            }, {
                readonly internalType: "uint256";
                readonly name: "A";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "fee";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "offpegFeeMultiplier";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "maExpTime";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "implementationIdx";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint8[]";
                readonly name: "assetTypes";
                readonly type: "uint8[]";
            }, {
                readonly internalType: "bytes4[]";
                readonly name: "methodIds";
                readonly type: "bytes4[]";
            }, {
                readonly internalType: "address[]";
                readonly name: "oracles";
                readonly type: "address[]";
            }];
            readonly internalType: "struct ICLStableSwapPoolFactory.CreatePoolParam";
            readonly name: "createPoolParam";
            readonly type: "tuple";
        }, {
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "amount0";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "amount1";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "minMintAmount";
                readonly type: "uint256";
            }, {
                readonly internalType: "address";
                readonly name: "receiver";
                readonly type: "address";
            }];
            readonly internalType: "struct ICLStableSwapPoolFactory.AddLiquidityParam";
            readonly name: "addLiquidityParam";
            readonly type: "tuple";
        }];
        readonly name: "createPoolAndAddLiquidity";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "Currency";
                readonly name: "currency0";
                readonly type: "address";
            }, {
                readonly internalType: "Currency";
                readonly name: "currency1";
                readonly type: "address";
            }, {
                readonly internalType: "contract IHooks";
                readonly name: "hooks";
                readonly type: "address";
            }, {
                readonly internalType: "contract IPoolManager";
                readonly name: "poolManager";
                readonly type: "address";
            }, {
                readonly internalType: "uint24";
                readonly name: "fee";
                readonly type: "uint24";
            }, {
                readonly internalType: "bytes32";
                readonly name: "parameters";
                readonly type: "bytes32";
            }];
            readonly internalType: "struct PoolKey";
            readonly name: "";
            readonly type: "tuple";
        }, {
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "hookFactory";
        readonly outputs: readonly [{
            readonly internalType: "contract ICLStableSwapHookFactory";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "poolManager";
        readonly outputs: readonly [{
            readonly internalType: "contract ICLPoolManager";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }];
    /**
     * Get the factory address for a specific chain
     */
    static getFactoryAddress(chainId: ChainId.BSC | ChainId.BSC_TESTNET): Address;
    /**
     * Cannot be constructed.
     */
    private constructor();
    /**
     * Encodes the createPool function call
     */
    private static encodeCreatePool;
    /**
     * Creates call parameters for pool creation
     */
    static createPoolCallParameters(options: CreateInfinityStablePoolOptions): MethodParameters;
    /**
     * Creates call parameters using a preset configuration
     */
    static createPoolWithPresetCallParameters(tokenA: Currency, tokenB: Currency, preset: PoolPreset): MethodParameters;
    /**
     * Get preset configuration
     */
    static getPresetConfig(preset: PoolPreset): Omit<CreateInfinityStablePoolOptions, 'tokenA' | 'tokenB'>;
    /**
     * Encodes the createPoolAndAddLiquidity function call
     */
    private static encodeCreatePoolAndAddLiquidity;
    /**
     * Converts raw string form params (as entered by the user) into SDK-compatible bigint pool options.
     * Handles swap fee percentage, amplification parameter, off-peg fee multiplier, and moving average time.
     */
    static parsePoolFormParams(params: AdvancedPoolFormParams): Pick<CreateInfinityStablePoolOptions, 'fee' | 'A' | 'offpegFeeMultiplier' | 'maExpTime'>;
    /**
     * Creates call parameters for pool creation with initial liquidity
     */
    static createPoolAndAddLiquidityCallParameters(options: CreatePoolAndAddLiquidityOptions): MethodParameters;
}
//# sourceMappingURL=InfinityStablePoolFactory.d.ts.map