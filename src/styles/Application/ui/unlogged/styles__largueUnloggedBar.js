
export const styles__largueUnloggedBar = (sm, md, lg, xl) => {
  switch (true) {

    case sm:
      return largueUnloggedBar__smBox();

    case md:
      return largueUnloggedBar__mdBox();

    case lg:
      return largueUnloggedBar__lgBox();

    case xl:
      return largueUnloggedBar__xlBox();

    default:
      break;
  }
}


const largueUnloggedBar__xlBox = () => ({
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
  '& #homeIconButton': {
    mr: 2
  },
  '& #menuLoginAndRegister': {
    '& .MuiSvgIcon-root': {
      mr: 1
    }
  },
});

const largueUnloggedBar__lgBox = () => ({
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
  '& #homeIconButton': {
    mr: 2
  },
  '& #menuLoginAndRegister': {
    '& .MuiSvgIcon-root': {
      mr: 1
    }
  },
});

const largueUnloggedBar__mdBox = () => ({
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
  '& #homeIconButton': {
    mr: 2
  },
  '& #menuLoginAndRegister': {
    '& .MuiSvgIcon-root': {
      mr: 1
    }
  },
});

const largueUnloggedBar__smBox = () => ({
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
  '& #homeIconButton': {
    mr: 2
  },
  '& #menuLoginAndRegister': {
    '& .MuiSvgIcon-root': {
      mr: 1
    }
  },
});
