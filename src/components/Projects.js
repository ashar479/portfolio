import React from 'react';
import './Projects.css';
import SemanticCard from './projects_images/Semantic/Semantic_Card.webp';
import YOLOCard from './projects_images/Yolo/YOLO_Card.webp';
import GameCard from './projects_images/Game/Game_Card.webp';
import NSTCard from './projects_images/NST/NST_Card.webp';
import AndroidCard from './projects_images/Android/Android_Card.webp';
import ScrumCard from './projects_images/Scrum/Acrum_Card.webp';
import AlignedCard from './projects_images/Aligned/AlignedCard.webp';
import CalTrackCard from './projects_images/Caltrack.webp';
import CompilerCard from './projects_images/Compiler/CompilerCard.webp';

const Projects = ({ id, isDarkMode }) => {
  const projectData = [
    {
      title: 'CalTrack',
      imagePath: CalTrackCard,
      moreInfoLink: 'https://www.thecaltrackapp.com/',
    },
    {
      title: 'Aligned Rewards - AI + KANBAN',
      imagePath: AlignedCard,
      moreInfoLink: '/aligned_rewards',
    },
    {
      title: 'Game Development - Unity',
      imagePath: GameCard,
      moreInfoLink: '/game',
    },
    {
      title: 'Agile Realms - Scrum Simulator',
      imagePath: ScrumCard,
      moreInfoLink: '/scrum',
    },
    {
      title: 'CrimeWare - Semantic Web And Big Data',
      imagePath: SemanticCard,
      moreInfoLink: '/semantic',
    },
    {
      title: 'CryptoPulse - React Native',
      imagePath: AndroidCard,
      moreInfoLink: '/android',
    },
    {
      title: 'Compiler Design - Programming Paradigms',
      imagePath: CompilerCard,
      moreInfoLink: '/naav',
    },
    {
      title: 'Traffic Detection With Deep Learning and YOLO',
      imagePath: YOLOCard,
      moreInfoLink: '/yolo',
    },
    {
      title: 'Neural Style Transfer - Deep Learning',
      imagePath: NSTCard,
      moreInfoLink: '/nst',
    },
  ];

  return (
    <section id={id} className={`projects ${isDarkMode ? 'dark-mode' : ''}`}>
      <h2>Projects</h2>
      <p>What I Built.....</p>
      <div title="My Projects" className="projects-grid">
        {projectData.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-image">
              <img src={project.imagePath} alt={project.title} />
            </div>
            <div className="project-overlay">
              <h3>{project.title}</h3>
              <a
                title="Learn More"
                href={project.moreInfoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="details-button"
              >
                Learn More
              </a>
            </div>
          </div>
        ))}
        <div className="collaborate-section">
          <p>
            Explore more of my work and let's collaborate on exciting projects!
          </p>
          <a
            href="https://github.com/ashar479"
            target="_blank"
            rel="noopener noreferrer"
            className="collaborate-button"
          >
            Show More...
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
