/** Libraries */
import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    checking: true,
    uid: null,
    name: null,
    email: null,
    role: null,
    data: null
  },
  reducers: {
    authLogin: (state, action) => {

      state.checking = false;
      state.uid = action.payload.uid;
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.role = action.payload.role;
      state.data = action.payload.data;
    },
    authCheckingFinish: (state) => {

      state.checking = false;
    },
    authLogout: (state) => {

      state.uid = null;
      state.name = null;
      state.email = null;
      state.role = null;
      state.data = null;
      state.checking = false;
    },

  },
})

export const {
  authLogin,
  authCheckingFinish,
  authLogout } = authSlice.actions;