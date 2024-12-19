import React from 'react';
import './Game.css';
import MainMenu from './Main_Menu.png';
import UI from './UI.png';
import Kill from './Kill.png';
import Task1 from './Task1.png';
import Task2 from './Task2.png';
import Code from './Code.png';

const Game = () => {
  return (
    <div className="game-container">
      {/* Header Section */}
      <header className="game-header">
        <h1>Deception 3Dee - Killer in Disguise</h1>
        <p>
          A thrilling multiplayer game that combines teamwork and suspense as
          Campus Keepers face off against a covert killer disguised in their
          midst.
        </p>
      </header>

      {/* Project Overview */}
      <section className="game-overview">
        <h2>Project Overview</h2>
        <p>
          Deception 3Dee is a social deduction game set in a futuristic Poly
          campus. Players work together as Campus Keepers to complete tasks
          while a disguised killer, Dee, sabotages and eliminates them. The game
          leverages teamwork, strategic deception, and immersive gameplay for an
          engaging experience.
        </p>
      </section>

      {/* Images and Details */}
      <section className="game-gallery">
        <div className="gallery-item">
          <h3>Main Menu</h3>
          <img src={MainMenu} alt="Main Menu" />
          <p>
            The starting screen where players can choose game modes or set up
            matches.
          </p>
        </div>
        <div className="gallery-item">
          <h3>Gameplay User Interface</h3>
          <img src={UI} alt="Gameplay UI" />
          <p>
            The intuitive UI ensures players can navigate tasks and interactions
            smoothly.
          </p>
        </div>
        <div className="gallery-item">
          <h3>Kill Mechanics</h3>
          <img src={Kill} alt="Kill Animation" />
          <p>
            Dee strategically eliminates Campus Keepers without being caught.
          </p>
        </div>
        <div className="gallery-item">
          <h3>Task Management - Wiring</h3>
          <img src={Task1} alt="Wiring Task" />
          <p>
            Players work together to complete challenging tasks, such as wiring
            systems.
          </p>
        </div>
        <div className="gallery-item">
          <h3>Task Management - Control Panel</h3>
          <img src={Task2} alt="Control Panel Task" />
          <p>
            Interactive tasks like control panel management add to the game’s
            complexity.
          </p>
        </div>
      </section>

      {/* Code Section */}
      <section className="game-code">
        <h2>Code Preview</h2>
        <img src={Code} alt="Code Screenshot" />
        <p>
          The game leverages Unity and C# for physics-based interactions,
          character control, and game mechanics like sabotage, elimination, and
          task completion.
        </p>
        <a
          title="Source Code to run the game"
          href="https://drive.google.com/file/d/1ke0mbdRdWXq80nE_46xhMEWD0xo5Wn2n/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-link"
        >
          Download Game...
        </a>
      </section>

      {/* Footer Section */}
      <footer className="game-footer">
        <p>© 2024 Deception 3Dee | Created by [Your Team Name]</p>
      </footer>
    </div>
  );
};

export default Game;
