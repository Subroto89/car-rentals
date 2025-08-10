import React, { useContext } from 'react';

import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";
import { ThemeContext } from '../contexts/ThemeContext';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme} 
      className="p-2 rounded-full text-gray-800 dark:text-white bg-gray-200 dark:bg-gray-700 transition-colors duration-300"
      aria-label="Toggle dark mode"
    >
      {/* Toggle Button of Theme */}
      {theme === 'dark' ? (
        <MdOutlineLightMode size={24} />
      ) : (
        <MdOutlineDarkMode size={24} />
      )}
    </button>
  );
};

export default ThemeToggle;