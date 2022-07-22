import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { clearActiveBinProduct, clearActiveBinUser } from '../../actions/Bin';

import { BinProductsDashboardTable } from './tables/BinProductsDashboardTable';


export const BinProductsDashboardScreen = () => { 

    const dispatch = useDispatch();

    useEffect(() => {
        
        dispatch( clearActiveBinProduct() );
        dispatch( clearActiveBinUser() );
    
      
    }, []);

    return (
            <>
 
                <BinProductsDashboardTable />

            </>
    );
};