import {
    fetchConToken,
    fetchSinToken
} from "../../helpers/fetch";

import {
    addNewCategory,
    deleteCategory,
    loadCategories,
    updateCategory
} from "../slices/categoriesSlice";

import {
    uiCloseProgressBackdrop,
    uiOpenErrorAlert,
    uiOpenProgressBackdrop,
    uiOpenSuccessAlert
} from "../slices/uiSlice";


export const startLoadCategories = () => {
    return async (dispatch) => {


        try {
            const resp = await fetchSinToken('categories');
            const body = await resp.json();


            if (body.categories) {

                const categories = body.categories;

                console.log(categories)

                dispatch(loadCategories(categories));

            } else {
                return console.log(body.msg);
            }


        } catch (error) {
            return console.log(error);
        }
    }
}

// const loadCategories = (categories) => ({
//     type: types.loadCategories,
//     payload: categories
// })


export const startCreateCategory = (name) => {

    return async (dispatch) => {

        if (name === '' || !name) {

            return;
        } else {

            try {

                const resp = await fetchConToken('categories', name, 'POST');
                const body = await resp.json();


                if (body.msg === "OK") {

                    dispatch(addNewCategory(body.category));

                    dispatch(uiCloseProgressBackdrop());

                    dispatch(uiOpenSuccessAlert('La categoria fue creada exitosamente!'));

                } else {

                    dispatch(uiCloseProgressBackdrop());
                    dispatch(uiOpenErrorAlert('Error al intentar crear la categoria! Hable con el administrador'));
                    console.log(body.msg);
                }

            } catch (error) {
                dispatch(uiCloseProgressBackdrop());
                dispatch(uiOpenErrorAlert('Error al intentar crear la categoria! Hable con el administrador'));
                console.log(error);
            }
        }
    }
}

// const addNewCategory = (category) => ({
//     type: types.addNewCategory,
//     payload: category
// })


export const categoryStartUpdated = (category) => {
    return async (dispatch) => {

        try {


            const resp = await fetchConToken(`categories/${category._id}`, category, 'PUT');
            const body = await resp.json();

            console.log(body);


            if (body.msg === 'OK') {

                dispatch(updateCategory(body.category));

                dispatch(uiCloseProgressBackdrop());

                dispatch(uiOpenSuccessAlert('La categoria fue actualizada exitosamente!'));


            } else {
                dispatch(uiCloseProgressBackdrop());
                dispatch(uiOpenErrorAlert('Error al intentar actualizar la categoria! Hable con el administrador'));
                console.log(body.msg);
            }


        } catch (error) {
            dispatch(uiCloseProgressBackdrop());
            dispatch(uiOpenErrorAlert('Error al intentar actualizar la categoria! Hable con el administrador'));
            console.log(error);
        }

    }
}

// const updateCategory = (category) => ({
//     type: types.updateCategory,
//     payload: category
// })


export const categoryStartDeleted = (category) => {
    return async (dispatch) => {

        try {

            dispatch(uiOpenProgressBackdrop());


            const resp = await fetchConToken(`categories/${category._id}`, {}, 'DELETE');
            const body = await resp.json();

            console.log(body);


            if (body.msg === "OK") {

                dispatch(deleteCategory(body.category));

                dispatch(uiCloseProgressBackdrop());

                dispatch(uiOpenSuccessAlert('La categoria fue eliminada exitosamente!'));


            } else {
                dispatch(uiCloseProgressBackdrop());
                dispatch(uiOpenErrorAlert(`${body.msg}`));
                console.log(body.msg);
            }


        } catch (error) {
            dispatch(uiCloseProgressBackdrop());
            dispatch(uiOpenErrorAlert('Error al intentar eliminar la categoria! Hable con el administrador'));
            console.log(error);
        }

    }
}

// const deleteCategory = (category) => ({
//     type: types.deleteCategory,
//     payload: category
// })