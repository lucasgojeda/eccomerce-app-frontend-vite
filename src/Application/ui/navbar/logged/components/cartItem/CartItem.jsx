import { useLocation, useNavigate } from 'react-router';

import { Box } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';

import {
    useCartStore
} from '../../../../../../hooks';


export const CartItem = () => {

    const navigate = useNavigate();
    const location = useLocation();

    const {
        cart: cartProducts,
    } = useCartStore();

    const badgeNumber = cartProducts.length;

    const handleCartMenu = () => {

        navigate(`/cart`);
    };


    return (
        <Box sx={{
            visibility: (location.pathname === '/cart') && 'hidden'
        }}>

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