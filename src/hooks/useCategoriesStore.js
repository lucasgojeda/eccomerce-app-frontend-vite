import { useDispatch, useSelector } from 'react-redux';

import ecommerceApi from '../api/ecommerceApi';

import {
    loadCategories,
} from "../store/slices/categoriesSlice";


export const useCategoriesStore = () => {

    const dispatch = useDispatch();
    const { categories } = useSelector(state => state.categories);


    const startLoadCategories = async () => {

        try {

            const { data: { categories: _categories, msg } } = await ecommerceApi.get('categories');


            if (_categories) {

                // const categories = categories;

                console.log(_categories)

                dispatch(loadCategories(_categories));

            } else {
                return console.log(msg);
            }


        } catch (error) {
            return console.log(error);
        }
    }


    return {
        //* Propiedades
        categories,

        //* Métodos
        startLoadCategories,
    }
}
