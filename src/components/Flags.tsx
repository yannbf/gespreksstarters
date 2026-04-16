import type { LanguageCode } from './languages';

interface FlagProps {
  code: LanguageCode;
  size?: number;
}

export default function Flag({ code, size = 24 }: FlagProps) {
  return (
    <svg
      width={size}
      height={Math.round(size * 0.75)}
      viewBox="0 0 48 36"
      style={{ borderRadius: size * 0.15, display: 'block', overflow: 'hidden' }}
    >
      {flagPaths[code]}
    </svg>
  );
}

const flagPaths: Record<LanguageCode, React.ReactNode> = {
  nl: (
    // Netherlands - red, white, blue horizontal stripes
    <g>
      <rect width="48" height="12" fill="#AE1C28" />
      <rect y="12" width="48" height="12" fill="#FFF" />
      <rect y="24" width="48" height="12" fill="#21468B" />
    </g>
  ),
  en: (
    // United Kingdom
    <g>
      <rect width="48" height="36" fill="#012169" />
      <path d="M0,0 L48,36 M48,0 L0,36" stroke="#FFF" strokeWidth="6" />
      <path d="M0,0 L24,18 M48,36 L24,18" stroke="#C8102E" strokeWidth="2" />
      <path d="M48,0 L24,18 M0,36 L24,18" stroke="#C8102E" strokeWidth="2" />
      <rect x="20" width="8" height="36" fill="#FFF" />
      <rect y="14" width="48" height="8" fill="#FFF" />
      <rect x="21" width="6" height="36" fill="#C8102E" />
      <rect y="15" width="48" height="6" fill="#C8102E" />
    </g>
  ),
  pt: (
    // Brazil - green background, yellow diamond, blue globe
    <g>
      <rect width="48" height="36" fill="#009739" />
      <polygon points="24,3 45,18 24,33 3,18" fill="#FEDD00" />
      <circle cx="24" cy="18" r="8" fill="#002776" />
      <path d="M16.5,18 Q24,13 31.5,18" stroke="#FFF" strokeWidth="1.2" fill="none" />
    </g>
  ),
  fr: (
    // France - blue, white, red vertical stripes
    <g>
      <rect width="16" height="36" fill="#002395" />
      <rect x="16" width="16" height="36" fill="#FFF" />
      <rect x="32" width="16" height="36" fill="#ED2939" />
    </g>
  ),
  es: (
    // Spain - red, yellow, red with simplified coat of arms
    <g>
      <rect width="48" height="36" fill="#AA151B" />
      <rect y="9" width="48" height="18" fill="#F1BF00" />
      <rect x="10" y="13" width="4" height="10" rx="1" fill="#AA151B" />
      <circle cx="12" cy="13" r="2" fill="#AA151B" />
    </g>
  ),
};
