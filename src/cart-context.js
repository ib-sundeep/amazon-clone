import React from 'react';

import { calculatePriceDetails } from 'utils.js/product';

const CartStateContext = React.createContext();
const CartDispatchContext = React.createContext();

function cartReducer(state, action) {
  switch (action.type) {
    case 'increment': {
      const product = action.payload;
      const currentEntry = state.products[product.id];
      let newEntry;
      if (currentEntry) {
        newEntry = {
          ...currentEntry,
          quantity: currentEntry.quantity + 1,
        };
      } else {
        newEntry = {
          ...product,
          quantity: 1,
        };
      }

      const { finalPrice } = calculatePriceDetails(product.price);
      return {
        ...state,
        totalQuantity: state.totalQuantity + 1,
        totalPrice: state.totalPrice + finalPrice,
        products: {
          ...state.products,
          [product.id]: newEntry,
        },
      };
    }
    case 'decrement': {
      const product = action.payload;
      const currentEntry = state.products[product.id];
      if (!currentEntry) return state;

      let newEntry;
      if (currentEntry.quantity === 1) {
        newEntry = null;
      } else {
        newEntry = {
          ...currentEntry,
          quantity: currentEntry.quantity - 1,
        };
      }

      const { finalPrice } = calculatePriceDetails(product.price);
      return {
        ...state,
        totalQuantity: state.totalQuantity - 1,
        totalPrice: state.totalPrice - finalPrice,
        products: {
          ...state.products,
          [product.id]: newEntry,
        },
      };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
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
