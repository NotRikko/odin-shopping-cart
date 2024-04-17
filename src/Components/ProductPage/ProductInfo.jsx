import {useState} from 'react'
import {useCart} from '../../CartProvider'
import {PropTypes} from 'prop-types'
import Overlay from '../Common/Overlay'
import ProductsStyle from './Products.module.css'

function ProductInfo({product}) {
    const [amount, setAmount] = useState(1);

    const handleAmount = (e) => {
        let updatedValue = parseInt(e.target.value);
        if(isNaN(updatedValue)) {
            updatedValue = 1;
        }
        setAmount(updatedValue);
    }

    const handleAmountBtnInc = () => {
        setAmount(amount+1);
    }

    const handleAmountBtnDec = () => {
        setAmount(amount-1);
    }

    const {addCartItem} = useCart();
   
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
                        <button onClick ={() => addCartItem(product, amount)}>Add to cart</button>
                    </div>
                </div>
            </div>
        </div>
        </>
        
    )
}

ProductInfo.propTypes = {
    product: PropTypes.object,
}


export default ProductInfo

