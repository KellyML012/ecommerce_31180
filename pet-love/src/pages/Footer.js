import "./Footer.css"
import CallIcon from '@mui/icons-material/Call';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="footer-section">
                <div>
                    <h6>Navegación</h6>
                    <Link to="/productos"><p>Productos</p></Link>
                    <Link to="/contacto"><p>Contacto</p></Link>
                    <Link to="/como-comprar"><p>¿Cómo comprar?</p></Link>
                </div>
                <div>
                    <img src="/medios-de-pago.png" alt="Imagen de medios de pago"/>
                </div>
                <div>
                    <h6>Contactános</h6>
                    <p><CallIcon /> (+54) 9 11 35125630</p>
                    <p><AlternateEmailIcon /> petlove@gmail.com</p>
                    <p><LocationOnIcon /> Palermo, Ciudad de Bs. As.</p>
                </div>
            </div>
            <div className="copyright">
                <p>Pet Love© 2022</p>
                <div className="social-media">
                    <Link to="#"><InstagramIcon /></Link>
                    <Link to="#"><TwitterIcon /></Link>
                    <Link to="#"><FacebookIcon /></Link>
                </div>
            </div>
        </div>
    )
}

export default Footer