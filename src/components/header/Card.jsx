import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { BiShoppingBag } from "react-icons/bi";
import "./header.scss";
// components
import CartItems from "./CartItems";
// data
import { product } from "../../assets/data/data";

const Card = () => {
  const [cardOpen, setCardOpen] = useState(false);
  const closeCard = () => {
    setCardOpen(null);
  };
  return (
    <>
      <div className="card" onClick={() => setCardOpen(!cardOpen)}>
        <BiShoppingBag className="cardIcon" />
        <span className="flexCenter">2</span>
      </div>
      <div className={cardOpen ? "overlay" : "nonoverlay"}></div>
      <div className={cardOpen ? "cartItem" : "cardhide"}>
        <div className="title flex">
          <h2>shopping card</h2>
          <button onClick={closeCard}>
            <AiOutlineClose className="icon" />
          </button>
        </div>
        {product.slice(0, 2).map((item, index) => (
          <CartItems key={index} item={item} />
        ))}
        <div className="checkOut">
          <button>
            <span>proceed to checkout</span>
            <label>$240</label>
          </button>
        </div>
      </div>
    </>
  );
};

export default Card;
