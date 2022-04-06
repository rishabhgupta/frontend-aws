import styled, { createGlobalStyle } from "styled-components";
import { defaultTheme } from "./themes";
import { PRIMARY_FONT, typeScale } from "./typography";

export const GlobalStyles = createGlobalStyle`
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-size: 16px;
}

body {
    font-family: ${PRIMARY_FONT};
    background: ${({ theme }) => theme.bodyColor};
    color: ${({ theme }) => theme.textColor};
    /* transition: background 0.2s ease-in, color 0.2s ease-in; */

    h1 {
        font-size: ${typeScale.header1};
    }

    h2 {
        font-size: ${typeScale.header2};
    }

    h3 {
        font-size: ${typeScale.header3};
    }

    h4 {
        font-size: ${typeScale.header4};
    }

    p {
        font-size: ${typeScale.paragraph};
    }

}



`;

export const Container = styled.div`
    z-index: 1;
    width: 100%;
    max-width: 1300px;
    margin-right: auto;
    margin-left: auto;
    padding-right: 50px;
    padding-left: 50px;

    @media screen and (max-width: 991px) {
        padding-right: 30px;
        padding-left: 30px;
    }
`;


