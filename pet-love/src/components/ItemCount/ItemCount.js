import './ItemCount.css'
import { Button } from "@mui/material";
import { useContext } from "react";
import CartContext from '../../context/CartContext';

const ItemCount = ({ quantity, setShowButton, data }) => {
    const { addProductToCart, addQuantity, substractQuantity } = useContext(CartContext)

    const onAddToCard = () => {
        addProductToCart(data, quantity)
        setShowButton(true)
    }

    return(
        <> 
            <label className='item-detail-label'>Seleccioná la candidad</label>
            <span onClick={addQuantity}>$ {data.price * quantity}</span>
            <div className="count-container">
                <div className='count-item'>
                    <Button disableRipple onClick={() => substractQuantity(data)} disabled={quantity === 1}>
                        -
                    </Button>
                    <p>{quantity}</p>
                    <Button disableRipple onClick={() => addQuantity(data)}>
                        +
                    </Button>
                </div>
                <Button color='secondary' variant='contained' onClick={onAddToCard}>Agregar al carrito</Button>
            </div>
        </>
    )
}

export default ItemCount