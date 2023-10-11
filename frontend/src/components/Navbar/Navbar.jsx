import React, { useEffect } from "react";
import LogoArgentBank from "/img/argentBankLogo.png";
import { userLogout } from "../../actions/user.action";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUserData } from "../../actions/user.action";

const Navbar = () => {
  const token =
    sessionStorage.getItem("userToken") || localStorage.getItem("userToken");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userData = useSelector((state) => state.user.userData);

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(userLogout(navigate));
    navigate("/");
  };

  useEffect(() => {
    dispatch(getUserData());
  }, [dispatch]);
  if (!token) {
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
          {/* Si on est sur la page d'accueil donc sans token donc pas co, afficher ce link, si token = true remplacer le "sign in" par un sign out - Penser à l'username */}
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
          <Link to={"/"} className="Navbar__paragraphe" onClick={handleLogout}>
            Sign Out
          </Link>
          {/* Si on est sur la page d'accueil donc sans token donc pas co, afficher ce link, si token = true remplacer le "sign in" par un sign out - Penser à l'username */}
        </div>
      </nav>
    );
  }
};

export default Navbar;
