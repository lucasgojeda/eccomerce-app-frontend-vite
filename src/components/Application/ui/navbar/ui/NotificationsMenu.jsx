import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { Box, Container } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import IconButton from '@mui/material/IconButton';
import useMediaQuery from '@mui/material/useMediaQuery';
import Badge from '@mui/material/Badge';
import { useTheme } from '@mui/material/styles';

import { styles__notificationsMenu } from '../../../../../styles/Application/ui/ui/styles__notificationsMenu';


export const NotificationsMenu = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { notifications } = useSelector(state => state.notifications);

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
        <Box sx={styles__notificationsMenu(sm, md, lg, xl)}>
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