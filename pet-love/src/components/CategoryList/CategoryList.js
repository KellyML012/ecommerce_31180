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
        array.map( (article) => {
            // eslint-disable-next-line
            if(article.category == category) {
                return setProductos(productos => [...productos, article])
            };
            return article
        })
    }

    useEffect( () => {
        setProductos([])
        getProducts()
            .then( (response) => {
                filterByCategory(response)
            })
            .catch((error) => {
                console.log("Hubo una falla en el servicio.", error)
            })
            // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [category])

    return(
        <div className="item-list-container">
            <ItemList title={category.toUpperCase()} products={productos}/>
        </div>
    )
}

export default CategoryList