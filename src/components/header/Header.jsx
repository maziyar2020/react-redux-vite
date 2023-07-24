// styles
import "./Header.scss";
// image and icons
import Medicine from "../../assets/images/Medicine.svg";
import { AiOutlineSearch } from "react-icons/ai";
// component
import Card from "./Card";
import User from "./User";

const Header = () => {
  // window event
  window.addEventListener("scroll", () => {
    const header = document.queryselector(".header");
    header.classList.toggle("active", window.scrollY > 100);
  });

  window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  //
  return (
    <div className="header">
      <div className="scontainer flex">
        <div className="logo">
          <img src={Medicine} alt="" />
        </div>
        <div className="search flex">
          <AiOutlineSearch className="searchIcon" />
          <input type="text" placeholder="search..." />
        </div>
        <div className="account flexCenter">
          <Card />
          <User />
        </div>
      </div>
    </div>
  );
};

export default Header;
