import {theme} from './Theme'
import {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *,
    *:before,
    *:after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html,
    body,
    

    body {
        margin: 0;
        min-width: 320px;
        min-height: 100vh;
        font-family: "Fira Code", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
        color: ${theme.colors.text};
        line-height: 1.2;
        background-color: ${theme.colors.primaryBg};
        overflow-x: hidden;
    }

    

    a {
        text-decoration: none;
        color: inherit;
    }

    ul {
        list-style: none;
        padding: 0;
        margin: 0;
    }

    button {
        cursor: pointer;
        background: unset;
        border: none;
    }

    section {
        width: 100%;
        background-color: ${theme.colors.primaryBg};
    }
`