import React from 'react';
import './Scrum.css';
import ScrumBoard from './Scrum.png';
import CodeBase from './CodeBase.png';
import UI from './agile_realms_UI.jpeg';

const Scrum = () => {
  return (
    <div className="scrum-container">
      {/* Header Section */}
      <header className="scrum-header">
        <h1>Agile Realms - Scrum Simulator</h1>
        <p>
          A gamified platform to immerse yourself in the Agile process, taking
          on roles and managing sprints with real-world scenarios.
        </p>
      </header>

      {/* Introduction Section */}
      <section className="scrum-intro">
        <h2>What is Scrum Simulator?</h2>
        <p>
          Scrum Simulator is designed to provide an interactive experience of
          managing Agile projects. Step into roles like Scrum Master or Product
          Owner, and tackle challenges like sprint planning, backlog
          prioritization, and daily stand-ups.
        </p>
      </section>

      {/* Features Section */}
      <section className="scrum-features">
        <h2>Key Features</h2>
        <div className="features-grid">
          <div className="feature-item">
            <h3>Realistic Scenarios</h3>
            <p>Simulates real-world challenges faced in Agile workflows.</p>
          </div>
          <div className="feature-item">
            <h3>Role-Based Gameplay</h3>
            <p>
              Take on roles like Scrum Master or Developer with distinct
              responsibilities.
            </p>
          </div>
          <div className="feature-item">
            <h3>Interactive Sprint Board</h3>
            <p>
              Visualize and manage your sprints with an intuitive drag-and-drop
              interface.
            </p>
          </div>
          <div className="feature-item">
            <h3>Gamification</h3>
            <p>
              Earn points and achievements for successfully completing Agile
              tasks.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="scrum-gallery">
        <h2>Project Highlights</h2>
        <div className="gallery-item">
          <h3>Scrum Board</h3>
          <img src={ScrumBoard} alt="Scrum Board" />
          <p>Track tasks, user stories, and sprint progress in real-time.</p>
        </div>
        <div className="gallery-item">
          <h3>Code Architecture</h3>
          <img src={CodeBase} alt="Code Base" />
          <p>
            Explore the robust C# code powering the simulator’s backend and UI.
          </p>
        </div>
        <div className="gallery-item">
          <h3>Interactive UI</h3>
          <img src={UI} alt="Agile Realms UI" />
          <p>
            Enjoy a sleek, user-friendly interface designed for seamless
            gameplay.
          </p>
        </div>
      </section>

      {/* GitHub Section */}
      <section className="scrum-github">
        <h2>Explore the Code</h2>
        <p>
          Dive into the full source code on GitHub to learn how Agile Realms
          simulates Scrum processes with innovative gameplay and a scalable
          codebase.
        </p>
        <a
          title="Source Code"
          href="https://github.com/atharva-date/SER515_GroupSharma_AgileRealms"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-link"
        >
          View on GitHub
        </a>
      </section>

      {/* Footer Section */}
      <footer className="scrum-footer">
        <p>
          © 2024 Agile Realms | Scrum Simulator | Crafted by Team GroupSharma
        </p>
      </footer>
    </div>
  );
};

export default Scrum;
