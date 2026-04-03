import styled from "styled-components";
import {theme} from "../../../../styles/Theme.ts";

type SkillPropsType = {
    title: string,
    description: string,
    className?: string,
}

export const Skill = (props: SkillPropsType) => {
    return (
        <StyledSkill className={props.className}>
            <SkillTitle>{props.title}</SkillTitle>
            <SkillText>{props.description}</SkillText>
        </StyledSkill>
    );
};

const StyledSkill = styled.div`
    border: 1px solid ${theme.colors.font};
    background-color: transparent;

    @media ${theme.media.mobile} {
        max-width: 320px;
    }
`

const SkillTitle = styled.h3`
    margin: 0;
    padding: 8px;
    font-size: 16px;
    font-weight: 600;
    color: ${theme.colors.text};
    border-bottom: 1px solid ${theme.colors.font};

    @media ${theme.media.mobile} {
        font-size: 14px;
    }
`

const SkillText = styled.div`
    margin: 0;
    padding: 8px;
    font-size: 16px;
    font-weight: 400;
    color: ${theme.colors.font};
    white-space: pre-line;
    line-height: 1.3;

    @media ${theme.media.mobile} {
        font-size: 14px;
        line-height: 1.4;
    }
`