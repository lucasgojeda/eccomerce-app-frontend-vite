/** Libraries */
import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';

import { Tooltip } from "@mui/material";

/** Material UI - Icons */
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import NorthIcon from '@mui/icons-material/North';
import SouthIcon from '@mui/icons-material/South';

const ITEM_HEIGHT = 48;

export const FilterMenu = ({ orderBy, handleOrderBy }) => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    /** Handle orderBy functions */
    const handleMayorPrice = () => {

        handleOrderBy('desc');
        handleClose();
    }

    const handleMenorPrice = () => {

        handleOrderBy('asc');
        handleClose();
    }

    /** Material UI - Menu functions */
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <div>
            <Tooltip title="Ordenar por" arrow>
                <IconButton
                    aria-label="more"
                    aria-haspopup="true"
                    onClick={handleClick}
                >
                    {
                        (orderBy === 'asc')
                            ?
                            <SouthIcon />
                            :
                            <NorthIcon />
                    }
                    <FilterAltIcon />
                </IconButton>
            </Tooltip>
            <Menu
                id="fade-menu"
                MenuListProps={{
                    'aria-labelledby': 'fade-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                PaperProps={{
                    style: {
                        maxHeight: ITEM_HEIGHT * 4.5,
                        width: '20ch',
                    },
                }}
                TransitionComponent={Fade}
            >
                <MenuItem onClick={handleMayorPrice}>
                    Mayor precio
                </MenuItem>
                <MenuItem onClick={handleMenorPrice}>
                    Menor precio
                </MenuItem>
            </Menu>
        </div>
    )
}
