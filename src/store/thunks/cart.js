import {
    fetchConToken,
    fetchSinToken
} from "../../helpers/fetch"

import {
    deleteCartProduct,
    updateCartProduct
} from "../slices/cartSlice";
import {
    uiCloseProgressBackdrop,
    uiOpenErrorAlert
} from "../slices/uiSlice";


export const startUpdatedCart = (cart, id) => {
    return async (dispatch) => {

        try {

            const resp = await fetchConToken(`users/cart/${id}`, cart, 'PUT');
            const body = await resp.json();

            console.log(body);

            if (body.msg === 'OK') {

                dispatch(uiCloseProgressBackdrop());

                dispatch(updateCartProduct(body.product));


            } else {
                dispatch(uiCloseProgressBackdrop());
                dispatch(uiOpenErrorAlert('Error trying to update the user! Talk to developer'));
                console.log(body.msg);
            }


        } catch (error) {
            dispatch(uiCloseProgressBackdrop());
            dispatch(uiOpenErrorAlert('Error trying to update the user! Talk to developer'));
            console.log(error);
        }

    }
}

// export const updateCartProduct = (product) => ({
//     type: types.updateCartProduct,
//     payload: product
// });


export const startDeletedCart = (cart, id) => {
    return async (dispatch) => {

        try {

            const resp = await fetchConToken(`users/cart/${id}`, cart, 'DELETE');
            const body = await resp.json();

            console.log(body);

            if (body.msg === 'OK') {

                dispatch(uiCloseProgressBackdrop());

                dispatch(deleteCartProduct(body.product));


            } else {
                dispatch(uiCloseProgressBackdrop());
                dispatch(uiOpenErrorAlert('Error trying to update the user! Talk to developer'));
                console.log(body.msg);
            }


        } catch (error) {
            dispatch(uiCloseProgressBackdrop());
            dispatch(uiOpenErrorAlert('Error trying to update the user! Talk to developer'));
            console.log(error);
        }

    }
}

// export const deleteCartProduct = (product) => ({
//     type: types.deleteCartProduct,
//     payload: product
// });


// export const loadCart = (cart) => ({
//     type: types.loadCart,
//     payload: cart
// })

// export const cartLogout = () => ({
//     type: types.cartLogout
// })