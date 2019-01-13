import React, { Component } from 'react'
import styled from 'styled-components'
// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.div`
  padding: 0;
  margin: 0;
  font-family: 'Hind', sans-serif;
  height: 100vh;
`;

const Header = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  background-color: teal;
  color: white;
`;

// Create a Title component that'll render an <h1> tag with some styles
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
`;

const Content = styled.div`
  margin: 10px;
`;


export default class App extends Component {
  render() {
    return (
      <Wrapper>
      <Header>
        <Title>bienvenido al cafe</Title>
      </Header>
      <Content>
        This will include the content
      </Content>
      </Wrapper>
    )
  }
}
