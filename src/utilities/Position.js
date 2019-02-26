import { css } from "styled-components";

// CSS Helper

const fixedTop = css`
  position: fixed;
  top: ${({ top }) => `${top}px`};
  left: ${({ left }) => `${left}px`};
`;

export { fixedTop }