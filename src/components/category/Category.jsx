import React from "react";
// styles
import "./category.scss";
// carousel
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// icons
import { GrFormPrevious } from "react-icons/gr";
import { MdNavigateNext } from "react-icons/md";
// data
import { category } from "../../assets/data/data";
// slick
import Slider from "react-slick";

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div className="control-btn" onClick={onClick}>
      <button className="next">
        <MdNavigateNext className="icon" />
      </button>
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div className="control-btn" onClick={onClick}>
      <button className="prev">
        <GrFormPrevious className="icon" />
      </button>
    </div>
  );
}

const Category = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  return (
    <div className="category">
      <div className="container">
        <Slider {...settings}>
          {category.map((item, index) => (
            <div className="boxs" key={index}>
              <div className="box boxItems">
                <img src={item.cover} alt="" />
                <p>{item.title}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Category;
