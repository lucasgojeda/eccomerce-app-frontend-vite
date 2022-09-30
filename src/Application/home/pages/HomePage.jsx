import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

import { BestProducts } from '../../home';
import { CategoriesSection } from '../../home';


export const HomePage = () => {

    const theme = useTheme();
    const sm = useMediaQuery(theme.breakpoints.down('sm'));
    const md = useMediaQuery(theme.breakpoints.down('md'));
    const xl = useMediaQuery(theme.breakpoints.down('xl'));
    const lg = useMediaQuery(theme.breakpoints.down('lg'));


    return (
        <div className='container_HomePage'>

            <BestProducts />

            <CategoriesSection />

        </div>
    );
};