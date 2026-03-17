import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {Icon} from "../../../components/icon/Icon.tsx";


export const Contacts = () => {
    return (
        <StyledContacts>
            <SectionTitle>#contacts</SectionTitle>

            <FlexWrapper align={"flex-start"} justify={"space-around"}>
                <p>I’m interested in freelance opportunities. However, if you have other request or question, don’t
                    hesitate to contact me</p>

                <ContactCard>
                    <p>Message me here</p>
                    <ContactItem>
                        <Icon iconId={'discord'}/>
                        <ContactLink href={"#"}>!Elias#3519</ContactLink>
                    </ContactItem>

                    <ContactItem>
                        <Icon iconId={'message'}/>
                        <ContactLink href={"#"}>elias@elias.me</ContactLink>
                    </ContactItem>
                </ContactCard>
            </FlexWrapper>
        </StyledContacts>
    );
};

const StyledContacts = styled.section`
    background-color: #282C33;
`

const ContactCard = styled.div`
    min-width: 150px;
    border: 1px solid #ABB2BF;
    padding: 15px;
`

const ContactItem = styled.div`
    color: #ABB2BF;
    display: flex;
`

const ContactLink = styled.a`
    color: #ABB2BF;
`