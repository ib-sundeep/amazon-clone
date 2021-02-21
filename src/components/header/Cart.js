import React from 'react';
import Icon from '@mdi/react';
import { mdiCartOutline } from '@mdi/js';
import { Link } from 'react-router-dom';

import './Cart.scss';


function Cart() {
  const { totalQuantity } = { totalQuantity: 5, products: [] };

  return (
    <Link to="/cart" className="h-cart">
      <Icon path={mdiCartOutline} size={1.4} />
      <div className="h-cart__count">{totalQuantity}</div>
    </Link>
  );
}

export default Cart;
