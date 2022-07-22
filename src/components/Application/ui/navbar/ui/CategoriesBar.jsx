import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Box, Container } from '@mui/material'; 
import IconButton from '@mui/material/IconButton';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';


import { styles__categoriesBar } from '../../../../../styles/Application/ui/ui/styles__categoriesBar';
import { startLoadProducts } from '../../../../../actions/products';

export const CategoriesBar = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { categories } = useSelector(state => state.categories);

    const [anchorCategoriesMenu, setAnchorCategoriesMenu] = useState(null);

    const theme = useTheme();
    const sm = useMediaQuery(theme.breakpoints.down('sm'));
    const md = useMediaQuery(theme.breakpoints.down('md'));
    const xl = useMediaQuery(theme.breakpoints.down('xl'));
    const lg = useMediaQuery(theme.breakpoints.down('lg'));

    // Categories menu
    const handleCategoriesMenu = (event) => {
        setAnchorCategoriesMenu(event.currentTarget);
    };

    const handleCloseCategoriesMenu = () => {
        setAnchorCategoriesMenu(null);
    };

    const handleCategory = (e, { categorySelected }) => {
        e.preventDefault();

        navigate(`/?c=${categorySelected.name}&page=1`);

        dispatch(startLoadProducts(categorySelected.name));

    }

    return (
        <Box sx={styles__categoriesBar(sm, md, lg, xl)}>
            {
                (categories !== undefined)
                &&
                <AppBar id='appBar'>
                    <Toolbar id='toolBar'>

                        {
                            (categories.length >= 3)
                            &&
                            <div
                            >
                                <Menu
                                    anchorEl={anchorCategoriesMenu}
                                    anchorOrigin={{
                                        vertical: 'bottom',
                                        horizontal: 'left',
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'left',
                                    }}
                                    open={Boolean(anchorCategoriesMenu)}
                                    onClose={handleCloseCategoriesMenu}
                                >
                                    {
                                        (categories.length > 3)
                                        &&
                                        categories.map(
                                            (event, index) =>
                                                (index > ((!md) ? 3 : 2))
                                                &&
                                                <MenuItem
                                                    key={event._id}
                                                    onClick={(e) => {
                                                        handleCloseCategoriesMenu();
                                                        handleCategory(e, { categorySelected: event });
                                                    }}
                                                >
                                                    {event.name.charAt(0).toUpperCase() + event.name.slice(1)}
                                                </MenuItem>
                                        )
                                    }
                                </Menu>

                                <IconButton
                                    size="large"
                                    edge="start"
                                    color="inherit"
                                    aria-label="menu"
                                    onClick={handleCategoriesMenu}
                                >
                                    <FormatListBulletedIcon />
                                </IconButton>
                            </div>
                        }

                        {
                            categories.map(
                                (event, index) =>
                                    (index <= ((!md) ? 3 : 2))
                                    &&
                                    <div
                                        key={event._id}
                                        id='categoriesContainer'
                                        onClick={(e) => handleCategory(e, { categorySelected: event })}
                                    >
                                        <Typography id='name'>
                                            {event.name.charAt(0).toUpperCase() + event.name.slice(1)}
                                        </Typography>
                                    </div>

                            )
                        }



                    </Toolbar>
                </AppBar>
            }
        </Box>
    );
};