import React from 'react';
import styled from "styled-components";
import { Heading } from "../elements"
import { lightGrey } from "../utilities";

const Header = () => {
    return (
        <AppHeader>
            <Heading><span className="emoji" role="img" aria-label="Painting nails">💅</span> Styled Components!</Heading>
        </AppHeader>
    )
};

const AppHeader = styled.header`

    padding: 5px 40px;
    margin-bottom: 20px;
    background-color: ${lightGrey};
    box-shadow: 4px 4px 25px 10px rgba(0,0,0,0.3);
    position: sticky;
    top: 0;
    text-shadow: 2px 2px 1px rgba(0,0,0,0.3);
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
`

export default Header
