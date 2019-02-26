import { css } from "styled-components";


// Handeling Media Queries


const size = {
    small: 400,
    medium: 960,
    large: 11140
};

const above = Object.keys(size).reduce((acc, label) => {
    acc[label] = (...args) => css`
      @media (min-width: ${size[label]}px) {
        ${css(...args)}
      }
    `;
    return acc;
}, {});

const below = Object.keys(size).reduce((acc, label) => {
    acc[label] = (...args) => css`
      @media (max-width: ${size[label]}px) {
        ${css(...args)}
      }
    `;
    return acc;
}, {});

export { above, below };