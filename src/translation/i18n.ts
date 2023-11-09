import i18next from 'i18next';
import { catala, english, espanol } from './languages';

i18next.init({
  interpolation: { escapeValue: false },
  lng: 'catala',
  resources: {
    catala: {
      translation: catala,
    },
    english: {
      translation: english,
    },
    espanol: {
      translation: espanol,
    },
  },
});

export default i18next;
