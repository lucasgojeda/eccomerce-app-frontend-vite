import React, { useEffect } from 'react';
import { useLocation } from 'react-router';

import queryString from 'query-string';

import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

import { LargueLoggedBar } from './LargueLoggedBar';
import { SmallLoggedDrawerBar } from './SmallLoggedDrawerBar';

import { useProductsStore } from '../../../../hooks';


export const NavbarLogged = () => {

  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <>
      {
        (sm)
          ?
          <SmallLoggedDrawerBar />
          :
          <LargueLoggedBar />
      }
    </>
  );
}

