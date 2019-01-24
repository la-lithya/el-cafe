import React, { Component } from 'react';
import axios from 'axios';

// testing with github graphQL API
const axiosGithubGraphQL = axios.create({
  baseURL: 'https://api.github.com/graphql',
  headers: {
    Authorization: 'bearer PERSONAL_ACCESS_TOKEN'
  }
})

const TITLE = 'El Cafe';

class App extends Component {
  render() {
    return (
      <div>
       <h1>{TITLE}</h1>
      </div>
    );
  }
}

export default App;
