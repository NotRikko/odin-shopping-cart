import {NavLink} from 'react-router-dom'
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import HomeIcon from '@mui/icons-material/Home';
import StoreIcon from '@mui/icons-material/Store';
import './NavBar.css'

function NavBar() {
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
                 <NavLink><ShoppingBagIcon/></NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar