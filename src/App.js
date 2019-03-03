import React, { Component } from "react";
import styled from "styled-components/macro";
import GlobalStyles from "./Global";
import { DangerButton, Button } from "./elements";
import Header from "./layouts/Header";
import { Div, FancyDiv, FixedDiv } from "./elements/Div";

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
`;

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <AppCenter>
          <Button>Button!</Button>
          <DangerButton>Danger Button!</DangerButton>
          <Button modifiers={["small"]}>Small Button!</Button>
          <DangerButton modifiers={["large"]}>
            Large Danger Button!
          </DangerButton>
          <Button modifiers={["groovy", "large"]}>Large Groovy Button!</Button>
          <Div>I am a regular Div</Div>
          <Div
            css={`
              background-color: red;
              padding: 10px;
            `}
          >
            I am a regular Div that has a css prop!
          </Div>
          <FancyDiv>
            <span role="img" aria-label="Diamond">
              💎
            </span>{" "}
            I am a Fancy Div!{" "}
            <span role="img" aria-label="Diamond">
              💎
            </span>
          </FancyDiv>
          <FancyDiv>
            <span role="img" aria-label="Point">
              👆
            </span>{" "}
            I am a div with a button!{" "}
            <span role="img" aria-label="Point">
              👆
            </span>
            <Div.Button>I am full width!</Div.Button>
          </FancyDiv>
          <FixedDiv top="100" left="40">
            <span role="img" aria-label="Sun">
              ☀️
            </span>{" "}
            I am a Fixed Div!
          </FixedDiv>
          <Button as="a">
            I am a link prending to be a button using the "as" prop!
          </Button>
          <GlobalStyles />
        </AppCenter>
      </>
    );
  }
}

export default App;
