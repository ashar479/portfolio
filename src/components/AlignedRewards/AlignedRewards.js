import React from 'react';
import './AlignedRewards.css';

import posterPdf from './capstone_project/Team6_Poster.pdf';
import presentationPdf from './capstone_project/Capstone_Project_Presentation.pdf';
import reportPdf from './capstone_project/Project_Report.pdf';

const projectLink = 'https://alignedrewards.com/';
const youtubeLink = 'https://youtu.be/7cDxSejkVSA';

const AlignedRewards = () => {
  return (
    <div className="aligned-rewards-container">
      {/* Project Heading */}
      <h1 className="ar-heading">Aligned Rewards – Capstone Project</h1>

      {/* Overview/Intro */}
      <section className="ar-overview">
        <p>
          <b>Aligned Rewards</b> is a unified employee engagement platform that
          brings peer-to-peer recognition, performance feedback, and goal
          management together in one intuitive dashboard. Our platform,
          developed in partnership with Round Tech Square, leverages AI and
          analytics to help organizations boost morale, accelerate development,
          and drive measurable business results.
        </p>
        <p>
          The project includes a secure Super Admin Module for robust user and
          report management, and an intelligent LLM Chatbot that assists users
          with Agile workflows like standups, sprint planning, and
          retrospectives—all seamlessly integrated into Aligned Rewards.
        </p>
      </section>

      {/* Feature Highlights */}
      <section className="ar-features">
        <div className="ar-feature-card ar-feature-blue">
          <h4>Super Admin Module</h4>
          <ul>
            <li>Centralized client management & role-based controls</li>
            <li>Secure password reset with audit logging</li>
            <li>
              Dynamic report & analytics suite (performance, rewards,
              engagement)
            </li>
            <li>Interactive dashboards with export features</li>
          </ul>
        </div>
        <div className="ar-feature-card ar-feature-pink">
          <h4>AI Chatbot Module</h4>
          <ul>
            <li>
              Guides users through Scrum, standups, sprints, and retrospectives
            </li>
            <li>Personalized, context-aware guidance</li>
            <li>Persistent chat history & smart session titling</li>
            <li>Integrates with user goals, tasks, and performance data</li>
          </ul>
        </div>
      </section>

      {/* Poster PDF Section */}
      <section className="ar-section">
        <h2>Project Poster</h2>
        <div className="ar-pdf-scale-wrapper">
          <object
            data={posterPdf}
            type="application/pdf"
            width="98%"
            height="420px"
            aria-label="Aligned Rewards Poster"
            className="ar-pdf"
          >
            <p>
              Poster PDF not displayed? <a href={posterPdf}>Download here</a>.
            </p>
          </object>
        </div>
      </section>

      {/* Document Sections */}
      <section className="ar-documents">
        {/* Presentation */}
        <div className="ar-doc-card ar-doc-blue">
          <h3>Capstone Project Presentation</h3>
          <object
            data={presentationPdf}
            type="application/pdf"
            width="100%"
            height="180px"
            aria-label="Presentation"
            className="ar-pdf"
          >
            <a href={presentationPdf} target="_blank" rel="noopener noreferrer">
              Download Presentation
            </a>
          </object>
          <div className="ar-download-link">
            <a href={presentationPdf} target="_blank" rel="noopener noreferrer">
              Download PDF
            </a>
          </div>
        </div>
        {/* Report */}
        <div className="ar-doc-card ar-doc-pink">
          <h3>Project Report</h3>
          <object
            data={reportPdf}
            type="application/pdf"
            width="100%"
            height="180px"
            aria-label="Report"
            className="ar-pdf"
          >
            <a href={reportPdf} target="_blank" rel="noopener noreferrer">
              Download Report
            </a>
          </object>
          <div className="ar-download-link">
            <a href={reportPdf} target="_blank" rel="noopener noreferrer">
              Download PDF
            </a>
          </div>
        </div>
      </section>

      {/* Action Buttons */}
      <div className="ar-buttons">
        <a
          href={projectLink}
          target="_blank"
          rel="noopener noreferrer"
          className="ar-btn ar-btn-blue"
        >
          Visit Project
        </a>
        <a
          href={youtubeLink}
          target="_blank"
          rel="noopener noreferrer"
          className="ar-btn ar-btn-pink"
        >
          Watch Demo
        </a>
      </div>
    </div>
  );
};

export default AlignedRewards;
