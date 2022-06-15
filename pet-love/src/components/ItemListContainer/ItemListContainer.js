import "./ItemListContainer.css"
import ItemList from "../ItemList/ItemList";
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'
//Firestore
import { collection, getDocs } from "firebase/firestore"
import db from "../../config/firebaseConfig";

const ItemListContainer = () => {
    const [productos, setProductos] = useState([])
    const { category } = useParams()

    useEffect( () => {
        setProductos([])
        getProducts()
            .then( (products) => {
                category ? filterByCategory(products) : setProductos(products)

            })
            .catch((error) => {
                console.log("Hubo una falla en el servicio.", error)
            })
    }, [])

    const getProducts = async () => {
        const productSnaptshot = await getDocs(collection(db, "products"))
        const productList = productSnaptshot.docs.map((doc) => {
            let product = doc.data()
            product.id = doc.id
            return product
        })
        return productList 
    }

    const filterByCategory = (array) => {
        return array.filter( article =>
            article.category === category && setProductos(productos => [...productos, article])
        )
    }

    return(
        <div className="item-list-container">
            <ItemList title={"Productos Recomendados"} products={productos}/>
        </div>
    )
}

export default ItemListContainer