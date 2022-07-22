import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { clearActiveProduct } from '../../actions/products';
import { clearActiveUser } from '../../actions/users';

import { CreateProductModal } from './modals/CreateProductModal';
import { ProductsDashboardTable } from './tables/ProductsDashboardTable';


export const ProductsDashboardScreen = () => { 

    const dispatch = useDispatch();

    useEffect(() => {

        dispatch(clearActiveProduct());
        dispatch(clearActiveUser());

    }, []);

    return (
        <>

            <CreateProductModal />

            <ProductsDashboardTable />

        </>
    );
};