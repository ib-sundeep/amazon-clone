import React from 'react'

const CartStateContext = React.createContext()
const CartDispatchContext = React.createContext()

function cartReducer(state, action) {
    switch (action.type) {
        case 'increment': {
            return {
                ...state,
                cart: [...state.cart, action.item]
            }
        }
        case 'decrement': {
            return { cart: state.cart.pop('hi') }
        }
        default: {
            throw new Error(`Unhandled action type: ${action.type}`)
        }
    }
}

function CartProvider({ children }) {
    const [state, dispatch] = React.useReducer(cartReducer, { cart: [] })
    return (
        <CartStateContext.Provider value={state}>
            <CartDispatchContext.Provider value={dispatch}>
                {children}
            </CartDispatchContext.Provider>
        </CartStateContext.Provider>
    )
}

function useCartState() {
    const context = React.useContext(CartStateContext)
    if (context === undefined) {
        throw new Error('useCountState must be used within a CountProvider')
    }
    return context
}

function useCartDispatch() {
    const context = React.useContext(CartDispatchContext)
    if (context === undefined) {
        throw new Error('useCountDispatch must be used within a CountProvider')
    }
    return context
}

export { CartProvider, useCartState, useCartDispatch }
