import React, { useState } from "react";
// icons
import { IoSettingsOutline } from "react-icons/io5";
import { BsBagCheck } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { GrHelp } from "react-icons/gr";
import { BiLogOut } from "react-icons/bi";
import userImage from "../../../public/user.png";
import "./header.scss";
// click out side handler
import OutsideClickHandler from "react-outside-click-handler";
import { Link } from "react-router-dom";
// redux
import { useDispatch } from "react-redux";
import { authActions } from "../../store/authSlice";

const User = () => {
  //
  const user = true;
  const [profileOpen, setProfileOpen] = useState(false);
  const closeProfile = () => setProfileOpen(null);
  // redux
  const dispatch = useDispatch();
  const logOut = () => {
    dispatch(authActions.logOut());
  };

  return (
    // handle click outside
    <OutsideClickHandler
      onOutsideClick={() => {
        if (profileOpen) {
          setProfileOpen(false);
        }
      }}>
      {/* user component */}
      <div className="profile">
        {user ? (
          <>
            <button
              className="img"
              onClick={() => setProfileOpen(!profileOpen)}>
              <img src={userImage} alt="" />
            </button>
            {profileOpen && (
              <div className="openProfile boxItems" onClick={closeProfile}>
                {/* user image */}
                <div className="image">
                  <Link to="/account">
                    <div className="img">
                      <img src={userImage} alt="" />
                    </div>
                  </Link>
                  <div className="text">
                    <h4>Mazi moosavi</h4>
                    <label>ahwaz, khouzestan</label>
                  </div>
                </div>
                {/* drop down items */}
                <Link to="/login">
                  <button className="box">
                    <IoSettingsOutline className="icon" />
                    <h4>account</h4>
                  </button>
                </Link>
                <button className="box">
                  <BsBagCheck className="icon" />
                  <h4>my order</h4>
                </button>
                <button className="box">
                  <AiOutlineHeart className="icon" />
                  <h4>wish list</h4>
                </button>
                <button className="box">
                  <GrHelp className="icon" />
                  <h4>help</h4>
                </button>
                <button className="box" onClick={logOut}>
                  <BiLogOut className="icon" />
                  <h4>logOut</h4>
                </button>
              </div>
            )}
          </>
        ) : (
          <button className="">my account</button>
        )}
      </div>
    </OutsideClickHandler>
  );
};

export default User;
