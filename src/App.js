// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import styled from 'styled-components';

const Navigation = styled.nav`
  background-color: #333;
  padding: 10px;
  ul {
    list-style: none;
    display: flex;
    justify-content: center;
    padding: 0;
    margin: 0;
    li {
      margin: 0 15px;
      a {
        text-decoration: none;
        color: white;
        font-weight: bold;
        &:hover {
          color: #61dafb;
        }
      }
    }
  }
`;

const ContentContainer = styled.div`
  max-width: 800px;
  margin: 20px auto;
`;

const App = () => {
  return (
    <Router>
      <div>
        <Navigation>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </Navigation>

        <ContentContainer>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </ContentContainer>
      </div>
    </Router>
  );
};

export default App;
