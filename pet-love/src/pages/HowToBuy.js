import "./HowToBuy.css"
import Footer from "./Footer"

const HowToBuy = () => {
    return (
        <>
            <h1>¿Cómo comprar?</h1>
            <div class="how-to-buy-container">
                <p>A continuación, pasos para comprar a través de Pet Love:</p>
                <h2>Comprar es fácil:</h2>
                <ol>
                    <li>Elegí el producto que deseas comprar.</li>
                    <li>Hacé clic en el botón de "Agregar al carrito". Esto agregará el producto a tu carrito y te llevará al mismo.</li>
                    <li>Podés seguir agregando otros productos al carrito o sino haz clic en "Terminar Compra".</li>
                    <li>Completá tus datos de contacto.</li>
                    <li>Ingresá la dirección a donde deseas recibir el producto. Luego hacé clic en "Enviar".</li>
                    <li>Elegí el medio de pago.
                        <ul>
                            <li>También podés seleccionar la opción de "Efectivo - Local".</li>
                            <li>Una vez que hayas elegido el medio de pago, hacé clic en "Continuar".</li>
                        </ul>
                    </li>
                    <li>Finalmente en la página de Confirmación de compra podés revisar toda la información de la compra.</li>
                    <li>Ahí serás redirigido a otra pantalla encriptada segura para que completes los datos sobre la forma de pago elegida. Después de confirmar la compra recibirás un correo de nuestra parte.</li>
                    <li>Una vez acreditado el pago, haremos el envío correspondiente de los productos que hayas comprado.</li>
                </ol>
                <p>Si tenés alguna duda o consulta podés llamarnos al (+54) 9 11 35125630 o escribínos a ventas@petlove.com</p>
            </div>
            <Footer />
        </>
    )
}

export default HowToBuy