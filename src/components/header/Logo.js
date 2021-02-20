import React from 'react';

import BrandLogo from 'images/amazon-logo.png';

import './Logo.scss';

function Logo({ country = 'in' }) {
  return (
    <div className="logo">
      <img className="logo__img" alt="Amazon" src={BrandLogo} />
      {country && <span className="logo__country">.{country}</span>}
    </div>
  );
}

export default Logo;
