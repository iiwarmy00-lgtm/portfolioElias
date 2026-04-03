import styled from "styled-components";
import {SectionTitle} from "../../components/SectionTitle.tsx";
import aboutImg from "../../assets/photos/photosecond.png";
import {Skills} from "../../layout/sections/skills/Skills.tsx";
import {Container} from "../../components/Container.ts";
import {theme} from "../../styles/Theme.ts";
import {Icon} from "../../components/icon/Icon.tsx";

export const AboutPage = () => {
    return (
        <StyledAboutPage>
            <Container>
                <SectionTitle><span>/</span>about-me</SectionTitle>
                <SecondaryTitle>Who am i?</SecondaryTitle>
                <AboutContent>
                    <Information>
                        <Text>Hello, i’m Elias!</Text>
                        <Text>I’m a self-taught front-end developer based in Kyiv, Ukraine. I can develop responsive
                            websites
                            from scratch and raise them into modern user-friendly web experiences.</Text>
                        <Text>Transforming my creativity and knowledge into a websites has been my passion for over a
                            year. I
                            have been helping various clients to establish their presence online. I always strive to
                            learn
                            about the newest technologies and frameworks.</Text>
                    </Information>

                    <Dots>
                        <Icon height={"85px"} width={"85px"} viewBox={"0 0 85 85"} iconId={'dots'}/>
                    </Dots>

                    <PhotoWrapper>
                        <Photo src={aboutImg} alt="photo"/>
                    </PhotoWrapper>
                </AboutContent>
            </Container>

            {/*<SkillsWrapper>*/}
            <Skills/>
            {/*</SkillsWrapper>*/}
            <Container>
                <MyFunFacts>
                    <SectionTitle><span>#</span>my-fun-facts</SectionTitle>
                    <FunFactsGrid>
                        <FunFact>I like winter more than summer</FunFact>
                        <FunFact>I often bike with my friends</FunFact>
                        <FunFact>I like <span>pizza</span> and <span>pasta</span></FunFact>
                        <FunFact>I was in <span>Egypt</span>, <span>Poland</span> and <span>Turkey</span></FunFact>
                        <FunFact>My favorite movie is <span>The Green Mile</span></FunFact>
                        <FunFact>I am still in school</FunFact>
                        <FunFact>I don’t have any siblings</FunFact>
                    </FunFactsGrid>
                    <PurpleLogo>
                        <Icon iconId={'purpleLogo'}/>
                    </PurpleLogo>
                </MyFunFacts>

            </Container>

        </StyledAboutPage>
    );
};

const StyledAboutPage = styled.div`
    min-height: 100vh;
    background-color: ${theme.colors.primaryBg};
    padding: 100px 0 80px;

    @media ${theme.media.mobile} {
        padding: 120px 0 100px;
    }
`

const AboutContent = styled.div`
    display: flex;
    gap: 10px;
    justify-content: space-between;

    @media ${theme.media.mobile} {
        flex-direction: column;
        align-items: center;
        gap: 24px;
    }
`

const Photo = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;

    @media ${theme.media.mobile} {
        height: auto;
    }
`

const Information = styled.div`
    max-width: 520px;
    margin-top: 150px;

    @media ${theme.media.mobile} {
        flex-direction: column;
        align-items: center;
        gap: 24px;
    }
`

const MyFunFacts = styled.div`
    margin-top: 80px;
`

const FunFact = styled.p`
    margin: 0;
    padding: 8px 12px;
    border: 1px solid ${theme.colors.text};
    color: ${theme.colors.text};
    font-size: 14px;
    line-height: 1.4;
    width: fit-content;

    span {
        color: ${theme.colors.font};
    }
`

const Text = styled.p`
    margin: 0 0 20px;
    color: ${theme.colors.font};
    line-height: 1.6;

    @media ${theme.media.mobile} {
        font-size: 16px;
        margin-bottom: 16px;
    }
`

const PhotoWrapper = styled.div`
    position: relative;
    max-width: 340px;
    justify-self: end;
    align-self: start;
    margin-top: 30px;

    &::after {
        content: "";
        position: absolute;
        left: 45px;
        bottom: 0;
        width: 271px;
        height: 1px;
        background-color: ${theme.colors.accent};
    }

    @media ${theme.media.mobile} {
        display: none;
    }
`

const FunFactsGrid = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    margin-top: 32px;
    max-width: 700px;
`

const SecondaryTitle = styled.p`
    margin: 8px 0 0;
    color: ${theme.colors.font};
    font-size: 16px;

    @media ${theme.media.mobile} {
        font-size: 14px;
    }
`

const Dots = styled.div`
    position: relative;
    top: 80px;
    left: 180px;
    z-index: 6;
    width: 85px;
    height: 85px;

    @media ${theme.media.mobile} {
        display: none;
    }
`
const PurpleLogo = styled.div`
    position: absolute;
    bottom: 50px;
    right: 100px;
    z-index: 0;

    svg {
        width: 200px;
        height: 200px;
    }

    @media ${theme.media.mobile} {
        display: none;
    }
`
