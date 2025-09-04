import React, {
  createContext,
  useContext,
  ReactNode,
  useState,
  useCallback,
  useEffect,
} from 'react';

// Helpers
const findInitialPreference = () => {
  const storedTheme = localStorage.getItem('storedTheme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  return storedTheme || prefersDark ? 'dark' : 'light';
};

const storeThemeInBrowser = (theme: string) => {
  // Save to localStorage
  localStorage.setItem('storedTheme', theme);
  // Set the data-theme attribute
  document.documentElement.setAttribute('data-theme', theme);
};

interface ThemeProviderContextType {
  theme: string;
  toggleTheme: () => void;
}

const ThemeProviderContext = createContext<
  ThemeProviderContextType | undefined
>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
};

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState(findInitialPreference());

  // Set the theme in the browser on mount
  useEffect(() => {
    storeThemeInBrowser(theme);
  }, []);

  const toggleTheme = useCallback(() => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    storeThemeInBrowser(newTheme);
  }, [theme]);

  return (
    <ThemeProviderContext.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >
      {children}
    </ThemeProviderContext.Provider>
  );
};
