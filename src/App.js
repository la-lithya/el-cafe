import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';

// testing with github graphQL API
const axiosGithubGraphQL = axios.create({
  baseURL: 'https://api.github.com/graphql',
  headers: {
    Authorization: 'bearer PERSONAL_ACCESS_TOKEN'
  }
})

// styled components
const Title = styled.h1`
  text-align: center;
  text-transform: uppercase;
  font-family: 'Major Mono Display', monospace;
`;
const Content = styled.p`
  text-align: center;
`;

const Subtitle = styled.p`
  font-style: italic;
  text-align: center;
  color: darkgray;
`;

class App extends Component {
  render() {
    return (
      <div>
       <Title>El Cafe</Title>
       <Subtitle>An easy way to fill your cup every day.</Subtitle>
       <Content>Menu</Content>
      </div>
    );
  }
}

export default App;
