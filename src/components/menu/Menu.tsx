import styled from "styled-components";
import {Link} from "react-router-dom";
import {theme} from "../../styles/Theme.ts";

export const Menu = () => {
    return (
        <StyledMenu>
            <ul>
                <ListItem><MenuLink to="/"><span>#</span>home</MenuLink></ListItem>
                <ListItem><MenuLink to="/projects"><span>#</span>works</MenuLink></ListItem>
                <ListItem><MenuLink to="/about"><span>#</span>about-me</MenuLink></ListItem>
                <ListItem><MenuLink to="/contacts"><span>#</span>contacts</MenuLink></ListItem>
            </ul>
        </StyledMenu>
    );
};

const StyledMenu = styled.nav`
    ul {
        display: flex;
        gap: 30px;
        list-style: none;
        padding: 0;
        margin: 0;
        align-items: center;
        justify-content: space-between;
    }
    
    @media  ${theme.media.tablet} {
        display: none;
    }
`

const ListItem = styled.li`

`

const MenuLink = styled(Link)`
    font-size: 16px;
    font-weight: 400;
    color: ${theme.colors.font};
    
    &:hover {
        color: ${theme.colors.text};
    }

    span {
        color: ${theme.colors.accent};
    }
`
