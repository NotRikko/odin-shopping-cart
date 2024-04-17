import {NavLink} from 'react-router-dom'
import {useCart} from '../../CartProvider'
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import HomeIcon from '@mui/icons-material/Home';
import StoreIcon from '@mui/icons-material/Store';
import './NavBar.css'

function NavBar({toggleCart}) {
    const {cartItems} = useCart();
    return (
        <nav>
            <h3>Umbral</h3>
            <ul>
                <li>
                    <NavLink exact to='/'><HomeIcon/></NavLink>
                </li>
                <li>
                    <NavLink exact to='/products'><StoreIcon/></NavLink>
                </li>
                <li>
                    <ShoppingBagIcon onClick={toggleCart} />
                    <span>{cartItems.length}</span>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar