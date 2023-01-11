/** Libraries */
import { useDispatch, useSelector } from 'react-redux';

/** API */
import ecommerceApi from '../api/ecommerceApi';

/** Redux toolkit - Slices */
import { cartLogout } from "../store/slices/cartSlice";

import {
    addNewSale,
} from "../store/slices/saleSlice";

import {
    uiCloseProgressBackdrop,
    uiOpenProgressBackdrop,
    uiOpenSuccessAlert,
} from "../store/slices/uiSlice";

export const useSalesStore = () => {

    const dispatch = useDispatch();
    const { sales } = useSelector(state => state.sales);

    const salesStartAddNew = async () => {

        try {

            dispatch(uiOpenProgressBackdrop());

            const { data: { msg, sale } } = await ecommerceApi.post('sales', {});

            console.log({ msg, sale });


            if (msg === "OK") {

                dispatch(uiCloseProgressBackdrop());

                dispatch(addNewSale(sale));
                dispatch(cartLogout());

                dispatch(uiOpenSuccessAlert('Compra realizada exitosamente!'));

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
        sales,

        //* Métodos
        salesStartAddNew,
    }
}
