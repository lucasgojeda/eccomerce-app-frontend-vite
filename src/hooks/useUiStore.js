import { useDispatch, useSelector } from 'react-redux';

import {
    uiLogout,
    uiOpenSuccessAlert,
    uiCloseSuccessAlert,
    uiOpenErrorAlert,
    uiCloseErrorAlert,
    uiOpenProgressBackdrop,
    uiCloseProgressBackdrop,
    uiOpenDialogDelete,
    uiCloseDialogDelete,
    uiStartSearchProductsLoading,
    uiStopSearchProductsLoading,
} from '../store/slices/uiSlice';


export const useUiStore = () => {

    const dispatch = useDispatch();

    const {
        successAlert,
        errorAlert,
        progressBackdrop,
        dialogDelete,
        searchProducts
    } = useSelector(state => state.ui);


    const startUiLogout = () => {

        dispatch(uiLogout());
    };

    /* ALERTS */

    const startUiOpenSuccessAlert = (title) => {

        dispatch(uiOpenSuccessAlert(title));

    };

    const startUiCloseSuccessAlert = () => {

        dispatch(uiCloseSuccessAlert());
    };

    const startUiOpenErrorAlert = (title) => {

        dispatch(uiOpenErrorAlert(title));

    };

    const startUiCloseErrorAlert = () => {

        dispatch(uiCloseErrorAlert());
    };

    const startUiOpenProgressBackdrop = () => {

        dispatch(uiOpenProgressBackdrop());
    };

    const startUiCloseProgressBackdrop = () => {

        dispatch(uiCloseProgressBackdrop());
    };

    const startUiOpenDialogDelete = () => {

        dispatch(uiOpenDialogDelete());
    };

    const startUiCloseDialogDelete = () => {

        dispatch(uiCloseDialogDelete());
    };

    const startUiStartSearchProducts = () => {

        dispatch(uiStartSearchProductsLoading());
    };

    const startUiStopSearchProducts = () => {

        dispatch(uiStopSearchProductsLoading());
    };



    return {
        //* Propiedades
        successAlert,
        errorAlert,
        progressBackdrop,
        dialogDelete,
        searchProducts,

        //* Métodos
        startUiLogout,
        startUiOpenSuccessAlert,
        startUiCloseSuccessAlert,
        startUiOpenErrorAlert,
        startUiCloseErrorAlert,
        startUiOpenProgressBackdrop,
        startUiCloseProgressBackdrop,
        startUiOpenDialogDelete,
        startUiCloseDialogDelete,
        startUiStartSearchProducts,
        startUiStopSearchProducts,
    }
}
