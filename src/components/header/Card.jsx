import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { BiShoppingBag } from "react-icons/bi";
import "./header.scss";
// components
import CartItems from "./CartItems";
// data
import { product } from "../../assets/data/data";
import { useSelector } from "react-redux";
//

const Card = () => {
  const [cardOpen, setCardOpen] = useState(false);
  // when card was open Prevent page from scrolling
  cardOpen
    ? (document.body.style.overflow = "hidden")
    : (document.body.style.overflow = "auto");
  // close cardbox
  const closeCard = () => {
    setCardOpen(null);
  };

  const quantity = useSelector((state) => state.cart.totalQuantity);
  const cartItems = useSelector((state) => state.cart.itemsList);

  let total = 0;
  const listItems = useSelector((state) => state.cart.itemsList);
  listItems.forEach((item) => (total += item.totalPrice));

  return (
    <>
      <div className="card" onClick={() => setCardOpen(!cardOpen)}>
        <BiShoppingBag className="cardIcon" />
        <span className="flexCenter">{quantity}</span>
      </div>
      <div className={cardOpen ? "overlay" : "nonoverlay"}></div>
      <div className={cardOpen ? "cartItem" : "cardhide"}>
        <div className="title flex">
          <h2>shopping card</h2>
          <button onClick={closeCard}>
            <AiOutlineClose className="icon" />
          </button>
        </div>
        {cartItems.map((item, index) => (
          <CartItems key={index} item={item} />
        ))}
        <div className="checkOut">
          <button>
            <span>proceed to checkout</span>
            <label>$ {total}</label>
          </button>
        </div>
      </div>
    </>
  );
};

export default Card;
