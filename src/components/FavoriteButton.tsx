import { useCallback, useEffect, useRef } from 'react';
import { DotLottie } from '@lottiefiles/dotlottie-web';

interface FavoriteButtonProps {
  isFavorite: boolean;
  onToggle: () => void;
  variant?: 'front' | 'back';
}

export default function FavoriteButton({ isFavorite, onToggle, variant = 'front' }: FavoriteButtonProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const dotLottieRef = useRef<DotLottie | null>(null);
  const hasInitialized = useRef(false);
  const midFrame = useRef(0);
  const isAnimatingRef = useRef(false);
  const isLikingRef = useRef(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const dotLottie = new DotLottie({
      canvas,
      src: '/favorite.lottie',
      autoplay: false,
      loop: false,
      speed: 1.5,
    });

    dotLottie.addEventListener('load', () => {
      hasInitialized.current = true;
      midFrame.current = Math.floor(dotLottie.totalFrames / 2);

      // Jump to correct frame on load
      if (isFavorite) {
        dotLottie.setFrame(midFrame.current);
      } else {
        dotLottie.setFrame(0);
      }
    });

    // When animation completes naturally, mark as done
    dotLottie.addEventListener('complete', () => {
      isAnimatingRef.current = false;
      dotLottie.pause();
    });

    // Stop at midpoint when liking (playing first half forward)
    dotLottie.addEventListener('frame', ({ currentFrame }) => {
      if (isLikingRef.current && currentFrame >= midFrame.current) {
        isLikingRef.current = false;
        isAnimatingRef.current = false;
        dotLottie.pause();
        dotLottie.setFrame(midFrame.current);
      }
    });

    dotLottieRef.current = dotLottie;

    return () => {
      dotLottie.destroy();
      dotLottieRef.current = null;
      hasInitialized.current = false;
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Sync animation frame when isFavorite changes externally (e.g. card flip remount)
  // but NOT when we're actively animating from a click
  useEffect(() => {
    const dotLottie = dotLottieRef.current;
    if (!dotLottie || !hasInitialized.current || isAnimatingRef.current) return;
    if (isFavorite) {
      dotLottie.setFrame(midFrame.current);
    } else {
      dotLottie.setFrame(0);
    }
  }, [isFavorite]);

  const handleClick = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();

    const dotLottie = dotLottieRef.current;
    if (dotLottie && hasInitialized.current) {
      isAnimatingRef.current = true;

      if (!isFavorite) {
        // Like: play forward 0 → mid (frame listener pauses at mid)
        isLikingRef.current = true;
        dotLottie.setMode('forward');
        dotLottie.setFrame(0);
        dotLottie.play();
      } else {
        // Unlike: play forward from mid → end
        isLikingRef.current = false;
        dotLottie.setMode('forward');
        dotLottie.setFrame(midFrame.current);
        dotLottie.play();
      }
    }

    onToggle();
  }, [isFavorite, onToggle]);

  return (
    <button
      className={`card-favorite-btn ${variant === 'back' ? 'card-favorite-btn-back' : ''}`}
      onClick={handleClick}
      aria-label={isFavorite ? 'Verwijder uit favorieten' : 'Voeg toe aan favorieten'}
    >
      <canvas
        ref={canvasRef}
        width={128}
        height={128}
        style={{ width: 64, height: 64 }}
      />
    </button>
  );
}
