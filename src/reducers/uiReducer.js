import { types } from "./types/types";


const initialState = {
    modalProductAdd: false,
    modalProductEdit: false,
    addProductProgress: false,
    modalUserAdd: false,
    modalUserEdit: false,
    successAlert: {
        status: false,
        title: ''
    },
    errorAlert: {
        status: false,
        title: ''
    },
    progressBackdrop: { status: false },
    dialogDelete: false,
    dialogFields: { status: false },
    recordModal: false,
    categoriesModal: false

}

export const uiReducer = (state = initialState, action) => {

    switch (action.type) {

        case types.uiLogout:
            return {
                ...initialState
            }

        /* ALERTS */

        case types.uiOpenSuccessAlert:
            return {
                ...state,
                successAlert: {
                    status: true,
                    title: action.payload
                }
            }

        case types.uiCloseSuccessAlert:
            return {
                ...state,
                successAlert: { status: false }
            }

        case types.uiOpenErrorAlert:
            return {
                ...state,
                errorAlert: {
                    status: true,
                    title: action.payload
                }
            }

        case types.uiCloseErrorAlert:
            return {
                ...state,
                errorAlert: { status: false }
            }

        case types.uiOpenProgressBackdrop:
            return {
                ...state,
                progressBackdrop: { status: true }
            }

        case types.uiCloseProgressBackdrop:
            return {
                ...state,
                progressBackdrop: { status: false }
            }

        case types.uiOpenDialogDelete:
            return {
                ...state,
                dialogDelete: true
            }

        case types.uiCloseDialogDelete:
            return {
                ...state,
                dialogDelete: false
            }

        case types.uiOpenDialogFields:
            return {
                ...state,
                dialogFields: {
                    status: true,
                    errors: action.payload
                }
            }

        case types.uiCloseDialogFields:
            return {
                ...state,
                dialogFields: {
                    ...state.dialogFields,
                    status: false
                }
            }



        /* PRODUCTS */

        case types.uiOpenProductModal:
            return {
                ...state,
                modalProductAdd: true
            }

        case types.uiCloseProductModal:
            return {
                ...state,
                modalProductAdd: false
            }

        case types.uiOpenProductModalEdit:
            return {
                ...state,
                modalProductEdit: true
            }

        case types.uiCloseProductModalEdit:
            return {
                ...state,
                modalProductEdit: false
            }

        /* USERS */

        case types.uiOpenUserModalEdit:
            return {
                ...state,
                modalUserEdit: true
            }

        case types.uiCloseUserModalEdit:
            return {
                ...state,
                modalUserEdit: false
            }

        case types.uiOpenUserModalAdd:
            return {
                ...state,
                modalUserAdd: true
            }

        case types.uiCloseUserModalAdd:
            return {
                ...state,
                modalUserAdd: false
            }

        /* RECORDS */

        case types.uiOpenRecordModal:
            return {
                ...state,
                recordModal: true
            }

        case types.uiCloseRecordModal:
            return {
                ...state,
                recordModal: false
            }

        /* CATEGORIES */

        case types.uiOpenCategoriesModal:
            return {
                ...state,
                categoriesModal: true
            }

        case types.uiCloseCategoriesModal:
            return {
                ...state,
                categoriesModal: false
            }


        default:
            return state;
    }

}