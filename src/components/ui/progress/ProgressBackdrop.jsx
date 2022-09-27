import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

import { useUiStore } from '../../../hooks';

// import { styles__progress } from '../../../../styles/dashboard/ui/progress/styles__progress';

import './ProgressBackdrop.scss';


export const ProgressBackdrop = () => {

  const { progressBackdrop } = useUiStore();

  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.down('sm'));
  const md = useMediaQuery(theme.breakpoints.down('md'));
  const xl = useMediaQuery(theme.breakpoints.down('xl'));
  const lg = useMediaQuery(theme.breakpoints.down('lg'));

  return (
    <Backdrop
      // sx={styles__progress(sm, md, lg, xl)}
      open={progressBackdrop.status}
    >
      <CircularProgress color="inherit" size='80px' sx={{ display: 'block' }} />
    </Backdrop>
  );
}
