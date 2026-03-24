import styled from "styled-components";
import {SectionTitle} from "../../components/SectionTitle.tsx";
import {FlexWrapper} from "../../components/FlexWrapper.tsx";
import aboutImg from "../../assets/photos/photosecond.png";
import {Skills} from "../../layout/sections/skills/Skills.tsx";

export const AboutPage = () => {
    return (
        <StyledAboutPage>
            <SectionTitle>/about-me</SectionTitle>
            <FlexWrapper align={"center"} justify={"space-around"}>
                <Information>
                    <TextAboutAuthor>Hello, i’m Elias!

                        I’m a self-taught front-end developer based in Kyiv, Ukraine. I can develop responsive websites
                        from scratch and raise them into modern user-friendly web experiences.

                        Transforming my creativity and knowledge into a websites has been my passion for over a year. I
                        have been helping various clients to establish their presence online. I always strive to learn
                        about the newest technologies and frameworks.</TextAboutAuthor>
                </Information>
                <Photo src={aboutImg} alt="photo"/>
            </FlexWrapper>

            <Skills/>

            <MyFunFacts>
                <SectionTitle>#my-fun-facts</SectionTitle>
                <FlexWrapper wrap="wrap" justify="flex-start" gap="20px">
                    <FunFact>I like winter more than summer</FunFact>
                    <FunFact>I often bike with my friends</FunFact>
                    <FunFact>I like pizza and pasta</FunFact>
                    <FunFact>I was in Egypt, Poland and Turkey</FunFact>
                    <FunFact>My favorite movie is The Green Mile</FunFact>
                    <FunFact>I am still in school</FunFact>
                    <FunFact>I don’t have any siblings</FunFact>
                </FlexWrapper>
            </MyFunFacts>

        </StyledAboutPage>
    );
};

const StyledAboutPage = styled.div`
    background-color: #282C33;
`

const TextAboutAuthor = styled.p`
    text-align: left;
`

const Photo = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`

const Information = styled.div`

`

const MyFunFacts = styled.div`

`

const FunFact = styled.p`

`