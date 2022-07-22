import { types } from "./types/types";

const initialState = {
    binProducts: [],
    activeBinProduct: false,
    binUsers: [],
    activeBinUser: false,
}


export const binReducer = (state = initialState, action) => {

    switch (action.type) {

        /* PRODUCTS */

        case types.addBinProduct:
            return {
                ...state,
                binProducts: [
                    ...state.binProducts,
                    action.payload
                ]
            }

        case types.deleteBinProduct:
            return {
                ...state,
                binProducts: state.binProducts.filter(
                    e => e._id !== action.payload._id
                )
            }

        case types.setActiveBinProduct:
            return {
                ...state,
                activeBinProduct: { ...action.payload }
            }

        case types.clearActiveBinProduct:
            return {
                ...state,
                activeBinProduct: false
            }

        case types.loadBinProducts:
            return {
                ...state,
                binProducts: action.payload
            }

        case types.productsBinLogout:
            return {
                activeBinProduct: false,
                binProducts: []
            }

        /* USERS */

        case types.addBinUser:
            return {
                ...state,
                binUsers: [
                    ...state.binUsers,
                    action.payload
                ]
            }

        case types.deleteBinUser:
            return {
                ...state,
                binUsers: state.binUsers.filter(
                    e => e._id !== action.payload._id
                )
            }

        case types.setActiveBinUser:
            return {
                ...state,
                activeBinUser: { ...action.payload }
            }

        case types.clearActiveBinUser:
            return {
                ...state,
                activeBinUser: false
            }

        case types.loadBinUsers:
            return {
                ...state,
                binUsers: action.payload
            }

            case types.usersBinLogout:
                return {
                    activeBinUser: false,
                    binUsers: false
                }


        default:
            return state;
    }
}