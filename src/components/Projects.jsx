import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Portfolio from "./Portfolio";
import projectsProfile from "../assets/bug cut 2026-04-20 at 2.21.29 PM.jpeg";


function Projects(){
    return(
        <div>
            <Header 
            profile={projectsProfile}
            devname="Portfolio"
            />
            <Portfolio />
            <Footer />

        </div>
    )
}

export default Projects;