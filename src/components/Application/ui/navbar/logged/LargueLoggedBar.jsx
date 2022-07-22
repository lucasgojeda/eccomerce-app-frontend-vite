import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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

import { startLogout } from '../../../../../actions/auth';
// import { clearFilteredProducts } from '../../../../../actions/products';
import { CategoriesBar } from '../ui/CategoriesBar';
import { CartMenu } from '../ui/CartMenu';
import { NotificationsMenu } from '../ui/NotificationsMenu';
import { DialogLogout } from '../../../../dashboard/ui/alerts/DialogLogout';

import { styles__largueLoggedBar } from '../../../../../styles/Application/ui/logged/styles__largueLoggedBar';


export const LargueLoggedBar = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const { q = '' } = queryString.parse(location.search);
  const { c = '' } = queryString.parse(location.search);

  const { uid, role, name } = useSelector(state => state.auth);

  const [anchorEl, setAnchorEl] = useState(null);
  const [dialogLogoutOpen, setDialogLogoutOpen] = useState(false);


  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.down('sm'));
  const md = useMediaQuery(theme.breakpoints.down('md'));
  const xl = useMediaQuery(theme.breakpoints.down('xl'));
  const lg = useMediaQuery(theme.breakpoints.down('lg'));



  // Normal menu
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleLogout = () => {
    setDialogLogoutOpen(true);
    handleClose();
  }

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box sx={styles__largueLoggedBar(sm, md, lg, xl)}>
      <DialogLogout
        dialogLogoutOpen={dialogLogoutOpen}
        setDialogLogoutOpen={setDialogLogoutOpen}
      />
      <AppBar id='appBar'>
        <Toolbar id='toolBar'>


          <IconButton
            id='buttonHome'
            color="inherit"
            edge="start"
            onClick={() => navigate('/?page=1')}
          >
            <HomeIcon />

          </IconButton>
          {
            (role !== 'USER_ROLE')
            &&
            <>
              {
                (!md)
                  ?
                  <Typography
                    id='dashboardTypography'
                    variant="p"
                    component="div"
                    onClick={() => navigate('/dashboard')}
                  >

                    Panel de control

                  </Typography>
                  :
                  <DashboardIcon
                    onClick={() => navigate('/dashboard')}
                    id='dashboardIcon'
                  />
              }
            </>
          }

          <CartMenu />

          <NotificationsMenu />

          <div>
            <IconButton
              id='accountCircleIcon'
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
              <MenuItem onClick={handleClose}>My perfil</MenuItem>
              <MenuItem onClick={handleLogout}>Cerrar sesión</MenuItem>
            </Menu>
          </div>
          {
            (!md)
            &&
            <Typography
              id='nameTypography'
              edge="end"
              variant="p"
              component="div"
            >
              {name}
            </Typography>
          }

        </Toolbar>
      </AppBar>

      <CategoriesBar />

    </Box >
  );
};