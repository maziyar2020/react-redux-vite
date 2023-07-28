import React from "react";
import "./footer.scss";
// icons
import { AiFillTwitterCircle, AiFillLinkedin } from "react-icons/ai";
import { RiInstagramFill } from "react-icons/ri";
import { BsFacebook } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="boxItems">
      <div className="container flex">
        <p>all the right reserved - design & developed by mazi</p>
        <div className="social">
          <BsFacebook className="icon" />
          <RiInstagramFill className="icon" />
          <AiFillTwitterCircle className="icon" />
          <AiFillLinkedin className="icon" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
