import React from 'react';

import './index.scss';

import DeliveryLocation from './DeliveryLocation';
import Logo from './Logo';
import Search from './Search';
import Account from './Account';
import Cart from './Cart';
import Orders from './Orders';

function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <Logo />
        <DeliveryLocation />
        <Search />
        <Account />
        <Orders />
        <Cart />
      </div>
    </header>
  );
}

export default Header;
