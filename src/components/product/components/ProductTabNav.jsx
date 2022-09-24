import * as React from 'react';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

import { styles__productTabNav } from '../../../styles/Application/product/styles__productTabNav';


export const ProductTabNav = ({ setValue, value }) => {

  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.down('sm'));
  const md = useMediaQuery(theme.breakpoints.down('md'));
  const xl = useMediaQuery(theme.breakpoints.down('xl'));
  const lg = useMediaQuery(theme.breakpoints.down('lg'));

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={styles__productTabNav(sm, md, lg, xl)}>
      <Tabs
        onChange={handleChange}
        value={value}
        aria-label="Tabs where selection follows focus"
        selectionFollowsFocus
      >
        {
          (sm || md)
          &&
          <Tab label="Detalles" />
        }

        <Tab label="Envio" />
        <Tab label="Devolución" />
      </Tabs>
    </Box>
  );
}
