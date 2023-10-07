import React from "react";
import { useSelector } from "react-redux";

const UsernameEditor = (props) => {
  const userData = useSelector((state) => state.user.userData);
  return (
    <form className="Editor">
      <h2>Edit user info</h2>

      <div className="Editor__username">
        <label htmlFor="uname">User name :</label>
        <input type="text" id="uname" name="uname"></input>
      </div>
      <div className="Editor__firstname">
        <label htmlFor="fname">First name :</label>
        <input
          type="text"
          id="fname"
          name="fname"
          value={userData.firstName}
          disabled
        ></input>
      </div>
      <div className="Editor__lastname">
        <label htmlFor="lname">Last name :</label>
        <input
          type="text"
          id="lname"
          name="lname"
          value={userData.lastName}
          disabled
        ></input>
      </div>
      <div className="Editor__btns">
        <button className="Editor__save">Save</button>
        <button className="Editor__cancel" onClick={props.onCancel}>
          Cancel
        </button>
      </div>
    </form>
  );
};

export default UsernameEditor;
