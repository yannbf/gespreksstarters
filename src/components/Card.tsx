import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import type { Card as CardType, Theme } from '../data/cards';
import FavoriteButton from './FavoriteButton';
import type { LanguageCode } from './languages';

const langToField: Record<LanguageCode, keyof CardType> = {
  nl: 'dutch',
  en: 'english',
  pt: 'portuguese',
  fr: 'french',
  es: 'spanish',
};

interface CardProps {
  card: CardType;
  theme: Theme;
  isFlipped: boolean;
  isFavorite?: boolean;
  onToggleFavorite?: (cardId: string) => void;
  fromLang?: LanguageCode;
  toLang?: LanguageCode;
}

export default function Card({ card, theme, isFlipped, isFavorite, onToggleFavorite, fromLang = 'nl', toLang = 'en' }: CardProps) {
  const { t } = useTranslation();
  const frontText = card[langToField[fromLang]] ?? card.dutch;
  const backText = card[langToField[toLang]] ?? card.english;
  const themeName = t(`themes.${theme.id}`, theme.name);

  return (
    <div className="card-container">
      <motion.div
        className="card-flipper"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.5, type: 'spring', stiffness: 300, damping: 30 }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Front */}
        <div
          className="card-face card-front"
          style={{ background: theme.gradient }}
        >
          <div className="card-decoration">
            <div className="card-circle card-circle-1" />
            <div className="card-circle card-circle-2" />
            <div className="card-circle card-circle-3" />
          </div>
          <div className="card-content">
            <div className="card-top-row">
              <span className="card-theme-badge">{theme.emoji} {themeName}</span>
              {onToggleFavorite && (
                <FavoriteButton
                  isFavorite={!!isFavorite}
                  onToggle={() => onToggleFavorite(card.id)}
                />
              )}
            </div>
            <p className="card-text">{frontText}</p>
            <span className="card-hint">{t('tapToTranslate')}</span>
          </div>
        </div>

        {/* Back */}
        <div
          className="card-face card-back"
          style={{
            background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
          }}
        >
          <div className="card-decoration">
            <div className="card-circle card-circle-1" style={{ opacity: 0.06 }} />
            <div className="card-circle card-circle-2" style={{ opacity: 0.04 }} />
          </div>
          <div className="card-content">
            <div className="card-top-row">
              <span className="card-theme-badge card-theme-badge-back">{themeName}</span>
              {onToggleFavorite && (
                <FavoriteButton
                  isFavorite={!!isFavorite}
                  onToggle={() => onToggleFavorite(card.id)}
                  variant="back"
                />
              )}
            </div>
            <p className="card-text">{backText}</p>
            <span className="card-hint card-hint-back">{t('tapToFlipBack')}</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
