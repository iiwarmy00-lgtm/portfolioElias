import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {Skill} from "./skill/Skill.tsx";

export const Skills = () => {
    return (
        <StyledSkills>
            <SectionTitle>#skills</SectionTitle>

            <FlexWrapper wrap="wrap" justify="flex-start" gap="20px">
                <Skill title={"Languages"}
                       description={"TypeScript Lua, Python JavaScript"}/>
                <Skill title={"Databases"}
                       description={"SQLite PostgreSQL, Mongo"}/>
                <Skill title={"Tools"}
                       description={"VSCode Neovim Linux, Figma XFCE Arch, Git Font Awesome"}/>
                <Skill title={"Other"}
                       description={"HTML CSS EJS SCSS, REST Jinja"}/>
                <Skill title={"Frameworks"}
                       description={"React Vue, Disnake Discord.js, Flask Express.js"}/>
            </FlexWrapper>


        </StyledSkills>
    );
};

const StyledSkills = styled.section`
    background-color: #282C33;
    min-height: 100vh;
    padding: 80px 0;
`