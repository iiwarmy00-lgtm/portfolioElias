import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {Icon} from "../../../components/icon/Icon.tsx";
import {Container} from "../../../components/Container.ts";
import {theme} from "../../../styles/Theme.ts";


export const Contacts = () => {
    return (
        <StyledContacts>
            <Container>
                <ContactsHeader>
                    <SectionTitle><span>#</span>contacts</SectionTitle>
                </ContactsHeader>

                <Dots>
                    <Icon height={"105px"} width={"105px"} viewBox={"0 0 105 105"} iconId={'dots'}/>
                </Dots>
                <ContactsContent>

                    <ContactsText>I’m interested in freelance opportunities. However, if you have other request or
                        question, don’t
                        hesitate to contact me</ContactsText>

                    <ContactCard>
                        <CardTitle>Message me here</CardTitle>

                        <Link href="">
                            <Icon iconId={'discord'}/>
                            <span>!Elias#3519</span>
                        </Link>

                        <Link href="">
                            <Icon iconId={'message'}/>
                            <span>elias@elias.me</span>
                        </Link>
                    </ContactCard>
                </ContactsContent>
            </Container>
        </StyledContacts>
    );
};

const StyledContacts = styled.section`
    padding: 60px 0 60px;
`

const ContactCard = styled.div`
    width: 205px;
    border: 1px solid ${theme.colors.font};
    padding: 14px;
`

const ContactsHeader = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
    margin-bottom: 45px;
    position: relative;

    &::after {
        content: "";
        display: inline-block;
        width: 127px;
        height: 1px;
        background-color: ${theme.colors.accent};
    }
`

const ContactsContent = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 40px;
`

const Link = styled.a`
    display: grid;
    grid-template-columns: 32px 1fr;
    align-items: center;
    column-gap: 8px;
    color: ${theme.colors.font};
    text-decoration: none;
    font-size: 14px;

    svg {
        width: 32px;
        height: 32px;
    }

    &:not(:last-child) {
        margin-bottom: 10px;
    }
`

const ContactsText = styled.p`
    max-width: 500px;
    margin: 0;
    color: ${theme.colors.font};
    line-height: 1.6;
`

const CardTitle = styled.h3`
    margin: 0 0 16px;
    color: ${theme.colors.text};
    font-weight: 600;
`

const Dots = styled.div`
    position: absolute;
    left: -10px;
    z-index: 6;
`