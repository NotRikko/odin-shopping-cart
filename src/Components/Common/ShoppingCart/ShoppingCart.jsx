import { useState } from 'react'
import CartItem from './CartItem'
import shoppingStyles from './ShoppingCart.module.css'
import CloseIcon from '@mui/icons-material/Close'

function ShoppingCart ({toggleCart}) {
    const [cartItems, setCartItems] = useState([
        {
            name: 'Biboo',
            cost: 125,
            amount: 4,
            image: 'https://preview.redd.it/bijou-theres-something-weird-about-biboo-today-v0-hk3vkrzao9zb1.png?auto=webp&s=efed8226766cd72e291d005044f0c898216b2287',
        },
        {
            name: 'Biboo',
            cost: 150,
            amount: 1,
            image: 'https://preview.redd.it/bijou-theres-something-weird-about-biboo-today-v0-hk3vkrzao9zb1.png?auto=webp&s=efed8226766cd72e291d005044f0c898216b2287',
        }
    ])
    
    const addCartItem = (product, amount) => {
        const cartItem = {
            name: product.name,
            cost: product.cost,
            amount: amount,
            image: product.image
        }
        setCartItems(cartItem)
    }

    const handleItemAmount = (index, newAmount) => {
        const updatedCartItems = [...cartItems];
        updatedCartItems[index] = {
            ...updatedCartItems[index],
            amount: newAmount
        }
        setCartItems(updatedCartItems);
    };

    return (
        <div id={shoppingStyles.shoppingCart}>
            <div id={shoppingStyles.cartHeader}>
                <h1>Cart</h1>
                <button onClick={toggleCart}><CloseIcon /></button>
            </div>
            <div id={shoppingStyles.cartItems}>
                {cartItems.map((item, index) => {
                    return (
                        <CartItem
                            key={index}
                            product={item}
                            changeAmount={(e) => handleItemAmount(index, e.target.value)} />
                    )
                })}

            </div>
        </div>
    )
}

export default ShoppingCart