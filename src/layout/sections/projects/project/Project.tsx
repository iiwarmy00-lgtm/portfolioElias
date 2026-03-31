import styled from "styled-components";
import {theme} from "../../../../styles/Theme.ts";

type ProjectPropsType = {
    title: string
    text?: string
    src?: string
    description: string

}

type SmallProjectPropsType = {
    title: string
    text: string
    description: string

}

export const Project = (props: ProjectPropsType) => {
    return (
        <StyledProject>
            <Image src={props.src} alt={props.title}/>
            <Text>{props.text}</Text>
            <Content>
                <Title>{props.title}</Title>
                <Description>{props.description}</Description>

                <ButtonsWrapper>
                    <Link href="#">Live &lt;~&gt;</Link>
                </ButtonsWrapper>
            </Content>
        </StyledProject>

    );
};

export const SmallProject = (props: SmallProjectPropsType) => {
    return (
        <StyledSmallProject>
            <TechText>{props.text}</TechText>

            <Content>
                <Title>{props.title}</Title>
                <Description>{props.description}</Description>
                <ProjectLink href="#">Live &lt;~&gt;</ProjectLink>
            </Content>

        </StyledSmallProject>
    );
};


const StyledProject = styled.div`
    border: 1px solid ${theme.colors.font};
    display: grid;
    flex-direction: column;
    height: 100%;
    width: 100%;
`

const Content = styled.div`
    padding: 16px;
    display: flex;
    flex-direction: column;
    flex: 1;
    align-items: flex-start;
`

const StyledSmallProject = styled.div`
    max-height: 391px;
    border: 1px solid ${theme.colors.font};
    background-color: ${theme.colors.primaryBg};
    display: flex;
    flex-direction: column;
`

const ButtonsWrapper = styled.div`
    display: flex;
    gap: 16px;
    margin-top: auto;
`

const Image = styled.img`
    width: 100%;
    height: 201px;
    object-fit: cover;
    display: block;
    border-bottom: 1px solid ${theme.colors.font};
`

const Link = styled.a`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 8px 16px;
    border: 1px solid ${theme.colors.accent};
    color: ${theme.colors.text};
    font-size: 16px;

    &:hover {
        background-color: ${theme.colors.accent};
        color: ${theme.colors.primaryBg};
    }
`

const Text = styled.p`
    padding: 8px;
    font-size: 14px;
    color: ${theme.colors.text};
    border-bottom: 1px solid ${theme.colors.text};
`

const Description = styled.p`
    margin: 0 0 16px;
    font-size: 16px;
    color: ${theme.colors.font};
    line-height: 1.4;
`

const Title = styled.h3`
    margin: 0 0 16px;
    font-size: 24px;
    font-weight: 500;
    color: ${theme.colors.text};
`

const TechText = styled.p`
    margin: 0;
    padding: 8px;
    font-size: 14px;
    color: ${theme.colors.font};
    border-bottom: 1px solid ${theme.colors.font};
`

const ProjectLink = styled.a`
    margin-top: auto;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 8px 16px;
    border: 1px solid ${theme.colors.accent};
    color: ${theme.colors.text};
    font-size: 16px;
    text-decoration: none;

    &:hover {
        background-color: ${theme.colors.accent};
        color: ${theme.colors.primaryBg};
    }
`