import { css } from "styled-components";

// CSS Helper

export const fixedTop = css`
  position: fixed;
  top: ${({ top }) => `${top}px`};
  left: ${({ left }) => `${left}px`};
`;

export const fixed = ({ x = 0, y = 0, xProp = 'left', yProp = 'top' } = {}) => {
  return css`
    position: fixed;
    ${yProp}: ${y}px;
    ${xProp}: ${x}px;
  `
}

export const absolute = ({ x = 0, y = 0, xProp = 'left', yProp = 'top' } = {}) => {
  return css`
    position: absolute;
    ${yProp}: ${y}px;
    ${xProp}: ${x}px;
  `
}

export const sticky = ({ x = 0, y = 0, xProp = 'left', yProp = 'top' } = {}) => {
  return css`
    position: sticky;
    ${yProp}: ${y}px;
    ${xProp}: ${x}px;
  `
}

