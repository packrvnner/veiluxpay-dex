import React, { ReactNode } from "react";
import { BreadcrumbsProps } from "./types";
declare const Breadcrumbs: React.ForwardRefExoticComponent<BreadcrumbsProps & {
    children?: ReactNode | undefined;
} & React.RefAttributes<HTMLUListElement>>;
export default Breadcrumbs;
