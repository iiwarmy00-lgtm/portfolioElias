import styled from "styled-components";
import {Logo} from "../../components/logo/Logo.tsx";
import {Menu} from "../../components/menu/Menu.tsx";

export const Header = () => {
    return (
        <StyledHeader>
            <Logo/>
            <Menu/>
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
