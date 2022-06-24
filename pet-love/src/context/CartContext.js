import { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {    

    const [cartListItems, setCartListItems] = useState( JSON.parse(localStorage.getItem("products")) || [] )
    const [totalPrice, setTotalPrice] = useState(0)
    const [quantity, setQuantity] = useState(1)

    const addProductToCart = (product, quantity) => {
        let productAddedToCart = cartListItems.find(cartItem => cartItem.id === product.id)
        let isInCard = cartListItems.includes(productAddedToCart)
        if(!isInCard) {
            alert("El producto se agregó al carrito.")
            setTotalPrice(totalPrice + product.price)
            localStorage.setItem("products", JSON.stringify([...cartListItems, product]))
            return setCartListItems(cartListItems => [...cartListItems, product])
        }
        alert("El producto ya se encuentra en el carrito.")
    }

    const removeProductFromCart = (id) => {
        alert("El producto se eliminó del carrito.")
        let product = cartListItems.filter( (item) => item.id !== id )
        setCartListItems(product)
        localStorage.setItem('products', JSON.stringify(product))
    }

    const clearCart = () => {
        alert("El carrito está vacío.")
        setCartListItems([])
        localStorage.clear()
    }

    const addQuantity = (product) => {
        if (quantity < product.stock) {
            setQuantity(prev => prev + 1)
            setTotalPrice(totalPrice + product.price)
            console.log(product)
        }
    }
    const substractQuantity = (product) => {
        if (quantity > 0) {
            setQuantity(prev => prev - 1)
            setTotalPrice(totalPrice - product.price)
        }
    }

    const data = {
        cartListItems,
        addProductToCart,
        removeProductFromCart,
        clearCart,
        totalPrice,
        quantity,
        setQuantity,
        addQuantity,
        substractQuantity
    }

    return (
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext
export { CartProvider }