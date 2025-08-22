// Type definitions for the application

export interface ResourceButton {
  label: string;
  icon: string;
  url: string;
  variant: 'text' | 'outlined' | 'filled';
}

export type ThemeMode = 'light' | 'dark' | 'system';