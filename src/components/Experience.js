import React from 'react';
import styled from 'styled-components';

const ExperienceSection = styled.section`
  background-color: #0a192f;
  color: #ccd6f6;
  padding: 100px 150px;
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

const Experience = () => (
  <ExperienceSection id="experience">
    <h2>Where I've Worked</h2>
    <div className="job">
      <h3>Baker, Tim Hortons 2023 - 2024</h3>
      <p>Manage two ovens and ensure the showcase is fully stocked with fresh products.</p>
    </div>
    <div className="job">
      <h3>Supply Chain Analyst, PTT Oil and Retail 2019 - 2023</h3>
      <p>Managed supply chain operations, optimized logistics, and streamlined operations.</p>
    </div>
    <div className="job">
      <h3>Production Engineer Section Head, Siam City Cement 2015 - 2017</h3>
      <p>Led a team of over 20 people, improving production processes and efficiency in cement production.</p>
    </div>
  </ExperienceSection>
);

export default Experience;
