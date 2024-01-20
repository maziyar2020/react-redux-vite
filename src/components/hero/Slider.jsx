import React from "react";
// styles
import "./slider.scss";

// slider data
import { slide } from "../../assets/data/data";
const slider = () => {
  return (
    <div className="slider">
      <div className="container grid image__container">
        {slide.map((item, index) => (
          <div className="box" key={index}>
            <div className="img">
              <img src={item.image} alt="" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default slider;
