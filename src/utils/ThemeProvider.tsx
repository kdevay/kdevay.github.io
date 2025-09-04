import React, {
  createContext,
  useContext,
  ReactNode,
  useEffect,
  useState,
} from 'react';

const findInitialPreference = () => {
  const storedTheme = localStorage.getItem('storedTheme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  return storedTheme || prefersDark ? 'dark' : 'light';
};

interface ThemeProviderContextType {
  mode: string;
  toggleMode: () => void;
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

interface ThemeProviderProviderProps {
  children: ReactNode;
}

export const ThemeProviderProvider: React.FC<ThemeProviderProviderProps> = ({
  children,
}) => {
  const [mode, setMode] = useState(findInitialPreference());

  const toggleMode = () => {
    const newMode = mode === 'light' ? 'dark' : 'light';
    setMode(newMode);
    // Save to localStorage
    localStorage.setItem('storedTheme', mode);
    // Set the data-theme attribute
    document.documentElement.setAttribute('data-theme', mode);
  };

  return (
    <ThemeProviderContext.Provider
      value={{
        mode,
        toggleMode,
      }}
    >
      {children}
    </ThemeProviderContext.Provider>
  );
};
