import { ElementType, ReactNode } from "react";
import { BorderProps, LayoutProps, ResponsiveValue, SpaceProps } from "styled-system";
import type { PolymorphicComponentProps } from "../../util/polymorphic";
export declare const scales: {
    readonly MD: "md";
    readonly SM: "sm";
    readonly XS: "xs";
};
export declare const variants: {
    readonly PRIMARY: "primary";
    readonly PRIMARY60: "primary60";
    readonly PRIMARY60_OUTLINE: "primary60Outline";
    readonly SECONDARY: "secondary";
    readonly TERTIARY: "tertiary";
    readonly TEXT: "text";
    readonly TEXT_PRIMARY_60: "textPrimary60";
    readonly DANGER: "danger";
    readonly DANGER_OUTLINE: "dangerOutline";
    readonly SUBTLE: "subtle";
    readonly SUCCESS: "success";
    readonly LIGHT: "light";
    readonly BUBBLEGUM: "bubblegum";
};
export type Scale = (typeof scales)[keyof typeof scales];
export type Variant = (typeof variants)[keyof typeof variants];
export interface BaseButtonProps extends LayoutProps, SpaceProps, BorderProps {
    as?: "a" | "button" | ElementType;
    external?: boolean;
    isLoading?: boolean;
    scale?: ResponsiveValue<Scale>;
    variant?: Variant;
    disabled?: boolean;
    startIcon?: ReactNode;
    endIcon?: ReactNode;
    decorator?: {
        backgroundColor?: string;
        color?: string;
        text: string;
        direction?: "left" | "right";
    };
}
export type ButtonProps<P extends ElementType = "button"> = PolymorphicComponentProps<P, BaseButtonProps>;
