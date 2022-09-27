import './CardProduct.scss';


export const CardProduct = ({ product }) => {

    // console.log(product)

    return (
        <div className='container_CardProduct'>

            <img src={product.img[0].imageUrl} alt='' />

        </div>
    )
}
