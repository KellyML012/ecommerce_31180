import "./Products.css"
import ItemListContainer from "../components/ItemListContainer/ItemListContainer"
import Footer from "./Footer"

const Products = () => {
    return(
        <>
            <h1>Catálogo de productos</h1>
            <ItemListContainer />
            <Footer />
        </>
    )
}

export default Products