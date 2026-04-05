import React from "react";
import { Variant } from "./types";
export declare const NoProfileMenuIcon: React.FC<{
    size?: number;
}>;
export declare const PendingMenuIcon: React.FC<{
    size?: number;
}>;
export declare const WarningMenuIcon: React.FC<{
    size?: number;
}>;
export declare const DangerMenuIcon: React.FC<{
    size?: number;
}>;
declare const MenuIcon: React.FC<React.PropsWithChildren<{
    avatarSrc?: string;
    variant: Variant;
    className?: string;
    avatarSize?: number;
    avatarRound?: boolean;
}>>;
export default MenuIcon;
