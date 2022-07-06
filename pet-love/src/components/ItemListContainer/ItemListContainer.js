import "./ItemListContainer.css"
import ItemList from "../ItemList/ItemList";
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'
//Firestore
import { collection, getDocs, query, where } from "firebase/firestore"
import db from "../../services/firebaseConfig";

const ItemListContainer = () => {
    const [productos, setProductos] = useState([])
    const { category } = useParams()

    useEffect( () => {
        setProductos([])
        getProducts()
            .then( (products) => {
                category ? filterFirebase() : setProductos(products)

            })
            .catch((error) => {
                console.log("Hubo una falla en el servicio.", error)
            })
            // eslint-disable-next-line
    }, [category])

    const getProducts = async () => {
        const productSnaptshot = await getDocs(collection(db, "products"))
        const productList = productSnaptshot.docs.map((doc) => {
            let product = doc.data()
            product.id = doc.id
            return product
        })
        return productList 
    }

    const filterFirebase = async() => {
        const productRef = collection(db, "products")
        const queryResult = query(productRef, where("category", "==", category))
        const querySnaptshot = await getDocs(queryResult)        
        const productList = querySnaptshot.docs.map((doc) => {
            let product = doc.data()
            product.id = doc.id
            return product
        })
        return setProductos(productList)
    }

    return(
        <div className="item-list-container">
            <ItemList products={productos}/>
        </div>
    )
}

export default ItemListContainer