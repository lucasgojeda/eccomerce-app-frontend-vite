
export const styles__categoriesBar = (sm, md, lg, xl) => {
  switch (true) {

    case sm:
      return categoriesBar__smBox();

    case md:
      return categoriesBar__mdBox();

    case lg:
      return categoriesBar__lgBox();

    case xl:
      return categoriesBar__xlBox();

    default:
      break;
  }
}


const categoriesBar__xlBox = () => ({
  '& #appBar': {
    position: 'fixed',
    top: '10vh',
    width: '100%',
    height: '50px',
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: '#21618C ',
    '& #categoriesContainer': {
      position: 'relative',
      display: 'flex',
      padding: '1% 2.5%',
      margin: 'auto',
      marginRight: '5%',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: '#1B4F72',
        transition: 'all 0.5s ease'
      }
    }
  },
  '& #toolBar': {
    position: 'relative',
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  '& #name': {
    display: 'flex',
    justifySelf: 'center',
    color: '#fff',
    boderRight: '1px solid #000',
    margin: 'auto',
  }
});

const categoriesBar__lgBox = () => ({
  '& #appBar': {
    position: 'fixed',
    top: '10vh',
    width: '100%',
    height: '50px',
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: '#21618C ',
    '& #categoriesContainer': {
      position: 'relative',
      display: 'flex',
      padding: '1% 2.5%',
      margin: 'auto',
      marginRight: '5%',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: '#1B4F72',
        transition: 'all 0.5s ease'
      }
    }
  },
  '& #toolBar': {
    position: 'relative',
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  '& #name': {
    display: 'flex',
    justifySelf: 'center',
    color: '#fff',
    boderRight: '1px solid #000',
    margin: 'auto',
  }
});

const categoriesBar__mdBox = () => ({
  '& #appBar': {
    position: 'fixed',
    top: '10vh',
    width: '100%',
    height: '50px',
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: '#21618C ',
    '& #categoriesContainer': {
      position: 'relative',
      display: 'flex',
      padding: '1% 2.5%',
      margin: 'auto',
      marginRight: '5%',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: '#1B4F72',
        transition: 'all 0.5s ease'
      }
    }
  },
  '& #toolBar': {
    position: 'relative',
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  '& #name': {
    display: 'flex',
    justifySelf: 'center',
    color: '#fff',
    boderRight: '1px solid #000',
    margin: 'auto',
  }
});

const categoriesBar__smBox = () => ({
  '& #appBar': {
    position: 'fixed',
    top: '10vh',
    width: '100%',
    height: '50px',
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: '#21618C ',
    '& #categoriesContainer': {
      position: 'relative',
      display: 'flex',
      padding: '1% 2.5%',
      margin: 'auto',
      marginRight: '5%',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: '#1B4F72',
        transition: 'all 0.5s ease'
      }
    }
  },
  '& #toolBar': {
    position: 'relative',
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  '& #name': {
    display: 'flex',
    justifySelf: 'center',
    color: '#fff',
    boderRight: '1px solid #000',
    margin: 'auto',
  }
});



