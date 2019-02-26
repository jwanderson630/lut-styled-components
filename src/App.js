import React, { Component } from 'react';
import styled from "styled-components";
import GlobalStyles from "./Global";
import { fixedTop } from "./utilities";
import { DangerButton, Button } from "./elements";
import Header from "./layouts/Header";
import { darkGrey } from "./utilities";



// Styling a React Component

const Div = ({ children, className }) => <div className={className}>{children}</div>

const FancyDiv = styled(Div)`
background: white;
  border-radius: 4px;
  box-shadow: 2px 2px 15px 5px rgba(0,0,0,0.1);
  color: ${darkGrey};
  font-size: 2rem;
  padding: 20px;
  text-align: center;
  margin: 15px 0;
  transition: transform .2s ease;
  &:hover {
    transform: scale(1.1) translateY(-5px);
  }
`

const FixedDiv = styled(FancyDiv)`
  ${fixedTop}
`

const AppCenter = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ${Button} {
    /* Can use this syntax to style other components */
    /* background-color: green; */
  }
`

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <AppCenter>
          <Button>Button!</Button>
          <DangerButton>Danger Button!</DangerButton>
          <Div>I am a regular Div</Div>
          <FancyDiv><span role="img" aria-label="Diamond">💎</span> I am a Fancy Div! <span role="img" aria-label="Diamond">💎</span></FancyDiv>
          <FixedDiv top="100" left="40" ><span role="img" aria-label="Sun">☀️</span> I am a Fixed Div!</FixedDiv>
          <GlobalStyles />
        </AppCenter>
      </>
    );
  }
}

export default App;
