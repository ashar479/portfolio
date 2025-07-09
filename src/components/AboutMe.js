import React from 'react';
import './AboutMe.css';
import { useState, useEffect } from 'react';
import Java from './images_tools/java.svg';
import ReactLogo from './images_tools/react.svg';
import TensorFlow from './images_tools/tensorflow.svg';
import Git from './images_tools/git.svg';
import Mysql from './images_tools/mysql.svg';
import Tdd from './images_tools/TDD.png';
import Chatgpt from './images_tools/chatgpt.svg';
import Jira from './images_tools/jira.svg';
import ReactNative from './images_tools/react_native.webp';
import Junit from './images_tools/junit5.svg';
import Scrum from './images_tools/scrum.svg';
import Docker from './images_tools/docker.svg';
import Huggingface from './images_tools/hugging_face.png';

import AWS from './images_tools/AWS.svg';
// import Maven from './images_tools/maven.png';
import Jenkins from './images_tools/Jenkins.svg';
// import Gradle from './images_tools/gradle.jpg';
import REST from './images_tools/REST.svg';
// import Wireshark from './images_tools/wireshark.png';
import Selenium from './images_tools/Selenium.svg';
// import Protege from './images_tools/protege.png';
import Grafana from './images_tools/Grafana.svg';
// import Sparql from './images_tools/sparql.webp';
import Python from './images_tools/Python.svg';
// import Graphdb from './images_tools/GraphDB.webp';
import Vercel from './images_tools/Vercel.svg';
// import Unity from './images_tools/Unity.jpg';
import Salesforce from './images_tools/Salesforce.svg';
// import Taiga from './images_tools/taiga.svg';
import Postman from './images_tools/Postman.svg';
// import Heroku from './images_tools/heroku.svg';
import Swagger from './images_tools/Swagger.svg';
// import Ant from './images_tools/ant.svg';
import Figma from './images_tools/Figma.svg';
// import Cucumber from './images_tools/cucumber.svg';

