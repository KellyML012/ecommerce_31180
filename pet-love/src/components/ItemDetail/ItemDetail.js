import "./ItemDetail.css"
import { sizes } from "../../helpers/strings";
import ItemCount from '../ItemCount/ItemCount';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { useState } from "react";
import { Link } from 'react-router-dom';
import { Button } from "@mui/material";

const ItemDetail = ( {data} ) => {
    const { id, title, price, image, category, description, stock} = data
    const [size, setSize] = useState('');
    const [quantity, setQuantity] = useState(1)
    const [showButton, setShowButton] = useState(false)

    const handleChange = (event) => {
        setSize(event.target.value);
    };

    return(
        <div className="detail">
            <div className="detail-image">
                <img src={`/${image}`} alt={`Producto: ${title}`} />
            </div>
            <div className="detail-info">
                <h1>{title}</h1>
                <FavoriteBorderIcon className="favorite-icon"/>
                <p className="detail-price">$ {price}</p>
                <p className="price-dues">
                    <CreditCardIcon />
                    <span><strong>3 cuotas sin interés</strong> de $ {Math.round((price)/3)}</span>
                </p>
                <p>{description}</p>
                <label>Seleccione un talle</label>
                <Select
                    value={size}
                    onChange={handleChange}
                    displayEmpty
                    inputProps={{ 'aria-label': 'Without label' }}
                >
                    <MenuItem value="">Tamaño</MenuItem>
                    {sizes.map((productSeize) => {
                        return <MenuItem value={productSeize} key={size}>{productSeize}</MenuItem>
                    })}
                </Select>
                {!showButton ?
                    <ItemCount 
                        quantity={quantity}
                        setQuantity={setQuantity}
                        setShowButton={setShowButton}
                    />                
                : 
                    <Link to={"/carrito"}>
                        <Button color='secondary' variant='outlined' className='finish-buy'>
                            Terminar mi compra
                        </Button>
                    </Link>
                }
            </div>
        </div>
    )
}

export default ItemDetail