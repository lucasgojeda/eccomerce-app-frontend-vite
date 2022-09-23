import {
    fetchConToken,
    fetchSinToken
} from "../../helpers/fetch";

import { addBinProduct } from "../slices/binSlice";
import { addNewRecord } from "../slices/recordsSlice";

import {
    addOneDashboardProducts,
    addOneDashboardRecords,
    subtractOneDashboardProducts
} from "../slices/dashboardSlice";

import {
    addProduct,
    clearActiveProduct,
    deleteProduct,
    loadProducts,
    updateProduct
} from "../slices/productSlice";

import {
    uiCloseProgressBackdrop,
    uiOpenErrorAlert,
    uiOpenProgressBackdrop,
    uiOpenSuccessAlert
} from "../slices/uiSlice";


// export const activeProduct = ( product ) => ({
//     type: types.activeProduct,
//     payload: product
// })

// export const clearActiveProduct = () => ({
//     type: types.clearActiveProduct
// })


export const startLoadProducts = (filterBy, orderBy, searchText, page = 1) => {
    return async (dispatch) => {
        const term = (searchText !== '' && searchText) ? searchText : 'home';

        try {
            const resp = await fetchSinToken(`products/${term}?page=${page}&filterBy=${filterBy}&orderBy=${orderBy}`);
            const body = await resp.json();


            if (body.msg === 'OK') {

                // console.log('Filtered products', body);

                const filteredProducts = body.results;
 
                console.log(filteredProducts)

                dispatch(loadProducts(filteredProducts));

                window.scroll(0, 0);

            } else {
                console.log(body.msg);
            }


        } catch (error) {
            console.log(error);
        }
    }
}

// const loadProducts = (products) => ({
//     type: types.loadProducts,
//     payload: products
// })


export const productStartAddNew = (product) => {

    return async (dispatch) => {

        try {


            const { category } = product;

            const productNew = { ...product, category: category.name };

            console.log(productNew)

            const resp = await fetchConToken('products', productNew, 'POST');
            const body = await resp.json();

            console.log(body);

            if (body.msg === "OK") {

                dispatch(uiCloseProgressBackdrop());

                dispatch(addProduct(body.product));
                dispatch(addOneDashboardProducts());

                dispatch(addNewRecord(body.record));
                dispatch(addOneDashboardRecords());

                dispatch(uiOpenSuccessAlert('El producto fue creado exitosamente!'));

            } else {
                dispatch(uiCloseProgressBackdrop());
                dispatch(uiOpenErrorAlert('Error al intentar crear el producto! Hable con el administrador'));
                console.log(body.msg);
            }


        } catch (error) {
            dispatch(uiCloseProgressBackdrop());
            dispatch(uiOpenErrorAlert('Error al intentar crear el producto! Hable con el administrador'));
            console.log(error);
        }
    }
}

// export const addProduct = (product) => ({
//     type: types.addProduct,
//     payload: product
// });


export const productStartUpdated = (product) => {
    return async (dispatch) => {

        try {

            const { category } = product

            const productNew = { ...product, category: category.name }

            const resp = await fetchConToken(`products/${product._id}`, { product: productNew }, 'PUT');
            const body = await resp.json();

            console.log(body);


            if (body.msg === 'OK') {

                dispatch(clearActiveProduct());

                dispatch(uiCloseProgressBackdrop());

                dispatch(updateProduct(body.product));

                dispatch(addNewRecord(body.record));
                dispatch(addOneDashboardRecords());

                dispatch(uiOpenSuccessAlert('El producto fue actualizado exitosamente!'));


            } else {
                dispatch(uiCloseProgressBackdrop());
                dispatch(uiOpenErrorAlert('Error al intentar actualizar el producto! Hable con el administrador'));
                console.log(body.msg);
            }


        } catch (error) {
            dispatch(uiCloseProgressBackdrop());
            dispatch(uiOpenErrorAlert('Error al intentar actualizar el producto! Hable con el administrador'));
            console.log(error);
        }

    }
}

// export const updateProduct = (product) => ({
//     type: types.updateProduct,
//     payload: product
// });


export const productStartDeleted = (product) => {
    return async (dispatch) => {

        try {

            dispatch(uiOpenProgressBackdrop());


            const resp = await fetchConToken(`products/${product._id}`, {}, 'DELETE');
            const body = await resp.json();

            console.log(body);


            if (body.msg === "OK") {

                dispatch(clearActiveProduct());

                dispatch(uiCloseProgressBackdrop());

                dispatch(deleteProduct(body.product));
                dispatch(subtractOneDashboardProducts());

                dispatch(addBinProduct(body.product));
                dispatch(addOneDashboardBinProducts());

                dispatch(addNewRecord(body.record));
                dispatch(addOneDashboardRecords());

                dispatch(uiOpenSuccessAlert('El producto fue eliminado exitosamente!'));


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

// export const deleteProduct = (product) => ({
//     type: types.deleteProduct,
//     payload: product
// });


// export const productsLogout = () => ({
//     type: types.productsLogout
// })  