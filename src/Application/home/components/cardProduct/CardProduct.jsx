

export const CardProduct = ({ product }) => {

    return (
        <div className='container_CardProduct'>

            <img src={product.img[0].imageUrl} alt='' />

        </div>
    )
}
