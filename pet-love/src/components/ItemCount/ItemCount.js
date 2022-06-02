import './ItemCount.css'
import { Button } from "@mui/material";
import { useState } from "react";

const ItemCount = () => {
    const [count, setCount] = useState(1)
    const [stock, setStock] = useState(10);

    const addCount = () => {
        if(count < stock) {
            setCount( prev => prev + 1 )
        }
    }
    const subtractCount = () => {
        if(count > 0) {
            setCount( prev => prev - 1 )
        }
    }

    const onAddToCard = () => {
        setStock(console.log(`Cantidad a comprar: ${count}`))
    }

    return(
        <div className="count-container">
            <div className='count-item'>
                <Button disableRipple onClick={subtractCount}>-</Button>
                <p>{count}</p>
                <Button disableRipple onClick={addCount}>+</Button>
            </div>
            <Button color='secondary' variant='contained' onClick={onAddToCard}>Agregar al carrito</Button>
        </div>
    )
}

export default ItemCount