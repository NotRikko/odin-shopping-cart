import { useState, useEffect } from 'react'
import NavBar from '../Common/NavBar'
import ProductCard from './ProductCard'
import './Products.css'

function ProductPage() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products?limit=15', {mode: 'cors'})
            .then((response) => {
                if(!response.ok) {
                    throw new Error('Issue with network response')
                }
                return response.json();
            })
            .then((response => {
                setProducts(response);
            }))
            .catch((error => console.error(error)));
        
    }, [])
    return (
        <div id='productPage'>
            <NavBar />
            <h1>Products</h1>
            <div id='products'>
                {products.map((product, index) => {
                    return <ProductCard
                                key={index}
                                imgURL={product.image}
                                name={product.title}
                                price={product.price} />
                })}
            </div>
        </div>
    )
}

export default ProductPage