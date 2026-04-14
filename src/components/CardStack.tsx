import { useState, useCallback, useEffect, useRef, useMemo } from 'react';
import { motion, useMotionValue, useTransform, animate, type PanInfo } from 'framer-motion';
import type { Theme } from '../data/cards';
import Card from './Card';

interface CardStackProps {
  theme: Theme;
  favorites: Set<string>;
  onToggleFavorite: (cardId: string) => void;
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

export default function CardStack({ theme, favorites, onToggleFavorite }: CardStackProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [exitDirection, setExitDirection] = useState<'left' | 'right' | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);
  const dragOffset = useRef(0);

  const x = useMotionValue(0);
  const rotate = useTransform(x, [-200, 200], [-20, 20]);

  // Background card reacts to how far the top card has been dragged
  const absX = useTransform(x, (v) => Math.abs(v));
  const nextCardY = useTransform(absX, [0, 400], [8, 0]);
  const nextCardScale = useTransform(absX, [0, 400], [0.96, 1]);
  const nextCardOpacity = useTransform(absX, [0, 400], [0.85, 1]);

  // Shuffle cards when theme changes
  const cards = useMemo(() => shuffle(theme.cards), [theme.id]);

  // Reset when theme changes
  useEffect(() => {
    setCurrentIndex(0);
    setExitDirection(null);
    setIsAnimating(false);
    setIsFlipped(false);
    x.set(0);
  }, [theme.id, x]);

  // Reset flip when card changes
  useEffect(() => {
    setIsFlipped(false);
  }, [currentIndex]);

  const goToNext = useCallback(
    (direction: 'left' | 'right') => {
      if (isAnimating || currentIndex >= cards.length) return;
      setIsAnimating(true);
      setExitDirection(direction);

      const targetX = direction === 'left' ? -400 : 400;
      animate(x, targetX, {
        type: 'spring',
        stiffness: 300,
        damping: 30,
        onComplete: () => {
          setCurrentIndex((prev) => prev + 1);
          setExitDirection(null);
          setIsAnimating(false);
          x.set(0);
        },
      });
    },
    [isAnimating, currentIndex, cards.length, x]
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
    goToNext('left');
  }, [goToNext]);

  const handlePrevCard = useCallback(() => {
    if (currentIndex > 0 && !isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prev) => prev - 1);
      x.set(-400);
      animate(x, 0, {
        type: 'spring',
        stiffness: 300,
        damping: 30,
        onComplete: () => {
          setIsAnimating(false);
        },
      });
    }
  }, [currentIndex, isAnimating, x]);

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
          <h2>Nog geen favorieten</h2>
          <p>Tik op het hartje bij een kaart om hem hier te bewaren.</p>
        </motion.div>
      </div>
    );
  }

  if (currentIndex >= cards.length) {
    return (
      <div className="stack-empty">
        <motion.div
          className="stack-empty-content"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 200, damping: 20 }}
        >
          <span className="stack-empty-icon">🎉</span>
          <h2>Allemaal gehad!</h2>
          <p>Je hebt alle kaarten in dit thema gezien.</p>
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
            Opnieuw spelen
          </motion.button>
        </motion.div>
      </div>
    );
  }

  // Show up to 3 stacked cards
  const visibleCards = cards.slice(currentIndex, currentIndex + 3);

  return (
    <div className="stack-wrapper">
      <div className="stack-container">
        {visibleCards
          .map((card, i) => {
            const isTop = i === 0;
            const stackOffset = i * 8;
            const stackScale = 1 - i * 0.04;
            const isFavorite = favorites.has(card.id);

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
                    theme={theme}
                    isFlipped={isFlipped}
                    isFavorite={isFavorite}
                    onToggleFavorite={onToggleFavorite}
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
                  <Card card={card} theme={theme} isFlipped={false} isFavorite={isFavorite} onToggleFavorite={onToggleFavorite} />
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
                  opacity: 1 - i * 0.15,
                }}
                transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              >
                <Card card={card} theme={theme} isFlipped={false} isFavorite={isFavorite} onToggleFavorite={onToggleFavorite} />
              </motion.div>
            );
          })
          .reverse()}
      </div>

      <div className="stack-controls">
        <motion.button
          className="control-button"
          onClick={handlePrevCard}
          disabled={currentIndex === 0}
          whileTap={{ scale: 0.9 }}
          aria-label="Vorige kaart"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </motion.button>

        <span className="stack-counter">
          {Math.min(currentIndex + 1, cards.length)} / {cards.length}
        </span>

        <motion.button
          className="control-button"
          onClick={handleNextButton}
          disabled={currentIndex >= cards.length}
          whileTap={{ scale: 0.9 }}
          style={{ background: theme.gradient, color: '#fff', borderColor: 'transparent' }}
          aria-label="Volgende kaart"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </motion.button>
      </div>
    </div>
  );
}
