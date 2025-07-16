import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Education from './components/Education';
import Work from './components/Work';
import Projects from './components/Projects';
import ResearchPublications from './components/ResearchPublications';
import { Analytics } from '@vercel/analytics/react';
import Semantic from './components/Semantic/Semantic';
import Nst from './components/Nst/Nst';
import Yolo from './components/YOLO/Yolo';
import Game from './components/Game/Game';
import Android from './components/Android/Android';
import Scrum from './components/Scrum/Scrum';
import ChatbotWidget from './components/ChatbotWidget';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AlignedRewards from './components/AlignedRewards/AlignedRewards';
import Naav from './components/Naav/Naav';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sectionOffsets = {
        home: document.getElementById('home')?.offsetTop,
        about: document.getElementById('about')?.offsetTop,
        education: document.getElementById('education')?.offsetTop,
        work: document.getElementById('work')?.offsetTop,
        publications: document.getElementById('publications')?.offsetTop,
        projects: document.getElementById('projects')?.offsetTop,
      };

      const scrollPosition = window.scrollY;

      for (const [section, offset] of Object.entries(sectionOffsets)) {
        if (
          offset !== undefined &&
          scrollPosition >= offset &&
          scrollPosition < offset + window.innerHeight
        ) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const MainLayout = ({ children }) => (
    <div className={`App ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <Analytics />
      <Header
        onToggleDarkMode={toggleDarkMode}
        isDarkMode={isDarkMode}
        activeSection={activeSection}
      />
      {children}
      <Footer />
    </div>
  );

  return (
    <Router>
      <Routes>
        {/* Main Layout for home, about, projects, etc. */}
        <Route
          path="/"
          element={
            <MainLayout>
              <div className="App-content">
                <Home isDarkMode={isDarkMode} id="home" />
                <AboutMe isDarkMode={isDarkMode} id="about" />
                <Education isDarkMode={isDarkMode} id="education" />
                <Work isDarkMode={isDarkMode} id="work" />
                <Projects isDarkMode={isDarkMode} id="projects" />
                <ResearchPublications
                  isDarkMode={isDarkMode}
                  id="publications"
                />
                <ChatbotWidget />
              </div>
            </MainLayout>
          }
        />

        {/* Separate Routes Without Layout */}
        <Route path="/semantic" element={<Semantic />} />
        <Route path="/game" element={<Game />} />
        <Route path="/scrum" element={<Scrum />} />
        <Route path="/yolo" element={<Yolo />} />
        <Route path="/nst" element={<Nst />} />
        <Route path="/android" element={<Android />} />
        <Route path="/aligned_rewards" element={<AlignedRewards />} />
        <Route path="/naav" element={<Naav />} />
      </Routes>
    </Router>
  );
};

export default App;
