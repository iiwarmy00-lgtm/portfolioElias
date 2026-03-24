import {Icon} from "../icon/Icon.tsx";
import styled from "styled-components";
import {Link} from "react-router-dom";
import {FlexWrapper} from "../FlexWrapper.tsx";

export const Logo = () => {
    return (
        <FlexWrapper>
            <LinkToMain to="/">
                <Icon height={"16px"} width={"16px"} viewBox={"0 0 60 60"} iconId={'whiteLogo'}/>
                <span>Elias</span>
            </LinkToMain>
        </FlexWrapper>
    );
};

const LinkToMain = styled(Link)`

`

