"use client";

import { Language, LanguageContext } from "@/contexts/language";
import React, { useState } from "react";

export const LanguageProvider = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    const [language, setLanguage] = useState<Language>("en");

    const toggleLanguage = () => {
        setLanguage((prev) => (prev === "en" ? "bn" : "en"));
    };

    const setLang = (lang: Language) => {
        setLanguage(lang);
    };

    return (
        <LanguageContext.Provider
            value={{ language, toggleLanguage, setLanguage: setLang }}
        >
            {children}
        </LanguageContext.Provider>
    );
};
