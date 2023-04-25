/** Libraries */
import React, { useEffect } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Stack from "@mui/material/Stack";

import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

/** Middlewares */
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

/** Components */
import { LoginPage, RegisterPage } from "../Application/auth";
import { HomePage } from "../Application/home";
import { CartPage } from "../Application/cart";
import { NotificationsPage } from "../Application/notifications";
import { ProductPage } from "../Application/product";
import { SearchPage } from "../Application/search";
import { AccountPage } from "../Application/account";

import {
  NavbarLogged,
  NavbarUnlogged,
  ProgressBackdrop,
} from "../Application/ui";

/** Custom hooks */
import { useAuthStore, useCategoriesStore, useProductsStore } from "../hooks";

export const AppRouter = () => {
  const { uid, checking, startChecking } = useAuthStore();

  const { startLoadBestProducts } = useProductsStore();
  const { categories, startLoadCategories } = useCategoriesStore();

  useEffect(() => {
    startLoadBestProducts();
    startLoadCategories();
    startChecking();
  }, []);

  if (checking || !categories) {
    return (
      <Backdrop
        sx={{
          display: "flex",
          flexDirection: "column",
          color: "#fff",
          zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
        open={true}
      >
        <CircularProgress
          color="primary"
          size="80px"
          sx={{ display: "block" }}
        />
        <Stack sx={{ width: "300px", marginTop: "5vh" }} spacing={2}>
          <Alert severity="info">
            <AlertTitle>Info</AlertTitle>
            <strong>The server is for free</strong> so this can take a bit of
            time the first time you start it. Thanks for your time!
          </Alert>
        </Stack>
      </Backdrop>
    );
  }

  return (
    <BrowserRouter>
      <ProgressBackdrop />

      <Routes>
        <Route
          path="login"
          element={
            <PublicRoute isAutenticated={!!uid}>
              <LoginPage />
            </PublicRoute>
          }
        />

        <Route
          path="register"
          element={
            <PublicRoute isAutenticated={!!uid}>
              <RegisterPage />
            </PublicRoute>
          }
        />

        <Route
          path="/"
          element={
            <PrivateRoute>
              <>
                {uid ? <NavbarLogged /> : <NavbarUnlogged />}
                <HomePage />
              </>
            </PrivateRoute>
          }
        />

        <Route
          path="/account"
          element={
            <PrivateRoute>
              {uid ? <NavbarLogged /> : <NavbarUnlogged />}
              <AccountPage />
            </PrivateRoute>
          }
        />

        <Route
          path="/search"
          element={
            <PrivateRoute>
              <>
                {uid ? <NavbarLogged /> : <NavbarUnlogged />}
                <SearchPage />
              </>
            </PrivateRoute>
          }
        />

        <Route
          path="/cart"
          element={
            <PrivateRoute>
              {uid ? <NavbarLogged /> : <NavbarUnlogged />}
              <CartPage />
            </PrivateRoute>
          }
        />

        <Route
          path="/notifications"
          element={
            <PrivateRoute>
              {uid ? <NavbarLogged /> : <NavbarUnlogged />}
              <NotificationsPage />
            </PrivateRoute>
          }
        />

        <Route
          path="/product/:category/:id"
          element={
            <PrivateRoute>
              <>
                {uid ? <NavbarLogged /> : <NavbarUnlogged />}
                <ProductPage />
              </>
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};
