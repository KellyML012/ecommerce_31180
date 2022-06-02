import './Item.css'
import { Card, CardContent, Button } from "@mui/material"
import { useState } from 'react';
import Modal from '../Modal/Modal';
import { Link } from 'react-router-dom';

const Item = ({ title, price, image, id, stock} ) => {
    const [open, setOpen] = useState(false)
    const handleClose = () => {
        setOpen(false)
    }

    return (
        <Card>
            <CardContent sx={{ minWidth: 275, maxWidth: 400 }} className="card-item">
                <div className='card-item-image-container'>
                    <img src={`./${image}`} alt={`Producto: ${title}`} onClick={() => setOpen(true)} />
                </div>
                <p>{title}</p>
                <span>$ {price}</span>
                <Link to={`/producto/${id}`}>
                    <Button disableRipple color='secondary' variant='outlined'>
                        Detalle
                    </Button>
                </Link>
            </CardContent>
            
            <Modal handleClose={handleClose} open={open}>
                <h2 className='modal-title'>{title}</h2>
                <img src={`./${image}`} alt={`Producto: ${title}`} />
            </Modal>
        </Card>
    )
}

export default Item