

export const styles__productModalView = (sm, md, lg, xl) => {
    switch (true) {

        case sm:
            return productModalView__smBox();

        case md:
            return productModalView__mdBox();

        case lg:
            return productModalView__lgBox();

        case xl:
            return productModalView__xlBox();

        default:
            break;
    }
}


const productModalView__xlBox = () => ({
    position: 'absolute',
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.95)',
    zIndex: 10000,
    '& #buttonIcon': {
        position: 'absolute',
        padding: '2.5px',
        top: '1%',
        right: '0%',
        display: 'flex',
        alignItems: 'center',
        height: 'auto',
        ':hover': {
            backgroundColor: 'rgba(333, 333, 333, 0.1)',
        }
    },
    '& #closeIcon': {
        color: '#fff',
        fontSize: '30px',
        padding: '10px',
        ':hover': {
            borderRadius: '30px',
        }
    },
    '& #imagesIndexContainer': {
        position: 'absolute',
        left: '2%',
        top: '3%',
        width: '25%',
    },
    '& #imagesIndex': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        color: '#000',
        fontSize: '24px',
        width: '10vh',
        height: '5vh',
        borderRadius: '20px',
        zIndex: 100,
    },
    '& #productImageContainer': {
        position: 'absolute',
        top: '25%',
        left: 0,
        width: '100%',
        height: '50ch',
        margin: 'auto',
        mb: 12.5,
    },
    '& #productImage': {
        width: '100%',
        display: 'flex',
        alignItems: 'start',
        height: '45ch',
        objectFit: 'contain',
        img: {
            width: '100%',
            height: 'auto',
        }
    },
    '& #arrowButtonsContainer': {
        position: 'absolute',
        height: 'auto',
        left: 0,
        top: '45%',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    '& #arrowLeftIconButton': {
        ':hover': {
            backgroundColor: 'rgba(333, 333, 333, 0.1)',
        },
        marginLeft: '15%',
        '& .MuiSvgIcon-root': {
            color: '#fff',
            fontSize: '55px',
        }
        
    },
    '& #arrowRightIconButton': {
        ':hover': {
            backgroundColor: 'rgba(333, 333, 333, 0.1)',
        },
        marginRight: '15%',
        '& .MuiSvgIcon-root': {
            color: '#fff',
            fontSize: '55px',
        }
        
    },
});

const productModalView__lgBox = () => ({
    position: 'absolute',
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.95)',
    zIndex: 10000,
    '& #buttonIcon': {
        position: 'absolute',
        padding: '2.5px',
        top: '1%',
        right: '1%',
        display: 'flex',
        alignItems: 'center',
        height: 'auto',
        ':hover': {
            backgroundColor: 'rgba(333, 333, 333, 0.1)',
        }
    },
    '& #closeIcon': {
        color: '#fff',
        fontSize: '30px',
        padding: '10px',
        ':hover': {
            borderRadius: '30px',
        }
    },
    '& #imagesIndexContainer': {
        position: 'absolute',
        left: '2%',
        top: '3%',
        width: '25%',
    },
    '& #imagesIndex': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        color: '#000',
        fontSize: '24px',
        width: '10vh',
        height: '5vh',
        borderRadius: '20px',
        zIndex: 100,
    },
    '& #productImageContainer': {
        position: 'absolute',
        top: '25%',
        left: 0,
        width: '100%',
        height: '50ch',
        margin: 'auto',
        mb: 12.5,
    },
    '& #productImage': {
        width: '100%',
        display: 'flex',
        alignItems: 'start',
        height: '45ch',
        objectFit: 'contain',
        img: {
            width: '100%',
            height: 'auto',
        }
    },
    '& #arrowButtonsContainer': {
        position: 'absolute',
        height: 'auto',
        left: 0,
        top: '45%',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    '& #arrowLeftIconButton': {
        ':hover': {
            backgroundColor: 'rgba(333, 333, 333, 0.1)',
        },
        marginLeft: '2.5%',
        '& .MuiSvgIcon-root': {
            color: '#fff',
            fontSize: '55px',
        }
        
    },
    '& #arrowRightIconButton': {
        ':hover': {
            backgroundColor: 'rgba(333, 333, 333, 0.1)',
        },
        marginRight: '2.5%',
        '& .MuiSvgIcon-root': {
            color: '#fff',
            fontSize: '55px',
        }
        
    },
});

