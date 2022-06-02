import "./ItemListContainer.css"
import ItemList from "../ItemList/ItemList";
import { products } from "../../helpers/products";
import { useEffect, useState } from "react";

const ItemListContainer = () => {
    const [productos, setProductos] = useState([])

    const getProducts = () => {
        return new Promise( (resolve, reject) => {
            resolve(products)
        })
    }

    useEffect( () => {
        getProducts()
            .then( (response) => {
                setProductos(response)
            })
            .catch((error) => {
                console.log("Hubo una falla en el servicio.", error)
            })
    }, [])

    return(
        <div className="item-list-container">
            <ItemList title={"Productos Recomendados"} products={productos}/>
        </div>
    )
}

export default ItemListContainer