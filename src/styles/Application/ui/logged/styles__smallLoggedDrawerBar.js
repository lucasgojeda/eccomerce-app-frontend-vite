import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import MuiAppBar from '@mui/material/AppBar';


export const styles__smallLoggedDrawerBar = (sm, md, lg, xl) => {
  switch (true) {

    case sm:
      return smallLoggedDrawerBar__smBox();

    case md:
      return smallLoggedDrawerBar__mdBox();

    case lg:
      return smallLoggedDrawerBar__lgBox();

    case xl:
      return smallLoggedDrawerBar__xlBox();

    default:
      break;
  }
}


const smallLoggedDrawerBar__xlBox = () => ({
  display: 'flex',
  '& #appBar': {
    position: 'fixed',
  },
  '& #toolBar': {
    display: 'flex',
    justifyContent: 'space-between'
  },
  '& #menuIcon': {
    mr: 2,
  },
  '& #filterIcon': { 
    zIndex: (theme) => theme.zIndex.drawer + 10000,
    cursor: 'pointer',
    '& .MuiSvgIcon-root': {
    },
  },
  '& #drawerContainer': {
    flexShrink: 0,
    '& .MuiDrawer-paper': {
      width: '90%',
      boxSizing: 'border-box',
    },
    '& #closeIcon': {
      position: 'absolute',
      top: '0%',
      left: '90%'
    },
  }
});

const smallLoggedDrawerBar__lgBox = () => ({
  display: 'flex',
  '& #appBar': {
    position: 'fixed',
  },
  '& #toolBar': {
    display: 'flex',
    justifyContent: 'space-between'
  },
  '& #menuIcon': {
    mr: 2,
  },
  '& #filterIcon': { 
    zIndex: (theme) => theme.zIndex.drawer + 10000,
    cursor: 'pointer',
    '& .MuiSvgIcon-root': {
    },
  },
  '& #drawerContainer': {
    flexShrink: 0,
    '& .MuiDrawer-paper': {
      width: '90%',
      boxSizing: 'border-box',
    },
    '& #closeIcon': {
      position: 'absolute',
      top: '0%',
      left: '90%'
    },
  }
});

const smallLoggedDrawerBar__mdBox = () => ({
  display: 'flex',
  '& #appBar': {
    position: 'fixed',
  },
  '& #toolBar': {
    display: 'flex',
    justifyContent: 'space-between'
  },
  '& #menuIcon': {
    mr: 2,
  },
  '& #filterIcon': { 
    zIndex: (theme) => theme.zIndex.drawer + 10000,
    cursor: 'pointer',
    '& .MuiSvgIcon-root': {
    },
  },
  '& #drawerContainer': {
    flexShrink: 0,
    '& .MuiDrawer-paper': {
      width: '90%',
      boxSizing: 'border-box',
    },
    '& #closeIcon': {
      position: 'absolute',
      top: '0%',
      left: '90%'
    },
  }
});

const smallLoggedDrawerBar__smBox = () => ({
  display: 'flex',
  '& #appBar': {
    position: 'fixed',
  },
  '& #toolBar': {
    display: 'flex',
    justifyContent: 'space-between'
  },
  '& #menuIcon': {
    mr: 2,
  },
  '& #filterIcon': { 
    zIndex: (theme) => theme.zIndex.drawer + 10000,
    cursor: 'pointer',
    '& .MuiSvgIcon-root': {
    },
  },
  '& #drawerContainer': {
    flexShrink: 0,
    '& .MuiDrawer-paper': {
      width: '90%',
      boxSizing: 'border-box',
    },
    '& #closeIcon': {
      position: 'absolute',
      top: '0%',
      left: '90%'
    },
  }
});


export const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  backgroundColor: '#154360',
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
}));

export const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  marginRight: 0,
  width: '100%',
  [theme.breakpoints.up('lg')]: {
    marginLeft: theme.spacing('5%'),
    width: 'auto',
  },
  [theme.breakpoints.down('lg')]: {
    marginLeft: theme.spacing('12.5%'),
    width: 'auto',
  },
  [theme.breakpoints.between('sm', 'md')]: {
    marginLeft: theme.spacing('12.5%'),
    width: 'auto',
  },
  [theme.breakpoints.down('sm')]: {
    marginLeft: theme.spacing('0%'),
    width: '100%',
  },
}));

export const SearchIconWrapper = styled('div')(({ theme }) => ({
  height: '100%',
  position: 'absolute',
  // pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
}));

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('lg')]: {
      width: '42.5vw',
      '&:focus': {
        width: '45vw',
      },
    },
    [theme.breakpoints.between('sm', 'lg')]: {
      width: '28vw',
      '&:focus': {
        width: '28.5vw',
      },
    },
    [theme.breakpoints.down('md')]: {
      width: '40vw',
    },
  }
}));



