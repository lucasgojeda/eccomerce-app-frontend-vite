import React, { useEffect } from 'react';
import { useLocation } from 'react-router';

import queryString from 'query-string';

import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

import { LargueUnloggedBar } from './LargueUnloggedBar';
import { SmallUnloggedDrawerBar } from './SmallUnloggedDrawerBar';

import { useProductsStore } from '../../../../hooks';


export const NavbarUnlogged = () => {

  const location = useLocation();

  const {
    products,
    startLoadProducts,
  } = useProductsStore();

  const { q = '' } = queryString.parse(location.search);
  const { c = '' } = queryString.parse(location.search);
  let { page: pagePath = 1 } = queryString.parse(location.search);

  useEffect(() => {


    (!products)

      ? startLoadProducts(q, Number(pagePath))

      : ((c !== '')

        ? startLoadProducts(c, Number(pagePath))

        : startLoadProducts(q, Number(pagePath))
      )

  }, [location.search]);

  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <>
    {
      (sm)
      ?
      <SmallUnloggedDrawerBar />
      :
      <LargueUnloggedBar />
    }
    </>
  );
}

