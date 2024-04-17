import {useState} from 'react'
import NavBar from "./NavBar"
import ShoppingCart from "./ShoppingCart/ShoppingCart"

function Overlay() {
    const [cartOpen, setCartOpen] = useState(false);
    
    const toggleCart = () => {
        setCartOpen(!cartOpen)
    }
    return(
        <>
            <NavBar toggleCart={toggleCart} />
            {cartOpen && <ShoppingCart toggleCart={toggleCart} />}
        </>
    )
}

export default Overlay