// frontend/src/components/Resume.js
import React, { useEffect, useState } from 'react';

const Resume = () => {
  const [resume, setResume] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:5000/api/resume')
      .then(response => response.json())
      .then(data => {
        setResume(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching resume data:', error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading resume...</p>;
  if (!resume) return <p>Error loading resume data.</p>;

  return (
    <div style={{ padding: '1rem' }}>
      <h1>{resume.name}</h1>
      <p><strong>Location:</strong> {resume.location}</p>
      <p>
        <strong>Contact:</strong> <a href={`mailto:${resume.email}`}>{resume.email}</a> | {resume.phone}
      </p>
      <p>
        <strong>LinkedIn:</strong>{' '}
        <a href={resume.linkedin} target="_blank" rel="noopener noreferrer">
          {resume.linkedin}
        </a>
      </p>
      <p>
        <strong>GitHub:</strong>{' '}
        <a href={resume.github} target="_blank" rel="noopener noreferrer">
          {resume.github}
        </a>
      </p>
      <section>
        <h2>Summary</h2>
        <p>{resume.summary}</p>
      </section>
      <section>
        <h2>Work Experience</h2>
        {resume.work_experience.map((job, index) => (
          <div key={index}>
            <h3>{job.title} at {job.company}</h3>
            <p><em>{job.duration}</em></p>
            <ul>
              {job.details.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>
      <section>
        <h2>Projects</h2>
        {resume.projects.map((project, index) => (
          <div key={index}>
            <h3>{project.name}</h3>
            <p><em>{project.duration}</em></p>
            <ul>
              {project.details.map((detail, idx) => (
                <li key={idx}>{detail}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>
      <section>
        <h2>Education</h2>
        <h3>{resume.education.institution}</h3>
        <p><em>{resume.education.duration}</em></p>
        <p><strong>Degree:</strong> {resume.education.degree}</p>
        <p><strong>CGPA:</strong> {resume.education.cgpa}</p>
        <p><strong>Coursework:</strong> {resume.education.coursework.join(', ')}</p>
      </section>
      <section>
        <h2>Achievements</h2>
        <ul>
          {resume.achievements.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>
      <section>
        <h2>Certifications</h2>
        <ul>
          {resume.certifications.map((cert, index) => (
            <li key={index}>{cert}</li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Resume;
