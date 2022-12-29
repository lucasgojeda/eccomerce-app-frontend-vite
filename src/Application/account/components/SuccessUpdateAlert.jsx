/** Libraries */
import * as React from 'react';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

import { styled } from "@mui/material/styles";

/** Material UI - Custom components */
const AlertContainer = styled("div")(({ theme }) => ({
    position: 'absolute',
    bottom: '5%',
    left: '5%',
    width: "55vw",
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1500,
    [theme.breakpoints.down("sm")]: {
        top: 0,
        width: "90%", 
    },
}));

export const SuccessUpdateAlert = ({ alertStatus, setAlertStatus }) => {
    return (
        <>
            {
                (alertStatus)
                &&
                <AlertContainer>
                    <Stack sx={{ width: '100%' }} spacing={2}>
                        <Alert
                            onClose={() => setAlertStatus(false)}
                        >
                            User information was successfully updated!
                        </Alert>
                    </Stack>
                </AlertContainer>
            }
        </>
    );
}
