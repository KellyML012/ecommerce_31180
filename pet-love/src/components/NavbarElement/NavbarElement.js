import './NavbarElement.css'
import { Button } from "@mui/material"
import navbarOptions from '../../helpers/strings'
import { Link } from 'react-router-dom'

const NavbarElement = () => {
    return (
        <ul className='navbar'>
            {navbarOptions.map( ( {link, navbar} ) => {
                return (
                    <li>
                        <Button 
                            disableRipple 
                            style={{ background: 'transparent' }} 
                            variant='text' 
                            className='navbar-btn'
                        >
                            <Link to={ link }>{ navbar }</Link>
                        </Button>
                    </li>
                )
            })}
        </ul>
    )
}

export default NavbarElement