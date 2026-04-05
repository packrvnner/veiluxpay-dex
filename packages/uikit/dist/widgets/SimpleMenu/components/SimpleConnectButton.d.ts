import { Variant } from "../../Menu/components/UserMenu/types";
export type ConnectButtonProps = React.PropsWithChildren<{
    onClickConnect?: () => void;
    onClickAccount?: () => void;
    avatarSrc?: string;
    avatarClassName?: string;
    variant?: Variant;
    disabled?: boolean;
    account?: string;
}>;
export declare const SimpleConnectButton: React.FC<ConnectButtonProps>;
