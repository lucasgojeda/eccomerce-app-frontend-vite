
export const styles__cardsMainHome = (sm, md, lg, xl, conditionHover, e, i, cartProducts, role) => {
  switch (true) {

    case sm:
      return cardsMainHome__smBox(conditionHover, e, i, cartProducts, role);

    case md:
      return cardsMainHome__mdBox(conditionHover, e, i, cartProducts, role);

    case lg:
      return cardsMainHome__lgBox(conditionHover, e, i, cartProducts, role);

    case xl:
      return cardsMainHome__xlBox(conditionHover, e, i, cartProducts, role);

    default:
      break;
  }
}


const cardsMainHome__xlBox = (conditionHover, e, i, cartProducts, role) => ({
  width: '30ch',
  height: (conditionHover(i)) ? '45ch' : '40ch',
  transition: 'all 0.5s ease-out;',
  marginTop: '2.5%',
  objectFit: 'contain',
  overflow: 'cover',
  '& #imageContainer': {
    display: 'flex',
    justifyContent: 'center',
    margin: 'auto',
    width: '30ch',
    height: '30ch',
    cursor: 'pointer',
    img: {
      display: 'flex',
      width: 'auto',
      justifySelf: 'center',
      margin: 'auto',
    },
  },
  '& #productImage': {
    maxWidth: '30ch',
    maxHeight: '30ch',
    marginLeft: 0,
    marginRight: '5vh',
  },
  '& #title': {
    marginTop: '2.5%',
    visibility: (conditionHover(i)) ? 'visible' : 'hidden',
  },
  '& #price': {
    marginTop: '7.5%',
  },
  '& #iconsContainer': {
    position: 'absolute',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '30ch',
    height: '5ch',
    // visibility: 'hidden',
    zIndex: 110,
  },
  '& #iconsButtons': {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    position: 'relative',
    width: '5ch',
    height: '5ch',
  },
  '& #goToCartButton': {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F29102',
    marginRight: '2.5%',
    color: '#fff',
    borderRadius: '10px',
    height: '55%',
    width: '50%',
    visibility: (conditionHover(i))
      ?
      (cartProducts) ? ((cartProducts.filter(event => event._id === e.id).length !== 0) ? 'visible' : 'hidden') : 'hidden'
      : 'hidden',
    zIndex: 100
  },
  '& #productMenuIcon': {
    visibility: (conditionHover(i)) ? 'visible' : 'hidden',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '5ch',
    height: '5ch',
    zIndex: 100
  },
  '& #ShoppingCartIcon': {
    position: 'absolute',
    right: (role === 'USER_ROLE' || role === undefined) ? '15%' : '0%',
    visibility: (conditionHover(i))
      ?
      (cartProducts) ? ((cartProducts.filter(event => event._id === e.id).length === 0) ? 'visible' : 'hidden') : 'visible'
      :
      'hidden',
    zIndex: 100,
    '& .MuiSvgIcon-root': {
      color: '#F29102',
    }
  },
  '& #SuccessCartIcon': {
    position: 'absolute',
    right: (role === 'USER_ROLE' || role === undefined) ? '15%' : '0%',
    color: '#0B5345',
    visibility: (conditionHover(i))
      ?
      (cartProducts) ? ((cartProducts.filter(event => event._id === e.id).length !== 0) ? 'visible' : 'hidden') : 'hidden'
      : 'hidden',
    zIndex: 100
  },
  ':hover': {
    '& #title': {
      visibility: 'visible',
    },
    '& #EditIcon': {
      visibility: 'visible',
    },
    '& #productMenuIcon': {
      visibility: 'visible',
    },
    '& #ShoppingCartIcon': {
      visibility: (cartProducts) ? ((cartProducts.filter(event => event._id === e.id).length === 0) ? 'visible' : 'hidden') : 'visible',
    },
    '& #SuccessCartIcon': {
      visibility: (cartProducts) && ((cartProducts.filter(event => event._id === e.id).length !== 0) ? 'visible' : 'hidden'),
    },
    '& #goToCartButton': {
      visibility: (cartProducts) && ((cartProducts.filter(event => event._id === e.id).length !== 0) ? 'visible' : 'hidden'),
    },
    height: '45ch',
    transition: 'all 0.5s ease-out;',
  },
});

