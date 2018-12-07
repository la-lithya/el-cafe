import React, { Component } from 'react'
import styled from 'styled-components'


// Create a Title component that'll render an <h1> tag with some styles
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: yellow;
`;

// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.section`
  padding: 4em;
  background: teal;
  font-family: 'Hind', sans-serif;
  height: 100vh;
`;


export default class App extends Component {
  render() {
    return (
      <Wrapper>
        <Title>Welcome to El Cafe</Title>
      </Wrapper>
    )
  }
}
