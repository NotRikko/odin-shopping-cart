import {useState} from 'react'
import NavBar from "./NavBar"
import ShoppingCart from "./ShoppingCart/ShoppingCart"

function Overlay() {
    const [cartOpen, setCartOpen] = useState(false);
    
    const toggleCart = () => {
        setCartOpen(!cartOpen)
    }

    const clickOutCart = () => {
        setCartOpen(false);
    }
    return(
        <>
            <NavBar toggleCart={toggleCart} />
            {cartOpen && <ShoppingCart toggleCart={toggleCart} clickOut={clickOutCart} />}
        </>
    )
}

export default Overlay