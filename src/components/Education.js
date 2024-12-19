// Education.js
import React, { useState } from 'react';
import './Education.css';
import Transcript from './images/Latest_Transcript_ASU.pdf';
import ResumePopup from './ResumePopup';

const Education = ({ id, isDarkMode }) => {
  const [showTranscriptPopup, setShowTranscriptPopup] = useState(false);

  const handleTranscriptPopup = () => {
    setShowTranscriptPopup(!showTranscriptPopup);
  };

  return (
    <section
      id={id}
      className={`education ${isDarkMode ? 'dark-mode' : 'light-mode'}`}
    >
      <div className="education-entry">
        <h2>Education</h2>
        <h3>Master of Science (Software Engineering)</h3>
        <p>Arizona State University, Tempe, Arizona - 85281</p>
        <p>August 2023 - May 2025</p>
        <p>Cumulative GPA: 3.8 / 4.0</p>
        <p>Relevant Coursework:</p>
        <ul>
          <li>
            <a
              title="ASU SER501"
              href="https://webapp4.asu.edu/bookstore/viewsyllabus/2207/75491"
              target="_blank"
              rel="noopener noreferrer"
            >
              Advanced Data Structures and Algorithms (SER501)
            </a>
          </li>
          <li>
            <a
              title="ASU SER502"
              href="https://webapp4.asu.edu/bookstore/viewsyllabus/2201/14866"
              target="_blank"
              rel="noopener noreferrer"
            >
              Emerging Languages and Programming Paradigms (SER502)
            </a>
          </li>
          <li>
            <a
              title="ASU SER515"
              href="https://www.coursicle.com/asu/courses/SER/515/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Foundations of Software Engineering (SER515)
            </a>
          </li>
          <li>
            <a
              title="ASU SER423"
              href="https://webapp4.asu.edu/bookstore/viewsyllabus/2171/17594"
              target="_blank"
              rel="noopener noreferrer"
            >
              Mobile Systems (SER423)
            </a>
          </li>
          <li>
            <a
              title="ASU CSE565"
              href="https://webapp4.asu.edu/bookstore/viewsyllabus/2227/75638"
              target="_blank"
              rel="noopener noreferrer"
            >
              Software Verification, Validation and Testing (CSE565)
            </a>
          </li>
          <li>
            <a
              title="ASU SER531"
              href="https://webapp4.asu.edu/bookstore/viewsyllabus/2237/80010/pdf;jsessionid=CE9E96B5C7E5CCB56A44AAB105502482"
              target="_blank"
              rel="noopener noreferrer"
            >
              Semantic Web Technology (SER531)
            </a>
          </li>
          <li>
            <a
              title="ASU CSE575"
              href="https://webapp4.asu.edu/bookstore/viewsyllabus/2201/32230/pdf;jsessionid=168F7333012A202A897151660BF50A4B"
              target="_blank"
              rel="noopener noreferrer"
            >
              Statistical Machine Learning (CSE575)
            </a>
          </li>
          <li>
            <a
              title="ASU SER594/494"
              href="https://webapp4.asu.edu/bookstore/viewsyllabus/2247/77774/pdf;jsessionid=57812C65EB3135713E57895C9F9A80F9"
              target="_blank"
              rel="noopener noreferrer"
            >
              Game Programming (SER594/494)
            </a>
          </li>
        </ul>
        <div className="resume-button">
          <button title="ASU Transcripts" onClick={handleTranscriptPopup}>
            Transcripts
          </button>
        </div>
        <h3>
          Bachelor of Technology (Electronics and Communication Engineering)
        </h3>
        <p>Netaji Subhas University of Technology, New Delhi, India</p>
        <p>August 2019 - July 2023</p>
        <p>Cumulative GPA: 8.3/10.0</p>
        <p>
          Relevant Coursework: Applied Mathematics, Applied Physics,
          Manufacturing Processes, Electrical Technology, Human Values and
          Professional Ethics, Fundamentals of Computing, Applied Chemistry,
          Electronic Devices, Introduction to Programming, Engineering
          Mechanics, Communication Skills, Environmental Studies, Analog
          Electronics, Switching Theory and Logic Design, Electronic Instruments
          and Measurements, Data Structures, Signals and Systems, Network
          Analysis and Synthesis, Communication Systems, Electromagnetic Field
          Theory, Computer Organization and Architecture, Digital Communication,
          Microprocessors and Microcontrollers, Control Systems, Digital System
          Design, Industrial Management, Microwave Engineering, Information
          Theory and Coding, Digital Signal Processing, VLSI Design, Data
          Communication and Networks, Antenna and Wave Propagation, Embedded
          Systems, Optoelectronics and Optical Communication, Wireless
          Communication, Satellite Communication, Ad Hoc and Sensor Networks
        </p>

        {showTranscriptPopup && (
          <ResumePopup resumeUrl={Transcript} onClose={handleTranscriptPopup} />
        )}
      </div>
    </section>
  );
};

export default Education;
