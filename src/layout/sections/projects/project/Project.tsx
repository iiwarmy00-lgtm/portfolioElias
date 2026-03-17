import styled from "styled-components";

type ProjectPropsType = {
    title: string
    text: string
    src: string
}


export const Project = (props: ProjectPropsType) => {
    return (
        <StyledProject>
            <Image src={props.src} alt="project"/>
            <Text>{props.text}</Text>
            <Title>{props.title}</Title>
            <Text>{props.text}</Text>
            <Link href={"#"}>Live</Link>
        </StyledProject>
    );
};

const StyledProject = styled.div`
    background-color: #282C33;
    max-width: 330px;
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