import CartItem from './CartItem'
import shoppingStyles from './ShoppingCart.module.css'
import CloseIcon from '@mui/icons-material/Close'
import CircleRoundedIcon from '@mui/icons-material/CircleRounded';
import { useCart } from '../../../CartProvider'
import { useEffect, useRef } from 'react'
import {PropTypes} from 'prop-types'

function ShoppingCart ({ toggleCart, clickOut }) {    
    const {cartItems, handleItemAmount, removeCartItem, totalCost} = useCart();
    const cartRef = useRef(null);

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (cartRef.current && !cartRef.current.contains(event.target)) {
                clickOut(); 
            }
        };

        document.addEventListener('mousedown', handleOutsideClick);

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    },);
 

    return (
        <div id={shoppingStyles.shoppingCart} ref={cartRef}>
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
                            changeAmount={(e) => handleItemAmount(index, parseInt((e.target.value)))}
                            deleteItem={() => removeCartItem(index) } />
                    )
                })}

            </div>
            <div id={shoppingStyles.cartCheckout}>
                <p>Shipping & taxes calculated at checkout</p>
                <button id={shoppingStyles.checkoutBtn}>Checkout <CircleRoundedIcon sx={{ fontSize: 10 }}/>  ${totalCost}</button>
            </div>
        </div>
    )
}

ShoppingCart.propTypes = {
    toggleCart: PropTypes.function,
    clickOut: PropTypes.function,
}

export default ShoppingCart