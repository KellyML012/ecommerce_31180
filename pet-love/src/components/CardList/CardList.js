import './CardList.css'
import CardItem from '../Card/Card'
import { Container } from '@mui/system';
import { Grid } from '@mui/material';

const CardList = () => {
    const productos = [
        {
            id : 1,
            title : "Cama Moisés",
            price : 3.500,
            image : 'Cama-moises-01.png'
        },
        {
            id : 2,
            title : "Cama para perros mediana",
            price : 6.500,
            image : 'Cama-perro-01.png'
        },
        {
            id : 3,
            title : "Cucha Térmica grande",
            price : 9.000,
            image : "Cucha-perro-02.png"
        }
    ]

    return(
        <>
            <h2>
                Productos recomendados
            </h2>
            <Container>
                <Grid container className='general-container'>
                    <Grid item md={3}>
                        <CardItem title={'Cama Moisés'} price={'3.500'} image={'Cama-moises-01.png'} />
                    </Grid>
                    <Grid item md={3}>
                        <CardItem title={'Cama para perros mediana'} price={'6.500'} image={'Cama-perro-01.png'} />
                    </Grid>
                    <Grid item md={3}>
                        <CardItem title={'Cucha Térmica grande'} price={'9.000'} image={'Cucha-perro-02.png'} />
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

export default CardList