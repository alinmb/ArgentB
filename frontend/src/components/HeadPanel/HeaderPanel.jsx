import React from "react";
import { getUserData } from "../../actions/user.action";
import { useSelector } from "react-redux";

const HeaderPanel = () => {
  const userData = useSelector((state) => state.user.userData);
  console.log(userData.userName);

  return (
    <div className="header">
      <h1>
        Welcome back
        <br />
        {userData && userData.userName}
      </h1>
      <button className="header__btn">Edit Name</button>
    </div>
  );
};

export default HeaderPanel;
