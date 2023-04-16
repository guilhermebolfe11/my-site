import { useContext } from 'react';
import { LanguageContext, SupportedLocales, locales } from '../../context/LanguageContext';
import { MenuItem, Select, SelectChangeEvent } from '@mui/material';

export default function Language() {
    const { locale, setLocale } = useContext(LanguageContext);
    return (
        <Select
            variant='standard'
            value={locale}
            onChange={(event : SelectChangeEvent) => {
                setLocale(event.target.value as SupportedLocales);
            }}
        >
            {Object.keys(locales).map((l,i) => {
                return (<MenuItem key={i} value={l}>{getLabel(l)}</MenuItem>)
            })}
        </Select>
    );
}

function getLabel(locale: string): string {
    switch (locale) {
        case "ptBR":
            return " BR";
        case "enUS":
            return " US";
        default:
            return locale;
    }
}