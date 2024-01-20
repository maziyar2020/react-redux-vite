import React from "react";
import { Link } from "react-router-dom";
// icons
import { AiOutlinePlusCircle } from "react-icons/ai";
// state managment
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cartSlice";

const ProductCart = ({ id, cover, price, name }) => {
  //
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(cartActions.addToCart({ id, price, name, cover }));
  };

  return (
    <div className="box boxItems" id="product">
      <div className="img">
        <Link to="/">
          <img src={cover} alt="cover" />
        </Link>
      </div>
      <div className="details">
        <h3>$ {price}</h3>
        <p>{name}</p>
        <button onClick={addToCart}>
          <AiOutlinePlusCircle className="icon" />
        </button>
      </div>
    </div>
  );
};

export default ProductCart;
