import React, { useContext } from 'react';
// import { ThemeContext } from '../../context/ThemeContext';
import ThemeContext from '../../context/ThemeContext';

import { FaSun, FaMoon } from 'react-icons/fa';
import { motion } from 'framer-motion';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      className="relative p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
      aria-label={theme === 'dark' ? 'Enable light mode' : 'Enable dark mode'}
    >
      <motion.div 
        initial={{ rotate: 0 }}
        animate={{ rotate: theme === 'light' ? 0 : 180 }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-center"
      >
        {theme === 'light' ? (
          <FaSun className="text-amber-500" />
        ) : (
          <FaMoon className="text-indigo-300" />
        )}
      </motion.div>
    </button>
  );
};

export default ThemeToggle;