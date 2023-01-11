/** Libraries */
import { useDispatch, useSelector } from 'react-redux';

/** Redux toolkit - Slices */
import {
    uiOpenProgressBackdrop,
    uiCloseProgressBackdrop,
} from '../store/slices/uiSlice';

export const useUiStore = () => {

    const dispatch = useDispatch();

    const {
        progressBackdrop,
    } = useSelector(state => state.ui);

    const startUiOpenProgressBackdrop = () => {

        dispatch(uiOpenProgressBackdrop());
    };

    const startUiCloseProgressBackdrop = () => {

        dispatch(uiCloseProgressBackdrop());
    };

    return {
        //* Propiedades
        progressBackdrop,

        //* Métodos
        startUiOpenProgressBackdrop,
        startUiCloseProgressBackdrop,
    }
}
