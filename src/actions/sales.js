import { fetchConToken, fetchSinToken } from "../helpers/fetch";
import { types } from "../reducers/types/types";
import { cartLogout } from "./cart";
import { updateNotification, addNotification, addSale_user } from "./notifications";
import { uiCloseProgressBackdrop, uiOpenErrorAlert, uiOpenProgressBackdrop, uiOpenSuccessAlert } from "./ui";


export const activeSale = ( sale ) => ({
    type: types.activeSale,
    payload: sale
})

export const clearActiveSale = () => ({
    type: types.clearActiveSale
})


export const startLoadSales = (filterBy, orderBy, searchText, page = 1) => {
    return async( dispatch ) => {
        const term = (searchText !== '' && searchText) ? searchText : 'home';

        try {
            const resp = await fetchConToken( `sales/${term}?page=${page}&filterBy=${filterBy}&orderBy=${orderBy}` );
            const body = await resp?.json(); 


            if( body?.msg === 'OK' ) {

                console.log('Filtered sales', body);

                const filteredSales = body.results;

                console.log(filteredSales)

                dispatch( loadSales(filteredSales) );

                window.scroll(0, 0);

            } else {
                if(body?.msg) {

                    console.log(body.msg);
                }
            }
            

        } catch (error) {
            console.log(error);
        }
    }
}

const loadSales = (sales) => ({
    type: types.loadSales,
    payload: sales
}) 


export const salesStartAddNew = () => {

    return async (dispatch) => {

        try {

            dispatch( uiOpenProgressBackdrop() );

            const resp = await fetchConToken('sales', {}, 'POST');
            const body = await resp.json();

            console.log(body);

            if (body.msg === "OK") { 

                dispatch( uiCloseProgressBackdrop() );

                dispatch(addNewSale(body.sale));
                dispatch(cartLogout());
                
                dispatch( uiOpenSuccessAlert('Compra realizada exitosamente!') );

            } else {
                dispatch( uiCloseProgressBackdrop() );
                console.log(body.msg);
            }


        } catch (error) {
            dispatch( uiCloseProgressBackdrop() );
            console.log(error);
        }
    }
}

const addNewSale = (sale) => ({
    type: types.addNewSale,
    payload: sale
})


export const salesStartUpdated = (id) => {
    return async(dispatch) => {

        
        try {

            const resp = await fetchConToken( `sales/${id}`, {} , 'PUT' );
            const body = await resp.json();

            console.log(body)

            if( body.msg === 'OK' ){
 
                dispatch( uiCloseProgressBackdrop() );

                dispatch(addNotification(body.notification));
                dispatch( addSale_user(body.results) );
                dispatch( updateFilteredSales(body.results) );

                dispatch( uiOpenSuccessAlert('El estado de la venta fue actualizado exitosamente!') );


            } else {
                dispatch( uiCloseProgressBackdrop() );
                dispatch(uiOpenErrorAlert('Error al intentar actualizar el estado de la venta! Hable con el administrador'));
                console.log(body.msg);
            }


        } catch (error) {
            dispatch( uiCloseProgressBackdrop() );
            dispatch(uiOpenErrorAlert('Error al intentar actualizar el estado de la venta! Hable con el administrador'));
            console.log(error);
        }

    }
}

const updateFilteredSales = (sale) => ({
    type: types.updateFilteredSales,
    payload: sale
})


export const salesLogout = () => ({
    type: types.salesLogout
})
