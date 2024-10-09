import React from 'react';
import './App.css';
import About from './components/About';
import Experience from './components/Experience'
import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';
import LeftNav from './components/LeftNav';
import styled from 'styled-components';

// Use a styled component for the main content area
const MainContent = styled.main`
  margin-left: 350px; // Default for wider screens
  padding: 20px;
  background-color: #0a192f; // Set the same background color as your overall theme to avoid blank space

  @media (max-width: 768px) {
    margin-left: 0; // When screen is smaller, remove the left margin
    padding-top: 100px; // Add padding to top for spacing from the top nav
  }
`;

function App() {
  return (
    <div className="App">
      <LeftNav />
      <MainContent>
        <About />
        <Projects />
        <Experience />
        <Education />
        <Contact />
      </MainContent>
    </div>
  );
}

export default App;