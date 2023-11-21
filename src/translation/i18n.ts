import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpBackend, { HttpBackendOptions } from 'i18next-http-backend';
import { localPath } from '../lib/const/endpoints';

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(HttpBackend)
  .init<HttpBackendOptions>({
    fallbackLng: 'ca',
    detection: {
      order: [
        'cookie',
        'htmlTag',
        'navigator',
        'localStorage',
        'path',
        'subdomain',
      ],
      caches: ['cookie'],
    },
    backend: {
      loadPath: localPath,
    },
    interpolation: { escapeValue: false },
  });

export default i18next;
