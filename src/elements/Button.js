import styled from "styled-components";
import { lighten, linearGradient } from "polished";
import { applyStyleModifiers } from "styled-components-modifiers";
import { blue, red, elevation } from "../utilities";

const groovyGradient = linearGradient({ colorStops: ["#e96443 0%", "#904e95 25%", "#CB3066 75%", "#16BFFD 100%"] });

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
    transition: transform .2s ease, background-position .2s linear;
    background-size: 400% 400%;
    &:hover {
      animation: gradient 1.5s linear infinite;
    }

    @keyframes gradient {
      0% {
        background-position: 50% 0%
      }
      50% {
        background-position: 50% 100%
      }
      100% {
        background-position: 100% 0%
      }
    }
  `
};

const Button = styled.button`
background-color: ${ blue};
font-size: 2rem;
color: white;
padding: 5px 15px;
border-radius: 4px;
${ elevation[1]}
border: 0;
margin: 15px 0;
transition: transform .2s ease, background-color .2s ease;
  &:hover {
  transform: scale(1.1);
  background-color: ${ lighten(0.02, blue)}
}
${ applyStyleModifiers(BUTTON_MODIFIERS)}
`;

// Styling a styled-component

const DangerButton = styled(Button)`
background-color: ${red};
    &:hover {
  background-color: ${lighten(0.02, red)}
}
`

export { DangerButton, Button };