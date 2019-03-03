import React from "react";
import styled from "styled-components";
import { elevation, fixed } from "../utilities";
import { Button } from "./Button";
import { darkGrey } from "../utilities";

// Styling a React Component

export const Div = ({ children, className }) => (
  <div className={className}>{children}</div>
);

export const FancyDiv = styled(Div)`
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
`;

export const FixedDiv = styled(FancyDiv)`
  ${fixed({ x: 40, y: 100, xProp: "right" })}
`;

const DivButton = styled(Button)`
  width: 9 0%;
`;

Div.Button = DivButton;
