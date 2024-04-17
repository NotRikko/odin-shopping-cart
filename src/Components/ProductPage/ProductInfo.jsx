import NavBar from '../Common/NavBar'
import {useState} from 'react'
import './Products.css'

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
        <div className="productPage">
            <NavBar />
            <div className='productContainer'>
                <img src={product.image}></img>
                <div className='productInfo'>
                    <div className='productText'> 
                        <h1>{product.title}</h1>
                        <h2>${product.price}</h2>
                        <p>{product.description}</p>
                    </div>
                    <div className='productCheckout'>
                        <div className='quantity'>
                            <button onClick={handleAmountBtnDec}></button>
                            <input type="text" value={amount} onChange={handleAmount}/>
                            <button onClick={handleAmountBtnInc}></button>
                        </div>
                        <button>Add to cart</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductInfo