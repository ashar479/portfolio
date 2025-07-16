import React from 'react';
import './Game.css';
// import MainMenu from './Main_Menu.png';
// import UI from './UI.png';
// import Movement from './Kill.png';
// import Task1 from './Task1.png';
// import Task2 from './Task2.png';
// import Code from './Code.png';

const Game = () => {
  return (
    <div className="game-container">
      {/* Header Section */}
      <header className="game-header">
        <h1>Ansh's 3D Simulator</h1>
        <p>
          Immerse yourself as a third-person player in a vibrant 3D environment.
          Explore, interact, and complete challenges in this Unity-powered
          simulation game.
        </p>
      </header>

      {/* Project Overview */}
      <section className="game-overview">
        <h2>Project Overview</h2>
        <p>
          Ansh's 3D Simulator puts you in control of a third-person character,
          encouraging exploration and interaction within a dynamic virtual
          world. Navigate diverse landscapes, complete various interactive
          tasks, and experience smooth controls and camera systems designed for
          intuitive gameplay.
        </p>
      </section>

      {/* Images and Details
      <section className="game-gallery">
        <div className="gallery-item">
          <h3>Main Menu</h3>
          <img src={MainMenu} alt="Main Menu" />
          <p>
            The entry point for players to start a new simulation or load
            existing scenarios.
          </p>
        </div>
        <div className="gallery-item">
          <h3>User Interface</h3>
          <img src={UI} alt="Gameplay UI" />
          <p>
            A clean and intuitive UI makes navigation and interaction simple and
            enjoyable.
          </p>
        </div>
        <div className="gallery-item">
          <h3>Character Movement</h3>
          <img src={Movement} alt="Character Movement" />
          <p>
            Control your third-person character with responsive movement, camera
            angles, and physics-based interactions.
          </p>
        </div>
        <div className="gallery-item">
          <h3>Interactive Task: Wiring</h3>
          <img src={Task1} alt="Wiring Task" />
          <p>
            Engage with interactive elements such as wiring systems to complete
            objectives.
          </p>
        </div>
        <div className="gallery-item">
          <h3>Interactive Task: Control Panel</h3>
          <img src={Task2} alt="Control Panel Task" />
          <p>
            Tackle tasks like control panel operations, adding variety and depth
            to the simulation.
          </p>
        </div>
      </section> */}

      {/* Code Section */}
      <section className="game-code">
        <h2>Code Preview</h2>
        {/* <img src={Code} alt="Code Screenshot" /> */}
        <p>
          The simulator is built using Unity and C#, featuring advanced
          mechanics for character control, camera movement, and interactive
          systems.
        </p>
        <a
          title="Play Game"
          href="https://anshsharma120601.itch.io/3d-simulator-ansh"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-link"
        >
          Play Game...
        </a>
        <a
          title="Source Code to run the game"
          href="https://github.com/ashar479/game_development"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-link"
        >
          Codebase
        </a>
      </section>

      {/* Footer Section */}
      <footer className="game-footer">
        <p>© 2024 Ansh's 3D Simulator | Created by Ansh Sharma</p>
      </footer>
    </div>
  );
};

export default Game;
