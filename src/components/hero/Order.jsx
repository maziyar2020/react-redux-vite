import React from "react";
import { order } from "../../assets/data/data";

const Order = () => {
  return (
    <section className="order">
      <div className="container grid boxItems">
        {order.map((item, index) => (
          <div className="box flexCenter" key={index}>
            <div className="num">
              <h1>{item.id}</h1>
            </div>
            <div className="text">
              <h3>{item.title}</h3>
              <label>{item.desc}</label>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Order;
