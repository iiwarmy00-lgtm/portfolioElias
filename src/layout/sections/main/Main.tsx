import styled from "styled-components";
import photo from "../../../assets/photos/photofirst.png";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {Button} from "../../../components/Button.tsx";

export const Main = () => {
    return (
        <StyledMain>
            <FlexWrapper align={"center"} justify={"space-around"}>

                <div>
                    <MainTitle>Elias is a web designer and front-end developer</MainTitle>
                    <h3>He crafts responsive websites where technologies meet creativity</h3>
                    <Button>Contact me!!</Button>
                </div>

                <ImageBlock>
                    <Photo src={photo} alt=""/>
                    <PhotoCaption>
                        <SquareCaptionText/>
                        <CaptionText>Currently working on Portfolio</CaptionText>
                    </PhotoCaption>
                </ImageBlock>

            </FlexWrapper>
        </StyledMain>
    )
}

const StyledMain = styled.div`
    min-height: 100vh;
    background-color: #282C33;
`

const Photo = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`

const MainTitle = styled.h1`

`

const ImageBlock = styled.div`

`

const PhotoCaption = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
`

const CaptionText = styled.span`

`

const SquareCaptionText = styled.span`
    display: inline-block;
    width: 12px;
    height: 12px;
    background-color: #c778dd;
`