import { useState, useCallback, useEffect, useRef } from 'react';
import { motion, useMotionValue, useTransform, animate, type PanInfo } from 'framer-motion';
import type { Theme } from '../data/cards';
import Card from './Card';

interface CardStackProps {
  theme: Theme;
}

const SWIPE_THRESHOLD = 80;

export default function CardStack({ theme }: CardStackProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [exitDirection, setExitDirection] = useState<'left' | 'right' | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);
  const dragOffset = useRef(0);

  const x = useMotionValue(0);
  const rotate = useTransform(x, [-200, 200], [-20, 20]);
  const opacity = useTransform(x, [-200, -100, 0, 100, 200], [0.5, 1, 1, 1, 0.5]);

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

  const cards = theme.cards;

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

  const handleTap = useCallback(() => {
    // Only flip if it wasn't a drag
    if (Math.abs(dragOffset.current) < 5) {
      setIsFlipped((prev) => !prev);
    }
    dragOffset.current = 0;
  }, []);

  const handleNextButton = useCallback(() => {
    goToNext('left');
  }, [goToNext]);

  const handlePrevCard = useCallback(() => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  }, [currentIndex]);

  const handleShuffle = useCallback(() => {
    setCurrentIndex(0);
    x.set(0);
  }, [x]);

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

            if (isTop) {
              return (
                <motion.div
                  key={card.id}
                  className="stack-card"
                  style={{
                    x,
                    rotate,
                    opacity: exitDirection ? opacity : 1,
                    zIndex: 10 - i,
                    cursor: 'grab',
                  }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.8}
                  onDragEnd={handleDragEnd}
                  onTap={handleTap}
                  whileTap={{ cursor: 'grabbing' }}
                >
                  <Card card={card} theme={theme} isFlipped={isFlipped} />
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
                <Card card={card} theme={theme} isFlipped={false} />
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
          {currentIndex + 1} / {cards.length}
        </span>

        <motion.button
          className="control-button"
          onClick={handleNextButton}
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
