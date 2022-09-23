import { fetchConToken } from "../../helpers/fetch";

import { addBinUser } from "../slices/binSlice";

import {
    addOneDashboardBinUsers,
    addOneDashboardRecords,
    addOneDashboardUsers,
    subtractOneDashboardUsers
} from "../slices/dashboardSlice";

import { addNewRecord } from "../slices/recordsSlice";

import {
    uiCloseProgressBackdrop,
    uiOpenErrorAlert,
    uiOpenProgressBackdrop,
    uiOpenSuccessAlert
} from "../slices/uiSlice";

import {
    addUser,
    deleteUser,
    loadUsers,
    updateUser
} from "../slices/userSlice";


// export const activeUser = (user) => ({
//     type: types.activeUser,
//     payload: user
// })

// export const clearActiveUser = () => ({
//     type: types.clearActiveUser
// })


export const startLoadUsers = (filterBy, orderBy, searchText, page = 1) => {
    return async (dispatch) => {
        const term = (searchText !== '' && searchText) ? searchText : 'home';

        try {
            const resp = await fetchConToken(`users/${term}?page=${page}&filterBy=${filterBy}&orderBy=${orderBy}`);
            const body = await resp.json();


            if (body.msg === 'OK') {

                console.log('Filtered users', body);

                const filteredUsers = body.results;

                console.log(filteredUsers)

                dispatch(loadUsers(filteredUsers));

                window.scroll(0, 0);

            } else {
                console.log(body.msg);
            }


        } catch (error) {
            console.log(error);
        }
    }
}

// const loadUsers = (users) => ({
//     type: types.loadUsers,
//     payload: users
// })


export const userStartAddNew = (user) => {

    return async (dispatch) => {

        try {


            const resp = await fetchConToken('users', user, 'POST');
            const body = await resp.json();


            if (body.msg === "OK") {

                dispatch(uiCloseProgressBackdrop());

                dispatch(addUser(body.user));
                dispatch(addOneDashboardUsers());

                dispatch(addNewRecord(body.record));
                dispatch(addOneDashboardRecords());

                dispatch(uiOpenSuccessAlert('El usuario fue creado exitosamente!'));

            } else {
                dispatch(uiCloseProgressBackdrop());
                dispatch(uiOpenErrorAlert('Error al intentar crear el usuario! Hable con el administrador'));
                console.log(body.msg);
            }


        } catch (error) {
            dispatch(uiCloseProgressBackdrop());
            dispatch(uiOpenErrorAlert('Error al intentar crear el usuario! Hable con el administrador'));
            console.log(error);
        }
    }
}

// export const addUser = (user) => ({
//     type: types.addUser,
//     payload: user
// });


export const userStartUpdated = (user) => {
    return async (dispatch) => {

        try {

            const resp = await fetchConToken(`users/${user._id}`, { user: user }, 'PUT');
            const body = await resp.json();


            if (body.msg === 'OK') {

                dispatch(uiCloseProgressBackdrop());

                dispatch(updateUser(body.user));

                dispatch(addNewRecord(body.record));
                dispatch(addOneDashboardRecords());

                dispatch(uiOpenSuccessAlert('El usuario fue actualizado exitosamente!'));

            } else {
                dispatch(uiCloseProgressBackdrop());
                dispatch(uiOpenErrorAlert('Error al intentar actualizar el usuario! Hable con el administrador'));
                console.log(body.msg);
            }


        } catch (error) {
            dispatch(uiCloseProgressBackdrop());
            dispatch(uiOpenErrorAlert('Error al intentar actualizar el usuario! Hable con el administrador'));
            console.log(error);
        }

    }
}

// export const updateUser = (user) => ({
//     type: types.updateUser,
//     payload: user
// });


export const userStartDeleted = (user) => {
    return async (dispatch) => {

        try {

            dispatch(uiOpenProgressBackdrop());


            const resp = await fetchConToken(`users/${user._id}`, {}, 'DELETE');
            const body = await resp.json();

            if (body.msg === "OK") {

                dispatch(uiCloseProgressBackdrop());

                dispatch(deleteUser(body.user));
                dispatch(subtractOneDashboardUsers());

                dispatch(addBinUser(body.user));
                dispatch(addOneDashboardBinUsers());

                dispatch(addNewRecord(body.record));
                dispatch(addOneDashboardRecords());

                dispatch(uiOpenSuccessAlert('El usuario fue eliminado exitosamente!'));

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

// export const deleteUser = (user) => ({
//     type: types.deleteUser,
//     payload: user
// });


// export const usersLogout = () => ({
//     type: types.usersLogout
// })


