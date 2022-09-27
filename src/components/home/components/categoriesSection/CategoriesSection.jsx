import { useCategoriesStore } from '../../../../hooks';

import { Category } from './components/category/Category';

import './CategoriesSection.scss';


export const CategoriesSection = () => {

    const { categories } = useCategoriesStore();

    return (
        <div className='container_CategoriesSection'>
            {
                categories.map((e, i) => <Category key={i} category={e} />)
            }
        </div>
    )
}
