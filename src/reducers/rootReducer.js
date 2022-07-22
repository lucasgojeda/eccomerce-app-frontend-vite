import { combineReducers } from 'redux';

import { authReducer } from './authReducer';
import { binReducer } from './binReducer';
import { cartReducer } from './cartReducer';
import { categoriesReducer } from './categoriesReducer';
import { dashboardReducer } from './dashboardReducer';
import { notificationsReducer } from './notificationsReducer';
import { productReducer } from './productReducer';
import { recordsReducer } from './recordsReducer';
import { saleReducer } from './saleReducer';
import { uiReducer } from './uiReducer';
import { userReducer } from './userReducer';

export const rootReducer = combineReducers({
    auth: authReducer,
    product: productReducer,
    ui: uiReducer,
    categories: categoriesReducer,
    users: userReducer, 
    bin: binReducer,
    records: recordsReducer,
    sales: saleReducer,
    dashboard: dashboardReducer,
    notifications: notificationsReducer,
    cart: cartReducer,
})
 
