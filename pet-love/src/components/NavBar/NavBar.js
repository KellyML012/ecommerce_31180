import './NavBar.css'
import { AppBar, Toolbar } from '@mui/material'
import NavbarElement from '../NavbarElement/NavbarElement'
import ThemeSwitch from './ThemeSwitch'
import CartWidget from '../CartWidget/CartWidget' 
import { Link } from 'react-router-dom'
import { ThemeContext } from '../../context/ThemeContext'
import { useContext } from 'react'


const NavBar = () => {
    const { darkTheme } = useContext(ThemeContext)
    return (
        <AppBar position='static' className={`header-primary ${darkTheme ? 'dark-mode' : '' }`}>
            <Toolbar className='header-container'>
                <Link to={"/"}>
                    <div className='container-logo'>
                        <img src={`${darkTheme ? "/logo-blanco.png" : "/logo.png"}`} alt='Logo de Pet Love'/>
                    </div>
                    <span className='header-title'>Pet Love</span>
                </Link>
                <NavbarElement />
                <ThemeSwitch />
                <CartWidget />
            </Toolbar>
        </AppBar>
    )
}

export default NavBar