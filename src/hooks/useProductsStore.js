import { useDispatch, useSelector } from 'react-redux';

import ecommerceApi from '../api/ecommerceApi';

import {
    addBinProduct,
} from "../store/slices/binSlice";
import { addNewRecord } from "../store/slices/recordsSlice";

import {
    addOneDashboardProducts,
    addOneDashboardRecords,
    subtractOneDashboardProducts,
    addOneDashboardBinProducts
} from "../store/slices/staticsSlice";

import {
    addProduct,
    clearActiveProduct,
    deleteProduct,
    loadProducts,
    setActiveProduct,
    updateProduct
} from "../store/slices/productSlice";

import {
    uiCloseProgressBackdrop,
    uiOpenErrorAlert,
    uiOpenProgressBackdrop,
    uiOpenSuccessAlert,
    uiStartTableLoading,
    uiStopTableLoading,
} from "../store/slices/uiSlice";


export const useProductsStore = () => {

    const dispatch = useDispatch();
    const { products, activeProduct } = useSelector(state => state.product);


    const startLoadProductsByCategories = async () => {

        // const term = (searchText !== '' && searchText) ? searchText : 'home';

        try {

            // dispatch(uiStartTableLoading());

            const { data } = await ecommerceApi.get('products/productsByCategories');

            const { msg, results } = data;

            if (msg === 'OK') {


                console.log(results)

                // dispatch(loadProducts(filteredProducts));

                // window.scroll(0, 0);

                // dispatch(uiStopTableLoading());

            } else {
                // dispatch(uiStopTableLoading());
                console.log(msg);
            }


        } catch (error) {
            // dispatch(uiStopTableLoading());
            console.log(error);
        }
    }

    const startLoadProducts = async (filterBy, orderBy, searchText) => {

        const term = (searchText !== '' && searchText) ? searchText : 'home';

        try {

            dispatch(uiStartTableLoading());

            const { data } = await ecommerceApi.get(`products/productsSearchEcommerce/${term}?filterBy=${filterBy}&orderBy=${orderBy}`);
            
            const { data: data2 } = await ecommerceApi.get(`ranking/bestProducts`);

            console.log(data2)

            const { msg, results } = data;

            if (msg === 'OK') {

                // console.log('Filtered products', body);

                const filteredProducts = results;

                console.log(filteredProducts)

                dispatch(loadProducts(filteredProducts));

                window.scroll(0, 0);

                dispatch(uiStopTableLoading());

            } else {
                dispatch(uiStopTableLoading());
                console.log(msg);
            }


        } catch (error) {
            dispatch(uiStopTableLoading());
            console.log(error);
        }
    }

    const productStartAddNew = async (_product) => {

        try {

            const { category } = _product;

            const productNew = { ..._product, category: category.name };

            const { data: { msg, product, record } } = await ecommerceApi.post('products', productNew);

            console.log({ msg, product, record });


            if (msg === "OK") {

                dispatch(uiCloseProgressBackdrop());

                dispatch(addProduct(product));
                dispatch(addOneDashboardProducts());

                dispatch(addNewRecord(record));
                dispatch(addOneDashboardRecords());

                dispatch(uiOpenSuccessAlert('El producto fue creado exitosamente!'));

            } else {
                dispatch(uiCloseProgressBackdrop());
                dispatch(uiOpenErrorAlert('Error al intentar crear el producto! Hable con el administrador'));
                console.log(msg);
            }


        } catch (error) {
            dispatch(uiCloseProgressBackdrop());
            dispatch(uiOpenErrorAlert('Error al intentar crear el producto! Hable con el administrador'));
            console.log(error);
        }
    }

    const productStartUpdated = async (_product) => {

        try {

            const { category } = _product

            const productNew = { ..._product, category: category.name }

            const { data } = await ecommerceApi.put(`products/${_product._id}`, { product: productNew });

            console.log(data);

            const { msg, product, record } = data;


            if (msg === 'OK') {

                dispatch(clearActiveProduct());

                dispatch(uiCloseProgressBackdrop());

                dispatch(updateProduct(product));

                dispatch(addNewRecord(record));
                dispatch(addOneDashboardRecords());

                dispatch(uiOpenSuccessAlert('El producto fue actualizado exitosamente!'));


            } else {
                dispatch(uiCloseProgressBackdrop());
                dispatch(uiOpenErrorAlert('Error al intentar actualizar el producto! Hable con el administrador'));
                console.log(msg);
            }


        } catch (error) {
            dispatch(uiCloseProgressBackdrop());
            dispatch(uiOpenErrorAlert('Error al intentar actualizar el producto! Hable con el administrador'));
            console.log(error);
        }

    }

    const productStartDeleted = async (_product) => {

        try {

            dispatch(uiOpenProgressBackdrop());

            const { data: { msg, record, product } } = await ecommerceApi.delete(`products/${_product._id}`, {});

            console.log({ msg, record, product });


            if (msg === "OK") {

                dispatch(clearActiveProduct());

                dispatch(uiCloseProgressBackdrop());

                dispatch(deleteProduct(product));
                dispatch(subtractOneDashboardProducts());

                dispatch(addBinProduct(product));
                dispatch(addOneDashboardBinProducts());

                dispatch(addNewRecord(record));
                dispatch(addOneDashboardRecords());

                dispatch(uiOpenSuccessAlert('El producto fue eliminado exitosamente!'));


            } else {
                dispatch(uiCloseProgressBackdrop());
                dispatch(uiOpenErrorAlert('Error al intentar eliminar el producto! Hable con el administrador'));
                console.log(msg);
            }


        } catch (error) {
            dispatch(uiCloseProgressBackdrop());
            dispatch(uiOpenErrorAlert('Error al intentar eliminar el producto! Hable con el administrador'));
            console.log(error);
        }

    }

    const startSetActiveProduct = (product) => {

        dispatch(setActiveProduct(product));
    }

    const startClearActiveProduct = () => {

        dispatch(clearActiveProduct());
    }


    return {
        //* Propiedades
        products,
        activeProduct,

        //* Métodos
        startLoadProductsByCategories,
        startLoadProducts,
        productStartAddNew,
        productStartUpdated,
        productStartDeleted,
        startSetActiveProduct,
        startClearActiveProduct,
    }
}
