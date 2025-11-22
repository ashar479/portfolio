import React from 'react';
import './Work.css';
import SER315 from './docs/SER315.pdf';
import SER321 from './docs/SER321.pdf';
import SER450 from './docs/SER450.pdf';

const Work = ({ id, isDarkMode }) => {
  const workExperience = [
    {
      title: 'Software Engineer / QA Intern',
      organization: 'EyCrowd, San Francisco, CA',
      duration: 'June 2025 – November 2025',
      highlights: [
        'Built cross-platform React Native apps with Jest testing, improving load performance by 30% and reducing UI defects by 40%',
        'Containerized Node.js microservices with Docker and Kubernetes, integrated Salesforce CRM, Mixpanel, and WebSockets to boost engagement by 25%',
        'Delivered LLM-based predictive automation to enhance scalability and reliability, cutting MTTR by 35% and accelerating deployment cycles by 40%',
      ],
    },
    {
      title: 'Software Engineer Intern',
      organization: 'RoundTechSquare, San Francisco, CA',
      duration: 'Jan 2025 – May 2025',
      highlights: [
        'Built a cloud-native inventory system using React.js, Spring Boot, and AWS microservices, improving scalability and enabling seamless deployment across environments',
        'Automated CI/CD pipelines with Jenkins and GitHub Actions, integrating SLOs/SLIs and Grafana monitoring to boost system uptime by 25%',
        'Optimized APIs with Kafka messaging and Redis caching, enhancing performance and reducing manual errors by 30% through secure, event-driven workflows',
      ],
    },
    {
      title: 'Teaching Assistant',
      organization: 'Arizona State University, Tempe, Arizona',
      duration: 'August 2024 – May 2025',
      highlights: [
        "Conducted coding sessions, improving students' assignment completion rates by 15%.",
        'Facilitated Agile methodologies such as Scrum, TDD, and Git version control in course projects.',
        'Collaborated with faculty to refine the curriculum, increasing course enrollment by 10% and integrating CI/CD pipelines and containerization tools.',
      ],
      courses: [
        {
          name: 'SER315: Software Design and Processes',
          url: SER315,
        },
        {
          name: 'SER321: Principles of Distributed Software Systems',
          url: SER321,
        },
        {
          name: 'SER450: Computer Architecture',
          url: SER450,
        },
      ],
    },
  ];

  return (
    <section id={id} className={`work ${isDarkMode ? 'dark-mode' : ''}`}>
      <h2>Work Experience</h2>
      <div className="timeline">
        {workExperience.map((work, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-content">
              <h3>{work.title}</h3>
              <h4>{work.organization}</h4>
              <p className="duration">{work.duration}</p>
              <ul>
                {work.highlights.map((highlight, idx) => (
                  <li key={idx}>{highlight}</li>
                ))}
                {work.courses && (
                  <li title="ASU SER Courses">
                    Courses:{' '}
                    {work.courses.map((course, idx) => (
                      <a
                        key={idx}
                        href={course.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="course-link"
                      >
                        {course.name}
                        {idx < work.courses.length - 1 ? ', ' : ''}
                      </a>
                    ))}
                  </li>
                )}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Work;
