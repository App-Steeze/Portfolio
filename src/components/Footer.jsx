import React, { useState } from "react";
import { href, Link } from "react-router-dom";

const year = new Date().getFullYear();

function Footer() {
  const [social, setSocial] = useState();
  const [service, setService] = useState();
  const [changeColor, setColor] = useState(false);

  const socialLinks = [
    {
      label: "Twitter",
      href: "https://x.com/praise_store?s=21&t=u_XED5jgN-f5tf6ZeqHtgA",
    },
    {
      label: "Thread",
      href: "https://www.threads.com/@appsteeze?igshid=NTc4MTIwNjQ2YQ==",
    },
    {
      label: "TikTok",
      href: "https://www.tiktok.com/@appsteeze?_t=ZM-8wu2f0uIWcY&_r=1",
    },
    { label: "Linkedin", href: "" },
    {
      label: "Instagram",
      href: "https://www.instagram.com/appsteeze?igsh=bzdmZzk1emN3bHAy&utm_source=qr",
    },
  ];

  const serviceLinks = [
    { label: "Web Design", path: "/services" },
    { label: "Web Development", path: "/services" },
  ];

  return (
    <div>
      <div className="footer-container">
        <footer className="footer-box">
          <div className="content-box">
            <div className="footer-content-div">
              <div className="footer-location">
                <p>Based in Lagos, working worldwide.</p>
                <a
                  className="footer-bold bold-text"
                  onMouseOver={() => setColor(true)}
                  onMouseOut={() => setColor(false)}
                  style={{
                    color: changeColor === true ? "#01080b" : "#009BDF",
                  }}
                  href="/contact"
                >
                  Get in touch
                </a>
              </div>

              <div className="footer-info-div">
                <div className="footer-title-div">
                  <h3>Social</h3>

                  <div className="footer-list-box">
                    {socialLinks.map((socialLink, index) => (
                      <div className="social-div" key={index}>
                        <a
                          className="social"
                          onMouseOver={() => setSocial(index)}
                          onMouseOut={() => setSocial(null)}
                          style={{ color: social === index ? "#009BDF" : null }}
                          href={socialLink.href}
                        >
                          {socialLink.label}
                        </a>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="footer-title-div">
                  <h3>Services</h3>
                  <div className="footer-list-box">
                    {serviceLinks.map((serviceLink, index) => (
                      <div className="service-media-div" key={index}>
                        <Link
                          to={serviceLink.path}
                          className="service"
                          onMouseOver={() => setService(index)}
                          onMouseOut={() => setService(null)}
                          style={{
                            color: service === index ? "#009BDF" : null,
                          }}
                        >
                          {serviceLink.label}
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <hr />
          <div className="footer-text-div">
            <p className="footer-text">
              @{year} AppSteeze's Portfolio. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Footer;
