import styled from "styled-components";
import { lighten, radialGradient } from "polished";
import { applyStyleModifiers } from "styled-components-modifiers";
import { blue, red, elevation } from "../utilities";

const groovyGradient = radialGradient({
  colorStops: ["#e96443 0%", "#904e95 25%", "#CB3066 75%", "#16BFFD 100%"],
  shape: "circle"
});
const groovyGradient2 = radialGradient({
  colorStops: ["#16BFFD 0%", "#CB3066 25%", "#904e95 50%", "#e96443 100%"],
  shape: "circle"
});

console.log(groovyGradient);

const BUTTON_MODIFIERS = {
  small: () => `
    font-size: 1.5rem;
    padding: 5px 10px;
  `,
  large: () => `
    font-size: 4rem;
    padding: 10px 25px;
  `,
  groovy: () => `
    background-image: ${groovyGradient.backgroundImage};
    background-color: ${groovyGradient.backgroundColor};
    transition: transform .2s ease, background-position .5s linear;
    background-size: 600% 600%;
    &:hover {
      animation: gradient 3s linear infinite;
    }

    @keyframes gradient {
      0% {
        background-position: 0% 50%
        background-image: ${groovyGradient.backgroundImage};
      }
      25% {
        background-position: 50% 0%
        background-image: ${groovyGradient2.backgroundImage};
      }
      50% {
        background-position: 0% -50%
        background-image: ${groovyGradient.backgroundImage};
      }
      75% {
        background-position: -50% 0%
        background-image: ${groovyGradient2.backgroundImage};
      }
      100% {
        background-position: 0% 50%
        background-image: ${groovyGradient.backgroundImage};
      }
    }
  `
};

const Button = styled.button`
  background-color: ${blue};
  font-size: 2rem;
  color: white;
  padding: 5px 15px;
  border-radius: 4px;
  ${elevation[1]}
  border: 0;
  margin: 15px 0;
  transition: transform 0.2s ease, background-color 0.2s ease;
  &:hover {
    transform: scale(1.1);
    background-color: ${lighten(0.02, blue)};
  }
  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;

// Styling a styled-component

const DangerButton = styled(Button)`
  background-color: ${red};
  &:hover {
    background-color: ${lighten(0.02, red)};
  }
`;

export { DangerButton, Button };
