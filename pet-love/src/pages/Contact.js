import "./Contact.css"
import { Grid, TextField, Button, Card, CardContent, Typography } from "@mui/material";
import Footer from "./Footer";

const Contact = () => {
    return (
        <>
            <div className="contact-container">
                <h1>Página de Contacto</h1>
                <Grid>
                    <Card style={{ maxWidth: 800, padding: "20px 5px", margin: "0 auto" }}>
                        <CardContent>
                            <Typography gutterBottom variant="h4">
                                Contactános
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p" gutterBottom>
                                Completá tus datos y tu consulta. Te responderemos a la brevedad.
                            </Typography>
                            <form>
                                <Grid container spacing={1}>
                                    <Grid xs={12} sm={6} item>
                                        <TextField placeholder="Ingresá tu nombre" label="Nombre" variant="outlined" color="secondary" fullWidth required />
                                    </Grid>
                                    <Grid xs={12} sm={6} item>
                                        <TextField placeholder="Ingresá tu apellio" label="Apellido" variant="outlined" color="secondary" fullWidth required />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField type="Email" placeholder="Ingresá tu email" label="Email" variant="outlined" color="secondary" fullWidth required />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField type="number" placeholder="Ingresá tu número de teléfono" label="Teléfono" variant="outlined" color="secondary" fullWidth required />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField label="Mensaje" multiline rows={4} placeholder="Escribí tu mensaje acá" variant="outlined" color="secondary" fullWidth required />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Button type="submit" variant="contained" color="secondary" fullWidth>Enviar</Button>
                                    </Grid>

                                </Grid>
                            </form>
                        </CardContent>
                    </Card>
                </Grid>
            </div>
            <Footer />
        </>
    )
}

export default Contact