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
    const [size, setSize] = useState('');
    const [quantity, setQuantity] = useState(1)
    const [showButton, setShowButton] = useState(false)

    const handleChange = (event) => {
        setSize(event.target.value);
    };

    const addProductToCart = () => {
        console.log("Producto a agregar", data)
        console.log("Cantidad", quantity)
    }

    return(
        <div className="detail">
            <div className="detail-image">
                <img src={`/${data.image}`} alt={`Producto: ${data.title}`} />
            </div>
            <div className="detail-info">
                <h1>{data.title}</h1>
                <FavoriteBorderIcon />
                <p className="detail-price">$ {data.price}</p>
                <p className="price-dues">
                    <CreditCardIcon />
                    <span><strong>3 cuotas sin interés</strong> de $ {Math.round((data.price)/3)}</span>
                </p>
                <p>{data.description}</p>
                <label>Seleccione un talle</label>
                <p>
                    <Select
                        value={size}
                        onChange={handleChange}
                        displayEmpty
                        inputProps={{ 'aria-label': 'Without label' }}
                    >
                        <MenuItem value="">Tamaño</MenuItem>
                        {sizes.map( (productSeize) => {
                            return <MenuItem value={productSeize}>{productSeize}</MenuItem>
                        })}
                    </Select>
                </p>
                {!showButton ?
                    <ItemCount 
                        quantity={quantity}
                        setQuantity={setQuantity}
                        setShowButton={setShowButton}
                    />                
                : 
                    <Button color='secondary' variant='outlined' className='finish-buy'>
                        <Link to={"/cart"}>Terminar mi compra</Link>
                    </Button>
                }
            </div>
        </div>
    )
}

export default ItemDetail