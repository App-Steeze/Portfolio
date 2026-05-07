import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import About from "./About";
import Skills from "./Skills";
import Carousel from "./Carousel";
import detailsProfile from "/assets/code 2026-04-20 at 2.21.30 PM (1).jpeg";
import detailCarousel from "/assets/pexels-hiteshchoudhary-879109.jpg";


function Details(){
    return(
        <div>
            <Header
            profile={detailsProfile}
            devname="About"

             />
            <About />
            <Carousel 
            image={detailCarousel}
            />
            <Skills />
            <Footer />

        </div>
    )
}

export default Details;