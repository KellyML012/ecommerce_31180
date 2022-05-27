import './NavbarElement.css'
import { Button } from "@mui/material"
//import { navbarOptions } from "../../helpers/strings"

const NavbarElement = () => {
    return (
        <ul className='navbar'>
            {/* {navbarOptions.map( ({navbarOption}) => {
                return (
                    <li>
                        <Button disableRipple style={{ background: 'transparent' }} variant='text' className='navbar-btn'>{navbarOption}</Button>
                    </li>
                )
            })} */}
            <li>
                <Button disableRipple style={{ background: 'transparent' }} variant='text' className='navbar-btn'>Inicio</Button>
            </li>
            <li>
                <Button disableRipple style={{ background: 'transparent' }} variant='text' className='navbar-btn'>Productos</Button>
            </li>
            <li>
                <Button disableRipple style={{ background: 'transparent' }} variant='text' className='navbar-btn'>Contacto</Button>
            </li>
            <li>
                <Button disableRipple style={{ background: 'transparent' }} variant='text' className='navbar-btn'>Preguntas Frecuentes</Button>
            </li>
        </ul>
    )
}

export default NavbarElement