import { createContext } from "react";

export type Language = "en" | "bn";

export interface LanguageContextProps {
    language: Language;
    toggleLanguage: () => void;
    setLanguage: (lang: Language) => void;
}

export const LanguageContext = createContext<LanguageContextProps | undefined>(
    undefined
);
