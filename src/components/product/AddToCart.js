import React from 'react';
import Icon from '@mdi/react';
import { mdiMinus, mdiPlus } from '@mdi/js';

import './AddToCart.scss';

import { useCartDispatch, useCartState } from 'cart-context';

function AddToCard({ product }) {
  return <button className="add-to-cart-button">Add to card</button>;
}

export default AddToCard;
