import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { clearActiveBinProduct, clearActiveBinUser } from '../../actions/Bin';

import { BinUsersDashboardTable } from './tables/BinUsersDashboardTable';


export const BinUsersDashboardScreen = () => { 

    const dispatch = useDispatch();


    useEffect(() => {
 
        dispatch(clearActiveBinProduct());
        dispatch(clearActiveBinUser());


    }, []);

    return (
            <>

                <BinUsersDashboardTable />


            </>
    );
};