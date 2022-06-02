import "./ItemDetailContainer.css"
import ItemDetail from "../ItemDetail/ItemDetail"
import { products } from "../../helpers/products"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

const ItemDetailContainer = () => {
    const { id } = useParams()
    const [product, setProduct] = useState([])
    const navigate = useNavigate()

    const productFilter = products.find( (product) => {
        // eslint-disable-next-line
        return product.id == id
    })

    useEffect( () => {
        if (productFilter === undefined) {
            navigate('/NotFound')
        } else {
            setProduct(productFilter)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id])

    return(
        <div className="detail-container">
            <h1>Detalle del producto</h1>
            <ItemDetail data={product} />
        </div>
    )
}

export default ItemDetailContainer