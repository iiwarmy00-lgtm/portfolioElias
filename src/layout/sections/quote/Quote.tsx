import styled from "styled-components";
import {Container} from "../../../components/Container.ts";
import {theme} from "../../../styles/Theme.ts";

export const Quote = () => {
    return (
        <StyledQuote>
            <Container>
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
    padding: 32px 0 80px;
`

const QuoteWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
`

const QuoteTextBlock = styled.div`
    position: relative;
    border: 1px solid ${theme.colors.font};
    padding: 20px 32px;
    max-width: 720px;
    width: 100%;
    background-color: ${theme.colors.primaryBg};
`

const QuoteAuthorBlock = styled.div`
    position: relative;
    align-self: flex-end;
    border: 1px solid ${theme.colors.font};
    border-top: none;
    padding: 16px 16px;
    background-color: ${theme.colors.primaryBg};
    right: 165px;
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
`

const QuoteAuthor = styled.cite`
    font-size: 24px;
    color: ${theme.colors.text};
`