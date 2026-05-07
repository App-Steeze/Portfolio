import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import About from "./About";
import Services from "./Services";
import Carousel from "./Carousel";
import Skills from "./Skills";
import Portfolio from "./Portfolio";
import profile from "../assets/img.jpg";
import phoneIcon from "../assets/icons8-phone-64 (1).png";
import emailIcon from "../assets/icons8-mail.gif";
import homeCarousel from "../assets/pexels-thisisengineering-3861951.jpg";

function Home() {
  return (
    <div>
      <div className="full-container">
        <Header
          intro="HELLO, MY NAME IS"
          profile={profile}
          devname="Oladejo Fiyinfoluwa"
          niche="Web Developer"
          email="oladejofiyinfoluwa015@gmail.com"
          phone="09059841884"
          phoneIcon={phoneIcon}
          emailIcon={emailIcon}
        />
        <About />
        <Services />
        <Carousel image={homeCarousel} />
        <Skills />
        <Portfolio />
        <Footer />
      </div>
    </div>
  );
}

export default Home;
