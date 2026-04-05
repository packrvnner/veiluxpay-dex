import React from "react";
import { SpaceProps } from "styled-system";
export declare const variants: {
    readonly WARNING: "warning";
    readonly WARNING60: "warning60";
    readonly DANGER: "danger";
    readonly SUCCESS: "success";
    readonly PRIMARY: "primary";
    readonly PRIMARY60: "primary60";
    readonly SECONDARY: "secondary";
    readonly SECONDARY60: "secondary60";
};
export type Variant = (typeof variants)[keyof typeof variants];
export interface MessageProps extends SpaceProps {
    variant: Variant;
    icon?: React.ReactNode;
    action?: React.ReactNode;
    actionInline?: boolean;
    style?: React.CSSProperties;
    showIcon?: boolean;
}
