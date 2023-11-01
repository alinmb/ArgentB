import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { userLogin } from "../../actions/user.action";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const [errorMessage, setErrorMessage] = useState("");

  const form = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleForm = async (e) => {
    e.preventDefault();

    const postData = {
      email: form.current[0].value,
      password: form.current[1].value,
      checked: form.current.querySelector("#remember-me").checked,
    };

    dispatch(userLogin(postData, navigate, setErrorMessage));
  };

  return (
    <main className="Signin">
      <section className="Signin__form">
        <i className="fa fa-user-circle Signin__icon"></i>
        <h1>Sign In</h1>
        <form ref={form} onSubmit={(e) => handleForm(e)}>
          <div className="Signin__wrapper">
            <label htmlFor="email">Email</label>
            <input type="text" id="email" required />
          </div>
          <div className="Signin__wrapper">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" required />
          </div>
          <div className="Signin__remember">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <p style={errorMessage ? { color: "red" } : null}>{errorMessage}</p>
          <button className="Signin__btn" type="submit">
            Sign In
          </button>
        </form>
      </section>
    </main>
  );
};

export default Form;
