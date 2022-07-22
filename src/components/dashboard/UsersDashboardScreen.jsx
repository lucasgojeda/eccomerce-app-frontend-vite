import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { clearActiveProduct } from '../../actions/products';
import { clearActiveUser } from '../../actions/users';

import { CreateUserModal } from './modals/CreateUserModal';
import { EditUserModal } from './modals/EditUserModal';
import { UsersDashboardTable } from './tables/UsersDashboardTable';


export const UsersDashboardScreen = () => {

    const dispatch = useDispatch();

    useEffect(() => {

        dispatch(clearActiveProduct());
        dispatch(clearActiveUser());


    }, []);

    return (
        <>


            <UsersDashboardTable />

            <EditUserModal />

            <CreateUserModal />

        </>
    );
};