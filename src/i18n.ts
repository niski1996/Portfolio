import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import plNavi from './locales/pl/navi.json';
import enNavi from './locales/en/navi.json';
import deNavi from './locales/de/navi.json';

export const defaultNS = 'navi';

i18next.use(initReactI18next).init({
  debug: true,
  fallbackLng: 'pl',
  defaultNS,
  resources: {
    en: {
      navi: enNavi,
    },
    de: {
      navi: deNavi,

    },
    pl: {
      navi: plNavi,
    },
  },
});

export default i18next;