import moment from 'moment';
import 'moment-timezone';
import 'moment/locale/es';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import IconButton from '@mui/material/IconButton';

import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

import { useNotificationsStore } from '../../../hooks';

moment.locale('es');


export const NotificationsPage = () => {

    const {
        sales_user,
        notifications,
        notificationStartUpdated,
    } = useNotificationsStore();


    const handleSendedButton = (e, notification) => {
        e.preventDefault();

        notificationStartUpdated(notification);

    }

    const theme = useTheme();
    const sm = useMediaQuery(theme.breakpoints.down('sm'));
    const md = useMediaQuery(theme.breakpoints.down('md'));
    const xl = useMediaQuery(theme.breakpoints.down('xl'));
    const lg = useMediaQuery(theme.breakpoints.down('lg'));

    return (
        <Box className='container_NotificationsPage'>

            <Container id='containerHeader'>

                <Typography id='products'>
                    {'Cantidad de productos'}
                </Typography>

                <Typography id='price'>
                    {'Total a pagar'}
                </Typography>

                <Typography id='date'>
                    {'Fecha del envío'}
                </Typography>

                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    // onClick={(event) => handleSendedButton(event, e)}
                    color="inherit"
                    id='productMenuIcon'
                    sx={{
                        visibility: 'hidden'
                    }}
                >
                    <CheckBoxOutlineBlankIcon />
                </IconButton>

            </Container>

            <Container id='notificationsContainer'>

                <>
                    {
                        (sales_user?.length !== 0)
                            ?
                            <>

                                {
                                    sales_user?.map(
                                        e =>
                                            (e.date_sended)
                                            &&
                                            <div key={e._id}>
                                                {
                                                    notifications.map(
                                                        n =>
                                                            (n.sale === e._id)
                                                            &&
                                                            <Box
                                                                key={n._id}
                                                                id='boxNotifications'

                                                            >


                                                                <Container id='containerNotification'

                                                                    sx={{
                                                                        backgroundColor: (n.status) && 'rgba(555,5,5,0.25)'
                                                                    }}>

                                                                    <Typography id='products'>
                                                                        {`${e.cart?.length} produtos`}
                                                                    </Typography>

                                                                    <Typography id='price'>
                                                                        {`$${new Intl.NumberFormat('es-IN').format(e.total_price)}`}
                                                                    </Typography>

                                                                    <Typography id='date'>
                                                                        {moment(e?.date_sended).tz("America/Argentina/Buenos_Aires").format('LLL')}
                                                                    </Typography>



                                                                    {
                                                                        (n.status)
                                                                            ?
                                                                            <IconButton
                                                                                size="large"
                                                                                aria-label="account of current user"
                                                                                aria-controls="menu-appbar"
                                                                                aria-haspopup="true"
                                                                                onClick={(event) => handleSendedButton(event, n)}
                                                                                color="inherit"
                                                                                id='productMenuIcon'
                                                                            >
                                                                                <CheckBoxOutlineBlankIcon />
                                                                            </IconButton>
                                                                            :
                                                                            <IconButton
                                                                                size="large"
                                                                                aria-label="account of current user"
                                                                                aria-controls="menu-appbar"
                                                                                aria-haspopup="true"
                                                                                color="inherit"
                                                                                disabled={true}
                                                                                id='productMenuIcon'
                                                                            >
                                                                                <CheckBoxIcon />
                                                                            </IconButton>

                                                                    }

                                                                </Container>
                                                            </Box>
                                                    )
                                                }
                                            </div>
                                    )
                                }
                            </>
                            :
                            <Typography variant='body1'>
                                No hay ningúna notificación aún!
                            </Typography>
                    }
                </>
            </Container>
        </Box>
    );
};