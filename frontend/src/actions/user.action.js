import axios from "axios";

export const USER_LOGIN = "USER_LOGIN";
export const USER_LOGOUT = "USER_LOGOUT";

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
          navigate("/signin");
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
