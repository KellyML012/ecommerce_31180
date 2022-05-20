import './Card.css'
import { Card, CardContent, Button } from "@mui/material"

const CardItem = ({ title, price, image} ) => {
    return(
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <div className="card-item">
                    <div>
                        <img src={`./${image}`} />
                    </div>
                    <p>{title}</p>
                    <span>$ {price}</span>
                    <Button variant='contained'>Detalle</Button>
                </div>
            </CardContent>
        </Card>
    )
}

export default CardItem