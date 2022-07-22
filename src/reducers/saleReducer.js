import { types } from "./types/types";

const initialState = {
    sales: [],
    activeSale: false
}


export const saleReducer = (state = initialState, action) => {

    switch (action.type) {

        case types.activeSale:
            return {
                ...state,
                activeSale: { ...action.payload }
            }

        case types.clearActiveSale:
            return {
                ...state,
                activeSale: false
            }

        case types.loadSales:
            return {
                ...state,
                sales: action.payload
            }

        case types.addNewSale:
            return {
                ...state,
                sales: [
                    ...state.sales,
                    action.payload
                ]
            }

        case types.updateFilteredSales:
            return {
                ...state,
                sales: state.sales.map(
                    e => (e._id === action.payload._id) ? action.payload : e
                )
            }

        case types.salesLogout:
            return {
                ...initialState
            }

        default:
            return state;
    }
}