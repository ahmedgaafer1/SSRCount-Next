"use client";


import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useEventBus } from './event-bus.provider';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used within ThemeProvider');
  return context;
};

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>('light');
  const eventBus = useEventBus();

  useEffect(() => {
    const handler = (newTheme: Theme) => setTheme(newTheme);
    eventBus.on('theme-change', handler);
    return () => {
      eventBus.off('theme-change', handler);
    };
  }, [eventBus]);

  // Apply theme class to body
  useEffect(() => {
    if (typeof window !== 'undefined') {
      document.body.classList.remove('light', 'dark');
      document.body.classList.add(theme);
    }
  }, [theme]);

  const handleSetTheme = (newTheme: Theme) => {
    setTheme(newTheme);
    eventBus.emit('theme-change', newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme: handleSetTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
