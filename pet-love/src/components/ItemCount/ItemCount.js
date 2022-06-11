import './ItemCount.css'
import { Button } from "@mui/material";
import { useState, useContext } from "react";
import CartContext from '../../context/CartContext';

const ItemCount = ({ quantity, setQuantity, setShowButton, data }) => {
    const { addProductToCart } = useContext(CartContext)
    const [stock, setStock] = useState(10);

    const addCount = () => {
        if(quantity < stock) {
            setQuantity( prev => prev + 1 )
        }
    }
    const substractCount = () => {
        if(quantity > 0) {
            setQuantity( prev => prev - 1 )
        }
    }

    const onAddToCard = () => {
        addProductToCart(data, quantity)
        setShowButton(true)
    }

    return(
        <>
            <label className='item-detail-label'>Selecciona la candidad</label>
            <div className="count-container">
                <div className='count-item'>
                    <Button disableRipple onClick={substractCount}>-</Button>
                    <p>{quantity}</p>
                    <Button disableRipple onClick={() => addCount()}>+</Button>
                </div>
                <Button color='secondary' variant='contained' onClick={onAddToCard}>Agregar al carrito</Button>
            </div>
        </>
    )
}

export default ItemCount