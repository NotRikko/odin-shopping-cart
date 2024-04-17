import shoppingStyles from './ShoppingCart.module.css'


function CartItem({product, changeAmount, deleteItem}) { 
    return (
        <div className={shoppingStyles.cartItem}>
                    <img src={product.image}></img>
                    <div className={shoppingStyles.cartItemInfo}>
                        <h2>{product.name}</h2>
                        <h2>${product.cost}</h2>
                        <div className={shoppingStyles.cartItemBottom}>
                        <div className={shoppingStyles.cartQuantity}>
                            <button>-</button>
                            <input type="text" value={product.amount} onChange={changeAmount} />
                            <button>+</button>
                        </div>
                        <button className={shoppingStyles.removeBtn} onClick={deleteItem}>Remove</button>
                        </div>
                    </div>
                </div>
    )
}

export default CartItem