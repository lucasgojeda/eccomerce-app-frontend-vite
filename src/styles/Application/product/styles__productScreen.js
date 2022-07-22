

export const styles__productScreen = (sm, md, lg, xl, cartProducts, id, role) => {
    switch (true) {

        case sm:
            return productScreen__smBox(cartProducts, id, role);

        case md:
            return productScreen__mdBox(cartProducts, id, role);

        case lg:
            return productScreen__lgBox(cartProducts, id, role);

        case xl:
            return productScreen__xlBox(cartProducts, id, role);

        default:
            break;
    }
}


const productScreen__xlBox = (cartProducts, id, role) => ({
    backgroundColor: '#fff',
    borderRadius: '5px',
    marginTop: '20vh',
    '& #imagesContainer': {
        width: '100%',
        height: '50ch',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginTop: '2.5vh',
        marginBottom: '2.5vh',
    },
    '& #productImageContainer': {
        maxWidth: '60%',
        maxHeight: '45ch',
        margin: 'auto',
    },
    '& #productImage': {
        width: '45ch',
        height: '45ch',
        objectFit: 'contain',
        marginLeft: '8%',
        cursor: 'pointer',
        img: {
            width: '45ch',
            height: '45ch',
        }
    },
    '& #containerProductImagesToShow': {
        display: 'flex',
        flexWrap: 'wrap',
        maxWidth: '10%',
        maxHeight: '50ch',
        marginLeft: '7.5vh',
        marginTop: '5vh',
    },
    '& #productImagesToShow': {
        display: 'block',
        maxWidth: '10ch',
        maxHeight: '8ch',
        margin: 'auto',
    },
    '& #descriptionContainerNextToImage': {
        position: 'relative',
        top: '5%',
        display: 'block',
        backgroundColor: '#fff',
        borderRadius: '5px',
        width: '25%',
        height: '45ch',
        maxHeight: '45ch',
        padding: '2.5ch',
        overflow: 'hidden',
        margin: 'auto',
        objectFit: 'cover',
        overflowY: 'scroll',
    },
    '& #descriptionNextToImage': {
        margin: 'auto',
        width: 'auto',
        padding: '0%',
        marginBottom: '1vh',
        fontSize: '16px',
    },
    '& #descriptionContainer': {
        display: 'block',
        backgroundColor: '#fff',
        borderRadius: '5px',
        width: '100%',
        minHeight: '10ch',
        overflow: 'hidden',
        margin: 'auto',
        marginBottom: '2.5vh',
        objectFit: 'cover',
        overflow: 'contained',
    },
    '& #description': {
        margin: 'auto',
        width: 'auto',
        marginTop: '2.5vh',
        marginBottom: '2.5vh',
        padding: '2.5%',
        fontSize: '16px',
    },
    '& #name': {
        backgroundColor: '#fff',
        marginTop: '2.5vh',
        marginBottom: '2.5vh',
        padding: '0 2.5% 0 2.5%',
        borderRadius: '5px',
        fontSize: '20px',
    },
    '& #priceContainer': {
        display: 'flex',
        justifyContent: 'flex-end',
        marginTop: '2.5vh',
    },
    '& #price': {
        backgroundColor: '#F29102',
        color: '#fff',
        fontSize: '18px',
        marginTop: '-10%',
        marginRight: '-10%',
        padding: '7.5px',
        borderRadius: '10px',
    },
    '& #divider': {
        marginTop: '7.5ch'
    },
    '& #iconsContainer': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        width: '100%',
        maxHeight: '50px',
        zIndex: 100
    },
    '& #imagesIndexContainer': {
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
    '& #productMenuIcon': {
        zIndex: 100,
        '& .MuiSvgIcon-root': {
            fontSize: '27.5px',
        } 
    },
    '& #iconButtonsContainer': {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        width: '75%',
    },
    '& #menuIconDiv': {
        display: 'flex',
        alignItems: 'center',
        maxWidth: '50px',
        maxHeight: '50px',
    },
    '& #buttonsContainer': {
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        maxWidth: '50px',
        maxHeight: '50px',
        marginRight: '15%',
    },
    '& #goToCartButton': {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F29102',
        borderRadius: '10px',
        marginRight: '2.5%',
        color: '#fff',
        height: '75%',
        width: '45%',
        visibility: (cartProducts?.filter(event => event._id === id).length !== 0 && cartProducts) ? 'visible' : 'hidden',
        zIndex: 100
    },
    '& #ShoppingCartIcon': {
        position: 'absolute',
        visibility: (role) ? ( (cartProducts?.filter(event => event._id === id && cartProducts).length === 0) ? 'visible' : 'hidden' ) : 'visible',
        zIndex: 100,
        '& .MuiSvgIcon-root': {
            color: '#F29102',
        }
    },
    '& #SuccessCartIcon': {
        position: 'absolute',
        color: '#0B5345',
        visibility: (cartProducts?.filter(event => event._id === id).length !== 0 && cartProducts) ? 'visible' : 'hidden',
        zIndex: 100
    },
});

