import React, { useState } from "react";
// import { getUserData } from "../../actions/user.action";
import { useSelector } from "react-redux";
import UsernameEditor from "../UsernameEditor/UsernameEditor";

const HeaderPanel = () => {
  const [edit, setEdit] = useState(false);
  const userData = useSelector((state) => state.user.userData);
  console.log(userData.userName);

  const activeEdit = () => {
    setEdit((prevState) => !prevState);
  };
  console.log(edit);

  const closeEditor = (e) => {
    e.preventDefault();
    setEdit((prevstate) => !prevstate);
  };

  return (
    <div className="header">
      <h1>
        Welcome back
        <br />
        {userData && userData.userName}
      </h1>
      {edit && <UsernameEditor onCancel={closeEditor} />}
      {!edit && (
        <button className="header__btn" onClick={activeEdit}>
          Edit Name
        </button>
      )}
    </div>
  );
};

export default HeaderPanel;
