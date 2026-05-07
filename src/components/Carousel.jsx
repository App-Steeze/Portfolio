import React from "react";

function Carousel(props) {

  return (
    <div>
      <div className="carousel-container" >
        <div className="carousel-img-div"
        >
          <img
            className="carousel-img"
            src={props.image}
            alt="Carousel image"
          />
        </div>
      </div>
    </div>
  );
}

export default Carousel;