const productScreen__lgBox = (cartProducts, id, role) => ({
    backgroundColor: '#fff',
    borderRadius: '5px',
    marginTop: '20vh',
    '& #imagesContainer': {
        width: '100%',
        height: '50ch',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginTop: '2.5vh',
        marginBottom: '2.5vh',
    },
    '& #productImageContainer': {
        maxWidth: '60%',
        maxHeight: '45ch',
        margin: 'auto',
    },
    '& #productImage': {
        width: '45ch',
        height: '45ch',
        objectFit: 'contain',
        marginLeft: '8%',
        cursor: 'pointer',
        img: {
            width: '45ch',
            height: '45ch',
        }
    },
    '& #containerProductImagesToShow': {
        display: 'flex',
        flexWrap: 'wrap',
        maxWidth: '10%',
        maxHeight: '50ch',
        marginLeft: '5%',
        marginTop: '5vh',
    },
    '& #productImagesToShow': {
        display: 'block',
        maxWidth: '10ch',
        maxHeight: '8ch',
        margin: 'auto',
    },
    '& #descriptionContainerNextToImage': {
        position: 'relative',
        top: '5%',
        display: 'block',
        backgroundColor: '#fff',
        borderRadius: '5px',
        width: '25%',
        height: '45ch',
        maxHeight: '45ch',
        padding: '2.5ch',
        overflow: 'hidden',
        margin: 'auto',
        objectFit: 'cover',
        overflowY: 'scroll',
    },
    '& #descriptionNextToImage': {
        margin: 'auto',
        width: 'auto',
        padding: '0%',
        marginBottom: '1vh',
        fontSize: '16px',
    },
    '& #descriptionContainer': {
        display: 'block',
        backgroundColor: '#fff',
        borderRadius: '5px',
        width: '100%',
        minHeight: '10ch',
        overflow: 'hidden',
        margin: 'auto',
        marginBottom: '2.5vh',
        objectFit: 'cover',
        overflow: 'contained',
    },
    '& #description': {
        margin: 'auto',
        width: 'auto',
        marginTop: '2.5vh',
        marginBottom: '2.5vh',
        padding: '2.5%',
        fontSize: '16px',
    },
    '& #name': {
        backgroundColor: '#fff',
        marginTop: '2.5vh',
        marginBottom: '2.5vh',
        padding: '0 2.5% 0 2.5%',
        borderRadius: '5px',
        fontSize: '20px',
    },
    '& #priceContainer': {
        display: 'flex',
        justifyContent: 'flex-end',
        marginTop: '2.5vh',
    },
    '& #price': {
        backgroundColor: '#F29102',
        color: '#fff',
        fontSize: '18px',
        marginTop: '-10%',
        marginRight: '-10%',
        padding: '7.5px',
        borderRadius: '10px',
    },
    '& #divider': {
        marginTop: '7.5ch'
    },
    '& #iconsContainer': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        width: '100%',
        maxHeight: '50px',
        zIndex: 100
    },
    '& #imagesIndexContainer': {
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
    '& #productMenuIcon': {
        zIndex: 100,
        '& .MuiSvgIcon-root': {
            fontSize: '27.5px',
        } 
    },
    '& #iconButtonsContainer': {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        width: '75%',
    },
    '& #menuIconDiv': {
        display: 'flex',
        alignItems: 'center',
        maxWidth: '50px',
        maxHeight: '50px',
    },
    '& #buttonsContainer': {
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        maxWidth: '50px',
        maxHeight: '50px',
        marginRight: '15%',
    },
    '& #goToCartButton': {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F29102',
        borderRadius: '10px',
        marginRight: '2.5%',
        color: '#fff',
        height: '75%',
        width: '45%',
        visibility: (cartProducts?.filter(event => event._id === id).length !== 0 && cartProducts) ? 'visible' : 'hidden',
        zIndex: 100
    },
    '& #ShoppingCartIcon': {
        position: 'absolute',
        visibility: (role) ? ( (cartProducts?.filter(event => event._id === id && cartProducts).length === 0) ? 'visible' : 'hidden' ) : 'visible',
        zIndex: 100,
        '& .MuiSvgIcon-root': {
            color: '#F29102',
        }
    },
    '& #SuccessCartIcon': {
        position: 'absolute',
        color: '#0B5345',
        visibility: (cartProducts?.filter(event => event._id === id).length !== 0 && cartProducts) ? 'visible' : 'hidden',
        zIndex: 100
    },
});

