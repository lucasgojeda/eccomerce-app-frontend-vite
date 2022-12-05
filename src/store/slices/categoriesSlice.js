import { createSlice } from '@reduxjs/toolkit';

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState: {
    categories: [],
  },
  reducers: {
    loadCategories: (state, action) => {

      state.categories = action.payload;
    },
  },
})

export const { loadCategories } = categoriesSlice.actions;