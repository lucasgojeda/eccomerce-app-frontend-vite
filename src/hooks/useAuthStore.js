/** Libraries */
import { useDispatch, useSelector } from "react-redux";

import { googleLogout } from '@react-oauth/google';

/** API */
import ecommerceApi from "../api/ecommerceApi";

/** Redux toolkit - Slices */
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

/** Custom hooks */
import { useNotificationsStore } from "./useNotificationsStore";

export const useAuthStore = () => {
  const dispatch = useDispatch();
  const {
    checking,
    uid,
    name,
    role,
    email,
    data
  } = useSelector((state) => state.auth);

  const { startLoadNotifications } = useNotificationsStore();

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
            email: user.email,
            role: user.role,
            data: user.data,
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
            email: user.email,
            role: user.role,
            data: user.data,
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

      const {
        msg,
        token,
        _id,
        name: _name,
        role: _role,
        cart, 
        email: _email,
        data: _data
      } = data;

      if (msg === "OK") {
        localStorage.setItem("token", token);
        localStorage.setItem("token-init-date", new Date().getTime());

        dispatch(
          authLogin({
            uid: _id,
            name: _name,
            email: _email,
            role: _role,
            data: (_data?.address) ? _data : null,
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
      googleLogout();

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
            email: user.email,
            role: user.role,
            data: user.data,
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

  const startUpdateUser = async (_user, setAlertStatus) => {

    try {
      dispatch(uiOpenProgressBackdrop());

      const { data: { msg, user } } = await ecommerceApi.put(`users/${_user._id}`, { user: _user });

      if (msg === 'OK') {
        dispatch(
          authLogin({
            uid: user._id,
            name: user.name, 
            email: user.email,
            role: user.role,
            data: user.data,
          })
        );
        setAlertStatus(true);
        dispatch(uiCloseProgressBackdrop());
      } else {
        dispatch(uiCloseProgressBackdrop());
        console.log(msg);
      }
    } catch (error) {
      dispatch(uiCloseProgressBackdrop());
      console.log(error);
    }

  }


  return {
    //* Propiedades
    checking,
    uid,
    name,
    role,
    email,
    data,

    //* Métodos
    StartLogin,
    StartRegister,
    startChecking,
    startLogout,
    startGoogleLogin,
    startUpdateUser,
  };
};
