import { types } from "./types/types";

const initialState = {
    checking: true,
    uid: '',
    name: '',
    cart: [],
}


export const authReducer = ( state = initialState, action ) => {

    switch (action.type) {
        case types.authLogin:
            return {
            checking: false,
                ...action.payload 
            }

        case types.authCheckingFinish:
            return {
                ...state,
                checking: false
            }

        case types.authLogout:
            return {
                ...initialState,
                checking: false
            }

        default:
            return state;
    }
}