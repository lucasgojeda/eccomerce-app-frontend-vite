
export const styles__footer = (sm, md, lg, xl, filteredProducts, productRows) => {
  switch (true) {

    case sm:
      return footer__smBox(filteredProducts, productRows);

    case md:
      return footer__mdBox(filteredProducts, productRows);

    case lg:
      return footer__lgBox(filteredProducts, productRows);

    case xl:
      return footer__xlBox(filteredProducts, productRows);

    default:
      break;
  }
}


const footer__xlBox = (filteredProducts, productRows) => ({
  position: ((!filteredProducts || filteredProducts?.length === 0) || !productRows) ? 'absolute' : 'relative',
  bottom: 0,
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#000',
  color: '#fff',
  width: '100%',
  height: '30vh',
  zIndex: 999,
  '& #containerSocialMedias': {
    width: '120%',
    marginTop: '2.5vh',
    marginLeft: '-10%',
    display: 'flex',
    justifyContent: 'center',

    '& .MuiSvgIcon-root': {
      ':hover': {
        cursor: 'pointer',
        color: '#7B7D7D'
      }
    },
  },
  '& .MuiSvgIcon-root': {
    fontSize: '40px',
    margin: 'auto',
  },
});

const footer__lgBox = (filteredProducts, productRows) => ({
  position: ((!filteredProducts || filteredProducts?.length === 0) || !productRows) ? 'absolute' : 'relative',
  bottom: 0,
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#000',
  color: '#fff',
  width: '100%',
  height: '30vh',
  zIndex: 999,
  '& #containerSocialMedias': {
    width: '120%',
    marginTop: '2.5vh',
    marginLeft: '-10%',
    display: 'flex',
    justifyContent: 'center',

    '& .MuiSvgIcon-root': {
      ':hover': {
        cursor: 'pointer',
        color: '#7B7D7D'
      }
    },
  },
  '& .MuiSvgIcon-root': {
    fontSize: '40px',
    margin: 'auto',
  },
});

const footer__mdBox = (filteredProducts, productRows) => ({
  position: ((!filteredProducts || filteredProducts?.length === 0) || !productRows) ? 'absolute' : 'relative',
  bottom: 0,
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#000',
  color: '#fff',
  width: '100%',
  height: '30vh',
  zIndex: 999,
  '& #containerSocialMedias': {
    width: '120%',
    marginTop: '2.5vh',
    marginLeft: '-10%',
    display: 'flex',
    justifyContent: 'center',

    '& .MuiSvgIcon-root': {
      ':hover': {
        cursor: 'pointer',
        color: '#7B7D7D'
      }
    },
  },
  '& .MuiSvgIcon-root': {
    fontSize: '40px',
    margin: 'auto',
  },
});

const footer__smBox = (filteredProducts, productRows) => ({
  position: ((!filteredProducts || filteredProducts?.length === 0) || !productRows) ? 'absolute' : 'relative',
  bottom: 0,
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#000',
  color: '#fff',
  width: '100%',
  height: '30vh',
  zIndex: 999,
  '& #containerSocialMedias': {
    width: '120%',
    marginTop: '2.5vh',
    marginLeft: '-10%',
    display: 'flex',
    justifyContent: 'center',

    '& .MuiSvgIcon-root': {
      ':hover': {
        cursor: 'pointer',
        color: '#7B7D7D'
      }
    },
  },
  '& .MuiSvgIcon-root': {
    fontSize: '40px',
    margin: 'auto',
  },
});



