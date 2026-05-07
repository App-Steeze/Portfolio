import Rract from "react";
import SkillList from "./SkillList";

function Skills() {
  const skillData = [
    {
      src:"https://repository-images.githubusercontent.com/218583345/a93f3b00-fcf2-11ea-9d6c-0cff33b7564d",
      alt:"Motoko icon",
      name:"Motoko",
      style:"80%"
    },
    {
      src:"https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
      alt:"javascript icon",
      name:"Javascript",
      style:"80%"
    },
    {
      src:"https://logowik.com/content/uploads/images/node-js6304.logowik.com.webp",
      alt:"Node.js icon",
      name:"Node.js",
      style:"80%"
    },
    {
      src:"https://seeklogo.com/images/E/express-js-logo-FA36FF1D3F-seeklogo.com.png",
      alt:"Express.js icon",
      name:"Express.js",
      style:"80%"
    },
    {
      src:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1985px-Postgresql_elephant.svg.png",
      alt:"Postgres icon",
      name:"Postgres DB",
      style:"80%"
    },
    {
      src:"https://e7.pngegg.com/pngimages/780/934/png-clipart-html-logo-html5-logo-icons-logos-emojis-tech-companies-thumbnail.png",
      alt:"HTML icon",
      name:"HTML",
      style:"80%"
    },
    {
      src:"https://images.seeklogo.com/logo-png/18/2/css3-logo-png_seeklogo-186678.png",
      alt:"CSS icon",
      name:"CSS",
      style:"80%"
    },
    {
      src:"https://cdn.worldvectorlogo.com/logos/react-1.svg",
      alt:"React icon",
      name:"React",
      style:"80%"
    },
    {
      src:"https://miro.medium.com/v2/da:true/resize:fit:1200/1*-8c5bXmKhpKg8NRnBMu0zQ.gif",
      alt:"EJS icon",
      name:"EJS",
      style: "80%" 
    },
    {
      src:"https://e7.pngegg.com/pngimages/439/345/png-clipart-bootstrap-logo-thumbnail-tech-companies-thumbnail.png",
      alt:"Bootstrap icon",
      name:"Bootstrap",
      style: "80%"
    },
    {
      src:"https://cdn.freebiesupply.com/logos/thumbs/2x/jquery-1-logo.png",
      alt:"JQuery icon",
      name:"JQuery",
      style:"80%"
    },
  
  ];

  return (
    <div>
      <div className="skill-container">
        <div className="skill-box">
          <h2 className="title-text thick-text">Skills</h2>
          <div className="skill-content-box">
            <div className="skill-content-div">
              {skillData.map((item, index)=>(
                <SkillList 
                key={index}
                img={item.src}
                imgName={item.alt}
                text={item.name}
                progressBar={item.style}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
