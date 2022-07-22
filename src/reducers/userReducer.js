import { types } from "./types/types";

const initialState = {
    users: [],
    activeUser: false
}


export const userReducer = (state = initialState, action) => {

    switch (action.type) {
        case types.activeUser:
            return {
                ...state,
                activeUser: { ...action.payload }
            }

        case types.clearActiveUser:
            return {
                ...state,
                activeUser: false
            }

        case types.loadUsers:
            return {
                ...state,
                users: action.payload
            }

        case types.usersLogout:
            return {
                ...initialState
            }

        case types.addUser:
            return {
                ...state,
                users: [
                    ...state.users,
                    action.payload
                ]
            }

        case types.updateUser:
            return {
                ...state,
                users: state.users.map(
                    e => (e._id === action.payload._id) ? action.payload : e
                )
            }

        case types.deleteUser:
            return {
                ...state,
                users: state.users.filter(
                    e => (e._id !== state.activeUser._id)
                ),
                activeUser: false
            }


        default:
            return state;
    }
}