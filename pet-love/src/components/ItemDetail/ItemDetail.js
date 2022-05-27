import "./ItemDetail.css"
import ItemCount from '../ItemCount/ItemCount';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useState } from "react";

const ItemDetail = ( {data} ) => {
    const [size, setSize] = useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setSize(event.target.value);
    };
    return(
        <div className="detail">
            <div className="detail-image">
                <img src={`./${data.image}`} alt={`Producto: ${data.title}`} />
            </div>
            <div className="detail-info">
                <h1>{data.title}</h1>
                <p className="detail-price">$ {data.price}</p>
                <p className="price-dues">
                    <CreditCardIcon />
                    <span><strong>3 cuotas sin interés</strong> de $ {Math.round((data.price)/3)}</span>
                </p>
                <p>{data.description}</p>
                <p>
                    <Select
                        value={size}
                        onChange={handleChange}
                        displayEmpty
                        inputProps={{ 'aria-label': 'Without label' }}
                    >
                        <MenuItem value="">
                            <em>Tamaño</em>
                        </MenuItem>
                        <MenuItem value={1}>Pequeño</MenuItem>
                        <MenuItem value={2}>Mediano</MenuItem>
                        <MenuItem value={3}>Grande</MenuItem>
                    </Select>
                </p>
                <ItemCount />
            </div>
        </div>
    )
}

export default ItemDetail