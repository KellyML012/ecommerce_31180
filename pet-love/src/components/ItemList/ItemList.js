import './ItemList.css'
import { Grid } from '@mui/material';
import Item from '../Item/Item';

const ItemList = ( {title, products} ) => {
    
    return(
        <>
            <h2>{title}</h2>
            <div className='item-list-general'>
                {products.map(({ title, price, image, id }) => {
                    return (
                        <Grid container spacing={2} item md={3} key={id}>
                            <Item title={title} price={price} image={image} />
                        </Grid>
                    )
                })}
            </div>
        </>
    )
}

export default ItemList