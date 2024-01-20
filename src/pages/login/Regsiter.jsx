import React from "react";

import back from "../../assets/images/my-account.jpg";
import "./login.scss";
import { Link } from "react-router-dom";

export const Register = () => {
  return (
    <>
      <section className="login">
        <div className="container">
          <div className="backImg">
            <img src={back} alt="" />
            <div className="text">
              <h3>Register</h3>
              <h1>My ACcount</h1>
            </div>
          </div>

          <form>
            <span>Email address</span>
            <input type="text" required />
            <span>Username * </span>
            <input type="text" required />
            <span>Password * </span>
            <input type="text" required />
            <span>Confirm Password * </span>
            <input type="text" required />
            <button className="button">Register</button>

            {/* <Link to="/login" className="link">
              <span>Already have an account ?</span>
            </Link> */}
          </form>
        </div>
      </section>
    </>
  );
};
