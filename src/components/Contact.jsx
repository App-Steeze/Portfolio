import React from "react";
import Form from "./Form";
import Header from "./Header";
import Footer from "./Footer";
import contactProfile from "../assets/pexels-sora-shimazaki-5926393.jpg";

function Contact() {
  return (
    <div>
      <Header
        profile={contactProfile}
        devname="Contact"
      />
      <div className="contact-container">
        <div className="contact-box">
          <div className="contact-div">
            
            <div className="contact-text-div">
              <h3 className="contact-text-title">Send me a message</h3>
              <p className="contact-text">
                Whether you wish to discuss new ideas or have a project for me,
                simply fill this form and I’ll get back to you soon.
              </p>
            </div>

            <div className="contact-form-box">
              <Form />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Contact;
