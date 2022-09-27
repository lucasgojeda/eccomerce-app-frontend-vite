import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';

import queryString from 'query-string';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import { styled, alpha } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import DashboardIcon from '@mui/icons-material/Dashboard';
import LogoutIcon from '@mui/icons-material/Logout';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import HomeIcon from '@mui/icons-material/Home';

import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

import { useAuthStore } from '../../../../hooks';

import { CategoriesBar } from '../../../ui';

import { styles__largueUnloggedBar } from '../../../../styles/Application/ui/unlogged/styles__largueUnloggedBar';


export const LargueUnloggedBar = () => {

    const navigate = useNavigate();
    const location = useLocation();

    const { startLogout } = useAuthStore();

    const { q = '' } = queryString.parse(location.search);
    const { c = '' } = queryString.parse(location.search);

    const [anchorEl, setAnchorEl] = useState(null);


    const theme = useTheme();
    const sm = useMediaQuery(theme.breakpoints.down('sm'));
    const md = useMediaQuery(theme.breakpoints.down('md'));
    const xl = useMediaQuery(theme.breakpoints.down('xl'));
    const lg = useMediaQuery(theme.breakpoints.down('lg'));



    // Normal menu
    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <Box sx={styles__largueUnloggedBar(sm, md, lg, xl)}>
            <AppBar id='appBar'>
                <Toolbar id='toolBar'>

                    <IconButton
                        id='homeIconButton'
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        onClick={() => navigate('/?page=1')}
                    >
                        <HomeIcon />

                    </IconButton>

                    <div>


                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleMenu}
                            color="inherit"
                        >
                            <AccountCircle />
                        </IconButton>
                        <Menu
                            id="menuLoginAndRegister"
                            anchorEl={anchorEl}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'Left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                        >
                            <MenuItem onClick={() => navigate('/login')}>Iniciar sesión</MenuItem>
                            <MenuItem onClick={() => navigate('/register')}>Registrarse</MenuItem>
                        </Menu>
                    </div>

                </Toolbar>
            </AppBar>

            <CategoriesBar />

        </Box >
    );
};