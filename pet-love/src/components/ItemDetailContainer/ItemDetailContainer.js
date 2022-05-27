import "./ItemDetailContainer.css"
import ItemDetail from "../ItemDetail/ItemDetail"
import { product } from "../../helpers/product"
import { useEffect, useState } from "react"

const ItemDetailContainer = () => {
    const [article, setArticle] = useState([])
    const getItem = () => {
        return new Promise( (resolve, reject) => {
            setTimeout( () => {
                resolve(product)
            }, 2000 )
        })
    }

    useEffect( () => {
        getItem()
        .then( (response) => {
            console.log("Respuesta getIem:", response)
            setArticle(response)
        })
        .catch( (error) => {
            console.log("Ha ocurrido un error", error)
        })
    }, [])

    return(
        <div className="detail-container">
            <h1>Detalle del producto</h1>
            <ItemDetail data={article} />
        </div>
    )
}

export default ItemDetailContainer