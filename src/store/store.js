import { configureStore } from '@reduxjs/toolkit';

import { authSlice } from './slices/authSlice';
import { binSlice } from './slices/binSlice';
import { cartSlice } from './slices/cartSlice';
import { categoriesSlice } from './slices/categoriesSlice';
import { dashboardSlice } from './slices/dashboardSlice';
import { notificationsSlice } from './slices/notificationsSlice';
import { productSlice } from './slices/productSlice';
import { recordsSlice } from './slices/recordsSlice';
import { saleSlice } from './slices/saleSlice';
import { uiSlice } from './slices/uiSlice';
import { userSlice } from './slices/userSlice';


export const store = configureStore({
  reducer: {
    
      auth: authSlice.reducer,
      product: productSlice.reducer,
      ui: uiSlice.reducer,
      users: userSlice.reducer,
      sales: saleSlice.reducer,
      records: recordsSlice.reducer,
      notifications: notificationsSlice.reducer,
      dashboard: dashboardSlice.reducer,
      cart: cartSlice.reducer,
      categories: categoriesSlice.reducer,
      bin: binSlice.reducer,
  },
})