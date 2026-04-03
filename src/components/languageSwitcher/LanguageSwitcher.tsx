import styled from "styled-components";
import {theme} from "../../styles/Theme.ts";

export const LanguageSwitcher = () => {
    return (
        <StyledLanguageSwitcher>
            <span>RU</span>
        </StyledLanguageSwitcher>
    )
}

const StyledLanguageSwitcher = styled.div`

    @media ${theme.media.mobile}{
        display: none;
    }
`
