import React from 'react';
import styled from 'styled-components';

const ContactSection = styled.section`
  background-color: #0a192f;
  color: #ccd6f6;
  padding: 100px 150px;
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
