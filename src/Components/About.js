// src/components/About.js
import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.div`
  text-align: center;
  padding: 20px;
`;

const About = () => {
  return (
    <AboutContainer>
      <h2>About Us</h2>
      <p>This is the about page content.</p>
    </AboutContainer>
  );
};

export default About;
