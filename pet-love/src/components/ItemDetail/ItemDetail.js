import "./ItemDetail.css"
import { sizes } from "../../helpers/strings";
import ItemCount from '../ItemCount/ItemCount';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { useContext, useState } from "react";
import { Link } from 'react-router-dom';
import { Button } from "@mui/material";
import CartContext from '../../context/CartContext';
import Banner from "../Banner/Banner";
import Footer from "../../pages/Footer";

const ItemDetail = ({ data }) => {
    const { title, price, image, description, stock } = data
    const [size, setSize] = useState('');
    const [showButton, setShowButton] = useState(false)

    let descriptionFormat = description.split("-")

    const [color, setRedColor] = useState(false)

    const handleColorChange = () => {
        setRedColor(current => !current)
    }

    const { quantity, setQuantity} = useContext(CartContext)

    const handleChange = (event) => {
        setSize(event.target.value);
    };

    return(
        <>
            <div className="detail">
                <div className="detail-image">
                    <img src={`/${image}`} alt={`Producto: ${title}`} />
                </div>
                <div className="detail-info">
                    <h1>{title} <FavoriteIcon
                        className="favorite-icon"
                        style={{color: color ? "#bb0b0b" : "#272343"}} 
                        onClick={handleColorChange} />
                    </h1>
                    <h1 className="detail-price">$ {price}</h1>
                    <div className="price-dues">
                        <p>
                            <CreditCardIcon />
                            <span><strong>3 cuotas sin interés</strong> de $ {Math.round((price)/3)}</span>
                        </p>
                        <p>
                            <AttachMoneyIcon />
                            <span>20% de descuento <strong>pagando en EFECTIVO</strong></span>
                        </p>
                    </div>
                    <p><strong>Stock:</strong> {stock} unidades</p>
                    <label>Seleccioná un talle</label><br/>
                    <Select
                        value={size}
                        onChange={handleChange}
                        displayEmpty
                        color="secondary"
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
                            data={data}
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
            <Banner pageHeight="auto" pageBackgound="#45C1F0">
                <div className="itemDetail-description">
                    <h1>Descripción</h1>
                    <div>
                        {descriptionFormat.map( (desc, index) => {
                            return <p key={index}>{desc}</p>
                        })}
                    </div>
                </div>
            </Banner>
            <Footer />
        </>
    )
}

export default ItemDetail