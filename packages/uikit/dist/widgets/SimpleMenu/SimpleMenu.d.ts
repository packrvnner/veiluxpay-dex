import React, { ElementType, ReactElement, ReactNode } from "react";
export type SimpleMenuProps = {
    linkComponent?: ElementType;
    announcementBanner?: ReactNode;
    brandLogo?: ReactElement;
    homeHref?: string;
    navigation?: ReactNode;
    subNavigation?: ReactNode;
    bottomNavigation?: ReactNode;
    rightSlot?: ReactNode;
};
export declare const SimpleMenu: React.FC<React.PropsWithChildren<SimpleMenuProps>>;
