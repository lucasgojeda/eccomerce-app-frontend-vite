import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

import { useUiStore } from '../../../hooks';


export const ProgressBackdrop = () => {

  const { progressBackdrop } = useUiStore();

  return (
    <Backdrop
    className='container_ProgressBackdrop'
      open={progressBackdrop.status}
    >
      <CircularProgress color="inherit" size='80px' sx={{ display: 'block' }} />
    </Backdrop>
  );
}
