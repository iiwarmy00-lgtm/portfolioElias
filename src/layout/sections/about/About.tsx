import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import aboutImg from "../../../assets/photos/photosecond.png";
import {Button} from "../../../components/Button.tsx";

export const About = () => {
    return (
        <StyledAbout>
            <SectionTitle>#about-me</SectionTitle>
            <FlexWrapper align={"center"} justify={"space-around"}>
                <div>
                    <Text>Hello, i’m Elias!

                        I’m a self-taught front-end developer based in Kyiv, Ukraine. I can develop responsive websites
                        from scratch and raise them into modern user-friendly web experiences.

                        Transforming my creativity and knowledge into a websites has been my passion for over a year. I
                        have been helping various clients to establish their presence online. I always strive to learn
                        about the newest technologies and frameworks.</Text>
                    <Button>Read more</Button>
                </div>
                <Photo src={aboutImg} alt="photo"/>
            </FlexWrapper>
        </StyledAbout>
    );
};

const StyledAbout = styled.section`
    min-height: 100vh;
    background-color: #282C33;
`

const Text = styled.h3`
    text-align: left;
`

const Photo = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`