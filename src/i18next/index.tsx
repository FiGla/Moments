import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import translationEN from './en/translation.json';
import translationGR from './gr/translation.json';

const resources = {
  en: {
    translation: translationEN,
  },
  gr: {
    translation: translationGR,
  },
};

i18n
  .use(initReactI18next)
  .use({
    type: 'languageDetector',
    detect: () => 'en',
    init: () => {},
    cacheUserLanguage: () => {},
  })
  .init({
    resources,
    fallbackLng: 'en',
  });

export default i18n;
