
export const styles__cartScreen = (sm, md, lg, xl, widthContainer) => {
  switch (true) {

    case sm:
      return cartScreen__smBox(widthContainer);

    case md:
      return cartScreen__mdBox(widthContainer);

    case lg:
      return cartScreen__lgBox(widthContainer);

    case xl:
      return cartScreen__xlBox(widthContainer);

    default:
      break;
  }
}


const cartScreen__xlBox = (widthContainer) => ({
  width: '100%',
  marginTop: '20vh',
  '& #closeIcon': {
    display: 'flex',
    justifySelf: 'flex-end'
  },
  '& #productsContainer': {
    backgroundColor: '#fff',
    width: `${widthContainer}%`,
    height: '50vh',
    overflowY: 'scroll',
    marginTop: '1.5%',
    padding: '2.5% 2.5% 2.5% 0',
    borderRadius: '5px',
  },
  '& #boxProducts': {
    display: 'flex',
    justifyContent: 'space-between',
  },
  '& #deleteProductIcon': {
    display: 'flex',
    alignItems: 'center',
    width: '5%',
    height: 'auto',
    ':hover': {
      background: 'none'
    },
    '& .MuiSvgIcon-root': {
      ':hover': {
        backgroundColor: 'rgba(0,0,0,0.03)',
        borderRadius: '30px',
        padding: '10px'
      }
    }
  },
  '& #containerProduct': {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '2.5%',
    marginBottom: '5%',
    '& #imageContainer': {
      display: 'flex',
      justifyContent: 'center',
      minWidth: '10ch',
      maxHeight: '10ch',
    },
    '& #productCartImage': {
      maxWidth: '10ch',
      maxHeight: '10ch',
    },
    '& #name': {
      display: 'flex',
      justifyContent: 'flex-start',
      marginLeft: '2.5%',
    },
    '& #price': {
      display: 'flex',
    },
    ':hover': {
      cursor: 'pointer',
      backgroundColor: 'rgba(0,0,0,0.025)',
      borderRadius: '5px'
    }
  },
  '& #containerTotal': {
    width: '95%',
    display: 'flex',
    justifyContent: 'space-between',
    borderBottom: '1px solid gray'
  },
  '& #containerButton': {
    width: `${widthContainer}%`,
    display: 'flex',
    justifyContent: 'center',
    marginTop: '2.5%',
    marginBottom: '5%',
  },
  '& #button': {
    width: '10%',
    minWidth: '200px',
    display: 'flex',
    justifySelf: 'flex-end',
    backgroundColor: '#F7DC6F',
    color: '#000',
    ':hover': {
      backgroundColor: '#F29102',
      color: '#fff',
    },
  },
});

const cartScreen__lgBox = (widthContainer) => ({
  width: '100%',
  marginTop: '20vh',
  '& #closeIcon': {
    display: 'flex',
    justifySelf: 'flex-end'
  },
  '& #productsContainer': {
    backgroundColor: '#fff',
    width: `${widthContainer}%`,
    height: '50vh',
    overflowY: 'scroll',
    marginTop: '1.5%',
    padding: '2.5% 2.5% 2.5% 0',
    borderRadius: '5px',
  },
  '& #boxProducts': {
    display: 'flex',
    justifyContent: 'space-between',
  },
  '& #deleteProductIcon': {
    display: 'flex',
    alignItems: 'center',
    width: '5%',
    height: 'auto',
    ':hover': {
      background: 'none'
    },
    '& .MuiSvgIcon-root': {
      ':hover': {
        backgroundColor: 'rgba(0,0,0,0.03)',
        borderRadius: '30px',
        padding: '10px'
      }
    }
  },
  '& #containerProduct': {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '2.5%',
    marginBottom: '5%',
    '& #imageContainer': {
      display: 'flex',
      justifyContent: 'center',
      minWidth: '10ch',
      maxHeight: '10ch',
    },
    '& #productCartImage': {
      maxWidth: '10ch',
      maxHeight: '10ch',
    },
    '& #name': {
      display: 'flex',
      justifyContent: 'flex-start',
      marginLeft: '2.5%',
    },
    '& #price': {
      display: 'flex',
    },
    ':hover': {
      cursor: 'pointer',
      backgroundColor: 'rgba(0,0,0,0.025)',
      borderRadius: '5px'
    }
  },
  '& #containerTotal': {
    width: '95%',
    display: 'flex',
    justifyContent: 'space-between',
    borderBottom: '1px solid gray'
  },
  '& #containerButton': {
    width: `${widthContainer}%`,
    display: 'flex',
    justifyContent: 'center',
    marginTop: '2.5%',
    marginBottom: '5%',
  },
  '& #button': {
    width: '10%',
    minWidth: '200px',
    display: 'flex',
    justifySelf: 'flex-end',
    backgroundColor: '#F7DC6F',
    color: '#000',
    ':hover': {
      backgroundColor: '#F29102',
      color: '#fff',
    },
  },
});

