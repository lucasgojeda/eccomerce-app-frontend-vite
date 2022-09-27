import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack'
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

import queryString from 'query-string';

import { Cards } from '../components/Cards';
import { Footer } from '../../ui';

import {
    useAuthStore,
    useCategoriesStore,
    useProductsStore,
    useStaticsStore
} from '../../../hooks';

import {
    Search,
    SearchIconWrapper,
    StyledInputBase,
    styles__home
} from '../../../styles/Application/home/styles__home';

import './HomePage.scss';
import { BestProducts } from '../components/bestProducts/BestProducts';
import { CategoriesSection } from '../components/categoriesSection/CategoriesSection';


export const HomePage = () => {

    const navigate = useNavigate();
    const location = useLocation();

    const { uid } = useAuthStore()

    const {
        products,
        startLoadProducts
    } = useProductsStore();

    const { categories } = useCategoriesStore();

    const { dashboardProducts } = useStaticsStore();



    const theme = useTheme();
    const sm = useMediaQuery(theme.breakpoints.down('sm'));
    const md = useMediaQuery(theme.breakpoints.down('md'));
    const xl = useMediaQuery(theme.breakpoints.down('xl'));
    const lg = useMediaQuery(theme.breakpoints.down('lg'));

    var type = '';
    const { q = '' } = queryString.parse(location.search);
    const { c = '' } = queryString.parse(location.search);
    let { page: pagePath = 1 } = queryString.parse(location.search);

    const [searchText, setSearchText] = useState(q);
    const [flagSearch, setFlagSearch] = useState(0);
    const [filterBy, setFilterBy] = useState('price');
    const [orderBy, setOrderBy] = useState('desc');





    return (
        <div className='container_HomePage'>

            <BestProducts />

            <CategoriesSection />

            {/* <div className='containerCards'>
                <Cards />
            </div> */}

        </div>
    );
};