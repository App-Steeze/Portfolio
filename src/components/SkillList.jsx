import React from "react";

function SkillList(props){
    return(
        <div>
             <div className="skill-list-div">
                <div>
                  <img
                    src={props.img}
                    alt={props.imgName}
                  />
                </div>
                <div>
                  <p>{props.text}</p>
                </div>
                <div className="skill-bar-div">
                  <div className="progress-bar">
                    <div
                      className="progress-fill"
                      style={{"--progress": `${props.progressBar}` }}
                    ></div>
                  </div>
                </div>
              </div>

        </div>
    )
}

export default SkillList;