
export const styles__cartMenu = (sm, md, lg, xl) => {
  switch (true) {

    case sm:
      return cartMenu__smBox();

    case md:
      return cartMenu__mdBox();

    case lg:
      return cartMenu__lgBox();

    case xl:
      return cartMenu__xlBox();

    default:
      break;
  }
}


const cartMenu__xlBox = () => ({
  '& #cartMenu': {
    overflowY: 'scroll',
    maxHeight: '50vh'
  },
  '& #deleteIconFromMenuCart': {
    zIndex: 100,
    visibility: 'hidden',
  },
  ':hover': {
    '& #deleteIconFromMenuCart': {
      visibility: 'visible'
    }
  },
  '& #menuItemContainer': {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    '& #productCartImage': {
      maxWidth: '5ch',
      maxHeight: '5ch',
    },
  },
  '& #goToTheCartButton': {
    backgroundColor: '#F7DC6F',
    textAlign: 'center',
    borderRadius: '5px',
    margin: '0 2.5% 0 2.5%',
    ':hover': {
      backgroundColor: '#F29102',
      color: '#fff'
    },
  },
  '& #thereIsNotAnyProduct': {
    textAlign: 'center',
  },
  '& #shoppingCartBagleIcon': {
    margin: 'auto',
    mr: 0
  }
});

const cartMenu__lgBox = () => ({
  '& #cartMenu': {
    overflowY: 'scroll',
    maxHeight: '50vh'
  },
  '& #deleteIconFromMenuCart': {
    zIndex: 100,
    visibility: 'hidden',
  },
  ':hover': {
    '& #deleteIconFromMenuCart': {
      visibility: 'visible'
    }
  },
  '& #menuItemContainer': {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    '& #productCartImage': {
      maxWidth: '5ch',
      maxHeight: '5ch',
    },
  },
  '& #goToTheCartButton': {
    backgroundColor: '#F7DC6F',
    textAlign: 'center',
    borderRadius: '5px',
    margin: '0 2.5% 0 2.5%',
    ':hover': {
      backgroundColor: '#F29102',
      color: '#fff'
    },
  },
  '& #thereIsNotAnyProduct': {
    textAlign: 'center',
  },
  '& #shoppingCartBagleIcon': {
    margin: 'auto',
    mr: 0
  }
});

const cartMenu__mdBox = () => ({
  '& #cartMenu': {
    overflowY: 'scroll',
    maxHeight: '50vh'
  },
  '& #deleteIconFromMenuCart': {
    zIndex: 100,
    visibility: 'hidden',
  },
  ':hover': {
    '& #deleteIconFromMenuCart': {
      visibility: 'visible'
    }
  },
  '& #menuItemContainer': {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    '& #productCartImage': {
      maxWidth: '5ch',
      maxHeight: '5ch',
    },
  },
  '& #goToTheCartButton': {
    backgroundColor: '#F7DC6F',
    textAlign: 'center',
    borderRadius: '5px',
    margin: '0 2.5% 0 2.5%',
    ':hover': {
      backgroundColor: '#F29102',
      color: '#fff'
    },
  },
  '& #thereIsNotAnyProduct': {
    textAlign: 'center',
  },
  '& #shoppingCartBagleIcon': {
    margin: 'auto',
    mr: 0
  }
});

const cartMenu__smBox = () => ({
  '& #cartMenu': {
    overflowY: 'scroll',
    maxHeight: '50vh'
  },
  '& #deleteIconFromMenuCart': {
    zIndex: 100,
    visibility: 'hidden',
  },
  ':hover': {
    '& #deleteIconFromMenuCart': {
      visibility: 'visible'
    }
  },
  '& #menuItemContainer': {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    '& #productCartImage': {
      maxWidth: '5ch',
      maxHeight: '5ch',
    },
  },
  '& #goToTheCartButton': {
    backgroundColor: '#F7DC6F',
    textAlign: 'center',
    borderRadius: '5px',
    margin: '0 2.5% 0 2.5%',
    ':hover': {
      backgroundColor: '#F29102',
      color: '#fff'
    },
  },
  '& #thereIsNotAnyProduct': {
    textAlign: 'center',
  },
  '& #shoppingCartBagleIcon': {
    margin: 'auto',
    mr: 0
  }
});



