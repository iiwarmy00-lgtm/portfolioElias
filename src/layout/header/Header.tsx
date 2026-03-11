import styled from "styled-components";
import {Logo} from "../../components/logo/Logo.tsx";
import {Menu} from "../../components/menu/Menu.tsx";
import {LanguageSwitcher} from "../../components/languageSwitcher/LanguageSwitcher.tsx";

export const Header = () => {
    return (
        <StyledHeader>
            <Logo/>
            <RightSide>
                <Menu/>
                <LanguageSwitcher/>
            </RightSide>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    background-color: #282C33;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 40px;
`

const RightSide = styled.div`
    display: flex;
    align-items: center;
    gap: 40px;
`