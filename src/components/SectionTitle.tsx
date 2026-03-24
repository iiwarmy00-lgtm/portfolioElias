import styled from "styled-components";
import {theme} from "../styles/Theme.ts";

export const SectionTitle = styled.h2`
    font-size: 32px;
    font-weight: 500;
    margin: 0;
    color: ${theme.colors.text};
    
    span {
        color: ${theme.colors.accent};
    }
`
