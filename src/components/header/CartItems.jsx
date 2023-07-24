import React from "react";
import { AiOutlineClose, AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const CartItems = ({ item }) => {
  return (
    <div className="cartList">
      <div className="cartContent">
        <div className="img">
          <img src={item.cover} alt="" />
          <button className="remove flexCenter">
            <AiOutlineClose />
          </button>
        </div>
        <div className="details">
          <p>{item.name}</p>
          <label>unit Price $ :{item.price}</label>
          <div className="price">
            <div className="qty flexCenter">
              <button className="plus">
                <AiOutlinePlus />
              </button>
              <button className="num">{item.quantity}</button>
              <button className="minus">
                <AiOutlineMinus />
              </button>
            </div>
            <div className="priceTitle">${item.totalPrice}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
