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

  const startUpdatedCart = async (_cart, id) => {
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
  };

  const startDeletedCart = async (_cart, id) => {
    try {
    //   console.log(_cart);

      const {
        data: { msg, product },
      } = await ecommerceApi.delete(`users/cart/${id}/${_cart._id}`);

      
      if (msg === "OK") {
          dispatch(uiCloseProgressBackdrop());

        //   console.log({ msg, product });
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
  };

  return {
    //* Propiedades
    cart,

    //* Métodos
    startUpdatedCart,
    startDeletedCart,
  };
};
