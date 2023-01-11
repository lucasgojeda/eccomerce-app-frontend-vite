/** Libraries */
import { createSlice } from '@reduxjs/toolkit';

export const productSlice = createSlice({
  name: 'product',
  initialState: {
    products: [],
    bestProducts: [],
  },
  reducers: {
    loadProducts: (state, action) => {

      state.products = [...action.payload];
    },
    loadBestProducts: (state, action) => {

      state.bestProducts = [...action.payload];
    },
    productsLogout: (state) => {

      state.products = [];
      state.bestProducts = [];
    },
  },
})

export const {
  loadProducts,
  loadBestProducts,
  productsLogout, } = productSlice.actions;