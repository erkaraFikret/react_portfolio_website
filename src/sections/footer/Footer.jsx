import { links, socials } from './data'
import './footer.css'

function Footer() {
    return (
        <footer id='footer'>
            <div className='container footer_container'>
                <ul className='nav_menu'>
                    {
                        links.map(fLink => <li key={fLink.id}><a href={fLink.link}>{fLink.title}</a></li>)
                    }
                </ul>
                <div className="footer_socials">
                    {
                        socials.map(social => <a href={social.link} target="_blank" rel='noopener noreferrer'>{social.icon}</a>)
                    }
                </div>
            </div>
            <div className="footer_copyright">
                <small>2023 FİKRET ERKARA  &copy;  Tüm Hakları Saklıdır</small>
            </div>
        </footer>
    )
}

export default Footer