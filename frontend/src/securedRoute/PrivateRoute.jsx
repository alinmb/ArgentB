import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = ({ element }) => {
  const token = useSelector((state) => state.user.token);
  const userLogged = token || !!localStorage.getItem("userToken");

  return userLogged ? element : <Navigate to="/login" />;
};

export default PrivateRoute;
