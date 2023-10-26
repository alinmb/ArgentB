import axios from "axios";

export const USER_LOGIN = "USER_LOGIN";
export const USER_LOGOUT = "USER_LOGOUT";
export const USER_PROFIL = "USER_PROFIL";
export const EDIT_PROFIL = "EDIT_PROFIL";
export const SET_TOKEN = "SET_TOKEN";
export const REMOVE_TOKEN = "REMOVE_TOKEN";

//Login
export const userLogin = (data, navigate, setErrorMessage) => {
  return async (dispatch) => {
    try {
      const res = await axios.post(
        `http://localhost:3001/api/v1/user/login`,
        data
      );
      const token = res.data.body.token;
      dispatch({ type: SET_TOKEN, payload: token });
      if (res.data.status === 200) {
        navigate("/userpanel");
      }
      if (data.checked) {
        localStorage.setItem("userToken", token);
      }
      if (res.data.status === 400) {
        localStorage.removeItem("userToken");
      }
      dispatch({ type: USER_LOGIN });
    } catch (error) {
      console.error("Erreur lors de la connexion:", error);
      setErrorMessage("Incorrect email or password");
    }
  };
};

//Logout
export const userLogout = (navigate) => {
  return (dispatch) => {
    localStorage.removeItem("userToken");
    dispatch({ type: REMOVE_TOKEN });
    navigate("/");
    return {
      type: USER_LOGOUT,
    };
  };
};

//Profils
export const getUserData = (token) => {
  return async (dispatch) => {
    try {
      const tokens = token || localStorage.getItem("userToken");

      if (!tokens) return;

      const res = await axios.post(
        "http://localhost:3001/api/v1/user/profile",
        {},
        {
          headers: {
            Authorization: `Bearer ${tokens}`,
          },
        }
      );
      if (res.data.status === 200) {
        dispatch({ type: USER_PROFIL, payload: res.data.body });
      }
    } catch (error) {
      console.error(error);
    }
  };
};

//Username
export const editedUsername = (userName, token) => {
  return async (dispatch) => {
    try {
      const tokens = token || localStorage.getItem("userToken");

      if (!tokens) return;
      const res = await axios.put(
        "http://localhost:3001/api/v1/user/profile",
        { userName },
        {
          headers: {
            Authorization: `Bearer ${tokens}`,
          },
        }
      );
      if (res.data.status === 200) {
        dispatch({ type: EDIT_PROFIL, payload: userName });
      }
    } catch (error) {
      console.error(error);
    }
  };
};
