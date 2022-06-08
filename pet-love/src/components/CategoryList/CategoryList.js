import ItemList from "../ItemList/ItemList";
import { products } from "../../helpers/products";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CategoryList = () => {
    const [productos, setProductos] = useState([])
    const { category } = useParams()

    const getProducts = () => {
        return new Promise( (resolve, reject) => {
            setTimeout( () => {
                resolve(products)
            }, 1000);
        })
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