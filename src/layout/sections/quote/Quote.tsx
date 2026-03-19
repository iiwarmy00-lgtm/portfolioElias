import styled from "styled-components";

export const Quote = () => {
    return (
        <StyledQuote>
            <BlockQuoteText>
                <QuoteText>With great power comes great electricity bill</QuoteText>
            </BlockQuoteText>
            <QuoteAuthor>- Dr. Who</QuoteAuthor>
        </StyledQuote>
    );
};

const StyledQuote = styled.section`
    background-color: #282C33;
    
`

const BlockQuoteText = styled.blockquote`
    
`

const QuoteText = styled.p`

`

const QuoteAuthor = styled.cite`

`