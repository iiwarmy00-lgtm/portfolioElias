import styled from "styled-components";
import {Icon} from "./icon/Icon.tsx";

export const SocialBar = () => {
    return (
        <StyledSocialBar>
            <SocialLine/>
            <SocialList>
                <SocialItem>
                    <SocialIcon href="#">
                        <Icon iconId={'git'}/>
                    </SocialIcon>
                </SocialItem>
                <SocialItem>
                    <SocialIcon href="#">
                        <Icon iconId={'browser'}/>
                    </SocialIcon>
                </SocialItem>
                <SocialItem>
                    <SocialIcon href="#">
                        <Icon iconId={'figma'}/>
                    </SocialIcon>
                </SocialItem>
            </SocialList>
        </StyledSocialBar>
    );
};

const StyledSocialBar = styled.div`
    position: fixed;
    top: 180px;
    left: 24px;
    z-index: 10;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
`

const SocialList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 16px;
    
`

const SocialItem = styled.li`
    list-style: none;
`

const SocialIcon = styled.a`

`

const SocialLine = styled.div`
    width: 1px;
    height: 100px;
    background-color: #ABB2BF;
`
