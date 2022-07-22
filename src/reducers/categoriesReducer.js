import { types } from "./types/types";

const initialState = {
    categories: [],
}


export const categoriesReducer = (state = initialState, action) => {

    switch (action.type) {

            
        case types.loadCategories:
            return {
                ...state,
                categories: action.payload
            }

        case types.addNewCategory:
            return {
                ...state,
                categories: [
                    ...state.categories,
                    action.payload
                ]
            }

        case types.updateCategory:
            return {
                ...state,
                categories: state.categories.map(   
                    e => ( e._id === action.payload._id ) ? action.payload : e
                )
            }

        case types.deleteCategory:
            return {
                ...state,
                categories: state.categories.filter(   
                    e => ( e._id !== action.payload._id ) && e
                ),
            }


        default:
            return state;
    }
}