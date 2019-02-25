import React, { Component } from 'react';
import styled from "styled-components";

const Heading = styled.h1`
  font-size: 2rem;
  color: white;
 
`;

const Button = styled.button`
  background: #1a73e8;
  font-size: 18px;
  color: white;
  padding: 5px 15px;
  border-radius: 4px;
  box-shadow: 2px 2px 15px 5px rgba(0,0,0,0.1);
  border: 0;
  margin: 15px 0;
  transition: transform .2s ease;
  &:hover {
    transform: scale(1.1)
  }
`;

const DangerButton = styled(Button)`
  background: tomato;
`

const AppWrapper = styled.div`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

class App extends Component {
  render() {
    return (
      <AppWrapper>
        <Heading><span role="img" aria-label="Painting nails">💅</span> Styled Components!</Heading>
        <Button>Button!</Button>
        <DangerButton>Danger Button!</DangerButton>
      </AppWrapper>
    );
  }
}

export default App;
