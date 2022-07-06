import ItemList from "../ItemList/ItemList";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
//Firestore
import { collection, getDocs } from "firebase/firestore"
import db from "../../services/firebaseConfig";

const CategoryList = () => {
    const [productos, setProductos] = useState([])
    const { category } = useParams()

    const getProducts = async() => {
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

    useEffect( () => {
        getProducts()
        .then( (response) => {
                setProductos([])
                filterByCategory(response)
            })
            .catch((error) => {
                console.log("Hubo una falla en el servicio.", error)
            })
            // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [category])
    const uppercaseTitle = category.toUpperCase()

    return(
        <div className="item-list-container">
            <ItemList title={uppercaseTitle} products={productos}/>
        </div>
    )
}

export default CategoryList