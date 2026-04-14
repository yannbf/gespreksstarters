import { motion } from 'framer-motion';
import type { Theme } from '../data/cards';

interface ThemeSelectorProps {
  themes: Theme[];
  activeTheme: Theme;
  onSelect: (theme: Theme) => void;
}

export default function ThemeSelector({ themes, activeTheme, onSelect }: ThemeSelectorProps) {
  return (
    <div className="theme-selector">
      <div className="theme-pills">
        {themes.map((theme) => {
          const isActive = theme.id === activeTheme.id;
          return (
            <motion.button
              key={theme.id}
              className={`theme-pill ${isActive ? 'theme-pill-active' : ''}`}
              onClick={() => onSelect(theme)}
              whileTap={{ scale: 0.93 }}
              style={
                isActive
                  ? { background: theme.gradient, color: '#fff', borderColor: 'transparent' }
                  : {}
              }
            >
              <span className="theme-pill-emoji">{theme.emoji}</span>
              <span className="theme-pill-name">{theme.name}</span>
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
    </div>
  );
}
