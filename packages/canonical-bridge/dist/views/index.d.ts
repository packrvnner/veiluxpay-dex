import { IBridgeConfig } from '@bnb-chain/canonical-bridge-widget';
export interface CanonicalBridgeProps {
    connectWalletButtons: {
        default: IBridgeConfig['components']['connectWalletButton'];
    } & {
        [key: string]: IBridgeConfig['components']['connectWalletButton'];
    };
    supportedChainIds: number[];
    rpcConfig: Record<number, readonly string[]>;
    disabledToChains?: number[];
    deBridgeAccessToken?: string;
}
export declare const CanonicalBridge: (props: CanonicalBridgeProps) => import("react/jsx-runtime").JSX.Element;
