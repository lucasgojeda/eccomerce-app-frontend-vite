import { useProductsStore } from '../../../../../../hooks';

import { CardProduct } from '../../../../../home';


export const Category = ({ category }) => {

    const { products } = useProductsStore();


    return (
        <div className='container_Category'>

            <div className='container_Title'>
                <h3>{category.name}</h3>
            </div>

            <div className='container_Cards'>

                {
                    products.map((e, i) => (i < 4) && <CardProduct
                        key={i}
                        product={e}
                    />)
                }

            </div>

        </div>
    )
}
