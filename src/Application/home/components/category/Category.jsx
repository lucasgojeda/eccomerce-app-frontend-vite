import { useState } from 'react';

import IconButton from '@mui/material/IconButton';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

import { useProductsStore } from '../../../../hooks';

import { CardProduct } from '../../../home';


export const Category = ({ category, index }) => {

    const { products } = useProductsStore();

    const slideLeft = () => {
        var slider = document.getElementById(`${'slider' + index}`);

        slider.scrollLeft = slider.scrollLeft - 500;
    }
    
    const slideRight = () => {
        var slider = document.getElementById(`${'slider' + index}`);

        slider.scrollLeft = slider.scrollLeft + 500;
    }


    return (
        <div className='container_Category'>

            <div className='container_Title'>
                <h3>{category.name}</h3>
            </div>

            <div className='container_ArrowsAndCards'>

                <IconButton
                    id='leftArrowIcon'
                    // disabled={(products.length === 0 || products.length === 1 || counter <= 1)}
                    color="primary"
                    component="span"
                    onClick={slideLeft}
                >
                    <ArrowLeftIcon />
                </IconButton>

                <div id={`${'slider' + index}`} className='container_Cards'>
                    {
                        category.products.map((e, i) => <div key={i}>
                            <CardProduct
                                product={{...e, category: {name: category.name}}}
                            />
                        </div>)
                    }
                </div>

                <IconButton
                    id='rightArrowIcon'
                    // disabled={(products.length === 0 || products.length === 1 || counter >= 5 || counter >= products.length)}
                    color="primary"
                    component="span"
                    onClick={slideRight}
                >
                    <ArrowRightIcon />
                </IconButton>

            </div>

        </div>
    )
}
