import React, { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router';

import { ProductsDashboardScreen } from './ProductsDashboardScreen';
import { UsersDashboardScreen } from './UsersDashboardScreen';
import { RecordDashboardScreen } from './RecordDashboardScreen';
import { BinProductsDashboardScreen } from './BinProductsDashboardScreen';
import { BinUsersDashboardScreen } from './BinUsersDashboardScreen';
import { SalesDashboardScreen } from './SalesDashboardScreen';

import { CardProducts } from './ui/cards/CardProducts';
import { useDispatch } from 'react-redux';
import { startLoadUsers } from '../../actions/users';
import { startLoadBinProducts, startLoadBinUsers } from '../../actions/Bin';
import { startLoadRecords } from '../../actions/records';
import { startLoadStatistics } from '../../actions/dashboard';


export const DashboardRouter = () => {
    
    const dispatch = useDispatch();
    const { pathname } = useLocation();

    useEffect(() => {

        dispatch(startLoadStatistics());
        dispatch(startLoadUsers());
        dispatch(startLoadBinUsers());
        dispatch(startLoadBinProducts());
        dispatch(startLoadRecords());

    }, [dispatch]);

    return (
        <>


            <Routes>
                <Route path="products" element={<ProductsDashboardScreen />} />
                <Route path="users" element={<UsersDashboardScreen />} />
                <Route path="regist" element={<RecordDashboardScreen />} />
                <Route path="bin/products" element={<BinProductsDashboardScreen />} />
                <Route path="bin/users" element={<BinUsersDashboardScreen />} />
                <Route path="sales" element={<SalesDashboardScreen />} />
            </Routes>


            {
                (pathname === '/dashboard')
                &&
                <CardProducts />
            }
        </>

    );
};

