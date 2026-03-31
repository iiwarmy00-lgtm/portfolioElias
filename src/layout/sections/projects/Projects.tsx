import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {Project} from "./project/Project.tsx";
import projectChertImg from "../../../assets/projects/chertnodes.png";
import projectImg from "../../../assets/projects/projectx.jpg";
import projectKahootImg from "../../../assets/projects/kahoot.jpg";
import {Link} from 'react-router-dom';
import {Container} from "../../../components/Container.ts";
import {theme} from "../../../styles/Theme.ts";
import {Icon} from "../../../components/icon/Icon.tsx";


export const Projects = () => {
    return (
        <StyledProjects>
            <Container>
                <ProjectsHeader>
                    <TitleWrapper>
                        <SectionTitle><span>#</span>projects</SectionTitle>
                    </TitleWrapper>

                    <LinkViewAll to="/projects">View all ~~&gt;</LinkViewAll>
                </ProjectsHeader>

                <IconRect>
                    <Icon height={"155px"} width={"155px"} viewBox={"0 0 155 155"} iconId="rectangle"/>
                </IconRect>



                <FlexWrapper justify="space-between" gap="15px">

                    <Project src={projectChertImg} text={"HTML SCSS Python Flask"} title={"ChertNodes"}
                             description={"Minecraft servers hosting"}/>
                    <Project src={projectImg} text={"React Express Discord.js Node.js HTML SCSS Python Flask"}
                             title={"ProtectX"} description={"Discord anti-crash bot"}/>
                    <Project src={projectKahootImg} text={"CSS Express Node.js"} title={"Kahoot Answers Viewer"}
                             description={"Get answers to your kahoot quiz"}/>

                </FlexWrapper>
            </Container>
        </StyledProjects>
    );
};

const StyledProjects = styled.section`
    padding: 60px 0 60px;
`

const LinkViewAll = styled(Link)`

`

const ProjectsHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 48px;
`

const TitleWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
    position: relative;

    &::after {
        content: "";
        display: inline-block;
        width: 511px;
        height: 1px;
        background-color: ${theme.colors.accent};
    }
    
`

const IconRect = styled.div`
    position: absolute;
    right: -90px;
    z-index: 1;
`
