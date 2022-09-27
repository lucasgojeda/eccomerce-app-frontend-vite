import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';

export const styles__home = (sm, md, lg, xl) => {
  switch (true) {

    case sm:
      return home__smBox();

    case md:
      return home__mdBox();

    case lg:
      return home__lgBox();

    case xl:
      return home__xlBox();

    default:
      break;
  }
}


const home__xlBox = () => ({
  '& #containerFilterAndSearch': {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: '22.5vh',
  },
  '& #filterContainer': {
    width: '30%',
  },
  '& #FormControl': {
    width: '25ch',
    backgroundColor: '#fff',
    '& .MuiInputBase-input': {
      height: '0.5vh',
    },
  },
  '& .MuiPagination-root': {
    margin: 'auto',
    marginBottom: '2.5%'
  },
  '& #containerSearch': {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '70%',
    height: '7.5vh',
  },
  '& #closeIcon': {
    position: 'absolute',
    top: '0%',
    left: '90%'
  },
  '& #containerCards': {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  '& #stack': {
    marginTop: '2.5%'
  },
});

const home__lgBox = () => ({
  '& #containerFilterAndSearch': {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: '22.5vh',
  },
  '& #filterContainer': {
    width: '30%',
  },
  '& #FormControl': {
    width: '25ch',
    backgroundColor: '#fff',
    '& .MuiInputBase-input': {
      height: '0.5vh',
    },
  },
  '& .MuiPagination-root': {
    margin: 'auto',
    marginBottom: '2.5%'
  },
  '& #containerSearch': {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '70%',
    height: '7.5vh',
  },
  '& #closeIcon': {
    position: 'absolute',
    top: '0%',
    left: '90%'
  },
  '& #containerCards': {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  '& #stack': {
    marginTop: '2.5%'
  },
});

const home__mdBox = () => ({
  '& #containerFilterAndSearch': {
    width: '100vw',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: '22.5vh',
  },
  '& #filterContainer': {
    width: '30%',
  },
  '& #FormControl': {
    width: '25vw',
    backgroundColor: '#fff',
    '& .MuiInputBase-input': {
      height: '0.5vh',
    },
  },
  '& .MuiPagination-root': {
    margin: 'auto',
    marginBottom: '2.5%'
  },
  '& #containerSearch': {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '70%',
    height: '7.5vh',
  },
  '& #closeIcon': {
    position: 'absolute',
    top: '0%',
    left: '87.5%'
  },
  '& #containerCards': {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  '& #stack': {
    marginTop: '2.5%'
  },
});

const home__smBox = () => ({
  '& .MuiPagination-root': {
    margin: 'auto',
    marginBottom: '2.5%'
  },
  '& #containerCards': {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    marginTop: '20%',
  },
  '& #stack': {
    marginTop: '2.5%'
  },
});


export const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: '#fff',
  marginLeft: 0,
  marginRight: 0,
  width: 'auto',
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
      width: '30vw',
      '&:focus': {
        width: '32.5vw',
      },
    },
    [theme.breakpoints.between('sm', 'lg')]: {
      width: '30vw',
      '&:focus': {
        width: '32.5vw',
      },
    },
  }
}));


