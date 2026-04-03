import styled from "styled-components";
import {Logo} from "../../../components/logo/Logo.tsx";
import {Icon} from "../../../components/icon/Icon.tsx";
import {Container} from "../../../components/Container.ts";
import {theme} from "../../../styles/Theme.ts";

export const Footer = () => {
    return (
        <StyledFooter>
            <Container>
                <FooterTop>
                    <FooterLeft>
                        <FooterLogoRow>
                            <Logo/>
                            <Link href="">elias@elias-dev.ml</Link>
                        </FooterLogoRow>
                        <RoleText>Web designer and front-end developer</RoleText>
                    </FooterLeft>

                    <FooterRight>
                        <FooterTitle>Media</FooterTitle>

                        <SocialList>
                            <SocialMedia>
                                <SocialLink href="#">
                                    <Icon height={"25px"} width={"25px"} viewBox={"0 0 25 25"} iconId={"git"}/>
                                </SocialLink>
                            </SocialMedia>

                            <SocialMedia>
                                <SocialLink href="#">
                                    <Icon height={"25px"} width={"25px"} viewBox={"0 0 25 25"} iconId={"figma"}/>
                                </SocialLink>
                            </SocialMedia>

                            <SocialMedia>
                                <SocialLink href="#">
                                    <Icon height={"25px"} width={"25px"} viewBox={"0 0 25 25"} iconId={"discord"}/>
                                </SocialLink>
                            </SocialMedia>
                        </SocialList>
                    </FooterRight>
                </FooterTop>

                <Copyright>© Copyright 2022. Made by Elias</Copyright>
            </Container>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
    background-color: #282C33;
    border-top: 1px solid ${theme.colors.font};
    padding: 32px 0 24px;

    @media ${theme.media.mobile} {
        padding: 24px 0 16px;
    }
`

const FooterTop = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 40px;
    margin-bottom: 48px;
    
    @media ${theme.media.mobile} {
        flex-direction: column;
        align-items: center;
        text-align: center;
        gap: 24px;
        margin-bottom: 24px;
    }
`

const FooterLeft = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;

    @media ${theme.media.mobile} {
        align-items: center;
    }
`

const FooterLogoRow = styled.div`
    display: flex;
    align-items: center;
    gap: 24px;

    @media ${theme.media.mobile} {
        align-items: center;
    }
`

const FooterRight = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    @media ${theme.media.mobile} {
        flex-direction: column;
        gap: 8px;
    }
`

const RoleText = styled.p`
    margin: 0;
    color: ${theme.colors.text};
    font-size: 16px;

    @media ${theme.media.mobile} {
        font-size: 18px;
    }
`

const FooterTitle = styled.h3`
    margin: 0 0 12px;
    color: ${theme.colors.text};
    font-size: 24px;
    font-weight: 600;

    @media ${theme.media.mobile} {
        align-items: center;
    }
`

const SocialList = styled.ul`
    display: flex;
    gap: 8px;
    margin: 0;
    padding: 0;

    @media ${theme.media.mobile} {
        justify-content: center;
    }
`

const SocialMedia = styled.li`
    list-style: none;
`

const SocialLink = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${theme.colors.font};

    svg {
        width: 24px;
        height: 24px;
    }
`

const Copyright = styled.small`
    display: block;
    text-align: center;
    color: ${theme.colors.font};
    font-size: 14px;

    @media ${theme.media.mobile} {
        font-size: 12px;
    }
`

const Link = styled.a`
    color: ${theme.colors.font};
    font-size: 16px;

    @media ${theme.media.mobile} {
        font-size: 14px;
    }
`