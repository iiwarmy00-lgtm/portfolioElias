import styled from "styled-components";
import {Logo} from "../../../components/logo/Logo.tsx";
import {Icon} from "../../../components/icon/Icon.tsx";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";

export const Footer = () => {
    return (
        <StyledFooter>
            <FlexWrapper align={"flex-start"} justify={"space-between"}>
                <Logo/>
                <Text>elias@elias-dev.ml</Text>
                <Text>Web designer and front-end developer</Text>

                <SocialList>
                    <SocialMedia>
                        <SocialLink>
                            <Icon height={"32px"} width={"32px"} viewBox={"0 0 32px 32px"} iconId={"git"}/>
                        </SocialLink>
                    </SocialMedia>

                    <SocialMedia>
                        <SocialLink>
                            <Icon height={"32px"} width={"32px"} viewBox={"0 0 32px 32px"} iconId={"figma"}/>
                        </SocialLink>
                    </SocialMedia>

                    <SocialMedia>
                        <SocialLink>
                            <Icon height={"32px"} width={"32px"} viewBox={"0 0 32px 32px"} iconId={"discord"}/>
                        </SocialLink>
                    </SocialMedia>
                </SocialList>
                <Copyright>© Copyright 2022. Made by Elias</Copyright>
            </FlexWrapper>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
    background-color: #282C33;
    min-height: 20vh;
`

const Text = styled.span`

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

`
