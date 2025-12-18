import React, { useState, useEffect, Suspense } from 'react';
import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';

import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from 'react-router-dom';

/**
 * Below-the-fold sections: lazy-load
 * (They don’t need to block first paint.)
 */
const AboutMe = React.lazy(() => import('./components/AboutMe'));
const Education = React.lazy(() => import('./components/Education'));
const Work = React.lazy(() => import('./components/Work'));
const Projects = React.lazy(() => import('./components/Projects'));
const ResearchPublications = React.lazy(() =>
  import('./components/ResearchPublications')
);

/**
 * Routes (separate pages): lazy-load
 */
const Semantic = React.lazy(() => import('./components/Semantic/Semantic'));
const Nst = React.lazy(() => import('./components/Nst/Nst'));
const Yolo = React.lazy(() => import('./components/YOLO/Yolo'));
const Game = React.lazy(() => import('./components/Game/Game'));
const Android = React.lazy(() => import('./components/Android/Android'));
const Scrum = React.lazy(() => import('./components/Scrum/Scrum'));
const AlignedRewards = React.lazy(() =>
  import('./components/AlignedRewards/AlignedRewards')
);
const Naav = React.lazy(() => import('./components/Naav/Naav'));

/**
 * Chatbot: load *after idle* (best for INP/LCP)
 * We mount a tiny component that imports ChatbotWidget only when the main thread is free.
 */
function LazyChatbotWidget() {
  const [Comp, setComp] = React.useState(null);

  useEffect(() => {
    const load = () => {
      import('./components/ChatbotWidget').then((m) =>
        setComp(() => m.default)
      );
    };
    if ('requestIdleCallback' in window) {
      // Prefer idle time
      // @ts-ignore
      requestIdleCallback(load, { timeout: 3000 });
    } else {
      // Conservative fallback
      setTimeout(load, 2000);
    }
  }, []);

  return Comp ? <Comp /> : null;
}

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const toggleDarkMode = () => setIsDarkMode((prev) => !prev);

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

      const y = window.scrollY;
      for (const [section, offset] of Object.entries(sectionOffsets)) {
        if (
          offset !== undefined &&
          y >= offset &&
          y < offset + window.innerHeight
        ) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const MainLayout = () => (
    <div className={`App ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <div
        className={`pointer-events-none fixed inset-0 -z-10
    ${
      isDarkMode
        ? 'bg-black bg-[radial-gradient(ellipse_800px_350px_at_50%_1%,#707070,transparent)]'
        : 'bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]'
    }`}
      >
        {!isDarkMode && (
          <div
            className="
    absolute inset-0
    bg-[radial-gradient(circle_400px_at_100%_200px,#C9EBFF,transparent)]
    md:bg-[radial-gradient(circle_800px_at_100%_200px,#C9EBFF,transparent)]
  "
          />
        )}
      </div>

      <Analytics />
      <Header
        onToggleDarkMode={toggleDarkMode}
        isDarkMode={isDarkMode}
        activeSection={activeSection}
      />
      <Outlet />
      <Footer />
    </div>
  );

  return (
    <Router>
      <SpeedInsights />
      <Routes>
        <Route element={<MainLayout />}>
          <Route
            path="/"
            element={
              <div className="App-content">
                <Home isDarkMode={isDarkMode} id="home" />

                <Suspense fallback={null}>
                  <AboutMe isDarkMode={isDarkMode} id="about" />
                  <Education isDarkMode={isDarkMode} id="education" />
                  <Work isDarkMode={isDarkMode} id="work" />
                  <Projects isDarkMode={isDarkMode} id="projects" />
                  <ResearchPublications
                    isDarkMode={isDarkMode}
                    id="publications"
                  />
                </Suspense>

                <LazyChatbotWidget />
              </div>
            }
          />

          <Route
            path="/semantic"
            element={
              <Suspense fallback={null}>
                <Semantic />
              </Suspense>
            }
          />
          <Route
            path="/game"
            element={
              <Suspense fallback={null}>
                <Game />
              </Suspense>
            }
          />
          <Route
            path="/scrum"
            element={
              <Suspense fallback={null}>
                <Scrum />
              </Suspense>
            }
          />
          <Route
            path="/yolo"
            element={
              <Suspense fallback={null}>
                <Yolo />
              </Suspense>
            }
          />
          <Route
            path="/nst"
            element={
              <Suspense fallback={null}>
                <Nst />
              </Suspense>
            }
          />
          <Route
            path="/android"
            element={
              <Suspense fallback={null}>
                <Android />
              </Suspense>
            }
          />
          <Route
            path="/aligned_rewards"
            element={
              <Suspense fallback={null}>
                <AlignedRewards />
              </Suspense>
            }
          />
          <Route
            path="/naav"
            element={
              <Suspense fallback={null}>
                <Naav />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
