import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesomeIcon component
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons'; // Import sun and moon icons
import './ToggleButton.css';

const ToggleButton = ({ onToggleDarkMode, isDarkMode }) => {
  return (
    <button
      className={`toggle-button ${isDarkMode ? 'dark-mode' : 'light-mode'}`}
      onClick={onToggleDarkMode}
    >
      <FontAwesomeIcon
        icon={isDarkMode ? faSun : faMoon} // Use faSun for light mode and faMoon for dark mode
        className="toggle-icon"
      />
    </button>
  );
};

export default ToggleButton;
