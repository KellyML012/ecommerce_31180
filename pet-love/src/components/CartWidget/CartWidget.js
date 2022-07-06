import './CartWidget.css'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import DeleteIcon from '@mui/icons-material/Delete';
import Menu from '@mui/material/Menu';
import { useState, useContext } from 'react';
import CartContext from '../../context/CartContext';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

const CartWidget = () =>  {

    const { cartListItems, removeProductFromCart, clearCart } = useContext(CartContext)

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    }
    const handleClose = () => {
        setAnchorEl(null);
    }

    return(
        <div className='cartWidgtet-container-icon'>
            <div onClick={handleClick}>
                <ShoppingCartIcon
                    fontSize='large'
                    color='inherit'
                    variant='outlined'
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                />
                <span className='cartWidgtet-count'>{cartListItems.length}</span>
            </div>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{ 'aria-labelledby': 'basic-button', }}
            >
                <div className='container-item-list-cart'>
                    {cartListItems.length === 0 ? (
                        <>
                            <p>No hay productos agregados al carrito.</p>
                            <Link to="/productos/cucha">Empezar a comprar</Link>
                        </>
                    )
                    :
                    (
                        <Button
                            color='secondary'
                            variant='outlined'
                            onClick={clearCart}
                        >
                            Vaciar carrito
                        </Button>
                    )
                    }
                    {cartListItems.map( (item) => {
                        return(
                            <div className='item-cartWidgtet-prod' key={item.id}>
                                <div className='cartWidgtet-prod__image'>
                                    <img src={`/${item.image}`} alt={item.title} />
                                </div>
                                <div className='cartWidgtet-prod__info'>
                                    <p>{item.title}</p>
                                    <span>$ {item.price}</span>
                                </div>
                                <div className='cartWidgtet-prod__action'>
                                    <button onClick={() => removeProductFromCart(item.id)}>
                                        <DeleteIcon color='secondary' variant='outlined' className='delete-icon'/>
                                    </button>
                                </div>
                            </div>
                        )
                    })}
                    {cartListItems.length === 0 ? 
                        ""
                        :
                        <div className='cartWidget-finish-buy'>
                            <Link to={"/carrito"}>
                                <Button
                                    color='secondary'
                                    variant='contained'
                                >
                                    Terminar compra
                                </Button>
                            </Link>
                        </div>
                    }
                </div>
            </Menu>
        </div>
    )
}

export default CartWidget