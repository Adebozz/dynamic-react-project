// src/components/Contact.js
import React from 'react';
import styled from 'styled-components';

const ContactContainer = styled.div`
  text-align: center;
  padding: 20px;
`;

const Contact = () => {
  return (
    <ContactContainer>
      <h2>Contact Us</h2>
      <p>This is the contact page content.</p>
    </ContactContainer>
  );
};

export default Contact;
