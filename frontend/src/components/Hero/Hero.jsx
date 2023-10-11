import React from "react";
import headerImg from "/img/bank-tree.webp";
import headerImgSm from "/img/bank-tree-sm.webp";

const Hero = () => {
  return (
    <header className="Hero">
      <img
        src={headerImgSm}
        srcSet={`${headerImg} 1000w`}
        alt="Cette photographie représente un verre transparent avec des pièces avec une petite plante qui y pousse au milieu"
        className="Hero__img"
      />
      <div className="Hero__rightBloc">
        <h2 className="Hero__title">
          No fees.
          <br />
          No minimum deposit. <br />
          High interest rates.
        </h2>
        <p className="Hero__txt">
          Open a savings account with <br />
          Argent Bank today!
        </p>
      </div>
    </header>
  );
};

export default Hero;
