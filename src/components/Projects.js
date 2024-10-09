import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const ProjectsSection = styled.section`
  background-color: #0a192f;
  color: #ccd6f6;
  padding: 100px 20px; /* Adjust padding for smaller screens */
  text-align: left;

  h2 {
    font-size: 2.5rem;
    margin-bottom: 40px;
  }

  a {
    color: #66d9ef;
  }

  .project-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); /* Reduced min width */
    gap: 20px;
  }

  .project-card {
    background-color: #112240;
    padding: 20px;
    border-radius: 5px;
    transition: transform 0.3s ease-in-out;
    overflow: hidden; /* Prevent overflow in the card */
  }

  .project-card:hover {
    transform: translateY(-10px);
  }

  .project-card h3 {
    font-size: 1.5rem;
    margin-bottom: 10px;
  }

  .project-card p {
    font-size: 1rem;
    color: #8892b0;
  }

  @media (max-width: 768px) { /* Adjust styles for smaller screens */
    padding: 100px 20px; /* Add some horizontal padding */
    h2 {
      font-size: 2rem; /* Smaller font size for headings */
    }

    .project-grid {
      grid-template-columns: 1fr; /* Stack cards vertically */
    }
  }
`;



function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Fetch all data from the local data.json file
    fetch('/data.json')
      .then((response) => response.json())
      .then((data) => {
        // Set state with the fetched data
        setProjects(data.project);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <ProjectsSection id="projects">
      <h2>Some Things I’ve Built</h2>
      <div className="project-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <ul>
              {project.techStack.map((tech, idx) => (
                <li key={idx}>{tech}</li>
              ))}
            </ul>
            {project.link ? (
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <br />
                View Project
              </a>) : (<></>)}
          </div>
        ))}
      </div>
    </ProjectsSection>
  );
}

export default Projects;
