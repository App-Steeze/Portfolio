import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import iconImage from "../assets/Appsteeze_Logo_NoWhite_BG.png";

function Header(props) {
  const [isOver, setOver] = useState();
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isHidden, setHidden] = useState(false);

  const navItems = [
    { label: "HOME", path: "/" },
    { label: "SERVICES", path: "/services" },
    { label: "ABOUT", path: "/about" },
    { label: "PORTFOLIO", path: "/portfolio" },
    { label: "CONTACT", path: "/contact" },
  ];

  useEffect(() => {
    const mediaQuery = window.matchMedia(
      "(min-width: 0px) and (max-width: 991px)"
    );
    setIsMobile(mediaQuery.matches);
    console.log(mediaQuery.matches);

    const handleResize = (e) => setIsMobile(e.matches);
    mediaQuery.addEventListener("change", handleResize);
    return () => mediaQuery.removeEventListener("change", handleResize);
  }, []);

  document.addEventListener("keypress", function(){
    if(menuOpen){
      setMenuOpen(!menuOpen)
    }
  })

  function handleClick(){
    setMenuOpen(!menuOpen)
    setHidden(!isHidden)
  }


  return (
    <div>
      <div id="header">
        <div id="header-container">
          <div className="header-box">

            <div className="nav-bar">
              <div className="nav-img-div">
                <img
                  className="icon-logo"
                  src={iconImage}
                  alt="AppSteeze logo"
                />
              </div>

              {isMobile && (
                <button
                  hidden={isHidden}
                  className="menu-button"
                  onClick={handleClick}
                >
                  {menuOpen ? <span className="close-btn">✖</span> : "☰"}
                </button>
              )}

              <div
                className={`navbar-listContainer navbar-lists-container ${
                  isMobile ? "mobile" : ""
                } ${menuOpen ? "open" : ""}`}
              >
                <div className={`nav-list ${menuOpen? "navbarList-mobile" : ""}`} >
                  {navItems.map((item, index) => (
                    <Link
                      className="navbar-list-item"
                      key={index}
                      to={item.path}
                      onMouseOver={() => setOver(index)}
                      onMouseOut={() => setOver(null)}
                      style={{color: isOver === index? (menuOpen? "#009BDF" : "rgb(251, 223, 189)") : "#01080b"}}
                      onClick={() => setMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <div className="quarter-circle-div">
              <div className="quarter-circle-box">
                <img
                  className="profile-img"
                  src={props.profile}
                  alt="profile image"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="name-div">
          <div className="name-intro-div">
            <p>{props.intro} </p>
            <p>______</p>
          </div>
          <div className="title-div">
            <h1 className="bold-text">{props.devname}</h1>
            <h2 className="niche-bold-text">{props.niche}</h2>
          </div>
          <div className="header-contact-div">
            <div className="header-contact-box">
              <img src={props.emailIcon} alt="" />
              <p>{props.email}</p>
            </div>
            <div className="header-contact-box">
              <img src={props.phoneIcon} alt="" />
              <p>{props.phone}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
