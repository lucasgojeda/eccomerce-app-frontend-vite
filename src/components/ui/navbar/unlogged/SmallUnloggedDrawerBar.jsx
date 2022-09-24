import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router';

import queryString from 'query-string';

import { styled, useTheme, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import LogoutIcon from '@mui/icons-material/Logout';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import DashboardIcon from '@mui/icons-material/Dashboard';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import useMediaQuery from '@mui/material/useMediaQuery';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import HomeIcon from '@mui/icons-material/Home';
import ListItemText from '@mui/material/ListItemText';
import InputBase from '@mui/material/InputBase';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';

import { startLogout } from '../../../../store/thunks/auth';
import { startLoadProducts } from '../../../../store/thunks/products';

import {
    AppBar,
    DrawerHeader,
    Search,
    SearchIconWrapper,
    StyledInputBase,
    styles__smallUnloggedDrawerBar
} from '../../../../styles/Application/ui/unlogged/styles__smallUnloggedDrawerBar';


export const SmallUnloggedDrawerBar = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    const { q = '' } = queryString.parse(location.search);
    const { c = '' } = queryString.parse(location.search);

    const { role } = useSelector(state => state.auth);

    const theme = useTheme();
    const sm = useMediaQuery(theme.breakpoints.down('sm'));
    const md = useMediaQuery(theme.breakpoints.down('md'));
    const xl = useMediaQuery(theme.breakpoints.down('xl'));
    const lg = useMediaQuery(theme.breakpoints.down('lg'));

    const [open, setOpen] = useState(false);
    const [searchText, setSearchText] = useState(q);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    // Search
    const handleInputChange = (e) => {
        e.preventDefault();
        setSearchText(e.target.value)
    }

    const handleSearch = (e) => {
        e.preventDefault();

        if (searchText !== '') {

            navigate(`?q=${searchText}`)

            dispatch(startLoadProducts(searchText))
        }

        handleDrawerClose();


    }

    const handleLogout = () => {
        handleDrawerClose();
        dispatch(startLogout());
    }


    return (
        <Box sx={styles__smallUnloggedDrawerBar(sm, md, lg, xl)}>


            <AppBar id='appBar' open={open}>
                <Toolbar>

                    <IconButton
                        id='menuIconButton'
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{ ...(open && { display: 'none' }) }}
                    >
                        <MenuIcon />
                    </IconButton>

                </Toolbar>
            </AppBar>

            <Drawer
                id='drawerContainer'
                variant="persistent"
                anchor="left"
                open={open}
            >

                <DrawerHeader>
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
                                id='closeIconButton'
                                onClick={() => setSearchText('')}
                                color="inherit"
                            >
                                <CloseIcon />
                            </IconButton>
                        }
                    </Search>

                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </DrawerHeader>

                <Divider />

                <List>

                    <ListItem button
                        onClick={() => {
                            handleDrawerClose();
                            navigate('/?page=1')
                        }}
                    >
                        <ListItemIcon>
                            <HomeIcon />
                        </ListItemIcon>
                        <ListItemText primary={'Inicio'} />
                    </ListItem>


                    <ListItem button
                        onClick={() => {
                            handleDrawerClose();
                            navigate('/login')
                        }}
                    >
                        <ListItemIcon>
                            <AccountCircle />
                        </ListItemIcon>
                        <ListItemText primary={'Iniciar sesión'} />
                    </ListItem>

                    <ListItem button
                        onClick={() => {
                            handleDrawerClose();
                            navigate('/register')
                        }}
                    >
                        <ListItemIcon>
                            <LogoutIcon />
                        </ListItemIcon>
                        <ListItemText primary={'Registrarse'} />
                    </ListItem>

                </List>


            </Drawer>
        </Box>
    );
}
