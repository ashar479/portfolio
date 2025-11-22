// ResearchPublications.js
import React from 'react';
import './ResearchPublications.css';

const ResearchPublications = ({ id, isDarkMode }) => {
  return (
    <section
      id={id}
      className={`research-publications ${isDarkMode ? 'dark-mode' : ''}`}
    >
      <h2>Social Volunteer Work</h2>
      <div className="publication-entry">
        <h3>Special Education Teacher @EklavyaNGO</h3>

        <p>
          <a
            title="Eklavya NGO"
            href="https://www.linkedin.com/company/eklavya-trust/posts/?feedView=all"
            target="_blank"
            rel="noopener noreferrer"
          >
            Eklavya NGO
          </a>
        </p>
        <p>
          <ul>
            <li>Nov2021 to Feb2022</li>
            <li>
              At Eklavya NGO in Delhi, I taught underprivileged students core
              Computer Science concepts, basic programming, and API development.
              I designed a structured curriculum focused on practical skills and
              real-world applications to empower long-term learning. Through
              mentorship and hands-on training, I helped students build a strong
              foundation for future opportunities in technology.
            </li>
          </ul>
        </p>
      </div>

      <div style={{ padding: '16px' }} />

      <h2>Research Publication</h2>
      <div className="publication-entry">
        <h3>
          Efficient Detection of Small and Complex Objects for Autonomous
          Driving Using Deep Learning
        </h3>
        <p>
          Published in International Conference on Communication Systems,
          Computing and IT Applications (CSCITA), IEEE 2023.
        </p>
        <p>doi: 10.1109/CSCITA55725.2023.10104969</p>
        <p>
          <a
            title="My research paper on Deep Learning"
            href="https://ieeexplore.ieee.org/abstract/document/10104969"
            target="_blank"
            rel="noopener noreferrer"
          >
            IEEE Paper Link
          </a>
        </p>
        <p>
          <ul>
            <li>
              Worked as a Co-Author with Dr. Rashmi Gupta of Netaji Subhas
              University of Technology Electronics and Communication department
              with research interest in Deep Learning. Presented the paper in
              CSCITA conference in Bombay, India
            </li>
            <li>
              Experimented on projects in computer vision to understand deep
              learning and model training. Conducted a detailed literature
              review for several months and completed courses on platforms lie
              Coursera and Udemy
            </li>
          </ul>
        </p>
      </div>
    </section>
  );
};

export default ResearchPublications;
