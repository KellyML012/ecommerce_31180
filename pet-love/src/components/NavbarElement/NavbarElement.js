import { Button } from "@mui/material"
import { navbarOptions } from "../../helpers/strings"
import './NavbarElement.css'

const NavbarElement = () => {
    return (
        <ul className='navbar'>
            {navbarOptions.map(navbarOption => {
                return <li><Button disableRipple style={{ background: 'transparent' }} variant='text' className='navbar-btn'>{navbarOption}</Button></li>
            })}
        </ul>
    )
}

export default NavbarElement