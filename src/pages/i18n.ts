import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import PhraseInContextEditorPostProcessor from 'i18next-phrase-in-context-editor-post-processor';
import translationFr from 'public/locales/fr/translation.json';
import translationDe from 'public/locales/en/translation.json';

const resources = {
  en: {
    translation: translationFr,
  },
  fr: {
    translation: translationDe,
  },
};

i18n
  .use(initReactI18next)
  .use(
    new PhraseInContextEditorPostProcessor({
      phraseEnabled: Boolean(process.env.PHRASE_ACTIVE_EDITOR) || false,
      projectId: process.env.PHRASE_KEY || '',
    })
  )
  .init({
    resources,
    lng: 'en',

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
    postProcess: ['phraseInContextEditor'],
  });

export default i18n;
