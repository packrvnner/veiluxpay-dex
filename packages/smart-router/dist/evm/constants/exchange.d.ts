import { ChainId } from '@pancakeswap/chains';
import { Token } from '@pancakeswap/sdk';
import { ChainMap, ChainTokenList } from '../types';
export declare const SMART_ROUTER_ADDRESSES: {
    readonly [x: number]: "0x13f4EA83D0bd40E75C8222255bc855a974568Dd4" | "0x9a489505a00cE272eAa5e07Dba6491314CaE3796" | "0x32226588378236Fd0c7c4053999F88aC0e5cAc77" | "0xBee35e9Cbd9595355Eaf5DE2055EF525adB41bE6" | "0xf8b59f3c3Ab33200ec80a8A58b2aA5F5D2a8944C" | "0x4DC9186c6C5F7dd430c7b6D8D513076637902241" | "0x678Aa4bF4E210cf2166753e054d5b7c31cc7fa86" | "0x21d809FB4052bb1807cfe2418bA638d72F4aEf87" | "0xf317eD77Baed624d0EA2384AA88D91B774a9b009" | "0xDDC44b8507B4Ca992fB60F0ECdF5651A87668509" | "0x21114915Ac6d5A2e156931e20B20b038dEd0Be7C" | "0xe27dC57FcE896350a38D8d8aDcEefBfb5649D9De";
};
export declare const V2_ROUTER_ADDRESS: ChainMap<string>;
export declare const STABLE_SWAP_INFO_ADDRESS: ChainMap<string>;
export declare const BASES_TO_CHECK_TRADES_AGAINST: ChainTokenList;
export type ADDITIONAL_BASES_TABLE = {
    [chainId in ChainId]?: {
        [tokenAddress: string]: Token[];
    };
};
/**
 * Additional bases for specific tokens
 * @example { [WBTC.address]: [renBTC], [renBTC.address]: [WBTC] }
 */
export declare const ADDITIONAL_BASES: ADDITIONAL_BASES_TABLE;
/**
 * Some tokens can only be swapped via certain pairs, so we override the list of bases that are considered for these
 * tokens.
 * @example [AMPL.address]: [DAI, WNATIVE[ChainId.BSC]]
 */
export declare const CUSTOM_BASES: {
    [chainId in ChainId]?: {
        [tokenAddress: string]: Token[];
    };
};
//# sourceMappingURL=exchange.d.ts.map