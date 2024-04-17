import { useState } from 'react'
import './ShoppingCart.css'
import CloseIcon from '@mui/icons-material/Close';

function ShoppingCart () {
    const [cartItems, setCartItems] = useState([
        {
            name: '',
            cost: 0,
            amount: 0,
        }
    ])
    
    const addCartItem = (product, amount) => {
        const cartItem = {
            name: product.name,
            cost: product.cost,
            amount: amount
        }
        setCartItems(cartItem)
    }

    return (
        <div id='shoppingCart'>
            <div id='cartHeader'>
                <h1>Cart</h1>
                <button><CloseIcon /></button>
            </div>
            <div id='cartItems'>
                <div className='cartItem'>
                    <img src='https://preview.redd.it/bijou-theres-something-weird-about-biboo-today-v0-hk3vkrzao9zb1.png?auto=webp&s=efed8226766cd72e291d005044f0c898216b2287'></img>
                    <div className='cartItemInfo'>
                        <h2>Test</h2>
                        <h2>$123</h2>
                        <div className='cartQuantity'>
                            <button />
                            <input type="text" />
                            <button />
                        </div>
                    </div>
                </div>
                <div className='cartItem'>
                    <img src='https://preview.redd.it/bijou-theres-something-weird-about-biboo-today-v0-hk3vkrzao9zb1.png?auto=webp&s=efed8226766cd72e291d005044f0c898216b2287'></img>
                    <div className='cartItemInfo'>
                        <h2>Test</h2>
                        <h2>$123</h2>
                        <div className='cartQuantity'>
                            <button />
                            <input type="text" />
                            <button />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ShoppingCart