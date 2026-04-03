import styled from "styled-components";
import {theme} from "../styles/Theme.ts";

type FlexWrapperPropsType = {
    direction?: string
    justify?: string
    align?: string
    wrap?: string
    gap?: string
}

export const FlexWrapper = styled.div<FlexWrapperPropsType>`
    display: flex;
    flex-direction: ${props => props.direction || "row"};
    justify-content: ${props => props.justify || "flex-start"};
    align-items: ${props => props.align || "stretch"};
    flex-wrap: ${props => props.wrap || "nowrap"};
    gap: ${props => props.gap || "0"};
    height: 100%;

    @media ${theme.media.mobile} {
        flex-direction: column;
        align-items: flex-start;
        gap: 40px;
    }
`