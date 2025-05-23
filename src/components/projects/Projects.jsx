import Background from "../Background";
import Container from "../Container";
import Navbar from "../Navbar";
import Contact from "../home/Contact";
import ProjectSection from "./ProjectSection";
import Footer from "../Footer";
import Navigate from "../Navigate";
import { useEffect } from "react";

export default function Projects() {

    useEffect(() => {
        document.title = "Projects"
    },[])

    return (
        <Background>
            <Navbar />
            <Container>
                <ProjectSection />

                <Contact/>

                <Navigate page={"projects"}/>

                <Footer/>
            </Container>
        </Background>
    )
} 