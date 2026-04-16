import { useState } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Flag from './Flags';
import { languages, type LanguageCode } from './languages';

interface LanguageModalProps {
  isOpen: boolean;
  onClose: () => void;
  fromLang: LanguageCode;
  toLang: LanguageCode;
  onFromChange: (code: LanguageCode) => void;
  onToChange: (code: LanguageCode) => void;
  onSwap: () => void;
}

export default function LanguageModal({
  isOpen,
  onClose,
  fromLang,
  toLang,
  onFromChange,
  onToChange,
  onSwap,
}: LanguageModalProps) {
  const { t } = useTranslation();
  const [swapRotation, setSwapRotation] = useState(0);

  const handleSwap = () => {
    setSwapRotation((prev) => prev + 180);
    onSwap();
  };

  const handleFromClick = (code: LanguageCode) => {
    if (code === toLang) {
      handleSwap();
    } else {
      onFromChange(code);
    }
  };

  const handleToClick = (code: LanguageCode) => {
    if (code === fromLang) {
      handleSwap();
    } else {
      onToChange(code);
    }
  };

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="lang-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
          />
          <motion.div
            className="lang-modal"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', stiffness: 400, damping: 30 }}
          >
            <div className="lang-modal-header">
              <h2 className="lang-modal-title">{t('languages')}</h2>
              <button className="lang-modal-close" onClick={onClose} aria-label="Close">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            <div className="lang-pickers">
              <div className="lang-picker">
                <label className="lang-picker-label">{t('from')}</label>
                <div className="lang-options">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      className={`lang-option ${fromLang === lang.code ? 'lang-option-active' : ''}`}
                      onClick={() => handleFromClick(lang.code)}
                    >
                      <Flag code={lang.code} size={28} />
                      <span className="lang-option-name">{lang.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="lang-swap-row">
                <motion.button
                  className="lang-swap-btn"
                  onClick={handleSwap}
                  animate={{ rotate: swapRotation }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  aria-label="Swap languages"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 4L7 20" />
                    <polyline points="3 8 7 4 11 8" />
                    <path d="M17 20L17 4" />
                    <polyline points="13 16 17 20 21 16" />
                  </svg>
                </motion.button>
              </div>

              <div className="lang-picker">
                <label className="lang-picker-label">{t('to')}</label>
                <div className="lang-options">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      className={`lang-option ${toLang === lang.code ? 'lang-option-active' : ''}`}
                      onClick={() => handleToClick(lang.code)}
                    >
                      <Flag code={lang.code} size={28} />
                      <span className="lang-option-name">{lang.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>,
    document.body
  );
}
