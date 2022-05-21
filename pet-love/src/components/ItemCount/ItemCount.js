import './ItemCount.css'
import { Button } from "@mui/material";
import { useState } from "react";

const ItemCount = () => {
    const [count, setCount] = useState(1)
    const [stock, setStock] = useState(10);

    const addCount = () => {
        if(count < stock) {
            setCount( count + 1 )
        }
    }
    const subtractCount = () => {
        if(count > 0) {
            setCount( count - 1 )
        }
    }

    const onAddToCard = () => {
        setStock(console.log(`Cantidad a comprar: ${count}`))
    }

    return(
        <div className="count-container">
            <div className='count-item'>
                {/* <Button onClick={subtractCount} disabled={count == 0}>-</Button> */}
                <Button onClick={subtractCount}>-</Button>
                <p>{count}</p>
                <Button onClick={addCount}>+</Button>
            </div>
            <Button color='secondary' variant='contained' onClick={onAddToCard}>Comprar</Button>
        </div>
    )
}

export default ItemCount