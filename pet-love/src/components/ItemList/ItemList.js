import './ItemList.css'
import CardItem from '../Card/Card';
import { Container } from '@mui/system';
import { Grid } from '@mui/material';
const ItemList = ( {title, products} ) => {
    
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

export default ItemList