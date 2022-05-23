import './CardList.css'
import CardItem from '../Card/Card';
import { Container } from '@mui/system';
import { Grid } from '@mui/material';
import { products } from "../../helpers/products";
import { useEffect } from 'react';

const CardList = ( {title} ) => {
    
    const getProducts = () => {
        return new Promise( (resolve, reject) => {
            resolve(products)
        })
    }

    useEffect( () => {
        getProducts()
            .then((response) => {
                console.log("Resuesta promesa : ", response)
            })
            .catch((error) => {
                console.log("Hubo una falla en el servicio.", error)
            })
    }, [])    

    /* async function getProductsAsync () {
        try {
            const productos = await getProducts()
            console.log("Productos asíncronos:", productos)
        } catch (error) {
            console.log("Falló la llamada.")
        }
    } 
    
    getProductsAsync()
    */

    return(
        <>
            <h2>{title}</h2>
            <Container>
                <Grid container spacing={2} className='general-container'>
                    {products.map( ({title, price, image, id}) => {
                        return (
                            <>
                                <Grid item md={3} key={id}>
                                    <CardItem title={title} price={price} image={image} />
                                </Grid>
                            </>
                        )
                    })}
                </Grid>
            </Container>
        </>
    )
}

export default CardList