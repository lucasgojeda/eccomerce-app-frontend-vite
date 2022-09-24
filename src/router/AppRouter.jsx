import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    Routes,
    Route,
    BrowserRouter,
    Navigate
} from "react-router-dom";

import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

// import { LoginScreen } from '../components/Application/auth/LoginScreen';
// import { RegisterScreen } from '../components/Application/auth/RegisterScreen';
// import { Home } from '../components/Application/home/Home';
// import { NavbarLogged } from '../components/Application/ui/navbar/logged/NavbarLogged';
// import { NavbarUnlogged } from '../components/Application/ui/navbar/unlogged/NavbarUnlogged';
// import { ProductScreen } from '../components/Application/product/ProductScreen';

import { startChecking } from '../store/thunks/auth';
import { startLoadSales } from '../store/thunks/sales';
import { startLoadStatistics } from '../store/thunks/dashboard';
import { startLoadNotifications } from '../store/thunks/notifications';
import { startLoadCategories } from '../store/thunks/categories';
import { startLoadProducts } from '../store/thunks/products';

import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import { LoginPage, RegisterPage } from '../components/auth';
import { NavbarLogged, NavbarUnlogged, ProgressBackdrop } from '../components/ui';
import { HomePage } from '../components/home';
import { CartPage } from '../components/cart';
import { NotificationsPage } from '../components/notifications';
import { ProductPage } from '../components/product';


// import { ErrorAlert } from '../components/dashboard/ui/alerts/ErrorAlert';
// import { SuccessAlert } from '../components/dashboard/ui/alerts/SuccessAlert';
// import { ProgressBackdrop } from '../components/dashboard/ui/progress/ProgressBackdrop';
// import { CartScreen } from '../components/Application/cart/CartScreen';
// import { NotificationsScreen } from '../components/Application/notifications/NotificationsScreen';




export const AppRouter = () => {

    const dispatch = useDispatch();

    const { uid, checking, role } = useSelector(state => state.auth);
    const { products } = useSelector(state => state.product);
    const { categories } = useSelector(state => state.categories);

    useEffect(() => {

        dispatch(startChecking());
        dispatch(startLoadProducts())
        dispatch(startLoadCategories())
        dispatch(startLoadSales())
        dispatch(startLoadStatistics())
        dispatch(startLoadNotifications());

    }, [dispatch]);


    if (checking || !products || !categories) {

        return <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={true}
        >
            <CircularProgress color="inherit" size='80px' sx={{ display: 'block' }} />
        </Backdrop>
    }


    return (


        <BrowserRouter>

            <ProgressBackdrop />
            {/* <ErrorAlert />
            <SuccessAlert /> */}

            <Routes>


                <Route path="login" element={
                    <PublicRoute isAutenticated={!!uid}>
                        <>
                            <LoginPage />
                        </>
                    </PublicRoute>
                } />

                <Route path="register" element={
                    <PublicRoute isAutenticated={!!uid}>
                        <>
                            <RegisterPage />
                        </>
                    </PublicRoute>
                } />

                <Route path="/" element={
                    <>

                        {(uid) ? <NavbarLogged /> : <NavbarUnlogged />}
                        <HomePage />
                    </>

                } />


                <Route path="/cart" element={
                    <PrivateRoute isAutenticated={!!uid}>

                        {(uid) ? <NavbarLogged /> : <NavbarUnlogged />}
                        <CartPage />

                    </PrivateRoute>
                } />

                <Route path="/notifications" element={
                    <PrivateRoute isAutenticated={!!uid}>

                        {(uid) ? <NavbarLogged /> : <NavbarUnlogged />}
                        <NotificationsPage />

                    </PrivateRoute>
                } />

                <Route path="/product/:id" element={
                    <>
                        {(uid) ? <NavbarLogged /> : <NavbarUnlogged />}
                        <ProductPage />
                    </>

                } />

            </Routes>

        </BrowserRouter>
    );
};