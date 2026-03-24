import styled from "styled-components";
import {SectionTitle} from "../../components/SectionTitle.tsx";
import {FlexWrapper} from "../../components/FlexWrapper.tsx";
import {Icon} from "../../components/icon/Icon.tsx";

export const ContactPage = () => {
    return (
        <StyledContactPage>
            <ContactsPart>
                <SectionTitle>/contacts</SectionTitle>
                <FlexWrapper align={"flex-start"} justify={"space-around"}>

                    <p>I’m interested in freelance opportunities. However, if you have other request or question, don’t
                        hesitate to contact me</p>

                    <SupportCard>
                        <p>Support me here</p>
                        <ContactItem>
                            <Icon iconId={'card'}/>
                            <p>4149500120690030</p>
                        </ContactItem>
                        <ContactItem>
                            <Icon iconId={'bitcoin'}/>
                            <p>3E8ociqZa9mZUSwGdSmAEMAoAxBK3FNDcd</p>
                        </ContactItem>
                    </SupportCard>

                    <MessageCard>
                        <p>Message me here</p>
                        <ContactItem>
                            <Icon iconId={'discord'}/>
                            <ContactLink href={"#"}>!Elias#3519</ContactLink>
                        </ContactItem>

                        <ContactItem>
                            <Icon iconId={'message'}/>
                            <ContactLink href={"#"}>elias@elias.me</ContactLink>
                        </ContactItem>
                    </MessageCard>

                </FlexWrapper>

            </ContactsPart>
            <SectionTitle>#all-media</SectionTitle>
            <ContactItem>
                <Icon iconId={'twitter'}/>
                <p>@elias</p>
            </ContactItem>


            <AllMediaPart>
                <SectionTitle></SectionTitle>
            </AllMediaPart>

        </StyledContactPage>
    );
};

const StyledContactPage = styled.div`
    background-color: #282C33;
`

const ContactsPart = styled.div`

`

const AllMediaPart = styled.div`

`

const MessageCard = styled.div`
    min-width: 150px;
    border: 1px solid #ABB2BF;
    padding: 15px;
`

const SupportCard = styled.div`
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