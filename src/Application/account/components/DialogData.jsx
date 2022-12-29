/** Libraries */
import React from 'react';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

/** Custom hooks */
import { useAuthStore } from '../../../hooks';
import { useNavigate } from 'react-router';

export const DialogData = ({ dialogDataStatus, setDialogDataStatus, setAlertStatus }) => {

    const navigate = useNavigate();

    const { startUpdateUser, uid, role, name } = useAuthStore();


    const handleClick = () => {

        startUpdateUser({
            _id: uid,
            name,
            role,
            data: {
                state: 'Buenos Aires',
                city: 'La Plata',
                postalCode: 'B1900',
                address: 'Calle falsa 123',
                numberPhone: '+542213173888',
            },
        }, setAlertStatus);

        navigate('/');

        handleClose();
    };

    const handleClose = () => {
        setDialogDataStatus(false);
    };


    return (
        <div>
            <Dialog
                open={dialogDataStatus}
                onClose={handleClose}
                aria-labelledby="responsive-dialog-title"
            >
                <DialogTitle id="responsive-dialog-title">
                    {"User data"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        To complete your registration we need some contact information.
                        (When using a demo version you can choose to fill the data with
                        demo information automatically or do it manually)
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>
                        Manually
                    </Button>
                    <Button autoFocus onClick={handleClick}>
                        Automatically
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
