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
    <div>
      <header
        className={`header-container ${
          isDarkMode ? 'dark-mode' : 'light-mode'
        }`}
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
            className={`section-button ${
              activeSection === 'about' && 'active'
            }`}
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
      {/* Chatbot here
      <div className="animated-border-link">
        Try my new chatbot, KnowBee 🐝, on the rightmost bottom of the Page!
      </div> */}
      <div
        style={{
          backgroundColor: '#ffbf00cc',
          padding: '8px 16px',
          textAlign: 'start',
          fontWeight: '500',
          cursor: 'pointer',
          position: 'relative',
          zIndex: 0,
          color: 'rgba(113, 10, 10, 1)',
          textDecoration: 'underline',
          marginTop: '49pt',
        }}
        onClick={() =>
          window.open(
            'https://www.linkedin.com/company/eklavya-trust/posts/?feedView=all',
            '_blank'
          )
        }
      >
        Wanna help @Eklavya NGO? Click here to learn more →
      </div>
    </div>
  );
};

export default Header;