const cartScreen__mdBox = (widthContainer) => ({
  width: '100%',
  marginTop: '20vh',
  '& #closeIcon': {
    display: 'flex',
    justifySelf: 'flex-end'
  },
  '& #productsContainer': {
    backgroundColor: '#fff',
    width: `${widthContainer}%`,
    height: '50vh',
    overflowY: 'scroll',
    marginTop: '1.5%',
    padding: '2.5% 2.5% 2.5% 0',
    borderRadius: '5px',
  },
  '& #boxProducts': {
    display: 'flex',
    justifyContent: 'space-between',
  },
  '& #deleteProductIcon': {
    display: 'flex',
    alignItems: 'center',
    width: '5%',
    height: 'auto',
    ':hover': {
      background: 'none'
    },
    '& .MuiSvgIcon-root': {
      ':hover': {
        backgroundColor: 'rgba(0,0,0,0.03)',
        borderRadius: '30px',
        padding: '10px'
      }
    }
  },
  '& #containerProduct': {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '2.5%',
    marginBottom: '5%',
    '& #imageContainer': {
      display: 'flex',
      justifyContent: 'center',
      minWidth: '10ch',
      maxHeight: '10ch',
    },
    '& #productCartImage': {
      maxWidth: '10ch',
      maxHeight: '10ch',
    },
    '& #name': {
      display: 'flex',
      justifyContent: 'flex-start',
      marginLeft: '2.5%',
    },
    '& #price': {
      display: 'flex',
    },
    ':hover': {
      cursor: 'pointer',
      backgroundColor: 'rgba(0,0,0,0.025)',
      borderRadius: '5px'
    }
  },
  '& #containerTotal': {
    width: '95%',
    display: 'flex',
    justifyContent: 'space-between',
    borderBottom: '1px solid gray'
  },
  '& #containerButton': {
    width: `${widthContainer}%`,
    display: 'flex',
    justifyContent: 'center',
    marginTop: '2.5%',
    marginBottom: '5%',
  },
  '& #button': {
    width: '10%',
    minWidth: '200px',
    display: 'flex',
    justifySelf: 'flex-end',
    backgroundColor: '#F7DC6F',
    color: '#000',
    ':hover': {
      backgroundColor: '#F29102',
      color: '#fff',
    },
  },
});

const cartScreen__smBox = (widthContainer) => ({
  width: '100%',
  marginTop: '20%',
  '& #closeIcon': {
    display: 'flex',
    justifySelf: 'flex-end'
  },
  '& #productsContainer': {
    backgroundColor: '#fff',
    width: `${widthContainer}%`,
    height: '50vh',
    overflowY: 'scroll',
    marginTop: '5%',
    padding: '2.5% 2.5% 2.5% 0',
    borderRadius: '5px',
  },
  '& #boxProducts': {
    display: 'flex',
    justifyContent: 'space-between',
  },
  '& #deleteProductIcon': {
    display: 'flex',
    alignItems: 'center',
    width: '20%',
    height: 'auto',
    ':hover': {
      background: 'none'
    },
    '& .MuiSvgIcon-root': {
      ':hover': {
        backgroundColor: 'rgba(0,0,0,0.03)',
        borderRadius: '30px',
        padding: '10px'
      }
    }
  },
  '& #containerProduct': {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '2.5%',
    marginBottom: '5%',
    '& #imageContainer': {
      display: 'flex',
      justifyContent: 'center',
      minWidth: '10ch',
      maxHeight: '10ch',
    },
    '& #productCartImage': {
      maxWidth: '10ch',
      maxHeight: '10ch',
    },
    '& #name': {
      display: 'flex',
      justifyContent: 'flex-start',
      marginLeft: '2.5%',
    },
    '& #price': {
      display: 'flex',
    },
    ':hover': {
      cursor: 'pointer',
      backgroundColor: 'rgba(0,0,0,0.025)',
      borderRadius: '5px'
    }
  },
  '& #containerTotal': {
    width: '95%',
    display: 'flex',
    justifyContent: 'space-between',
    borderBottom: '1px solid gray'
  },
  '& #containerButton': {
    width: `${widthContainer}%`,
    display: 'flex',
    justifyContent: 'center',
    marginTop: '10%',
    marginBottom: '20%',
  },
  '& #button': {
    width: '10%',
    minWidth: '200px',
    display: 'flex',
    justifySelf: 'flex-end',
    backgroundColor: '#F7DC6F',
    color: '#000',
    ':hover': {
      backgroundColor: '#F29102',
      color: '#fff',
    },
  },
});



