import { useContext, useEffect } from "react"

import { LanguageContext } from "../context/LanguageContext"
import { LangEn } from "../language/en";
import Lang from "../language/Lang";
import { LangPt } from "../language/pt";

export default function useTranslation() {
    const { locale } = useContext(LanguageContext)
    let translation = getTranslation();
    useEffect(() => { translation = getTranslation() }, [locale]);

    function t(key: string) {
        return getT(key, translation) || key
    }

    function getT(key: string, translation: Lang): string {
        let split = key.split('.');
        let currentTranslation = translation;

        for (let i = 0; i < split.length; i++) {
            let k = split[i];

            if (!currentTranslation[k]) {
                console.warn(`No string '${k}' for locale '${locale}'`);
                return key;
            }

            let value = currentTranslation[k];
            if (typeof value === 'string' || value instanceof String) {
                return value as string;
            }
            
            currentTranslation = value

        }
        return key;
    }

    function getTranslation(): Lang {
        switch (locale) {
            case "ptBR":
                return LangPt;
            case "enUS":
                return LangEn;
            default:
                return LangPt;
        }
    }

    return { t, locale }
}