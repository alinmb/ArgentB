import React from "react";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <>
      <div className="Error">
        <h1 className="Error__title">404</h1>
        <h2 className="Error__subtitle">ERROR</h2>
        <Link to="/" className="Error__link">
          BACK HOME →
        </Link>
      </div>
      <Footer />
    </>
  );
};

export default Error;
