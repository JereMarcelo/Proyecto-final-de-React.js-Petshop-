import './Footer.css'
import { Link } from 'react-router-dom'


const Footer = () => {  
    return (
<footer>
        <div class="container-fluid">
            <div class="row justify-content-evenly " id="fondoFooter">
                <div className="col-md-4 footerIzq d-flex flex-column  col-4 justify-center align-center" id="footerIzq">

                    <h2 className='titulo1'> Nosotros </h2>

                    <p className='texto'> Nuestra Empresa desde hace mas de 5 años se dedica a la comercialización de las mas diversas marcas de alimento y productos para nuestras queridas mascotas. Así mismo ofrecemos nuestro servicio de asesoramiento y asistencia Profesional.</p>

                </div>
                <div className=' col-4 justify-center align-center'>
                <Link id="item" to = '/'> <img className='logo'  src= 'https://i.pinimg.com/originals/fa/83/71/fa8371812bac7c144689254f677ca962.png'  /></Link>
                </div>
                <div className=' col-4 justify-center align-center' id='footerDer'> 
                    <h2 className='textoDerecha'>Contactanos</h2>
                    <p className='textoDerecha'>San Martin 500 – 9000<br></br>

                        Comodoro Rivadavia - Chubut<br></br>

                        Telefonos: 297-4719229 | 297-123456<br></br>

                        tiendapetshop@gmail.com.com</p>
                </div>
                <div></div>
            </div>
        </div>
</footer> 
)}



export default Footer