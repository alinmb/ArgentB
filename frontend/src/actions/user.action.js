import axios from "axios";

export const USER_LOGIN = "USER_LOGIN";

export const userLogin = (data, navigate) => {
  return (dispatch) => {
    return axios
      .post(`http://localhost:3001/api/v1/user/login`, data)
      .then((res) => {
        console.log(res);
        if (res.data.status === 200) {
          navigate("/userpanel");
          console.log(res.data.body.token);
        }
        dispatch({ type: USER_LOGIN, payload: data });
      })
      .catch((error) => {
        console.error("Erreur lors de la connexion:", error);
      });
  };
};