const productScreen__mdBox = (cartProducts, id, role) => ({
    backgroundColor: '#fff',
    borderRadius: '5px',
    marginTop: '20vh',
    '& #imagesContainer': {
        width: '100%',
        height: '50ch',
        display: 'flex',
        flexWrap: 'wrap',
        marginTop: '2.5vh',
        marginBottom: '2.5vh',
    },
    '& #productImageContainer': {
        maxWidth: '100%',
        maxHeight: '45ch',
        margin: 'auto',
    },
    '& #productImage': {
        width: '45ch',
        height: '45ch',
        objectFit: 'contain',
        cursor: 'pointer',
        img: {
            width: '45ch',
            height: '45ch',
        }
    },
    '& #descriptionContainer': {
        display: 'block',
        backgroundColor: '#fff',
        borderRadius: '5px',
        width: '90%',
        minHeight: '10ch',
        padding: '2.5ch',
        overflow: 'hidden',
        margin: 'auto',
        marginBottom: '2.5vh',
        objectFit: 'cover',
    },
    '& #description': {
        margin: 'auto',
        width: 'auto',
        marginTop: '2.5vh',
        marginBottom: '2.5vh',
        fontSize: '16px',
    },
    '& #name': {
        backgroundColor: '#fff',
        marginTop: '2.5vh',
        marginBottom: '2.5vh',
        padding: '0 2.5% 0 2.5%',
        borderRadius: '5px',
        fontSize: '20px',
    },
    '& #priceContainer': {
        display: 'flex',
        justifyContent: 'flex-end',
        marginTop: '2.5vh',
    },
    '& #price': {
        backgroundColor: '#F29102',
        color: '#fff',
        fontSize: '18px',
        marginTop: '-10%',
        marginRight: '-10%',
        padding: '7.5px',
        borderRadius: '10px',
    },
    '& #divider': {
        marginTop: '7.5ch'
    },
    '& #iconsContainer': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        width: '100%',
        maxHeight: '50px',
        zIndex: 100
    },
    '& #imagesIndexContainer': {
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
    '& #productMenuIcon': {
        zIndex: 100,
        '& .MuiSvgIcon-root': {
            fontSize: '27.5px',
        } 
    },
    '& #iconButtonsContainer': {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        width: '75%',
    },
    '& #menuIconDiv': {
        display: 'flex',
        alignItems: 'center',
        maxWidth: '50px',
        maxHeight: '50px',
    },
    '& #buttonsContainer': {
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        maxWidth: '50px',
        maxHeight: '50px',
        marginRight: '15%',
    },
    '& #goToCartButton': {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F29102',
        borderRadius: '10px',
        marginRight: '2.5%',
        color: '#fff',
        height: '75%',
        width: '45%',
        visibility: (cartProducts?.filter(event => event._id === id).length !== 0 && cartProducts) ? 'visible' : 'hidden',
        zIndex: 100
    },
    '& #ShoppingCartIcon': {
        position: 'absolute',
        visibility: (role) ? ( (cartProducts?.filter(event => event._id === id && cartProducts).length === 0) ? 'visible' : 'hidden' ) : 'visible',
        zIndex: 100,
        '& .MuiSvgIcon-root': {
            color: '#F29102',
            fontSize: '25px',
        }
    },
    '& #SuccessCartIcon': {
        position: 'absolute',
        color: '#0B5345',
        visibility: (cartProducts?.filter(event => event._id === id).length !== 0 && cartProducts) ? 'visible' : 'hidden',
        zIndex: 100
    },
});

