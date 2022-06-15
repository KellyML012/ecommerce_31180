import './Cart.css'
import { useState, useContext } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import { Container, Button, TextField } from '@mui/material';
import CartContext from '../context/CartContext';
import { Link } from 'react-router-dom';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import Modal from '../components/Modal/Modal';
import {addDoc, collection} from "firebase/firestore"
import db from '../config/firebaseConfig';
import { useNavigate } from 'react-router-dom';

const Cart = () => {

    const { cartListItems, removeProductFromCart, totalPrice, modifyProductsQuantity, clearCart } = useContext(CartContext)
    const [showModal, setShowModal] = useState(false);
    const [formValue, setFormValue] = useState({
        name: "",
        phone: "",
        email: ""
    })
    const [order, setOrder] = useState({
        buyer: {},
        items: cartListItems.map( item => {
            return{
                id: item.id,
                title: item.title,
                price: item.price
            }
        }),
        total: totalPrice
    })
    const [success, setSuccess] = useState()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        setOrder({...order, buyer: formValue})
        saveData({...order, buyer: formValue})
    }

    const handleChange = (e) => {
        //[e.target.name] into brackets to caputre its value - variable value into an object
        setFormValue({...formValue, [e.target.name] : e.target.value})
    }

    const saveData = async (newOrder) =>{
        const orderFirebase = collection(db, "orders")
        const orderDoc = await addDoc(orderFirebase, newOrder)
        setSuccess(orderDoc.id)
    }
    
    const finishOrder = () => {
        clearCart()
        navigate("/")
    }

    return (
        <>
            {cartListItems.length === 0
            ?
            <>
                <h2>No hay productos agregados al carrito.</h2>
                <Link to="/productos" className='cart-buy'>Empezar a comprar</Link>
            </>
            :
            <Container className='cart-general-container'>
                <h2>Checkout</h2>
                <div className='cart-section'>
                    <div className='col-cart-table__head'>
                        <h2>Producto</h2>
                        <h2>Descripción</h2>
                        <h2>Precio unitario</h2>
                        <h2>Cantidad</h2>
                        <h2>Quitar</h2>
                    </div>
                    {cartListItems.map( (item) => {
                        const { id, title, image, price, quantity, stock} = item
                        return (
                            <div className='cart-table__content' key={id}>
                                <div className='cart-table__content-img'>
                                    <img src={`./${image}`} alt={title} />
                                </div>
                                <div className='cart-table__content-title'>
                                    <p>{title}</p>
                                </div>
                                <div className='cart-table__content-price'>
                                    <p>{price}</p>
                                </div>
                                <div className='cart-table__content-quantity'>
                                    <Button
                                        disableRipple
                                        color='secondary' variant='outlined'
                                        onClick={() => modifyProductsQuantity(id, -1)}
                                        disabled={quantity === 1}
                                        className='cart-table__quantity-button'
                                    >
                                        <RemoveCircleOutlineIcon />
                                    </Button>
                                    <p>{quantity}</p>
                                    <Button
                                        disableRipple
                                        color='secondary' variant='outlined'
                                        onClick={() => modifyProductsQuantity(id, +1)}
                                        disabled={stock < quantity}
                                        className='cart-table__quantity-button'
                                    >
                                        <AddCircleOutlineIcon />
                                    </Button>
                                </div>
                                <div className='cart-table__content-delete'>
                                    <button onClick={() => removeProductFromCart(id)}>
                                        <DeleteIcon color='secondary' variant='outlined' className='delete-icon'/>
                                    </button>
                                </div>
                            </div>                        
                        )
                    })}
                    <div className='cart-footer'>
                        <Button
                            color='secondary'
                            variant='outlined'
                            className='btn-custom'
                        >
                            <Link to={"/productos"}>Continuar comprando</Link>
                        </Button>
                        <div className='cart-checkout-details'>
                            <div className='cart-checkout__total'>
                                <p>Total</p>
                                <span>{`$ ${totalPrice}`}</span>
                            </div>
                            <Button
                                color='secondary'
                                variant='contained'
                                className='btn-custom'
                                onClick={() => {
                                    setShowModal(true)                                    
                                    formValue.name = ""
                                    formValue.phone = ""
                                    formValue.email = ""
                                }}
                            >
                                Completar compra
                            </Button>
                        </div>
                    </div>
                </div>
                <Modal
                    title={success ? "Compra exitosa" : "Formulario de contacto"}
                    open={showModal}
                    handleClose={() => setShowModal(false)}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    {success ? 
                        (
                            <div style={{width: "400px"}}>
                                <p>¡La orden se generó con éxito!</p>
                                <p>
                                    Este es tu número de orden: <strong> {success}</strong>
                                </p>
                                <Button
                                    color='secondary'
                                    variant='outlined'
                                    onClick={finishOrder}
                                >
                                    Enviar
                                </Button>
                            </div>
                        ) : 
                        (
                            <form className='form-contact' onSubmit={handleSubmit}>
                                <TextField
                                    id="outlined-basic"
                                    name="name"
                                    label="Nombre y apellido"
                                    variant="outlined"
                                    value={formValue.name}
                                    margin="dense"
                                    color='secondary'
                                    onChange={handleChange}
                                />
                                <TextField
                                    id="outlined-basic"
                                    name="phone"
                                    label="Teléfono"
                                    variant="outlined"
                                    value={formValue.phone}
                                    margin="dense"
                                    color='secondary'
                                    onChange={handleChange}
                                />
                                <TextField
                                    id="outlined-basic"
                                    name="email"
                                    label="Email"
                                    variant="outlined"
                                    value={formValue.email}
                                    margin="dense"
                                    color='secondary'
                                    onChange={handleChange}
                                />
                                <Button
                                    color='secondary'
                                    variant='outlined'
                                    type="submit"
                                >
                                    Enviar
                                </Button>
                            </form>
                        )
                    }
                </Modal>
            </Container>
            }
        </>
    )
}

export default Cart