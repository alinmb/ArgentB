import React from "react";
import LogoArgentBank from "/img/argentBankLogo.png";

const Navbar = () => {
  return (
    <nav className="Navbar">
      <img
        src={LogoArgentBank}
        className="Navbar__img"
        alt="Cet élément représente le Logo de l'application web Argent Bank"
      />
      <div className="Navbar__right">
        <i className="fa-solid fa-circle-user Navbar__icon"></i>
        <p className="Navbar__paragraphe">Sign In</p>
      </div>
    </nav>
  );
};

export default Navbar;
