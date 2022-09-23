import { fetchConToken } from "../../helpers/fetch";

import { addProduct } from "../slices/productSlice";
import { addNewRecord } from "../slices/recordsSlice";
import { addUser } from "../slices/userSlice";

import {
    clearActiveBinProduct,
    clearActiveBinUser,
    deleteBinProduct,
    deleteBinUser,
    loadBinProducts,
    loadBinUsers
} from "../slices/binSlice";

import {
    addOneDashboardProducts,
    addOneDashboardRecords,
    addOneDashboardUsers,
    subtractOneDashboardBinProducts,
    subtractOneDashboardBinUsers
} from "../slices/dashboardSlice";

import {
    uiCloseProgressBackdrop,
    uiOpenErrorAlert,
    uiOpenProgressBackdrop,
    uiOpenSuccessAlert
} from "../slices/uiSlice";



/* PRODUCTS */

// export const setActiveBinProduct = (product) => ({
//     type: types.setActiveBinProduct,
//     payload: product
// })

// export const clearActiveBinProduct = () => ({
//     type: types.clearActiveBinProduct
// })


// export const addBinProduct = (product) => ({
//     type: types.addBinProduct,
//     payload: product
// })

// export const deleteBinProduct = (product) => ({
//     type: types.deleteBinProduct,
//     payload: product
// })


export const startLoadBinProducts = (filterBy, orderBy, searchText, page = 1) => {
    return async (dispatch) => {
        const term = (searchText !== '' && searchText) ? searchText : 'home';

        try {
            const resp = await fetchConToken(`bin/products/${term}?page=${page}&filterBy=${filterBy}&orderBy=${orderBy}`);
            const body = await resp.json();


            if (body.msg === 'OK') {

                console.log('Filtered bin products', body);

                const filteredBinProducts = body.results;

                console.log(filteredBinProducts)

                dispatch(loadBinProducts(filteredBinProducts));

                window.scroll(0, 0);

            } else {
                console.log(body.msg);
            }


        } catch (error) {
            console.log(error);
        }
    }
}

// const loadBinProducts = (productRows) => ({
//     type: types.loadBinProducts,
//     payload: productRows
// })


export const productBinStartEnable = (product) => {
    return async (dispatch) => {


        try {
            dispatch(uiOpenProgressBackdrop());

            const resp = await fetchConToken(`bin/products/${product._id}`, {}, 'PUT');
            const body = await resp.json();

            console.log(body);


            if (body.msg === 'OK') {

                dispatch(clearActiveBinProduct());

                dispatch(uiCloseProgressBackdrop());


                dispatch(deleteBinProduct(product));
                dispatch(addProduct(product))

                dispatch(addOneDashboardProducts());
                dispatch(subtractOneDashboardBinProducts());

                dispatch(addNewRecord(body.record));
                dispatch(addOneDashboardRecords());



                dispatch(uiOpenSuccessAlert('El producto fue habilitado exitosamente!'));

            } else {
                dispatch(uiCloseProgressBackdrop());
                dispatch(uiOpenErrorAlert('Error al intentar habilitar el producto! Hable con el administrador'));
                console.log(body.msg);
            }


        } catch (error) {
            dispatch(uiCloseProgressBackdrop());
            dispatch(uiOpenErrorAlert('Error al intentar habilitar el producto! Hable con el administrador'));
            console.log(error);
        }

    }
}

export const productBinStartDeleted = (product) => {
    return async (dispatch) => {

        try {
            dispatch(uiOpenProgressBackdrop());

            const resp = await fetchConToken(`bin/products/${product._id}`, {}, 'DELETE');
            const body = await resp.json();

            console.log(body);


            if (body.msg === "OK") {

                dispatch(clearActiveBinProduct());

                dispatch(uiCloseProgressBackdrop());

                dispatch(deleteBinProduct(product));
                dispatch(subtractOneDashboardBinProducts());

                dispatch(addNewRecord(body.record));
                dispatch(addOneDashboardRecords());

                dispatch(uiOpenSuccessAlert('El producto fue removido de forma permanente exitosamente!'));

            } else {
                dispatch(uiCloseProgressBackdrop());
                dispatch(uiOpenErrorAlert('Error al intentar eliminar el producto! Hable con el administrador'));
                console.log(body.msg);
            }


        } catch (error) {
            dispatch(uiCloseProgressBackdrop());
            dispatch(uiOpenErrorAlert('Error al intentar eliminar el producto! Hable con el administrador'));
            console.log(error);
        }

    }
}


