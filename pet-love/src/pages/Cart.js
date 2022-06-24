import './Cart.css'
import { useContext } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import { Container, Button } from '@mui/material';
import CartContext from '../context/CartContext';
import { Link } from 'react-router-dom';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';

const Cart = () => {
    
    const { cartListItems, removeProductFromCart, totalPrice, quantity, addQuantity, substractQuantity } = useContext(CartContext)

    return (
        <>
            {cartListItems.length === 0
            ?
            <>
                <h2>No hay productos agregados al carrito.</h2>
                <Link to="/productos" className='cart-buy'>Empezar a comprar</Link>
            </>
            :
            <Container className='cart-general-container'>
                <h2>Checkout</h2>
                <div className='cart-section'>
                    <div className='col-cart-table__head'>
                        <h2>Producto</h2>
                        <h2>Descripción</h2>
                        <h2>Precio unitario</h2>
                        <h2>Cantidad</h2>
                        <h2>Quitar</h2>
                    </div>
                    {cartListItems.map( (item) => {
                        const { id, title, image, price, stock} = item
                        return (
                            <div className='cart-table__content' key={id}>
                                <div className='cart-table__content-img'>
                                    <img src={`./${image}`} alt={title} />
                                </div>
                                <div className='cart-table__content-title'>
                                    <p>{title}</p>
                                </div>
                                <div className='cart-table__content-price'>
                                    <p>{price}</p>
                                </div>
                                <div className='cart-table__content-quantity'>
                                    <Button
                                        disableRipple
                                        color='secondary' variant='outlined'
                                        onClick={() => substractQuantity(item)}
                                        disabled={quantity === 1}
                                        className='cart-table__quantity-button'
                                    >
                                        <RemoveCircleOutlineIcon />
                                    </Button>
                                    <p>{quantity}</p>
                                    <Button
                                        disableRipple
                                        color='secondary' variant='outlined'
                                        onClick={() => addQuantity(item)}
                                        disabled={stock < quantity}
                                        className='cart-table__quantity-button'
                                    >
                                        <AddCircleOutlineIcon />
                                    </Button>
                                </div>
                                <div className='cart-table__content-delete'>
                                    <button onClick={() => removeProductFromCart(id)}>
                                        <DeleteIcon color='secondary' variant='outlined' className='delete-icon'/>
                                    </button>
                                </div>
                            </div>                        
                        )
                    })}
                    <div className='cart-footer'>
                        <Button
                            color='secondary'
                            variant='outlined'
                            className='btn-custom'
                        >
                            <Link to={"/productos"}>Continuar comprando</Link>
                        </Button>
                        <div className='cart-checkout-details'>
                            <div className='cart-checkout__total'>
                                <p>Total</p>
                                <span>{`$ ${totalPrice}`}</span>
                            </div>
                            <Button
                                color='secondary'
                                variant='contained'
                                className='btn-custom'
                            >
                                Completar compra
                            </Button>
                        </div>
                    </div>
                </div>
            </Container>
            }
        </>
    )
}

export default Cart