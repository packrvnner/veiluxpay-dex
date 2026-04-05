import React from "react";
import { SubMenuItemsType } from "../../../components/SubMenuItems";
import { MenuItemsType } from "../../Menu";
export type NavigationProps = {
    links: Array<MenuItemsType>;
    activeItem?: string;
    activeSubItem?: string;
    activeSubItemChildItem?: string;
};
export declare const Navigation: React.FC<NavigationProps>;
export type SubNavigationProps = {
    subLinks?: Array<SubMenuItemsType>;
    activeSubItem?: string;
    activeSubItemChildItem?: string;
};
export declare const SubNavigation: React.FC<SubNavigationProps>;
