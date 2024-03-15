import React, { useRef } from 'react';
import './Projects.css';
import Card from './Card';
import portfolioImage from './projects_images/portfolio.jpeg';
import yolo from './projects_images/yolo.jpeg';
import agileRealms from './projects_images/agile_realms.jpeg';
import nst from './projects_images/nst.jpeg';
import android from './projects_images/android.jpg';

const Projects = ({ id, isDarkMode }) => {
  const projectsContainerRef = useRef(null);

  const scrollLeft = () => {
    if (projectsContainerRef.current) {
      projectsContainerRef.current.scrollBy({
        left: -projectsContainerRef.current.offsetWidth, // Scroll one container width to the left
        behavior: 'smooth',
      });
    }
  };

  const scrollRight = () => {
    if (projectsContainerRef.current) {
      projectsContainerRef.current.scrollBy({
        left: projectsContainerRef.current.offsetWidth, // Scroll one container width to the right
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id={id} className={`projects ${isDarkMode ? 'dark-mode' : ''}`}>
      <h2>Projects</h2>
      <div className="projects-container" ref={projectsContainerRef}>
        {/* Repeat the Card component for each project */}
        <Card
          title="React Portfolio"
          description={
            <ul>
              <li>
                Crafted a personal portfolio with React.js, leveraging JSX for
                component development and CSS for styling, augmented by UI
                frameworks like ChakraUI. Utilized Figma for prototyping prior
                to project commencement
              </li>
              <li>
                Deployed the application on Vercel and opted for GoDaddy for
                online hosting. Ensured version control via Git and GitHub.
                Achieved 100% code coverage for almost all components according
                to Junit Surefire and JACOCO reports
              </li>
              <li>
                Employed Design of Experiments for testing, complemented by
                Regression Testing and ongoing exploratory tests for
                maintenance. Also, incorporated AI tools such as ChatGPT to
                optimize website components and automate test case generation
              </li>
            </ul>
          }
          duration="Summer 2021 - Present Maintenance"
          associatedWith="Arizona State University"
          skills="JavaScript, React.js, Git, Scrum, Jira, Github, DOE, White Box, Black Box, Backlog, HTML, CSS, JSX, Optimization"
          imagePath={portfolioImage} // Adjust the path accordingly
          moreInfoLink="https://www.anshsharma.us/"
        />
        <Card
          title="Agile Realms - a Simulation for Scrum Projects"
          description={
            <ul>
              <li>
                Collaborated in a 5-member team, utilizing Java Swing and Gradle
                frameworks to develop UI. Initially managed legacy systems and
                SRS, transitioning to Scrum methodology later
              </li>
              <li>
                Assumed the role of Scrum Master, overseeing project management
                duties utilizing TAIGA and JIRA, and meticulously maintaining
                the Sprint Backlog
              </li>
              <li>
                Implemented Git for efficient version control and facilitated
                regular Daily Scrum meetings and Sprint Retrospectives to
                optimize team performance
              </li>
              <li>
                Utilized frameworks like MySQL and SQL for backend operations.
                Applied TDD and various testing methodologies for comprehensive
                application testing. Achieved 100% code coverage reports for the
                crucial components and above 90% for the rest
              </li>
            </ul>
          }
          duration="Fall 2023"
          associatedWith="Arizona State University"
          skills="Java, Swing, Taiga, Scrum, Agile, Sprint Retrospective, Sprint Planning, Backlog, Scrum Master, Git, SRS, Legacy Systems, Junit, Cucumber, Maven, Gradle, Ant, Testing, TDD, JaCoCo Code Coverage"
          imagePath={agileRealms} // Adjust the path accordingly
          moreInfoLink="https://github.com/atharva-date/SER515_GroupSharma_AgileRealms"
        />
        <Card
          title="YOLO Car Detection"
          description={
            <ul>
              <li>
                Developed an enhanced detection model utilizing YOLO and Sliding
                Windows Algorithm, achieving a 9.5% increase in efficiency in
                floating-point operations. Trained the model using the PASCAL
                VOC12 dataset
              </li>
              <li>
                Authored 'Efficient Detection of Small and Complex Objects for
                Autonomous Driving Using Deep Learning', published in the IEEE's
                'CSCITA' conference, with DOI: 10.1109/CSCITA55725.2023.10104969
              </li>
            </ul>
          }
          duration="Fall 2022"
          associatedWith="Netaji Subhas University of Technology"
          skills="Deep Learning, Neural Networks, Convolutional Neural Networks (CNN), Image Processing, Machine Learning, YOLO, PASCAL VOC, Sliding Windows, Python, TensorFlow, Git, IEEE"
          imagePath={yolo} // Adjust the path accordingly
          moreInfoLink="https://github.com/anshsharma120601/yolo_project"
        />
        <Card
          title="Neural Style Transfer"
          description="Modified a Visual Geometry Group (VGG-16) model to design an application for applying a desired style to any image using computer vision techniques. Worked on COCOMO 2017 dataset for training the model and Gradient Descent for optimization"
          duration="Spring 2023"
          associatedWith="Netaji Subhas University of Technology"
          skills="Deep Learning, Neural Networks, Convolutional Neural Networks (CNN), Image Processing, Machine Learning, COCOMO, VGG, Python, TensorFlow"
          imagePath={nst} // Adjust the path accordingly
          moreInfoLink="https://github.com/anshsharma120601/NST"
        />
        <Card
          title="Android Application for Exam Marks"
          description={
            <ul>
              <li>
                Built an application for mobile systems where the grades for the
                students are retrieved from a remote server and displayed on
                Android or IOS using React Native. Designed the application
                using Style Sheets and the logic implemented using react hooks
              </li>
              <li>
                Deployed the app using Expo server. Additionally, connected the
                application to a remote dataset. Implemented the Model View
                Controller (MVC) schema throughout the project build and its
                design
              </li>
            </ul>
          }
          duration="Spring 2024"
          associatedWith="Arizona State University"
          skills="React Native, Expo, JavaScript, React Hooks, Remote Server, Exploratory Testing"
          imagePath={android} // Adjust the path accordingly
          moreInfoLink=""
        />
      </div>
      <button className="scroll-button left" onClick={scrollLeft}>
        &#8249;
      </button>
      <button className="scroll-button right" onClick={scrollRight}>
        &#8250;
      </button>
    </section>
  );
};

export default Projects;
