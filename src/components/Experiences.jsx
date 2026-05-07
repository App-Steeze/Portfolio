import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Skills from "./Skills";
import Services from "./Services";
import experienceProfile from "../assets/pexels-tranmautritam-326503.jpg";

function Experiences(){
    return(
        <div>
            <Header 
            profile={experienceProfile}
            devname="My Work"

            />
            <Services />
            <Skills />
            <Footer />
        </div>
    )
}

export default Experiences;