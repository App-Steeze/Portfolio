import React from "react";


function PortfolioList(props){
    return(
        <div>
            <div className="port-asset-div">
                <a href={props.link}>
                  <img className="port-asset-img" src={props.img} alt={props.imgName} />
                </a>
              </div>
        </div>
    )
}

export default PortfolioList;