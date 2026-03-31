import styled from "styled-components";
import photo from "../../../assets/photos/photofirst.png";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {Link} from "react-router-dom";
import {Container} from "../../../components/Container.ts";
import {theme} from "../../../styles/Theme.ts";
import {Icon} from "../../../components/icon/Icon.tsx";
import {TypingText} from "../../../components/TypingText.tsx";


export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper align={"center"} justify={"space-between"}>

                    <Introduction>
                        <MainTitle>Elias is a <span>web designer</span> and <span>front-end developer</span></MainTitle>
                        <TextAboutAuthor>
                            <TypingText text="He crafts responsive websites where technologies meet
                            creativity"/></TextAboutAuthor>
                        <ReadMoreLink to="/contacts">Contact me!!</ReadMoreLink>
                    </Introduction>

                    <ImageBlock>
                        <PhotoWrapper>
                            <PurpleLogo>
                                <Icon iconId={'purpleLogo'}/>
                            </PurpleLogo>
                            <Dots>
                                <Icon height={"85px"} width={"85px"} viewBox={"0 0 85 85"} iconId={'dots'}/>
                            </Dots>

                            <Photo src={photo} alt=""/>
                        </PhotoWrapper>

                        <PhotoCaption>
                            <SquareCaptionText/>
                            <CaptionText>Currently working on <span>Portfolio</span></CaptionText>
                        </PhotoCaption>
                    </ImageBlock>

                </FlexWrapper>
            </Container>
        </StyledMain>
    )
}

const StyledMain = styled.section`
    display: flex;
    align-items: center;
    padding: 100px 0 100px;
`

const Photo = styled.img`
    position: absolute;
    bottom: -40%;
    left: 38%;
    transform: translateX(-50%) scale(1.3);
    width: 100%;
    max-width: none;
    height: auto;
    object-fit: cover;
    display: block;
    z-index: 3;
`

const PhotoWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 500px;
    overflow: hidden;
`

const MainTitle = styled.h1`
    font-weight: 600;
    font-size: 32px;
    line-height: 1.3;
    margin: 40px 0;

    span {
        color: ${theme.colors.accent};
    }
`

const ImageBlock = styled.div`
    position: relative;
    width: 470px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`

const PhotoCaption = styled.div`
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    max-width: 402px;
    border: 1px solid ${theme.colors.font};
    padding: 8px 12px;
    display: flex;
    align-items: center;
    gap: 10px;
    background-color: ${theme.colors.primaryBg};
    z-index: 3;
`

const CaptionText = styled.span`
    font-size: 16px;
    color: ${theme.colors.font};

    span {
        font-weight: 600;
        color: ${theme.colors.text};
    }
`

const SquareCaptionText = styled.span`
    width: 16px;
    height: 16px;
    background-color: ${theme.colors.accent};
    display: inline-block;
    flex-shrink: 0;
`

const ReadMoreLink = styled(Link)`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 8px 16px;
    border: 1px solid ${theme.colors.accent};
    color: ${theme.colors.text};
    font-weight: 400;
    margin-top: 24px;
    transition: 0.2s ease-in-out;

    &:hover {
        background-color: ${theme.colors.accent};
        color: ${theme.colors.primaryBg};
    }
`

const TextAboutAuthor = styled.div`
    font-weight: 400;
    font-size: 16px;
    line-height: 1.6;
    margin: 0 0 24px;
    min-height: 80px;
`

const Introduction = styled.div`
    max-width: 537px;
    max-height: 227px;
    top: 200px;
    left: 171px;
    text-align: left;
`

const PurpleLogo = styled.div`
    position: absolute;
    top: 170px;
    left: 0;
    z-index: 0;

    svg {
        width: 160px;
        height: 160px;
        fill: ${theme.colors.accent};
    }
`

const Dots = styled.div`
    position: absolute;
    top: 320px;
    right: 60px;
    z-index: 6;
`

