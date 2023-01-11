/** Libraries */
import { Navigate, useLocation } from "react-router-dom";

/** Custom hooks */
import { useAuthStore } from "../hooks";

export const PrivateRoute = ({ children }) => {

    const { pathname } = useLocation();

    const { uid, data } = useAuthStore();

    if (!uid) {

        if (pathname === '/cart') return <Navigate to="/login" />
        if (pathname === '/notifications') return <Navigate to="/login" />
        if (pathname === '/account') return <Navigate to="/login" />
    }

    if((uid && !data) && pathname !== '/account') return <Navigate to="/account" />

    return children;
};