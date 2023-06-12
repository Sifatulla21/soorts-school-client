import React, { useState, useEffect } from 'react';
import './ThemeToggle.css';

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const currentTheme = localStorage.getItem('theme');
    setIsDarkMode(currentTheme === 'dark');
  }, []);

  const toggleTheme = () => {
    const newTheme = isDarkMode ? 'light' : 'dark';
    setIsDarkMode(!isDarkMode);
    localStorage.setItem('theme', newTheme);

    // Toggle dark mode on the HTML root element
    document.documentElement.classList.toggle('dark');
  };

  return (
      <div>
          {/* <input type="checkbox"  checked /> */}
    <button
    className=""
      className="rounded-full w-10 h-6 focus:outline-none"
      onClick={toggleTheme}
    >
      <div

        className={`bg-red-600 dark:bg-gray-800 rounded-full shadow-md w-4 h-4 transform ${
          isDarkMode ? 'translate-x-4' : ''
        } transition-transform duration-300`}
      ></div>
    </button>
      </div>
  );
};

export default ThemeToggle;