const cardsMainHome__lgBox = (conditionHover, e, i, cartProducts, role) => ({
  width: '30ch',
  height: (conditionHover(i)) ? '45ch' : '40ch',
  transition: 'all 0.5s ease-out;',
  marginTop: '2.5%',
  objectFit: 'contain',
  overflow: 'cover',
  backgroundColor: 'rgb(255, 255, 255)',
  '& #imageContainer': {
    display: 'flex',
    justifyContent: 'center',
    margin: 'auto',
    width: '30ch',
    height: '30ch',
    cursor: 'pointer',
    img: {
      display: 'flex',
      width: 'auto',
      justifySelf: 'center',
      margin: 'auto',
    },
  },
  '& #productImage': {
    maxWidth: '30ch',
    maxHeight: '30ch',
    marginLeft: 0,
    marginRight: '5vh',
  },
  '& #title': {
    marginTop: '2.5%',
    visibility: (conditionHover(i)) ? 'visible' : 'hidden',
  },
  '& #price': {
    marginTop: '7.5%',
  },
  '& #iconsContainer': {
    position: 'absolute',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '30ch',
    height: '5ch',
    // visibility: 'hidden',
    zIndex: 110,
  },
  '& #iconsButtons': {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    position: 'relative',
    width: '5ch',
    height: '5ch',
  },
  '& #goToCartButton': {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F29102',
    marginRight: '2.5%',
    color: '#fff',
    borderRadius: '10px',
    height: '55%',
    width: '50%',
    visibility: (conditionHover(i))
      ?
      (cartProducts) ? ((cartProducts.filter(event => event._id === e.id).length !== 0) ? 'visible' : 'hidden') : 'hidden'
      : 'hidden',
    zIndex: 100
  },
  '& #productMenuIcon': {
    visibility: (conditionHover(i)) ? 'visible' : 'hidden',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '5ch',
    height: '5ch',
    zIndex: 100
  },
  '& #ShoppingCartIcon': {
    position: 'absolute',
    right: (role === 'USER_ROLE' || role === undefined) ? '15%' : '0%',
    visibility: (conditionHover(i))
      ?
      (cartProducts) ? ((cartProducts.filter(event => event._id === e.id).length === 0) ? 'visible' : 'hidden') : 'visible'
      :
      'hidden',
    zIndex: 100,
    '& .MuiSvgIcon-root': {
      color: '#F29102',
    }
  },
  '& #SuccessCartIcon': {
    position: 'absolute',
    right: (role === 'USER_ROLE' || role === undefined) ? '15%' : '0%',
    color: '#0B5345',
    visibility: (conditionHover(i))
      ?
      (cartProducts) ? ((cartProducts.filter(event => event._id === e.id).length !== 0) ? 'visible' : 'hidden') : 'hidden'
      : 'hidden',
    zIndex: 100
  },
  ':hover': {
    '& #title': {
      visibility: 'visible',
    },
    '& #EditIcon': {
      visibility: 'visible',
    },
    '& #productMenuIcon': {
      visibility: 'visible',
    },
    '& #ShoppingCartIcon': {
      visibility: (cartProducts) ? ((cartProducts.filter(event => event._id === e.id).length === 0) ? 'visible' : 'hidden') : 'visible',
    },
    '& #SuccessCartIcon': {
      visibility: (cartProducts) && ((cartProducts.filter(event => event._id === e.id).length !== 0) ? 'visible' : 'hidden'),
    },
    '& #goToCartButton': {
      visibility: (cartProducts) && ((cartProducts.filter(event => event._id === e.id).length !== 0) ? 'visible' : 'hidden'),
    },
    height: '45ch',
    transition: 'all 0.5s ease-out;',
  },
});

