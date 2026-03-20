import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {Project} from "./project/Project.tsx";
import projectChertImg from "../../../assets/projects/chertnodes.png";
import projectImg from "../../../assets/projects/projectx.jpg";
import projectKahootImg from "../../../assets/projects/kahoot.jpg";
import {Link} from 'react-router-dom';


export const Projects = () => {
    return (
        <StyledProjects>
            <ProjectsHeader>
                <SectionTitle>#projects</SectionTitle>
                <LinkViewAll to="/projects">View all</LinkViewAll>
            </ProjectsHeader>

            <FlexWrapper justify="space-between">

                <Project src={projectChertImg} text={"HTML SCSS Python Flask"} title={"ChertNodes"}
                         description={"Minecraft servers hosting"}/>
                <Project src={projectImg} text={"React Express Discord.js Node.js HTML SCSS Python Flask"}
                         title={"ProtectX"} description={"Discord anti-crash bot"}/>
                <Project src={projectKahootImg} text={"CSS Express Node.js"} title={"Kahoot Answers Viewer"}
                         description={"Get answers to your kahoot quiz"}/>

            </FlexWrapper>
        </StyledProjects>
    );
};

const StyledProjects = styled.section`
    min-height: 100vh;
    background-color: #282C33;
`

const LinkViewAll = styled(Link)`

`

const ProjectsHeader = styled.div`
    display: flex
`