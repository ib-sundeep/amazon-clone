import React from 'react';

import BrandLogo from 'images/amazon-logo.png';
import { Link } from 'react-router-dom';

import './Logo.scss';

function Logo({ country = 'in' }) {
  return (
    <Link to="/cart" className="logo">
      <img className="logo__img" alt="Amazon" src={BrandLogo} />
      {country && <span className="logo__country">.{country}</span>}
    </Link>
  );
}

export default Logo;
