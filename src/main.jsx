/** Libraries */
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import { GoogleOAuthProvider } from '@react-oauth/google';

import { ThemeProvider } from '@mui/material/styles';

/** State management */
import { store } from "./store/store";

/** Routers */
import { AppRouter } from './router/AppRouter';

/** Styles */
import { theme } from "./styles";

import "./main.css";

/** Environments */

import { getEnvironmets } from './helpers';

const { VITE_REACT_APP_GOOGLE_CLIENT_ID } = getEnvironmets();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GoogleOAuthProvider clientId={VITE_REACT_APP_GOOGLE_CLIENT_ID}>
          <AppRouter />
        </GoogleOAuthProvider>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
