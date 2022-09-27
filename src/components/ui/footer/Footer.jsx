import React from 'react';
import { useNavigate } from 'react-router';

import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

import { useProductsStore, useStaticsStore } from '../../../hooks';

import { styles__footer } from '../../../styles/Application/ui/styles__footer';

import './Footer.scss';


export const Footer = () => {

    const navigate = useNavigate();

    const { products } = useProductsStore();

    const { dashboardProducts } = useStaticsStore();

    const theme = useTheme();
    const sm = useMediaQuery(theme.breakpoints.down('sm'));
    const md = useMediaQuery(theme.breakpoints.down('md'));
    const xl = useMediaQuery(theme.breakpoints.down('xl'));
    const lg = useMediaQuery(theme.breakpoints.down('lg'));

    return (
        <Box sx={styles__footer(sm, md, lg, xl, products, dashboardProducts)}>
            <div>

                <Typography
                    variant='h3'
                    fontSize='30px'
                >
                    CONTACTO
                </Typography>

                <div id='containerSocialMedias'>
                    <WhatsAppIcon onClick={() => window.open('https://api.whatsapp.com/send?phone=542216106943', '_blank')} />
                    <InstagramIcon onClick={() => window.open('https://www.instagram.com/lucass_ojedaa/', '_blank')} />
                    <FacebookIcon onClick={() => window.open('https://www.facebook.com/lucas.ojeda.10888', '_blank')} />
                    <MailOutlineIcon onClick={() => window.open('https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=CllgCJZcRPPtpQFjcGrXKdKwprKrkBrdhGDBlfRQCBKCScqLFxmXrtrXjwdnPclVLzSvqKgVpLq', '_blank')} />
                </div>

            </div>
        </Box>
    );
};