const AboutMe = ({ isDarkMode, id }) => {
  const [showButtons, setShowButtons] = useState([]);

  useEffect(() => {
    const handleScroll = () => {
      const buttonGroups = document.querySelectorAll('.button-group');
      const newStates = [];

      buttonGroups.forEach((group) => {
        const rect = group.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight - 150;
        newStates.push(isVisible);
      });

      setShowButtons((prevState) => {
        if (JSON.stringify(prevState) !== JSON.stringify(newStates)) {
          return newStates;
        }
        return prevState;
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      id={id}
      className={`about-me ${isDarkMode ? 'dark-mode' : 'light-mode'}`}
    >
      <h2>About Me</h2>
      <p>
        I'm a Software Engineer with experience across fast-paced startups and
        research-driven environments. At EyCrowd, I contributed to AI-powered
        mobile features using React Native, supported Salesforce-based CRM
        workflows, and helped optimize user engagement using analytics tools
        like Mixpanel. At RoundTechSquare, I worked on building scalable
        cloud-native platforms with React.js, Spring Boot, and AWS services,
        while streamlining deployments using Jenkins and GitHub Actions. These
        experiences taught me to balance speed with quality in high-impact,
        cross-functional teams.
      </p>
      <p>
        Beyond internships, I’ve led a Scrum-based software project in graduate
        school where we transitioned legacy systems to agile workflows and
        achieved high test coverage. I also authored a research paper on deep
        learning-based traffic detection, which was published at an IEEE
        conference. These opportunities have strengthened both my technical
        depth and my ability to communicate complex ideas clearly across teams.
      </p>
      <h2>Tools and Frameworks</h2>
      <p>
        My tech toolkit spans a wide range of modern web and software
        development technologies. On the front end, I have experience building
        responsive, component-driven interfaces using React, Next.js,
        TypeScript, and React Native, ensuring cross-platform performance and
        accessibility. On the backend, I’ve worked with Node.js, Java (Spring
        Boot), Python, and FastAPI, developing RESTful APIs, microservices, and
        scalable server-side logic.
      </p>
      <p>
        For databases, I’m proficient with both SQL and NoSQL systems, having
        worked with PostgreSQL, MongoDB, and Amazon DynamoDB. I use Git and
        GitHub for version control, and have implemented CI/CD pipelines using
        Jenkins and GitHub Actions to ensure smooth, automated deployments. I’ve
        also deployed and managed applications using Vercel, and documented APIs
        with Swagger and tested them with Postman.
      </p>
      <p>
        In QA and testing, I’ve used JUnit5, JaCoCo, Selenium, and Mocha to
        ensure code reliability and coverage. Additionally, I’ve integrated
        Mixpanel for user behavior analytics, n8n for workflow automation, and
        collaborated on product design using Figma and Monday.com. This broad
        experience allows me to work effectively across the full software
        development lifecycle—from prototyping and testing to deployment and
        optimization.
      </p>
      <div className={`button-group ${showButtons[0] ? 'show' : ''}`}>
        <button
          title="Java"
          onClick={() => window.open('https://www.java.com/', '_blank')}
        >
          <img src={Java} alt="" />
          Java
        </button>
        <button
          title="Jira"
          onClick={() =>
            window.open('https://www.atlassian.com/software/jira', '_blank')
          }
        >
          <img src={Jira} alt="" />
          Jira
        </button>
        <button
          title="Test Driven Development"
          onClick={() =>
            window.open(
              'https://testdriven.io/test-driven-development/',
              '_blank'
            )
          }
        >
          <img src={Tdd} alt="" />
          TDD
        </button>
        <button
          title="ChatGPT"
          onClick={() => window.open('https://openai.com/chatgpt', '_blank')}
        >
          <img src={Chatgpt} alt="" />
          ChatGPT
        </button>
      </div>
      <div className={`button-group ${showButtons[1] ? 'show' : ''}`}>
        <button
          title="AWS"
          onClick={() => window.open('https://aws.amazon.com/', '_blank')}
        >
          <img src={AWS} alt="" />
          Amazon Web Services
        </button>

        <button
          title="React.js Framework"
          onClick={() => window.open('https://reactjs.org/', '_blank')}
        >
          <img src={ReactLogo} alt="" />
          React.js
        </button>

        <button
          title="Jenkins"
          onClick={() => window.open('https://www.jenkins.io/', '_blank')}
        >
          <img src={Jenkins} alt="" />
          Jenkins
        </button>

        <button
          title="React Native for Mobile Development"
          onClick={() => window.open('https://reactnative.dev/', '_blank')}
        >
          <img src={ReactNative} alt="" />
          React Native
        </button>
      </div>
      <div className={`button-group ${showButtons[2] ? 'show' : ''}`}>
        <button
          title="Junit5 Test Framework"
          onClick={() => window.open('https://junit.org/junit5/', '_blank')}
        >
          <img src={Junit} alt="" />
          Junit 5
        </button>
        <button
          title="Tensorflow for ML"
          onClick={() => window.open('https://www.tensorflow.org/', '_blank')}
        >
          <img src={TensorFlow} alt="" />
          TensorFlow
        </button>
        <button
          title="Docker"
          onClick={() => window.open('https://www.docker.com/', '_blank')}
        >
          <img src={Docker} alt="" />
          Docker
        </button>

        <button
          title="REST"
          onClick={() => window.open('https://restfulapi.net/', '_blank')}
        >
          <img src={REST} alt="" />
          RESTful APIs
        </button>
      </div>
      <div className={`button-group ${showButtons[3] ? 'show' : ''}`}>
        <button
          title="Git Version Control"
          onClick={() => window.open('https://git-scm.com/', '_blank')}
        >
          <img src={Git} alt="" />
          Git
        </button>

        <button
          title="Selenium"
          onClick={() => window.open('https://www.selenium.dev/', '_blank')}
        >
          <img src={Selenium} alt="" />
          Selenium
        </button>

        <button
          title="Scrum Development"
          onClick={() =>
            window.open('https://www.atlassian.com/agile/scrum', '_blank')
          }
        >
          <img src={Scrum} alt="" />
          Scrum
        </button>
        <button
          title="MySql"
          onClick={() => window.open('https://www.mysql.com/', '_blank')}
        >
          <img src={Mysql} alt="" />
          MySql
        </button>
      </div>

      <div className={`button-group ${showButtons[4] ? 'show' : ''}`}>
        <button
          title="Grafana"
          onClick={() => window.open('https://grafana.com/', '_blank')}
        >
          <img src={Grafana} alt="" />
          Grafana
        </button>

        <button
          title="Python"
          onClick={() => window.open('https://www.python.org/', '_blank')}
        >
          <img src={Python} alt="" />
          Python
        </button>

        <button
          title="Vercel"
          onClick={() => window.open('https://www.vercel.com/', '_blank')}
        >
          <img src={Vercel} alt="" />
          Vercel
        </button>

        <button
          title="Salesforce"
          onClick={() => window.open('https://www.salesforce.com/', '_blank')}
        >
          <img src={Salesforce} alt="" />
          Salesforce
        </button>
      </div>

      <div className={`button-group ${showButtons[5] ? 'show' : ''}`}>
        <button
          title="Postman"
          onClick={() =>
            window.open('https://www.postman.com/legal/logo-usage/', '_blank')
          }
        >
          <img src={Postman} alt="" />
          Postman
        </button>

        <button
          title="HuggingFace for Ai/ML"
          onClick={() => window.open('https://huggingface.co/', '_blank')}
        >
          <img src={Huggingface} alt="" />
          HuggingFace
        </button>

        <button
          title="Figma"
          onClick={() => window.open('https://www.figma.com/', '_blank')}
        >
          <img src={Figma} alt="" />
          Figma
        </button>

        <button
          title="Swagger"
          onClick={() => window.open('https://swagger.io/docs/', '_blank')}
        >
          <img src={Swagger} alt="" />
          Swagger
        </button>
      </div>
    </section>
  );
};

export default AboutMe;
