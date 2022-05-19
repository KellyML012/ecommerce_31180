import { AppBar, Button, Toolbar } from '@mui/material'
import NavbarElement from '../NavbarElement/NavbarElement'
import './NavBar.css'

const NavBar = () => {
    return (
        <AppBar position='static' className='header-primary'>
            <Toolbar>
                <div className='container-logo'>
                    <span className='header-title'>Pet Love</span>
                </div>
                <NavbarElement />
                <Button color='secondary' variant='outlined'>Login</Button>
            </Toolbar>
        </AppBar>
    )
}

export default NavBar