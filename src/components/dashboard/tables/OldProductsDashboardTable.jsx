import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { DataGrid } from '@mui/x-data-grid';
import { Box } from '@mui/material';
import Skeleton from '@mui/material/Skeleton';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

import { activeProduct } from '../../../actions/products';
import { prepareProducts } from '../../../helpers/prepareProducts';
import { uiOpenProductModalEdit } from '../../../actions/ui';
import { styles__tables } from '../../../styles/styles__tables';


const columns = [
  {
    field: 'name',
    headerName: 'Nombre',
    width: 130,
    headerClassName: 'super-app-theme--header'
  },

  {
    field: 'price',
    headerName: 'Precio',
    type: 'number',
    width: 80,
    headerClassName: 'super-app-theme--header'
  },

  {
    field: 'quantity',
    headerName: 'Cantidad',
    type: 'number',
    width: 90,
    headerClassName: 'super-app-theme--header'
  },
  {
    field: 'user',
    headerName: 'Usuario',
    width: 110,
    headerClassName: 'super-app-theme--header'
  },

  {
    field: 'category',
    headerName: 'Categoria',
    width: 130,
    headerClassName: 'super-app-theme--header'
  },

  {
    field: 'description',
    headerName: 'Descripción',
    width: 550,
    headerClassName: 'super-app-theme--header'
  },

];


export const OldProductsDashboardTable = () => {

  const dispatch = useDispatch();

  const { productRows } = useSelector(state => state.product);

  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.down('sm'));
  const md = useMediaQuery(theme.breakpoints.down('md'));
  const xl = useMediaQuery(theme.breakpoints.down('xl'));
  const lg = useMediaQuery(theme.breakpoints.down('lg'));


  if (productRows !== undefined) {

    var productRowsPrepared = prepareProducts(productRows);
  }

  const onRowClick = (event) => {

    const productSelected = (productRows.filter(
      e => (e._id === event.row.id)
    ));


    dispatch(activeProduct(productSelected[0]))
  }

  const onRowDoubleClick = () => {
    dispatch(uiOpenProductModalEdit());
  }

  return (
    <div>

      <div>
        <Box
          sx={styles__tables(sm, md, lg, xl)}>
          {
            (productRows !== undefined)
              ? <DataGrid
                rows={productRowsPrepared[0]}
                columns={columns}
                pageSize={8}
                rowsPerPageOptions={[8]}
                onRowClick={onRowClick}
                onRowDoubleClick={onRowDoubleClick}
                hideFooterSelectedRowCount

              />
              :
              <>
                <Skeleton height={80} animation="wave" />
                <Skeleton height={80} animation="wave" />
                <Skeleton height={80} animation="wave" />
                <Skeleton height={80} animation="wave" />
                <Skeleton height={80} animation="wave" />
                <Skeleton height={80} animation={false} />
              </>
          }

        </Box>
      </div>
    </div>
  );
}
