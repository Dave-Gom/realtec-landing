export { en } from './en';
export { es } from './es';
export type { Translations } from './types';

import { en } from './en';
import { es } from './es';

export const translations = {
  es,
  en
};

export type Language = keyof typeof translations;