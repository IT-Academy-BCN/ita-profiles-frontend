import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { ca, en,es } from './languages';

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    interpolation: { escapeValue: false },
    fallbackLng: 'ca',
    detection: {
      order: [
        'htmlTag',
        'cookie',
        'localStorage',
        'navigator',
        'path',
        'subdomain',
      ],
    },
    resources: {
      ca: {
        translation: ca,
      },
      en: {
        translation: en,
      },
      es: {
        translation: es,
      },
    },
  });

export default i18next;
