import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import nl from './nl.json';
import en from './en.json';
import pt from './pt.json';
import fr from './fr.json';
import es from './es.json';

function loadLanguage(): string {
  try {
    const stored = localStorage.getItem('gespreksstarters-languages');
    if (stored) {
      const parsed = JSON.parse(stored);
      return parsed.from ?? 'nl';
    }
  } catch { /* ignore */ }
  return 'nl';
}

i18n.use(initReactI18next).init({
  resources: {
    nl: { translation: nl },
    en: { translation: en },
    pt: { translation: pt },
    fr: { translation: fr },
    es: { translation: es },
  },
  lng: loadLanguage(),
  fallbackLng: 'nl',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
