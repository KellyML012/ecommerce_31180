import { AppBar, Button, Toolbar } from '@mui/material'
import './NavBar.css'

const NavBar = () => {
    return (
        <AppBar position='static' className='header-primary'>
            <Toolbar>
                <div className='container-logo'>
                    <span className='header-title'>Pet Love</span>
                </div>
                <ul className='navbar'>
                    <li>
                        <Button disableRipple style={{ background: 'transparent'}} variant='text' className='navbar-btn'>Inicio</Button>
                    </li>
                    <li>
                        <Button disableRipple style={{ background: 'transparent'}} variant='text' className='navbar-btn'>Productos</Button>
                    </li>
                    <li>
                        <Button disableRipple style={{ background: 'transparent'}} variant='text' className='navbar-btn'>Contacto</Button>
                    </li>
                    <li>
                        <Button disableRipple style={{ background: 'transparent'}} variant='text' className='navbar-btn'>Preguntas frecuentes</Button>
                    </li>
                </ul>
                <Button color='secondary' variant='outlined'>Login</Button>
            </Toolbar>
        </AppBar>
    )
}

export default NavBar