import { createSlice } from '@reduxjs/toolkit';

export const uiSlice = createSlice({
  name: 'ui',
  initialState: {
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
    searchProducts: false,
  },
  reducers: {
    uiLogout: (state) => {

      state.successAlert = {
        status: false,
        title: ''
      };
      state.errorAlert = {
        status: false,
        title: ''
      };
      state.progressBackdrop = { status: false };
      state.dialogDelete = false;
      state.searchProducts = false;
    },

    /* SEARCH PRODUCTS */

    uiStartSearchProductsLoading: (state) => {

      state.searchProducts = true;
    },
    uiStopSearchProductsLoading: (state) => {

      state.searchProducts = false;
    },

    /* ALERTS */

    uiOpenSuccessAlert: (state, action) => {

      state.successAlert = {
        status: true,
        title: action.payload
      };
    },
    uiCloseSuccessAlert: (state) => {

      state.successAlert = { status: false };
    },
    uiOpenErrorAlert: (state, action) => {

      state.errorAlert = {
        status: true,
        title: action.payload
      };
    },
    uiCloseErrorAlert: (state) => {

      state.errorAlert = { status: false };
    },
    uiOpenProgressBackdrop: (state) => {

      state.progressBackdrop = { status: true };
    },
    uiCloseProgressBackdrop: (state) => {

      state.progressBackdrop = { status: false };
    },
    uiOpenDialogDelete: (state) => {

      state.dialogDelete = true;
    },
    uiCloseDialogDelete: (state) => {

      state.dialogDelete = false;
    },
  },
})

export const {

  uiLogout,

  /* SEARCH PRODUCTS */
  uiStartSearchProductsLoading,
  uiStopSearchProductsLoading,

  /*ALERTS */
  uiOpenSuccessAlert,
  uiCloseSuccessAlert,
  uiOpenErrorAlert,
  uiCloseErrorAlert,
  uiOpenProgressBackdrop,
  uiCloseProgressBackdrop,
  uiOpenDialogDelete,
  uiCloseDialogDelete,

} = uiSlice.actions;