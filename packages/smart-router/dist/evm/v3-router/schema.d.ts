import { ChainId } from '@pancakeswap/chains';
import { TradeType } from '@pancakeswap/sdk';
import { z } from 'zod';
import { PoolType } from './types';
export declare const zPools: z.ZodArray<z.ZodUnion<[z.ZodObject<{
    type: z.ZodLiteral<PoolType.V2>;
    reserve0: z.ZodObject<{
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
        value: string;
        currency: {
            symbol: string;
            address: `0x${string}`;
            decimals: number;
        };
    }, {
        value: string;
        currency: {
            symbol: string;
            address: `0x${string}`;
            decimals: number;
        };
    }>;
    reserve1: z.ZodObject<{
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
        value: string;
        currency: {
            symbol: string;
            address: `0x${string}`;
            decimals: number;
        };
    }, {
        value: string;
        currency: {
            symbol: string;
            address: `0x${string}`;
            decimals: number;
        };
    }>;
}, "strip", z.ZodTypeAny, {
    type: PoolType.V2;
    reserve0: {
        value: string;
        currency: {
            symbol: string;
            address: `0x${string}`;
            decimals: number;
        };
    };
    reserve1: {
        value: string;
        currency: {
            symbol: string;
            address: `0x${string}`;
            decimals: number;
        };
    };
}, {
    type: PoolType.V2;
    reserve0: {
        value: string;
        currency: {
            symbol: string;
            address: `0x${string}`;
            decimals: number;
        };
    };
    reserve1: {
        value: string;
        currency: {
            symbol: string;
            address: `0x${string}`;
            decimals: number;
        };
    };
}>, z.ZodObject<{
    type: z.ZodLiteral<PoolType.V3>;
    token0: z.ZodObject<{
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
    token1: z.ZodObject<{
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
    fee: z.ZodNumber;
    liquidity: z.ZodString;
    sqrtRatioX96: z.ZodString;
    tick: z.ZodNumber;
    address: z.ZodType<`0x${string}`, z.ZodTypeDef, `0x${string}`>;
    token0ProtocolFee: z.ZodString;
    token1ProtocolFee: z.ZodString;
}, "strip", z.ZodTypeAny, {
    address: `0x${string}`;
    type: PoolType.V3;
    fee: number;
    token0: {
        symbol: string;
        address: `0x${string}`;
        decimals: number;
    };
    token1: {
        symbol: string;
        address: `0x${string}`;
        decimals: number;
    };
    liquidity: string;
    sqrtRatioX96: string;
    tick: number;
    token0ProtocolFee: string;
    token1ProtocolFee: string;
}, {
    address: `0x${string}`;
    type: PoolType.V3;
    fee: number;
    token0: {
        symbol: string;
        address: `0x${string}`;
        decimals: number;
    };
    token1: {
        symbol: string;
        address: `0x${string}`;
        decimals: number;
    };
    liquidity: string;
    sqrtRatioX96: string;
    tick: number;
    token0ProtocolFee: string;
    token1ProtocolFee: string;
}>, z.ZodObject<{
    type: z.ZodLiteral<PoolType.STABLE>;
    balances: z.ZodArray<z.ZodObject<{
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
        value: string;
        currency: {
            symbol: string;
            address: `0x${string}`;
            decimals: number;
        };
    }, {
        value: string;
        currency: {
            symbol: string;
            address: `0x${string}`;
            decimals: number;
        };
    }>, "many">;
    amplifier: z.ZodString;
    fee: z.ZodString;
    address: z.ZodType<`0x${string}`, z.ZodTypeDef, `0x${string}`>;
}, "strip", z.ZodTypeAny, {
    address: `0x${string}`;
    type: PoolType.STABLE;
    fee: string;
    balances: {
        value: string;
        currency: {
            symbol: string;
            address: `0x${string}`;
            decimals: number;
        };
    }[];
    amplifier: string;
}, {
    address: `0x${string}`;
    type: PoolType.STABLE;
    fee: string;
    balances: {
        value: string;
        currency: {
            symbol: string;
            address: `0x${string}`;
            decimals: number;
        };
    }[];
    amplifier: string;
}>, z.ZodObject<{
    type: z.ZodLiteral<PoolType.InfinityCL>;
    currency0: z.ZodObject<{
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
    currency1: z.ZodObject<{
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
    fee: z.ZodNumber;
    liquidity: z.ZodString;
    sqrtRatioX96: z.ZodString;
    tick: z.ZodNumber;
    tickSpacing: z.ZodNumber;
    poolManager: z.ZodType<`0x${string}`, z.ZodTypeDef, `0x${string}`>;
    id: z.ZodType<`0x${string}`, z.ZodTypeDef, `0x${string}`>;
} & {
    protocolFee: z.ZodOptional<z.ZodNumber>;
    hooks: z.ZodOptional<z.ZodType<`0x${string}`, z.ZodTypeDef, `0x${string}`>>;
    hooksRegistrationBitmap: z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodType<`0x${string}`, z.ZodTypeDef, `0x${string}`>]>>;
}, "strip", z.ZodTypeAny, {
    type: PoolType.InfinityCL;
    id: `0x${string}`;
    fee: number;
    currency0: {
        symbol: string;
        address: `0x${string}`;
        decimals: number;
    };
    currency1: {
        symbol: string;
        address: `0x${string}`;
        decimals: number;
    };
    poolManager: `0x${string}`;
    liquidity: string;
    sqrtRatioX96: string;
    tick: number;
    tickSpacing: number;
    hooks?: `0x${string}` | undefined;
    hooksRegistrationBitmap?: number | `0x${string}` | undefined;
    protocolFee?: number | undefined;
}, {
    type: PoolType.InfinityCL;
    id: `0x${string}`;
    fee: number;
    currency0: {
        symbol: string;
        address: `0x${string}`;
        decimals: number;
    };
    currency1: {
        symbol: string;
        address: `0x${string}`;
        decimals: number;
    };
    poolManager: `0x${string}`;
    liquidity: string;
    sqrtRatioX96: string;
    tick: number;
    tickSpacing: number;
    hooks?: `0x${string}` | undefined;
    hooksRegistrationBitmap?: number | `0x${string}` | undefined;
    protocolFee?: number | undefined;
}>, z.ZodObject<{
    type: z.ZodLiteral<PoolType.InfinityBIN>;
    currency0: z.ZodObject<{
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
    currency1: z.ZodObject<{
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
    fee: z.ZodNumber;
    activeId: z.ZodNumber;
    binStep: z.ZodNumber;
    poolManager: z.ZodType<`0x${string}`, z.ZodTypeDef, `0x${string}`>;
    id: z.ZodType<`0x${string}`, z.ZodTypeDef, `0x${string}`>;
} & {
    protocolFee: z.ZodOptional<z.ZodNumber>;
    hooks: z.ZodOptional<z.ZodType<`0x${string}`, z.ZodTypeDef, `0x${string}`>>;
    hooksRegistrationBitmap: z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodType<`0x${string}`, z.ZodTypeDef, `0x${string}`>]>>;
}, "strip", z.ZodTypeAny, {
    type: PoolType.InfinityBIN;
    id: `0x${string}`;
    fee: number;
    currency0: {
        symbol: string;
        address: `0x${string}`;
        decimals: number;
    };
    currency1: {
        symbol: string;
        address: `0x${string}`;
        decimals: number;
    };
    poolManager: `0x${string}`;
    activeId: number;
    binStep: number;
    hooks?: `0x${string}` | undefined;
    hooksRegistrationBitmap?: number | `0x${string}` | undefined;
    protocolFee?: number | undefined;
}, {
    type: PoolType.InfinityBIN;
    id: `0x${string}`;
    fee: number;
    currency0: {
        symbol: string;
        address: `0x${string}`;
        decimals: number;
    };
    currency1: {
        symbol: string;
        address: `0x${string}`;
        decimals: number;
    };
    poolManager: `0x${string}`;
    activeId: number;
    binStep: number;
    hooks?: `0x${string}` | undefined;
    hooksRegistrationBitmap?: number | `0x${string}` | undefined;
    protocolFee?: number | undefined;
}>, z.ZodObject<{
    type: z.ZodLiteral<PoolType.InfinityStable>;
    currency0: z.ZodObject<{
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
    currency1: z.ZodObject<{
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
    fee: z.ZodNumber;
    tickSpacing: z.ZodNumber;
    id: z.ZodType<`0x${string}`, z.ZodTypeDef, `0x${string}`>;
    poolManager: z.ZodType<`0x${string}`, z.ZodTypeDef, `0x${string}`>;
} & {
    hooks: z.ZodOptional<z.ZodType<`0x${string}`, z.ZodTypeDef, `0x${string}`>>;
    hooksRegistrationBitmap: z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodType<`0x${string}`, z.ZodTypeDef, `0x${string}`>]>>;
    reserve0: z.ZodOptional<z.ZodObject<{
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
        value: string;
        currency: {
            symbol: string;
            address: `0x${string}`;
            decimals: number;
        };
    }, {
        value: string;
        currency: {
            symbol: string;
            address: `0x${string}`;
            decimals: number;
        };
    }>>;
    reserve1: z.ZodOptional<z.ZodObject<{
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
        value: string;
        currency: {
            symbol: string;
            address: `0x${string}`;
            decimals: number;
        };
    }, {
        value: string;
        currency: {
            symbol: string;
            address: `0x${string}`;
            decimals: number;
        };
    }>>;
    stableFee: z.ZodNumber;
    amplifier: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    type: PoolType.InfinityStable;
    id: `0x${string}`;
    fee: number;
    currency0: {
        symbol: string;
        address: `0x${string}`;
        decimals: number;
    };
    currency1: {
        symbol: string;
        address: `0x${string}`;
        decimals: number;
    };
    poolManager: `0x${string}`;
    amplifier: number;
    tickSpacing: number;
    stableFee: number;
    hooks?: `0x${string}` | undefined;
    reserve0?: {
        value: string;
        currency: {
            symbol: string;
            address: `0x${string}`;
            decimals: number;
        };
    } | undefined;
    reserve1?: {
        value: string;
        currency: {
            symbol: string;
            address: `0x${string}`;
            decimals: number;
        };
    } | undefined;
    hooksRegistrationBitmap?: number | `0x${string}` | undefined;
}, {
    type: PoolType.InfinityStable;
    id: `0x${string}`;
    fee: number;
    currency0: {
        symbol: string;
        address: `0x${string}`;
        decimals: number;
    };
    currency1: {
        symbol: string;
        address: `0x${string}`;
        decimals: number;
    };
    poolManager: `0x${string}`;
    amplifier: number;
    tickSpacing: number;
    stableFee: number;
    hooks?: `0x${string}` | undefined;
    reserve0?: {
        value: string;
        currency: {
            symbol: string;
            address: `0x${string}`;
            decimals: number;
        };
    } | undefined;
    reserve1?: {
        value: string;
        currency: {
            symbol: string;
            address: `0x${string}`;
            decimals: number;
        };
    } | undefined;
    hooksRegistrationBitmap?: number | `0x${string}` | undefined;
}>]>, "many">;
export declare const zRouterGetParams: z.ZodObject<{
    blockNumber: z.ZodOptional<z.ZodString>;
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
        value: string;
        currency: {
            symbol: string;
            address: `0x${string}`;
            decimals: number;
        };
    }, {
        value: string;
        currency: {
            symbol: string;
            address: `0x${string}`;
            decimals: number;
        };
    }>;
    chainId: z.ZodNativeEnum<typeof ChainId>;
    tradeType: z.ZodNativeEnum<typeof TradeType>;
    maxSplits: z.ZodOptional<z.ZodNumber>;
    gasPriceWei: z.ZodOptional<z.ZodString>;
    maxHops: z.ZodOptional<z.ZodNumber>;
    candidatePools: z.ZodArray<z.ZodUnion<[z.ZodObject<{
        type: z.ZodLiteral<PoolType.V2>;
        reserve0: z.ZodObject<{
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
            value: string;
            currency: {
                symbol: string;
                address: `0x${string}`;
                decimals: number;
            };
        }, {
            value: string;
            currency: {
                symbol: string;
                address: `0x${string}`;
                decimals: number;
            };
        }>;
        reserve1: z.ZodObject<{
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
            value: string;
            currency: {
                symbol: string;
                address: `0x${string}`;
                decimals: number;
            };
        }, {
            value: string;
            currency: {
                symbol: string;
                address: `0x${string}`;
                decimals: number;
            };
        }>;
    }, "strip", z.ZodTypeAny, {
        type: PoolType.V2;
        reserve0: {
            value: string;
            currency: {
                symbol: string;
                address: `0x${string}`;
                decimals: number;
            };
        };
        reserve1: {
            value: string;
            currency: {
                symbol: string;
                address: `0x${string}`;
                decimals: number;
            };
        };
    }, {
        type: PoolType.V2;
        reserve0: {
            value: string;
            currency: {
                symbol: string;
                address: `0x${string}`;
                decimals: number;
            };
        };
        reserve1: {
            value: string;
            currency: {
                symbol: string;
                address: `0x${string}`;
                decimals: number;
            };
        };
    }>, z.ZodObject<{
        type: z.ZodLiteral<PoolType.V3>;
        token0: z.ZodObject<{
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
        token1: z.ZodObject<{
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
        fee: z.ZodNumber;
        liquidity: z.ZodString;
        sqrtRatioX96: z.ZodString;
        tick: z.ZodNumber;
        address: z.ZodType<`0x${string}`, z.ZodTypeDef, `0x${string}`>;
        token0ProtocolFee: z.ZodString;
        token1ProtocolFee: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        address: `0x${string}`;
        type: PoolType.V3;
        fee: number;
        token0: {
            symbol: string;
            address: `0x${string}`;
            decimals: number;
        };
        token1: {
            symbol: string;
            address: `0x${string}`;
            decimals: number;
        };
        liquidity: string;
        sqrtRatioX96: string;
        tick: number;
        token0ProtocolFee: string;
        token1ProtocolFee: string;
    }, {
        address: `0x${string}`;
        type: PoolType.V3;
        fee: number;
        token0: {
            symbol: string;
            address: `0x${string}`;
            decimals: number;
        };
        token1: {
            symbol: string;
            address: `0x${string}`;
            decimals: number;
        };
        liquidity: string;
        sqrtRatioX96: string;
        tick: number;
        token0ProtocolFee: string;
        token1ProtocolFee: string;
    }>, z.ZodObject<{
        type: z.ZodLiteral<PoolType.STABLE>;
        balances: z.ZodArray<z.ZodObject<{
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
            value: string;
            currency: {
                symbol: string;
                address: `0x${string}`;
                decimals: number;
            };
        }, {
            value: string;
            currency: {
                symbol: string;
                address: `0x${string}`;
                decimals: number;
            };
        }>, "many">;
        amplifier: z.ZodString;
        fee: z.ZodString;
        address: z.ZodType<`0x${string}`, z.ZodTypeDef, `0x${string}`>;
    }, "strip", z.ZodTypeAny, {
        address: `0x${string}`;
        type: PoolType.STABLE;
        fee: string;
        balances: {
            value: string;
            currency: {
                symbol: string;
                address: `0x${string}`;
                decimals: number;
            };
        }[];
        amplifier: string;
    }, {
        address: `0x${string}`;
        type: PoolType.STABLE;
        fee: string;
        balances: {
            value: string;
            currency: {
                symbol: string;
                address: `0x${string}`;
                decimals: number;
            };
        }[];
        amplifier: string;
    }>, z.ZodObject<{
        type: z.ZodLiteral<PoolType.InfinityCL>;
        currency0: z.ZodObject<{
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
        currency1: z.ZodObject<{
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
        fee: z.ZodNumber;
        liquidity: z.ZodString;
        sqrtRatioX96: z.ZodString;
        tick: z.ZodNumber;
        tickSpacing: z.ZodNumber;
        poolManager: z.ZodType<`0x${string}`, z.ZodTypeDef, `0x${string}`>;
        id: z.ZodType<`0x${string}`, z.ZodTypeDef, `0x${string}`>;
    } & {
        protocolFee: z.ZodOptional<z.ZodNumber>;
        hooks: z.ZodOptional<z.ZodType<`0x${string}`, z.ZodTypeDef, `0x${string}`>>;
        hooksRegistrationBitmap: z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodType<`0x${string}`, z.ZodTypeDef, `0x${string}`>]>>;
    }, "strip", z.ZodTypeAny, {
        type: PoolType.InfinityCL;
        id: `0x${string}`;
        fee: number;
        currency0: {
            symbol: string;
            address: `0x${string}`;
            decimals: number;
        };
        currency1: {
            symbol: string;
            address: `0x${string}`;
            decimals: number;
        };
        poolManager: `0x${string}`;
        liquidity: string;
        sqrtRatioX96: string;
        tick: number;
        tickSpacing: number;
        hooks?: `0x${string}` | undefined;
        hooksRegistrationBitmap?: number | `0x${string}` | undefined;
        protocolFee?: number | undefined;
    }, {
        type: PoolType.InfinityCL;
        id: `0x${string}`;
        fee: number;
        currency0: {
            symbol: string;
            address: `0x${string}`;
            decimals: number;
        };
        currency1: {
            symbol: string;
            address: `0x${string}`;
            decimals: number;
        };
        poolManager: `0x${string}`;
        liquidity: string;
        sqrtRatioX96: string;
        tick: number;
        tickSpacing: number;
        hooks?: `0x${string}` | undefined;
        hooksRegistrationBitmap?: number | `0x${string}` | undefined;
        protocolFee?: number | undefined;
    }>, z.ZodObject<{
        type: z.ZodLiteral<PoolType.InfinityBIN>;
        currency0: z.ZodObject<{
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
        currency1: z.ZodObject<{
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
        fee: z.ZodNumber;
        activeId: z.ZodNumber;
        binStep: z.ZodNumber;
        poolManager: z.ZodType<`0x${string}`, z.ZodTypeDef, `0x${string}`>;
        id: z.ZodType<`0x${string}`, z.ZodTypeDef, `0x${string}`>;
    } & {
        protocolFee: z.ZodOptional<z.ZodNumber>;
        hooks: z.ZodOptional<z.ZodType<`0x${string}`, z.ZodTypeDef, `0x${string}`>>;
        hooksRegistrationBitmap: z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodType<`0x${string}`, z.ZodTypeDef, `0x${string}`>]>>;
    }, "strip", z.ZodTypeAny, {
        type: PoolType.InfinityBIN;
        id: `0x${string}`;
        fee: number;
        currency0: {
            symbol: string;
            address: `0x${string}`;
            decimals: number;
        };
        currency1: {
            symbol: string;
            address: `0x${string}`;
            decimals: number;
        };
        poolManager: `0x${string}`;
        activeId: number;
        binStep: number;
        hooks?: `0x${string}` | undefined;
        hooksRegistrationBitmap?: number | `0x${string}` | undefined;
        protocolFee?: number | undefined;
    }, {
        type: PoolType.InfinityBIN;
        id: `0x${string}`;
        fee: number;
        currency0: {
            symbol: string;
            address: `0x${string}`;
            decimals: number;
        };
        currency1: {
            symbol: string;
            address: `0x${string}`;
            decimals: number;
        };
        poolManager: `0x${string}`;
        activeId: number;
        binStep: number;
        hooks?: `0x${string}` | undefined;
        hooksRegistrationBitmap?: number | `0x${string}` | undefined;
        protocolFee?: number | undefined;
    }>, z.ZodObject<{
        type: z.ZodLiteral<PoolType.InfinityStable>;
        currency0: z.ZodObject<{
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
        currency1: z.ZodObject<{
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
        fee: z.ZodNumber;
        tickSpacing: z.ZodNumber;
        id: z.ZodType<`0x${string}`, z.ZodTypeDef, `0x${string}`>;
        poolManager: z.ZodType<`0x${string}`, z.ZodTypeDef, `0x${string}`>;
    } & {
        hooks: z.ZodOptional<z.ZodType<`0x${string}`, z.ZodTypeDef, `0x${string}`>>;
        hooksRegistrationBitmap: z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodType<`0x${string}`, z.ZodTypeDef, `0x${string}`>]>>;
        reserve0: z.ZodOptional<z.ZodObject<{
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
            value: string;
            currency: {
                symbol: string;
                address: `0x${string}`;
                decimals: number;
            };
        }, {
            value: string;
            currency: {
                symbol: string;
                address: `0x${string}`;
                decimals: number;
            };
        }>>;
        reserve1: z.ZodOptional<z.ZodObject<{
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
            value: string;
            currency: {
                symbol: string;
                address: `0x${string}`;
                decimals: number;
            };
        }, {
            value: string;
            currency: {
                symbol: string;
                address: `0x${string}`;
                decimals: number;
            };
        }>>;
        stableFee: z.ZodNumber;
        amplifier: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        type: PoolType.InfinityStable;
        id: `0x${string}`;
        fee: number;
        currency0: {
            symbol: string;
            address: `0x${string}`;
            decimals: number;
        };
        currency1: {
            symbol: string;
            address: `0x${string}`;
            decimals: number;
        };
        poolManager: `0x${string}`;
        amplifier: number;
        tickSpacing: number;
        stableFee: number;
        hooks?: `0x${string}` | undefined;
        reserve0?: {
            value: string;
            currency: {
                symbol: string;
                address: `0x${string}`;
                decimals: number;
            };
        } | undefined;
        reserve1?: {
            value: string;
            currency: {
                symbol: string;
                address: `0x${string}`;
                decimals: number;
            };
        } | undefined;
        hooksRegistrationBitmap?: number | `0x${string}` | undefined;
    }, {
        type: PoolType.InfinityStable;
        id: `0x${string}`;
        fee: number;
        currency0: {
            symbol: string;
            address: `0x${string}`;
            decimals: number;
        };
        currency1: {
            symbol: string;
            address: `0x${string}`;
            decimals: number;
        };
        poolManager: `0x${string}`;
        amplifier: number;
        tickSpacing: number;
        stableFee: number;
        hooks?: `0x${string}` | undefined;
        reserve0?: {
            value: string;
            currency: {
                symbol: string;
                address: `0x${string}`;
                decimals: number;
            };
        } | undefined;
        reserve1?: {
            value: string;
            currency: {
                symbol: string;
                address: `0x${string}`;
                decimals: number;
            };
        } | undefined;
        hooksRegistrationBitmap?: number | `0x${string}` | undefined;
    }>]>, "many">;
    poolTypes: z.ZodOptional<z.ZodArray<z.ZodNativeEnum<typeof PoolType>, "many">>;
}, "strip", z.ZodTypeAny, {
    currency: {
        symbol: string;
        address: `0x${string}`;
        decimals: number;
    };
    amount: {
        value: string;
        currency: {
            symbol: string;
            address: `0x${string}`;
            decimals: number;
        };
    };
    chainId: ChainId;
    tradeType: TradeType;
    candidatePools: ({
        type: PoolType.V2;
        reserve0: {
            value: string;
            currency: {
                symbol: string;
                address: `0x${string}`;
                decimals: number;
            };
        };
        reserve1: {
            value: string;
            currency: {
                symbol: string;
                address: `0x${string}`;
                decimals: number;
            };
        };
    } | {
        address: `0x${string}`;
        type: PoolType.V3;
        fee: number;
        token0: {
            symbol: string;
            address: `0x${string}`;
            decimals: number;
        };
        token1: {
            symbol: string;
            address: `0x${string}`;
            decimals: number;
        };
        liquidity: string;
        sqrtRatioX96: string;
        tick: number;
        token0ProtocolFee: string;
        token1ProtocolFee: string;
    } | {
        address: `0x${string}`;
        type: PoolType.STABLE;
        fee: string;
        balances: {
            value: string;
            currency: {
                symbol: string;
                address: `0x${string}`;
                decimals: number;
            };
        }[];
        amplifier: string;
    } | {
        type: PoolType.InfinityCL;
        id: `0x${string}`;
        fee: number;
        currency0: {
            symbol: string;
            address: `0x${string}`;
            decimals: number;
        };
        currency1: {
            symbol: string;
            address: `0x${string}`;
            decimals: number;
        };
        poolManager: `0x${string}`;
        liquidity: string;
        sqrtRatioX96: string;
        tick: number;
        tickSpacing: number;
        hooks?: `0x${string}` | undefined;
        hooksRegistrationBitmap?: number | `0x${string}` | undefined;
        protocolFee?: number | undefined;
    } | {
        type: PoolType.InfinityBIN;
        id: `0x${string}`;
        fee: number;
        currency0: {
            symbol: string;
            address: `0x${string}`;
            decimals: number;
        };
        currency1: {
            symbol: string;
            address: `0x${string}`;
            decimals: number;
        };
        poolManager: `0x${string}`;
        activeId: number;
        binStep: number;
        hooks?: `0x${string}` | undefined;
        hooksRegistrationBitmap?: number | `0x${string}` | undefined;
        protocolFee?: number | undefined;
    } | {
        type: PoolType.InfinityStable;
        id: `0x${string}`;
        fee: number;
        currency0: {
            symbol: string;
            address: `0x${string}`;
            decimals: number;
        };
        currency1: {
            symbol: string;
            address: `0x${string}`;
            decimals: number;
        };
        poolManager: `0x${string}`;
        amplifier: number;
        tickSpacing: number;
        stableFee: number;
        hooks?: `0x${string}` | undefined;
        reserve0?: {
            value: string;
            currency: {
                symbol: string;
                address: `0x${string}`;
                decimals: number;
            };
        } | undefined;
        reserve1?: {
            value: string;
            currency: {
                symbol: string;
                address: `0x${string}`;
                decimals: number;
            };
        } | undefined;
        hooksRegistrationBitmap?: number | `0x${string}` | undefined;
    })[];
    blockNumber?: string | undefined;
    maxSplits?: number | undefined;
    gasPriceWei?: string | undefined;
    maxHops?: number | undefined;
    poolTypes?: PoolType[] | undefined;
}, {
    currency: {
        symbol: string;
        address: `0x${string}`;
        decimals: number;
    };
    amount: {
        value: string;
        currency: {
            symbol: string;
            address: `0x${string}`;
            decimals: number;
        };
    };
    chainId: ChainId;
    tradeType: TradeType;
    candidatePools: ({
        type: PoolType.V2;
        reserve0: {
            value: string;
            currency: {
                symbol: string;
                address: `0x${string}`;
                decimals: number;
            };
        };
        reserve1: {
            value: string;
            currency: {
                symbol: string;
                address: `0x${string}`;
                decimals: number;
            };
        };
    } | {
        address: `0x${string}`;
        type: PoolType.V3;
        fee: number;
        token0: {
            symbol: string;
            address: `0x${string}`;
            decimals: number;
        };
        token1: {
            symbol: string;
            address: `0x${string}`;
            decimals: number;
        };
        liquidity: string;
        sqrtRatioX96: string;
        tick: number;
        token0ProtocolFee: string;
        token1ProtocolFee: string;
    } | {
        address: `0x${string}`;
        type: PoolType.STABLE;
        fee: string;
        balances: {
            value: string;
            currency: {
                symbol: string;
                address: `0x${string}`;
                decimals: number;
            };
        }[];
        amplifier: string;
    } | {
        type: PoolType.InfinityCL;
        id: `0x${string}`;
        fee: number;
        currency0: {
            symbol: string;
            address: `0x${string}`;
            decimals: number;
        };
        currency1: {
            symbol: string;
            address: `0x${string}`;
            decimals: number;
        };
        poolManager: `0x${string}`;
        liquidity: string;
        sqrtRatioX96: string;
        tick: number;
        tickSpacing: number;
        hooks?: `0x${string}` | undefined;
        hooksRegistrationBitmap?: number | `0x${string}` | undefined;
        protocolFee?: number | undefined;
    } | {
        type: PoolType.InfinityBIN;
        id: `0x${string}`;
        fee: number;
        currency0: {
            symbol: string;
            address: `0x${string}`;
            decimals: number;
        };
        currency1: {
            symbol: string;
            address: `0x${string}`;
            decimals: number;
        };
        poolManager: `0x${string}`;
        activeId: number;
        binStep: number;
        hooks?: `0x${string}` | undefined;
        hooksRegistrationBitmap?: number | `0x${string}` | undefined;
        protocolFee?: number | undefined;
    } | {
        type: PoolType.InfinityStable;
        id: `0x${string}`;
        fee: number;
        currency0: {
            symbol: string;
            address: `0x${string}`;
            decimals: number;
        };
        currency1: {
            symbol: string;
            address: `0x${string}`;
            decimals: number;
        };
        poolManager: `0x${string}`;
        amplifier: number;
        tickSpacing: number;
        stableFee: number;
        hooks?: `0x${string}` | undefined;
        reserve0?: {
            value: string;
            currency: {
                symbol: string;
                address: `0x${string}`;
                decimals: number;
            };
        } | undefined;
        reserve1?: {
            value: string;
            currency: {
                symbol: string;
                address: `0x${string}`;
                decimals: number;
            };
        } | undefined;
        hooksRegistrationBitmap?: number | `0x${string}` | undefined;
    })[];
    blockNumber?: string | undefined;
    maxSplits?: number | undefined;
    gasPriceWei?: string | undefined;
    maxHops?: number | undefined;
    poolTypes?: PoolType[] | undefined;
}>;
export declare const zRouterPostParams: z.ZodObject<{
    account: z.ZodOptional<z.ZodType<`0x${string}`, z.ZodTypeDef, `0x${string}`>>;
    blockNumber: z.ZodOptional<z.ZodString>;
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
        value: string;
        currency: {
            symbol: string;
            address: `0x${string}`;
            decimals: number;
        };
    }, {
        value: string;
        currency: {
            symbol: string;
            address: `0x${string}`;
            decimals: number;
        };
    }>;
    chainId: z.ZodNativeEnum<typeof ChainId>;
    tradeType: z.ZodNativeEnum<typeof TradeType>;
    maxSplits: z.ZodOptional<z.ZodNumber>;
    gasPriceWei: z.ZodOptional<z.ZodString>;
    maxHops: z.ZodOptional<z.ZodNumber>;
    quoteCurrencyUsdPrice: z.ZodOptional<z.ZodNumber>;
    nativeCurrencyUsdPrice: z.ZodOptional<z.ZodNumber>;
    candidatePools: z.ZodArray<z.ZodUnion<[z.ZodObject<{
        type: z.ZodLiteral<PoolType.V2>;
        reserve0: z.ZodObject<{
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
            value: string;
            currency: {
                symbol: string;
                address: `0x${string}`;
                decimals: number;
            };
        }, {
            value: string;
            currency: {
                symbol: string;
                address: `0x${string}`;
                decimals: number;
            };
        }>;
        reserve1: z.ZodObject<{
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
            value: string;
            currency: {
                symbol: string;
                address: `0x${string}`;
                decimals: number;
            };
        }, {
            value: string;
            currency: {
                symbol: string;
                address: `0x${string}`;
                decimals: number;
            };
        }>;
    }, "strip", z.ZodTypeAny, {
        type: PoolType.V2;
        reserve0: {
            value: string;
            currency: {
                symbol: string;
                address: `0x${string}`;
                decimals: number;
            };
        };
        reserve1: {
            value: string;
            currency: {
                symbol: string;
                address: `0x${string}`;
                decimals: number;
            };
        };
    }, {
        type: PoolType.V2;
        reserve0: {
            value: string;
            currency: {
                symbol: string;
                address: `0x${string}`;
                decimals: number;
            };
        };
        reserve1: {
            value: string;
            currency: {
                symbol: string;
                address: `0x${string}`;
                decimals: number;
            };
        };
    }>, z.ZodObject<{
        type: z.ZodLiteral<PoolType.V3>;
        token0: z.ZodObject<{
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
        token1: z.ZodObject<{
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
        fee: z.ZodNumber;
        liquidity: z.ZodString;
        sqrtRatioX96: z.ZodString;
        tick: z.ZodNumber;
        address: z.ZodType<`0x${string}`, z.ZodTypeDef, `0x${string}`>;
        token0ProtocolFee: z.ZodString;
        token1ProtocolFee: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        address: `0x${string}`;
        type: PoolType.V3;
        fee: number;
        token0: {
            symbol: string;
            address: `0x${string}`;
            decimals: number;
        };
        token1: {
            symbol: string;
            address: `0x${string}`;
            decimals: number;
        };
        liquidity: string;
        sqrtRatioX96: string;
        tick: number;
        token0ProtocolFee: string;
        token1ProtocolFee: string;
    }, {
        address: `0x${string}`;
        type: PoolType.V3;
        fee: number;
        token0: {
            symbol: string;
            address: `0x${string}`;
            decimals: number;
        };
        token1: {
            symbol: string;
            address: `0x${string}`;
            decimals: number;
        };
        liquidity: string;
        sqrtRatioX96: string;
        tick: number;
        token0ProtocolFee: string;
        token1ProtocolFee: string;
    }>, z.ZodObject<{
        type: z.ZodLiteral<PoolType.STABLE>;
        balances: z.ZodArray<z.ZodObject<{
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
            value: string;
            currency: {
                symbol: string;
                address: `0x${string}`;
                decimals: number;
            };
        }, {
            value: string;
            currency: {
                symbol: string;
                address: `0x${string}`;
                decimals: number;
            };
        }>, "many">;
        amplifier: z.ZodString;
        fee: z.ZodString;
        address: z.ZodType<`0x${string}`, z.ZodTypeDef, `0x${string}`>;
    }, "strip", z.ZodTypeAny, {
        address: `0x${string}`;
        type: PoolType.STABLE;
        fee: string;
        balances: {
            value: string;
            currency: {
                symbol: string;
                address: `0x${string}`;
                decimals: number;
            };
        }[];
        amplifier: string;
    }, {
        address: `0x${string}`;
        type: PoolType.STABLE;
        fee: string;
        balances: {
            value: string;
            currency: {
                symbol: string;
                address: `0x${string}`;
                decimals: number;
            };
        }[];
        amplifier: string;
    }>, z.ZodObject<{
        type: z.ZodLiteral<PoolType.InfinityCL>;
        currency0: z.ZodObject<{
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
        currency1: z.ZodObject<{
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
        fee: z.ZodNumber;
        liquidity: z.ZodString;
        sqrtRatioX96: z.ZodString;
        tick: z.ZodNumber;
        tickSpacing: z.ZodNumber;
        poolManager: z.ZodType<`0x${string}`, z.ZodTypeDef, `0x${string}`>;
        id: z.ZodType<`0x${string}`, z.ZodTypeDef, `0x${string}`>;
    } & {
        protocolFee: z.ZodOptional<z.ZodNumber>;
        hooks: z.ZodOptional<z.ZodType<`0x${string}`, z.ZodTypeDef, `0x${string}`>>;
        hooksRegistrationBitmap: z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodType<`0x${string}`, z.ZodTypeDef, `0x${string}`>]>>;
    }, "strip", z.ZodTypeAny, {
        type: PoolType.InfinityCL;
        id: `0x${string}`;
        fee: number;
        currency0: {
            symbol: string;
            address: `0x${string}`;
            decimals: number;
        };
        currency1: {
            symbol: string;
            address: `0x${string}`;
            decimals: number;
        };
        poolManager: `0x${string}`;
        liquidity: string;
        sqrtRatioX96: string;
        tick: number;
        tickSpacing: number;
        hooks?: `0x${string}` | undefined;
        hooksRegistrationBitmap?: number | `0x${string}` | undefined;
        protocolFee?: number | undefined;
    }, {
        type: PoolType.InfinityCL;
        id: `0x${string}`;
        fee: number;
        currency0: {
            symbol: string;
            address: `0x${string}`;
            decimals: number;
        };
        currency1: {
            symbol: string;
            address: `0x${string}`;
            decimals: number;
        };
        poolManager: `0x${string}`;
        liquidity: string;
        sqrtRatioX96: string;
        tick: number;
        tickSpacing: number;
        hooks?: `0x${string}` | undefined;
        hooksRegistrationBitmap?: number | `0x${string}` | undefined;
        protocolFee?: number | undefined;
    }>, z.ZodObject<{
        type: z.ZodLiteral<PoolType.InfinityBIN>;
        currency0: z.ZodObject<{
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
        currency1: z.ZodObject<{
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
        fee: z.ZodNumber;
        activeId: z.ZodNumber;
        binStep: z.ZodNumber;
        poolManager: z.ZodType<`0x${string}`, z.ZodTypeDef, `0x${string}`>;
        id: z.ZodType<`0x${string}`, z.ZodTypeDef, `0x${string}`>;
    } & {
        protocolFee: z.ZodOptional<z.ZodNumber>;
        hooks: z.ZodOptional<z.ZodType<`0x${string}`, z.ZodTypeDef, `0x${string}`>>;
        hooksRegistrationBitmap: z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodType<`0x${string}`, z.ZodTypeDef, `0x${string}`>]>>;
    }, "strip", z.ZodTypeAny, {
        type: PoolType.InfinityBIN;
        id: `0x${string}`;
        fee: number;
        currency0: {
            symbol: string;
            address: `0x${string}`;
            decimals: number;
        };
        currency1: {
            symbol: string;
            address: `0x${string}`;
            decimals: number;
        };
        poolManager: `0x${string}`;
        activeId: number;
        binStep: number;
        hooks?: `0x${string}` | undefined;
        hooksRegistrationBitmap?: number | `0x${string}` | undefined;
        protocolFee?: number | undefined;
    }, {
        type: PoolType.InfinityBIN;
        id: `0x${string}`;
        fee: number;
        currency0: {
            symbol: string;
            address: `0x${string}`;
            decimals: number;
        };
        currency1: {
            symbol: string;
            address: `0x${string}`;
            decimals: number;
        };
        poolManager: `0x${string}`;
        activeId: number;
        binStep: number;
        hooks?: `0x${string}` | undefined;
        hooksRegistrationBitmap?: number | `0x${string}` | undefined;
        protocolFee?: number | undefined;
    }>, z.ZodObject<{
        type: z.ZodLiteral<PoolType.InfinityStable>;
        currency0: z.ZodObject<{
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
        currency1: z.ZodObject<{
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
        fee: z.ZodNumber;
        tickSpacing: z.ZodNumber;
        id: z.ZodType<`0x${string}`, z.ZodTypeDef, `0x${string}`>;
        poolManager: z.ZodType<`0x${string}`, z.ZodTypeDef, `0x${string}`>;
    } & {
        hooks: z.ZodOptional<z.ZodType<`0x${string}`, z.ZodTypeDef, `0x${string}`>>;
        hooksRegistrationBitmap: z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodType<`0x${string}`, z.ZodTypeDef, `0x${string}`>]>>;
        reserve0: z.ZodOptional<z.ZodObject<{
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
            value: string;
            currency: {
                symbol: string;
                address: `0x${string}`;
                decimals: number;
            };
        }, {
            value: string;
            currency: {
                symbol: string;
                address: `0x${string}`;
                decimals: number;
            };
        }>>;
        reserve1: z.ZodOptional<z.ZodObject<{
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
            value: string;
            currency: {
                symbol: string;
                address: `0x${string}`;
                decimals: number;
            };
        }, {
            value: string;
            currency: {
                symbol: string;
                address: `0x${string}`;
                decimals: number;
            };
        }>>;
        stableFee: z.ZodNumber;
        amplifier: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        type: PoolType.InfinityStable;
        id: `0x${string}`;
        fee: number;
        currency0: {
            symbol: string;
            address: `0x${string}`;
            decimals: number;
        };
        currency1: {
            symbol: string;
            address: `0x${string}`;
            decimals: number;
        };
        poolManager: `0x${string}`;
        amplifier: number;
        tickSpacing: number;
        stableFee: number;
        hooks?: `0x${string}` | undefined;
        reserve0?: {
            value: string;
            currency: {
                symbol: string;
                address: `0x${string}`;
                decimals: number;
            };
        } | undefined;
        reserve1?: {
            value: string;
            currency: {
                symbol: string;
                address: `0x${string}`;
                decimals: number;
            };
        } | undefined;
        hooksRegistrationBitmap?: number | `0x${string}` | undefined;
    }, {
        type: PoolType.InfinityStable;
        id: `0x${string}`;
        fee: number;
        currency0: {
            symbol: string;
            address: `0x${string}`;
            decimals: number;
        };
        currency1: {
            symbol: string;
            address: `0x${string}`;
            decimals: number;
        };
        poolManager: `0x${string}`;
        amplifier: number;
        tickSpacing: number;
        stableFee: number;
        hooks?: `0x${string}` | undefined;
        reserve0?: {
            value: string;
            currency: {
                symbol: string;
                address: `0x${string}`;
                decimals: number;
            };
        } | undefined;
        reserve1?: {
            value: string;
            currency: {
                symbol: string;
                address: `0x${string}`;
                decimals: number;
            };
        } | undefined;
        hooksRegistrationBitmap?: number | `0x${string}` | undefined;
    }>]>, "many">;
    poolTypes: z.ZodOptional<z.ZodArray<z.ZodNativeEnum<typeof PoolType>, "many">>;
    onChainQuoterGasLimit: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    currency: {
        symbol: string;
        address: `0x${string}`;
        decimals: number;
    };
    amount: {
        value: string;
        currency: {
            symbol: string;
            address: `0x${string}`;
            decimals: number;
        };
    };
    chainId: ChainId;
    tradeType: TradeType;
    candidatePools: ({
        type: PoolType.V2;
        reserve0: {
            value: string;
            currency: {
                symbol: string;
                address: `0x${string}`;
                decimals: number;
            };
        };
        reserve1: {
            value: string;
            currency: {
                symbol: string;
                address: `0x${string}`;
                decimals: number;
            };
        };
    } | {
        address: `0x${string}`;
        type: PoolType.V3;
        fee: number;
        token0: {
            symbol: string;
            address: `0x${string}`;
            decimals: number;
        };
        token1: {
            symbol: string;
            address: `0x${string}`;
            decimals: number;
        };
        liquidity: string;
        sqrtRatioX96: string;
        tick: number;
        token0ProtocolFee: string;
        token1ProtocolFee: string;
    } | {
        address: `0x${string}`;
        type: PoolType.STABLE;
        fee: string;
        balances: {
            value: string;
            currency: {
                symbol: string;
                address: `0x${string}`;
                decimals: number;
            };
        }[];
        amplifier: string;
    } | {
        type: PoolType.InfinityCL;
        id: `0x${string}`;
        fee: number;
        currency0: {
            symbol: string;
            address: `0x${string}`;
            decimals: number;
        };
        currency1: {
            symbol: string;
            address: `0x${string}`;
            decimals: number;
        };
        poolManager: `0x${string}`;
        liquidity: string;
        sqrtRatioX96: string;
        tick: number;
        tickSpacing: number;
        hooks?: `0x${string}` | undefined;
        hooksRegistrationBitmap?: number | `0x${string}` | undefined;
        protocolFee?: number | undefined;
    } | {
        type: PoolType.InfinityBIN;
        id: `0x${string}`;
        fee: number;
        currency0: {
            symbol: string;
            address: `0x${string}`;
            decimals: number;
        };
        currency1: {
            symbol: string;
            address: `0x${string}`;
            decimals: number;
        };
        poolManager: `0x${string}`;
        activeId: number;
        binStep: number;
        hooks?: `0x${string}` | undefined;
        hooksRegistrationBitmap?: number | `0x${string}` | undefined;
        protocolFee?: number | undefined;
    } | {
        type: PoolType.InfinityStable;
        id: `0x${string}`;
        fee: number;
        currency0: {
            symbol: string;
            address: `0x${string}`;
            decimals: number;
        };
        currency1: {
            symbol: string;
            address: `0x${string}`;
            decimals: number;
        };
        poolManager: `0x${string}`;
        amplifier: number;
        tickSpacing: number;
        stableFee: number;
        hooks?: `0x${string}` | undefined;
        reserve0?: {
            value: string;
            currency: {
                symbol: string;
                address: `0x${string}`;
                decimals: number;
            };
        } | undefined;
        reserve1?: {
            value: string;
            currency: {
                symbol: string;
                address: `0x${string}`;
                decimals: number;
            };
        } | undefined;
        hooksRegistrationBitmap?: number | `0x${string}` | undefined;
    })[];
    account?: `0x${string}` | undefined;
    blockNumber?: string | undefined;
    maxSplits?: number | undefined;
    gasPriceWei?: string | undefined;
    maxHops?: number | undefined;
    quoteCurrencyUsdPrice?: number | undefined;
    nativeCurrencyUsdPrice?: number | undefined;
    poolTypes?: PoolType[] | undefined;
    onChainQuoterGasLimit?: string | undefined;
}, {
    currency: {
        symbol: string;
        address: `0x${string}`;
        decimals: number;
    };
    amount: {
        value: string;
        currency: {
            symbol: string;
            address: `0x${string}`;
            decimals: number;
        };
    };
    chainId: ChainId;
    tradeType: TradeType;
    candidatePools: ({
        type: PoolType.V2;
        reserve0: {
            value: string;
            currency: {
                symbol: string;
                address: `0x${string}`;
                decimals: number;
            };
        };
        reserve1: {
            value: string;
            currency: {
                symbol: string;
                address: `0x${string}`;
                decimals: number;
            };
        };
    } | {
        address: `0x${string}`;
        type: PoolType.V3;
        fee: number;
        token0: {
            symbol: string;
            address: `0x${string}`;
            decimals: number;
        };
        token1: {
            symbol: string;
            address: `0x${string}`;
            decimals: number;
        };
        liquidity: string;
        sqrtRatioX96: string;
        tick: number;
        token0ProtocolFee: string;
        token1ProtocolFee: string;
    } | {
        address: `0x${string}`;
        type: PoolType.STABLE;
        fee: string;
        balances: {
            value: string;
            currency: {
                symbol: string;
                address: `0x${string}`;
                decimals: number;
            };
        }[];
        amplifier: string;
    } | {
        type: PoolType.InfinityCL;
        id: `0x${string}`;
        fee: number;
        currency0: {
            symbol: string;
            address: `0x${string}`;
            decimals: number;
        };
        currency1: {
            symbol: string;
            address: `0x${string}`;
            decimals: number;
        };
        poolManager: `0x${string}`;
        liquidity: string;
        sqrtRatioX96: string;
        tick: number;
        tickSpacing: number;
        hooks?: `0x${string}` | undefined;
        hooksRegistrationBitmap?: number | `0x${string}` | undefined;
        protocolFee?: number | undefined;
    } | {
        type: PoolType.InfinityBIN;
        id: `0x${string}`;
        fee: number;
        currency0: {
            symbol: string;
            address: `0x${string}`;
            decimals: number;
        };
        currency1: {
            symbol: string;
            address: `0x${string}`;
            decimals: number;
        };
        poolManager: `0x${string}`;
        activeId: number;
        binStep: number;
        hooks?: `0x${string}` | undefined;
        hooksRegistrationBitmap?: number | `0x${string}` | undefined;
        protocolFee?: number | undefined;
    } | {
        type: PoolType.InfinityStable;
        id: `0x${string}`;
        fee: number;
        currency0: {
            symbol: string;
            address: `0x${string}`;
            decimals: number;
        };
        currency1: {
            symbol: string;
            address: `0x${string}`;
            decimals: number;
        };
        poolManager: `0x${string}`;
        amplifier: number;
        tickSpacing: number;
        stableFee: number;
        hooks?: `0x${string}` | undefined;
        reserve0?: {
            value: string;
            currency: {
                symbol: string;
                address: `0x${string}`;
                decimals: number;
            };
        } | undefined;
        reserve1?: {
            value: string;
            currency: {
                symbol: string;
                address: `0x${string}`;
                decimals: number;
            };
        } | undefined;
        hooksRegistrationBitmap?: number | `0x${string}` | undefined;
    })[];
    account?: `0x${string}` | undefined;
    blockNumber?: string | undefined;
    maxSplits?: number | undefined;
    gasPriceWei?: string | undefined;
    maxHops?: number | undefined;
    quoteCurrencyUsdPrice?: number | undefined;
    nativeCurrencyUsdPrice?: number | undefined;
    poolTypes?: PoolType[] | undefined;
    onChainQuoterGasLimit?: string | undefined;
}>;
export type RouterPostParams = z.infer<typeof zRouterPostParams>;
export type RouterGetParams = z.infer<typeof zRouterGetParams>;
export type SerializedPools = z.infer<typeof zPools>;
//# sourceMappingURL=schema.d.ts.map