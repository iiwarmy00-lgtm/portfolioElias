import styled from "styled-components";

type SkillPropsType = {
    title: string,
    description: string,
}

export const Skill = (props: SkillPropsType) => {
    return (
        <StyledSkill>
            <SkillTitle>{props.title}</SkillTitle>
            <SkillText>{props.description}</SkillText>
        </StyledSkill>
    );
};

const StyledSkill = styled.div`
    padding: 20px;
    border: 1px solid #ABB2BF;
    box-sizing: border-box;
    flex-basis: 30%
`

const SkillTitle = styled.h3`
    font-size: 16px;
    margin-bottom: 8px;
    color: white;
`

const SkillText = styled.p`
    font-size: 16px;
    color: #ABB2BF;
    line-height: 1.6;
`