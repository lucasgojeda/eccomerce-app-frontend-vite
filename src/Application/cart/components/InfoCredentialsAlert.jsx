/** Libraries */
import * as React from 'react';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';

import Backdrop from "@mui/material/Backdrop";

import { styled } from "@mui/material/styles";

/** Material UI - Custom components */
const AlertContainer = styled("div")(({ theme }) => ({
    position: 'absolute',
    left: '5%',
    top: '40%',
    width: '90%',
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
}));

export const InfoCredentialsAlert = ({ infoAlertStatus, setInfoAlertStatus }) => {
    return (
        <>
            {
                (infoAlertStatus)
                &&
                <Backdrop
                    sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
                    open={true}
                >
                    <AlertContainer>
                        <Stack sx={{ width: '100%' }} spacing={2}>
                            <Alert severity="info" onClose={() => setInfoAlertStatus(false)}>
                                <AlertTitle>Info</AlertTitle>
                                Para realizar una compra en modo de prueba
                                solo se pueden usar credenciales de mercado pago
                                que sean de prueba.
                                —
                                <strong> Usuario: </strong> TESTUDIDCIFB,
                                <strong> Contraseña: </strong> hExI9i0OTW
                            </Alert>
                        </Stack>
                    </AlertContainer>
                </Backdrop>
            }
        </>
    )
}
