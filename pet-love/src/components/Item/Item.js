import './Item.css'
import { Card, CardContent, Button } from "@mui/material"
import { useState, useContext } from 'react';
import Modal from '../Modal/Modal';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../context/ThemeContext';
import CartContext from '../../context/CartContext';

const Item = ({ title, price, image, id, stock }) => {

    const [open, setOpen] = useState(false)    
    const { darkTheme } = useContext(ThemeContext)
    const { addProductToCart } = useContext(CartContext)
    const handleClose = () => {
        setOpen(false)
    }

    return (
        <Card sx={{ minWidth: 275, maxWidth: 400 }} className={`item-card-container ${darkTheme ? 'dark-mode' : ''}`}>
            <CardContent className="card-item">
                <div className='card-item-image-container'>
                    <img src={`./${image}`} alt={`Producto: ${title}`} onClick={() => setOpen(true)} />
                </div>
                <p>{title}</p>
                <span>$ {price}</span>
                <Link to={`/producto/${id}`}>
                    <Button 
                        disableRipple 
                        color='secondary' 
                        variant='outlined'
                    >
                        Detalle
                    </Button>
                </Link>                
                <Button
                    disableRipple
                    color='secondary'
                    variant='contained'
                    className='item-card-button'
                    onClick={() => addProductToCart({ title, price, image, id, stock })}
                >
                    Agregar al carrito
                </Button>
            </CardContent>
            
            <Modal handleClose={handleClose} open={open}>
                <h2 className='modal-title'>{title}</h2>
                <img src={`./${image}`} alt={`Producto: ${title}`} />
            </Modal>
        </Card>
    )
}

export default Item