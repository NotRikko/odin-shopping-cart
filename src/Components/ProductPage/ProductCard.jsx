import ProductsStyle from './Products.module.css'

function ProductCard({product}) {
    return (
        <div className={ProductsStyle.productCard}>
            <img src={product.image}></img>
            <div className={ProductsStyle.cardText}>
                <h3>{product.title}</h3>
                <h3>${product.price}</h3>
            </div>
        </div>
    )
}

export default ProductCard