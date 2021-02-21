import React from 'react';
import Icon from '@mdi/react';
import { mdiCartOutline } from '@mdi/js';
import { useCartState, useCartDispatch } from '../../cart-context'


import './Cart.scss';

function Cart() {
  const { cart } = useCartState();

  return (
    <div className="h-cart">
      <Icon path={mdiCartOutline} size={1.4} />
      <div className="h-cart__count">{cart.length}</div>
    </div >
  );
}

export default Cart;
