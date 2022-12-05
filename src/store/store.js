import { configureStore } from '@reduxjs/toolkit';

import { authSlice } from './slices/authSlice';
import { cartSlice } from './slices/cartSlice';
import { categoriesSlice } from './slices/categoriesSlice';
import { notificationsSlice } from './slices/notificationsSlice';
import { productSlice } from './slices/productSlice';
import { saleSlice } from './slices/saleSlice';
import { uiSlice } from './slices/uiSlice';


export const store = configureStore({
  reducer: {
    
      auth: authSlice.reducer,
      product: productSlice.reducer,
      ui: uiSlice.reducer,
      sales: saleSlice.reducer,
      notifications: notificationsSlice.reducer,
      cart: cartSlice.reducer,
      categories: categoriesSlice.reducer,
  },
})