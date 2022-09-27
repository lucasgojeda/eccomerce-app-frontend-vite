import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router';

import { Image } from 'cloudinary-react';

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import DeleteIcon from '@mui/icons-material/Delete';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { Box, Container } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import useMediaQuery from '@mui/material/useMediaQuery';
import Badge from '@mui/material/Badge';
import { useTheme } from '@mui/material/styles';

import {
    useAuthStore,
    useCartStore
} from '../../../hooks';

import './CartMenu.scss';

export const CartMenu = () => {

    const navigate = useNavigate();
    const location = useLocation();

    const { uid } = useAuthStore();

    const {
        cart: cartProducts,
        startDeletedCart
    } = useCartStore();

    const badgeNumber = cartProducts.length;

    const [anchorCartMenu, setAnchorCartMenu] = useState(null);

    const theme = useTheme();
    const sm = useMediaQuery(theme.breakpoints.down('sm'));
    const md = useMediaQuery(theme.breakpoints.down('md'));
    const xl = useMediaQuery(theme.breakpoints.down('xl'));
    const lg = useMediaQuery(theme.breakpoints.down('lg'));

    const handleDeleteCart = ({ cart }) => {

        startDeletedCart({ id: cart._id, name: cart.name, img: cart.img }, uid);
    }


    // Cart menu
    const handleCartMenu = (event) => {

        navigate(`/cart`);
    };

    const handleCloseCartMenu = () => {
        
        setAnchorCartMenu(null);
    };

    return (
        <Box sx={{
            visibility: (location.pathname === '/cart') && 'hidden'
        }}>
            <Menu
                anchorEl={anchorCartMenu}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
                open={Boolean(anchorCartMenu)}
                onClose={handleCloseCartMenu}
            >
                <Container className='cartMenu'>


                    {
                        cartProducts.map(
                            (e, i) =>
                                <MenuItem
                                    key={e._id}
                                >
                                    <Container
                                        id='menuItemContainer'
                                        onClick={() => {
                                            navigate(`/product/${e._id}`)
                                            handleCloseCartMenu()
                                        }}
                                    >
                                        <Image
                                            id='productCartImage'
                                            cloudName="the-kings-company"
                                            publicId={e.img[0].imageUrl}
                                            alt='Product' />
                                        {e.name.split(" ")[0]} {e.name.split(" ")[1]}...
                                    </Container>
                                    <IconButton
                                        id='deleteIconFromMenuCart'
                                        size="large"
                                        aria-label="account of current user"
                                        aria-controls="menu-appbar"
                                        aria-haspopup="true"
                                        onClick={() => handleDeleteCart({ cart: e })}
                                        color="inherit"
                                    >
                                        <CloseIcon />
                                    </IconButton>

                                </MenuItem>
                        )
                    }
                </Container>

                {
                    (cartProducts.length)
                        ?
                        <MenuItem
                            id='goToTheCartButton'
                            onClick={() => navigate(`/cart`)}
                        >
                            <Typography>
                                Ir al carrito

                            </Typography>
                        </MenuItem>
                        :
                        <MenuItem id='thereIsNotAnyProduct'>
                            <Typography>
                                Aún no hay ningún producto en el carrito!
                            </Typography>
                        </MenuItem>
                }
            </Menu>

            <IconButton
                size="large"
                edge="end"
                color="inherit"

                id='shoppingCartBagleIcon'
                onClick={handleCartMenu}
            >
                <Badge
                    badgeContent={badgeNumber}
                    color="warning"
                >
                    <ShoppingCartIcon sx={{
                    }} />
                </Badge>
            </IconButton>
        </Box>
    );
};