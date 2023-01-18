import Logo from '../../assets/fikret.jpg'
import './navbar.css'
import Data from './data'


function Navbar() {
    return (
        <nav id='navbar'>
            <div className="container nav_container">
                <a href="index.html" className='nav_logo'>
                    <img src={Logo} alt="Logo" />
                </a>
                <ul className='nav_menu'>
                    {Data.map(item => <li key={item.id}><a href={item.link}>{item.title}</a></li>)}
                </ul>
                
            </div>
        </nav>
    )
}

export default Navbar