import styled from "styled-components";
import { blue, red } from "../utilities";

const Button = styled.button`
  background: ${blue};
  font-size: 18px;
  color: white;
  padding: 5px 15px;
  border-radius: 4px;
  box-shadow: 2px 2px 15px 5px rgba(0,0,0,0.1);
  border: 0;
  margin: 15px 0;
  transition: transform .2s ease;
  &:hover {
    transform: scale(1.1);
  }
`;

// Styling a styled-component

const DangerButton = styled(Button)`
    background: ${red};
`

export { DangerButton, Button };