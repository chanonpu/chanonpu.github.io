import React from 'react';
import styled from 'styled-components';

const ContactSection = styled.section`
  background-color: #0a192f;
  color: #ccd6f6;
  padding: 50px 20px; /* Adjusted padding for mobile */
  text-align: center;

  h2 {
    font-size: 2.5rem;
    margin-bottom: 20px;
  }

  p {
    font-size: 1.2rem;
    color: #8892b0;
    margin-bottom: 30px;
  }

  a {
    color: #64ffda;
    font-size: 1.2rem;
    text-decoration: none;
    border: 1px solid #64ffda;
    padding: 10px 20px;
    border-radius: 5px;
    transition: background-color 0.3s ease-in-out;
  }

  a:hover {
    background-color: #64ffda;
    color: #0a192f;
  }

  @media (max-width: 768px) {
    padding: 50px 20px; /* Keep padding consistent for mobile */
    
    h2 {
      font-size: 2rem; /* Slightly smaller font size for headings */
    }

    p {
      font-size: 1rem; /* Smaller font size for paragraphs */
    }

    a {
      padding: 12px 25px; /* Adjust button padding for a larger clickable area */
      font-size: 1.2rem; /* Consistent font size for the link */
    }
  }
`;

const Contact = () => (
  <ContactSection id="contact">
    <h2>Get In Touch</h2>
    <p>
      I'm currently open to new opportunities! Feel free to reach out if you
      have a project in mind.
    </p>
    <a href="mailto:c.palawatvichai@gmail.com">Email Me</a>
  </ContactSection>
);

export default Contact;
