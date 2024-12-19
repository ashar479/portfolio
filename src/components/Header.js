import React from 'react';
import './Header.css';
import ToggleButton from './ToggleButton';

const Header = ({ onToggleDarkMode, isDarkMode, activeSection }) => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest',
      });
    }
  };
  return (
    <header
      className={`header-container ${isDarkMode ? 'dark-mode' : 'light-mode'}`}
    >
      <ToggleButton
        title="Dark_Mode/Light_Mode"
        isDarkMode={isDarkMode}
        onToggleDarkMode={onToggleDarkMode}
      />
      <div className="section-buttons">
        <button
          title="Home Page"
          className={`section-button ${activeSection === 'home' && 'active'}`}
          onClick={() => scrollToSection('home')}
        >
          Home
        </button>
        <button
          title="About Section"
          className={`section-button ${activeSection === 'about' && 'active'}`}
          onClick={() => scrollToSection('about')}
        >
          About Me
        </button>
        <button
          title="Education Section"
          className={`section-button ${
            activeSection === 'education' && 'active'
          }`}
          onClick={() => scrollToSection('education')}
        >
          Education
        </button>
        <button
          title="Work Experience"
          className={`section-button ${activeSection === 'work' && 'active'}`}
          onClick={() => scrollToSection('work')}
        >
          WorkEx
        </button>
        <button
          title="Projects"
          className={`section-button ${
            activeSection === 'projects' && 'active'
          }`}
          onClick={() => scrollToSection('projects')}
        >
          Projects
        </button>
        <button
          title="Research Papers"
          className={`section-button ${
            activeSection === 'publications' && 'active'
          }`}
          onClick={() => scrollToSection('publications')}
        >
          Research Publications
        </button>
      </div>
    </header>
  );
};

export default Header;
