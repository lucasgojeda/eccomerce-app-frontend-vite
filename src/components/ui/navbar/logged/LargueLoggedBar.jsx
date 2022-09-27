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
import FilterListIcon from '@mui/icons-material/FilterList';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';

import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

import { useAuthStore, useProductsStore } from '../../../../hooks';
// import { clearFilteredProducts } from '../../../../../store/thunks/products';

import { CategoriesBar } from '../../../ui';
import { CartMenu } from '../../../ui';
import { NotificationsMenu } from '../../../ui';
// import { DialogLogout } from '../../../../dashboard/ui/alerts/DialogLogout';

// import { styles__largueLoggedBar } from '../../../../styles/Application/ui/logged/styles__largueLoggedBar';
import './LargueLoggedBar.scss';

import {
  Search,
  SearchIconWrapper,
  StyledInputBase,
  styles__home
} from '../../../../styles/Application/home/styles__home';
import { SearchBar } from './components/searchBar/SearchBar';
import { MenuDrawer } from './components/menuDrawer/MenuDrawer';


export const LargueLoggedBar = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const {
    uid,
    role,
    name,
    startLogout,
  } = useAuthStore();

  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.down('sm'));
  const md = useMediaQuery(theme.breakpoints.down('md'));
  const xl = useMediaQuery(theme.breakpoints.down('xl'));
  const lg = useMediaQuery(theme.breakpoints.down('lg'));





  return (
    <div
      className='container_largueLoggedBar'
    >
      <div className='container_Menu'>
        <MenuDrawer />
      </div>

      <div className='container_items'>

        <div className='container_cartMenu'>
          <CartMenu />
          <NotificationsMenu />
        </div>

        <div className='container_Search'>
          <SearchBar />
        </div>

      </div>

    </div>
  );
}; 