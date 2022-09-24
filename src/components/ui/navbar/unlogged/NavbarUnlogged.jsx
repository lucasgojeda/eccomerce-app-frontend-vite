import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router';

import queryString from 'query-string';

import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

import { LargueUnloggedBar } from './LargueUnloggedBar';
import { SmallUnloggedDrawerBar } from './SmallUnloggedDrawerBar';

import { startLoadProducts } from '../../../../store/thunks/products';


export const NavbarUnlogged = () => {

  const dispatch = useDispatch();
  const location = useLocation();

  const { products } = useSelector(state => state.product);

  const { q = '' } = queryString.parse(location.search);
  const { c = '' } = queryString.parse(location.search);
  let { page: pagePath = 1 } = queryString.parse(location.search);

  useEffect(() => {


    (!products)

      ? dispatch(startLoadProducts(q, Number(pagePath)))

      : ((c !== '')

        ? dispatch(startLoadProducts(c, Number(pagePath)))

        : dispatch(startLoadProducts(q, Number(pagePath)))
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

