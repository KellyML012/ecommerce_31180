import './NavBar.css'
import { AppBar, Toolbar } from '@mui/material'
import NavbarElement from '../NavbarElement/NavbarElement'
import CartWidget from '../CartWidget/CartWidget' 
import { Link } from 'react-router-dom'


const NavBar = () => {
    return (
        <AppBar position='static' className='header-primary'>
            <Toolbar>
                <Link to={"/"}>
                    <div className='container-logo'>
                        <img src='./logo.png' alt='Logo de Pet Love'/>
                    </div>
                    <span className='header-title'>Pet Love</span>
                </Link>
                <NavbarElement />
                <CartWidget />
            </Toolbar>
        </AppBar>
    )
}

export default NavBar