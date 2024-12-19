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
import Ant from './images_tools/ant.svg';
import Taiga from './images_tools/taiga.svg';
import Scrum from './images_tools/scrum.svg';
import Heroku from './images_tools/heroku.svg';
import Docker from './images_tools/docker.svg';
import Cucumber from './images_tools/cucumber.svg';
import Unity from './images_tools/Unity.jpg';
import Protege from './images_tools/protege.png';
import Sparql from './images_tools/sparql.webp';
import Graphdb from './images_tools/GraphDB.webp';
import Maven from './images_tools/maven.png';
import Gradle from './images_tools/gradle.jpg';
import Wireshark from './images_tools/wireshark.png';
import Huggingface from './images_tools/hugging_face.png';

const AboutMe = ({ isDarkMode, id }) => {
  const [showButtons, setShowButtons] = useState([]);

  useEffect(() => {
    const handleScroll = () => {
      const buttonGroups = document.querySelectorAll('.button-group');
      if (buttonGroups.length > 0) {
        buttonGroups.forEach((group, index) => {
          const { scrollTop, clientHeight } =
            document.documentElement || document.body;

          // Only proceed if the group element exists
          if (group) {
            const triggerPosition =
              group.offsetTop + group.clientHeight / 1 + 350;

            setShowButtons((prevState) => {
              const updatedState = [...prevState];
              updatedState[index] = scrollTop + clientHeight > triggerPosition;
              return updatedState;
            });
          }
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      id={id}
      className={`about-me ${isDarkMode ? 'dark-mode' : 'light-mode'}`}
    >
      <h2>About Me</h2>
      <p>
        I am a passionate software engineer with a keen interest in machine
        learning and full-stack development. Currently pursuing Master's degree
        in Software Engineering at Arizona State University, I have hands-on
        experience with various technologies and frameworks such as React.js,
        and TensorFlow.
      </p>
      <p>
        Outside of coding, I enjoy reading about new technologies, exploring
        nature, and playing guitar. I am enthusiastic about learning and always
        eager to take on new challenges in the field of software engineering. I
        also love participating in competitive programming.
      </p>
      <h2>Tools and Frameworks</h2>
      <p>
        In my past project experiences, I’ve leveraged a robust set of tools and
        technologies to deliver efficient and high-quality solutions. Java has
        been central to developing scalable applications, paired with frameworks
        like JUnit 5 and Cucumber to implement Test-Driven Development (TDD) and
        Behavior-Driven Development (BDD) practices. For front-end and mobile
        development, I’ve utilized React.js and React Native to craft dynamic
        user interfaces, ensuring responsiveness and cross-platform
        compatibility. Tools like Docker and Heroku have enabled seamless
        containerization and deployment, making applications accessible and
        scalable. I’ve employed MySQL for database management, while Wireshark
        was instrumental in analyzing and optimizing network performance. For
        project management, Jira, Taiga, and Scrum methodologies have ensured
        organized workflows and team efficiency. In deep learning and AI,
        TensorFlow and pre-trained models from Hugging Face have been key for
        building intelligent solutions. I’ve also explored GraphDB and SPARQL
        for semantic web projects, using Protege to design ontologies. Tools
        like Maven, Gradle, and Apache Ant have streamlined project builds and
        dependency management. Additionally, I’ve leveraged Unity Hub for game
        programming and ChatGPT to optimize workflows through automation and
        idea generation. These tools collectively empower me to deliver
        impactful software solutions across web, mobile, AI, and semantic web
        domains.
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
          title="Cucumber Test Framework"
          onClick={() =>
            window.open('https://cucumber.io/docs/cucumber/', '_blank')
          }
        >
          <img src={Cucumber} alt="" />
          Cucumber
        </button>
        <button
          title="React.js Framework"
          onClick={() => window.open('https://reactjs.org/', '_blank')}
        >
          <img src={ReactLogo} alt="" />
          React.js
        </button>
        <button
          title="Ant Framework"
          onClick={() => window.open('https://ant.apache.org/', '_blank')}
        >
          <img src={Ant} alt="" />
          Apache Ant
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
          Junit Jupiter (Junit 5)
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
          title="Heroku"
          onClick={() => window.open('https://www.heroku.com/', '_blank')}
        >
          <img src={Heroku} alt="" />
          Heroku
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
          title="Taiga.io for Scrum"
          onClick={() => window.open('https://www.taiga.io/', '_blank')}
        >
          <img src={Taiga} alt="" />
          Taiga.io
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
          title="Unity Hub"
          onClick={() => window.open('https://unity.com/', '_blank')}
        >
          <img src={Unity} alt="" />
          Unity 5
        </button>
        <button
          title="Ontotext GraphDb"
          onClick={() => window.open('https://graphdb.ontotext.com/', '_blank')}
        >
          <img src={Graphdb} alt="" />
          GraphDb
        </button>
        <button
          title="Sparql Document"
          onClick={() =>
            window.open('https://www.w3.org/TR/sparql11-query/', '_blank')
          }
        >
          <img src={Sparql} alt="" />
          SPARQL
        </button>
        <button
          title="Protege by Stanford"
          onClick={() => window.open('https://protege.stanford.edu/', '_blank')}
        >
          <img src={Protege} alt="" />
          Protege
        </button>
      </div>
      <div className={`button-group ${showButtons[5] ? 'show' : ''}`}>
        <button
          title="Wireshark Network Packet Sniffing"
          onClick={() => window.open('https://www.wireshark.org/', '_blank')}
        >
          <img src={Wireshark} alt="" />
          Wireshark
        </button>
        <button
          title="HuggingFace for Ai/ML"
          onClick={() => window.open('https://huggingface.co/', '_blank')}
        >
          <img src={Huggingface} alt="" />
          HuggingFace
        </button>
        <button
          title="Java Maven Framework"
          onClick={() => window.open('https://maven.apache.org/', '_blank')}
        >
          <img src={Maven} alt="" />
          Maven
        </button>
        <button
          title="Java Gradle Framework"
          onClick={() => window.open('https://gradle.org/', '_blank')}
        >
          <img src={Gradle} alt="" />
          Gradle
        </button>
      </div>
    </section>
  );
};

export default AboutMe;
