import axios from "axios";

export const USER_LOGIN = "USER_LOGIN";
export const USER_LOGOUT = "USER_LOGOUT";
export const USER_PROFIL = "USER_PROFIL";
export const EDIT_PROFIL = "EDIT_PROFIL";
export const SET_TOKEN = "SET_TOKEN";
export const REMOVE_TOKEN = "REMOVE_TOKEN";

export const setUserToken = (token) => {
  return { type: SET_TOKEN, token };
};
export const removeUserToken = () => {
  return { type: REMOVE_TOKEN };
};

//Login
export const userLogin = (data, navigate, setErrorMessage) => {
  return async (dispatch) => {
    try {
      const res = await axios.post(
        `http://localhost:3001/api/v1/user/login`,
        data
      );
      const token = res.data.body.token;

      if (res.data.status === 200) {
        navigate("/userpanel");
        dispatch(setUserToken(token));
      }
      if (data.checked) {
        localStorage.setItem("userToken", token);
      } else {
        sessionStorage.setItem("userToken", token);
      }
      if (res.data.status === 400) {
        sessionStorage.removeItem("userToken");
        localStorage.removeItem("userToken");
      }
      dispatch({ type: USER_LOGIN });
    } catch (error) {
      console.error("Erreur lors de la connexion:", error);
      setErrorMessage("Incorrect username or password");
    }
  };
};

//Logout
export const userLogout = (navigate) => {
  return (dispatch) => {
    sessionStorage.removeItem("userToken");
    localStorage.removeItem("userToken");
    dispatch(removeUserToken());
    navigate("/");
    return {
      type: USER_LOGOUT,
    };
  };
};

//Profils
export const getUserData = () => {
  return async (dispatch) => {
    try {
      const tokens =
        sessionStorage.getItem("userToken") ||
        localStorage.getItem("userToken");

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
export const editedUsername = (userName) => {
  return async (dispatch) => {
    try {
      const tokens =
        sessionStorage.getItem("userToken") ||
        localStorage.getItem("userToken");

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
