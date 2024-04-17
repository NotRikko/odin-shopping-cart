import {NavLink} from 'react-router-dom'
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import HomeIcon from '@mui/icons-material/Home';
import StoreIcon from '@mui/icons-material/Store';
import './NavBar.css'

function NavBar({toggleCart}) {
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
                </li>
            </ul>
        </nav>
    )
}

export default NavBar