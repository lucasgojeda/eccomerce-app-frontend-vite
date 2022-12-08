import { useDispatch, useSelector } from "react-redux";

import ecommerceApi from "../api/ecommerceApi";

import {
  deleteCartProduct,
  updateCartProduct,
} from "../store/slices/cartSlice";

import {
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

  const startPayment = async (products) => {
    try {

      const user_email = email;

      const { data, status } = await ecommerceApi.post('payment', { products, user_email });

      console.log(data)

      if (status === 200) {
        window.location.href = data.init_point;
      }
    } catch (error) {
      console.log(error);
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
