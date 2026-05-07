import React from "react";
import webDesignLogo from "../assets/icons8-web-design-40.png";
import arrowLogo from "../assets/icons8-arrow-right-48.png";
import webDevLogo from "../assets/icons8-web-developer-48.png";

function Services() {
  return (
    <div>
      <div className="services-container">
        <div className="services-box">
          <div className="personal-box">
            <h2 className="title-text thick-text">What i do</h2>
            <div className="title-paragraph-div">
              <div className="paragraph-box">
                <p>
                  From understanding your requirements, designing a blueprint
                  and delivering the final product, I do everything that falls
                  in between these lines.
                </p>
              </div>
              <div className="paragraph-img-div">
                <button type="button" className="arrow-btn">
                  <a href="/services">
                    <img
                      src={arrowLogo}
                      alt="arrow image"
                      width="50px"
                    />
                  </a>
                </button>
              </div>
            </div>
          </div>

          <div className="services-niche-box">
          <div className="services-niche-div">
            <div className="niche-div">
              <div className="niche-title-div">
                <img
                  src={webDevLogo}
                  alt="web development icon"
                />
                <h3 className="niche-header">WEB DEVELOPMENT</h3>
              </div>
              <p className="niche-paragraph">
                If you are looking for a developer who will take over the
                research and development of your website, I am a
                well-established professional to help you with this.
              </p>
            </div>
            <div className="niche-div">
              <div className="niche-title-div">
                <img
                  src={webDesignLogo}
                  alt="web design icon"
                />
                <h3 className="niche-header">WEB DESIGN</h3>
              </div>
              <p className="niche-paragraph">
                I'm proficient in designing beautiful and intuitive interfaces
                that enhance user experience, making website a pleasure to
                navigate.
              </p>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
