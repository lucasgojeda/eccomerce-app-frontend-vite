
export const styles__notificationsScreen = (sm, md, lg, xl) => {
  switch (true) {

    case sm:
      return notificationsScreen__smBox();

    case md:
      return notificationsScreen__mdBox();

    case lg:
      return notificationsScreen__lgBox();

    case xl:
      return notificationsScreen__xlBox();

    default:
      break;
  }
}


const notificationsScreen__xlBox = () => ({
  width: '65%',
  margin: 'auto',
  marginTop: '22.5vh',
  boxShadow: '0 .15rem 1.75rem 0 rgba(58,59,69,.15)',
  '& #containerHeader': {
    position: 'static',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%', 
    height: '10vh', 
    backgroundColor: '#000',
    color: '#fff',
  },
  '& #notificationsContainer': {
    backgroundColor: '#fff',
    width: '100%',
    height: '60vh',
    overflowY: 'scroll',
    padding: '0',
  },
  '& #boxNotifications': {
    display: 'flex',
    justifyContent: 'space-between',
  },
  '& #products': {
    width: '33%',
    display: 'flex',
    justifyContent: 'flex-start',
  },
  '& #price': {
    width: '33%',
    display: 'flex',
    justifyContent: 'center',
  },
  '& #date': {
    width: '33%',
    display: 'flex',
    justifyContent: 'center',
  },
  '& #containerNotification': {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '2.5%',
    marginBottom: '5%',
  },
});

const notificationsScreen__lgBox = () => ({
  width: '80%',
  margin: 'auto',
  marginTop: '22.5vh',
  boxShadow: '0 .15rem 1.75rem 0 rgba(58,59,69,.15)',
  '& #containerHeader': {
    position: 'static',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%', 
    height: '10vh', 
    backgroundColor: '#000',
    color: '#fff',
  },
  '& #notificationsContainer': {
    backgroundColor: '#fff',
    width: '100%',
    height: '60vh',
    overflowY: 'scroll',
    padding: '0',
  },
  '& #boxNotifications': {
    display: 'flex',
    justifyContent: 'space-between',
  },
  '& #products': {
    width: '33%',
    display: 'flex',
    justifyContent: 'flex-start',
  },
  '& #price': {
    width: '33%',
    display: 'flex',
    justifyContent: 'center',
  },
  '& #date': {
    width: '33%',
    display: 'flex',
    justifyContent: 'center',
  },
  '& #containerNotification': {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '2.5%',
    marginBottom: '5%',
  },
});

const notificationsScreen__mdBox = () => ({
  width: '90%',
  margin: 'auto',
  marginTop: '22.5vh',
  boxShadow: '0 .15rem 1.75rem 0 rgba(58,59,69,.15)',
  '& #containerHeader': {
    position: 'static',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%', 
    height: '10vh', 
    backgroundColor: '#000',
    color: '#fff',
  },
  '& #notificationsContainer': {
    backgroundColor: '#fff',
    width: '100%',
    height: '60vh',
    overflowY: 'scroll',
    padding: '0',
  },
  '& #boxNotifications': {
    display: 'flex',
    justifyContent: 'space-between',
  },
  '& #products': {
    width: '33%',
    display: 'flex',
    justifyContent: 'flex-start',
  },
  '& #price': {
    width: '33%',
    display: 'flex',
    justifyContent: 'center',
  },
  '& #date': {
    width: '33%',
    display: 'flex',
    justifyContent: 'center',
  },
  '& #containerNotification': {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '2.5%',
    marginBottom: '5%',
  },
});

const notificationsScreen__smBox = () => ({
  width: '100%',
  margin: 'auto',
  marginTop: '8.5vh',
  boxShadow: '0 .15rem 1.75rem 0 rgba(58,59,69,.15)',
  '& #containerHeader': {
    position: 'static',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%', 
    height: '10vh', 
    backgroundColor: '#000',
    color: '#fff',
  },
  '& #notificationsContainer': {
    backgroundColor: '#fff',
    width: '100%',
    height: '80vh',
    overflowY: 'scroll',
    padding: '0',
  },
  '& #boxNotifications': {
    display: 'flex',
    justifyContent: 'space-between',
  },
  '& #products': {
    visibility: 'hidden',
    position: 'absolute',
  },
  '& #price': {
    width: '33%',
    display: 'flex',
    justifyContent: 'center',
  },
  '& #date': {
    width: '33%',
    display: 'flex',
    justifyContent: 'center',
  },
  '& #containerNotification': {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '2.5%',
    marginBottom: '5%',
  },
});



