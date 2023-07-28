import React from "react";
import "./account.scss";
import image from "../../assets/images/input.png";
const Account = () => {
  return (
    <section className="accountInfo">
      <div className="container boxItems">
        <h1>Account details</h1>
        <div className="content">
          <div className="left">
            <div className="img flexCenter">
              <input type="file" accept="image/*" src={image} />
              <img src={image} alt="" className="image-preview" />
            </div>
          </div>
          <div className="right">
            <label>UserName</label>
            <input type="text" required />
            <label>Email</label>
            <input type="text" required />
            <label>Password * </label>
            <input type="text" required />
            <button className="button">update</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Account;
