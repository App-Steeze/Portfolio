import React, { useState } from "react";
import PortfolioList from "./PortfolioList";
import keeperImage from "/assets/Keeper site.png";
import permalistImage from "/assets/permalist site.png";
import TinDogImage from "/assets/Tin dog site.png";
import familyTrackerImage from "/assets/family tracker site.png";
import drumImage from "/assets/drum site.png";
import quizImage from "/assets/country quiz site.png";
import todolistImage from "/assets/todolist site.png";
import simonGameImage from "/assets/Simon game site.png";
import personalImage from "/assets/personal site.png";
import secretImage from "/assets/secret site.png";
import mondrianImage from "/assets/mondrian paint site.png";
import laosImage from "/assets/flag of laos.png";
import diceImage from "/assets/dice game site.png";
import priceImage from "/assets/pricing list site.png";
import motivationalImage from "/assets/motivational site.png";


function Portfolio() {
  const [showAll, setShowAll] = useState(false);

  const portfolioData = [
    {
      link: "https://keeper-app-atz9.onrender.com/",
      img: keeperImage,
      imgName: "Keeper image",
    },
    {
      link: "https://permalist-kmqq.onrender.com/",
      img: permalistImage,
      imgName: "Permalist site image",
    },
    {
      link: "https://app-steeze.github.io/Tindog-project-/",
      img: TinDogImage,
      imgName: "Tin dog site image",
    },
    {
      link: "https://travel-tracker-j8s2.onrender.com/",
      img: familyTrackerImage,
      imgName: "Family tracker image",
    },
    {
      link: "https://app-steeze.github.io/Drum-project/",
      img: drumImage,
      imgName: "Drum site image",
    },
    {
      link: "https://country-capital-quiz-qwmv.onrender.com/",
      img: quizImage,
      imgName: "Country quiz image",
    },
    {
      link: "https://todo-list-1-5pjk.onrender.com",
      img: todolistImage,
      imgName: "Todolist image",
    },
    {
      link: "https://app-steeze.github.io/Simon-Game/",
      img: simonGameImage,
      imgName: "Simon game image",
    },
    {
      link: "https://app-steeze.github.io/Personal-site/",
      img: personalImage,
      imgName: "Personal site image",
    },
    {
      link: "https://secrets-app-qsrn.onrender.com/",
      img: secretImage,
      imgName: "Secret site image",
    },
    {
      link: "https://app-steeze.github.io/Mondrian-Painting-project/",
      img: mondrianImage,
      imgName: "Mondrian paint image",
    },
    {
      link: "https://app-steeze.github.io/CSS-Styling/",
      img:laosImage,
      imgName: "Laos flag image",
    },
    {
      link: "https://app-steeze.github.io/Dice-game/",
      img: diceImage,
      imgName: "dice game image",
    },
    {
      link: "https://app-steeze.github.io/Pricing-Table-concept/",
      img: priceImage,
      imgName: "price list image",
    },
    {
      link: "",
      img: motivationalImage,
      imgName: "motivational image",
    },
  ];

  const visibleItems = showAll ? portfolioData : portfolioData.slice(0, 6);

  return (
    <div>
      <div className="portfolio-container">
        <div className="portfolio-box">
          <div>
            <h2 className="title-text thick-text">Portfolio</h2>
            <div className="portfolio-asset-div">
            <div className={`asset-box-wrapper ${showAll ? "expanded" : ""}`}>
              <div className="asset-box">
                {visibleItems.map((item, index) => (
                  <PortfolioList
                    key={index}
                    link={item.link}
                    img={item.img}
                    img-name={item.imgName}
                  />
                ))}
              </div>
              </div>
              <div className="show-more-container">
                  <button className="showButton" onClick={() => setShowAll(!showAll)}>
                    {showAll ? "Show Less" : "Show More"}
                  </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
