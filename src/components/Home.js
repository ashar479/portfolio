import React, { useState } from 'react';
import './Home.css';
// import Dev from './images/home_img.svg'; // Import the image
import Insta from './images/instagram.svg';
import Facebook from './images/facebook.svg';
import LinkedIn from './images/linkedin.svg';
import GitHub from './images/github.svg';
import ResumePopup from './ResumePopup'; // Import the ResumePopup component
import Leetcode from './images/leetcode.svg';
import Headshot from './images/Headshot.svg';

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
          {/* ---------- Avatar Added Here ---------- */}
          <div className="avatar-wrapper">
            <img src={Headshot} alt="Ansh Sharma" className="avatar" />
          </div>
          {/* ---------------------------------------- */}

          <div className="hello-text">
            <h1>
              <span
                onMouseEnter={handleWave}
                onMouseLeave={handleWaveEnd}
                className={isWaving ? 'wave-hand' : ''}
              >
                👋
              </span>{' '}
              Hello, I am Ansh Sharma
            </h1>
          </div>

          <p className="home-typing-effect">
            Software Engineer | Full-stack | Devops | Published Author
          </p>

          <h2>
            I’m a Software Engineer specializing in full-stack and cloud-native
            development, with experience delivering production systems across
            React, Node.js, Spring Boot, AWS, and Kubernetes. At EyCrowd, I
            built and tested React Native apps, containerized microservices, and
            developed LLM-driven automation that improved performance,
            reliability, and deployment speed. Before that, I engineered
            scalable distributed systems at RoundTechSquare, integrating CI/CD
            pipelines, event-driven workflows with Kafka and Redis, and
            monitoring dashboards that increased system uptime by 25%. I’ve also
            built AI-powered applications, including an engagement chatbot
            deployed on alignedrewards.com and a QA dashboard processing 10K+
            sessions in real time. My work spans frontend architecture,
            microservices, DevOps automation, testing, and applied AI. I enjoy
            building reliable, user-focused products and thrive in
            collaborative, fast-paced engineering environments.
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
