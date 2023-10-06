import axios from "axios";

export const USER_LOGIN = "USER_LOGIN";
export const USER_LOGOUT = "USER_LOGOUT";
export const USER_PROFIL = "USER_PROFIL";

//Login
export const userLogin = (data, navigate) => {
  return (dispatch) => {
    return axios
      .post(`http://localhost:3001/api/v1/user/login`, data)
      .then((res) => {
        console.log(res);
        const token = res.data.body.token;

        if (res.data.status === 200) {
          navigate("/userpanel");
          console.log(res.data.body.token);
        }

        if (data.checked) {
          localStorage.setItem("userToken", token);
        } else {
          sessionStorage.setItem("userToken", token);
        }
        dispatch({ type: USER_LOGIN, payload: data });

        if (res.data.status === 400) {
          sessionStorage.removeItem("userToken");
          localStorage.removeItem("userToken");
          navigate("/login");
        }
      })
      .catch((error) => {
        console.error("Erreur lors de la connexion:", error);
      });
  };
};

//Logout
export const userLogout = (navigate) => {
  sessionStorage.removeItem("userToken");
  localStorage.removeItem("userToken");
  navigate("/");
  return {
    type: USER_LOGOUT,
  };
};

//Profils
export const getUserData = () => {
  return (dispatch) => {
    const tokens =
      sessionStorage.getItem("userToken") || localStorage.getItem("userToken");

    if (!tokens) return;

    return axios
      .post(
        "http://localhost:3001/api/v1/user/profile",
        {},
        {
          headers: {
            Authorization: `Bearer ${tokens}`,
          },
        }
      )
      .then((res) => {
        if (res.data.status === 200) {
          dispatch({ type: USER_PROFIL, payload: res.data.body });
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };
};
