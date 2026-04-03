import styled from "styled-components";
import {Container} from "../../../components/Container.ts";
import {theme} from "../../../styles/Theme.ts";
import {Icon} from "../../../components/icon/Icon.tsx";

export const Quote = () => {
    return (
        <StyledQuote>
            <Container>
                <IconRect>
                    <Icon height={"90px"} width={"90px"} viewBox={"0 0 90 90"} iconId="rectangle"/>
                </IconRect>
                <QuoteWrapper>

                    <QuoteTextBlock>
                        <QuoteMarkLeft>"</QuoteMarkLeft>
                        <QuoteText>With great power comes great electricity bill</QuoteText>
                    </QuoteTextBlock>

                    <QuoteAuthorBlock>
                        <QuoteMarkRight>"</QuoteMarkRight>
                        <QuoteAuthor>- Dr. Who</QuoteAuthor>
                    </QuoteAuthorBlock>
                </QuoteWrapper>
            </Container>
        </StyledQuote>
    );
};

const StyledQuote = styled.section`
    padding: 40px 0 40px;
    
`

const IconRect = styled.div`
    position: absolute;
    right: -10px;
    z-index: 1;

    @media ${theme.media.mobile}{
        display: none;
    }
`

const QuoteWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;

    @media ${theme.media.mobile} {
        align-items: flex-start;
    }
`

const QuoteTextBlock = styled.div`
    position: relative;
    border: 1px solid ${theme.colors.font};
    padding: 20px 32px;
    max-width: 720px;
    width: 100%;
    background-color: ${theme.colors.primaryBg};

    @media ${theme.media.mobile} {
        padding: 16px;
        max-width: 328px;
    }
`

const QuoteAuthorBlock = styled.div`
    position: relative;
    align-self: flex-end;
    border: 1px solid ${theme.colors.font};
    border-top: none;
    padding: 16px 16px;
    background-color: ${theme.colors.primaryBg};
    right: 165px;

    @media ${theme.media.mobile} {
        margin-right: 0;
        align-self: flex-end;
        position: relative;
        border: 1px solid ${theme.colors.font};
        border-top: none;
        padding: 16px 16px;
        background-color: ${theme.colors.primaryBg};
        right: 3px;
    }
`

const QuoteMarkLeft = styled.div`
    position: absolute;
    top: -18px;
    left: 16px;
    padding: 0 8px;
    background-color: ${theme.colors.primaryBg};
    color: ${theme.colors.font};
    font-size: 32px;
    font-weight: 700;
`

const QuoteMarkRight = styled.div`
    position: absolute;
    top: -18px;
    right: 16px;
    padding: 0 8px;
    background-color: ${theme.colors.primaryBg};
    color: ${theme.colors.font};
    font-size: 32px;
    font-weight: 700;
`

const QuoteText = styled.p`
    font-size: 24px;
    line-height: 1.4;
    color: ${theme.colors.text};
    margin: 0;

    @media ${theme.media.mobile} {
        font-size: 16px;
    }
`

const QuoteAuthor = styled.cite`
    font-size: 24px;
    color: ${theme.colors.text};

    @media ${theme.media.mobile} {
        font-size: 16px;
    }
`