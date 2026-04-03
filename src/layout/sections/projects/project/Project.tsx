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

    @media ${theme.media.mobile} {
        max-width: 320px;
        margin: 0 auto;
    }
`

const Content = styled.div`
    padding: 16px;
    display: flex;
    flex-direction: column;
    flex: 1;
    align-items: flex-start;

    @media ${theme.media.mobile} {
        padding: 12px;
        gap: 12px;
    }
`

const StyledSmallProject = styled.div`
    max-height: 391px;
    border: 1px solid ${theme.colors.font};
    background-color: ${theme.colors.primaryBg};
    display: flex;
    flex-direction: column;

    @media ${theme.media.mobile} {
        max-width: 320px;
        width: 100%;
    }
`

const ButtonsWrapper = styled.div`
    display: flex;
    gap: 16px;
    margin-top: auto;

    @media ${theme.media.mobile} {
        width: 100%;
    }
`

const Image = styled.img`
    width: 100%;
    height: 201px;
    object-fit: cover;
    display: block;
    border-bottom: 1px solid ${theme.colors.font};

    @media ${theme.media.mobile} {
        height: 160px;
    }
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

    @media ${theme.media.mobile} {
        width: 100%;
        font-size: 14px;

        &:hover {
            background-color: ${theme.colors.accent};
            color: ${theme.colors.primaryBg};
        }
    }
    
`

const Text = styled.p`
    padding: 8px;
    font-size: 14px;
    color: ${theme.colors.text};
    border-bottom: 1px solid ${theme.colors.text};

    @media ${theme.media.mobile} {
        font-size: 12px;
    }
`

const Description = styled.p`
    margin: 0 0 16px;
    font-size: 16px;
    color: ${theme.colors.font};
    line-height: 1.4;

    @media ${theme.media.mobile} {
        font-size: 14px;
        margin-bottom: 8px;
    }
`

const Title = styled.h3`
    margin: 0 0 16px;
    font-size: 24px;
    font-weight: 500;
    color: ${theme.colors.text};

    @media ${theme.media.mobile} {
        font-size: 18px;
        margin-bottom: 8px;
    }
`

const TechText = styled.p`
    margin: 0;
    padding: 8px;
    font-size: 14px;
    color: ${theme.colors.font};
    border-bottom: 1px solid ${theme.colors.font};

    @media ${theme.media.mobile} {
        font-size: 12px;
    }
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

    @media ${theme.media.mobile} {
        width: 100%;
        font-size: 14px;

        &:hover {
            background-color: ${theme.colors.accent};
            color: ${theme.colors.primaryBg};
        }
    }
    
`