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
                    <Line/>
                </ContactsHeader>

                <ContactsContent>
                    <ContactsText>I’m interested in freelance opportunities. However, if you have other request or
                        question, don’t
                        hesitate to contact me</ContactsText>

                    <ContactCard>
                        <CardTitle>Message me here</CardTitle>

                        <ContactItem>
                            <Icon iconId={'discord'}/>
                            <ContactLink href={"#"}>!Elias#3519</ContactLink>
                        </ContactItem>

                        <ContactItem>
                            <Icon iconId={'message'}/>
                            <ContactLink href={"#"}>elias@elias.me</ContactLink>
                        </ContactItem>
                    </ContactCard>
                </ContactsContent>
            </Container>
        </StyledContacts>
    );
};

const StyledContacts = styled.section`
    padding: 80px 0 100px;
`

const ContactCard = styled.div`
    width: 240px;
    border: 1px solid ${theme.colors.font};
    padding: 14px;
`

const ContactsHeader = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
    margin-bottom: 45px;
`

const ContactsContent = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 40px;
`

const ContactItem = styled.div`
    display: grid;
    grid-template-columns: 32px 1fr;
    align-items: center;
    column-gap: 8px;

    svg {
        width: 32px;
        height: 32px;
    }

    &:not(:last-child) {
        margin-bottom: 10px;
    }
`

const ContactLink = styled.a`
    color: ${theme.colors.font};
    text-decoration: none;
    font-size: 14px;
`

const Line = styled.span`
    display: inline-block;
    width: 127px;
    height: 1px;
    background-color: ${theme.colors.accent};
`

const ContactsText = styled.p`
    max-width: 500px;
    margin: 0;
    color: ${theme.colors.font};
    line-height: 1.6;
`

const CardTitle = styled.h5`
    margin: 0 0 16px;
    color: ${theme.colors.text};
    font-weight: 600;
`