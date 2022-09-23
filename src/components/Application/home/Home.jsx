import React, { useEffect, useState } from 'react';

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

import queryString from 'query-string';

import { CardsMainHome } from './CardsMainHome';
import { Footer } from '../ui/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router';

import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

import { startLoadProducts } from '../../../store/thunks/products';

import {
    Search,
    SearchIconWrapper,
    StyledInputBase,
    styles__home
} from '../../../styles/Application/home/styles__home';


export const Home = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    const { uid } = useSelector(state => state.auth);
    const { products } = useSelector(state => state.product);
    const { dashboardProducts } = useSelector(state => state.dashboard);

    var type = '';

    const { q = '' } = queryString.parse(location.search);
    const { c = '' } = queryString.parse(location.search);
    let { page: pagePath = 1 } = queryString.parse(location.search);

    const [searchText, setSearchText] = useState(q);
    const [flagSearch, setFlagSearch] = useState(0);
    const [filterBy, setFilterBy] = useState('price');
    const [orderBy, setOrderBy] = useState('asc');

    const theme = useTheme();
    const sm = useMediaQuery(theme.breakpoints.down('sm'));
    const md = useMediaQuery(theme.breakpoints.down('md'));
    const xl = useMediaQuery(theme.breakpoints.down('xl'));
    const lg = useMediaQuery(theme.breakpoints.down('lg'));



    // Filters and search
    useEffect(() => {

        dispatch(startLoadProducts(filterBy, orderBy, searchText, pagePath));

    }, [filterBy, orderBy, flagSearch, pagePath]);


    const handlePaginationChange = (e, value) => {

        console.log(value)

        let url = '';

        if (c !== '') {

            url += `?c=${c}`
        } else {

            if (q !== '') {

                url += `?q=${q}`
            }
        }

        (!url.includes('?')) ? url += `?page=${value}` : url += `&page=${value}`;

        navigate(url)
    }

    // Search
    const handleInputChange = (e) => {
        e.preventDefault();
        setSearchText(e.target.value)
    }

    const handleSearch = (e) => {
        e.preventDefault();

        if (searchText !== '') {

            setFlagSearch(flagSearch + 1);
        }


    }

    //Filter
    const handleOrderByChange = (e) => {
        e.preventDefault();

        setOrderBy(e.target.value)
    }



    return (
        <>

            {
                (dashboardProducts)
                    ?
                    <>
                        <Container sx={styles__home(sm, md, lg, xl)}>

                            {
                                (!sm)
                                &&
                                <Container id='containerFilterAndSearch'>
                                    <Container id='filterContainer'>
                                        <FormControl id="FormControl">

                                            <InputLabel id="demo-simple-select-label">Ordenar por</InputLabel>

                                            <Select
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                value={orderBy}
                                                defaultValue={'ascendent'}
                                                label="orderBy"
                                                onChange={handleOrderByChange}
                                            >
                                                <MenuItem value={'asc'}>Menor precio</MenuItem>
                                                <MenuItem value={'desc'}>Mayor precio</MenuItem>
                                            </Select>

                                        </FormControl>
                                    </Container>

                                    <Box id='containerSearch'>


                                        <Search>
                                            <SearchIconWrapper>
                                                <SearchIcon />
                                            </SearchIconWrapper>

                                            <form onSubmit={handleSearch}>
                                                <StyledInputBase
                                                    onChange={handleInputChange}
                                                    type='text'
                                                    name='searchText'
                                                    autoComplete='off'
                                                    value={searchText}
                                                />
                                            </form>

                                            {
                                                (searchText !== '')
                                                &&
                                                <IconButton
                                                    id='closeIcon'
                                                    onClick={() => setSearchText('')}
                                                    color="inherit"
                                                >
                                                    <CloseIcon />
                                                </IconButton>
                                            }
                                        </Search>
                                    </Box>
                                </Container>
                            }

                            <Box id='containerCards'>

                                <CardsMainHome />

                            </Box>
                            {
                                (products && products?.length !== 0)
                                &&
                                <Stack
                                    id='stack'
                                    spacing={2}>
                                    <Pagination
                                        aria-current='page'
                                        defaultPage={1}
                                        page={Number(pagePath)}
                                        count={Math.ceil(parseInt(dashboardProducts) / 8)}
                                        onChange={handlePaginationChange}

                                    />
                                </Stack>
                            }

                        </Container>
                        <Footer />
                    </>
                    :
                    <>
                    </>
            }
        </>
    );
};