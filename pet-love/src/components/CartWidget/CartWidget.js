import './CartWidget.css'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import DeleteIcon from '@mui/icons-material/Delete';
import Menu from '@mui/material/Menu';
import { useState, useContext } from 'react';
import CartContext from '../../context/CartContext';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

const CartWidget = () =>  {

    const { cartListItems, removeProductToCart, clearCart } = useContext(CartContext)

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    }
    const handleClose = () => {
        setAnchorEl(null);
    }

    return(
        <div className='cart-container-icon'>
            <ShoppingCartIcon
                color='secondary'
                variant='outlined'
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            />
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
                            <Link to="/cucha">Empezar a comprar</Link>
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
                            <div className='item-cart-prod' key={item.id}>
                                <div className='cart-prod__image'>
                                    <img src={`/${item.image}`} alt={item.price} />
                                </div>
                                <div className='cart-prod__info'>
                                    <p>{item.title}</p>
                                    <span>$ {item.price}</span>
                                </div>
                                <div className='cart-prod__action'>
                                    <button onClick={removeProductToCart}>
                                        <DeleteIcon color='secondary' variant='outlined' className='delete-icon'/>
                                    </button>
                                </div>
                            </div>
                        )
                    })}                    
                </div>
            </Menu>
        </div>
    )
}

export default CartWidget