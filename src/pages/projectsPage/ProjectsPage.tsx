import styled from "styled-components";
import {SectionTitle} from "../../components/SectionTitle.tsx";
import {FlexWrapper} from "../../components/FlexWrapper.tsx";
import {Project, SmallProject} from "../../layout/sections/projects/project/Project.tsx";
import projectChertImg from "../../assets/projects/chertnodes.png";
import projectImg from "../../assets/projects/projectx.jpg";
import projectKahootImg from "../../assets/projects/kahoot.jpg";
import projectKotikBot from "../../assets/projects/kotikbot.jpg";
import projectPortfolio from "../../assets/projects/portfolio.png";


export const ProjectsPage = () => {
    return (
        <StyledProjectsPage>

            <ProjectsPageTitle>
                <SectionTitle>/projects</SectionTitle>
                <SectionText>List of my projects</SectionText>
            </ProjectsPageTitle>

            <NameGroupProjects>#complete-apps</NameGroupProjects>

            <FlexWrapper direction="column">

                <CompleteApp>

                    <Project src={projectChertImg} text={"HTML SCSS Python Flask"} title={"ChertNodes"}
                             description={"Minecraft servers hosting"}/>
                    <Project src={projectKahootImg} text={"CSS Express Node.js"} title={"Kahoot Answers Viewer"}
                             description={"Get answers to your kahoot quiz"}/>
                    <Project src={projectImg} text={"React Express Discord.js Node.js HTML SCSS Python Flask"}
                             title={"ProtectX"} description={"Discord anti-crash bot"}/>
                    <Project src={projectKotikBot} text={"HTML CSS JS"} title={"Kotik Bot"}
                             description={"Multi-functional discord bot"}/>
                    <Project src={projectPortfolio} text={"Vue TS Less"} title={"Portfolio"}
                             description={"You’re using it rn"}/>
                </CompleteApp>

                <NameGroupProjects>#small-projects</NameGroupProjects>

                <SmallProjects>
                    <SmallProject text={"Discord.js TS JS"} title={"Bot boilerplate"}
                             description={"Start creating scalable discord.js bot with typescript in seconds"}/>
                    <SmallProject text={"VUE CSS JS"} title={"My blog"}
                             description={"Front-end of my future blog website written in vue"}/>
                    <SmallProject text={"Figma"}
                             title={"Chess pro"} description={"Figma landing page about service for viewing chess tournaments"}/>
                    <SmallProject text={"Figma"} title={"Crash protect website"}
                             description={"Figma template for website about anti-raid, anti-crash discord bot"}/>
                    <SmallProject text={"HTML CSS"} title={"CSS expirements"}
                             description={"Collection of my different little projects in css"}/>
                    <SmallProject text={"Lua NeoVim"} title={"Web Dev nvim config"}
                             description={"Config for neovim perfect for web developer"}/>
                    <SmallProject text={"Python Quart HTML"} title={"Ooku"}
                             description={"Simple link shortener with auth"}/>
                    <SmallProject text={"Figma"} title={"School website"}
                             description={"Figma template website for my school"}/>
                </SmallProjects>

            </FlexWrapper>
        </StyledProjectsPage>
    );
};

const StyledProjectsPage = styled.div`
    min-height: 100vh;
    background-color: #282C33;
`

const ProjectsPageTitle = styled.div`
    width: 100%;
    height: 201px;
    object-fit: cover;
`

const CompleteApp = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
`

const SmallProjects = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
`

const SectionText = styled.h4`

`

const NameGroupProjects = styled.h3`

`

