import { useRef, useState, useCallback, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import type { Theme } from '../data/cards';

interface ThemeSelectorProps {
  themes: Theme[];
  activeTheme: Theme;
  onSelect: (theme: Theme) => void;
}

export default function ThemeSelector({ themes, activeTheme, onSelect }: ThemeSelectorProps) {
  const { t } = useTranslation();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const updateOverflow = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const paddingLeft = parseInt(getComputedStyle(el).paddingLeft) || 0;
    setCanScrollLeft(el.scrollLeft > paddingLeft + 2);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 2);
  }, []);

  useEffect(() => {
    updateOverflow();
    const el = scrollRef.current;
    if (!el) return;
    const ro = new ResizeObserver(updateOverflow);
    ro.observe(el);
    return () => ro.disconnect();
  }, [updateOverflow]);

  const scrollLeft = useCallback(() => {
    scrollRef.current?.scrollBy({ left: -200, behavior: 'smooth' });
  }, []);

  const scrollRight = useCallback(() => {
    scrollRef.current?.scrollBy({ left: 200, behavior: 'smooth' });
  }, []);

  return (
    <div className="theme-selector">
      {canScrollLeft && (
        <button className="theme-pill-arrow theme-pill-arrow-left" onClick={scrollLeft} aria-label="Previous themes">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>
      )}
      <div className="theme-pills" ref={scrollRef} onScroll={updateOverflow}>
        {themes.map((theme) => {
          const isActive = theme.id === activeTheme.id;
          const displayName = theme.id === 'favorites'
            ? t('favorites')
            : t(`themes.${theme.id}`, theme.name);
          return (
            <motion.button
              key={theme.id}
              className={`theme-pill ${isActive ? 'theme-pill-active' : ''}`}
              onClick={() => onSelect(theme)}
              whileTap={{ scale: 0.93 }}
              style={
                isActive
                  ? { background: theme.gradient, color: '#fff', border: 'none' }
                  : {}
              }
            >
              <span className="theme-pill-emoji">{theme.emoji}</span>
              <span className="theme-pill-name">{displayName}</span>
              {isActive && (
                <motion.div
                  className="theme-pill-indicator"
                  layoutId="activeTheme"
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
            </motion.button>
          );
        })}
      </div>
      {canScrollRight && (
        <button className="theme-pill-arrow theme-pill-arrow-right" onClick={scrollRight} aria-label="More themes">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      )}
    </div>
  );
}