const productScreen__smBox = (cartProducts, id, role) => ({
    position: 'absolute',
    left: 0,
    top: 0,
    backgroundColor: '#fff',
    marginTop: '6vh',
    overflowX: 'hidden',
    '& #imagesContainer': {
        width: '100%',
        height: '50ch',
        display: 'flex',
        flexWrap: 'wrap',
        marginTop: '2.5vh',
        marginBottom: '2.5vh',
    },
    '& #productImageContainer': {
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
    '& #descriptionContainer': {
        display: 'block',
        backgroundColor: '#fff',
        borderRadius: '5px',
        width: '90%',
        minHeight: '10ch',
        padding: '1ch 2.5ch 1ch 2.5ch',
        overflow: 'hidden',
        margin: 'auto',
        marginBottom: '2.5vh',
        objectFit: 'cover',
    },
    '& #descriptionTitle': {
        margin: 'auto',
        width: 'auto',
        marginTop: '1vh',
        marginBottom: '1.5vh',
        fontWeight: 'bold',
        fontSize: '20px',
    },
    '& #description': {
        margin: 'auto',
        width: 'auto',
        padding: '0%',
        marginBottom: '1vh',
        fontSize: '20px',
    },
    '& #name': {
        backgroundColor: '#fff',
        marginTop: '2.5vh',
        marginBottom: '2.5vh',
        padding: '0 2.5% 0 2.5%',
        borderRadius: '5px',
        fontSize: '20px',
        fontWeight: 'bold',
    },
    '& #priceContainer': {
        height: '5ch',
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        marginRight: '2.5%',
    },
    '& #price': {
        backgroundColor: '#F29102',
        color: '#fff',
        fontSize: '18px',
        padding: '7.5px',
        borderRadius: '15px',
    },
    '& #divider': {
        marginTop: '7.5ch'
    },
    '& #iconsContainer': {
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        maxHeight: '50px',
        zIndex: 100
    },
    '& #imagesIndexContainer': {
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
    '& #productMenuIcon': {
        zIndex: 100,
        '& .MuiSvgIcon-root': {
            fontSize: '27.5px',
        } 
    },
    '& #iconButtonsContainer': {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        width: '75%',
    },
    '& #menuIconDiv': {
        display: 'flex',
        alignItems: 'center',
        maxWidth: '50px',
        maxHeight: '50px',
    },
    '& #buttonsContainer': {
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        maxWidth: '50px',
        maxHeight: '50px',
        marginRight: '15%',
    },
    '& #goToCartButton': {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F29102',
        borderRadius: '10px',
        marginRight: '2.5%',
        color: '#fff',
        height: '75%',
        width: '45%',
        visibility: (cartProducts?.filter(event => event._id === id).length !== 0 && cartProducts) ? 'visible' : 'hidden',
        zIndex: 100
    },
    '& #ShoppingCartIcon': {
        position: 'absolute',
        visibility: (role) ? ( (cartProducts?.filter(event => event._id === id && cartProducts).length === 0) ? 'visible' : 'hidden' ) : 'visible',
        zIndex: 100,
        '& .MuiSvgIcon-root': {
            color: '#F29102',
            fontSize: '27.5px',
        }
    },
    '& #SuccessCartIcon': {
        position: 'absolute',
        color: '#0B5345',
        visibility: (cartProducts?.filter(event => event._id === id).length !== 0 && cartProducts) ? 'visible' : 'hidden',
        zIndex: 100
    },
});



