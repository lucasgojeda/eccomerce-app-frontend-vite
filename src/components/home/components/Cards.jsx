import React, { useState, useRef, createRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { Events, scrollSpy, animateScroll as scroll } from 'react-scroll'

import { Image } from 'cloudinary-react';

import { Button } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import EditIcon from '@mui/icons-material/Edit';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';
import Typography from '@mui/material/Typography';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

import { prepareProducts } from '../../../helpers';

import {
    useAuthStore,
    useCartStore,
    useProductsStore,
    useUiStore
} from '../../../hooks';

import { styles__cardsMainHome } from '../../../styles/Application/home/styles__cardsMainHome';


export const Cards = () => {

    const refs = useRef([createRef(),
    createRef(),
    createRef(),
    createRef(),
    createRef(),
    createRef(),
    createRef(),
    createRef()]);

    const navigate = useNavigate();

    const { uid, role } = useAuthStore();

    const {
        cart: cartProducts,
        startDeletedCart,
        startUpdatedCart,
    } = useCartStore();

    const {
        products,
        startSetActiveProduct
    } = useProductsStore();

    const {
        startUiOpenDialogDelete,
        startUiOpenProductModalEdit,
    } = useUiStore();

    const [anchorEl, setAnchorEl] = useState(null);
    const [cardRefs, setCardRefs] = useState([]);
    const [yWindow, SetyWindow] = useState(0);


    const theme = useTheme();
    const sm = useMediaQuery(theme.breakpoints.down('sm'));
    const md = useMediaQuery(theme.breakpoints.down('md'));
    const xl = useMediaQuery(theme.breakpoints.down('xl'));
    const lg = useMediaQuery(theme.breakpoints.down('lg'));


    window.onscroll = () => {

        if (sm) {

            SetyWindow(window.scrollY);
        }

    }


    const conditionHover = (i) => {

        if (sm) {
            if (
                (
                    refs.current[i].current?.getBoundingClientRect().y > -75
                    &&
                    (refs.current[i].current?.getBoundingClientRect().y + 200) < 500
                )
                || (i === 0 && yWindow === 0)
            ) {
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }

    }

    const handleAddCart = ({ cart }) => {

        if (!uid) {

            navigate('login')
        } else {

            startUpdatedCart(cart, uid);
        }

    }

    const handleDeleteCart = ({ cart }) => {

        if (!uid) {

            navigate('login')
        } else {

            startDeletedCart(cart, uid);
        }
    }


    const handleEditButton = (e) => {
        e.preventDefault();

        startUiOpenProductModalEdit();

        handleLogout();

    }

    const handleDeleteButton = (e) => {
        e.preventDefault();

        startUiOpenDialogDelete()

        handleLogout();

    }

    // Normal menu
    const handleMenu = (event, product) => {

        const productSelected = (products.filter(
            e => (e._id === product.id)
        ));

        startSetActiveProduct(productSelected[0]);

        setAnchorEl(event.currentTarget);
    };

    const handleLogout = () => {
        handleClose();
    }

    const handleClose = () => {
        setAnchorEl(null);
    };



    if (products) {

        var cleanProducts = prepareProducts(products);
    }

    return (
        <>
            {
                (products && products.length !== 0)
                    ?
                    cleanProducts[0].map((e, i) => (
                        <Card
                            key={e.id}
                            ref={refs?.current[i]}
                            sx={styles__cardsMainHome(sm, md, lg, xl, conditionHover, e, i, cartProducts, role)}
                        >
                            <div id='iconsContainer'>

                                <Button
                                    id='goToCartButton'
                                    onClick={() => navigate('/cart')}
                                >
                                    <Typography fontSize={12} variant="body2">
                                        Ir al carrito
                                    </Typography>
                                </Button>

                                <div id='iconsButtons'>
                                    <IconButton
                                        id='ShoppingCartIcon'
                                        size="large"
                                        aria-label="account of current user"
                                        aria-controls="menu-appbar"
                                        aria-haspopup="true"
                                        color="inherit"
                                        onClick={() => handleAddCart({ cart: e })}
                                    >
                                        <ShoppingCartIcon />
                                    </IconButton>

                                    <IconButton
                                        id='SuccessCartIcon'
                                        size="large"
                                        aria-label="account of current user"
                                        aria-controls="menu-appbar"
                                        aria-haspopup="true"
                                        color="inherit"
                                        onClick={() => handleDeleteCart({ cart: e })}
                                    >
                                        <DoneOutlineIcon />
                                    </IconButton>
                                </div>

                                {
                                    (role !== 'USER_ROLE' && role)
                                    &&

                                    <div id='productMenuIcon'>
                                        <IconButton
                                            size="large"
                                            aria-label="account of current user"
                                            aria-controls="menu-appbar"
                                            aria-haspopup="true"
                                            onClick={(event) => handleMenu(event, e)}
                                            color="inherit"

                                        >
                                            <MoreVertIcon />
                                        </IconButton>
                                        <Menu
                                            id="menu-appbar"
                                            anchorEl={anchorEl}
                                            anchorOrigin={{
                                                vertical: 'bottom',
                                                horizontal: 'right',
                                            }}
                                            sx={{
                                            }}
                                            transformOrigin={{
                                                vertical: 'top',
                                                horizontal: 'right',
                                            }}
                                            open={Boolean(anchorEl)}
                                            onClose={handleClose}
                                        >
                                            <MenuItem onClick={handleEditButton}>Editar</MenuItem>
                                            <MenuItem onClick={handleDeleteButton}>Eliminar</MenuItem>
                                        </Menu>
                                    </div>
                                }

                            </div>

                            <div
                                id='imageContainer'
                            >

                                {
                                    (e.img[0].imageUrl !== undefined)
                                        ?
                                        <Image
                                            id='productImage'
                                            cloudName="the-kings-company"
                                            publicId={e.img[0].imageUrl}
                                            alt='Product'
                                            onClick={() => navigate(`/product/${e.id}`)}
                                        />
                                        :
                                        <Image
                                            id='productImage'
                                            cloudName="the-kings-company"
                                            publicId={e.img[0]}
                                            onClick={() => navigate(`/product/${e.id}`)}
                                            alt='Product' />
                                }
                            </div>

                            <CardContent>
                                <Typography id='price' sx={{ fontSize: '18px' }} gutterBottom variant="h5" component="div">
                                    {`$${new Intl.NumberFormat('es-IN').format(e.price)}`}
                                </Typography>

                                <Typography id='title' variant="body2" color="text.secondary">
                                    {e.name}
                                </Typography>
                            </CardContent>
                        </Card>
                    ))
                    :
                    <Container sx={{
                        position: 'relative',
                        backgroundColor: '#fff',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '20vh',
                        width: '60vw',
                        borderRadius: '5px',
                        boxShadow: '5px 5px gray',
                        margin: 'auto',
                        marginTop: '7.5%',
                    }}>

                        <Typography fontSize={20} id='title' variant="body2" color="text.primary">
                            No se ha encontrado ningún producto
                        </Typography>

                    </Container>
            }

        </>

    );
}
