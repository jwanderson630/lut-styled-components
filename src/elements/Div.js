import React from "react";
import styled from "styled-components";
import { fixedTop, elevation, fixed } from "../utilities";
import { darkGrey } from "../utilities";

// Styling a React Component

const Div = ({ children, className }) => <div className={className}>{children}</div>

const FancyDiv = styled(Div)`
  background: white;
  border-radius: 4px;
  ${elevation[1]}
  color: ${darkGrey};
  font-size: 3rem;
  padding: 20px;
  text-align: center;
  margin: 15px 0;
  transition: transform .2s ease;
  &:hover {
    transform: scale(1.1) translateY(-5px);
  }
`

const FixedDiv = styled(FancyDiv)`
  ${fixed({ x: 40, y: 100, xProp: "right" })}
`

export { Div, FancyDiv, FixedDiv }