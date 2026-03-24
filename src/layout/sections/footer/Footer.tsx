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
                            <MailText>elias@elias-dev.ml</MailText>
                        </FooterLogoRow>

                        <RoleText>Web designer and front-end developer</RoleText>
                    </FooterLeft>

                    <FooterRight>
                        <FooterTitle>Media</FooterTitle>

                        <SocialList>
                            <SocialMedia>
                                <SocialLink href="#">
                                    <Icon iconId={"git"}/>
                                </SocialLink>
                            </SocialMedia>

                            <SocialMedia>
                                <SocialLink href="#">
                                    <Icon iconId={"figma"}/>
                                </SocialLink>
                            </SocialMedia>

                            <SocialMedia>
                                <SocialLink href="#">
                                    <Icon iconId={"discord"}/>
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
`

const FooterTop = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 40px;
    margin-bottom: 48px;
`

const FooterLeft = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
`

const FooterLogoRow = styled.div`
    display: flex;
    align-items: center;
    gap: 24px;
`

const FooterRight = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`

const MailText = styled.span`
    color: ${theme.colors.font};
    font-size: 16px;
`

const RoleText = styled.p`
    margin: 0;
    color: ${theme.colors.text};
    font-size: 16px;
`

const FooterTitle = styled.h3`
    margin: 0 0 12px;
    color: ${theme.colors.text};
    font-size: 24px;
    font-weight: 600;
`

const SocialList = styled.ul`
    display: flex;
    gap: 8px;
    margin: 0;
    padding: 0;
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
`
