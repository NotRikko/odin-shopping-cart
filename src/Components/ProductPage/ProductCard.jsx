function ProductCard({imgURL, name, price}) {
    return (
        <div className="productCard">
            <img src={imgURL}></img>
            <h3>{name}</h3>
            <h3>${price}</h3>
        </div>
    )
}

export default ProductCard