import sortArray from "sort-array";
import { types } from "./types/types";

const initialState = {
    notifications: [],
    sales_user: [],
}


export const notificationsReducer = (state = initialState, action) => {

    switch (action.type) {

        case types.loadNotifications:
            return {
                ...state,
                notifications: action.payload.notifications,
                sales_user: action.payload.sales_user
            }

        case types.addSale_user:
            return {
                ...state,
                sales_user: sortArray((action.payload.user._id === state.notifications[0].user) && state.sales_user.map(
                    e => (e._id === action.payload._id) ? action.payload : e
                ), {
                    by: 'date_sended',
                    order: 'desc'
                })
            }

        case types.addNotification:
            return {
                ...state,
                notifications: [
                    ...state.notifications,
                    action.payload
                ]
            }

        case types.updateNotification:
            return {
                ...state,
                notifications: state.notifications.map(
                    e => (e._id === action.payload._id) ? action.payload : e
                )
            }

        case types.notificationsLogout:
            return {
                ...initialState
            }

        default:
            return state;
    }
}