import React from "react";
import "./product.scss";
import { product } from "../../assets/data/data";
import ProductCart from "./ProductCart";

const Product = () => {
  return (
    <section className="product">
      <div className="container grid3 product__container">
        {product.map((item, index) => (
          <ProductCart
            cover={item.cover}
            name={item.name}
            id={item.id}
            price={item.price}
            key={index}
          />
        ))}
      </div>
    </section>
  );
};

export default Product;
