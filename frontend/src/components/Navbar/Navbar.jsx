import React from "react";
import LogoArgentBank from "/img/argentBankLogo.webp";
import { userLogout } from "../../actions/user.action";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const Navbar = () => {
  const tokens =
    useSelector((state) => state.user.token) ||
    localStorage.getItem("userToken");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userData = useSelector((state) => state.user.userData);

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(userLogout(navigate));
  };

  if (!tokens) {
    return (
      <nav className="Navbar">
        <Link to="/">
          <img
            src={LogoArgentBank}
            className="Navbar__img"
            alt="Cet élément représente le Logo de l'application web Argent Bank"
          />
        </Link>
        <div className="Navbar__right">
          <i className="fa-solid fa-circle-user Navbar__icon"></i>
          <Link to={"/login"} className="Navbar__paragraphe">
            Sign In
          </Link>
        </div>
      </nav>
    );
  } else {
    return (
      <nav className="Navbar">
        <Link to="/">
          <img
            src={LogoArgentBank}
            className="Navbar__img"
            alt="Cet élément représente le Logo de l'application web Argent Bank"
          />
        </Link>
        <div className="Navbar__right">
          <i className="fa-solid fa-circle-user Navbar__icon"></i>
          <Link to="/userpanel">
            <p className="Navbar__name">{userData && userData.userName}</p>
          </Link>
          <i className="fa-solid fa-right-from-bracket Navbar__icon"></i>
          <Link className="Navbar__paragraphe" onClick={handleLogout}>
            Sign Out
          </Link>
        </div>
      </nav>
    );
  }
};

export default Navbar;
