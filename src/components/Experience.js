import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const ExperienceSection = styled.section`
  background-color: #0a192f;
  color: #ccd6f6;
  padding: 100px 10%;
  text-align: left;

  h2 {
    font-size: 2.5rem;
    margin-bottom: 20px;
  }

  .job {
    margin-bottom: 20px;
  }

  .job h3 {
    font-size: 1.5rem;
    margin-bottom: 5px;
  }

  .job p {
    font-size: 1.1rem;
    color: #8892b0;
  }

  @media (max-width: 768px) {
    padding: 0 50px;
  }
`;

function Experience() {

  const [experience,getExperience] = useState([]);

  useEffect(() => {
    // Fetch all data from the local data.json file
    fetch('/data.json')
        .then((response) => response.json())
        .then((data) => {
            // Set state with the fetched data
            getExperience(data.experience);
        })
        .catch((error) => console.error("Error fetching data:", error));
}, []);

  return (
    <ExperienceSection id="experience">
      <h2>Where I've Worked</h2>
      {experience.map((exp , index) => (
        <div key={index} className="job">
          <h3>{exp.jobTitle}</h3>
          <p>{exp.company} - {exp.year}</p>
        </div>
      ))}
    </ExperienceSection>
  )
};

export default Experience;
