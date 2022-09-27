import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';

import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { Box, Container } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import IconButton from '@mui/material/IconButton';
import useMediaQuery from '@mui/material/useMediaQuery';
import Badge from '@mui/material/Badge';
import { useTheme } from '@mui/material/styles';

import { styles__notificationsMenu } from '../../../styles/Application/ui/ui/styles__notificationsMenu';
import { useNotificationsStore } from '../../../hooks';

import './NotificationsMenu.scss';


export const NotificationsMenu = () => {

    const navigate = useNavigate();
    const location = useLocation();

    const { notifications } = useNotificationsStore();

    var badgeNotifications = (notifications?.filter( n => n.status))?.length;
    
    useEffect(() => {
    
        badgeNotifications = (notifications?.filter( n => n.status))?.length;
    }, [notifications]);


    const theme = useTheme();
    const sm = useMediaQuery(theme.breakpoints.down('sm'));
    const md = useMediaQuery(theme.breakpoints.down('md'));
    const xl = useMediaQuery(theme.breakpoints.down('xl'));
    const lg = useMediaQuery(theme.breakpoints.down('lg'));


    return (
        <Box sx={{
            visibility: (location.pathname === '/notifications') && 'hidden'
        }}>
            <IconButton
                id='notificationsBagleIcon'
                color="inherit"
                size="large"
                edge="end"
                onClick={() => navigate('/notifications')}
            >
                <Badge
                    // badgeContent={badgeNotifications}
                    badgeContent={badgeNotifications}
                    color="primary"
                >
                    <NotificationsIcon />
                </Badge>
            </IconButton>
        </Box>
    );
};