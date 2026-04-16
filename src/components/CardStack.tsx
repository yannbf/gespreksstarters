import { useState, useCallback, useLayoutEffect, useMemo, useRef } from 'react';
import { motion, useMotionValue, useTransform, animate, type PanInfo } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import type { Theme } from '../data/cards';
import type { LanguageCode } from './languages';
import Card from './Card';

interface CardStackProps {
  theme: Theme;
  favorites: Set<string>;
  onToggleFavorite: (cardId: string) => void;
  cardThemeMap?: Map<string, Theme>;
  fromLang?: LanguageCode;
  toLang?: LanguageCode;
}

const SWIPE_THRESHOLD = 80;

function shuffle<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export default function CardStack({ theme, favorites, onToggleFavorite, cardThemeMap, fromLang, toLang }: CardStackProps) {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);
  const dragOffset = useRef(0);

  const x = useMotionValue(0);
  const rotate = useTransform(x, [-200, 200], [-20, 20]);

  // Background card reacts to how far the top card has been dragged
  const absX = useTransform(x, (v) => Math.abs(v));
  const nextCardY = useTransform(absX, [0, 400], [8, 0]);
  const nextCardScale = useTransform(absX, [0, 400], [0.96, 1]);
  const nextCardOpacity = useTransform(absX, [0, 400], [1, 1]);

  // Shuffle cards; component remounts on theme change via key={theme.id} in parent
  const cards = useMemo(() => shuffle(theme.cards), [theme.cards]);

  // Clamp index when cards shrink (e.g. unfavoriting in favorites view)
  const effectiveIndex = Math.min(currentIndex, Math.max(cards.length - 1, 0));

  // Track last rendered index to reset x via useLayoutEffect
  const lastRenderedIndex = useRef(0);

  // useLayoutEffect ensures x resets before the browser paints,
  // preventing the background card from briefly jumping back to its resting position
  useLayoutEffect(() => {
    if (lastRenderedIndex.current !== effectiveIndex) {
      lastRenderedIndex.current = effectiveIndex;
      x.set(0);
    }
  }, [effectiveIndex, x]);

  const goToNext = useCallback(
    (direction: 'left' | 'right') => {
      if (isAnimating || effectiveIndex >= cards.length) return;
      setIsAnimating(true);
      setIsFlipped(false);

      const targetX = direction === 'left' ? -400 : 400;
      animate(x, targetX, {
        type: 'tween',
        duration: 0.25,
        ease: 'easeIn',
        onComplete: () => {
          setCurrentIndex((prev) => prev + 1);
          setIsAnimating(false);
        },
      });
    },
    [isAnimating, effectiveIndex, cards.length, x]
  );

  const handleDragEnd = useCallback(
    (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
      const offset = info.offset.x;
      dragOffset.current = offset;
      if (Math.abs(offset) > SWIPE_THRESHOLD) {
        goToNext(offset > 0 ? 'right' : 'left');
      } else {
        animate(x, 0, { type: 'spring', stiffness: 500, damping: 30 });
      }
    },
    [goToNext, x]
  );

  const handleClick = useCallback((event: { target: EventTarget | null }) => {
    const target = event.target as HTMLElement;
    // Only flip if it wasn't a drag and not a favorite click
    if (Math.abs(dragOffset.current) < 5 && !target.closest('.card-favorite-btn')) {
      setIsFlipped((prev) => !prev);
    }
    dragOffset.current = 0;
  }, []);

  const handleNextButton = useCallback(() => {
    goToNext('right');
  }, [goToNext]);

  const handlePrevCard = useCallback(() => {
    if (effectiveIndex > 0 && !isAnimating) {
      setIsAnimating(true);
      setIsFlipped(false);
      setCurrentIndex((prev) => prev - 1);
      x.set(400);
      animate(x, 0, {
        type: 'spring',
        stiffness: 300,
        damping: 30,
        onComplete: () => {
          setIsAnimating(false);
        },
      });
    }
  }, [effectiveIndex, isAnimating, x]);

  const handleShuffle = useCallback(() => {
    setCurrentIndex(0);
    x.set(0);
  }, [x]);

  // Empty favorites state
  if (cards.length === 0) {
    return (
      <div className="stack-empty">
        <motion.div
          className="stack-empty-content"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 200, damping: 20 }}
        >
          <span className="stack-empty-icon">❤️</span>
          <h2>{t('noFavorites')}</h2>
          <p>{t('noFavoritesHint')}</p>
        </motion.div>
      </div>
    );
  }

  if (effectiveIndex >= cards.length) {
    return (
      <div className="stack-empty">
        <motion.div
          className="stack-empty-content"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 200, damping: 20 }}
        >
          <span className="stack-empty-icon">🎉</span>
          <h2>{t('allDone')}</h2>
          <p>{t('allDoneHint')}</p>
          <motion.button
            className="shuffle-button"
            onClick={handleShuffle}
            whileTap={{ scale: 0.95 }}
            style={{ background: theme.gradient }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="1 4 1 10 7 10" />
              <polyline points="23 20 23 14 17 14" />
              <path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15" />
            </svg>
            {t('playAgain')}
          </motion.button>
        </motion.div>
      </div>
    );
  }

  // Show up to 3 stacked cards
  const visibleCards = cards.slice(effectiveIndex, effectiveIndex + 3);

  return (
    <div className="stack-wrapper">
      <div className="stack-container">
        {visibleCards
          .map((card, i) => {
            const isTop = i === 0;
            const stackOffset = i * 8;
            const stackScale = 1 - i * 0.04;
            const isFavorite = favorites.has(card.id);
            const cardTheme = cardThemeMap?.get(card.id) ?? theme;

            if (isTop) {
              return (
                <motion.div
                  key={card.id}
                  className="stack-card"
                  style={{
                    x,
                    rotate,
                    zIndex: 10 - i,
                    cursor: 'grab',
                  }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.8}
                  onDragEnd={handleDragEnd}
                  onClick={handleClick}
                  whileTap={{ cursor: 'grabbing' }}
                >
                  <Card
                    card={card}
                    theme={cardTheme}
                    isFlipped={isFlipped}
                    isFavorite={isFavorite}
                    onToggleFavorite={onToggleFavorite}
                    fromLang={fromLang}
                    toLang={toLang}
                  />
                </motion.div>
              );
            }

            // First card behind the top card: driven by drag progress
            if (i === 1) {
              return (
                <motion.div
                  key={card.id}
                  className="stack-card"
                  style={{
                    zIndex: 10 - i,
                    y: nextCardY,
                    scale: nextCardScale,
                    opacity: nextCardOpacity,
                  }}
                >
                  <Card card={card} theme={cardTheme} isFlipped={false} isFavorite={isFavorite} onToggleFavorite={onToggleFavorite} fromLang={fromLang} toLang={toLang} />
                </motion.div>
              );
            }

            return (
              <motion.div
                key={card.id}
                className="stack-card"
                style={{
                  zIndex: 10 - i,
                }}
                animate={{
                  y: stackOffset,
                  scale: stackScale,
                  opacity: 1,
                }}
                transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              >
                <Card card={card} theme={cardTheme} isFlipped={false} isFavorite={isFavorite} onToggleFavorite={onToggleFavorite} />
              </motion.div>
            );
          })
          .reverse()}
      </div>

      <div className="stack-controls">
        <motion.button
          className="control-button"
          onClick={handlePrevCard}
          disabled={effectiveIndex === 0}
          whileTap={{ scale: 0.9 }}
          aria-label={t('prevCard')}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </motion.button>

        <span className="stack-counter">
          {Math.min(effectiveIndex + 1, cards.length)} / {cards.length}
        </span>

        <motion.button
          className="control-button"
          onClick={handleNextButton}
          disabled={effectiveIndex >= cards.length}
          whileTap={{ scale: 0.9 }}
          style={{ background: theme.gradient, color: '#fff', border: 'none' }}
          aria-label={t('nextCard')}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </motion.button>
      </div>
    </div>
  );
}
