import React, { useRef } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { useDispatch /*useSelector*/ } from "react-redux";
import { userLogin } from "../../actions/user.action";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const form = useRef();
  const dispatch = useDispatch();
  // const user = useSelector((state) => state.userReducer);
  const navigate = useNavigate();

  const handleForm = async (e) => {
    e.preventDefault();

    console.log(form);

    const postData = {
      email: form.current[0].value,
      password: form.current[1].value,
    };

    dispatch(userLogin(postData, navigate));
  };

  return (
    <div>
      <Navbar />
      <main className="Signin">
        <section className="Signin__form">
          <i className="fa fa-user-circle Signin__icon"></i>
          <h1>Sign In</h1>
          <form ref={form} onSubmit={(e) => handleForm(e)}>
            <div className="Signin__wrapper">
              <label htmlFor="email">Username</label>
              <input type="text" id="email" />
            </div>
            <div className="Signin__wrapper">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" />
            </div>
            <div className="Signin__remember">
              <input type="checkbox" id="remember-me" />
              <label htmlFor="remember-me">Remember me</label>
            </div>
            <button className="Signin__btn" type="submit">
              Sign In
            </button>
          </form>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Signin;
