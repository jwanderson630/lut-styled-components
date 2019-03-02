import React from 'react';
import styled from "styled-components";
import { Heading } from "../elements"
import { lightGrey, elevation } from "../utilities";

const Header = () => {
    return (
        <AppHeader>
            <Heading>&#60; <span className="emoji" role="img" aria-label="Painting nails">💅</span> &#62; Styled Components!</Heading>
        </AppHeader>
    )
};

const AppHeader = styled.header`
    padding: 5px 40px;
    margin-bottom: 20px;
    background-color: ${lightGrey};
    ${elevation[2]}
    position: sticky;
    top: 0;
`

export default Header
