import React, { useState } from "react";
import { useSelector } from "react-redux";
import UsernameEditor from "../UsernameEditor/UsernameEditor";

const HeaderPanel = () => {
  const [edit, setEdit] = useState(false);
  const userData = useSelector((state) => state.user.userData);

  const activeEdit = () => {
    setEdit((prevState) => !prevState);
  };

  return (
    <div className="header">
      <h1>
        Welcome back
        <br />
        {userData && userData.userName}
      </h1>
      {edit && <UsernameEditor onCancel={activeEdit} />}
      {!edit && (
        <button className="header__btn" onClick={activeEdit}>
          Edit Name
        </button>
      )}
    </div>
  );
};

export default HeaderPanel;
