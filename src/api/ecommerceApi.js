import axios from 'axios';

import { getEnvironmets } from '../helpers';

const { VITE_REACT_APP_API_URL } = getEnvironmets();


const ecommerceApi = axios.create({
    baseURL: VITE_REACT_APP_API_URL
});

// Todo: configurar interceptores
ecommerceApi.interceptors.request.use( config => {

    config.headers = {
        ...config.headers,
        'x-token': localStorage.getItem('token')
    }

    return config;
})

export default ecommerceApi;



