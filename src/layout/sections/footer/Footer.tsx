import styled from "styled-components";
import {Logo} from "../../../components/logo/Logo.tsx";
import {Icon} from "../../../components/icon/Icon.tsx";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";

export const Footer = () => {
    return (
        <StyledFooter>
            <FlexWrapper align={"flex-start"} justify={"space-between"}>
                <FooterLeft>
                    <FooterLogo>
                        <Logo/>
                        <Text>elias@elias-dev.ml</Text>
                    </FooterLogo>
                    <Text>Web designer and front-end developer</Text>
                </FooterLeft>

                <FooterRight>
                    <FooterTitle>Media</FooterTitle>
                    <SocialList>
                        <SocialMedia>
                            <SocialLink href="#">
                                <Icon height={"32px"} width={"32px"} viewBox={"0 0 32 32"} iconId={"git"}/>
                            </SocialLink>
                        </SocialMedia>

                        <SocialMedia>
                            <SocialLink href="#">
                                <Icon height={"32px"} width={"32px"} viewBox={"0 0 32 32"} iconId={"figma"}/>
                            </SocialLink>
                        </SocialMedia>

                        <SocialMedia>
                            <SocialLink href="#">
                                <Icon height={"32px"} width={"32px"} viewBox={"0 0 32 32"} iconId={"discord"}/>
                            </SocialLink>
                        </SocialMedia>
                    </SocialList>
                </FooterRight>
            </FlexWrapper>
            <Copyright>© Copyright 2022. Made by Elias</Copyright>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
    background-color: #282C33;
    min-height: 20vh;
`

const FooterLogo = styled.div`
    display: flex
`

const FooterLeft = styled.div`

`

const FooterRight = styled.div`

`

const Text = styled.span`

`

const FooterTitle = styled.h3`

`

const SocialList = styled.ul`
    display: flex;
`

const SocialMedia = styled.li`
    list-style: none;
`

const SocialLink = styled.a`

`

const Copyright = styled.small`
    display: block;
    text-align: center;
`
