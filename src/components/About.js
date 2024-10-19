import React from 'react';
import styled from 'styled-components';

const AboutSection = styled.section`
  background-color: #0a192f;
  color: #ccd6f6;
  padding: 50px 15px;
  text-align: center;

  h2 {
    font-size: 2.5rem;
    margin-bottom: 20px;
  }

  p {
    font-size: 1.1rem;
    color: #8892b0;
    max-width: 900px;
    margin: 0 auto;
  }

  @media (max-width: 768px) {
    padding: 0 50px;
  }
`;

const About = () => (
  <AboutSection id="about">
    <h2>About Me</h2>
    <p>
      In 2022, I found myself feeling bored at work and decided to explore something new: I started learning Java. 
      To my surprise, I discovered a passion for coding and problem-solving that I never knew I had. 
      This newfound love for programming led me to enroll at Humber College in Toronto, 
      where I'm honing my skills with a focus on creating user-friendly applications.
    </p>
    <br />
    <p>
      My main goal is to develop software that not only meets user needs but also provides an enjoyable experience. 
      I thrive on challenges and enjoy finding solutions to complex problems.
    </p>
    <br />
    <p>
      Outside of coding, I have a few hobbies that keep me balanced. I love making coffee—there's something special about 
      brewing the perfect cup. When I'm not experimenting with coffee beans, you can find me playing games, 
      where I can immerse myself in different worlds and narratives.
    </p>
  </AboutSection>
);

export default About;
