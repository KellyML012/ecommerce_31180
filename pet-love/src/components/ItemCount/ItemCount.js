import './ItemCount.css'
import { Button } from "@mui/material";
import { useState } from "react";

const ItemCount = ({ quantity, setQuantity, setShowButton }) => {
    const [stock, setStock] = useState(10);

    const addCount = () => {
        if(quantity < stock) {
            setQuantity( prev => prev + 1 )
        }
    }
    const subtractCount = () => {
        if(quantity > 0) {
            setQuantity( prev => prev - 1 )
        }
    }

    const onAddToCard = () => {
        setShowButton(true)
        setStock(console.log(`Cantidad a comprar: ${quantity}`))
    }

    return(
        <>
            <label className='item-detail-label'>Selecciona la candidad</label>
            <div className="count-container">
                <div className='count-item'>
                    <Button disableRipple onClick={subtractCount}>-</Button>
                    <p>{quantity}</p>
                    <Button disableRipple onClick={addCount}>+</Button>
                </div>
                <Button color='secondary' variant='contained' onClick={onAddToCard}>Agregar al carrito</Button>
            </div>
        </>
    )
}

export default ItemCount