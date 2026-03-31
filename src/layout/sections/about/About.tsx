import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import aboutImg from "../../../assets/photos/photosecond.png";
import {Link} from "react-router-dom";
import {Container} from "../../../components/Container.ts";
import {theme} from "../../../styles/Theme.ts";
import {Icon} from "../../../components/icon/Icon.tsx";

export const About = () => {
    return (
        <StyledAbout>
            <Container>
                <AboutHeader>
                    <SectionTitle><span>#</span>about-me</SectionTitle>
                </AboutHeader>

                <IconRect>
                    <Icon height={"155px"} width={"155px"} viewBox={"0 0 155 155"} iconId="rectangle"/>
                </IconRect>
                <Dots>
                    <Icon height={"85px"} width={"85px"} viewBox={"0 0 85 85"} iconId={'dots'}/>
                </Dots>
                {/*<DotsRight>*/}
                {/*    <Icon height={"105px"} width={"105px"} viewBox={"0 0 105 105"} iconId={'dots'}/>*/}
                {/*</DotsRight>*/}
                {/*<DotsLeft>*/}
                {/*    <Icon height={"60px"} width={"105px"} viewBox={"0 0 105 60"} iconId={'dots'}/>*/}
                {/*</DotsLeft>*/}

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
    padding: 60px 0 60px;
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
    z-index: 1;
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

const AboutHeader = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
    position: relative;
    margin-bottom: 45px;

    &::after {
        content: "";
        display: inline-block;
        width: 326px;
        height: 1px;
        background-color: ${theme.colors.accent};
    }

`

const AboutContent = styled.div`
    display: flex;
    gap: 10px;
    justify-content: space-between;
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

const IconRect = styled.div`
    position: absolute;
    left: -90px;
    z-index: 1;
`

const Dots = styled.div`
    position: relative;
    top: 80px;
    right: -770px;
    z-index: 6;
    width: 85px;
`

// const DotsRight = styled.div`
//     position: absolute;
//     right: 100px;
//     z-index: 6;
//     width: 105px;
//     //bottom: 0;
// `

// const DotsLeft = styled.div`
//     position: relative;
//     top: 320px;
//     right: -950px;
//     z-index: 8;
//     width: 120px;
// `