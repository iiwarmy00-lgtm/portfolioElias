import styled from "styled-components";

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
            <Image src={props.src} alt="project"/>
            <Text>{props.text}</Text>
            <Title>{props.title}</Title>
            <Text>{props.description}</Text>
            <Link href={" "}>Live</Link>
        </StyledProject>

    );
};

export const SmallProject = (props: SmallProjectPropsType) => {
    return (
        <SmallProjectPropsType>

            <Text>{props.text}</Text>
            <Title>{props.title}</Title>
            <Text>{props.description}</Text>
            <Link href={" "}>Live</Link>
        </SmallProjectPropsType>
    );
};


const StyledProject = styled.div`
    background-color: #282C33;
    max-width: 32%;
    max-height: 391px;

`
const SmallProjectPropsType = styled.div`
    background-color: #282C33;
    max-width: 32%;
    max-height: 391px;
`
const Image = styled.img`
    width: 100%;
    height: 201px;
    object-fit: cover;
`

const Link = styled.a`

`

const Text = styled.p`

`

const Title = styled.h3`

`