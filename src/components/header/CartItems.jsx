import React from "react";
import { AiOutlineClose, AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cartSlice";

const CartItems = ({ item }) => {
  // destructure item
  const { cover, name, quantity, totalPrice, id, price } = item;

  // increament cart items
  const dispatch = useDispatch();
  const incCartItems = () => {
    dispatch(cartActions.addToCart({ id, name, price }));
  };
  // decreament cart items
  const decCartItems = () => {
    dispatch(cartActions.removeFromCart(id));
  };

  return (
    <div className="cartList">
      <div className="cartContent">
        <div className="img">
          <img src={cover} alt="" />
          <button className="remove flexCenter">
            <AiOutlineClose />
          </button>
        </div>
        <div className="details">
          <p>{name}</p>
          <label>unit Price $ :{price}</label>
          <div className="price">
            <div className="qty flexCenter">
              <button className="plus" onClick={incCartItems}>
                <AiOutlinePlus />
              </button>
              <button className="num">{quantity}</button>
              <button className="minus" onClick={decCartItems}>
                <AiOutlineMinus />
              </button>
            </div>
            <div className="priceTitle">${totalPrice}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
