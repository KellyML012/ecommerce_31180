import './Item.css'
import { Card, CardContent, Button } from "@mui/material"
import { useState } from 'react';
import Modal from '../Modal/Modal';
import ItemCount from '../ItemCount/ItemCount';

const Item = ({ title, price, image} ) => {
    
    const [open, setOpen] = useState(false)
    const handleClose = () => {
        setOpen(false)
    }

        return(
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <div className="card-item">
                    <div>
                        <img src={`./${image}`} alt={`Producto: ${title}`}/>
                    </div>
                    <p>{title}</p>
                    <span>$ {price}</span>
                    <Button color='secondary' variant='outlined' onClick={() => setOpen(true)}>Detalle</Button>
                    <ItemCount />
                </div>
            </CardContent>
            <Modal handleClose={handleClose} open={open}>
                <h2>Detalle</h2>
                <img src={`./${image}`} alt={`Producto: ${title}`} />
            </Modal>
        </Card>
    )
}

export default Item