import styled from "styled-components";
import {Icon} from "./icon/Icon.tsx";
import {theme} from "../styles/Theme.ts";

export const SocialBar = () => {
    return (
        <StyledSocialBar>
            <SocialLine/>
            <SocialList>
                <SocialItem>
                    <SocialIcon href="#" delay={0.5}>
                        <Icon height={"25px"} width={"25px"} viewBox={"0 0 25 25"} iconId={'git'}/>
                    </SocialIcon>
                </SocialItem>
                <SocialItem>
                    <SocialIcon href="#" delay={0.7}>
                        <Icon height={"25px"} width={"25px"} viewBox={"0 0 25 25"} iconId={'browser'}/>
                    </SocialIcon>
                </SocialItem>
                <SocialItem>
                    <SocialIcon href="#" delay={0.9}>
                        <Icon height={"30px"} width={"30px"} viewBox={"0 0 25 25"} iconId={'figma'}/>
                    </SocialIcon>
                </SocialItem>
            </SocialList>
        </StyledSocialBar>
    );
};

const StyledSocialBar = styled.div`
    position: absolute;
    left: 20px;
    z-index: 99999999;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;

    @media ${theme.media.mobile}{
        display: none;
    }
    
    
`

const SocialList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 16px;
    align-items: center;
    
`

const SocialItem = styled.li`
    list-style: none;
`

const SocialIcon = styled.a<{ delay: number }>`
    opacity: 0;
    transform: translateY(10px);

    animation: showIcon 0.4s ease forwards;
    animation-delay: ${({ delay }) => delay}s;

    @keyframes showIcon {
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`

const SocialLine = styled.div`
    width: 1px;
    height: 190px;
    background-color: #ABB2BF;
    
    animation: growLine 0.5s ease forwards;

    @keyframes growLine {
        from {
            height: 0;
        }
        to {
            height: 190px; 
        }
    }
`
