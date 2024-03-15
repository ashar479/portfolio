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
              group.offsetTop + group.clientHeight / 2 + 200;

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
        learning and front-end development. Currently pursuing my Master's
        degree in Software Engineering at Arizona State University, I have
        hands-on experience with various technologies and frameworks such as
        React.js, Next.js, and TensorFlow.
      </p>
      <p>
        Outside of coding, I enjoy reading about new technologies, exploring
        nature, and playing the guitar. I am enthusiastic about learning and
        always eager to take on new challenges in the field of software
        engineering.
      </p>
      <h2>Tools and Technologies</h2>
      <p>
        In my project experiences, I've leveraged a diverse toolkit spanning
        various programming languages and development methodologies. I've
        adeptly utilized Java and its GUI library, Java Swing, to craft
        intuitive user interfaces. Testing has been a cornerstone, employing
        JUnit Jupiter (Junit 5) for comprehensive testing suites. Python has
        been instrumental for its versatility in scripting and data processing
        tasks. Version control through Git has ensured seamless collaboration
        and code management. Deep learning projects have benefited from
        TensorFlow's powerful capabilities. Web development has seen me
        proficiently utilize React.js and Next.js for dynamic front-end
        experiences. Project management methodologies such as Taiga and Scrum,
        coupled with IEEE standards, have facilitated organized and efficient
        workflows. JavaScript and its ecosystem, including React Native, have
        empowered mobile and web development endeavors. HTML and CSS have laid
        the groundwork for visually appealing and responsive web interfaces.
        Deployment on platforms like Heroku has ensured accessibility and
        scalability. Robust testing frameworks like Surefire and Jacoco have
        enabled comprehensive code coverage analysis and quality assurance
        throughout development cycles.
      </p>
      <div className={`button-group ${showButtons[0] ? 'show' : ''}`}>
        <button onClick={() => window.open('https://www.java.com/', '_blank')}>
          <img src={Java} alt="" />
          Java
        </button>
        <button
          onClick={() =>
            window.open('https://www.atlassian.com/software/jira', '_blank')
          }
        >
          <img src={Jira} alt="" />
          Jira
        </button>
        <button
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
          onClick={() => window.open('https://openai.com/chatgpt', '_blank')}
        >
          <img src={Chatgpt} alt="" />
          ChatGPT
        </button>
      </div>
      <div className={`button-group ${showButtons[1] ? 'show' : ''}`}>
        <button
          onClick={() =>
            window.open('https://cucumber.io/docs/cucumber/', '_blank')
          }
        >
          <img src={Cucumber} alt="" />
          Cucumber
        </button>
        <button onClick={() => window.open('https://reactjs.org/', '_blank')}>
          <img src={ReactLogo} alt="" />
          React.js
        </button>
        <button
          onClick={() => window.open('https://ant.apache.org/', '_blank')}
        >
          <img src={Ant} alt="" />
          Apache Ant
        </button>
        <button
          onClick={() => window.open('https://reactnative.dev/', '_blank')}
        >
          <img src={ReactNative} alt="" />
          React Native
        </button>
      </div>
      <div className={`button-group ${showButtons[2] ? 'show' : ''}`}>
        <button
          onClick={() => window.open('https://junit.org/junit5/', '_blank')}
        >
          <img src={Junit} alt="" />
          Junit Jupiter (Junit 5)
        </button>
        <button
          onClick={() => window.open('https://www.tensorflow.org/', '_blank')}
        >
          <img src={TensorFlow} alt="" />
          TensorFlow
        </button>
        <button
          onClick={() => window.open('https://www.docker.com/', '_blank')}
        >
          <img src={Docker} alt="" />
          Docker
        </button>
        <button
          onClick={() => window.open('https://www.heroku.com/', '_blank')}
        >
          <img src={Heroku} alt="" />
          Heroku
        </button>
      </div>
      <div className={`button-group ${showButtons[3] ? 'show' : ''}`}>
        <button onClick={() => window.open('https://git-scm.com/', '_blank')}>
          <img src={Git} alt="" />
          Git
        </button>
        <button onClick={() => window.open('https://www.taiga.io/', '_blank')}>
          <img src={Taiga} alt="" />
          Taiga
        </button>
        <button
          onClick={() =>
            window.open('https://www.atlassian.com/agile/scrum', '_blank')
          }
        >
          <img src={Scrum} alt="" />
          Scrum
        </button>
        <button onClick={() => window.open('https://www.mysql.com/', '_blank')}>
          <img src={Mysql} alt="" />
          MySql
        </button>
      </div>
    </section>
  );
};

export default AboutMe;
