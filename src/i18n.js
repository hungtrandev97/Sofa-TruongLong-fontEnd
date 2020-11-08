import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';
// import LanguageDetector from 'i18next-browser-languagedetector';

// import translationEN from '../public/locales/en/translation.json';
// import translationES from '../public/locales/es/translation.json';

// const resources = {
//   en: {
//     translation: translationEN,
//   },
//   es: {
//     translation: translationES,
//   }
// };

i18n
  .use(Backend)
  // .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    // resources,
    fallbackLng: 'en',
    debug: true,

    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    // react: {
    //   useSuspense: false
    // }
  });

export default i18n;
