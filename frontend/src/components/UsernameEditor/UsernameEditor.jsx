import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editedUsername } from "../../actions/user.action";

const UsernameEditor = (props) => {
  const userData = useSelector((state) => state.user.userData);
  const reduxtoken = useSelector((state) => state.user.token);
  const [editUsername, setEditUsername] = useState(userData.userName);
  const dispatch = useDispatch();

  const handleUsernameEdit = (e) => {
    e.preventDefault();
    dispatch(editedUsername(editUsername, reduxtoken));
    props.onCancel();
  };

  return (
    <form onSubmit={(e) => handleUsernameEdit(e)} className="Editor">
      <h2>Edit user info</h2>

      <div className="Editor__username">
        <label htmlFor="uname">User name :</label>
        <input
          type="text"
          id="uname"
          name="uname"
          onChange={(e) => setEditUsername(e.target.value)}
        />
      </div>
      <div className="Editor__firstname">
        <label htmlFor="fname">First name :</label>
        <input
          type="text"
          id="fname"
          name="fname"
          value={userData.firstName}
          disabled
        />
      </div>
      <div className="Editor__lastname">
        <label htmlFor="lname">Last name :</label>
        <input
          type="text"
          id="lname"
          name="lname"
          value={userData.lastName}
          disabled
        />
      </div>
      <div className="Editor__btns">
        <button className="Editor__save" type="submit">
          Save
        </button>
        <button
          className="Editor__cancel"
          type="button"
          onClick={props.onCancel}
        >
          Cancel
        </button>
      </div>
    </form>
  );
};
export default UsernameEditor;
