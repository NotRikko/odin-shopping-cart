import Overlay from '../Common/Overlay'
import {useState} from 'react'
import ProductsStyle from './Products.module.css'

function ProductInfo({product}) {
    const [amount, setAmount] = useState(1);

    const handleAmount = (e) => {
        setAmount(e.target.value);
    }

    const handleAmountBtnInc = () => {
        setAmount(amount+1);
    }

    const handleAmountBtnDec = () => {
        setAmount(amount-1);
    }
   
    return (
        <>
            <Overlay />
            <div className={ProductsStyle.productPage}>
            <div className={ProductsStyle.productContainer}>
                <img src={product.image}></img>
                <div className={ProductsStyle.productInfo}>
                    <div className={ProductsStyle.productText}> 
                        <h1>{product.title}</h1>
                        <h2>${product.price}</h2>
                        <p>{product.description}</p>
                    </div>
                    <div className={ProductsStyle.productCheckout}>
                        <div className={ProductsStyle.quantity}>
                            <button onClick={handleAmountBtnDec}></button>
                            <input type="text" value={amount} onChange={handleAmount}/>
                            <button onClick={handleAmountBtnInc}></button>
                        </div>
                        <button>Add to cart</button>
                    </div>
                </div>
            </div>
        </div>
        </>
        
    )
}

export default ProductInfo