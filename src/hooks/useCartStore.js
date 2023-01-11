/** Libraries */
import { useDispatch, useSelector } from "react-redux";

/** API */
import ecommerceApi from "../api/ecommerceApi";

/** Helpers */
import { getEnvironmets } from '../helpers';

const { VITE_REACT_APP_API_URL, VITE_REACT_APP_FRONT_URL } = getEnvironmets();

/** Redux toolkit - Slices */
import {
  deleteCartProduct,
  updateCartProduct,
} from "../store/slices/cartSlice";

import {
  uiOpenProgressBackdrop,
  uiCloseProgressBackdrop,
  uiOpenErrorAlert,
} from "../store/slices/uiSlice";

export const useCartStore = () => {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.cart);
  const { email } = useSelector((state) => state.auth);

  const startUpdatedCart = async (_cart, id, setDisableButton) => {
    try {
      const {
        data: { msg, product },
      } = await ecommerceApi.put(`users/cart/${id}`, _cart);

      console.log({ msg, product });

      if (msg === "OK") {
        dispatch(uiCloseProgressBackdrop());

        dispatch(updateCartProduct(product));
      } else {
        dispatch(uiCloseProgressBackdrop());
        dispatch(
          uiOpenErrorAlert("Error trying to update the user! Talk to developer")
        );
        console.log(msg);
      }
    } catch (error) {
      dispatch(uiCloseProgressBackdrop());
      dispatch(
        uiOpenErrorAlert("Error trying to update the user! Talk to developer")
      );
      console.log(error);
    }

    setDisableButton(false);
  };

  const startDeletedCart = async (_cart, id, setDisableButton) => {
    try {
      //   console.log(_cart);

      const {
        data: { msg, product },
      } = await ecommerceApi.delete(`users/cart/${id}/${_cart._id}`);

      if (msg === "OK") {
        dispatch(uiCloseProgressBackdrop());

        //   console.log({ msg, product });
        setDisableButton(false);
        dispatch(deleteCartProduct(product));
      } else {
        dispatch(uiCloseProgressBackdrop());
        dispatch(
          uiOpenErrorAlert("Error trying to update the user! Talk to developer")
        );
        console.log(msg);
      }
    } catch (error) {
      dispatch(uiCloseProgressBackdrop());
      dispatch(
        uiOpenErrorAlert("Error trying to update the user! Talk to developer")
      );
      console.log(error);
    }

    setDisableButton(false);
  };

  const startPayment = async (products, setInfoAlertStatus) => {
    try {
      dispatch(uiOpenProgressBackdrop());

      const paymentData = {
        user_email: email,
        products,
        success: `${VITE_REACT_APP_FRONT_URL}/cart`,
        failure: `${VITE_REACT_APP_FRONT_URL}`,
        pending: `${VITE_REACT_APP_FRONT_URL}`,
        notification_baseUrl: `${VITE_REACT_APP_API_URL}`,
      }

      const { data, status } = await ecommerceApi.post('payment', { ...paymentData });

      if (status === 200) {
        if (data.init_point !== undefined) window.open(data.init_point, '_blank');
        dispatch(uiCloseProgressBackdrop());
        setInfoAlertStatus(true);
      }
    } catch (error) {
      console.log(error);
      dispatch(uiCloseProgressBackdrop());
    }
  }

  return {
    //* Propiedades
    cart,

    //* Métodos
    startUpdatedCart,
    startDeletedCart,
    startPayment
  };
};
