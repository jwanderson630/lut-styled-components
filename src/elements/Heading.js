import styled from "styled-components";
import { above } from "../utilities";

const Heading = styled.h1`
  font-size: 3rem;
  color: blue;
  text-shadow: 2px 2px 1px rgba(0,0,0,0.3);
  ${above.medium`
  color: white;
  `}
  .emoji {
        transition: transform .2s ease;
        display: inline-block;
    }
    .emoji:hover {
        transform: scale(1.1);
        animation: 2s linear infinite spin;
    }

    @keyframes spin {
        0% {
            transform: rotate(0)
        }
        50% {
        }
        100% {
            transform: rotate(360deg)
        }
    }
`;

export { Heading };