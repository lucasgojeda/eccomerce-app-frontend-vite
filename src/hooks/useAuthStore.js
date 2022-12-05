import { useDispatch, useSelector } from "react-redux";

import ecommerceApi from "../api/ecommerceApi";

import { notificationsLogout } from "../store/slices/notificationsSlice";

import {
  authCheckingFinish,
  authLogin,
  authLogout,
} from "../store/slices/authSlice";

import {
  uiCloseProgressBackdrop,
  uiOpenProgressBackdrop,
} from "../store/slices/uiSlice";

import { cartLogout, loadCart } from "../store/slices/cartSlice";

import { useNotificationsStore } from "./useNotificationsStore";
import { useProductsStore } from "./useProductsStore";

export const useAuthStore = () => {
  const dispatch = useDispatch();
  const { checking, uid, name, role } = useSelector((state) => state.auth);

  const { startLoadNotifications } = useNotificationsStore();

  const { startLoadProducts } = useProductsStore();

  const StartLogin = async ({ email, password }) => {
    try {
      dispatch(uiOpenProgressBackdrop());

      const {
        data: { token, user, msg },
      } = await ecommerceApi.post("auth/login", { email, password });

      if (token) {
        localStorage.setItem("token", token);
        localStorage.setItem("token-init-date", new Date().getTime());

        dispatch(
          authLogin({
            uid: user._id,
            name: user.name,
            role: user.role,
          })
        );
        dispatch(loadCart(user.cart));

        startLoadNotifications();

        dispatch(uiCloseProgressBackdrop());
      } else {
        dispatch(uiCloseProgressBackdrop());
        return console.log(msg);
      }
    } catch (error) {
      dispatch(uiCloseProgressBackdrop());
      return console.log(error);
    }
  };

  const StartRegister = async ({ name, email, password }) => {
    try {
      dispatch(uiOpenProgressBackdrop());

      const { data } = await ecommerceApi.post("users", {
        name,
        email,
        password,
      });

      console.log(data);

      const { token, user, msg, errors } = data;

      if (msg === "OK") {
        localStorage.setItem("token", token);
        localStorage.setItem("token-init-date", new Date().getTime());

        dispatch(
          authLogin({
            uid: user._id,
            name: user.name,
            role: user.role,
          })
        );
        dispatch(loadCart(user.cart));

        startLoadNotifications();

        dispatch(uiCloseProgressBackdrop());
      } else {
        errors !== undefined && console.log(errors);
        msg !== undefined && console.log(msg);
        dispatch(uiCloseProgressBackdrop());
      }
    } catch (error) {
      dispatch(uiCloseProgressBackdrop());
      console.log(error);
    }
  };

  const startChecking = async () => {
    if (!localStorage.getItem("token")) return dispatch(authCheckingFinish());

    try {
      const { data } = await ecommerceApi.get("auth/renew");

      const { msg, token, _id, name: _name, role: _role, cart } = data;

      if (msg === "OK") {
        localStorage.setItem("token", token);
        localStorage.setItem("token-init-date", new Date().getTime());

        dispatch(
          authLogin({
            uid: _id,
            name: _name,
            role: _role,
          })
        );
        dispatch(loadCart(cart));

        startLoadNotifications();
      } else {
        if (msg === "invalid token.") {
          const removeToken = new Promise((resolve, reject) => {
            resolve(() => {
              localStorage.removeItem("token-init-date");
              localStorage.removeItem("token");
            });
          });

          removeToken.then(dispatch(authCheckingFinish()));
        } else {
          dispatch(authCheckingFinish());
        }
      }
    } catch (error) {
      dispatch(authCheckingFinish());
      console.log(error.response.data.msg);
    }
  };

  const startLogout = () => {
    try {
      dispatch(uiOpenProgressBackdrop());

      localStorage.removeItem("token-init-date");
      localStorage.removeItem("token");

      dispatch(authLogout());
      dispatch(cartLogout());
      dispatch(notificationsLogout());

      setTimeout(() => {
        dispatch(uiCloseProgressBackdrop());
      }, 1500);
    } catch (error) {
      console.log(error);

      setTimeout(() => {
        dispatch(uiCloseProgressBackdrop());
      }, 1500);
    }
  };

  const startGoogleLogin = async (id_token) => {
    try {
      dispatch(uiOpenProgressBackdrop());

      const { data } = await ecommerceApi.post("auth/google", { id_token });

      const { msg, user, token } = data;

      if (msg === "OK") {
        localStorage.setItem("token", token);
        localStorage.setItem("token-init-date", new Date().getTime());

        dispatch(
          authLogin({
            uid: user._id,
            name: user.name,
            role: user.role,
          })
        );
        dispatch(loadCart(user.cart));

        startLoadNotifications();

        dispatch(uiCloseProgressBackdrop());
      } else {
        dispatch(uiCloseProgressBackdrop());
        return console.log(msg);
      }
    } catch (error) {
      dispatch(uiCloseProgressBackdrop());
      return console.log(error);
    }
  };

  return {
    //* Propiedades
    checking,
    uid,
    name,
    role,

    //* Métodos
    StartLogin,
    StartRegister,
    startChecking,
    startLogout,
    startGoogleLogin,
  };
};
