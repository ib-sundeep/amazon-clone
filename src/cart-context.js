import React from 'react';

import { calculatePriceDetails } from 'utils/product';

const CartStateContext = React.createContext();
const CartDispatchContext = React.createContext();

function cartReducer(state, action) {
  switch (action.type) {
    default: {
      return state;
    }
  }
}

function CartProvider({ children }) {
  const [state, dispatch] = React.useReducer(cartReducer, {
    products: {},
    totalQuantity: 0,
    totalPrice: 0,
  });
  return (
    <CartStateContext.Provider value={state}>
      <CartDispatchContext.Provider value={dispatch}>
        {children}
      </CartDispatchContext.Provider>
    </CartStateContext.Provider>
  );
}

function useCartState() {
  const context = React.useContext(CartStateContext);
  if (context === undefined) {
    throw new Error('useCountState must be used within a CountProvider');
  }
  return context;
}

function useCartDispatch() {
  const context = React.useContext(CartDispatchContext);
  if (context === undefined) {
    throw new Error('useCountDispatch must be used within a CountProvider');
  }
  return context;
}

export { CartProvider, useCartState, useCartDispatch };
