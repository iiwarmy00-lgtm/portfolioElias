import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {Skill} from "./skill/Skill.tsx";
import {theme} from "../../../styles/Theme.ts";
import {Container} from "../../../components/Container.ts";
import {Icon} from "../../../components/icon/Icon.tsx";


export const Skills = () => {
    return (
        <StyledSkills>
            <Container>
                <SectionHeader>
                    <SectionTitle><span>#</span>skills</SectionTitle>
                </SectionHeader>

                    <SkillsGrid>
                        <IconGroup>
                            <Icon height={"285px"} width={"350px"} viewBox={"0 0 350 285"} iconId={'iconsGroup'}/>
                        </IconGroup>

                        <LanguagesSkill
                            title={"Languages"}
                            description={"TypeScript Lua " +
                                "Python JavaScript"}
                        />
                        <DatabasesSkill
                            title={"Databases"}
                            description={"SQLite PostgreSQL " +
                                "Mongo"}
                        />
                        <ToolsSkill
                            title={"Tools"}
                            description={"VSCode Neovim Linux " +
                                "Figma XFCE Arch " +
                                "Git Font Awesome"}
                        />
                        <OtherSkill
                            title={"Other"}
                            description={"HTML CSS EJS SCSS " +
                                "REST Jinja"}
                        />
                        <FrameworksSkill
                            title={"Frameworks"}
                            description={"React Vue " +
                                "Disnake Discord.js " +
                                "Flask Express.js"}
                        />
                    </SkillsGrid>
            </Container>
        </StyledSkills>
    );
};

const StyledSkills = styled.section`
    padding: 60px 0 60px;
`

const IconGroup = styled.div`
    position: absolute;
    z-index: 0;
`

const SectionHeader = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
    position: relative;
    
    &::after {
        content: "";
        display: inline-block;
        width: 239px;
        height: 1px;
        background-color: ${theme.colors.accent};
    }
`

const SkillsGrid = styled.div`
    
    position: relative;
    display: grid;
    grid-template-columns: 190px 190px 190px;
    grid-template-areas:
        "languages databases tools"
        ". other frameworks";
    gap: 16px;
    margin-top: 40px;
    justify-content: end;
    align-items: start;
`

const LanguagesSkill = styled(Skill)`
    grid-area: languages;
`

const DatabasesSkill = styled(Skill)`
    grid-area: databases;
`

const ToolsSkill = styled(Skill)`
    grid-area: tools;
`

const OtherSkill = styled(Skill)`
    grid-area: other;
    
`

const FrameworksSkill = styled(Skill)`
    grid-area: frameworks;
`
