import './App.css'
import {Header} from "./layout/header/Header.tsx";
import {Footer} from "./layout/sections/footer/Footer.tsx";


import {Routes, Route} from 'react-router-dom';
import {ProjectsPage} from './pages/projectsPage/ProjectsPage.tsx';
import {HomePage} from "./pages/homePage/HomePage.tsx";
import {AboutPage} from "./pages/aboutPage/AboutPage.tsx";
import {ContactPage} from "./pages/contactPage/ContactPage.tsx";


function App() {

    return (
        <div>
            <Header/>

            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/projects" element={<ProjectsPage/>}/>
                <Route path="/about" element={<AboutPage/>}/>
                <Route path="/contacts" element={<ContactPage/>}/>
            </Routes>

            <Footer/>

        </div>
    )
}

export default App

