import { createContext, ReactNode, useContext, useState } from 'react';
import { Theme, themes } from '../styles/theme';

interface ThemeContextType {
  theme: Theme;
  setThemeByName: (name: string) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>(themes.light);

  const setThemeByName = (name: string) => {
    setTheme(themes[name]);
  };

  return (
    <ThemeContext.Provider value={{ theme, setThemeByName }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used within ThemeProvider');
  return context;
};
