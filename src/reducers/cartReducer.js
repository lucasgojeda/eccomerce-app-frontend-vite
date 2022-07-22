import { types } from "./types/types";

const initialState = {
    cart: [],
}


export const cartReducer = ( state = initialState, action ) => {

    switch (action.type) {

        case types.updateCartProduct:
            return {
                ...state,
                cart: [
                    ...state.cart,
                    action.payload
                ]
            }

        case types.deleteCartProduct:
            return {
                ...state,
                cart: state.cart.filter(
                    e => (e._id !== action.payload._id) && e
                ),
            }
            
        case types.loadCart:
            return {
                ...state,
                cart: action.payload
            }
            
        case types.cartLogout:
            return {
                ...initialState
            }

        default:
            return state;
    }
}