import './ItemList.css'
import { Grid } from '@mui/material';
import Item from '../Item/Item';

const ItemList = ( {title, products} ) => {
    
    return(
        <>
            <h2>{title}</h2>
            <div className='item-list-general'>
                <Grid container spacing={2}>
                {products.map(({ title, price, image, id, stock }) => {
                    return (
                        <Grid item xs={2} sm={4} md={4} key={id}>
                            <Item title={title} price={price} image={image} id={id} stock={stock}/>
                        </Grid>
                    )
                })}
                </Grid>
            </div>
        </>
    )
}

export default ItemList