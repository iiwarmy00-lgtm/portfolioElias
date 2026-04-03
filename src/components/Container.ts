import styled from "styled-components";
import {theme} from "../styles/Theme.ts";

export const Container = styled.div`
    width: 100%;
    max-width: 1100px;
    min-height: 100%;
    padding: 0 24px;
    margin: 0 auto;

    @media ${theme.media.mobile} {
        padding: 0 16px;
    }
`