const productModalView__mdBox = () => ({
    position: 'absolute',
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.95)',
    zIndex: 10000,
    '& #buttonIcon': {
        position: 'absolute',
        padding: '2.5px',
        top: '1%',
        right: '1%',
        display: 'flex',
        alignItems: 'center',
        height: 'auto',
        ':hover': {
            backgroundColor: 'rgba(333, 333, 333, 0.1)',
        }
    },
    '& #closeIcon': {
        color: '#fff',
        fontSize: '30px',
        padding: '10px',
        ':hover': {
            borderRadius: '30px',
        }
    },
    '& #imagesIndexContainer': {
        position: 'absolute',
        left: '2%',
        top: '3%',
        width: '25%',
    },
    '& #imagesIndex': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        color: '#000',
        fontSize: '24px',
        width: '10vh',
        height: '5vh',
        borderRadius: '20px',
        zIndex: 100,
    },
    '& #productImageContainer': {
        position: 'absolute',
        top: '25%',
        left: 0,
        width: '100%',
        height: '50ch',
        margin: 'auto',
        mb: 12.5,
    },
    '& #productImage': {
        width: '100%',
        display: 'flex',
        alignItems: 'start',
        height: '45ch',
        objectFit: 'contain',
        img: {
            width: '100%',
            height: 'auto',
        }
    },
    '& #arrowButtonsContainer': {
        position: 'absolute',
        height: 'auto',
        left: 0,
        top: '45%',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    '& #arrowLeftIconButton': {
        ':hover': {
            backgroundColor: 'rgba(333, 333, 333, 0.1)',
        },
        '& .MuiSvgIcon-root': {
            color: '#fff',
            fontSize: '55px',
        }
        
    },
    '& #arrowRightIconButton': {
        ':hover': {
            backgroundColor: 'rgba(333, 333, 333, 0.1)',
        },
        '& .MuiSvgIcon-root': {
            color: '#fff',
            fontSize: '55px',
        }
        
    },
});

const productModalView__smBox = () => ({
    position: 'absolute',
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.95)',
    zIndex: 10000,
    '& #buttonIcon': {
        position: 'absolute',
        padding: '2.5px',
        top: '1%',
        right: '1%',
        display: 'flex',
        alignItems: 'center',
        height: 'auto',
        ':hover': {
            backgroundColor: 'rgba(333, 333, 333, 0.1)',
        }
    },
    '& #closeIcon': {
        color: '#fff',
        fontSize: '40px',
        padding: '10px',
        ':hover': {
            borderRadius: '30px',
        }
    },
    '& #imagesIndexContainer': {
        position: 'absolute',
        left: '2%',
        top: '3%',
        width: '25%',
    },
    '& #imagesIndex': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        color: '#000',
        fontSize: '24px',
        width: '10vh',
        height: '5vh',
        borderRadius: '20px',
        zIndex: 100,
    },
    '& #productImageContainer': {
        position: 'absolute',
        top: '25%',
        left: 0,
        width: '100%',
        height: '50ch',
        margin: 'auto',
        mb: 12.5,
    },
    '& #productImage': {
        width: '100%',
        display: 'flex',
        alignItems: 'start',
        height: '45ch',
        objectFit: 'contain',
        img: {
            width: '100%',
            height: 'auto',
        }
    },
    '& #arrowButtonsContainer': {
        position: 'absolute',
        height: 'auto',
        left: 0,
        top: '85%',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    '& #arrowLeftIconButton': {
        ':hover': {
            backgroundColor: 'rgba(333, 333, 333, 0.1)',
        },
        '& .MuiSvgIcon-root': {
            color: '#fff',
            fontSize: '70px',
        }
        
    },
    '& #arrowRightIconButton': {
        ':hover': {
            backgroundColor: 'rgba(333, 333, 333, 0.1)',
        },
        '& .MuiSvgIcon-root': {
            color: '#fff',
            fontSize: '70px',
        }
        
    },
});



