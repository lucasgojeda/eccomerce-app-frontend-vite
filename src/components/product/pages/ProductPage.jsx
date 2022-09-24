import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import { useParams, Navigate, useNavigate } from 'react-router-dom';

import { Image } from 'cloudinary-react';

import { Button, Container, Divider, Typography } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

import {
    useAuthStore,
    useCartStore,
    useProductsStore,
    useUiStore
} from '../../../hooks';

import { Footer } from '../../ui';
import { ProductTabNav } from '../components/ProductTabNav';
import { ProductModalView } from '../components/ProductModalView';

import { styles__productScreen } from '../../../styles/Application/product/styles__productScreen';



export const ProductPage = () => {

    const { id } = useParams();
    const navigate = useNavigate();
    const location = useLocation();

    const {
        role,
        uid,
    } = useAuthStore();

    const {
        products,
        startSetActiveProduct
    } = useProductsStore();

    const {
        cart: cartProducts,
        startDeletedCart,
        startUpdatedCart,
    } = useCartStore();

    const {
        startUiOpenDialogDelete, 
        startUiOpenProductModalEdit,
    } = useUiStore();


    const theme = useTheme();
    const sm = useMediaQuery(theme.breakpoints.down('sm'));
    const md = useMediaQuery(theme.breakpoints.down('md'));
    const xl = useMediaQuery(theme.breakpoints.down('xl'));
    const lg = useMediaQuery(theme.breakpoints.down('lg'));



    const [touchStart, setTouchStart] = useState({
        touchX: 0,
        scrollY: 0
    });
    const [imageSelected, setImageSelected] = useState(null);
    const [anchorEl, setAnchorEl] = useState(null);
    const [modalViewOpen, setModalViewOpen] = useState(false);
    const [value, setValue] = useState(0);


    useEffect(() => {

        window.scroll(0, 0);
        setImageSelected(null)
    }, [location]);


    if (!products) {
        return setTimeout(() => {

        }, 500);
    }

    const product = products.filter(e => e._id === id);

    const {
        name,
        price,
        description,
        img,
        category
    } = product[0];

    const handleTouchStart = (e) => {

        setTouchStart({
            touchX: e.changedTouches[0].clientX,
            scrollY: window.scrollY
        })

    }

    const handleTouchEnd = (e) => {

        if (window.scrollY === touchStart.scrollY && touchStart.touchX !== e.changedTouches[0].clientX) {

            if (e.changedTouches[0].clientX > touchStart.touchX) {

                //ToLeft
                if (imageSelected !== null) {

                    img.forEach((image, index) => index === ((imageSelected.i <= 0) ? (img.length - 1) : (imageSelected.i - 1)) && setImageSelected({
                        i: index,
                        img: image.imageUrl
                    }));

                }
                else {

                    img.forEach((image, index) => index === (img.length - 1) && setImageSelected({
                        i: index,
                        img: image.imageUrl
                    }));
                }
            } else {

                //ToRight
                if (imageSelected !== null) {

                    img.forEach((image, index) => index === (((imageSelected.i + 1) >= img.length) ? 0 : (imageSelected.i + 1)) && setImageSelected({
                        i: index,
                        img: image.imageUrl
                    }));

                }
                else {

                    img.forEach((image, index) => index === 1 && setImageSelected({
                        i: index,
                        img: image.imageUrl
                    }));
                }
            }

        }

        if (window.scrollY === touchStart.scrollY && touchStart.touchX === e.changedTouches[0].clientX) {

            setModalViewOpen(true);
        }

    }

    const handleClickImage = () => {

        setModalViewOpen(true);
    }

    const handleEditButton = (e) => {
        e.preventDefault();

        startUiOpenProductModalEdit();

        handleLogout();
    }

    const handleDeleteButton = (e) => {
        e.preventDefault();

        startUiOpenDialogDelete();

        handleLogout();

    }

    const handleAddCart = () => {

        if (role) {
            startUpdatedCart({ id: product[0]._id, name: product[0].name, img: product[0].img }, uid);
        } else {
            navigate('/login');
        }
    }

    const handleDeleteCart = () => {

        startDeletedCart({ id: product[0]._id, name: product[0].name, img: product[0].img }, uid);
    }


    const handleImageSelected = (e, newImageSelected, i) => {
        e.preventDefault();

        setImageSelected({
            i,
            img: newImageSelected
        });
    }

    const handleReturn = () => {

        navigate(-1);
    }

    // Normal menu
    const handleMenu = (e) => {
        e.preventDefault();

        startSetActiveProduct(product[0]);

        setAnchorEl(e.currentTarget);
    };

    const handleLogout = () => {
        handleClose();
    }

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <ProductModalView
                modalViewOpen={modalViewOpen}
                imageSelected={imageSelected}
                img={img}
                setModalViewOpen={setModalViewOpen}
                handleTouchEnd={handleTouchEnd}
                handleTouchStart={handleTouchStart}
                setImageSelected={setImageSelected}
            />
            <Container>
                <Box sx={styles__productScreen(sm, md, lg, xl, cartProducts, id, role)}>


                    <div id='imagesContainer'>
                        {
                            (!md)
                            &&
                            <div
                                id='containerProductImagesToShow'
                            >
                                {
                                    img.map(
                                        (e, i) => <Container
                                            key={i}
                                            sx={{
                                                cursor: 'pointer',
                                                opacity: (!imageSelected && e.imageUrl === img[0].imageUrl) ? '25%' : ((e.imageUrl === imageSelected?.img) && '25%'),
                                            }}
                                        >

                                            <Image

                                                id='productImagesToShow'
                                                cloudName="the-kings-company"
                                                publicId={e.imageUrl}
                                                alt='Product'
                                                onMouseEnter={(event) => handleImageSelected(event, e.imageUrl, i)}
                                            />
                                        </Container>
                                    )
                                }
                            </div>
                        }

                        <div id='productImageContainer'>
                            <div id='iconsContainer'>

                                {
                                    (sm || md)
                                    &&
                                    <div id='imagesIndexContainer'>
                                        <div id='imagesIndex'>

                                            <Typography fontSize={18} variant="body2">
                                                {`${(imageSelected !== null) ? (imageSelected.i + 1) : 1} / ${img.length}`}
                                            </Typography>

                                        </div>
                                    </div>
                                }

                                <div id='iconButtonsContainer'>

                                    <Button
                                        id='goToCartButton'
                                        onClick={() => navigate('/cart')}
                                    >
                                        <Typography fontSize={12} variant="body2">
                                            Ir al carrito
                                        </Typography>
                                    </Button>

                                    <div id='buttonsContainer'>

                                        <IconButton
                                            id='ShoppingCartIcon'
                                            aria-label="account of current user"
                                            aria-controls="menu-appbar"
                                            aria-haspopup="true"
                                            color="inherit"
                                            onClick={handleAddCart}
                                        >
                                            <ShoppingCartIcon />
                                        </IconButton>

                                        <IconButton
                                            id='SuccessCartIcon'
                                            aria-label="account of current user"
                                            aria-controls="menu-appbar"
                                            aria-haspopup="true"
                                            color="inherit"
                                            onClick={handleDeleteCart}
                                        >
                                            <DoneOutlineIcon />
                                        </IconButton>
                                    </div>


                                    {
                                        (role !== 'USER_ROLE' && role)
                                        &&

                                        <div id='menuIconDiv'>
                                            <IconButton
                                                size="large"
                                                aria-label="account of current user"
                                                aria-controls="menu-appbar"
                                                aria-haspopup="true"
                                                onClick={(event) => handleMenu(event)}
                                                color="inherit"
                                                id='productMenuIcon'
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
                            </div>

                            <Image
                                id='productImage'
                                cloudName="the-kings-company"
                                publicId={(imageSelected !== null) ? imageSelected.img : img[0].imageUrl}
                                alt='Product'
                                onTouchStart={handleTouchStart}
                                onTouchEnd={handleTouchEnd}
                                onClick={handleClickImage}
                            />
                            <div id='priceContainer'>
                                <Typography id='price' gutterBottom variant="p" component="div">
                                    {`$${new Intl.NumberFormat('es-IN').format(price)}`}
                                </Typography>
                            </div>
                        </div>


                        {
                            (!md)
                            &&
                            <div id='descriptionContainerNextToImage'>

                                <Typography id='descriptionNextToImage' variant="body1" color="text.primary">
                                    {description}
                                </Typography>

                            </div>
                        }

                    </div>

                    <Divider id='divider' />

                    <Typography id='name' variant="subtitle2" color="text.primary">
                        {name}
                    </Typography>

                    <ProductTabNav
                        value={value}
                        setValue={setValue}
                    />

                    {
                        (md && value === 0)
                        &&
                        <div id='descriptionContainer'>

                            <Typography id='description' variant="body1" color="text.primary">
                                {description}
                            </Typography>

                        </div>
                    }

                    {
                        ((md && value === 1) || (!md && value === 0))
                        &&
                        <div id='descriptionContainer'>

                            <Typography id='description' variant="body1" color="text.primary">
                                Envíos sin cargo a toda la ciudad de la plata, y envíos por correo Argentino a todo el país.
                            </Typography>

                        </div>
                    }

                    {
                        ((md && value === 2) || (!md && value === 1))
                        &&
                        <div id='descriptionContainer'>

                            <Typography id='description' variant="body1" color="text.primary">
                                El cliente dispone de 14 días como maximo para devolver un producto que ha adquirido desde la fecha en la que lo haya recibido,
                                los gastos por devolucion, son cubiertas por el usuario mismo,
                                devolveremos el monto total del articulo, siempre y cuando este en perfectas condiciones, con su caja y sus otros accesorios.
                            </Typography>

                        </div>
                    }


                    {
                        (sm)
                        &&
                        <Footer />
                    }
                </Box>
            </Container>
            {
                (!sm)
                &&
                <Footer />
            }
        </>
    );
};