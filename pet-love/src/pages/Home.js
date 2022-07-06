import "./Home.css"
import PetsIcon from '@mui/icons-material/Pets';
import ItemListContainer from "../components/ItemListContainer/ItemListContainer"
import Banner from "../components/Banner/Banner"
import { Button } from "@mui/material"
import { Link } from 'react-router-dom';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import PaidIcon from '@mui/icons-material/Paid';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Footer from "./Footer";

const Home = () => {
    return(
        <>
            <Banner pageHeight="93vh" pageBackgound="#F6DE00">
                <div className="banner-title-1">
                    <h1>OFERTAR</h1>
                    <h2>en camas para tus mascotas</h2>
                    <h3>¡Para un invierno sin frío!</h3>
                    <Button
                        color='secondary'
                        variant='contained'
                    >
                        <Link to="/productos">Ver productos</Link>
                    </Button>
                </div>
                <img
                    src="./perro-banner.png"
                    alt="Imagen para banner: perro en cama moisés"
                    className="banner-image-1"
                />
                <PetsIcon
                  color='secondary'
                  variant='contained'
                  sx={{ fontSize: "80px", transform: "rotate(315deg)", position: "absolute", left: "35vw", top: "59vh" }}
                />
                <PetsIcon
                  color='secondary'
                  variant='contained'
                  sx={{ fontSize: "80px", transform: "rotate(343deg)", position: "absolute", left: "42vw", top: "70vh" }}
                />
                <PetsIcon
                  color='secondary'
                  variant='contained'
                  sx={{ fontSize: "80px", transform: "rotate(23deg)", position: "absolute", left: "45vw", top: "53vh" }}
                />
            </Banner>

            <Banner>
                <div className="banner-2">
                    <div className="banner-2__image">
                        <img src="./gato-banner-2.png" alt="Imagen para banner Page 2: Gato rubio"/>
                    </div>                    
                    <div className="banner-2-container">
                        <h3>Tienda online para mascotas y animales</h3>
                        <h5>Encuentra productos para mascotas y accesorios al mejor precio y calidad. Más de 250 marcas y xxx productos a tu disposición.</h5>
                    </div>
                </div>

                <div className="content-below">
                    <h3>Buscás productos para tus máscotas</h3>
                    <img src="/banner-mascotas.png" alt="Mascotas" />
                </div>
                <div className="banner2-line">
                    <img src="/line-banner.png" alt="Línea punteada" />
                </div>
            </Banner>
            <Banner pageHeight="auto" pageBackgound="#45C1F0">
                <div className="banner-3-container">
                    <h3>Productos destacados</h3>
                    <div className="banner-3-button">
                        <Link to={"/productos"}><Button>Todas</Button></Link>
                        <Link to={"/productos/cama"}><Button>Camas</Button></Link>
                        <Link to={"/productos/cucha"}><Button>Cuchas</Button></Link>
                        <Link to={"/productos/ropa"}><Button>Ropa</Button></Link>
                    </div>
                    <ItemListContainer />
                    <Link to={"/productos"}>
                        <h4>Ver todos los productos</h4>
                    </Link>
                </div>
            </Banner>
            <Banner pageHeight="71.5vh">
                <div className="line-bone">
                    <img src="/bone-line-banner.png" alt="Línea punteada con dibujo de hueso" />
                </div>
                <div className="banner-4-container">
                    <div>
                        <LocalShippingIcon
                            sx={{ fontSize: "100px", color: "#525252"  }}
                        />
                        <h6>Hacemos envíos a todo el país</h6>
                        <span>Oca y Correo Argentino</span>
                    </div>
                    <div>
                        <PaidIcon
                            sx={{ fontSize: "100px", color: "#525252"  }}
                        />
                        <h6>20% off en efectivo</h6>
                        <span>Únicamente en CABA y GBA</span>
                    </div>
                    <div>
                        <WhatsAppIcon
                            sx={{ fontSize: "100px", color: "#525252" }}
                        />
                        <h6>Consultanos cualquier duda</h6>
                        <span>Te responderemos lo antes posible</span>
                    </div>
                </div>
                <div className="banner-4-pets">
                    <img src="./pets-banner.png" alt="Imagen de mascotas"/>
                </div>
            </Banner>
            <Footer />
        </>
    )
}

export default Home