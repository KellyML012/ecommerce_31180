import { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {    

    const [cartListItems, setCartListItems] = useState([])
    const [totalPrice, setTotalPrice] = useState(0)
    const [modifyQuantity, setModifyQuantity] = useState(0)

    const addProductToCart = (product, quantity) => {
        let productAddedToCart = cartListItems.find(cartItem => cartItem.id === product.id)
        let isInCard = cartListItems.includes(productAddedToCart)
        if(!isInCard) {
            alert("El producto se agregó al carrito.")
            quantity = 1
            product.quantity = quantity
            setTotalPrice(totalPrice + product.price * quantity)
            return setCartListItems(cartListItems => [...cartListItems, product])
        }
        alert("El producto ya se encuentra en el carrito.")
    }

    const removeProductFromCart = (id) => {
        alert("El producto se eliminó del carrito.")
        const newItemList = cartListItems.filter( (item) => {return item.id !== id} )
        setCartListItems(newItemList)
    }

    const clearCart = () => {
        alert("El carrito está vacío.")
        setCartListItems([])
        setTotalPrice(0)
    }

    /* const cartProductQuantity = () => {
        return cartListItems.reduce((previousValue, item) => previousValue + item.quantity, 1)
    } */

    const modifyProductsQuantity = (id, value) => {
        const products = cartListItems.find(item => item.id === id)
        products.quantity += value
        return setModifyQuantity(modifyQuantity + value)
    }

    const data = {
        cartListItems,
        addProductToCart,
        removeProductFromCart,
        clearCart,
        totalPrice,
        modifyProductsQuantity
    }

    return (
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext
export { CartProvider }