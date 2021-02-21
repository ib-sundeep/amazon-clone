import React from 'react';
import Icon from '@mdi/react';
import { mdiMinus, mdiPlus } from '@mdi/js';

import './AddToCart.scss';

import { useCartDispatch, useCartState } from 'cart-context';

function AddToCard({ product }) {
  const { products } = useCartState();
  const dispatch = useCartDispatch();

  const cartEntry = products[product.id];

  if (cartEntry) {
    return (
      <div className="add-to-cart">
        <button
          className="add-to-cart__action add-to-cart__action--minus"
          onClick={() => dispatch({ type: 'decrement', payload: product })}
        >
          <Icon className="add-to-cart__icon" size={1.2} path={mdiMinus} />
        </button>
        <div className="add-to-cart__quantity">{cartEntry.quantity}</div>
        <button
          className="add-to-cart__action add-to-cart__action--plus"
          onClick={() => dispatch({ type: 'increment', payload: product })}
        >
          <Icon className="add-to-cart__icon" size={1.2} path={mdiPlus} />
        </button>
      </div>
    );
  } else {
    return (
      <button
        className="add-to-cart-button"
        onClick={() => dispatch({ type: 'increment', payload: product })}
      >
        Add to cart
      </button>
    );
  }
}

export default AddToCard;
