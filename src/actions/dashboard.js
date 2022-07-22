import { fetchConToken, fetchSinToken } from "../helpers/fetch";
import { types } from "../reducers/types/types";
import { uiCloseProgressBackdrop, uiOpenErrorAlert, uiOpenProgressBackdrop, uiOpenSuccessAlert } from "./ui";


export const startLoadStatistics = () => {
    return async (dispatch) => {


        try {
            const resp = await fetchConToken('dashboard/logged');
            const body = await resp?.json();
console.log(body)

            if (body?.msg === 'OK') {

                console.log(body.results)

                dispatch(loadDashboardProducts(body.results.products));
                dispatch(loadDashboardBinProducts(body.results.binProducts));
                dispatch(loadDashboardUsers(body.results.users));
                dispatch(loadDashboardBinUsers(body.results.binUsers));
                dispatch(loadDashboardSales(body.results.sales));
                dispatch(loadDashboardRecords(body.results.records));

            } else {

                (body?.msg) && console.log(body.msg);

                try { 

                    const resp = await fetchSinToken('dashboard/unlogged');
                    const body = await resp?.json();

                    console.log('staticProduct', body)
 
                    if (body?.msg === 'OK') {

                        // console.log(body.results)

                        dispatch(loadDashboardProducts(body.results.products));
                    }

                } catch (error) {
                    console.log(error);
                }

            }


        } catch (error) {
            console.log(error);
        }
    }
}

const loadDashboardProducts = (products) => ({
    type: types.loadDashboardProducts,
    payload: products
})

const loadDashboardBinProducts = (binProducts) => ({
    type: types.loadDashboardBinProducts,
    payload: binProducts
})

const loadDashboardUsers = (users) => ({
    type: types.loadDashboardUsers,
    payload: users
})

const loadDashboardBinUsers = (binUsers) => ({
    type: types.loadDashboardBinUsers,
    payload: binUsers
})

const loadDashboardSales = (sales) => ({
    type: types.loadDashboardSales,
    payload: sales
})

const loadDashboardRecords = (records) => ({
    type: types.loadDashboardRecords,
    payload: records
})


export const addOneDashboardProducts = () => ({
    type: types.addOneDashboardProducts
})

export const subtractOneDashboardProducts = () => ({
    type: types.subtractOneDashboardProducts
})

export const addOneDashboardBinProducts = () => ({
    type: types.addOneDashboardBinProducts
})
export const subtractOneDashboardBinProducts = () => ({
    type: types.subtractOneDashboardBinProducts
})

export const addOneDashboardUsers = () => ({
    type: types.addOneDashboardUsers
})
export const subtractOneDashboardUsers = () => ({
    type: types.subtractOneDashboardUsers
})

export const addOneDashboardBinUsers = () => ({
    type: types.addOneDashboardBinUsers
})
export const subtractOneDashboardBinUsers = () => ({
    type: types.subtractOneDashboardBinUsers
})

export const addOneDashboardSales = () => ({
    type: types.addOneDashboardSales
})
export const subtractOneDashboardSales = () => ({
    type: types.subtractOneDashboardSales
})

export const addOneDashboardRecords = () => ({
    type: types.addOneDashboardRecords
})
export const subtractOneDashboardRecords = () => ({
    type: types.subtractOneDashboardRecords
})


export const staticsLogout = () => ({
    type: types.staticsLogout
})

