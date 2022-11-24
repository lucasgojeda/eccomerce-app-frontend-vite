import React, { useEffect } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

import {
  useAuthStore,
  useCategoriesStore,
  useNotificationsStore,
  useProductsStore,
  useStaticsStore,
} from "../hooks";

import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

import { LoginPage, RegisterPage } from "../Application/auth";
import {
  NavbarLogged,
  NavbarUnlogged,
  ProgressBackdrop,
} from "../Application/ui";
import { HomePage } from "../Application/home";
import { CartPage } from "../Application/cart";
import { NotificationsPage } from "../Application/notifications";
import { ProductPage } from "../Application/product";
import { SearchPage } from "../Application/search";
// import { ErrorAlert } from '../components/dashboard/ui/alerts/ErrorAlert';
// import { SuccessAlert } from '../components/dashboard/ui/alerts/SuccessAlert';

export const AppRouter = () => {
  const { uid, checking, role, startChecking } = useAuthStore();

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
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={true}
      >
        <CircularProgress
          color="primary"
          size="80px"
          sx={{ display: "block" }}
        />
      </Backdrop>
    );
  }

  return (
    <BrowserRouter>
      <ProgressBackdrop />
      {/* <ErrorAlert />
            <SuccessAlert /> */}

      <Routes>
        <Route
          path="login"
          element={
            <PublicRoute isAutenticated={!!uid}>
              <>
                <LoginPage />
              </>
            </PublicRoute>
          }
        />

        <Route
          path="register"
          element={
            <PublicRoute isAutenticated={!!uid}>
              <>
                <RegisterPage />
              </>
            </PublicRoute>
          }
        />

        <Route
          path="/"
          element={
            <>
              {uid ? <NavbarLogged /> : <NavbarUnlogged />}
              <HomePage />
            </>
          }
        />

        <Route
          path="/search"
          element={
            <>
              {uid ? <NavbarLogged /> : <NavbarUnlogged />}
              <SearchPage />
            </>
          }
        />

        <Route
          path="/cart"
          element={
            <PrivateRoute isAutenticated={!!uid}>
              {uid ? <NavbarLogged /> : <NavbarUnlogged />}
              <CartPage />
            </PrivateRoute>
          }
        />

        <Route
          path="/notifications"
          element={
            <PrivateRoute isAutenticated={!!uid}>
              {uid ? <NavbarLogged /> : <NavbarUnlogged />}
              <NotificationsPage />
            </PrivateRoute>
          }
        />

        <Route
          path="/product/:category/:id"
          element={
            <>
              {uid ? <NavbarLogged /> : <NavbarUnlogged />}
              <ProductPage />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};
