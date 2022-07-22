
import { types } from "../reducers/types/types";
import { fetchConToken, fetchSinToken } from "../helpers/fetch"
import { usersLogout } from './users';
import { productsBinLogout, usersBinLogout } from "./Bin";
import { uiCloseProgressBackdrop, uiLogout, uiOpenProgressBackdrop } from "./ui";
import { recordsLogout } from "./records";
import { cartLogout, loadCart } from "./cart";
import { salesLogout } from "./sales";
import { staticsLogout } from "./dashboard";
import { notificationsLogout } from "./notifications";


export const StartLogin = (email, password) => {
    return async (dispatch) => {

        try {
            dispatch(uiOpenProgressBackdrop());
            const resp = await fetchSinToken('auth/login', { email, password }, 'POST');
            const body = await resp.json();



            if (body.token) {

                localStorage.setItem('token', body.token);
                localStorage.setItem('token-init-date', new Date().getTime());


                dispatch(login({
                    uid: body.user._id,
                    name: body.user.name,
                    role: body.user.role
                }));
                dispatch(loadCart(body.user.cart));

                dispatch(uiCloseProgressBackdrop());

            } else {
                dispatch(uiCloseProgressBackdrop());
                return console.log(body.msg);
            }


        } catch (error) {
            dispatch(uiCloseProgressBackdrop());
            return console.log(error);
        }
    }
}

const login = (user) => ({
    type: types.authLogin,
    payload: user
})

export const startRegister = (name, email, password, role = 'USER_ROLE') => {
    return async (dispatch) => {

        try {
            dispatch(uiOpenProgressBackdrop());
            const resp = await fetchSinToken('users', { name, email, password, role }, 'POST');
            const body = await resp.json();

            console.log(body);

            if (body.msg === 'OK') {

                localStorage.setItem('token', body.token);
                localStorage.setItem('token-init-date', new Date().getTime());


                dispatch(login({
                    uid: body.user._id,
                    name: body.user.name,
                    role: body.user.role,
                }));
                dispatch(loadCart(body.user.cart));

                dispatch(uiCloseProgressBackdrop());
            } else {
                (body.errors !== undefined) && console.log(body.errors);
                (body.msg !== undefined) && console.log(body.msg);
                dispatch(uiCloseProgressBackdrop());

            }


        } catch (error) {
            dispatch(uiCloseProgressBackdrop());
            console.log(error);
        }
    }

}

export const startChecking = () => {
    return async (dispatch) => {

        try {
            const resp = await fetchConToken('auth/renew');
            const body = await resp?.json();

            if (body?.msg === 'OK') {



                localStorage.setItem('token', body.token);
                localStorage.setItem('token-init-date', new Date().getTime());


                dispatch(login({
                    uid: body._id,
                    name: body.name,
                    role: body.role,
                }));
                dispatch(loadCart(body.cart));

            } else {


                if (body?.msg === 'invalid token.') {

                    const removeToken = new Promise((resolve, reject) => {
                        resolve(() => {
                            localStorage.removeItem('token-init-date');
                            localStorage.removeItem('token');
                        });
                    });

                    removeToken
                        .then(dispatch(checkingFinish()))
                } else {
                    dispatch(checkingFinish())
                }
            }

        } catch (error) {
            dispatch(checkingFinish());
            console.log(error);

        }

    }
}

const checkingFinish = () => ({
    type: types.authCheckingFinish
})

export const startLogout = () => {
    return (dispatch) => {

        try {

            dispatch(uiOpenProgressBackdrop());

            dispatch(usersLogout());
            dispatch(usersBinLogout());
            dispatch(productsBinLogout());
            dispatch(recordsLogout());
            dispatch(salesLogout());
            dispatch(staticsLogout());
            dispatch(cartLogout());
            dispatch(notificationsLogout());
            dispatch(logout());

            dispatch(uiCloseProgressBackdrop());

        } catch (error) {
            console.log(error)
            dispatch(uiCloseProgressBackdrop());
        }
    }
}

const logout = () => ({
    type: types.authLogout
})

export const startGoogleLogin = (id_token) => {
    return async (dispatch) => {


        try {
            dispatch(uiOpenProgressBackdrop());
            const resp = await fetchSinToken('auth/google', { id_token }, 'POST');
            const body = await resp.json();

            if (body.msg === 'OK') {

                localStorage.setItem('token', body.token);
                localStorage.setItem('token-init-date', new Date().getTime());


                dispatch(login({
                    uid: body.user._id,
                    name: body.user.name,
                    role: body.user.role,
                }));
                dispatch(loadCart(body.user.cart));

                dispatch(uiCloseProgressBackdrop());

            } else {
                dispatch(uiCloseProgressBackdrop());
                return console.log(body.msg);
            }


        } catch (error) {
            dispatch(uiCloseProgressBackdrop());
            return console.log(error);
        }
    }

}
