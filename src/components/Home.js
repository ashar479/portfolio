import React, { useState, useEffect } from 'react';
import './Home.css';
import Dev from './images/home_img.svg'; // Import the image
import Insta from './images/instagram.svg';
import Facebook from './images/facebook.svg';
import LinkedIn from './images/linkedin.svg';
import GitHub from './images/github.svg';
import ResumePopup from './ResumePopup'; // Import the ResumePopup component
import Resume from './images/Resume_Ansh_Sharma_Software_Engineer.pdf';
import CoverLetter from './images/Ansh_Sharma_Cover_Letter.pdf';
import Leetcode from './images/leetcode.svg';

const Home = ({ isDarkMode, id }) => {
  const [isWaving, setIsWaving] = useState(false);
  const [showResumePopup, setShowResumePopup] = useState(false);
  const [showCoverLetterPopup, setShowCoverLetterPopup] = useState(false);

  const handleWave = () => {
    setIsWaving(true);
  };

  const handleWaveEnd = () => {
    setIsWaving(false);
  };

  const handleResumePopup = () => {
    setShowResumePopup(!showResumePopup);
  };

  const handleCoverLetterPopup = () => {
    setShowCoverLetterPopup(!showCoverLetterPopup);
  };

  const [isShaking, setIsShaking] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      // Adjust this threshold as needed
      const shakeThreshold = 100;

      // Check if scroll position exceeds the threshold
      if (scrollPosition > shakeThreshold) {
        setIsShaking(true);
      } else {
        setIsShaking(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`home ${isDarkMode ? 'dark-mode' : 'light-mode'}`} id={id}>
      <div className="home-container">
        <div className="home-info">
          <div className="hello-text">
            <h1>
              <span
                onMouseEnter={handleWave}
                onMouseLeave={handleWaveEnd}
                className={isWaving ? 'wave-hand' : ''}
              >
                👋
              </span>{' '}
              Dear Hiring Manager, I am Ansh Sharma
            </h1>
          </div>
          <p className="home-typing-effect">
            Software Engineer | Deep Learning Researcher | React Developer
          </p>
          <h2>
            I am currently a student pursuing MS in Software Engineering at
            Arizona State University. I am looking for jobs starting from Summer and Fall
            2024.
          </h2>
          <div className="social-buttons">
            <a
              href="https://www.linkedin.com/in/anshsharma120601/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={LinkedIn} alt="LinkedIn" />
            </a>
            <a
              href="https://github.com/anshsharma120601"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={GitHub} alt="GitHub" />
            </a>
            <a
              href="https://www.instagram.com/anshsharma1206/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Insta} alt="Instagram" />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100001596154001"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Facebook} alt="Facebook" />
            </a>
            <a
              href="https://leetcode.com/anshsharma120601/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Leetcode} alt="Leetcode" />
            </a>
          </div>
          <div className="resume-button">
            <button onClick={handleResumePopup}>Resume</button>
            <button onClick={handleCoverLetterPopup}>Cover_Letter</button>
          </div>
        </div>
        <div
          className={`image-container ${isShaking ? 'shake-animation' : ''}`}
        >
          <img src={Dev} alt="Developer" className="developer-image" />
        </div>
      </div>
      {showResumePopup && (
        <ResumePopup resumeUrl={Resume} onClose={handleResumePopup} />
      )}
      {showCoverLetterPopup && (
        <ResumePopup resumeUrl={CoverLetter} onClose={handleCoverLetterPopup} />
      )}
    </div>
  );
};

export default Home;
