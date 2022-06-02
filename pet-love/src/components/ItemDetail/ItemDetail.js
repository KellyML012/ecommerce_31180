import "./ItemDetail.css"
import { sizes } from "../../helpers/strings";
import ItemCount from '../ItemCount/ItemCount';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { useState } from "react";

const ItemDetail = ( {data} ) => {
    const [size, setSize] = useState('');

    const handleChange = (event) => {
        setSize(event.target.value);
    };
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
                <ItemCount />
            </div>
        </div>
    )
}

export default ItemDetail