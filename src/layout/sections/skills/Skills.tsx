import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {Skill} from "./skill/Skill.tsx";
import {theme} from "../../../styles/Theme.ts";
import {Container} from "../../../components/Container.ts";
import {Dots} from "../../../styles/Global.styled.ts";
import {Icon} from "../../../components/icon/Icon.tsx";

export const Skills = () => {
    return (
        <StyledSkills>
            <Container>
                <SectionHeader>
                    <SectionTitle><span>#</span>skills</SectionTitle>
                    <Line/>
                </SectionHeader>

                <SkillsContent>
                    <DecorBlock>
                        <Dots/>
                        <PurpleLogo>
                            <Icon iconId={'purpleLogo'}/>
                        </PurpleLogo>
                    </DecorBlock>

                    <SkillsGrid>
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
                </SkillsContent>
            </Container>
        </StyledSkills>
    );
};

const StyledSkills = styled.section`
    padding: 30px 0 150px;
`

const SectionHeader = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
`

const SkillsContent = styled.div`
    display: grid;
    grid-template-columns: 1fr 542px;
    gap: 40px;
    align-items: start;
`

const DecorBlock = styled.div`
    position: relative;
    min-height: 260px;
`

const SkillsGrid = styled.div`
    display: grid;
    grid-template-columns: 180px 190px 200px;
    grid-template-areas:
        "languages databases tools"
        ". other frameworks";
    gap: 16px;
    margin-top: 40px;
`

const Line = styled.span`
    display: inline-block;
    width: 239px;
    height: 1px;
    background-color: ${theme.colors.accent};
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

const PurpleLogo = styled.div`
    position: absolute;
    top: 100px;
    left: 50px;
    z-index: 0;

    svg {
        width: 160px;
        height: 160px;
        fill: ${theme.colors.accent};
    }
`