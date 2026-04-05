import { ERC20Token } from './entities/erc20Token';
export declare const ZERO_PERCENT: any;
export declare const ONE_HUNDRED_PERCENT: any;
export declare const WETH9: {
    [x: number]: ERC20Token;
};
export declare const WBNB: {
    [x: number]: ERC20Token;
};
export declare const WNATIVE: {
    [x: number]: ERC20Token;
};
export declare const NATIVE: {
    [x: number]: {
        readonly name: "Ether";
        readonly symbol: "ETH";
        readonly decimals: 18;
    } | {
        readonly name: "Binance Chain Native Token";
        readonly symbol: "BNB";
        readonly decimals: 18;
    } | {
        name: string;
        symbol: string;
        decimals: number;
    };
};
//# sourceMappingURL=constants.d.ts.map