import { createGlobalStyle } from "styled-components";
import { darkGrey, sanSerif, code } from "./utilities";
import { normalize } from "polished";

const GlobalStyles = createGlobalStyle`
    ${normalize()}
    html {
        box-sizing: border-box;
        font-size: 10px;
    }

    *, *:before, *:after {
        box-sizing: inherit;
    } 

    body {
        margin: 0;
        padding: 0;
        font-family: ${sanSerif};
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background-color: ${darkGrey};
    }

    code {
        font-family: ${code}
    }
`

export default GlobalStyles;