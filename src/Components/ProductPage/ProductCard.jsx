function ProductCard({product}) {
    return (
        <div className='productCard'>
            <img src={product.image}></img>
            <div className='cardText'>
                <h3>{product.title}</h3>
                <h3>${product.price}</h3>
            </div>
        </div>
    )
}

export default ProductCard