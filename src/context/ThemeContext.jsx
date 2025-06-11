import React, { createContext, useState, useContext, useEffect } from 'react';

// Create the context
const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // Initialize theme from localStorage or system preference
  const [darkMode, setDarkMode] = useState(() => {
    // Check if theme exists in localStorage
    const savedTheme = localStorage.getItem('bhardwaj-theme');
    if (savedTheme) {
      return savedTheme === 'dark';
    }
    // Otherwise check for system preference
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  // Apply theme changes to the document and store in localStorage
  useEffect(() => {
    const root = window.document.documentElement;
    
    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('bhardwaj-theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('bhardwaj-theme', 'light');
    }
  }, [darkMode]);

  // Listen for system theme changes
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = () => {
      // Only apply system preference if user hasn't manually chosen a theme
      if (!localStorage.getItem('bhardwaj-theme')) {
        setDarkMode(mediaQuery.matches);
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Toggle theme function
  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook for using the theme context
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export default ThemeContext;