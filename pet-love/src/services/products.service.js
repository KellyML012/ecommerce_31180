import { doc, getDoc } from "firebase/firestore"
import { collection, getDocs} from "firebase/firestore"
import db from "../../services/firebaseConfig"

const getProducts = async (tipo) => {
    const productSnaptshot = await getDocs(collection(db, tipo))
    const productList = productSnaptshot.docs.map((doc) => {
        let product = doc.data()
        product.id = doc.id
        return product
    })
    return productList 
}

const getProduct = async (id) => {
    const docRef = doc(db, "products", id)
    const docSnaptshot = await getDoc(docRef)
    let product = docSnaptshot.data()
    product.id = docSnaptshot.id
    return product
}

export default getProduct
export { getProducts }