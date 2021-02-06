import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import detector from 'i18next-browser-languagedetector';

import ptbr from './locales/ptbr';
import en from './locales/en';

const resources = {
  en: {
    translation: en,
  },
  ptBr: {
    translation: ptbr,
  },
};

i18n
  .use(detector)
  .use(initReactI18next)
  .init({
    resources,
    lng: 'ptBr',
    fallbackLng: 'en',

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
