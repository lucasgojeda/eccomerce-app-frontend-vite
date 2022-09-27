import React, { useEffect } from 'react';
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

import {
    useAuthStore,
    useCategoriesStore,
    useNotificationsStore,
    useProductsStore,
    useSalesStore,
    useStaticsStore
} from '../hooks';

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

    const {
        uid,
        checking,
        role,
        startChecking,
    } = useAuthStore();

    const {
        products,
        startLoadProducts,
    } = useProductsStore();

    const {
        categories,
        startLoadCategories,
    } = useCategoriesStore();

    const { startLoadSales } = useSalesStore();

    const { startLoadStatistics } = useStaticsStore();

    const { startLoadNotifications } = useNotificationsStore();


    useEffect(() => {

        startChecking();
        // startLoadProducts()
        startLoadCategories()
        // startLoadSales()
        startLoadStatistics()
        startLoadNotifications();

    }, []);


    if (checking || !categories) {

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