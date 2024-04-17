import NavBar from '../Common/NavBar'
import {Link} from 'react-router-dom'
import './HomePage.css'

function HomePage() {
    return (
        <div id='homePage'>
            <NavBar />
            <h1>Decadence Collection</h1>
            <h2>A taste of decay </h2>
            <Link to='products'><button>Shop Now</button></Link>
        </div>
    )
}

export default HomePage