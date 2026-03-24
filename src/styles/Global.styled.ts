import styled, {createGlobalStyle} from "styled-components";
import {theme} from './Theme'

export const GlobalStyle = createGlobalStyle`
    *,
    *:before,
    *:after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    body {
        margin: 0;
        min-width: 320px;
        min-height: 100vh;
        font-family: "Fira Code", -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
        color: ${theme.colors.text};
        line-height: 1.2;
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
        background-color: ${theme.colors.primaryBg};
    }
`

export const  Dots= styled.div`
    position: absolute;
    top: 320px;
    right: 50px;
    width: 100px;
    height: 100px;
    z-index: 2;
    background-image: radial-gradient(${theme.colors.text} 2px, transparent 2px);
    background-size: 20px 20px;
    opacity: 0.8;
    
`