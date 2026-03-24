import styled from "styled-components";
import {Logo} from "../../components/logo/Logo.tsx";
import {Menu} from "../../components/menu/Menu.tsx";
import {LanguageSwitcher} from "../../components/languageSwitcher/LanguageSwitcher.tsx";
import {FlexWrapper} from "../../components/FlexWrapper.tsx";
import {Container} from "../../components/Container.ts";

export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <FlexWrapper justify={"space-between"} align={"center"}>
                    <Logo/>
                    <RightBlock>
                        <Menu/>
                        <LanguageSwitcher/>
                    </RightBlock>
                </FlexWrapper>
            </Container>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    background-color: #282C33;
    display: flex;
    padding: 32px 0;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 99999;
`

const RightBlock = styled.div`
    display: flex;
    gap: 20px;
`

