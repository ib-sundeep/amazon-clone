import React from 'react';
import { Link } from 'react-router-dom';

import BrandLogo from 'images/amazon-logo.png';

import './Logo.scss';

function Logo({ country = 'in' }) {
  return (
    <Link to="/" className="logo">
      <img className="logo__img" alt="Amazon" src={BrandLogo} />
      {country && <span className="logo__country">.{country}</span>}
    </Link>
  );
}

export default Logo;
