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
      duration: 'June 2025 – Present',
      highlights: [
        'Developed cross-platform features for the EyCrowd mobile app using React Native, and wrote unit tests with Jest and React Testing Library to ensure component stability and UI reliability across devices',
        'Worked with Salesforce CRM to align campaign tracking with internal pipelines, and set up Docker test environments for QA validation and internal deployment consistency',
        'Collaborated with AI engineers to evaluate LLM integration patterns and optimize user engagement logic, using Mixpanel to track behavior and contributing to a redesign that improved daily active usage by 25% approximately',
      ],
    },
    {
      title: 'Software Engineer Intern',
      organization: 'RoundTechSquare, San Francisco, CA',
      duration: 'Jan 2025 – May 2025',
      highlights: [
        'Built a cloud-native inventory management system using React.js, and Amazon Web Services (AWS) including S3, EC2, DynamoDB, reducing manual errors by 30%',
        'Automated CI/CD pipelines with Jenkins and GitHub Actions, containerized services using Docker, and implemented performance monitoring with Grafana, reducing deploy issues and improving service reliability',
        'Collaborated with product managers and analysts to define scalable data workflows, using Postman to validate endpoints and enhance internal API adoption alongside Swagger-based documentation',
      ],
    },
    {
      title: 'Teaching Assistant',
      organization: 'Arizona State University, Tempe, Arizona',
      duration: 'August 2023 – Present',
      highlights: [
        "Conducted coding sessions, improving students' assignment completion rates by 15%.",
        'Facilitated Agile methodologies such as Scrum, TDD, and Git version control in course projects.',
        'Collaborated with faculty to refine the curriculum, increasing course enrollment by 10% and integrating CI/CD pipelines and containerization tools.',
        'Worked on the following courses: ',
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
    {
      title: 'Software Engineer',
      organization: 'Hiration Career Technologies, New Delhi, India',
      duration: 'Jun 2020 – Nov 2022',
      highlights: [
        'Developed reusable React components using JSX, integrated with Next.js and Node.js, improving server-side rendering performance by 20% for Natural Language Processing models',
        'Managed source control with Git, facilitated project deployment on Vercel, and optimized component design using Figma and Unified Modeling Language (UML) tools, reducing design-to-deployment time by 25%',
        'Executed Exploratory Testing (white box) and JUnit5 (black box), achieving 95% code coverage with Java Code Coverage (JaCoCo) and maintaining software quality with a 99% DOI adherence rate',
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
