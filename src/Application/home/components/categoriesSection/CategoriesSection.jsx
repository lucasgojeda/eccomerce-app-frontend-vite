import { useCategoriesStore } from '../../../../hooks';

import { Category } from '../../../home';


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
