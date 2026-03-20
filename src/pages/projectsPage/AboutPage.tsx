import styled from "styled-components";
import {SectionTitle} from "../../components/SectionTitle.tsx";
import {FlexWrapper} from "../../components/FlexWrapper.tsx";
import aboutImg from "../../assets/photos/photosecond.png";

export const AboutPage = () => {
    return (
        <StyledAboutPage>
            <SectionTitle>/about-me</SectionTitle>
            <FlexWrapper align={"center"} justify={"space-around"}>
                <div>
                    <TextAboutAuthor>Hello, i’m Elias!

                        I’m a self-taught front-end developer based in Kyiv, Ukraine. I can develop responsive websites
                        from scratch and raise them into modern user-friendly web experiences.

                        Transforming my creativity and knowledge into a websites has been my passion for over a year. I
                        have been helping various clients to establish their presence online. I always strive to learn
                        about the newest technologies and frameworks.</TextAboutAuthor>
                </div>
                <Photo src={aboutImg} alt="photo"/>
            </FlexWrapper>
        </StyledAboutPage>
    );
};

const StyledAboutPage = styled.div`

`

const TextAboutAuthor = styled.p`
    text-align: left;
`

const Photo = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`