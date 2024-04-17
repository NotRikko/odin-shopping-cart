import Overlay from '../Common/Overlay'
import {Link} from 'react-router-dom'
import HomePageStyle from './HomePage.module.css'

function HomePage() {
    return (
        <>
            <Overlay />
            <div id={HomePageStyle.homePage}>
                <h1>Decadence Collection</h1>
                <h2>A taste of decay </h2>
                <Link to='products'><button>Shop Now</button></Link>
            </div>
        </>
    )
}

export default HomePage