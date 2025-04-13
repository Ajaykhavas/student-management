export interface Theme {
  name: string;
  background: string;
  header: string;
  sidebar: string;
  text: string;
}

export const themes: Record<string, Theme> = {
  light: {
    name: 'light',
    background: '#ffffff',
    header: '#1976d2',
    sidebar: '#eeeeee',
    text: '#000000',
  },
  dark: {
    name: 'dark',
    background: '#121212',
    header: '#1f1f1f',
    sidebar: '#333333',
    text: '#ffffff',
  },
  purple: {
    name: 'purple',
    background: '#f3e5f5',
    header: '#7b1fa2',
    sidebar: '#ce93d8',
    text: '#000000',
  },
};
