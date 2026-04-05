import { Language } from "@pancakeswap/localization";
export type LocaleSelectorProps = {
    currentLang?: string;
    langs?: Language[];
    setLang?: (lang: Language) => void;
};
export declare const LocaleSelector: React.FC<LocaleSelectorProps>;
