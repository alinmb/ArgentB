import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PrivateRoute from "./securedRoute/PrivateRoute.jsx";
import App from "./App.jsx";
import Login from "./pages/Login/Login.jsx";
import Panel from "./pages/Panel/Panel.jsx";
import Error from "./pages/Error/Error.jsx";
// REDUX
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/userpanel",
    element: <PrivateRoute element={<Panel />} />,
  },
  {
    path: "*",
    element: <Error />,
  },
]);

const store = configureStore({
  reducer: rootReducer,
  devTools: true,
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
