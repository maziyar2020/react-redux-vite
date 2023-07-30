import React from "react";
import "./login.scss";
import back from "../../assets/images/my-account.jpg";
import { useDispatch } from "react-redux";
import { authActions } from "../../store/authSlice";

const Login = () => {
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(authActions.login());
  };
  return (
    <>
      <section className="login">
        <div className="container">
          <div className="backImg">
            <img src={back} alt="" />
            <div className="text">
              <h3>login</h3>
              <h1>My ACcount</h1>
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            <span>UserName or Email address</span>
            <input type="text" required />
            <span>Password * </span>
            <input type="text" required />
            <button className="button">Register</button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Login;
