import { types } from "./types/types";

const initialState = {
    records: [],
    activeRecord: false
}


export const recordsReducer = (state = initialState, action) => {

    switch (action.type) {

        case types.activeRecord:
            return {
                ...state,
                activeRecord: { ...action.payload }
            }

        case types.clearActiveRecord:
            return {
                ...state,
                activeRecord: false
            }

        case types.addNewRecord:
            return {
                ...state,
                records: [
                    ...state.records,
                    action.payload
                ]
            }

        case types.loadRecords:
            return {
                ...state,
                records: action.payload
            }

        case types.recordsLogout:
            return {
                ...initialState
            }


        default:
            return state;
    }
}