export type LanguageCode = 'nl' | 'en' | 'pt' | 'fr' | 'es';

export interface Language {
  code: LanguageCode;
  name: string;
}

export const languages: Language[] = [
  { code: 'nl', name: 'Nederlands' },
  { code: 'en', name: 'English' },
  { code: 'pt', name: 'Português' },
  { code: 'fr', name: 'Français' },
  { code: 'es', name: 'Español' },
];
