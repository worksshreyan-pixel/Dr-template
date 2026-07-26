export interface ThemeConfig {
  primary: string;
  primaryDark: string;
  primaryLight: string;
  accent: string;
  accentLight: string;
  background: string;
  surface: string;
  text: string;
  textMuted: string;
  border: string;
  radius: string;
  fontFamily: string;
  fontDisplay: string;
}

export const theme: ThemeConfig = {
  primary: '#2563eb',
  primaryDark: '#1d4ed8',
  primaryLight: '#eff6ff',
  accent: '#f97316',
  accentLight: '#fff7ed',
  background: '#ffffff',
  surface: '#f8fafc',
  text: '#0f172a',
  textMuted: '#64748b',
  border: '#e2e8f0',
  radius: '0.75rem',
  fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif',
  fontDisplay: '"Plus Jakarta Sans", Inter, ui-sans-serif, sans-serif',
};

export type { ThemeConfig as Theme };
