import styled from "styled-components";
import { above } from "../utilities";

const Heading = styled.h1`
  font-size: 2rem;
  color: blue;
  ${above.medium`
  color: white;
  `}
`;

export { Heading };