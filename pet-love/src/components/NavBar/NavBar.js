import './NavBar.css'
import { AppBar, Toolbar } from '@mui/material'
import NavbarElement from '../NavbarElement/NavbarElement'
import CartWidget from '../CartWidget/CartWidget' 


const NavBar = () => {
    return (
        <AppBar position='static' className='header-primary'>
            <Toolbar>
                <div className='container-logo'>
                    <span className='header-title'>Pet Love</span>
                </div>
                <NavbarElement />
                <CartWidget />
            </Toolbar>
        </AppBar>
    )
}

export default NavBar