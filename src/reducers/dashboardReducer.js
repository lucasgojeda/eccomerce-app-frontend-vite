import { types } from "./types/types";

const initialState = {
    dashboardProducts: 0,
    dashboardBinProducts: 0,
    dashboardUsers: 0,
    dashboardBinUsers: 0,
    dashboardSales: 0,
    dashboardRecords: 0,
}


export const dashboardReducer = (state = initialState, action) => {

    switch (action.type) {

        case types.loadDashboardProducts:
            return {
                ...state,
                dashboardProducts: action.payload
            }

        case types.loadDashboardBinProducts:
            return {
                ...state,
                dashboardBinProducts: action.payload
            }

        case types.loadDashboardUsers:
            return {
                ...state,
                dashboardUsers: action.payload
            }

        case types.loadDashboardBinUsers:
            return {
                ...state,
                dashboardBinUsers: action.payload
            }

        case types.loadDashboardSales:
            return {
                ...state,
                dashboardSales: action.payload
            }

        case types.loadDashboardRecords:
            return {
                ...state,
                dashboardRecords: action.payload
            }



        case types.addOneDashboardProducts:
            return {
                ...state,
                dashboardProducts: (state.dashboardProducts + 1)
            }

        case types.subtractOneDashboardProducts:
            return {
                ...state,
                dashboardProducts: (state.dashboardProducts - 1)
            }

        case types.addOneDashboardBinProducts:
            return {
                ...state,
                dashboardBinProducts: (state.dashboardBinProducts + 1)
            }

        case types.subtractOneDashboardBinProducts:
            return {
                ...state,
                dashboardBinProducts: (state.dashboardBinProducts - 1)
            }

        case types.addOneDashboardUsers:
            return {
                ...state,
                dashboardUsers: (state.dashboardUsers + 1)
            }

        case types.subtractOneDashboardUsers:
            return {
                ...state,
                dashboardUsers: (state.dashboardUsers - 1)
            }

        case types.addOneDashboardBinUsers:
            return {
                ...state,
                dashboardBinUsers: (state.dashboardBinUsers + 1)
            }

        case types.subtractOneDashboardBinUsers:
            return {
                ...state,
                dashboardBinUsers: (state.dashboardBinUsers - 1)
            }

        case types.addOneDashboardSales:
            return {
                ...state,
                dashboardSales: (state.dashboardSales + 1)
            }

        case types.subtractOneDashboardSales:
            return {
                ...state,
                dashboardSales: (state.dashboardSales - 1)
            }

        case types.addOneDashboardRecords:
            return {
                ...state,
                dashboardRecords: (state.dashboardRecords + 1)
            }

        case types.subtractOneDashboardRecords:
            return {
                ...state,
                dashboardRecords: (state.dashboardRecords - 1)
            }


        case types.staticsLogout:
            return {
                ...state,
                dashboardBinProducts: 0,
                dashboardUsers: 0,
                dashboardBinUsers: 0,
                dashboardSales: 0,
                dashboardRecords: 0,
            }





        default:
            return state;
    }
}