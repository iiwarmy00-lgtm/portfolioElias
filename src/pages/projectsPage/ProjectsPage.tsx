import styled from "styled-components";
import {SectionTitle} from "../../components/SectionTitle.tsx";
import {Project, SmallProject} from "../../layout/sections/projects/project/Project.tsx";
import projectChertImg from "../../assets/projects/chertnodes.png";
import projectImg from "../../assets/projects/projectx.jpg";
import projectKahootImg from "../../assets/projects/kahoot.jpg";
import projectKotikBot from "../../assets/projects/kotikbot.jpg";
import projectPortfolio from "../../assets/projects/portfolio.png";
import {Container} from "../../components/Container.ts";
import {theme} from "../../styles/Theme.ts";


export const ProjectsPage = () => {
    return (
        <StyledProjectsPage>
            <Container>
                <ProjectsPageTitle>
                    <SectionTitle><span>/</span>projects</SectionTitle>
                    <SectionText>List of my projects</SectionText>
                </ProjectsPageTitle>

                <NameGroupProjects><span>#</span>complete-apps</NameGroupProjects>

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

                    <NameGroupProjects><span>#</span>small-projects</NameGroupProjects>

                    <SmallProjects>
                        <SmallProject text={"Discord.js TS JS"} title={"Bot boilerplate"}
                                      description={"Start creating scalable discord.js bot with typescript in seconds"}/>
                        <SmallProject text={"VUE CSS JS"} title={"My blog"}
                                      description={"Front-end of my future blog website written in vue"}/>
                        <SmallProject text={"Figma"}
                                      title={"Chess pro"}
                                      description={"Figma landing page about service for viewing chess tournaments"}/>
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

            </Container>

        </StyledProjectsPage>
    );
};

const StyledProjectsPage = styled.div`
    min-height: 100vh;
    background-color: ${theme.colors.primaryBg};
    padding: 100px 0 80px;

    @media ${theme.media.mobile} {
        padding: 40px 0 60px;
    }
`

const ProjectsPageTitle = styled.div`
    margin-bottom: 68px;

    @media ${theme.media.mobile} {
        margin-bottom: 40px;
        padding: 100px 0 0;
    }
`

const CompleteApp = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
    margin-bottom: 80px;

    @media ${theme.media.mobile} {
        grid-template-columns: 1fr;
        justify-items: center;
        margin-bottom: 48px;
    }
`

const SmallProjects = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
    align-items: stretch;

    @media ${theme.media.mobile} {
        grid-template-columns: 1fr;
        justify-items: center;
        margin-bottom: 48px;
    }
`

const SectionText = styled.p`
    margin: 14px 0 0;
    color: ${theme.colors.text};
    font-size: 16px;

    @media ${theme.media.mobile} {
        margin-top: 8px;
        font-size: 14px;
    }
`

const NameGroupProjects = styled.h3`
    margin: 0 0 48px;
    color: ${theme.colors.text};
    font-size: 32px;
    font-weight: 500;
    
    span {
        color: ${theme.colors.accent};
    }

    @media ${theme.media.mobile} {
        margin-top: 8px;
        font-size: 20px;
    }
`

