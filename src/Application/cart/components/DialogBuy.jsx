import React, { useEffect } from 'react';
import { useLocation } from 'react-router';

import queryString from "query-string";

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

import { useCartStore, useSalesStore } from '../../../hooks';



export const DialogBuy = ({ dialogBuyOpen, setDialogBuyOpen, cart }) => {

    const location = useLocation();

    const { status } = queryString.parse(location.search);

    const { salesStartAddNew } = useSalesStore();
    const { startPayment } = useCartStore();

    const theme = useTheme();
    const sm = useMediaQuery(theme.breakpoints.down('sm'));
    const md = useMediaQuery(theme.breakpoints.down('md'));
    const xl = useMediaQuery(theme.breakpoints.down('xl'));
    const lg = useMediaQuery(theme.breakpoints.down('lg'));

    useEffect(() => {
        if (status === 'approved') {
            salesStartAddNew(cart);
        }
    }, [])


    const handleBuy = () => {

        startPayment(cart);
        setDialogBuyOpen(false);
    };

    const handleClose = () => {
        setDialogBuyOpen(false);
    };


    return (
        <div>
            <Dialog
                open={dialogBuyOpen}
                onClose={handleClose}
                aria-labelledby="responsive-dialog-title"
            >
                <DialogTitle id="responsive-dialog-title">
                    {"Por favor confirme su compra"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Está a solo un paso de terminar su compra
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={handleClose}>
                        Cancelar
                    </Button>
                    <Button autoFocus onClick={handleBuy}>
                        Comprar
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
