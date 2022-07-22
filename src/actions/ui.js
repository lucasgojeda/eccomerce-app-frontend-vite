import { types } from "../reducers/types/types";


export const uiLogout = () => ({
    type: types.uiLogout
})

/* RECORDS */

export const uiOpenRecordModal = () => ({
    type: types.uiOpenRecordModal
})

export const uiCloseRecordModal = () => ({
    type: types.uiCloseRecordModal
})
/* CATEGORIES */

export const uiOpenCategoriesModal = () => ({
    type: types.uiOpenCategoriesModal
})

export const uiCloseCategoriesModal = () => ({
    type: types.uiCloseCategoriesModal
})

/* PRODUCTS */

export const uiOpenProductModal = () => ({
    type: types.uiOpenProductModal
})

export const uiCloseProductModal = () => ({
    type: types.uiCloseProductModal
})

export const uiOpenProductModalEdit = () => ({
    type: types.uiOpenProductModalEdit
})

export const uiCloseProductModalEdit = () => ({
    type: types.uiCloseProductModalEdit
})


/* USERS */

export const uiOpenUserModalEdit = () => ({
    type: types.uiOpenUserModalEdit
})

export const uiCloseUserModalEdit = () => ({
    type: types.uiCloseUserModalEdit
})

export const uiOpenUserModalAdd = () => ({
    type: types.uiOpenUserModalAdd
})

export const uiCloseUserModalAdd = () => ({
    type: types.uiCloseUserModalAdd
})

/* ALERTS */

export const uiOpenSuccessAlert = (title) => ({
    type: types.uiOpenSuccessAlert,
    payload: title
})

export const uiCloseSuccessAlert = () => ({
    type: types.uiCloseSuccessAlert
})

export const uiOpenErrorAlert = (title) => ({
    type: types.uiOpenErrorAlert,
    payload: title
})

export const uiCloseErrorAlert = () => ({
    type: types.uiCloseErrorAlert
})

export const uiOpenProgressBackdrop = () => ({
    type: types.uiOpenProgressBackdrop,
})

export const uiCloseProgressBackdrop = () => ({
    type: types.uiCloseProgressBackdrop
})

export const uiOpenDialogDelete = () => ({
    type: types.uiOpenDialogDelete,
})

export const uiCloseDialogDelete = () => ({
    type: types.uiCloseDialogDelete
})

export const uiOpenDialogFields = (errors) => ({
    type: types.uiOpenDialogFields,
    payload: errors
})

export const uiCloseDialogFields = () => ({
    type: types.uiCloseDialogFields
})
