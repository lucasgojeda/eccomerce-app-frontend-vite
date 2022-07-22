import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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


import { startDeletedCart } from '../../../../../actions/cart';
import { styles__cartMenu } from '../../../../../styles/Application/ui/ui/styles__cartMenu';

export const CartMenu = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    const { uid } = useSelector(state => state.auth);
    const { cart: cartProducts } = useSelector(state => state.cart);

    const badgeNumber = cartProducts.length;

    const [anchorCartMenu, setAnchorCartMenu] = useState(null);

    const theme = useTheme();
    const sm = useMediaQuery(theme.breakpoints.down('sm'));
    const md = useMediaQuery(theme.breakpoints.down('md'));
    const xl = useMediaQuery(theme.breakpoints.down('xl'));
    const lg = useMediaQuery(theme.breakpoints.down('lg'));

    const handleDeleteCart = ({ cart }) => {

        dispatch(startDeletedCart({ id: cart._id, name: cart.name, img: cart.img }, uid));
    }


    // Cart menu
    const handleCartMenu = (event) => {

        if (sm) {
            navigate(`/cart`)
        } else {

            setAnchorCartMenu(event.currentTarget);
        }
    };

    const handleCloseCartMenu = () => {
        setAnchorCartMenu(null);
    };

    return (
        <Box sx={styles__cartMenu(sm, md, lg, xl)}>
            {
                (location.pathname !== '/cart')
                &&
                <>
                    <Menu
                        anchorEl={anchorCartMenu}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        open={Boolean(anchorCartMenu)}
                        onClose={handleCloseCartMenu}
                    >
                        <Container id='cartMenu'>


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
                </>
            }
        </Box>
    );
};