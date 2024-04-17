import { useState } from 'react'
import CartItem from './CartItem'
import shoppingStyles from './ShoppingCart.module.css'
import CloseIcon from '@mui/icons-material/Close'
import { useCart } from '../../../CartProvider'

function ShoppingCart ({toggleCart}) {
    
    const {cartItems, handleItemAmount} = useCart();

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
                            changeAmount={(e) => handleItemAmount(index, parseInt((e.target.value)))} />
                    )
                })}

            </div>
        </div>
    )
}

export default ShoppingCart