import React from 'react';
import './Work.css';

const Work = ({ id, isDarkMode }) => {
  const workExperience = [
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
          url: 'https://webapp4.asu.edu/bookstore/viewsyllabus/2227/77623/pdf;jsessionid=0244856FA63CAB798BADAAA3597600EE',
        },
        {
          name: 'SER321: Principles of Distributed Software Systems',
          url: 'https://webapp4.asu.edu/bookstore/viewsyllabus/2234/44671/pdf;jsessionid=C81BC4B51CABB6D128D01C3868F1786C',
        },
        {
          name: 'SER450: Computer Architecture',
          url: 'https://webapp4.asu.edu/bookstore/viewsyllabus/2241/25528/pdf;jsessionid=FA38DBF3215CE04D0D8175524623B12F',
        },
      ],
    },
    {
      title: 'React Developer and Test Intern',
      organization: 'Hiration Career Technologies, New Delhi, India',
      duration: 'June 2021 – August 2021',
      highlights: [
        'Implemented React and Next.js to develop server-side rendered web applications integrated with Node.js backends.',
        'Used Git for version control and facilitated deployment via Vercel.',
        'Designed components using Figma and tested applications using JUnit 5 and JACOCO, achieving high code coverage.',
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
