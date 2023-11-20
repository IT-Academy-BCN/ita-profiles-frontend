import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpBackend, { HttpBackendOptions } from 'i18next-http-backend';

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(HttpBackend)
  .init<HttpBackendOptions>({
    backend: {
      loadPath: 'src/translation/languages/{{lng}}.json',
    },
    interpolation: { escapeValue: false },
    fallbackLng: 'ca',
    detection: {
      order: [
        'cookie',
        'htmlTag',
        'localStorage',
        'navigator',
        'path',
        'subdomain',
      ],
      caches: ['cookie'],
    },
  });

export default i18next;
