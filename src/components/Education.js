import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const EducationSection = styled.section`
  background-color: #0a192f;
  color: #ccd6f6;
  padding: 100px 150px;
  text-align: right;

  h2 {
    font-size: 2.5rem;
    margin-bottom: 20px;
  }

  .school {
    margin-bottom: 20px;
  }

  .school h3 {
    font-size: 1.5rem;
    margin-bottom: 5px;
  }

  .school p {
    font-size: 1.1rem;
    color: #8892b0;
  }

  @media (max-width: 768px) {
    padding: 0 50px;
  }
`;

function Education() {

    const [education, setEducation] = useState([]);

    useEffect(() => {
        // Fetch all data from the local data.json file
        fetch('/data.json')
            .then((response) => response.json())
            .then((data) => {
                // Set state with the fetched data
                setEducation(data.education);
            })
            .catch((error) => console.error("Error fetching data:", error));
    }, []);

    return (
        <EducationSection id="education">
            <h2>Where I've Learned</h2>
            {education.map((school, index) => (
                <div key={index} className="school">
                    <h3>{school.degree}</h3>
                    <p>{school.institution} ({school.year})</p>
                </div>
            ))}
        </EducationSection>
    )
};

export default Education;
