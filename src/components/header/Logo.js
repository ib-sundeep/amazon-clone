import React from "react";

import BrandLogo from "images/logo.png";
import { Link } from "react-router-dom";

import "./Logo.scss";

function Logo({ country = "" }) {
  return (
    <Link to="/" className="logo">
      <img className="logo__img" alt="Amazon" src={BrandLogo} />
      {country && <span className="logo__country">.{country}</span>}
    </Link>
  );
}

export default Logo;
