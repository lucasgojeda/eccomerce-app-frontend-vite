
export const styles__largueLoggedBar = (sm, md, lg, xl) => {
  switch (true) {

    case sm:
      return largueLoggedBar__smBox();

    case md:
      return largueLoggedBar__mdBox();

    case lg:
      return largueLoggedBar__lgBox();

    case xl:
      return largueLoggedBar__xlBox();

    default:
      break;
  }
}


const largueLoggedBar__xlBox = () => ({
  width: '100%',
  margin: 0,
  padding: 0,
  overflow: 'hidden',
  '& #appBar': {
    position: 'fixed',
    width: '100%',
    height: '10vh',
    margin: 0,
    padding: 0,
    backgroundColor: '#154360'
  },
  '& #toolBar': {
    display: 'flex',
    justifyContent: 'space-between'
  },
  '& #buttonHome': {
    marginRight: '36px',
  },
  '& #dashboardTypography': {
    cursor: 'pointer',
    minWidth: '13%'
  },
  '& #dashboardIcon': {
    cursor: 'pointer',
  },
  '& #accountCircleIcon': {
    ml: 1
  },
  '& #nameTypography': {
    textAlign: 'end',
    minWidth: '10%'
  },
});

const largueLoggedBar__lgBox = () => ({
  width: '100%',
  margin: 0,
  padding: 0,
  overflow: 'hidden',
  '& #appBar': {
    position: 'fixed',
    width: '100%',
    height: '10vh',
    margin: 0,
    padding: 0,
    backgroundColor: '#154360'
  },
  '& #toolBar': {
    display: 'flex',
    justifyContent: 'space-between'
  },
  '& #buttonHome': {
    marginRight: '36px',
  },
  '& #dashboardTypography': {
    cursor: 'pointer',
    minWidth: '13%'
  },
  '& #dashboardIcon': {
    cursor: 'pointer',
  },
  '& #accountCircleIcon': {
    ml: 1
  },
  '& #nameTypography': {
    textAlign: 'end',
    minWidth: '10%'
  },
});

const largueLoggedBar__mdBox = () => ({
  width: '100%',
  margin: 0,
  padding: 0,
  overflow: 'hidden',
  '& #appBar': {
    position: 'fixed',
    width: '100%',
    height: '10vh',
    margin: 0,
    padding: 0,
    backgroundColor: '#154360'
  },
  '& #toolBar': {
    display: 'flex',
    justifyContent: 'space-between'
  },
  '& #buttonHome': {
    marginRight: '36px',
  },
  '& #dashboardTypography': {
    cursor: 'pointer',
    minWidth: '13%'
  },
  '& #dashboardIcon': {
    cursor: 'pointer',
  },
  '& #accountCircleIcon': {
    ml: 1
  },
  '& #nameTypography': {
    textAlign: 'end',
    minWidth: '10%'
  },
});

const largueLoggedBar__smBox = () => ({
  width: '100%',
  margin: 0,
  padding: 0,
  overflow: 'hidden',
  '& #appBar': {
    position: 'fixed',
    width: '100%',
    height: '10vh',
    margin: 0,
    padding: 0,
    backgroundColor: '#154360'
  },
  '& #toolBar': {
    display: 'flex',
    justifyContent: 'space-between'
  },
  '& #buttonHome': {
    marginRight: '36px',
  },
  '& #dashboardTypography': {
    cursor: 'pointer',
    minWidth: '13%'
  },
  '& #dashboardIcon': {
    cursor: 'pointer',
  },
  '& #accountCircleIcon': {
    ml: 1
  },
  '& #nameTypography': {
    textAlign: 'end',
    minWidth: '10%'
  },
});