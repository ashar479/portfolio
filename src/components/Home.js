import React, { useState } from 'react';
import './Home.css';
// import Dev from './images/home_img.svg'; // Import the image
import Insta from './images/instagram.svg';
import Facebook from './images/facebook.svg';
import LinkedIn from './images/linkedin.svg';
import GitHub from './images/github.svg';
import ResumePopup from './ResumePopup'; // Import the ResumePopup component
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

  return (
    <div
      className={`home ${isDarkMode ? 'dark-mode' : 'light-mode'}`}
      id={id}
      style={{
        backgroundImage: `url(${
          isDarkMode ? '/cloud_dark.webp' : '/cloud.webp'
        })`,
      }}
    >
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
              Dear Hiring Managers, I am Ansh Sharma
            </h1>
          </div>

          <p className="home-typing-effect">
            Software Engineer | Intern @EyCrowd | MS Software Engineering @ASU
          </p>

          <h2>
            I’m a Software Engineer with experience building full-stack
            applications using React, Node.js, PostgreSQL, and AWS. Currently
            interning at{' '}
            <a href="https://eycrowd.com/" target="_blank" rel="noreferrer">
              EyCrowd
            </a>
            , I’m contributing to AI-driven platform development and user
            engagement features while working with tools like Mixpanel,
            Salesforce, and CI/CD pipelines. Previously, I worked on scalable
            cloud-native systems at{' '}
            <a
              href="https://roundtechsquare.com/"
              target="_blank"
              rel="noreferrer"
            >
              RoundTechSquare
            </a>{' '}
            and developed NLP-based UI components at{' '}
            <a
              href="https://www.hiration.com/"
              target="_blank"
              rel="noreferrer"
            >
              Hiration
            </a>
            . My work spans CRM integrations, test automation, workflow
            optimization, and frontend architecture. I’m passionate about AI,
            developer tools, and creating meaningful user experiences—and I’m
            always excited to learn, build, and contribute in fast-paced,
            product-driven teams. Let's Connect!
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
      </div>

      {showResumePopup && (
        <ResumePopup
          resumeUrl="/docs/Ansh_Sharma_Software_Engineer.pdf"
          onClose={handleResumePopup}
        />
      )}
    </div>
  );
};

export default Home;
