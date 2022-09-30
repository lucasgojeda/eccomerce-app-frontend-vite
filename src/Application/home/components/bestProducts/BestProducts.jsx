import { useProductsStore } from '../../../../hooks';

import { CardProduct } from '../../../home';


export const BestProducts = () => {

  const { products } = useProductsStore();


  return (
    <div className='container_BestProducts'>

      <div className='container_title'>
        <h3>Lo más vendido</h3>
      </div>

      <div className='container_cards'>
        {
          products.map((e, i) => (i < 3) && <CardProduct key={i} product={e} />)
        }
      </div>

    </div>
  )
}
