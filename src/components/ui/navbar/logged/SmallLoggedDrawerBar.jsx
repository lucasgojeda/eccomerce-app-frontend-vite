import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';

import queryString from 'query-string';

import { styled, useTheme, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import LogoutIcon from '@mui/icons-material/Logout';
import useMediaQuery from '@mui/material/useMediaQuery';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Toolbar from '@mui/material/Toolbar';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import DashboardIcon from '@mui/icons-material/Dashboard';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import HomeIcon from '@mui/icons-material/Home';
import ListItemText from '@mui/material/ListItemText';
import InputBase from '@mui/material/InputBase';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Badge from '@mui/material/Badge';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import { Container } from '@mui/material';

import { useAuthStore, useProductsStore } from '../../../../hooks';

import { CartMenu } from '../../../ui';
import { NotificationsMenu } from '../../../ui';
// import { DialogLogout } from '../../../../dashboard/ui/alerts/DialogLogout';

import {
    AppBar,
    DrawerHeader,
    Search,
    SearchIconWrapper,
    StyledInputBase,
    styles__smallLoggedDrawerBar
} from '../../../../styles/Application/ui/logged/styles__smallLoggedDrawerBar';



export const SmallLoggedDrawerBar = () => {

    const navigate = useNavigate();
    const location = useLocation();

    const { q = '' } = queryString.parse(location.search);
    const { c = '' } = queryString.parse(location.search);
    let { page: pagePath = 1 } = queryString.parse(location.search);

    const {
        role,
        startLogout,
    } = useAuthStore();

    const { startLoadProducts } = useProductsStore();

    const theme = useTheme();
    const sm = useMediaQuery(theme.breakpoints.down('sm'));
    const md = useMediaQuery(theme.breakpoints.down('md'));
    const xl = useMediaQuery(theme.breakpoints.down('xl'));
    const lg = useMediaQuery(theme.breakpoints.down('lg'));

    const [anchorEl, setAnchorEl] = useState(null);
    const [open, setOpen] = useState(false);
    const [dialogLogoutOpen, setDialogLogoutOpen] = useState(false);
    const [searchText, setSearchText] = useState(q);
    const [flagSearch, setFlagSearch] = useState(0);
    const [filterBy, setFilterBy] = useState('price');
    const [orderBy, setOrderBy] = useState('asc');


    // Filters and search
    useEffect(() => {

        startLoadProducts(filterBy, orderBy, searchText, pagePath);

    }, [filterBy, orderBy, flagSearch, pagePath]);



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

            setFlagSearch(flagSearch + 1);
        }


    }

    //Filter
    const handleOrderBy = (e, value) => {
        e.preventDefault();

        setOrderBy(value)
        console.log(value)
        handleClose();
    }

    const handleLogout = () => {

        setDialogLogoutOpen(true);
        handleDrawerClose();
        handleClose();
    }

    //Filter menu

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Box sx={styles__smallLoggedDrawerBar(sm, md, lg, xl)}>

            {/* <DialogLogout
                dialogLogoutOpen={dialogLogoutOpen}
                setDialogLogoutOpen={setDialogLogoutOpen}
            /> */}


            <AppBar
                id='appBar'
                open={open}>
                <Toolbar id='toolBar'>

                    <IconButton
                        id='menuIcon'
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{ ...(open && { display: 'none' }) }}
                    >
                        <MenuIcon />
                    </IconButton>



                    <CartMenu />

                    <NotificationsMenu />

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

                            <FilterAltIcon id='filterIcon' onClick={handleMenu} />
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorEl}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorEl)}
                                onClose={handleClose}
                            >
                                <MenuItem onClick={(e) => handleOrderBy(e, 'asc')}>Menor precio</MenuItem>
                                <MenuItem onClick={(e) => handleOrderBy(e, 'desc')}>Mayor precio</MenuItem>
                            </Menu>

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

                        </form>
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

                    {
                        (role === 'ADMIN_ROLE' || role === 'MODERATOR_ROLE')
                        &&
                        <ListItem button
                            onClick={() => {
                                handleDrawerClose();
                                navigate('/dashboard')
                            }}
                        >
                            <ListItemIcon>
                                <DashboardIcon />
                            </ListItemIcon>
                            <ListItemText primary={'Panel de control'} />
                        </ListItem>
                    }

                    <ListItem button
                        onClick={handleDrawerClose}
                    >
                        <ListItemIcon>
                            <AccountCircle />
                        </ListItemIcon>
                        <ListItemText primary={'My perfil'} />
                    </ListItem>

                    <ListItem button
                        onClick={() => {
                            handleDrawerClose();
                            handleLogout();
                        }}
                    >
                        <ListItemIcon>
                            <LogoutIcon />
                        </ListItemIcon>
                        <ListItemText primary={'Cerrar sesión'} />
                    </ListItem>

                </List>


            </Drawer>
        </Box>
    );
}
