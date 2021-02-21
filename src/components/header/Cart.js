import React from 'react';
import Icon from '@mdi/react';
import { mdiCartOutline } from '@mdi/js';

import './Cart.scss';

import { useCartState } from 'cart-context';

function Cart() {
  const { totalQuantity } = useCartState();

  return (
    <div className="h-cart">
      <Icon path={mdiCartOutline} size={1.4} />
      <div className="h-cart__count">{totalQuantity}</div>
    </div>
  );
}

export default Cart;
