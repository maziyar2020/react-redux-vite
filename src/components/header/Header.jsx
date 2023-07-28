//styles
import "./Header.scss";
// image and icons
import Medicine from "../../assets/images/Medicine.svg";
import { AiOutlineSearch } from "react-icons/ai";
// component
import Card from "./Card";
import User from "./User";
// link
import { Link } from "react-router-dom";

const Header = () => {
  // window event
  window.addEventListener("scroll", () => {
    const header = document.querySelector(".header");
    header.classList.toggle("active", window.scrollY > 100);
  });

  window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  //
  return (
    <header className="header">
      <div className="scontainer flex">
        <Link to="/">
          <div className="logo">
            <img src={Medicine} alt="" />
          </div>
        </Link>
        <div className="search flex">
          <AiOutlineSearch className="searchIcon" />
          <input type="text" placeholder="search..." />
        </div>
        <div className="account flexCenter">
          <Card />
          <User />
        </div>
      </div>
    </header>
  );
};

export default Header;
