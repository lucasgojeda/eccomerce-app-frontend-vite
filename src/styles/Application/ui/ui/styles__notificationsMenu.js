
export const styles__notificationsMenu = (sm, md, lg, xl) => {
  switch (true) {

    case sm:
      return notificationsMenu__smBox();

    case md:
      return notificationsMenu__mdBox();

    case lg:
      return notificationsMenu__lgBox();

    case xl:
      return notificationsMenu__xlBox();

    default:
      break;
  }
}


const notificationsMenu__xlBox = () => ({
  '& #notificationsBagleIcon': {
    display: 'flex',
    justifySelf: 'end',
  }
});

const notificationsMenu__lgBox = () => ({
  '& #notificationsBagleIcon': {
    display: 'flex',
    justifySelf: 'end',
  }
});

const notificationsMenu__mdBox = () => ({
  '& #notificationsBagleIcon': {
    display: 'flex',
    justifySelf: 'end',
  }
});

const notificationsMenu__smBox = () => ({
  '& #notificationsBagleIcon': {
    display: 'flex',
    justifySelf: 'end',
  }
});



