import React from 'react';
import Icon from '@mdi/react';
import { mdiCartOutline } from '@mdi/js';

import './Cart.scss';

function Cart() {
  return (
    <div className="h-cart">
      <Icon path={mdiCartOutline} size={1.4} />
      <div className="h-cart__count">0</div>
    </div>
  );
}

export default Cart;
