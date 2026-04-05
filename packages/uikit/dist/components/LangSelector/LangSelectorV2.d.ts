import React from "react";
import { Language } from "./types";
interface Props {
    currentLang: string;
    langs: Language[];
    setLang: (lang: Language) => void;
}
declare const _default: React.NamedExoticComponent<React.PropsWithChildren<Props>>;
export default _default;
