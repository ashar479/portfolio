import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Education from './components/Education';
import Projects from './components/Projects';
import ResearchPublications from './components/ResearchPublications';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sectionOffsets = {
        home: document.getElementById('home').offsetTop,
        about: document.getElementById('about').offsetTop,
        education: document.getElementById('education').offsetTop,
        publications: document.getElementById('publications').offsetTop,
        projects: document.getElementById('projects').offsetTop,
      };

      const scrollPosition = window.scrollY;

      for (const [section, offset] of Object.entries(sectionOffsets)) {
        if (
          scrollPosition >= offset &&
          scrollPosition < offset + window.innerHeight
        ) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`App ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <Header
        onToggleDarkMode={toggleDarkMode}
        isDarkMode={isDarkMode}
        activeSection={activeSection}
      />
      <div className="App-content">
        <Home isDarkMode={isDarkMode} id="home" />
        <AboutMe isDarkMode={isDarkMode} id="about" />
        <Education isDarkMode={isDarkMode} id="education" />
        <Projects isDarkMode={isDarkMode} id="projects" />
        <ResearchPublications isDarkMode={isDarkMode} id="publications" />
      </div>
      <Footer />
    </div>
  );
};

export default App;
