import styled from "styled-components";
import {Main} from "../../layout/sections/main/Main.tsx";
import {Quote} from "../../layout/sections/quote/Quote.tsx";
import {Projects} from "../../layout/sections/projects/Projects.tsx";
import {Skills} from "../../layout/sections/skills/Skills.tsx";
import {About} from "../../layout/sections/about/About.tsx";
import {Contacts} from "../../layout/sections/contacts/Contacts.tsx";

export const HomePage = () => {
    return (
        <StyledHomePage>
            <Main/>
            <Quote/>
            <Projects/>
            <Skills/>
            <About/>
            <Contacts/>
        </StyledHomePage>
    );
};

const StyledHomePage = styled.div`
   
`