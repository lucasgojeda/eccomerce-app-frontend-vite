import { types } from "./types/types";

const initialState = {
    products: [],
    activeProduct: false,
}


export const productReducer = (state = initialState, action) => {

    switch (action.type) {
        case types.activeProduct:
            return {
                ...state,
                activeProduct: { ...action.payload }
            }

        case types.clearActiveProduct:
            return {
                ...state,
                activeProduct: false
            }

        case types.clearFilteredProducts:
            return {
                ...state,
                filteredProducts: []
            }

        case types.loadProducts:
            return {
                ...state,
                products: action.payload
            }

        case types.loadFilteredProducts:
            return {
                ...state,
                filteredProducts: action.payload
            }

        case types.addProduct:
            return {
                ...state,
                products: [
                    ...state.products,
                    action.payload
                ]
            }

        case types.updateProduct:
            return {
                ...state,
                products: state.products.map(
                    e => (e._id === action.payload._id) ? action.payload : e
                )
            }

        case types.deleteProduct:
            return {
                ...state,
                products: state.products.filter(
                    e => (e._id !== action.payload._id)
                ),
                activeProduct: false
            }

        case types.productsLogout:
            return {
                ...initialState
            }


        default:
            return state;
    }
}