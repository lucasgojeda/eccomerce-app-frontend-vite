
export const styles__productTabNav = (sm, md, lg, xl) => {
  switch (true) {

    case sm:
      return productTabNav__smBox();

    case md:
      return productTabNav__mdBox();

    case lg:
      return productTabNav__lgBox();

    case xl:
      return productTabNav__xlBox();

    default:
      break;
  }
}


const productTabNav__xlBox = () => ({
  width: '100%',
  marginBottom: '2.5vh',
});

const productTabNav__lgBox = () => ({
  width: '100%',
  marginBottom: '2.5vh',
});

const productTabNav__mdBox = () => ({
  width: '100%',
  marginBottom: '2.5vh',
});

const productTabNav__smBox = () => ({
  width: '100%',
  marginBottom: '2.5vh',
});



