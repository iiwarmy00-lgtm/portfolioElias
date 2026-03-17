import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {Project} from "./project/Project.tsx";
import projectChertImg from "../../../assets/projects/chertnodes.png";
import projectImg from "../../../assets/projects/projectx.jpg";
import projectKahootImg from "../../../assets/projects/kahoot.jpg";


export const Projects = () => {
    return (
        <StyledProjects>
            <SectionTitle>#projects</SectionTitle>
            <FlexWrapper justify="space-between">
                <Project src={projectChertImg} text={"HTML SCSS Python Flask"} title={"ChertNodes"} text={"Minecraft servers hosting"}/>
                <Project src={projectImg} text={"React Express Discord.js Node.js HTML SCSS Python Flask"} title={"ProtectX"} text={"Discord anti-crash bot"}/>
                <Project src={projectKahootImg} text={"CSS Express Node.js"} title={"Kahoot Answers Viewer"} text={"Get answers to your kahoot quiz"}/>
            </FlexWrapper>
        </StyledProjects>
    );
};

const StyledProjects = styled.section`
    min-height: 100vh;
    background-color: #282C33;
`