const cardsMainHome__mdBox = (conditionHover, e, i, cartProducts, role) => ({
  width: '30ch',
  height: (conditionHover(i)) ? '45ch' : '40ch',
  transition: 'all 0.5s ease-out;',
  marginTop: '2.5%',
  objectFit: 'contain',
  overflow: 'cover',
  '& #imageContainer': {
    display: 'flex',
    justifyContent: 'center',
    margin: 'auto',
    width: '30ch',
    height: '30ch',
    cursor: 'pointer',
    img: {
      display: 'flex',
      width: 'auto',
      justifySelf: 'center',
      margin: 'auto',
    },
  },
  '& #productImage': {
    maxWidth: '30ch',
    maxHeight: '30ch',
    marginLeft: 0,
    marginRight: '5vh',
  },
  '& #title': {
    marginTop: '2.5%',
    visibility: (conditionHover(i)) ? 'visible' : 'hidden',
  },
  '& #price': {
    marginTop: '7.5%',
  },
  '& #iconsContainer': {
    position: 'absolute',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '30ch',
    height: '5ch',
    // visibility: 'hidden',
    zIndex: 110,
  },
  '& #iconsButtons': {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    position: 'relative',
    width: '5ch',
    height: '5ch',
  },
  '& #goToCartButton': {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F29102',
    marginRight: '2.5%',
    color: '#fff',
    borderRadius: '10px',
    height: '55%',
    width: '50%',
    visibility: (conditionHover(i))
      ?
      (cartProducts) ? ((cartProducts.filter(event => event._id === e.id).length !== 0) ? 'visible' : 'hidden') : 'hidden'
      : 'hidden',
    zIndex: 100
  },
  '& #productMenuIcon': {
    visibility: (conditionHover(i)) ? 'visible' : 'hidden',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '5ch',
    height: '5ch',
    zIndex: 100
  },
  '& #ShoppingCartIcon': {
    position: 'absolute',
    right: (role === 'USER_ROLE' || role === undefined) ? '15%' : '0%',
    visibility: (conditionHover(i))
      ?
      (cartProducts) ? ((cartProducts.filter(event => event._id === e.id).length === 0) ? 'visible' : 'hidden') : 'visible'
      :
      'hidden',
    zIndex: 100,
    '& .MuiSvgIcon-root': {
      color: '#F29102',
    }
  },
  '& #SuccessCartIcon': {
    position: 'absolute',
    right: (role === 'USER_ROLE' || role === undefined) ? '15%' : '0%',
    color: '#0B5345',
    visibility: (conditionHover(i))
      ?
      (cartProducts) ? ((cartProducts.filter(event => event._id === e.id).length !== 0) ? 'visible' : 'hidden') : 'hidden'
      : 'hidden',
    zIndex: 100
  },
  ':hover': {
    '& #title': {
      visibility: 'visible',
    },
    '& #EditIcon': {
      visibility: 'visible',
    },
    '& #productMenuIcon': {
      visibility: 'visible',
    },
    '& #ShoppingCartIcon': {
      visibility: (cartProducts) ? ((cartProducts.filter(event => event._id === e.id).length === 0) ? 'visible' : 'hidden') : 'visible',
    },
    '& #SuccessCartIcon': {
      visibility: (cartProducts) && ((cartProducts.filter(event => event._id === e.id).length !== 0) ? 'visible' : 'hidden'),
    },
    '& #goToCartButton': {
      visibility: (cartProducts) && ((cartProducts.filter(event => event._id === e.id).length !== 0) ? 'visible' : 'hidden'),
    },
    height: '45ch',
    transition: 'all 0.5s ease-out;',
  },
});

const cardsMainHome__smBox = (conditionHover, e, i, cartProducts, role) => ({
  width: '90%',
  height: (conditionHover(i)) ? '45ch' : '40ch',
  transition: 'all 0.5s ease-out;',
  marginTop: '5%',
  objectFit: 'contain',
  overflow: 'cover',
  '& #imageContainer': {
    display: 'flex',
    justifyContent: 'center',
    margin: 'auto',
    width: '100%',
    height: '30ch',
    cursor: 'pointer',
    img: {
      display: 'flex',
      width: 'auto',
      justifySelf: 'center',
      margin: 'auto',
    },
  },
  '& #productImage': {
    maxWidth: '80%',
    maxHeight: '30ch',
    marginLeft: 0,
    marginRight: '5vh',
  },
  '& #title': {
    marginTop: '2.5%',
    visibility: (conditionHover(i)) ? 'visible' : 'hidden',
  },
  '& #price': {
    marginTop: '7.5%',
  },
  '& #iconsContainer': {
    position: 'absolute',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '80%',
    marginRight: '2.5%',
    height: '5ch',
    // visibility: 'hidden',
    zIndex: 110,
  },
  '& #iconsButtons': {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    position: 'relative',
    width: '5ch',
    height: '5ch',
  },
  '& #goToCartButton': {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F29102',
    marginRight: '10%',
    color: '#fff',
    borderRadius: '10px',
    height: '65%',
    width: '35%',
    visibility: (conditionHover(i))
      ?
      (cartProducts) ? ((cartProducts.filter(event => event._id === e.id).length !== 0) ? 'visible' : 'hidden') : 'hidden'
      : 'hidden',
    zIndex: 100
  },
  '& #productMenuIcon': {
    visibility: (conditionHover(i)) ? 'visible' : 'hidden',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '5ch',
    height: '5ch',
    zIndex: 100
  },
  '& #ShoppingCartIcon': {
    position: 'absolute',
    right: (role === 'USER_ROLE' || role === undefined) ? '2.5%' : '15%',
    visibility: (conditionHover(i))
      ?
      (cartProducts) ? ((cartProducts.filter(event => event._id === e.id).length === 0) ? 'visible' : 'hidden') : 'visible'
      :
      'hidden',
    zIndex: 100,
    '& .MuiSvgIcon-root': {
      color: '#F29102',
    }
  },
  '& #SuccessCartIcon': {
    position: 'absolute',
    right: (role === 'USER_ROLE' || role === undefined) ? '2.5%' : '15%',
    color: '#0B5345',
    visibility: (conditionHover(i))
      ?
      (cartProducts) ? ((cartProducts.filter(event => event._id === e.id).length !== 0) ? 'visible' : 'hidden') : 'hidden'
      : 'hidden',
    zIndex: 100
  },
});



