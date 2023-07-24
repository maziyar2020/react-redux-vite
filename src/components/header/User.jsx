import React, { useState } from "react";
// icons
import { IoSettingsOutline } from "react-icons/io5";
import { BsBagCheck } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { GrHelp } from "react-icons/gr";
import { BiLogOut } from "react-icons/bi";
import userImage from "../../../public/user.png";
import "./header.scss";

const User = () => {
  const user = true;
  const [profileOpen, setProfileOpen] = useState(false);
  const closeProfile = () => setProfileOpen(null);
  return (
    <div className="profile">
      {user ? (
        <>
          <button className="img" onClick={() => setProfileOpen(!profileOpen)}>
            <img src={userImage} alt="" />
          </button>
        </>
      ) : (
        "Login"
      )}
    </div>
  );
};

export default User;
