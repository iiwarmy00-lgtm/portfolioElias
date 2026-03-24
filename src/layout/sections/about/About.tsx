import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import aboutImg from "../../../assets/photos/photosecond.png";
import {Link} from "react-router-dom";
import {Container} from "../../../components/Container.ts";
import {theme} from "../../../styles/Theme.ts";

export const About = () => {
    return (
        <StyledAbout>
            <Container>
                <AboutHeader>
                    <SectionTitle><span>#</span>about-me</SectionTitle>
                    <Line/>
                </AboutHeader>

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
                        <ReadMoreLink to="/about">Read more -&gt;</ReadMoreLink>
                    </Information>
                    <PhotoWrapper>
                        <Photo src={aboutImg} alt="photo"/>
                    </PhotoWrapper>
                </AboutContent>
            </Container>
        </StyledAbout>
    );
};

const StyledAbout = styled.section`
    padding: 80px 0 100px;
`

const Text = styled.p`
    margin: 0 0 24px;
    text-align: left;
    color: ${theme.colors.font};
    line-height: 1.6;
`

const Photo = styled.img`
    display: block;
    width: 100%;
    height: auto;
    object-fit: contain;
`

const Information = styled.div`
    max-width: 520px;
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

const Line = styled.span`
    display: inline-block;
    width: 326px;
    height: 1px;
    background-color: ${theme.colors.accent};
`

const AboutHeader = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
    margin-bottom: 32px;
`

const AboutContent = styled.div`
    display: grid;
    grid-template-columns: 1fr 420px;
    gap: 10px;
    align-items: start;
`

const PhotoWrapper = styled.div`
    position: relative;
    max-width: 340px;
    justify-self: end;
    align-self: start;
    margin-top: -60px;

    &::after {
        content: "";
        position: absolute;
        left: 45px;
        bottom: 0;
        width: 271px;
        height: 1px;
        background-color: ${theme.colors.accent};
    }
`