import React from 'react';

import BrandLogo from 'images/amazon-logo.png';

import './Logo.scss';

function Logo() {
  return (
    <div className="logo">
      <img className="logo__img" alt="Amazon" src={BrandLogo} />
    </div>
  );
}

export default Logo;
