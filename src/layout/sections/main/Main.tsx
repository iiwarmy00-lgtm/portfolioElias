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
                <Photo src={photo} alt=""/>
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