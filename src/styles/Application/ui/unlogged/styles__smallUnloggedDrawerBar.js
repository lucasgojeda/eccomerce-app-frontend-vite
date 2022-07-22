import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import MuiAppBar from '@mui/material/AppBar';

export const styles__smallUnloggedDrawerBar = (sm, md, lg, xl) => {
  switch (true) {

    case sm:
      return smallUnloggedDrawerBar__smBox();

    case md:
      return smallUnloggedDrawerBar__mdBox();

    case lg:
      return smallUnloggedDrawerBar__lgBox();

    case xl:
      return smallUnloggedDrawerBar__xlBox();

    default:
      break;
  }
}


const smallUnloggedDrawerBar__xlBox = () => ({
  display: 'flex',
  '& #appBar': {
    position: 'fixed'
  },
  '& #menuIconButton': {
    mr: 2,
  },
  '& #drawerContainer': {
    flexShrink: 0,
    '& .MuiDrawer-paper': {
      width: '90%',
      boxSizing: 'border-box',
    },
  },
  '& #closeIconButton': {
    position: 'absolute',
    top: '0%',
    left: '90%'
  }
});

const smallUnloggedDrawerBar__lgBox = () => ({
  display: 'flex',
  '& #appBar': {
    position: 'fixed'
  },
  '& #menuIconButton': {
    mr: 2,
  },
  '& #drawerContainer': {
    flexShrink: 0,
    '& .MuiDrawer-paper': {
      width: '90%',
      boxSizing: 'border-box',
    },
  },
  '& #closeIconButton': {
    position: 'absolute',
    top: '0%',
    left: '90%'
  }
});

const smallUnloggedDrawerBar__mdBox = () => ({
  display: 'flex',
  '& #appBar': {
    position: 'fixed'
  },
  '& #menuIconButton': {
    mr: 2,
  },
  '& #drawerContainer': {
    flexShrink: 0,
    '& .MuiDrawer-paper': {
      width: '90%',
      boxSizing: 'border-box',
    },
  },
  '& #closeIconButton': {
    position: 'absolute',
    top: '0%',
    left: '90%'
  }
});

const smallUnloggedDrawerBar__smBox = () => ({
  display: 'flex',
  '& #appBar': {
    position: 'fixed'
  },
  '& #menuIconButton': {
    mr: 2,
  },
  '& #drawerContainer': {
    flexShrink: 0,
    '& .MuiDrawer-paper': {
      width: '90%',
      boxSizing: 'border-box',
    },
  },
  '& #closeIconButton': {
    position: 'absolute',
    top: '0%',
    left: '90%'
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
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
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