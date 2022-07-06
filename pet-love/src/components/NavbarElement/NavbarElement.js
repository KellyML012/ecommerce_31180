import './NavbarElement.css'
import { Button, Menu, MenuItem } from "@mui/material"
import navbarOptions from '../../helpers/strings'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const NavbarElement = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const categories = ["cama", "cucha", "ropa"]

    return (
        <ul className='navbar'>
            {navbarOptions.map( ( {link, navbar, submenu} ) => {
                return (
                    <li key={navbar}>
                        {submenu ?
                        <>
                            <Button
                                id="basic-button"
                                aria-controls={open ? 'basic-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                                onClick={handleClick}
                                disableRipple
                                variant='text'
                                className='navbar-btn'
                            >
                                <Link to="#">{navbar}</Link>
                            </Button>
                            <Menu
                                id="basic-menu"
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                                MenuListProps={{
                                    'aria-labelledby': 'basic-button',
                                }}
                            >
                                {categories.map((cat, index) => {
                                    return (
                                        <MenuItem onClick={handleClose} key={index}>
                                            <Link to={`/productos/${cat}`}>{cat}</Link>
                                        </MenuItem>
                                    )
                                })}
                            </Menu>
                        </>
                        :
                            <Button 
                                disableRipple
                                variant='text' 
                                className='navbar-btn'
                            >
                                <Link to={ link }>{ navbar }</Link>
                            </Button>
                        }
                    </li>
                )
            })}
        </ul>
    )
}

export default NavbarElement