/** Libraries */
import { useDispatch, useSelector } from 'react-redux';

/** API */
import ecommerceApi from '../api/ecommerceApi';

/** Redux toolkit - Slices */
import {
    loadNotifications,
    updateNotification
} from "../store/slices/notificationsSlice";

import {
    uiCloseProgressBackdrop,
    uiOpenErrorAlert,
    uiOpenSuccessAlert,
    uiStartNotificationsTable,
    uiStopNotificationsTable
} from "../store/slices/uiSlice";

export const useNotificationsStore = () => {

    const dispatch = useDispatch();
    const { notifications, sales_user } = useSelector(state => state.notifications);

    const startLoadNotifications = async (page = 1) => {

        try {

            dispatch(uiStartNotificationsTable());

            const { data: { msg, sales, notifications } } = await ecommerceApi.get(`notifications/${page}`);

            console.log({ msg, sales, notifications })

            if (msg === 'OK') {

                dispatch(loadNotifications({
                    sales_user: sales,
                    notifications: notifications
                }));

                dispatch(uiStopNotificationsTable());

            } else {
                dispatch(uiStopNotificationsTable());
                console.log(msg);
            }


        } catch (error) {
            dispatch(uiStopNotificationsTable());
            console.log(error);
        }
    }

    const notificationStartUpdated = async (_notification) => {

        try {

            const { data: { msg, notification } } = await ecommerceApi.put(`notifications/${_notification._id}`, {});
            

            console.log({ msg, notification });


            if (msg === 'OK') {

                dispatch(updateNotification(notification));

                dispatch(uiCloseProgressBackdrop());

                dispatch(uiOpenSuccessAlert('La categoria fue actualizada exitosamente!'));


            } else {
                dispatch(uiCloseProgressBackdrop());
                dispatch(uiOpenErrorAlert('Error al intentar actualizar la categoria! Hable con el administrador'));
                console.log(msg);
            }


        } catch (error) {
            dispatch(uiCloseProgressBackdrop());
            dispatch(uiOpenErrorAlert('Error al intentar actualizar la categoria! Hable con el administrador'));
            console.log(error);
        }

    }

    return {
        //* Propiedades
        notifications,
        sales_user,

        //* Métodos
        startLoadNotifications,
        notificationStartUpdated,
    }
}
