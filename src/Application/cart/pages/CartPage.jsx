import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

import { Image } from 'cloudinary-react';

import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import CloseIcon from '@mui/icons-material/Close';
import { Button, ListItem, Typography } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

// import { DialogBuy } from '../../dashboard/ui/alerts/DialogBuy';

import {
    useAuthStore,
    useCartStore,
    useSalesStore
} from '../../../hooks';


export const CartPage = () => {

    const navigate = useNavigate();

    const { uid } = useAuthStore();

    const {
        cart,
        startDeletedCart,
    } = useCartStore();

    const { salesStartAddNew } = useSalesStore();


    const [totalPrice, setTotalPrice] = useState(0);
    const [dialogBuyOpen, setDialogBuyOpen] = useState(false);


    const theme = useTheme();
    const sm = useMediaQuery(theme.breakpoints.down('sm'));
    const md = useMediaQuery(theme.breakpoints.down('md'));
    const xl = useMediaQuery(theme.breakpoints.down('xl'));
    const lg = useMediaQuery(theme.breakpoints.down('lg'));

    useEffect(() => {

        window.scroll(0, 0)

        let counter = 0;

        cart.forEach(e => {
            counter = counter + parseFloat(e.price)
        });

        setTotalPrice(counter)

    }, [cart]);


    const handleDeleteCart = (e, cartProduct) => {
        e.preventDefault();

        startDeletedCart({ id: cartProduct._id, name: cartProduct.name, img: cartProduct.img }, uid);

    }

    const handleBuy = () => {

        setDialogBuyOpen(true);

    }


    return (
        <Box className='container_CartPage'>
            {/* <DialogBuy
                dialogBuyOpen={dialogBuyOpen}
                setDialogBuyOpen={setDialogBuyOpen}
                cart={cart}
            /> */}
            <Container id='productsContainer'>

                <>
                    {
                        (cart.length !== 0)
                            ?
                            <>
                                {
                                    cart.map(
                                        e =>
                                            <Box key={e._id}
                                                id='boxProducts'
                                            >


                                                <IconButton
                                                    id='deleteProductIcon'
                                                    onClick={(event) => handleDeleteCart(event, e)}
                                                >
                                                    <CloseIcon />
                                                </IconButton>

                                                <Container
                                                    id='containerProduct'
                                                    onClick={() => navigate(`/product/${e._id}`)}
                                                >

                                                    <div id='imageContainer'>
                                                        <Image
                                                            id='productCartImage'
                                                            cloudName="the-kings-company"
                                                            publicId={e.img[0].imageUrl}
                                                            alt='Product'
                                                        />
                                                    </div>

                                                    {
                                                        (!sm)
                                                        &&
                                                        <Typography id='name'>
                                                            {e.name}
                                                        </Typography>
                                                    }

                                                    <Typography id='price'>
                                                        {`$${new Intl.NumberFormat('es-IN').format(e.price)}`}
                                                    </Typography>

                                                </Container>
                                            </Box>

                                    )
                                }
                            </>
                            :
                            <Typography variant='body1'>
                                Aún no hay ningún producto en el carrito!
                            </Typography>
                    }
                </>
            </Container>

            <Container
                className='container_TotalAndButton'
                // sx={{
                //     marginTop: (sm) ? '5%' : '1.5%',

                //     display: 'flex',
                //     flexWrap: 'wrap',
                //     alignItems: 'center',
                //     width: '80%',
                //     backgroundColor: '#fff',
                //     height: '10vh',
                //     paddingRight: '2.5vw',
                //     borderRadius: '5px',
                // }}
            >


                <Container id='containerTotal'>

                    <Typography id='monto'>
                        Monto total a pagar
                    </Typography>

                    <Typography id='price'>
                        {`$${new Intl.NumberFormat('es-IN').format(totalPrice)}`}
                    </Typography>
                </Container>


            </Container>

            <Container id='containerButton'>
                <Button
                    id='button'
                    variant='contained'
                    onClick={handleBuy}
                >
                    Finalizar Compra
                </Button>
            </Container>

        </Box>
    );
};