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
    padding: 120px 0 0;

    @media ${theme.media.mobile} {
        flex-direction: column;
        width: 100%;
        gap: 16px;
    }
`

const ContactsPart = styled.div`
    margin-bottom: 80px;

    @media ${theme.media.mobile} {
        margin-bottom: 48px;
    }
`

const PageSubtitle = styled.p`
    margin: 8px 0 0;
    color: ${theme.colors.font};
    font-size: 16px;

    @media ${theme.media.mobile} {
        font-size: 14px;
    }
`

const ContactsContent = styled.div`
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 60px;
    align-items: start;
    margin-top: 80px;

    @media ${theme.media.mobile} {
        grid-template-columns: 1fr;
        gap: 24px;
        margin-top: 32px;
    }
`

const ContactsText = styled.p`
    max-width: 505px;
    margin: 0;
    color: ${theme.colors.font};
    line-height: 1.6;

    @media ${theme.media.mobile} {
        max-width: 100%;
        width: 100%;
        font-size: 16px;
    }
`

const CardsWrapper = styled.div`
    display: flex;
    gap: 16px;
    align-items: flex-start;

    @media ${theme.media.mobile} {
        flex-direction: column;
        width: 100%;
        gap: 16px;
    }
`

const SupportCard = styled.div`
    width: 250px;
    border: 1px solid ${theme.colors.font};
    padding: 16px;
    
    @media ${theme.media.mobile} {
        width: 100%;
        max-width: 320px;
    }
`

const MessageCard = styled.div`
    width: 190px;
    border: 1px solid ${theme.colors.font};
    padding: 16px;

    @media ${theme.media.mobile} {
        width: 100%;
        max-width: 320px;
    }
`

const CardTitle = styled.p`
    margin: 0 0 16px;
    color: ${theme.colors.text};
    font-weight: 600;

    @media ${theme.media.mobile} {
        font-size: 16px;
    }
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

    @media ${theme.media.mobile} {
        column-gap: 8px;
    }
`

const ContactValue = styled.span`
    color: ${theme.colors.font};
    font-size: 14px;
    line-height: 1.4;
    word-break: break-all;

    @media ${theme.media.mobile} {
        font-size: 13px;
    }
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

    @media ${theme.media.mobile} {
        margin-top: 0;
        padding: 0 0 100px;
    }
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