import { motion } from 'framer-motion';
import type { Card as CardType, Theme } from '../data/cards';

interface CardProps {
  card: CardType;
  theme: Theme;
  isFlipped: boolean;
}

export default function Card({ card, theme, isFlipped }: CardProps) {
  return (
    <div className="card-container">
      <motion.div
        className="card-flipper"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.5, type: 'spring', stiffness: 300, damping: 30 }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Front - Dutch */}
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
            <span className="card-theme-badge">{theme.emoji} {theme.name}</span>
            <p className="card-text">{card.dutch}</p>
            <span className="card-hint">Tik om te vertalen</span>
          </div>
        </div>

        {/* Back - English */}
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
            <span className="card-theme-badge card-theme-badge-back">
              English
            </span>
            <p className="card-text">{card.english}</p>
            <span className="card-hint card-hint-back">Tap to flip back</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
