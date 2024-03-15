// Education.js
import React from 'react';
import './Education.css';

const Education = ({ id, isDarkMode }) => {
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
        <p>Cumulative GPA: 3.7</p>
        <p>Relevant Coursework:</p>
        <ul>
          <li>
            <a
              href="https://webapp4.asu.edu/bookstore/viewsyllabus/2207/75491"
              target="_blank"
              rel="noopener noreferrer"
            >
              Advanced Data Structures and Algorithms (SER501)
            </a>
          </li>
          <li>
            <a
              href="https://webapp4.asu.edu/bookstore/viewsyllabus/2201/14866"
              target="_blank"
              rel="noopener noreferrer"
            >
              Emerging Languages and Programming Paradigms (SER502)
            </a>
          </li>
          <li>
            <a
              href="https://www.coursicle.com/asu/courses/SER/515/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Foundations of Software Engineering (SER515)
            </a>
          </li>
          <li>
            <a
              href="https://webapp4.asu.edu/bookstore/viewsyllabus/2171/17594"
              target="_blank"
              rel="noopener noreferrer"
            >
              Mobile Systems (SER423)
            </a>
          </li>
          <li>
            <a
              href="https://webapp4.asu.edu/bookstore/viewsyllabus/2227/75638"
              target="_blank"
              rel="noopener noreferrer"
            >
              Software Verification, Validation and Testing (CSE565)
            </a>
          </li>
        </ul>
        <h3>
          Bachelor of Technology (Electronics and Communication Engineering)
        </h3>
        <p>Netaji Subhas University of Technology, New Delhi, India</p>
        <p>August 2019 - July 2023</p>
        <p>Cumulative GPA: 8.3</p>
      </div>
    </section>
  );
};

export default Education;
