import React from 'react';
import { Provider } from 'react-redux';

import { store } from './store/store';
import { AppRouter } from './router/AppRouter';

import './styles/main.scss';


export const App = () => { 
    return(
        <Provider store={ store }>
            <AppRouter />
        </Provider>
    );
};