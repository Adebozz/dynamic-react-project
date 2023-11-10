// src/components/Home.js
import React from 'react';
import styled from 'styled-components';

const HomeContainer = styled.div`
  text-align: center;
  padding: 20px;
`;

const Home = () => {
  return (
    <HomeContainer>
      <h2>Welcome to the Home Page!</h2>
    </HomeContainer>
  );
};

export default Home;
