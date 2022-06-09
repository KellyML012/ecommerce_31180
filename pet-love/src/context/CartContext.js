import { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {    

    const [cartListItems, setCartListItems] = useState([])

    const addProductToCart = (product) => {
        let isInCard = cartListItems.find(cartItem => cartItem.id === product.id)
        if(!isInCard) {
            alert("El producto se agregó al carrito.")
            return setCartListItems(cartListItems => [...cartListItems, product])
        }
        alert("El producto ya se encuentra en el carrito.")
    }

    const removeProductToCart = (id) => {
        alert("El producto se eliminó del carrito.")
        const newItemList = cartListItems.filter( (item) => {return item.id !== id} )
        setCartListItems(newItemList)
    }

    const clearCart = () => {
        alert("El carrito está vacío.")
        setCartListItems([])
    }

    const data = {
        cartListItems,
        addProductToCart,
        removeProductToCart,
        clearCart
    }

    return (
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext
export { CartProvider }