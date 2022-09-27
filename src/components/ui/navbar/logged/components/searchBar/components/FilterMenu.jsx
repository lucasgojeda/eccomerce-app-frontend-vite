import React, { useEffect, useState } from 'react'

import IconButton from '@mui/material/IconButton';
import FilterListIcon from '@mui/icons-material/FilterList';
import StraightIcon from '@mui/icons-material/Straight';

import { useMenuHandle } from '../../../../../../../hooks';

import './FilterMenu.scss';


export const FilterMenu = ({ handleOrderByChange }) => {

    const { menuOpen, handleMenu } = useMenuHandle();
    const [orderBy, setOrderBy] = useState('desc');

    useEffect(() => {

        handleOrderByChange(orderBy);
    }, [])

    const handleMenuFilter = (value) => {

        handleOrderByChange(value);
        setOrderBy(value);
        handleMenu();
    }


    return (
        <div className='container_FilterMenu'>

            <div className='container_FilterIcons'>
                <IconButton
                    color="inherit"
                    onClick={handleMenu}
                >
                    <FilterListIcon />
                </IconButton>

                <StraightIcon
                    sx={{
                        transform: (orderBy === 'asc') && 'rotate(180deg)'
                    }}
                />
            </div>

            <div
                className='FilterMenu'
                style={{
                    height: (menuOpen) && '100px',
                    transition: 'all 0.5s ease',
                }}
            >

                <ul
                    style={{
                        display: (!menuOpen) && 'none',
                        transition: 'all 0.5s ease',
                    }}>

                    <li onClick={() => handleMenuFilter('desc')} >
                        Mayor Precio
                    </li>

                    <li onClick={() => handleMenuFilter('asc')}>
                        Menor Precio
                    </li>

                </ul>

            </div>

            {
                (menuOpen)
                &&
                <div
                    className='backshadow'
                    onClick={handleMenu}>
                </div>
            }

        </div>
    )
}
