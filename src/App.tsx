import { useState, useCallback, useMemo } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { themes } from './data/cards';
import type { Theme } from './data/cards';
import ThemeSelector from './components/ThemeSelector';
import CardStack from './components/CardStack';
import LanguageModal from './components/LanguageModal';
import Flag from './components/Flags';
import type { LanguageCode } from './components/languages';
import './i18n';
import './App.css';

const FAVORITES_THEME_ID = 'favorites';

const favoritesThemeBase: Theme = {
  id: FAVORITES_THEME_ID,
  name: 'Favorieten',
  emoji: '❤️',
  color: '#ef4444',
  gradient: 'linear-gradient(135deg, #ef4444 0%, #ec4899 50%, #f472b6 100%)',
  cards: [],
};

function loadFavorites(): Set<string> {
  try {
    const stored = localStorage.getItem('gespreksstarters-favorites');
    return stored ? new Set(JSON.parse(stored)) : new Set();
  } catch {
    return new Set();
  }
}

function saveFavorites(favorites: Set<string>) {
  localStorage.setItem('gespreksstarters-favorites', JSON.stringify([...favorites]));
}

// Map each card ID to its original theme for color/gradient lookup
const cardThemeMap = new Map<string, Theme>();
for (const t of themes) {
  for (const c of t.cards) {
    cardThemeMap.set(c.id, t);
  }
}

function loadLanguages(): { from: LanguageCode; to: LanguageCode } {
  try {
    const stored = localStorage.getItem('gespreksstarters-languages');
    if (stored) {
      const parsed = JSON.parse(stored);
      return { from: parsed.from ?? 'nl', to: parsed.to ?? 'en' };
    }
  } catch { /* ignore */ }
  return { from: 'nl', to: 'en' };
}

function saveLanguages(from: LanguageCode, to: LanguageCode) {
  localStorage.setItem('gespreksstarters-languages', JSON.stringify({ from, to }));
}

function App() {
  const { t, i18n } = useTranslation();
  const [activeThemeId, setActiveThemeId] = useState(themes[0].id);
  const [favorites, setFavorites] = useState<Set<string>>(loadFavorites);
  const [langModalOpen, setLangModalOpen] = useState(false);
  const [fromLang, setFromLang] = useState<LanguageCode>(() => loadLanguages().from);
  const [toLang, setToLang] = useState<LanguageCode>(() => loadLanguages().to);

  // Build favorites theme with cards from all themes
  const favoritesTheme = useMemo(() => {
    const allCards = themes.flatMap((t) => t.cards);
    const favCards = allCards.filter((c) => favorites.has(c.id));
    return { ...favoritesThemeBase, cards: favCards };
  }, [favorites]);

  const allThemes = useMemo(() => [...themes, favoritesTheme], [favoritesTheme]);
  const activeTheme = allThemes.find((t) => t.id === activeThemeId) ?? themes[0];

  const handleFromChange = useCallback((code: LanguageCode) => {
    setFromLang(code);
    saveLanguages(code, toLang);
    i18n.changeLanguage(code);
  }, [toLang, i18n]);

  const handleToChange = useCallback((code: LanguageCode) => {
    setToLang(code);
    saveLanguages(fromLang, code);
  }, [fromLang]);

  const handleSwapLangs = useCallback(() => {
    setFromLang(toLang);
    setToLang(fromLang);
    saveLanguages(toLang, fromLang);
    i18n.changeLanguage(toLang);
  }, [fromLang, toLang, i18n]);

  const handleToggleFavorite = useCallback((cardId: string) => {
    setFavorites((prev) => {
      const next = new Set(prev);
      if (next.has(cardId)) {
        next.delete(cardId);
      } else {
        next.add(cardId);
      }
      saveFavorites(next);
      return next;
    });
  }, []);

  return (
    <div className="app">
      <header className="app-header">
        <div className="app-header-row">
          <div className="app-header-spacer" />
          <motion.h1
            className="app-title"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 200, damping: 20 }}
          >
            {t('appTitle')}
          </motion.h1>
          <motion.button
            className="lang-button"
            onClick={() => setLangModalOpen(true)}
            whileTap={{ scale: 0.9 }}
            aria-label={t('changeLanguage')}
          >
            <Flag code={fromLang} size={22} />
          </motion.button>
        </div>
        <p className="app-subtitle">{t('appSubtitle')}</p>
      </header>

      <LanguageModal
        isOpen={langModalOpen}
        onClose={() => setLangModalOpen(false)}
        fromLang={fromLang}
        toLang={toLang}
        onFromChange={handleFromChange}
        onToChange={handleToChange}
        onSwap={handleSwapLangs}
      />

      <ThemeSelector
        themes={allThemes}
        activeTheme={activeTheme}
        onSelect={(t) => setActiveThemeId(t.id)}
      />

      <main className="app-main">
        <div className="app-card-area">
          <CardStack
            key={activeTheme.id}
            theme={activeTheme}
            favorites={favorites}
            onToggleFavorite={handleToggleFavorite}
            cardThemeMap={cardThemeMap}
            fromLang={fromLang}
            toLang={toLang}
          />
        </div>
      </main>
    </div>
  );
}

export default App;
