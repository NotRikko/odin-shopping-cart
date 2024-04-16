import {NavLink} from 'react-router-dom'
import './NavBar.css'

function NavBar() {
    return (
        <nav>
            <h3>Umbral</h3>
            <ul>
                <li>
                 <NavLink>Home</NavLink>
                </li>
                <li>
                 <NavLink>Products</NavLink>
                </li>
                <li>
                 <NavLink>Cart</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar