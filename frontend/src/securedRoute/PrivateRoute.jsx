import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ element }) => {
  const userLogged =
    !!sessionStorage.getItem("userToken") ||
    !!localStorage.getItem("userToken");
  console.log(userLogged);

  return userLogged ? element : <Navigate to="/login" />;
};

export default PrivateRoute;
