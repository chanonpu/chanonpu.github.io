import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaLinkedin} from 'react-icons/fa'; // Import social icons

const NavBar = styled.nav`
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  width: 350px; /* Change width to 350px */
  background-color: #0a192f;
  color: #ccd6f6;
  padding: 150px 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 14px;

  .intro {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .intro h1 {
    font-size: 1.5rem;
    color: #64ffda;
    margin-bottom: 10px;
  }

  .intro h2 {
    font-size: 1.2rem;
    color: #8892b0;
    margin-bottom: 20px;
  }

  .links {
    display: flex;
    flex-direction: column;
  }

  .links a {
    color: #ccd6f6;
    margin-bottom: 20px;
    text-decoration: none;
    transition: color 0.3s ease-in-out;

    &:hover {
      color: #64ffda;
    }
  }

  .social-links {
    display: flex;
    flex-direction: row; /* Display icons in a single line */
    justify-content: center; /* Center the social links */
    align-items: center;
    gap: 10px; /* Add space between icons */
  }

  .social-links a {
    color: #ccd6f6;
    font-size: 24px; /* Adjust the icon size */
    transition: color 0.3s ease-in-out;

    &:hover {
      color: #64ffda;
    }
  }

  @media (max-width: 768px) {
    position: static;
    width: 100%; /* Make the nav take full width */
    height: auto;
    padding: 10px 20px;
    font-size: 12px;
    flex-direction: column;

    .links {
      display: none; /* Hide links when the screen is smaller */
    }

    .intro {
      align-items: center;
      text-align: center;
    }

    .social-links {
      justify-content: center; /* Ensure the social links are centered in mobile view */
      margin-top: 20px;
    }
  }
`;


const LeftNav = () => (
  <NavBar>
    <div className="intro">
      <h1>Chanon Palawatvichai</h1>
      <h2>Computer Programming Student</h2>
      <p>Building impactful, accessible, and engaging digital experiences.</p>
    </div>

    <div className="links">
      <a href="#about">About</a>
      <a href="#projects">Projects</a>
      <a href="#experience">Experience</a>
      <a href="#education">Education</a>
    </div>

    <div className="social-links">
      <a href="https://github.com/chanonpu">
        <FaGithub />
      </a>
      <a href="https://www.linkedin.com/in/chanonpal/">
        <FaLinkedin />
      </a>
    </div>
  </NavBar>
);

export default LeftNav;
