import React, { useState, useEffect } from 'react';
import './Home.css';
import Dev from './images/home_img.svg'; // Import the image
import Insta from './images/instagram.svg';
import Facebook from './images/facebook.svg';
import LinkedIn from './images/linkedin.svg';
import GitHub from './images/github.svg';
import ResumePopup from './ResumePopup'; // Import the ResumePopup component
import Resume from './images/Ansh_Sharma_Software_Engineer.pdf';
import Leetcode from './images/leetcode.svg';

const Home = ({ isDarkMode, id }) => {
  const [isWaving, setIsWaving] = useState(false);
  const [showResumePopup, setShowResumePopup] = useState(false);

  const handleWave = () => {
    setIsWaving(true);
  };

  const handleWaveEnd = () => {
    setIsWaving(false);
  };

  const handleResumePopup = () => {
    setShowResumePopup(!showResumePopup);
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
              Hello Hiring Team, I am Ansh Sharma
            </h1>
          </div>
          <p className="home-typing-effect">
            Software Engineer|Deep Learning Researcher|TA@ASU
          </p>
          <h2>
            I am a graduate student pursuing MS in Software Engineering at
            Arizona State University. I am currently working as a Teaching
            Assistant at Arizona State University for the courses, (SER315)
            Software Design and Processes, (SER321) Software Systems, and
            (SER450) Computer Architecture. I am also a Software Engineer Intern
            @
            <a
              href="https://roundtechsquare.com/"
              target="_blank"
              rel="noreferrer"
            >
              RoundTechSquare
            </a>
            , for the Spring semester 2025.
          </h2>
          <div className="social-buttons">
            <a
              href="https://www.linkedin.com/in/anshsharma120601/"
              target="_blank"
              rel="noopener noreferrer"
              title="Visit my LinkedIn Profile"
            >
              <img src={LinkedIn} alt="LinkedIn" />
            </a>
            <a
              href="https://github.com/ashar479"
              target="_blank"
              rel="noopener noreferrer"
              title="Visit my GitHub Profile"
            >
              <img src={GitHub} alt="GitHub" />
            </a>
            <a
              href="https://www.instagram.com/anshsharma1206/"
              target="_blank"
              rel="noopener noreferrer"
              title="Visit my Instagram Profile"
            >
              <img src={Insta} alt="Instagram" />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100001596154001"
              target="_blank"
              rel="noopener noreferrer"
              title="Visit my Facebook Profile"
            >
              <img src={Facebook} alt="Facebook" />
            </a>
            <a
              href="https://leetcode.com/anshsharma120601/"
              target="_blank"
              rel="noopener noreferrer"
              title="Visit my Leetcode Profile"
            >
              <img src={Leetcode} alt="Leetcode" />
            </a>
          </div>
          <div className="resume-button">
            <button title="Resume in PDF format" onClick={handleResumePopup}>
              Resume
            </button>
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
    </div>
  );
};

export default Home;
