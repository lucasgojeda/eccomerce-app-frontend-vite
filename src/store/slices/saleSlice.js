import { createSlice } from '@reduxjs/toolkit';

export const saleSlice = createSlice({
  name: 'sales',
  initialState: {
    sales: [],
  },
  reducers: {
    loadSales: (state, action) => {

      state.sales = action.payload;
    },
    addNewSale: (state, action) => {

      state.sales = [
        ...state.sales,
        action.payload
      ];
    },
    updateFilteredSales: (state, action) => {

      state.sales = state.sales.map(
        e => (e._id === action.payload._id) ? action.payload : e
      );
    },
    salesLogout: (state) => {

      state.sales = [];
    },

  },
})

export const {
  loadSales,
  addNewSale,
  updateFilteredSales,
  salesLogout, } = saleSlice.actions;