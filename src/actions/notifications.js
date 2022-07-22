import { fetchConToken, fetchSinToken } from "../helpers/fetch";
import { types } from "../reducers/types/types";
import { uiCloseProgressBackdrop, uiOpenErrorAlert, uiOpenProgressBackdrop, uiOpenSuccessAlert } from "./ui";


export const startLoadNotifications = () => {
    return async( dispatch ) => {


        try {
            const resp = await fetchConToken( 'notifications' );
            const body = await resp.json();


            if( body.msg === 'OK' ) {    

                console.log(body)

                dispatch( loadNotifications({
                    sales_user: body.sales,
                    notifications: body.notifications
                }) );

            } else {
                console.log(body.msg);
            }
            

        } catch (error) {
            console.log(error);
        }
    }
}

const loadNotifications = (notifications) => ({
    type: types.loadNotifications,
    payload: notifications
})


export const notificationStartUpdated = (notification) => {
    return async(dispatch) => {

        try {


            const resp = await fetchConToken( `notifications/${notification._id}`, {} , 'PUT' );
            const body = await resp.json();

            console.log(body);


            if( body.msg === 'OK' ){

                dispatch( updateNotification(body.notification) );
                
                dispatch( uiCloseProgressBackdrop() );

                dispatch( uiOpenSuccessAlert('La categoria fue actualizada exitosamente!') );


            } else {
                dispatch( uiCloseProgressBackdrop() );
                dispatch(uiOpenErrorAlert('Error al intentar actualizar la categoria! Hable con el administrador'));
                console.log(body.msg);
            }


        } catch (error) {
            dispatch( uiCloseProgressBackdrop() );
            dispatch(uiOpenErrorAlert('Error al intentar actualizar la categoria! Hable con el administrador'));
            console.log(error);
        }

    }
}

export const updateNotification = (notification) => ({
    type: types.updateNotification,
    payload: notification
})

export const addNotification = (notification) => ({
    type: types.addNotification,
    payload: notification
})

export const addSale_user = (sale_user) => ({
    type: types.addSale_user,
    payload: sale_user
})


export const notificationsLogout = () => ({
    type: types.notificationsLogout
})