// export const productsBinLogout = () => ({
//     type: types.productsBinLogout
// })  


// /* USERS */

// export const setActiveBinUser = (user) => ({
//     type: types.setActiveBinUser,
//     payload: user
// })

// export const clearActiveBinUser = () => ({
//     type: types.clearActiveBinUser
// })


export const startLoadBinUsers = (filterBy, orderBy, searchText, page = 1) => {
    return async (dispatch) => {
        const term = (searchText !== '' && searchText) ? searchText : 'home';

        try {
            const resp = await fetchConToken(`bin/users/${term}?page=${page}&filterBy=${filterBy}&orderBy=${orderBy}`);
            const body = await resp.json();


            if (body.msg === 'OK') {

                console.log('Filtered users', body);

                const filteredUsers = body.results;

                console.log(filteredUsers)

                dispatch(loadBinUsers(filteredUsers));

                window.scroll(0, 0);

            } else {
                console.log(body.msg);
            }


        } catch (error) {
            console.log(error);
        }
    }
}

// const loadBinUsers = (users) => ({
//     type: types.loadBinUsers,
//     payload: users
// })


// export const addBinUser = (user) => ({
//     type: types.addBinUser,
//     payload: user
// })

// export const deleteBinUser = (user) => ({
//     type: types.deleteBinUser,
//     payload: user
// })


export const userBinStartEnable = (user) => {
    return async (dispatch) => {

        try {
            dispatch(uiOpenProgressBackdrop());

            const resp = await fetchConToken(`bin/users/${user._id}`, {}, 'PUT');
            const body = await resp.json();

            console.log(body);


            if (body.msg === 'OK') {

                dispatch(clearActiveBinUser());

                dispatch(uiCloseProgressBackdrop());

                dispatch(deleteBinUser(user));
                dispatch(addUser(user));

                dispatch(addOneDashboardUsers());
                dispatch(subtractOneDashboardBinUsers());

                dispatch(addNewRecord(body.record));
                dispatch(addOneDashboardRecords());

                dispatch(uiOpenSuccessAlert('El usuario fue habilitado exitosamente!'));

            } else {
                dispatch(uiCloseProgressBackdrop());
                dispatch(uiOpenErrorAlert('Error al intentar habilitar el usuario! Hable con el administrador'));
                console.log(body.msg);
            }


        } catch (error) {
            dispatch(uiCloseProgressBackdrop());
            dispatch(uiOpenErrorAlert('Error al intentar habilitar el usuario! Hable con el administrador'));
            console.log(error);
        }

    }
}

export const userBinStartDeleted = (user) => {
    return async (dispatch) => {

        try {
            dispatch(uiOpenProgressBackdrop());

            const resp = await fetchConToken(`bin/users/${user._id}`, {}, 'DELETE');
            const body = await resp.json();

            console.log(body);


            if (body.msg === "OK") {

                dispatch(clearActiveBinUser());

                dispatch(uiCloseProgressBackdrop());

                dispatch(deleteBinUser(user));
                dispatch(subtractOneDashboardBinUsers());

                dispatch(addNewRecord(body.record));
                dispatch(addOneDashboardRecords());

                dispatch(uiOpenSuccessAlert('El usuario fue removido de forma permanente exitosamente!'));

            } else {
                dispatch(uiCloseProgressBackdrop());
                dispatch(uiOpenErrorAlert('Error al intentar eliminar el usuario! Hable con el administrador'));
                console.log(body.msg);
            }


        } catch (error) {
            dispatch(uiCloseProgressBackdrop());
            dispatch(uiOpenErrorAlert('Error al intentar eliminar el usuario! Hable con el administrador'));
            console.log(error);
        }

    }
}


// export const usersBinLogout = () => ({
//     type: types.usersBinLogout
// })