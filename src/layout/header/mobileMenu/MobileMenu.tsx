import styled, {css} from "styled-components";
import {Link} from "react-router-dom";
import {theme} from "../../../styles/Theme.ts";
import {useState} from "react";

export const MobileMenu = () => {
    const [menuIsOpen, setMenuIsOpen] = useState(false);

    const onBurgerBtnClick = () => {
        setMenuIsOpen(!menuIsOpen);
    };

    return (
        <StyledMobileMenu>
            <BurgerButton isOpen={menuIsOpen} onClick={onBurgerBtnClick}>
                <span></span>
            </BurgerButton>

            <MobileMenuPopup isOpen={menuIsOpen}>
                <ul>
                    <ListItem>
                        <MenuLink to="/"><span>#</span>home</MenuLink>
                    </ListItem>
                    <ListItem>
                        <MenuLink to="/projects"><span>#</span>works</MenuLink>
                    </ListItem>
                    <ListItem>
                        <MenuLink to="/about"><span>#</span>about-me</MenuLink>
                    </ListItem>
                    <ListItem>
                        <MenuLink to="/contacts"><span>#</span>contacts</MenuLink>
                    </ListItem>
                </ul>
            </MobileMenuPopup>
        </StyledMobileMenu>
    );
};

const StyledMobileMenu = styled.nav`
    display: none;

    @media ${theme.media.tablet} {
        display: block;
    }
`;

const MobileMenuPopup = styled.div<{ isOpen: boolean }>`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 999999;
    background-color: ${theme.colors.primaryBg};
    display: none;

    ${props => props.isOpen && css`
        display: flex;
        justify-content: center;
        align-items: center;
    `}
    ul {
        display: flex;
        gap: 30px;
        list-style: none;
        padding: 0;
        margin: 0;
        align-items: center;
        justify-content: space-between;
        flex-direction: column;
    }
`;

const BurgerButton = styled.button<{ isOpen: boolean }>`
    position: fixed;
    width: 200px;
    height: 200px;
    top: -100px;
    right: -100px;
    z-index: 999999999999;

    span {
        display: block;
        height: 2px;
        width: 36px;
        background-color: ${theme.colors.font};
        position: absolute;
        left: 40px;
        bottom: 50px;

        ${props => props.isOpen && css`
            background-color: rgba(255, 255, 255, 0);
        `}
        &::before {
            content: "";
            display: block;
            height: 2px;
            width: 36px;
            background-color: ${theme.colors.font};
            position: absolute;
            transform: translateY(-10px);

            ${props => props.isOpen && css`
                transform: rotate(-45deg) translateY(0);
            `}
        }

        &::after {
            content: "";
            display: block;
            height: 2px;
            width: 24px;
            background-color: ${theme.colors.font};
            position: absolute;
            transform: translateY(10px);

            ${props => props.isOpen && css`
                transform: rotate(45deg) translateY(0);
                width: 36px;
            `}
        }
    }
`;

const ListItem = styled.li``;

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
`;