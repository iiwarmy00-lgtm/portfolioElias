import styled from "styled-components";
import { SectionTitle } from "../../components/SectionTitle.tsx";
import { Icon } from "../../components/icon/Icon.tsx";
import { Container } from "../../components/Container.ts";
import { theme } from "../../styles/Theme.ts";

export const ContactPage = () => {
    return (
        <StyledContactPage>
            <Container>
                <ContactsPart>
                    <SectionTitle><span>/</span>contacts</SectionTitle>
                    <PageSubtitle>Who am I?</PageSubtitle>

                    <ContactsContent>
                        <ContactsText>
                            I’m interested in freelance opportunities. However, if you have
                            other request or question, don’t hesitate to contact me.
                        </ContactsText>

                        <CardsWrapper>
                            <SupportCard>
                                <CardTitle>Support me here</CardTitle>

                                <ContactItem>
                                    <Icon iconId={"card"} />
                                    <ContactValue>4149500120690030</ContactValue>
                                </ContactItem>

                                <ContactItem>
                                    <Icon iconId={"bitcoin"} />
                                    <ContactValue>3E8ociqZa9mZUSwGdSmAEMAoAxBK3FNDcd</ContactValue>
                                </ContactItem>
                            </SupportCard>

                            <MessageCard>
                                <CardTitle>Message me here</CardTitle>

                                <ContactItem>
                                    <Icon iconId={"discord"} />
                                    <ContactLink href="#">!Elias#3519</ContactLink>
                                </ContactItem>

                                <ContactItem>
                                    <Icon iconId={"message"} />
                                    <ContactLink href="mailto:elias@elias.me">
                                        elias@elias.me
                                    </ContactLink>
                                </ContactItem>
                            </MessageCard>
                        </CardsWrapper>
                    </ContactsContent>
                </ContactsPart>

                <AllMediaPart>
                    <SectionTitle><span>#</span>all-media</SectionTitle>

                    <MediaList>
                        <MediaItem>
                            <Icon iconId={"twitter"} />
                            <MediaLink href="#">@elias</MediaLink>
                        </MediaItem>

                        <MediaItem>
                            <Icon iconId={"twitter"} />
                            <MediaLink href="#">@elias</MediaLink>
                        </MediaItem>
                    </MediaList>
                </AllMediaPart>
            </Container>
        </StyledContactPage>
    );
};


const StyledContactPage = styled.div`
    min-height: 79vh;
    background-color: ${theme.colors.primaryBg};
    padding: 100px 0 0;
`

const ContactsPart = styled.div`
    margin-bottom: 80px;
`

const PageSubtitle = styled.p`
    margin: 8px 0 0;
    color: ${theme.colors.font};
    font-size: 16px;
`

const ContactsContent = styled.div`
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 60px;
    align-items: start;
    margin-top: 80px;
`

const ContactsText = styled.p`
    max-width: 505px;
    margin: 0;
    color: ${theme.colors.font};
    line-height: 1.6;
`

const CardsWrapper = styled.div`
    display: flex;
    gap: 16px;
    align-items: flex-start;
`

const SupportCard = styled.div`
    width: 250px;
    border: 1px solid ${theme.colors.font};
    padding: 16px;
`

const MessageCard = styled.div`
    width: 190px;
    border: 1px solid ${theme.colors.font};
    padding: 16px;
`

const CardTitle = styled.p`
    margin: 0 0 16px;
    color: ${theme.colors.text};
    font-weight: 600;
`

const ContactItem = styled.div`
    display: grid;
    grid-template-columns: 20px 1fr;
    column-gap: 10px;
    align-items: center;
    color: ${theme.colors.font};

    svg {
        width: 20px;
        height: 20px;
    }

    &:not(:last-child) {
        margin-bottom: 12px;
    }
`

const ContactValue = styled.span`
    color: ${theme.colors.font};
    font-size: 14px;
    line-height: 1.4;
    word-break: break-all;
`

const ContactLink = styled.a`
    color: ${theme.colors.font};
    text-decoration: none;
    font-size: 14px;
    line-height: 1.4;
    word-break: break-word;
`

const AllMediaPart = styled.div`
    margin-top: 20px;
`

const MediaList = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    margin-top: 32px;
`

const MediaItem = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;

    svg {
        width: 18px;
        height: 18px;
    }
`

const MediaLink = styled.a`
    color: ${theme.colors.font};
    text-decoration: none;
    font-size: 16px;
`