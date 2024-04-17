import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import NavBar from '../Common/NavBar'
import ProductCard from './ProductCard'
import ProductInfo from './ProductInfo'
import './Products.css'

function ProductPage() {
    const [products, setProducts] = useState([]); 
    const [displayProduct, setDisplayProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    let { productID } = useParams();

   
    
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
                setLoading(false);
            }))
            .catch((error => console.error(error)));
        
    }, []);

    useEffect(() => {
        const productToDisplay = products.find((p) => p.title === decodeURIComponent(productID))
        setDisplayProduct(productToDisplay);
        console.log(productID);
    },[productID, products]);

    
    
    return (
        <>
        {productID && displayProduct? (
            <ProductInfo product = {displayProduct} />
            ) : (
            <div id='productPage'>
                <NavBar />
                <h1>Products</h1>
                <div id='products'>
                    {products.map((product, index) => (
                        <Link 
                            key={index}
                            to={`/products/${encodeURIComponent(product.title)}`
                        }
                        >
                            <ProductCard key={index} product={product} />
                        </Link>
                    ))}
                </div>
            </div>
            )
        }
        </>

    )
 }

export default ProductPage