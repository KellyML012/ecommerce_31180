import ItemList from "../ItemList/ItemList";
import { products } from "../../helpers/products";
import { useEffect } from "react";

const ItemListContainer = () => {
    const getProducts = () => {
        return new Promise( (resolve, reject) => {
            resolve(products)
        })
    }

    useEffect( () => {
        getProducts()
            .then((response) => {
                console.log("Resuesta promesa : ", response)
            })
            .catch((error) => {
                console.log("Hubo una falla en el servicio.", error)
            })
    }, [])    

    /* async function getProductsAsync () {
        try {
            const productos = await getProducts()
            console.log("Productos asíncronos:", productos)
        } catch (error) {
            console.log("Falló la llamada.")
        }
    } 
    
    getProductsAsync()
    */

    return(
        <ItemList title={"Productos Recomendados"} products={products}/>
    )
}

export default ItemListContainer