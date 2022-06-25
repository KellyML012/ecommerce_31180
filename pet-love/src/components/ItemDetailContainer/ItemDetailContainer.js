import "./ItemDetailContainer.css"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner.js";
import { doc, getDoc } from "firebase/firestore"
import db from "../../services/firebaseConfig"

const ItemDetailContainer = () => {
    const { id } = useParams()
    const [product, setProduct] = useState([])

    useEffect( () => {
        getProduct()
        .then( (prod) => {
            setProduct(prod)
        })
    }, [id])

    const getProduct = async () => {
        const docRef = doc(db, "products", id)
        const docSnaptshot = await getDoc(docRef)
        let product = docSnaptshot.data()
        product.id = docSnaptshot.id
        return product
    }

    return(
        <>
            {product.id === undefined ?
                <LoadingSpinner display={{ display: 'flex' }} />
                :
                <div className="detail-container">
                    <h1>Detalle del producto</h1>
                    <ItemDetail data={product} />
                </div>
            }
        </>
    )
}

export default ItemDetailContainer